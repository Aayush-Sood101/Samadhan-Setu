const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Requisition = require('../models/Requisition');
const PDFDocument = require('pdfkit');
const ExcelJS = require('exceljs');

// Generate PDF report
router.get('/pdf', auth, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ message: 'Access denied' });

  const requisitions = await Requisition.find().populate('userId', 'regNo name');
  const doc = new PDFDocument({ margin: 50 });
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=report.pdf');
  doc.pipe(res);

  // Add title and date
  doc.fontSize(20).text('Maintenance Requisitions Report', { align: 'center' });
  doc.fontSize(12).text(`Generated on: ${new Date().toLocaleString()}`, { align: 'center' });
  doc.moveDown(2);

  // Define table layout
  const tableTop = 150;
  const colWidth = [40, 60, 75, 50, 40, 70, 80, 85, 60];
  const rowHeight = 30;
  let currentTop = tableTop;

  // Helper function to create table cell
  function drawTableCell(text, x, width, isHeader = false) {
    doc.rect(x, currentTop, width, rowHeight).stroke();
    const textOptions = {
      width: width - 6,
      align: 'left',
      lineBreak: true
    };
    
    // Position text in the center of the cell
    doc.fontSize(isHeader ? 10 : 9);
    const textHeight = doc.heightOfString(text, textOptions);
    const vertPadding = Math.max(0, (rowHeight - textHeight) / 2);
    
    doc.text(text, x + 3, currentTop + vertPadding, textOptions);
  }

  // Draw table headers
  const headers = ['#', 'Reg No', 'Name', 'Block', 'Room', 'Category', 'Type of Work', 'Status', 'Date'];
  let xPos = 50;
  
  headers.forEach((header, i) => {
    drawTableCell(header, xPos, colWidth[i], true);
    xPos += colWidth[i];
  });
  
  currentTop += rowHeight;

  // Draw table rows
  requisitions.forEach((req, index) => {
    // Check if we need a new page
    if (currentTop > doc.page.height - 100) {
      doc.addPage();
      currentTop = 50;
      
      // Redraw headers on new page
      xPos = 50;
      headers.forEach((header, i) => {
        drawTableCell(header, xPos, colWidth[i], true);
        xPos += colWidth[i];
      });
      currentTop += rowHeight;
    }
    
    // Draw row data
    xPos = 50;
    
    // Column 1: Index
    drawTableCell((index + 1).toString(), xPos, colWidth[0]);
    xPos += colWidth[0];
    
    // Column 2: Reg No
    drawTableCell(req.userId.regNo, xPos, colWidth[1]);
    xPos += colWidth[1];
    
    // Column 3: Name
    drawTableCell(req.userId.name, xPos, colWidth[2]);
    xPos += colWidth[2];
    
    // Column 4: Block
    drawTableCell(req.block, xPos, colWidth[3]);
    xPos += colWidth[3];
    
    // Column 5: Room
    drawTableCell(req.roomNumber, xPos, colWidth[4]);
    xPos += colWidth[4];
    
    // Column 6: Category
    drawTableCell(req.category, xPos, colWidth[5]);
    xPos += colWidth[5];
    
    // Column 7: Type of Work
    drawTableCell(req.typeOfWork, xPos, colWidth[6]);
    xPos += colWidth[6];
    
    // Column 8: Status
    drawTableCell(req.status, xPos, colWidth[7]);
    xPos += colWidth[7];
    
    // Column 9: Date
    drawTableCell(new Date(req.createdAt).toLocaleDateString(), xPos, colWidth[8]);
    
    currentTop += rowHeight;
  });

  // Add footer with page numbers
  const totalPages = doc.bufferedPageRange().count;
  for (let i = 0; i < totalPages; i++) {
    doc.switchToPage(i);
    doc.fontSize(8).text(
      `Page ${i + 1} of ${totalPages}`,
      50,
      doc.page.height - 50,
      { align: 'center' }
    );
  }

  doc.end();
});

// Generate Excel report
router.get('/excel', auth, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ message: 'Access denied' });

  const requisitions = await Requisition.find().populate('userId', 'regNo name');
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Requisitions');

  worksheet.columns = [
    { header: 'ID', key: 'id', width: 10 },
    { header: 'Reg No', key: 'regNo', width: 15 },
    { header: 'Name', key: 'name', width: 20 },
    { header: 'Block', key: 'block', width: 10 },
    { header: 'Room', key: 'room', width: 10 },
    { header: 'Category', key: 'category', width: 20 },
    { header: 'Type of Work', key: 'typeOfWork', width: 20 },
    { header: 'Comments', key: 'comments', width: 30 },
    { header: 'Status', key: 'status', width: 15 },
    { header: 'Created At', key: 'createdAt', width: 20 },
  ];

  requisitions.forEach(req => {
    worksheet.addRow({
      id: req._id,
      regNo: req.userId.regNo,
      name: req.userId.name,
      block: req.block,
      room: req.roomNumber,
      category: req.category,
      typeOfWork: req.typeOfWork,
      comments: req.comments || 'N/A',
      status: req.status,
      createdAt: req.createdAt.toLocaleString(),
    });
  });

  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  res.setHeader('Content-Disposition', 'attachment; filename=report.xlsx');
  await workbook.xlsx.write(res);
  res.end();
});

module.exports = router;
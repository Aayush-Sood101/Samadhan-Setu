import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import RequisitionList from '../components/RequisitionList';
import axios from 'axios';

const AdminDashboard = () => {
  const { user, logout } = useContext(AuthContext);

  const handleDownloadPDF = async () => {
    try {
      const res = await axios.get('/api/reports/pdf', {
        responseType: 'blob',
        headers: { 'x-auth-token': localStorage.getItem('token') },
      });
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'report.pdf');
      document.body.appendChild(link);
      link.click();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDownloadExcel = async () => {
    try {
      const res = await axios.get('/api/reports/excel', {
        responseType: 'blob',
        headers: { 'x-auth-token': localStorage.getItem('token') },
      });
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'report.xlsx');
      document.body.appendChild(link);
      link.click();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <header className="bg-white shadow-md px-8 py-5 flex justify-between items-center sticky top-0 z-10 border-b border-slate-200">
        <div className="flex items-center space-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-[#137dc5]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v4" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 3v4" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11h6" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 15h6" />
          </svg>
          <span className="font-bold text-2xl text-[#112d4e]">Admin Dashboard</span>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="flex items-center bg-slate-100 px-4 py-2 rounded-lg text-[#112d4e] font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-[#137dc5]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span>{user.name} <span className="text-slate-500">({user.regNo})</span></span>
          </div>
          <button
            onClick={logout}
            className="flex items-center bg-[#137dc5] hover:bg-[#0049B7] text-white font-medium py-2 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
            Logout
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Reports</h2>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={handleDownloadPDF} 
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-md transition-colors duration-200 shadow-sm hover:shadow flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF Report
            </button>
            <button 
              onClick={handleDownloadExcel} 
              className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-md transition-colors duration-200 shadow-sm hover:shadow flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Excel Report
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <RequisitionList isAdmin={true} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
# Samadhan Setu - Maintenance Requisition System

## Overview

Samadhan Setu is a web application designed to streamline campus maintenance management. It provides an intuitive platform for students to submit maintenance requests for their dormitories and for administrators to manage these requests efficiently.

## Features

### For Students
- User-friendly interface to submit maintenance requisitions
- Support for various maintenance categories (Electrical, Plumbing, Cleaning, Internet, Laundry, etc.)
- Option to attach photo evidence of maintenance issues
- Real-time tracking of requisition status
- Secure authentication system

### For Administrators
- Comprehensive dashboard to view all student requisitions
- Update requisition status (Pending, In Progress, Completed)
- Generate and download detailed reports in PDF or Excel format
- User management system

## Tech Stack

### Frontend
- React (v19.0.0)
- React Router DOM (v7.4.0)
- Axios for API requests
- Framer Motion for animations
- Tailwind CSS for styling

### Backend
- Node.js with Express
- MongoDB with Mongoose ORM
- JWT for authentication
- Multer for file uploads
- PDFKit and ExcelJS for report generation

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/samadhan-setu.git
cd samadhan-setu
```

2. Install dependencies for both client and server
```bash
# Install root dependencies
npm install

# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

3. Create the uploads folder in the server directory
```bash
mkdir -p server/uploads
```

4. Set up the MongoDB database
```bash
# Start MongoDB service (if not already running)
# For Windows
net start MongoDB

# For macOS
brew services start mongodb-community

# For Linux
sudo systemctl start mongod

```

5. Start the development servers
```bash
# Start backend server
cd server
npm run dev

# In a new terminal, start frontend
cd client
npm run dev
```


## Project Structure

```
samadhan-setu/
├── client/                # React frontend
│   ├── public/            # Public assets
│   └── src/
│       ├── components/    # Reusable components
│       ├── context/       # Context providers
│       └── pages/         # Application pages
└── server/
    ├── middleware/        # Express middlewares
    ├── models/            # Mongoose models
    ├── routes/            # API routes
    └── uploads/           # Uploaded files
```

## API Endpoints

### Authentication
- `POST /api/auth/login` - User login

### Requisitions
- `GET /api/requisitions` - Get requisitions (admin: all, student: own)
- `POST /api/requisitions` - Create new requisition
- `PUT /api/requisitions/:id` - Update requisition status

### Reports
- `GET /api/reports/pdf` - Generate PDF report
- `GET /api/reports/excel` - Generate Excel report

### Contact
- `POST /api/contact/send` - Send contact message

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Created by [Aayush Sood](https://github.com/Aayush-Sood101)
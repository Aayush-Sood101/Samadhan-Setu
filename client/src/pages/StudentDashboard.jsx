"use client"

import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import RequisitionForm from "../components/RequisitionForm"
import RequisitionList from "../components/RequisitionList"

const StudentDashboard = () => {
  const { user, logout } = useContext(AuthContext)

  // Current year for footer
  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header Section */}
      <header className="sticky top-0 z-10 bg-white shadow-md px-4 sm:px-8 py-4 flex justify-between items-center border-b border-slate-200 backdrop-blur-md">
  <div className="flex items-center space-x-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-blue-600"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
      <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
    </svg>
    <h1 className="text-2xl md:text-3xl font-bold">
      <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        Student Dashboard
      </span>
    </h1>
  </div>

  <div className="flex items-center gap-4">
    <div className="hidden md:flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-lg text-[#112d4e]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-[#137dc5]"
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
      <span className="text-sm font-medium">
        {user.name} <span className="text-xs text-slate-500">({user.regNo})</span>
      </span>
    </div>

    <button
      onClick={logout}
      className="flex items-center gap-2 bg-[#137dc5] hover:bg-[#0049B7] text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
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
      <span className="font-medium">Logout</span>
    </button>
  </div>
</header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Welcome Banner */}
        <div
          className="mb-8 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl p-6 border border-blue-200 shadow-sm"
          style={{ animation: "fadeIn 0.6s ease-in-out" }}
        >
          <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-2">Welcome back, {user.name}!</h2>
          <p className="text-slate-600">Manage your requisitions and track their status from this dashboard.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Requisition Form Section */}
          <div className="lg:col-span-5" style={{ animation: "slideInFromLeft 0.6s ease-out" }}>
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-slate-200 overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-slate-800 mb-6 flex items-center">
                  <span className="inline-block w-2 h-6 bg-blue-600 rounded-full mr-3"></span>
                  New Requisition
                </h2>
                <RequisitionForm />
              </div>
            </div>
          </div>

          {/* Requisition List Section */}
          <div className="lg:col-span-7" style={{ animation: "slideInFromRight 0.6s ease-out" }}>
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-slate-200 overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-slate-800 mb-6 flex items-center">
                  <span className="inline-block w-2 h-6 bg-indigo-600 rounded-full mr-3"></span>
                  Your Requisitions
                </h2>
                <RequisitionList />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t border-slate-200 py-6 text-center text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p>© {currentYear} Student Requisition System. All rights reserved.</p>
        </div>
      </footer>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideInFromLeft {
          from { transform: translateX(-10px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideInFromRight {
          from { transform: translateX(10px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  )
}

export default StudentDashboard


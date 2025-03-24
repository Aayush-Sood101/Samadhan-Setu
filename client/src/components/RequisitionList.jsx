"use client"

import { useState, useEffect } from "react"
import axios from "axios"

const RequisitionList = ({ isAdmin = false }) => {
  const [requisitions, setRequisitions] = useState([])
  const [status, setStatus] = useState("")

  useEffect(() => {
    const fetchRequisitions = async () => {
      try {
        const res = await axios.get("/api/requisitions", {
          headers: { "x-auth-token": localStorage.getItem("token") },
        })
        setRequisitions(res.data)
      } catch (err) {
        console.error(err)
      }
    }
    fetchRequisitions()
  }, [])

  const handleStatusUpdate = async (id) => {
    try {
      await axios.put(
        `/api/requisitions/${id}`,
        { status },
        {
          headers: { "x-auth-token": localStorage.getItem("token") },
        },
      )
      setRequisitions(requisitions.map((req) => (req._id === id ? { ...req, status } : req)))
    } catch (err) {
      console.error(err)
    }
  }

  const getStatusBadge = (status) => {
    const baseClasses = "px-2 py-1 rounded-full text-xs font-medium"

    switch (status) {
      case "Pending":
        return <span className={`${baseClasses} bg-yellow-100 text-yellow-800`}>{status}</span>
      case "In Progress":
        return <span className={`${baseClasses} bg-blue-100 text-blue-800`}>{status}</span>
      case "Completed":
        return <span className={`${baseClasses} bg-green-100 text-green-800`}>{status}</span>
      default:
        return <span className={`${baseClasses} bg-gray-100 text-gray-800`}>{status}</span>
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">{isAdmin ? "All Requisitions" : "My Requisitions"}</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Reg No
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Block
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Room
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Category
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Type of Work
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Comments
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Proof
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              {isAdmin && (
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Action
                </th>
              )}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {requisitions.length > 0 ? (
              requisitions.map((req, index) => (
                <tr key={req._id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{req.userId.regNo}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{req.userId.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{req.block}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{req.roomNumber}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{req.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{req.typeOfWork}</td>
                  <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">{req.comments || "N/A"}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {req.proof ? (
                      <a
                        href={`http://localhost:5000/${req.proof}`}
                        target="_blank"
                        className="text-blue-600 hover:text-blue-800 hover:underline flex items-center"
                        rel="noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        View
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{getStatusBadge(req.status)}</td>
                  {isAdmin && (
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <select
                          value={status}
                          onChange={(e) => setStatus(e.target.value)}
                          className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white"
                        >
                          <option value="">Select status</option>
                          <option value="Pending">Pending</option>
                          <option value="In Progress">In Progress</option>
                          <option value="Completed">Completed</option>
                        </select>
                        <button
                          onClick={() => handleStatusUpdate(req._id)}
                          className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                          Update
                        </button>
                      </div>
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={isAdmin ? 10 : 9} className="px-6 py-4 text-center text-sm text-gray-500">
                  No requisitions found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RequisitionList


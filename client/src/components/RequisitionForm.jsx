import { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const RequisitionForm = () => {
  const { user } = useContext(AuthContext);
  const [block, setBlock] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [category, setCategory] = useState('Maintenance Requisition');
  const [typeOfWork, setTypeOfWork] = useState('Electrical');
  const [comments, setComments] = useState('');
  const [proof, setProof] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('block', block);
    formData.append('roomNumber', roomNumber);
    formData.append('category', category);
    formData.append('typeOfWork', typeOfWork);
    formData.append('comments', comments);
    if (proof) formData.append('proof', proof);

    try {
      await axios.post('/api/requisitions', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'x-auth-token': localStorage.getItem('token'),
        },
      });
      alert('Requisition submitted successfully!');
      setBlock('');
      setRoomNumber('');
      setComments('');
      setProof(null);
    } catch (err) {
      console.error(err);
      alert('Error submitting requisition');
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4">
          <h2 className="text-xl font-bold text-white">Submit a Requisition</h2>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Block</label>
              <input 
                type="text" 
                value={block} 
                onChange={(e) => setBlock(e.target.value)} 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                placeholder="Enter block name"
                required 
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Room Number</label>
              <input 
                type="text" 
                value={roomNumber} 
                onChange={(e) => setRoomNumber(e.target.value)} 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                placeholder="Enter room number"
                required 
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <select 
                value={category} 
                onChange={(e) => setCategory(e.target.value)} 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
              >
                <option>Maintenance Requisition</option>
                <option>Suggestion</option>
                <option>Improvement</option>
                <option>Feedback</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Type of Work</label>
              <select 
                value={typeOfWork} 
                onChange={(e) => setTypeOfWork(e.target.value)} 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
              >
                <option>Electrical</option>
                <option>Plumbing</option>
                <option>Cleaning</option>
                <option>Internet</option>
                <option>Laundry</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Comments</label>
            <textarea 
              value={comments} 
              onChange={(e) => setComments(e.target.value)} 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors min-h-[100px]" 
              placeholder="Describe your issue or request in detail..."
            />
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Proof (pdf/doc/jpg)</label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                  </svg>
                  <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                  <p className="text-xs text-gray-500">PDF, DOC, JPG (MAX. 10MB)</p>
                </div>
                <input 
                  type="file" 
                  onChange={(e) => setProof(e.target.files[0])} 
                  accept=".pdf,.doc,.jpg" 
                  className="hidden" 
                />
              </label>
            </div>
            {proof && (
              <p className="text-sm text-green-600 mt-2">
                File selected: {proof.name}
              </p>
            )}
          </div>
        </div>
        
        <div className="px-6 py-4 bg-gray-50 flex justify-end">
          <button 
            type="submit" 
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-md transition-colors duration-200 shadow-sm hover:shadow"
          >
            Submit Requisition
          </button>
        </div>
      </form>
    </div>
  );
};

export default RequisitionForm;

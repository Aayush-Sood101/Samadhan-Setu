import React from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const About = () => {
  const navigate = useNavigate();
  
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
      {/* Header */}
      <Navbar/>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="max-w-4xl bg-white shadow-xl rounded-xl p-8 flex flex-col md:flex-row items-center border border-gray-200"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
  src="/photo.png"
  alt="Aayush Sood"
  className="w-54 h-40 md:w-72 md:h-52 object-cover rounded-full shadow-lg border-2 border-blue-500"
/>


          </motion.div>
          
          {/* Text Content */}
          <motion.div 
            className="mt-6 md:mt-0 md:ml-8 text-center md:text-left"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl font-bold text-gray-800">Aayush Sood</h1>
            <p className="text-blue-600 font-medium mb-3">Software Developer</p>
            <p className="mt-3 text-gray-600 text-lg leading-relaxed">
              A passionate software developer with a strong background in Data Structures, Algorithms, and Web Development. I specialize in creating efficient, scalable, and user-friendly applications.
            </p>
            
            
            
            {/* Skills Section */}
            <div className="mt-5">
              <h2 className="text-xl font-semibold text-blue-600 mb-3">Skills</h2>
              <div className="flex flex-wrap gap-2 mt-2">
                {["C++", "JavaScript", "React.js", "Node.js", "DSA", "Competitive Programming", "HTML/CSS", "Git", "MongoDB"].map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium shadow-sm border border-blue-100 transition-all hover:bg-blue-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Education Section */}
        {/* Education Section */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  className="max-w-4xl w-full mt-8 bg-white shadow-xl rounded-xl p-8 border border-gray-200"
>
  <h2 className="text-2xl font-bold text-gray-800 mb-4">Education</h2>
  <div className="space-y-4">
    <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100">
      <div>
        <h3 className="font-semibold text-lg">Bachelor of Technology in Computer Science</h3>
        <p className="text-gray-600">Vellore Institute of Technology</p>
      </div>
      <div className="mt-2 md:mt-0">
        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">2023 - 2027</span>
      </div>
    </div>
    <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100">
      <div>
        <h3 className="font-semibold text-lg">High School Diploma</h3>
        <p className="text-gray-600">ABM Senior Secondary School</p>
      </div>
      <div className="mt-2 md:mt-0">
        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">2021 - 2023</span>
      </div>
    </div>
  </div>
</motion.div>


      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;

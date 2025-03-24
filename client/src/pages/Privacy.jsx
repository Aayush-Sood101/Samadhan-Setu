"use client"
import { motion } from "framer-motion"
import { useNavigate, Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
const Privacy = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="max-w-4xl bg-white shadow-xl rounded-xl p-8 border border-gray-200"
        >
          {/* Privacy Policy Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Privacy Policy</h1>
            <p className="mt-2 text-gray-500 text-sm">Last updated: March 2025</p>
          </div>

          {/* Introduction */}
          <div className="mb-8 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <p className="text-gray-700 leading-relaxed">
              At SamadhanSetu, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and protect your information when using our app.
            </p>
          </div>

          {/* Privacy Policy Content */}
          <div className="space-y-6 text-gray-700">
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold text-blue-600 mb-3 flex items-center">
                <span className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">1</span>
                Information We Collect
              </h2>
              <p className="leading-relaxed pl-10">
                We may collect personal information such as your name, email, and device data to enhance your experience. This information is collected only when you voluntarily provide it through our contact form or when interacting with our services.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold text-blue-600 mb-3 flex items-center">
                <span className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">2</span>
                How We Use Your Information
              </h2>
              <p className="leading-relaxed pl-10">
                We use collected data to provide and improve our services, personalize content, and ensure security. Your information helps us respond to your inquiries, improve user experience, and develop new features that better serve your needs.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold text-blue-600 mb-3 flex items-center">
                <span className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">3</span>
                Data Security
              </h2>
              <p className="leading-relaxed pl-10">
                We implement industry-standard security measures to protect your data. However, no method is 100% secure. We use encryption, secure servers, and regular security audits to safeguard your information from unauthorized access or disclosure.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold text-blue-600 mb-3 flex items-center">
                <span className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">4</span>
                Third-Party Services
              </h2>
              <p className="leading-relaxed pl-10">
                Our app may contain links to third-party services. We are not responsible for their privacy practices. When you leave our website, we encourage you to read the privacy policy of every site you visit, as their policies may differ from ours.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold text-blue-600 mb-3 flex items-center">
                <span className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">5</span>
                Changes to This Policy
              </h2>
              <p className="leading-relaxed pl-10">
                We may update this Privacy Policy from time to time. Please review it periodically. We will notify you of any significant changes by posting a notice on our website or sending you an email if we have your contact information.
              </p>
            </div>
          </div>

          {/* Contact for Privacy Questions */}
          <div className="mt-8 p-5 bg-gray-50 rounded-lg border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Questions About Privacy?</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions or concerns about our Privacy Policy, please don't hesitate to contact us.
            </p>
            <Link to="/contact" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
              Contact Us
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </motion.div>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Privacy;

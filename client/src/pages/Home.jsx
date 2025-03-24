import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <motion.header 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-[#112d4e] to-[#137dc5] text-white py-24 px-6 overflow-hidden"
      >
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative z-10 max-w-6xl mx-auto text-center"
        >
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-6xl font-bold mb-6 tracking-tight"
          >
            Samadhan Setu
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl mt-4 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Streamlining student maintenance requests for a better campus living experience
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-10"
          >
            <Link 
              to="/login" 
              className="inline-block bg-white text-[#112d4e] font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg"
            >
              Get Started
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Abstract Background Elements */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 left-0 w-full h-full"
        >
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-white opacity-10"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 rounded-full bg-white opacity-10"></div>
          <div className="absolute top-40 right-40 w-40 h-40 rounded-full bg-white opacity-10"></div>
        </motion.div>
      </motion.header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {/* About Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
          className="mb-20"
        >
          <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-[#112d4e] pb-3 relative inline-block">
              About the Project
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#00cfc8]"></span>
            </h2>
            <p className="text-gray-700 text-center max-w-4xl text-lg md:text-xl leading-relaxed">
              This web application allows students to submit maintenance requisitions for their dormitories, 
              including issues like electrical, plumbing, cleaning, internet, laundry, and more. 
              Admins can view, manage, and generate reports based on these submissions.
            </p>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20"
        >
          <motion.div 
            variants={fadeIn}
            className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#00cfc8] group"
          >
            <div className="flex items-center mb-6">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-[#e9f1fa] p-4 rounded-full mr-5 group-hover:bg-[#d3e6f7] transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-[#137dc5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </motion.div>
              <h3 className="text-2xl font-bold text-[#112d4e] group-hover:text-[#137dc5] transition-colors duration-300">For Students</h3>
            </div>
            <ul className="text-gray-600 space-y-4 ml-4 text-lg">
              <motion.li 
                whileHover={{ x: 5 }}
                className="flex items-start"
              >
                <svg className="h-6 w-6 text-[#00cfc8] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Submit requests easily with a user-friendly interface</span>
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                className="flex items-start"
              >
                <svg className="h-6 w-6 text-[#00cfc8] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Attach photos as proof of the maintenance issue</span>
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                className="flex items-start"
              >
                <svg className="h-6 w-6 text-[#00cfc8] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Track the status of your submissions in real-time</span>
              </motion.li>
            </ul>
            <motion.div 
              whileHover={{ x: 5 }}
              className="mt-8"
            >
              <Link to="/login" className="text-[#137dc5] font-medium hover:text-[#0049B7] flex items-center text-lg group">
                <span className="group-hover:underline">Submit a request</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={fadeIn}
            className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#00cfc8] group"
          >
            <div className="flex items-center mb-6">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-[#e9f1fa] p-4 rounded-full mr-5 group-hover:bg-[#d3e6f7] transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-[#137dc5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </motion.div>
              <h3 className="text-2xl font-bold text-[#112d4e] group-hover:text-[#137dc5] transition-colors duration-300">For Admins</h3>
            </div>
            <ul className="text-gray-600 space-y-4 ml-4 text-lg">
              <motion.li 
                whileHover={{ x: 5 }}
                className="flex items-start"
              >
                <svg className="h-6 w-6 text-[#00cfc8] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Comprehensive dashboard to manage all requisitions</span>
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                className="flex items-start"
              >
                <svg className="h-6 w-6 text-[#00cfc8] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Update status and assign maintenance personnel</span>
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                className="flex items-start"
              >
                <svg className="h-6 w-6 text-[#00cfc8] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Generate detailed reports in PDF or Excel format</span>
              </motion.li>
            </ul>
            <motion.div 
              whileHover={{ x: 5 }}
              className="mt-8"
            >
              <Link to="/login" className="text-[#137dc5] font-medium hover:text-[#0049B7] flex items-center text-lg group">
                <span className="group-hover:underline">Admin portal</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* How It Works Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.h2 
  variants={fadeIn} 
  className="text-4xl font-bold mb-16 text-center text-[#112d4e] relative inline-block left-1/2 transform -translate-x-1/2"
>
  How It Works
  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#00cfc8] mx-auto"></span>
</motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10"></div>
            
            <motion.div 
              variants={fadeIn}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-md text-center relative z-10"
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="bg-[#e9f1fa] w-20 h-20 flex items-center justify-center rounded-full mx-auto mb-6 border-4 border-white shadow-md"
              >
                <span className="text-[#137dc5] text-3xl font-bold">1</span>
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 text-[#112d4e]">Submit Request</h3>
              <p className="text-gray-600 text-lg">Fill out the maintenance form with details about the issue you're experiencing</p>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-md text-center relative z-10"
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="bg-[#e9f1fa] w-20 h-20 flex items-center justify-center rounded-full mx-auto mb-6 border-4 border-white shadow-md"
              >
                <span className="text-[#137dc5] text-3xl font-bold">2</span>
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 text-[#112d4e]">Admin Review</h3>
              <p className="text-gray-600 text-lg">Administrators review and assign your request to the appropriate maintenance staff</p>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-md text-center relative z-10"
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="bg-[#e9f1fa] w-20 h-20 flex items-center justify-center rounded-full mx-auto mb-6 border-4 border-white shadow-md"
              >
                <span className="text-[#137dc5] text-3xl font-bold">3</span>
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 text-[#112d4e]">Issue Resolution</h3>
              <p className="text-gray-600 text-lg">Track progress as your maintenance issue is addressed and resolved</p>
            </motion.div>
          </div>
        </motion.section>
        
      </main>

      <Footer />
    </div>
  );
};

export default Home;
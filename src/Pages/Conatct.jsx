import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="relative bg-[#111] text-white overflow-hidden">

      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#ff7b00]"
          style={{
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
          }}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
          }}
          animate={{
            y: window.innerHeight + 50,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            repeatType: "loop",
            delay: Math.random() * 5,
          }}
        />
      ))}

      <motion.div
        className="min-h-[40vh] flex items-center justify-center text-center px-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div>
          <h2 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#ff7b00] via-[#ffd000] to-[#ff7b00] mb-4">
            Get in Touch
          </h2>
          <span className="block w-24 h-1 mx-auto bg-gradient-to-r from-[#ff7b00] via-[#ffd000] to-[#ff7b00] rounded-full animate-pulse-slow"></span>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 py-24 px-6 relative z-10">

        <motion.div
          className="space-y-6 p-8 rounded-2xl bg-[#1a1a1a]/80 backdrop-blur-md shadow-lg border border-gray-700 hover:shadow-[#ff7b00]/50 transition-shadow duration-500"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold text-[#ff7b00]">Contact Info</h3>
          <p className="text-gray-300">Email: <span className="text-white font-medium">info@vyomgarud.com</span></p>
          <p className="text-gray-300">Phone: <span className="text-white font-medium">+91 12345 67890</span></p>
          <p className="text-gray-300">Address: <span className="text-white font-medium">123 Drone Tech Street, India</span></p>
        </motion.div>


        <motion.form
          className="flex flex-col space-y-4 p-8 rounded-2xl bg-[#1a1a1a]/70 backdrop-blur-md shadow-lg border border-gray-700 hover:shadow-[#ff7b00]/50 transition-shadow duration-500"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-3 rounded-md bg-[#111]/70 border border-gray-700 focus:border-[#ff7b00] focus:outline-none transition-all duration-300 backdrop-blur-sm"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 rounded-md bg-[#111]/70 border border-gray-700 focus:border-[#ff7b00] focus:outline-none transition-all duration-300 backdrop-blur-sm"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="px-4 py-3 rounded-md bg-[#111]/70 border border-gray-700 focus:border-[#ff7b00] focus:outline-none transition-all duration-300 backdrop-blur-sm"
          ></textarea>
          <motion.button
            type="submit"
            className="bg-[#ff7b00] text-black px-6 py-3 rounded-full font-semibold hover:scale-105 hover:shadow-lg hover:shadow-[#ff7b00]/40 transition-transform duration-300"
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px #ff7b00" }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

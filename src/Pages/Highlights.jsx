import { motion } from "framer-motion";
import drone1 from "../assets/drone1.webp";
import drone2 from "../assets/drone2.webp";
import uav from "../assets/uav fleet.jpg";

export default function Highlights() {
  const highlights = [
    {
      icon: (
        <svg className="w-12 h-12 text-[#ff7b00]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 9h4v2H8V9z" />
        </svg>
      ),
      title: "Autonomous Flight",
      desc: "UAVs capable of fully autonomous navigation with obstacle avoidance.",
    },
    {
      icon: (
        <svg className="w-12 h-12 text-[#ff7b00]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0zm1 15h-2v-2h2v2zm0-4h-2V5h2v6z" />
        </svg>
      ),
      title: "Precision Engineering",
      desc: "Built with military-grade components for maximum reliability.",
    },
    {
      icon: (
        <svg className="w-12 h-12 text-[#ff7b00]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 5h16v2H2V5zm0 4h16v2H2V9zm0 4h10v2H2v-2z" />
        </svg>
      ),
      title: "Real-Time Telemetry",
      desc: "Monitor and control UAVs remotely with live data streaming.",
    },
  ];

  const gallery = [
    { img: drone1, title: "UAV Fleet", desc: "Our diverse UAV fleet in action." },
    { img: drone2, title: "Autonomous Navigation", desc: "Precision AI-driven flight." },
    { img: uav, title: "Mission Control", desc: "Real-time telemetry monitoring." },
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-[#0b0b0b] via-[#1a1a1a] to-[#0b0b0b]">
      
      <div className="absolute inset-0 -z-10">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#ff7b00] rounded-full opacity-40"
            initial={{ x: Math.random() * window.innerWidth, y: Math.random() * 800 }}
            animate={{ y: window.innerHeight + 50, x: [0, 5, -5, 0] }}
            transition={{
              type: "tween",
              duration: 8 + Math.random() * 5,
              repeat: Infinity,
              repeatType: "loop",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

     
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-24 text-transparent bg-clip-text bg-gradient-to-r from-[#ff7b00] via-[#ffd000] to-[#ff7b00] leading-snug"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        Highlights
      </motion.h2>

     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10">
        {highlights.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{
              rotate: 2,
              scale: 1.05,
              boxShadow: "0 0 20px rgba(255,123,0,0.5), 0 0 40px rgba(255,200,0,0.3)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="flex items-center space-x-4 p-6 rounded-2xl backdrop-blur-md bg-white/5 hover:bg-white/10 transition-colors duration-500 shadow-lg relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-[#ff7b00]/20 via-transparent to-[#ff7b00]/20 opacity-0 rounded-2xl"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            />
            <div>{item.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-32 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {gallery.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, y: -3, boxShadow: "0 0 25px rgba(255,123,0,0.5)" }}
            transition={{ type: "spring", stiffness: 150, damping: 12 }}
            className="rounded-2xl overflow-hidden relative group shadow-lg hover:shadow-[#ff7b00]/50 transition-shadow duration-500"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <h4 className="text-white font-semibold">{item.title}</h4>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

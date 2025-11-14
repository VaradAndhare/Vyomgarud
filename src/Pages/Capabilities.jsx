import { motion } from "framer-motion";

export default function Capabilities() {
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Precision Surveillance",
      desc: "Long-range radar and sensor technology for autonomous UAV monitoring.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6m4 0v-6a2 2 0 00-2-2h-1.5"
          />
        </svg>
      ),
      title: "AI Autonomy",
      desc: "Intelligent flight algorithms enabling autonomous missions and obstacle avoidance.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 15a4 4 0 004 4h10a4 4 0 004-4M3 15V9a4 4 0 014-4h10a4 4 0 014 4v6"
          />
        </svg>
      ),
      title: "Real-time Telemetry",
      desc: "Seamless cloud-based data streaming for operational efficiency and mission control.",
    },
  ];

  const stats = [
    { title: "Missions Completed", value: 120 },
    { title: "Operational Hours", value: 5000 },
    { title: "Countries Served", value: 7 },
    { title: "AI Algorithms", value: 15 },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#0b0b0b] text-white px-6 py-20 overflow-hidden">
      
      <div className="absolute inset-0 -z-10">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#ff7b00] rounded-full opacity-50"
            initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
            animate={{ y: window.innerHeight + 50, x: [0, 5, -5, 0] }}
            transition={{ type: "tween", duration: 10 + Math.random() * 5, repeat: Infinity, repeatType: "loop", delay: Math.random() * 5 }}
          />
        ))}
      </div>

      <motion.h2
        className="text-4xl md:text-5xl font-extrabold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#ff7b00] via-[#ffd000] to-[#ff7b00]"
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        Our Capabilities
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl w-full">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            whileHover={{
              scale: 1.07,
              y: -5,
              boxShadow: "0 0 20px rgba(255,123,0,0.5), 0 0 40px rgba(255,200,0,0.3)"
            }}
            transition={{ type: "spring", stiffness: 180, damping: 16 }}
            className="group relative bg-[#111] rounded-3xl border border-gray-800 shadow-md p-8 text-center overflow-hidden"
          >
            <div className="flex justify-center mb-4 text-[#ff7b00]">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400 text-sm">{feature.desc}</p>

            <motion.div
              className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#ff7b00]/20 via-transparent to-[#ff7b00]/20 opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl w-full mt-20 text-center">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: i * 0.25, ease: "easeOut" }}
            className="p-6 bg-[#1a1a1a]/80 rounded-2xl shadow-md hover:shadow-[#ff7b00]/40 transition-shadow duration-500"
          >
            <h3 className="text-4xl font-bold text-[#ff7b00]">{stat.value}+</h3>
            <p className="text-gray-400 text-lg mt-2">{stat.title}</p>
          </motion.div>
        ))}
      </div>

      <motion.a
        href="/contact"
        className="mt-16 bg-[#ff7b00] text-black px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-transform duration-300"
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        animate={{ y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        Learn More
      </motion.a>
    </section>
  );
}

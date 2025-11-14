import { motion } from "framer-motion";
import drone1 from "../assets/drone.jpg";
import drone2 from "../assets/drone2.webp";

export default function Home() {
  const sections = [
    {
      title: "Precision Engineering",
      text: "VyomGarud drones are designed for high-precision operations with advanced autonomy.",
      img: drone1,
      reverse: false,
    },
    {
      title: "Advanced Autonomy",
      text: "Our UAVs operate independently with cutting-edge AI for complex missions.",
      img: drone2,
      reverse: true,
    },
  ];

  return (
    <div className="relative w-full text-white overflow-hidden">
      <section
        className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden"
        style={{
          backgroundImage: "url('/drone-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/50 to-black/90"
          animate={{ opacity: [0.7, 0.9, 0.7] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
        />

        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-accent opacity-30"
            style={{
              width: `${Math.random() * 6 + 4}px`,
              height: `${Math.random() * 6 + 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, 20, 0], x: [0, 10, -10, 0] }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              repeatType: "loop",
              delay: Math.random() * 5,
            }}
          />
        ))}

        <motion.h1
          className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#ff7b00] via-[#ffd000] to-[#ff7b00] drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          VyomGarud
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-2xl max-w-3xl text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Revolutionizing the Skies with Autonomous UAV Intelligence and
          Precision Engineering
        </motion.p>

        <motion.a
          href="/contact"
          className="mt-10 bg-accent text-black px-8 py-3 rounded-full font-semibold text-lg shadow-lg shadow-accent/40 hover:scale-105 hover:shadow-xl transition-transform duration-300"
          whileHover={{ scale: 1.12, rotate: [0, 2, -2, 0] }}
          animate={{
            boxShadow: [
              "0 0 10px #ff7b00",
              "0 0 25px #ffd000",
              "0 0 10px #ff7b00",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Get in Touch
        </motion.a>
      </section>

      <div className="space-y-32 py-20 px-6">
        {sections.map((sec, idx) => (
          <motion.div
            key={idx}
            className={`flex flex-col md:flex-row items-center md:justify-between gap-8 ${
              sec.reverse ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="md:w-1/2 space-y-4 text-center md:text-left">
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff7b00] via-[#ffd000] to-[#ff7b00] hover:underline decoration-accent decoration-4 underline-offset-4 transition-all duration-500">
                {sec.title}
              </h2>
              <p className="text-gray-300 text-lg">{sec.text}</p>
            </div>

            <motion.img
              src={sec.img}
              alt={sec.title}
              className="md:w-1/2 w-80 mx-auto drop-shadow-[0_0_40px_rgba(255,123,0,0.5)]"
              initial={{ opacity: 0, y: -10, x: sec.reverse ? 50 : -50 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 1.5, type: "spring", stiffness: 120 }}
              whileHover={{
                y: [-5, 5, -5],
                transition: { duration: 2, repeat: Infinity },
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

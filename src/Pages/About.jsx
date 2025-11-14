import { motion } from "framer-motion";
import drone from "../assets/drone1.webp";
import droneSmall from "../assets/drone2.webp";
import drone4 from "../assets/drone4.jpg"
import CountUp from "react-countup";

export default function About() {
  const missionVision = [
    {
      title: "Mission",
      text: "Empower defense and industry with autonomous UAV intelligence for every mission profile. We focus on innovation, safety, and operational excellence in all UAV deployments.",
      img: droneSmall,
      reverse: false,
    },
    {
      title: "Vision",
      text: "To become India’s leading UAV innovator, merging sky precision with smart autonomy. We aim to redefine aerial intelligence for commercial, defense, and humanitarian applications.",
      img: drone4,
      reverse: true,
    },
  ];

  const leaders = [
    { name: "Arjun Rao", role: "Founder & CEO", img: "https://randomuser.me/api/portraits/men/45.jpg" },
    { name: "Kavya Mehta", role: "Chief AI Engineer", img: "https://randomuser.me/api/portraits/women/68.jpg" },
    { name: "Rohit Sharma", role: "Aerospace Systems Lead", img: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Sneha Patel", role: "Head of Operations", img: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "Vikram Singh", role: "Lead Software Engineer", img: "https://randomuser.me/api/portraits/men/50.jpg" },
  ];

  const stats = [
    { title: "UAV Models", value: 10 },
    { title: "Successful Missions", value: 50 },
    { title: "Countries", value: 5 },
    { title: "Engineers", value: 100 },
  ];

  return (
    <div className="relative text-white bg-[#0b0b0b] overflow-hidden">
      
      
      <div className="absolute inset-0 -z-10">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#ff7b00] rounded-full opacity-30"
            initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
            animate={{ y: window.innerHeight + 50 }}
            transition={{ duration: 8 + Math.random() * 5, repeat: Infinity, repeatType: "loop", delay: Math.random() * 5 }}
          />
        ))}
      
        {[...Array(6)].map((_, i) => (
          <motion.img
            key={i}
            src={droneSmall}
            alt="floating drone"
            className="absolute w-20 opacity-20"
            style={{ top: `${Math.random() * 80}%`, left: `${Math.random() * 100}%` }}
            animate={{ y: [0, 20, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 10 + Math.random() * 5, repeat: Infinity, repeatType: "loop", delay: Math.random() * 5 }}
          />
        ))}
      </div>

      <section className="min-h-screen flex flex-col md:flex-row justify-between items-center px-6 py-24 max-w-6xl mx-auto relative z-10 gap-12">
        <motion.div
          className="md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#ff7b00] via-[#ffd000] to-[#ff7b00]">
            About VyomGarud
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            VyomGarud pioneers <span className="text-[#ff7b00] font-semibold">military-grade UAV systems</span> built with precision engineering and autonomous AI control. Our drones excel in challenging environments, combining advanced technology with operational reliability.
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Founded with a vision of reshaping aerial intelligence, VyomGarud leverages deep expertise in aerospace, robotics, and AI. Our commitment to innovation ensures every UAV is capable, resilient, and adaptable to diverse mission profiles.
          </p>
        </motion.div>

        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.img
            src={drone}
            alt="Drone illustration"
            className="rounded-2xl shadow-lg"
            whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
            transition={{ type: "tween", stiffness: 120, damping: 12 }}
          />
        </motion.div>
      </section>

      
      <section className="min-h-screen flex flex-col md:flex-row justify-center items-stretch gap-8 py-24 px-6 max-w-6xl mx-auto relative z-10">
        {missionVision.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className={`p-8 rounded-2xl shadow-md hover:shadow-[#ff7b00]/30 transition text-center w-full md:w-1/2 backdrop-blur-sm bg-[#1a1a1a]/90 flex flex-col items-center ${item.reverse ? "md:flex-row-reverse" : "md:flex-row"}`}
          >
            <motion.img
              src={item.img}
              alt={item.title}
              className="w-32 h-32 object-cover rounded-xl mb-4 md:mb-0 md:mr-6 md:ml-6"
              whileHover={{ rotate: [-5, 5, -5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-[#ff7b00]">{item.title}</h3>
              <p className="text-gray-400 text-lg max-w-md">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </section>

      
      <section className="min-h-screen py-24 px-6 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#ff7b00] via-[#ffd000] to-[#ff7b00]"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Leadership & Visionaries
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 justify-items-center">
          {leaders.map((member, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08, rotateY: 5, y: -6 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="relative w-72 h-[450px] rounded-2xl overflow-hidden group border border-gray-700 shadow-md bg-[#1a1a1a]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,123,0,0.2),transparent_70%)] animate-pulse-slow"></div>
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-72 object-cover opacity-90 relative z-10"
              />
              <div className="relative p-4 z-10">
                <h4 className="text-xl font-semibold text-[#ff7b00]">{member.name}</h4>
                <p className="text-gray-400 text-sm">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

  
      <section className="min-h-[400px] py-24 px-6 relative z-10 bg-[#0f0f0f]">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#ff7b00] via-[#ffd000] to-[#ff7b00]"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Company Achievements
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px #ff7b00" }}
              className="p-6 bg-[#1a1a1a]/80 rounded-2xl shadow-md"
            >
              <h3 className="text-4xl font-bold text-[#ff7b00]">
                <CountUp end={stat.value} duration={2} />+
              </h3>
              <p className="text-gray-400 text-lg mt-2">{stat.title}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

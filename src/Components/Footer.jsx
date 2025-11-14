import brandLogo from "../assets/vyomgarud_logo.jpg";

export default function Footer() {
  const social = [
    { name: "Website", handle: "vyomgarud.ai", href: "#" },
    { name: "Twitter", handle: "@VyomGarudOfficial", href: "#" },
    { name: "LinkedIn", handle: "VyomGarud", href: "#" },
    { name: "YouTube", handle: "VyomGarud", href: "#" },
  ];

  const hashtags = ["#SkySecure", "#AutonomyFirst", "#VyomGarudLabs"];

  return (
    <footer className="bg-[#0f0f10] text-gray-300 py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        
        <div className="flex flex-col items-center md:items-start space-y-6">
          <img
            src={brandLogo}
            alt="VyomGarud logo"
            className="w-40 md:w-48 rounded-md drop-shadow-xl"
          />
          <p className="text-base md:text-lg max-w-md text-center md:text-left leading-relaxed">
            VyomGarud builds mission-focused UAV systems combining aerospace-grade
            hardware with edge AI and cloud telemetry. We deliver scalable,
            autonomous solutions for defense, research, and critical infrastructure.
          </p>

          <div className="flex gap-4 mt-3">
            <a href="#" className="p-3 rounded-md bg-white/5 hover:bg-white/10 transition" aria-label="Website">
              <svg className="w-6 h-6 text-[#ff7b00]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12h20M12 2v20" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#" className="p-3 rounded-md bg-white/5 hover:bg-white/10 transition" aria-label="Twitter">
              <svg className="w-6 h-6 text-[#1da1f2]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 5.92c-.63.28-1.3.48-2 .56.72-.43 1.28-1.1 1.54-1.9-.68.4-1.43.7-2.23.86C18.2 4 17.35 3.5 16.36 3.5c-1.6 0-2.9 1.3-2.9 2.9 0 .23.03.46.07.67-2.4-.12-4.53-1.28-5.95-3.04-.25.43-.4.93-.4 1.46 0 1.01.51 1.9 1.28 2.42-.47-.01-.91-.14-1.3-.36v.04c0 1.4.99 2.56 2.3 2.83-.24.07-.5.11-.76.11-.19 0-.38-.02-.56-.06.39 1.2 1.53 2.07 2.88 2.09C8.1 17.5 6.8 18.12 5.38 18.12c-.36 0-.72-.02-1.07-.07C4.4 19 5.36 19.6 6.45 19.6c7.73 0 11.96-6.4 11.96-11.95v-.54c.83-.6 1.52-1.36 2.08-2.23-.76.34-1.57.57-2.42.67z"/>
              </svg>
            </a>
            <a href="#" className="p-3 rounded-md bg-white/5 hover:bg-white/10 transition" aria-label="LinkedIn">
              <svg className="w-6 h-6 text-[#0a66c2]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5a2.5 2.5 0 11-.01 0zM3 8.99h4v12H3zM9 8.99h3.8v1.64h.05c.53-1 1.82-2.06 3.75-2.06 4.01 0 4.75 2.64 4.75 6.07v7.35h-4v-6.51c0-1.55-.03-3.55-2.17-3.55-2.17 0-2.5 1.69-2.5 3.43v6.63h-4z"/>
              </svg>
            </a>
            <a href="#" className="p-3 rounded-md bg-white/5 hover:bg-white/10 transition" aria-label="YouTube">
              <svg className="w-6 h-6 text-[#ff0000]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 15l5.19-3L10 9v6zM23.5 7s-.2-1.5-.8-2.2c-.7-.8-1.5-.8-1.9-.9C17.5 3.5 12 3.5 12 3.5h0S6.5 3.5 3.2 3.9c-.4 0-1.2.1-1.9.9C.6 6.5.5 7.9.5 7.9S0 9.9 0 12v0c0 2.1.5 4.1.5 4.1s.2 1.5.8 2.2c.7.8 1.6.8 2.1.9 1.6.2 6.4.4 6.4.4s5.5-.1 8.8-.5c.4 0 1.2-.1 1.9-.9.6-.7.8-2.2.8-2.2S24 14.1 24 12v0c0-2.1-.5-4.1-.5-4.1z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-5 justify-center">
          <h4 className="text-base md:text-lg font-semibold text-white">Quick Links</h4>
          <div className="flex flex-col sm:flex-row sm:gap-8 mt-3 text-lg">
            <a href="#home" className="hover:text-accent transition-colors">Home</a>
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <a href="#capabilities" className="hover:text-accent transition-colors">Capabilities</a>
            <a href="#highlights" className="hover:text-accent transition-colors">Highlights</a>
          </div>

          <div className="mt-4">
            <h4 className="text-base md:text-lg font-semibold text-white">Handles</h4>
            <ul className="mt-2 text-lg space-y-1">
              {social.map((s) => (
                <li key={s.name}>
                  <a href={s.href} className="hover:text-accent transition-colors">
                    <span className="font-medium text-gray-200">{s.name}:</span>{" "}
                    <span className="text-gray-400 ml-1">{s.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      
        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="text-base md:text-lg max-w-md text-center md:text-right">
            <p className="font-semibold text-white">Join the conversation</p>
            <div className="flex gap-3 flex-wrap mt-2 justify-center md:justify-end text-lg">
              {hashtags.map((h) => (
                <span
                  key={h}
                  className="bg-white/5 px-4 py-1 rounded-full text-gray-300 hover:bg-white/10 transition"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4 text-lg text-gray-400 text-center md:text-right">
            <div>Email: <a href="mailto:info@vyomgarud.ai" className="hover:text-accent">info@vyomgarud.ai</a></div>
            <div>Phone: <a href="tel:+911234567890" className="hover:text-accent">+91 12345 67890</a></div>
          </div>

          <div className="mt-6 text-base text-gray-500 text-center md:text-right">
            <a href="#" className="hover:text-accent mr-6">Privacy</a>
            <a href="#" className="hover:text-accent mr-6">Terms</a>
            <a href="#" className="hover:text-accent">Sitemap</a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-400 text-lg">
        © {new Date().getFullYear()} VyomGarud. Made with precision and passion.
      </div>
    </footer>
  );
}

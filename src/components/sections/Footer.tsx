import { useLanguage } from "../../contexts/LanguageContext";

const socialLinks = [
  {
    name: "Facebook",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "Twitter/X",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    t.footer.home,
    t.footer.aboutUs,
    t.footer.properties,
    t.footer.news,
    t.footer.contact,
  ];

  return (
    <footer id="contact" className="bg-slate-900 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6 text-white">
              <div className="w-15 h-15 rounded-lg flex items-center justify-center">
                <img src="/house-icon-white.png" alt="logo image" />
              </div>
              <span className="font-serif text-xl font-bold tracking-tight">
                {t.nav.title}
              </span>
            </div>
            <p className="max-w-sm mb-6">{t.footer.description}</p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t.footer.quickLinks}</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-white font-bold mb-6">{t.footer.contact}</h4>
            <ul className="space-y-4">
              <li>{t.footer.email}</li>
              <li>
                <a href="tel:+855977979220">{t.footer.phone}</a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/UJUC9sy9WSAPcX7b7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.footer.address.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>{t.footer.rights}</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">
              {t.footer.privacy}
            </a>
            <a href="#" className="hover:text-white">
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

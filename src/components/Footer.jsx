/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { Clock, MapPin, Mail, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const SOCIAL_LINKS = [
  { href: "https://www.facebook.com/share/1FmUy3wsmt/", icon: FaFacebookF, label: "Facebook" },
  { href: "https://www.instagram.com/khayrat_alrabab?igsh=N2R1d3JtbGhxZ3Jw", icon: FaInstagram, label: "Instagram" },
];

const Footer = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const navItems = [
    { name: t("home"), path: "/" },
    { name: t("about"), path: "/about" },
    { name: t("projects"), path: "/projects" },
    { name: t("gallery"), path: "/gallery" },
    { name: t("contact"), path: "/contact" },
  ];

  return (
    <footer
      dir={isAr ? "rtl" : "ltr"}
      className="relative bg-[#0B1624] text-white overflow-hidden"
    >
      {/* Subtle top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2F6FB0]/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
          {/* Brand */}
          <div className="space-y-5">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <img src="/logo.jpeg" alt={t("footer.fahd")} className="h-11 w-auto rounded-xl object-contain max-w-[150px] transition-transform duration-300 group-hover:scale-[1.02]" />
              <span className="font-semibold text-white text-lg tracking-tight group-hover:text-[#4A86C5] transition-colors">
                {t("footer.fahd")}
              </span>
            </Link>
            <p className="text-[#AFC3D6] text-sm leading-relaxed max-w-xs">
              {t("footer.tital")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#4A86C5] mb-5">
              {t("footer.Quick Links")}
            </h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-[#AFC3D6] text-sm hover:text-white hover:translate-x-0.5 transition-all duration-200 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-6">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#4A86C5] mb-5">
              {t("footer.tital2")}
            </h3>
            <div className="flex items-start gap-3 text-[#AFC3D6] text-sm">
              <Clock className="w-5 h-5 text-[#2F6FB0]/80 shrink-0 mt-0.5" />
              <span>{t("footer.time")}</span>
            </div>
            <div className="flex items-start gap-3 text-[#AFC3D6] text-sm">
              <MapPin className="w-5 h-5 text-[#2F6FB0]/80 shrink-0 mt-0.5" />
              <span>{isAr ? t("contactAddressAr") : t("contactAddress")}</span>
            </div>
            <a
              href={`mailto:${t("contactEmail")}`}
              className="flex items-center gap-3 text-[#AFC3D6] text-sm hover:text-[#4A86C5] transition-colors"
            >
              <Mail className="w-5 h-5 text-[#2F6FB0]/80 shrink-0" />
              <span>{t("contactEmail")}</span>
            </a>
            <a
              href="tel:+9647838527173"
              className="flex items-center gap-3 text-[#AFC3D6] text-sm hover:text-[#4A86C5] transition-colors"
            >
              <Phone className="w-5 h-5 text-[#2F6FB0]/80 shrink-0" />
              <span>{t("contactPhone")}</span>
            </a>
            {/* مواقع التواصل */}
            <p className="text-xs font-semibold uppercase tracking-widest text-[#4A86C5] pt-4 pb-2">{t("footer.social")}</p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#AFC3D6] hover:text-white hover:border-[#2F6FB0]/50 hover:bg-[#2F6FB0]/10 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="relative border-t border-white/10 bg-[#0F1F33]/80">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#AFC3D6]/90 text-xs text-center sm:text-left">
            {t("footer.Copyright")}
          </p>
          <div className="flex items-center gap-2 text-[#AFC3D6]/70 text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2F6FB0]/80" />
            <span>{t("footer.fahd")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

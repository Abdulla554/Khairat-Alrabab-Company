/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../lib/i18next";

const GOLD = "#C9A227";
const GOLD_LIGHT = "#E5C76B";

export function MyNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();
  const currentLanguage = i18n.language || "en";

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("dir", currentLanguage === "ar" ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", currentLanguage === "ar" ? "ar" : "en");
  }, [currentLanguage]);

  const toggleLanguage = () => {
    const newLang = currentLanguage === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  const navItems = [
    { name: t("home"), path: "/" },
    { name: t("about"), path: "/about" },
    { name: t("projects"), path: "/projects" },
    { name: t("gallery"), path: "/gallery" },
    { name: t("contact"), path: "/contact" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ease-out ${
          scrolled
            ? "bg-[#0B1624]/98 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.25)]"
            : "bg-[#0B1624]/90 backdrop-blur-lg"
        }`}
      >
        {/* Luxury bottom line: gold gradient */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px opacity-90"
          style={{
            background: `linear-gradient(90deg, transparent 0%, ${GOLD} 20%, ${GOLD_LIGHT} 50%, ${GOLD} 80%, transparent 100%)`,
            boxShadow: `0 0 12px ${GOLD}40`,
          }}
        />

        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo — premium frame */}
            <Link
              to="/"
              className="flex items-center gap-3 group shrink-0"
            >
              <div className="relative p-1.5 rounded-xl ring-1 ring-white/10 group-hover:ring-[#C9A227]/50 transition-all duration-300 bg-white/[0.02]">
                <img
                  src="/logo.jpeg"
                  alt={t("footer.fahd")}
                  className="h-11 w-auto object-contain max-w-[150px] rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
            </Link>

            {/* Desktop Nav — refined spacing & hover */}
            <nav className="hidden md:flex items-center gap-0.5">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`group relative px-5 py-3 rounded-lg text-sm font-medium tracking-wide transition-all duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-[#AFC3D6] hover:text-white"
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {isActive && (
                      <>
                        <span
                          className="absolute inset-0 rounded-lg opacity-20"
                          style={{ background: GOLD }}
                        />
                        <span
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full opacity-90"
                          style={{ background: GOLD, boxShadow: `0 0 8px ${GOLD}` }}
                        />
                      </>
                    )}
                    {!isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full bg-[#C9A227] transition-all duration-300 group-hover:w-6 opacity-0 group-hover:opacity-80" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Language + CTA — luxury buttons */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={toggleLanguage}
                type="button"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/15 bg-white/5 text-[#AFC3D6] hover:text-white hover:border-[#C9A227]/40 hover:bg-[#C9A227]/10 transition-all duration-300 text-xs font-semibold tracking-wider uppercase"
              >
                <span className={currentLanguage === "en" ? "text-[#C9A227]" : "text-white/50"}>EN</span>
                <span className="text-white/20 w-px h-4 bg-current" />
                <span className={currentLanguage === "ar" ? "text-[#C9A227]" : "text-white/50"}>ع</span>
              </button>
              <Link
                to="/contact"
                className="relative overflow-hidden px-6 py-3 rounded-xl text-white text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group/btn"
                style={{
                  background: `linear-gradient(135deg, #2F6FB0 0%, #0E2A47 100%)`,
                  boxShadow: "0 4px 20px rgba(47, 111, 176, 0.35), 0 0 0 1px rgba(201, 162, 39, 0.2)",
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#C9A227]/0 via-[#C9A227]/15 to-[#C9A227]/0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                <span className="relative">{t("contact")}</span>
              </Link>
            </div>

            {/* Mobile: Language + Menu */}
            <div className="flex md:hidden items-center gap-3">
              <div className="flex rounded-xl border border-white/15 bg-white/5 overflow-hidden">
                <button
                  onClick={() => currentLanguage !== "en" && toggleLanguage()}
                  type="button"
                  className={`px-3.5 py-2.5 text-xs font-semibold tracking-wider transition-all duration-300 ${
                    currentLanguage === "en"
                      ? "bg-[#C9A227]/20 text-[#C9A227]"
                      : "text-[#AFC3D6] hover:text-white"
                  }`}
                >
                  EN
                </button>
                <span className="w-px bg-white/15 self-stretch" />
                <button
                  onClick={() => currentLanguage !== "ar" && toggleLanguage()}
                  type="button"
                  className={`px-3.5 py-2.5 text-xs font-semibold tracking-wider transition-all duration-300 font-arabic ${
                    currentLanguage === "ar"
                      ? "bg-[#C9A227]/20 text-[#C9A227]"
                      : "text-[#AFC3D6] hover:text-white"
                  }`}
                >
                  ع
                </button>
              </div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="p-3 rounded-xl border border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-[#C9A227]/30 transition-all duration-300"
                aria-label="Menu"
              >
                {isOpen ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu — premium panel */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div
            className="absolute top-0 right-0 w-full max-w-sm h-full flex flex-col shadow-2xl"
            style={{
              background: "linear-gradient(180deg, #0F1F33 0%, #0B1624 100%)",
              borderLeft: "1px solid rgba(201, 162, 39, 0.2)",
              boxShadow: "-20px 0 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)",
            }}
          >
            <div
              className="p-6 pt-8 flex items-center justify-between border-b border-white/10"
              style={{ borderBottomColor: "rgba(201, 162, 39, 0.15)" }}
            >
              <span className="text-[#AFC3D6] font-medium" style={{ textShadow: "0 0 20px rgba(201,162,39,0.2)" }}>
                {t("footer.fahd")}
              </span>
              <button
                onClick={() => setIsOpen(false)}
                type="button"
                className="p-2.5 rounded-xl text-white hover:bg-white/10 hover:text-[#C9A227] transition-colors"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="p-6 flex-1 space-y-1 overflow-y-auto">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block py-4 px-4 rounded-xl text-base font-medium transition-all duration-300 ${
                    location.pathname === item.path
                      ? "text-white bg-[#2F6FB0]/20 border border-[#C9A227]/30"
                      : "text-[#AFC3D6] hover:text-white hover:bg-white/5 border border-transparent"
                  }`}
                  style={
                    location.pathname === item.path
                      ? { boxShadow: "0 0 20px rgba(47, 111, 176, 0.15), inset 0 1px 0 rgba(201,162,39,0.1)" }
                      : {}
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div
              className="p-6 border-t border-white/10"
              style={{ borderTopColor: "rgba(201, 162, 39, 0.15)" }}
            >
              <Link
                to="/contact"
                className="block w-full py-4 text-center rounded-xl text-white font-semibold transition-all duration-300 hover:opacity-95"
                style={{
                  background: "linear-gradient(135deg, #2F6FB0 0%, #0E2A47 100%)",
                  boxShadow: "0 4px 20px rgba(47, 111, 176, 0.4), 0 0 0 1px rgba(201, 162, 39, 0.15)",
                }}
                onClick={() => setIsOpen(false)}
              >
                {t("contact")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

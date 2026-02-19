/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { FaBuilding, FaDollyFlatbed, FaRegBuilding } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const GOLD = "#C9A227";

const services = [
  { keyTitle: "st1", keyDesc: "s1", icon: FaBuilding },
  { keyTitle: "st2", keyDesc: "s2", icon: FaDollyFlatbed },
  { keyTitle: "st3", keyDesc: "s3", icon: FaRegBuilding },
];

function Home() {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="bg-[#0B1624]">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/1h.jpg')" }}
        >
          <div className="absolute inset-0 bg-[#0B1624]/65" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-20">
          <p className="text-[#4A86C5] font-semibold tracking-wide mb-4">{t("h1")}</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {t("h2")}
          </h1>
          <p className="text-[#AFC3D6] text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            {t("h3")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#2F6FB0] text-white font-semibold hover:bg-[#4A86C5] transition-colors shadow-lg shadow-[#2F6FB0]/25"
            >
              {t("knowMore")}
              <span className="rtl:rotate-180">→</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              {t("Contact Us")}
            </Link>
          </div>
        </div>
      </section>

      {/* About strip */}
      <section className="px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-2/5 shrink-0">
            <img
              src="/h1.png"
              alt={t("companyName")}
              className="w-full rounded-2xl object-cover shadow-xl"
            />
          </div>
          <div className="flex-1 space-y-6">
            <span className="text-[#4A86C5] font-semibold text-lg">{t("abpage")}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              {t("h2")}<span className="text-[#2F6FB0]">.</span>
            </h2>
            <p className="text-[#AFC3D6] leading-relaxed text-lg">
              {t("h4")}
            </p>
            <ul className="space-y-3">
              {["h5", "h6", "h7"].map((key) => (
                <li key={key} className="flex items-center gap-3 text-[#AFC3D6]">
                  <span className="w-2 h-2 rounded-full bg-[#2F6FB0]" />
                  {t(key)}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2F6FB0] text-white font-medium hover:bg-[#4A86C5] transition-colors"
            >
              {t("Materials")}
              <span className="rtl:rotate-180">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner — luxury */}
      <section className="relative py-20 md:py-28 px-4 overflow-hidden">
         
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.42]" style={{ backgroundImage: "url('/image%20182.png')" }} />
       
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">{t("h8")}</h2>
          <div className="w-20 h-0.5 rounded-full mx-auto mb-6 opacity-80" style={{ background: GOLD }} />
          <p className="text-[#AFC3D6] text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto">{t("h9")}</p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 px-10 py-4 rounded-xl text-white font-semibold tracking-wide transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
            style={{
              background: "linear-gradient(135deg, #2F6FB0 0%, #0E2A47 100%)",
              boxShadow: "0 4px 24px rgba(47, 111, 176, 0.4), 0 0 0 1px rgba(201, 162, 39, 0.2)",
            }}
          >
            <span>{t("Contact Us")}</span>
            <span className="rtl:rotate-180 transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </section>

      {/* Services — luxury block */}
      <section className="relative px-4 md:px-8 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1624] via-[#0F1F33]/50 to-[#0B1624]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px opacity-60" style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }} />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{t("serves")}</h2>
            <div className="mt-3 w-16 h-0.5 rounded-full mx-auto opacity-80" style={{ background: GOLD }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((item, index) => (
              <motion.div
                key={item.keyTitle}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="group flex flex-col rounded-2xl border border-white/10 bg-[#0F1F33]/80 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-[#C9A227]/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.25),0_0_0_1px_rgba(201,162,39,0.1)]"
              >
                <div className="p-8 md:p-10 flex flex-col flex-1 min-h-[320px] md:min-h-[340px]">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center ring-1 ring-white/10 group-hover:ring-[#C9A227]/50 transition-all duration-300 bg-white/[0.04]" style={{ boxShadow: "0 0 0 1px rgba(201,162,39,0.1)" }}>
                      <item.icon className="w-8 h-8 text-[#C9A227]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white text-center mb-4 pb-3 border-b border-white/10 group-hover:border-[#C9A227]/30 transition-colors" style={{ borderBottomWidth: "1px" }}>
                    {t(item.keyTitle)}
                  </h3>
                  <p className="text-[#AFC3D6] text-center text-[15px] leading-[1.75] flex-1 flex items-center justify-center min-h-[140px] max-w-md mx-auto">
                    {t(item.keyDesc)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

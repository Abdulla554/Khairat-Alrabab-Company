import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import {
  Construction,
  HardHat,
  Truck,
  Building2,
  Home,
  Mail,
  ImageIcon,
} from "lucide-react";

const GOLD = "#C9A227";

const activities = [
  { keyTitle: "st1", keyDesc: "scope1Desc", icon: HardHat },
  { keyTitle: "st2", keyDesc: "scope2Desc", icon: Truck },
  { keyTitle: "st3", keyDesc: "scope3Desc", icon: Building2 },
];

const Products = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <div className="min-h-screen bg-[#0B1624] text-white">
      {/* Hero */}
      <section className="relative py-20 md:py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E2A47]/60 to-[#0B1624]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/60 to-transparent" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#0F1F33] border border-white/10 mb-6"
            style={{ boxShadow: "0 0 0 1px rgba(201,162,39,0.1)" }}
          >
            <Construction className="w-8 h-8 text-[#C9A227]" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
          >
            {t("projects")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#AFC3D6] text-lg md:text-xl max-w-2xl mx-auto"
          >
            {t("projectsIntro")}
          </motion.p>
        </div>
      </section>

      {/* Activity areas — 3 cards */}
      <section className="relative px-4 md:px-8 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-[#4A86C5] font-bold text-2xl md:text-3xl mb-12">
            {t("serves")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {activities.map((item, index) => (
              <motion.div
                key={item.keyTitle}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group rounded-2xl border border-white/10 bg-[#0F1F33]/80 backdrop-blur-sm p-8 flex flex-col items-center text-center min-h-[280px] justify-center hover:border-[#C9A227]/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-white/[0.04] ring-1 ring-white/10 mb-5 group-hover:ring-[#C9A227]/40 transition-all">
                  <item.icon className="w-7 h-7 text-[#C9A227]" />
                </div>
                <h2 className="font-bold text-xl text-white mb-3">{t(item.keyTitle)}</h2>
                <p className="text-[#AFC3D6] text-sm leading-relaxed">{t(item.keyDesc)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon / CTA block */}
      <section className="relative px-4 md:px-8 py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1624] via-[#0F1F33]/30 to-[#0B1624]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/50 to-transparent" />
        <div className="relative max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-[#0F1F33]/70 backdrop-blur-sm p-8 md:p-12 text-center"
            style={{
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.35), 0 0 0 1px rgba(201,162,39,0.08)",
            }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {t("Coming Soon")}
            </h2>
            <div className="w-16 h-0.5 rounded-full mx-auto mb-6 opacity-80" style={{ background: GOLD }} />
            <p className="text-[#AFC3D6] text-lg mb-10">
              {t("Exciting things are on the way!")}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] ${isAr ? "flex-row-reverse" : ""}`}
                style={{
                  background: "linear-gradient(135deg, #2F6FB0 0%, #0E2A47 100%)",
                  boxShadow: "0 4px 20px rgba(47, 111, 176, 0.4), 0 0 0 1px rgba(201, 162, 39, 0.15)",
                }}
              >
                <Mail className="w-5 h-5" />
                {t("contact")}
              </Link>
              <Link
                to="/gallery"
                className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-white/20 bg-white/5 text-white font-semibold hover:bg-white/10 hover:border-[#C9A227]/40 transition-all duration-300 ${isAr ? "flex-row-reverse" : ""}`}
              >
                <ImageIcon className="w-5 h-5" />
                {t("gallery")}
              </Link>
              <Link
                to="/"
                className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-white/15 text-[#AFC3D6] font-medium hover:text-white hover:bg-white/5 transition-colors ${isAr ? "flex-row-reverse" : ""}`}
              >
                <Home className="w-5 h-5" />
                {t("Back to Home")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;

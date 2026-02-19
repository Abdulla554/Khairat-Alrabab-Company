import React from "react";
import { Link } from "react-router-dom";
import { ImageIcon, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

const Gallery = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <div className="min-h-screen bg-[#0B1624]">
      {/* Hero */}
      <section className="relative py-20 md:py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E2A47]/40 to-transparent" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {t("galleryTitle")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[#AFC3D6] text-lg md:text-xl"
          >
            {t("gallerySubtitle")}
          </motion.p>
        </div>
      </section>

      {/* Placeholder content - ready for future images */}
      <section className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="aspect-video rounded-2xl bg-[#0F1F33] border border-white/10 flex items-center justify-center"
            >
              <div className="flex flex-col items-center gap-3 text-[#AFC3D6]/70">
                <ImageIcon className="w-12 h-12" />
                <span className="text-sm">{t("Coming Soon")}</span>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2F6FB0] text-white font-medium hover:bg-[#4A86C5] transition-colors ${isAr ? "flex-row-reverse" : ""}`}
          >
            {t("Back to Home")}
            <ArrowRight className={`w-5 h-5 ${isAr ? "rotate-180" : ""}`} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Gallery;

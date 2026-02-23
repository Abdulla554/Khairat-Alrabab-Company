import React from "react";
import { Link } from "react-router-dom";
import { ImageIcon, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

const Gallery = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  const images = ["1p1.jpeg", "2p1.jpeg", "3p1.jpeg", "1p2.jpeg", "2p2.jpeg", "3p2.jpeg"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050815] via-[#050815] to-[#0B1624] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-16 pt-24 md:px-8 md:pb-20 md:pt-28">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute -left-40 top-0 h-72 w-72 rounded-full bg-[#2F6FB0]/35 blur-3xl" />
          <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#C9A227]/18 blur-3xl" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-center">
          <div className={`flex-1 ${isAr ? "md:pl-10 text-right" : "md:pr-10"}`}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-[#AFC3D6] backdrop-blur-sm ${isAr ? "flex-row-reverse" : ""}`}
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#2F6FB0]/20 text-[#C9D7E5]">
                <ImageIcon className="h-3.5 w-3.5" />
              </span>
              {t("galleryTag")}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-5 text-3xl font-bold tracking-tight text-white md:text-5xl"
            >
              {t("galleryTitle")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="mt-4 max-w-xl text-sm text-[#AFC3D6] md:text-base"
            >
              {t("gallerySubtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className={`mt-6 flex flex-wrap items-center gap-3 text-xs text-[#C9D7E5] md:text-sm ${isAr ? "flex-row-reverse" : ""}`}
            >
              <span className="rounded-xl bg-white/[0.03] px-4 py-2 backdrop-blur-sm">
                {t("galleryHighlight1")}
              </span>
              <span className="rounded-xl bg-white/[0.03] px-4 py-2 backdrop-blur-sm">
                {t("galleryHighlight2")}
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mx-auto flex w-full max-w-md items-center justify-center md:flex-1"
          >
            <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0F1F33] via-[#101928] to-[#050815] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.7)]">
              <div className="absolute inset-0 opacity-40 mix-blend-screen">
                <div className="absolute -right-10 top-0 h-40 w-40 rounded-full bg-[#4A86C5]/30 blur-3xl" />
                <div className="absolute -left-5 bottom-0 h-36 w-36 rounded-full bg-[#C9A227]/30 blur-3xl" />
              </div>
              <div className="relative grid grid-cols-3 gap-2">
                {images.slice(0, 6).map((img, index) => (
                  <div
                    key={img}
                    className={`aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[#0B1624] ${
                      index === 1 || index === 4 ? "translate-y-0" : ""
                    }`}
                    style={{
                      backgroundImage: `url(${img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="relative px-4 pb-24 md:px-8 md:pb-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/50 to-transparent" />

        <div className="mx-auto max-w-7xl pt-16">
          

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((img, index) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-[#0F1F33] shadow-[0_18px_60px_rgba(0,0,0,0.7)]"
              >
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${img})` }}
                />
              
              </motion.div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/"
              className={`inline-flex items-center gap-2 rounded-xl bg-[#2F6FB0] px-7 py-3 text-sm font-medium text-white shadow-[0_18px_40px_rgba(47,111,176,0.6)] transition-all duration-300 hover:bg-[#4A86C5] hover:shadow-[0_22px_60px_rgba(47,111,176,0.7)] active:scale-[0.97] ${
                isAr ? "flex-row-reverse" : ""
              }`}
            >
              {t("Back to Home")}
              <ArrowRight className={`h-5 w-5 transition-transform ${isAr ? "rotate-180 -scale-x-100" : ""}`} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;

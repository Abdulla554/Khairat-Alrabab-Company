import React, { useEffect } from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Building2, Factory } from "lucide-react";

const Products = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  const images = ["1p1.jpeg", "2p1.jpeg", "3p1.jpeg", "1p2.jpeg", "2p2.jpeg", "3p2.jpeg"];
  const projectImages = [
    ["1p1.jpeg", "1p2.jpeg", "2p1.jpeg"],
    ["2p2.jpeg", "3p1.jpeg", "3p2.jpeg"],
  ];

  const projects = [
    {
      keyTitle: "project1Title",
      keyDesc: "project1Description",
      icon: Building2,
      badge: "projectType1",
    },
    {
      keyTitle: "project2Title",
      keyDesc: "project2Description",
      icon: Factory,
      badge: "projectType2",
    },
  ];
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      {/* Hero */}
      <section className="relative border-b border-white/5 bg-gradient-to-b from-[#050816] via-[#050816] to-[#02040b] px-4 pb-16 pt-24 md:px-10 md:pt-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-center">
          <div className={`flex-1 ${isAr ? "md:pl-10 text-right" : "md:pr-10"}`}>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className={`inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-[11px] font-medium text-slate-200 backdrop-blur-sm ${isAr ? "flex-row-reverse" : ""}`}
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {t("projectsTag")}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-4 text-3xl font-bold tracking-tight text-white md:text-[2.7rem]"
            >
              {t("projects")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="mt-4 max-w-xl text-[15px] leading-relaxed text-slate-100 md:text-[17px]"
            >
              {t("projectsIntro")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className={`mt-6 flex flex-wrap gap-3 text-[13px] text-slate-100 md:text-[14px] ${isAr ? "flex-row-reverse text-right" : ""}`}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>{t("projectsHighlight1")}</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-amber-300" />
                <span>{t("projectsHighlight2")}</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.28 }}
              className="mt-8 grid grid-cols-3 gap-3 text-[12px] text-slate-100 md:text-[13px]"
            >
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-3 backdrop-blur-sm">
                <p className="text-[9px] uppercase tracking-[0.18em] text-slate-400">{t("projectsStat1Label")}</p>
                <p className="mt-1 text-sm font-semibold text-white md:text-base">{t("projectsStat1Value")}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-3 backdrop-blur-sm">
                <p className="text-[9px] uppercase tracking-[0.18em] text-slate-400">{t("projectsStat2Label")}</p>
                <p className="mt-1 text-sm font-semibold text-white md:text-base">{t("projectsStat2Value")}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-3 backdrop-blur-sm">
                <p className="text-[9px] uppercase tracking-[0.18em] text-slate-400">{t("projectsStat3Label")}</p>
                <p className="mt-1 text-sm font-semibold text-white md:text-base">{t("projectsStat3Value")}</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="relative mx-auto flex w-full max-w-md items-center justify-center md:flex-1"
          >
            <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-[#050b15] p-5 shadow-[0_22px_70px_rgba(0,0,0,0.85)]">
              <div className="relative flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-300">{t("projectsMiniLabel")}</span>
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                    <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/40 p-3 backdrop-blur-sm">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                    {t("projectsMiniSubtitle")}
                  </p>
                  <p className="mt-2 text-xs font-semibold text-white md:text-sm">{t("projectsMiniTitle")}</p>
                  <p className="mt-1 text-[11px] text-slate-300 line-clamp-3">{t("projectsMiniText")}</p>
                </div>

                <div className="grid grid-cols-3 gap-2 text-[10px] text-slate-200 md:text-xs">
                  <div className="rounded-xl bg-white/[0.03] p-2.5">
                    <p className="text-[9px] text-slate-400">{t("projectsStat1Label")}</p>
                    <p className="mt-1 text-xs font-semibold text-white md:text-sm">{t("projectsStat1Value")}</p>
                  </div>
                  <div className="rounded-xl bg-white/[0.03] p-2.5">
                    <p className="text-[9px] text-slate-400">{t("projectsStat2Label")}</p>
                    <p className="mt-1 text-xs font-semibold text-white md:text-sm">{t("projectsStat2Value")}</p>
                  </div>
                  <div className="rounded-xl bg-white/[0.03] p-2.5">
                    <p className="text-[9px] text-slate-400">{t("projectsStat3Label")}</p>
                    <p className="mt-1 text-xs font-semibold text-white md:text-sm">{t("projectsStat3Value")}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects list */}
      <section className="border-b border-white/5 bg-[#050816] px-4 pb-18 pt-10 md:px-10 md:pb-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start">
          <div className={`md:w-64 ${isAr ? "md:pl-10 text-right" : "md:pr-10"}`}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400">
              {t("projectsSectionLabel")}
            </p>
            <p className="mt-3 text-[15px] text-slate-100 md:text-[17px]">{t("projectsSectionText")}</p>
          </div>

          <div className="flex-1 space-y-7">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.article
                  key={project.keyTitle}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="group relative overflow-hidden rounded-3xl border border-white/8 bg-[#050b15] p-5 shadow-[0_18px_55px_rgba(0,0,0,0.8)] md:p-7"
                >
                  <div className={`relative grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] ${isAr ? "md:direction-rtl" : ""}`}>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.03] ring-1 ring-white/10 md:h-14 md:w-14">
                          <Icon className="h-6 w-6 text-emerald-400" />
                        </div>
                        <div className={isAr ? "text-right" : ""}>
                          <div className="inline-flex items-center gap-2">
                            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-400 md:text-xs">
                              {t("projectIndex", { index: index + 1 })}
                            </span>
                            <span className="h-0.5 w-6 rounded-full bg-white/10" />
                          </div>
                          <h2 className="mt-2 text-lg font-semibold text-white md:text-2xl">
                            {t(project.keyTitle)}
                          </h2>
                        </div>
                      </div>

                      <div className={`text-[13px] text-slate-100 md:text-[15px] ${isAr ? "text-right" : ""}`}>
                        <p className="leading-relaxed font-medium">{t(project.keyDesc)}</p>
                        <div className={`mt-4 flex flex-wrap items-center gap-2 text-[11px] md:text-[12px] ${isAr ? "flex-row-reverse" : ""}`}>
                          <span className="rounded-full bg-black/40 px-3 py-1 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-100">
                            {t(project.badge)}
                          </span>
                          <span className="rounded-full border border-white/10 bg-white/[0.02] px-2.5 py-1 text-[10px] md:text-[11px] text-slate-100">
                            {t("projectDuration")}
                          </span>
                          <span className="rounded-full border border-white/10 bg-white/[0.02] px-2.5 py-1 text-[10px] md:text-[11px] text-slate-100">
                            {t("projectLocation")}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="relative hidden h-full md:block">
                      <div className="grid h-full grid-cols-2 gap-2">
                        {projectImages[index].map((src, imgIdx) => (
                          <div
                            key={src}
                            className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] ${imgIdx === 0 ? "row-span-2" : ""}`}
                          >
                            <img
                              src={`/${src}`}
                              alt={`${t(project.keyTitle)} ${imgIdx + 1}`}
                              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default Products;

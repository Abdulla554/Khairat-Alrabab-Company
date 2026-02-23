/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import {
  Target,
  Eye,
  Diamond,
  Briefcase,
  Users,
  Handshake,
  Shield,
  Leaf,
  BarChart3,
  CheckCircle2,
} from "lucide-react";

const About = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const visionPoints = [t("visionPoints.v1"), t("visionPoints.v2"), t("visionPoints.v3")];
  const missionPoints = [t("missionPoints.m1"), t("missionPoints.m2"), t("missionPoints.m3"), t("missionPoints.m4")];
  const competitivePoints = [t("competitivePoints.c1"), t("competitivePoints.c2"), t("competitivePoints.c3"), t("competitivePoints.c4")];
  const valuesPoints = [t("valuesPoints.v1"), t("valuesPoints.v2"), t("valuesPoints.v3"), t("valuesPoints.v4"), t("valuesPoints.v5")];
  const targetPoints = [t("targetMarketsPoints.t1"), t("targetMarketsPoints.t2"), t("targetMarketsPoints.t3"), t("targetMarketsPoints.t4"), t("targetMarketsPoints.t5")];

  const sections = [
    { icon: Eye, titleKey: "Nabout", points: visionPoints },
    { icon: Target, titleKey: "Mission", points: missionPoints },
    { icon: Briefcase, titleKey: "competitiveTitle", points: competitivePoints },
    { icon: Users, titleKey: "humanCapitalTitle", subKey: "humanCapitalSub", descKey: "humanCapitalDesc" },
    { icon: Handshake, titleKey: "partnershipsTitle", descKey: "partnershipsDesc" },
    { icon: Shield, titleKey: "qhseTitle", descKey: "qhseDesc" },
    { icon: Leaf, titleKey: "sustainabilityTitle", descKey: "sustainabilityDesc" },
    { icon: BarChart3, titleKey: "targetMarketsTitle", points: targetPoints },
    { icon: Diamond, titleKey: "valuesTitle", points: valuesPoints },
  ];

  const scopeItems = [
    { titleKey: "scope1Title", descKey: "scope1Desc" },
    { titleKey: "scope2Title", descKey: "scope2Desc" },
    { titleKey: "scope3Title", descKey: "scope3Desc" },
  ];

  return (
    <div className="bg-[#0B1624] text-white min-h-screen">
      {/* Hero */}
      <section className="relative py-20 md:py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/a1.png')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-[#0B1624]/20" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("abpage")}</h1>
          <p className="text-[#AFC3D6] text-lg md:text-xl">{t("abpagesub")}</p>
        </div>
      </section>

      {/* Company intro + Mission/Vision */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <img src="/1.png" alt={t("companyName")} className="w-full rounded-2xl shadow-xl" />
          </div>
          <div className="space-y-8">
            <div>
              <p className="text-[#4A86C5] font-semibold mb-2">{t("footer.fahd")}</p>
              <p className="text-[#AFC3D6] leading-relaxed">{t("about1")}</p>
            </div>
            <div>
              <p className="text-[#4A86C5] font-semibold mb-2">{t("Nabout")}</p>
              <p className="text-[#AFC3D6] leading-relaxed">{t("about2")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scope of Services */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
          <Briefcase className="w-8 h-8 text-[#2F6FB0]" />
          {t("scopeTitle")}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {scopeItems.map((item) => (
            <div
              key={item.titleKey}
              className="rounded-2xl bg-[#0F1F33] border border-white/10 p-6"
            >
              <h3 className="font-bold text-lg text-[#4A86C5] mb-3">{t(item.titleKey)}</h3>
              <p className="text-[#AFC3D6] text-sm leading-relaxed">{t(item.descKey)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline: حلقات متصلة ومتسلسلة */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 py-16">
        <div className="relative">
          {/* الخط الرأسي الواصل */}
          <div
            className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-[#2F6FB0] via-[#C9A227]/60 to-[#2F6FB0] left-6"
            aria-hidden
          />
          {sections.map((sec, i) => (
            <motion.div
              key={sec.titleKey}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative flex gap-6 md:gap-8 pb-12 last:pb-0"
            >
              {/* الحلقة (الدائرة) على الخط */}
              <div className="relative z-10 flex shrink-0 items-start pt-1">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#0F1F33] border-2 border-[#2F6FB0] ring-4 ring-[#0B1624] shadow-lg">
                  <sec.icon className="w-5 h-5 text-[#C9A227]" />
                </div>
              </div>
              {/* محتوى الحلقة */}
              <div className="flex-1 min-w-0 rounded-2xl bg-[#0F1F33] border border-white/10 p-6 md:p-6">
                <h3 className="font-bold text-lg text-white mb-1">{t(sec.titleKey)}</h3>
                {sec.subKey && (
                  <p className="text-[#4A86C5] text-sm font-medium mb-2">{t(sec.subKey)}</p>
                )}
                {sec.descKey && (
                  <p className="text-[#AFC3D6] text-sm leading-relaxed">{t(sec.descKey)}</p>
                )}
                {sec.points && (
                  <ul className="space-y-2 mt-2">
                    {sec.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-2 text-[#AFC3D6] text-sm">
                        <CheckCircle2 className="w-4 h-4 text-[#2F6FB0] shrink-0 mt-0.5" />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Rating / CTA — جاذب للنظر */}
      <section className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/7.png')] bg-cover bg-center opacity-[0.14]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1624]/40 via-[#0E2A47]/95 to-[#0B1624]/40" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/50 to-transparent" />
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl border border-white/10 bg-[#0F1F33]/60 backdrop-blur-sm p-8 md:p-12 text-center overflow-hidden"
            style={{
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.4), 0 0 0 1px rgba(201, 162, 39, 0.1)",
            }}
          >
            <span className="absolute top-6 left-1/2 -translate-x-1/2 text-[#C9A227]/30 text-6xl font-serif select-none" aria-hidden>"</span>
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-white leading-relaxed mt-4 mb-8 max-w-2xl mx-auto">
              {t("rating")}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                style={{
                  background: "linear-gradient(135deg, #2F6FB0 0%, #0E2A47 100%)",
                  boxShadow: "0 4px 20px rgba(47, 111, 176, 0.4), 0 0 0 1px rgba(201, 162, 39, 0.15)",
                }}
              >
                {t("Contact Us")}
                <span className="rtl:rotate-180">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;

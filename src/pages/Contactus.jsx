/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
} from "lucide-react";
import { useTranslation } from "react-i18next";

function Contactus() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  const contactDetails = [
    { icon: Phone, title: t("Phone Number"), content: t("contactPhone") },
    { icon: Mail, title: t("Email Address"), content: t("contactEmail") },
    { icon: MapPin, title: t("location"), content: isAr ? t("contactAddressAr") : t("contactAddress") },
    { icon: Clock, title: t("footer.Work Hours"), content: t("footer.time") },
  ];

  const [formData, setFormData] = useState({
    name: "",
    telephone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic (e.g. API or email service)
  };

  return (
    <div className="bg-[#0B1624] min-h-screen text-white">
      {/* Hero */}
      <section className="relative py-20 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/image 141.png')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-[#0B1624]/80" />
        <div className="relative max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("contact_us")}</h1>
          <p className="text-[#AFC3D6] text-lg">{t("contact_message")}</p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 -mt-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactDetails.map((detail, index) => (
            <div
              key={index}
              className="rounded-2xl bg-[#0F1F33] border border-white/10 p-6 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-[#2F6FB0]/20 flex items-center justify-center mb-4">
                <detail.icon className="w-6 h-6 text-[#4A86C5]" />
              </div>
              <h3 className="font-semibold text-white mb-2">{detail.title}</h3>
              <p className="text-[#AFC3D6] text-sm leading-relaxed">{detail.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form + side content */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">{t("Message")}</h2>
            <p className="text-[#AFC3D6] mb-8">{t("Message2")}</p>
            <div className="rounded-2xl bg-[#0F1F33] border border-white/10 p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder={t("Name")}
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#0B1624] border border-white/10 text-white placeholder-[#AFC3D6]/60 focus:outline-none focus:ring-2 focus:ring-[#2F6FB0]"
                  required
                />
                <input
                  type="tel"
                  name="telephone"
                  placeholder={t("telephone")}
                  value={formData.telephone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#0B1624] border border-white/10 text-white placeholder-[#AFC3D6]/60 focus:outline-none focus:ring-2 focus:ring-[#2F6FB0]"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t("email")}
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#0B1624] border border-white/10 text-white placeholder-[#AFC3D6]/60 focus:outline-none focus:ring-2 focus:ring-[#2F6FB0]"
                  required
                />
                <textarea
                  name="message"
                  placeholder={t("Message")}
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-[#0B1624] border border-white/10 text-white placeholder-[#AFC3D6]/60 focus:outline-none focus:ring-2 focus:ring-[#2F6FB0] resize-y"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#2F6FB0] text-white font-semibold hover:bg-[#4A86C5] transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  {t("sendMessage")}
                </button>
              </form>
            </div>
          </div>
          <div className="space-y-6">
            <img
              src="/3.png"
              alt="Contact"
              className="w-full rounded-2xl object-cover max-h-64"
            />
            <div className="rounded-2xl bg-[#0F1F33] border border-white/10 p-6">
              <MessageCircle className="w-10 h-10 text-[#4A86C5] mb-4" />
              <h3 className="font-semibold text-white mb-2">{t("Message")}</h3>
              <p className="text-[#AFC3D6] text-sm">{t("bnmass")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl h-[400px] md:h-[500px] bg-[#0F1F33]">
          <iframe
            className="w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d288.0306685987557!2d47.7875769!3d30.5550455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fc498c665bf8da7%3A0xb223fc750bda53ab!2z2YXYsdmD2LIg2KjYsdisINiz2YjYsdmF2KfYqCDYp9mE2YPYsdio2Iwg2KjZitiq2KfYjCDYp9mE2LPYqNmK2KjZhNip!5e0!3m2!1sen!2siq!4v1717945600000!5m2!1sen!2siq"
            loading="lazy"
            title="Map"
          />
        </div>
        <div className="mt-4 text-center">
          <a
            href="https://www.google.com/maps/place/Hillah,+Babil,+Iraq/@32.4817408,44.4192592,13z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2F6FB0] text-white font-medium hover:bg-[#4A86C5] transition-colors"
          >
            <MapPin className="w-5 h-5" />
            {t("location")}
          </a>
        </div>
      </section>
    </div>
  );
}

export default Contactus;

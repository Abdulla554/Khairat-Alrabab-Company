import React, { useEffect } from 'react';

const Contact = () => {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }, []);
    return (
        <div className="bg-gray-100 p-4">
            {/* Contact Information Section */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-lg mb-4">We'd love to hear from you! Reach out to us through any of the following methods:</p>
                    <div className="flex flex-col md:flex-row justify-around">
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-xl font-semibold">Email</h3>
                            <p className="text-gray-600">support@example.com</p>
                        </div>
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-xl font-semibold">Phone</h3>
                            <p className="text-gray-600">+1 (234) 567-8901</p>
                        </div>
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-xl font-semibold">Address</h3>
                            <p className="text-gray-600">123 Main St, Anytown, USA</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
                <form className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                        <input type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Name" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                        <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Email" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
                        <textarea id="message" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Message" rows="4" required></textarea>
                    </div>
                    <div className="flex items-center justify-center">
                        <button type="submit" className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">Send Message</button>
                    </div>
                </form>
            </section>

            {/* Map Section — موقع الشركة: بابل، الحلة، حي الصحة، العراق */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold text-center mb-8">Our Location</h2>
                <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
                    <iframe
                        title="Khairat Alrabab — Babylon, Hillah, Hay Alsaha, Iraq"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d288.0306685987557!2d47.7875769!3d30.5550455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fc498c665bf8da7%3A0xb223fc750bda53ab!2z2YXYsdmD2LIg2KjYsdisINiz2YjYsdmF2KfYqCDYp9mE2YPYsdio2Iwg2KjZitiq2KfYjCDYp9mE2LPYqNmK2KjZhNip!5e0!3m2!1sen!2siq!4v1717945600000!5m2!1sen!2siq"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    />
                </div>
                <p className="text-center text-gray-600 mt-3">Babylon — Hillah — Hay Alsaha, Iraq</p>
            </section>

            {/* FAQ Section */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                <div className="max-w-4xl mx-auto">
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold">What is your return policy?</h3>
                        <p className="text-gray-600">We offer a 30-day return policy on all items. Please contact us for more details.</p>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold">How can I track my order?</h3>
                        <p className="text-gray-600">Once your order has shipped, you will receive an email with tracking information.</p>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold">Do you ship internationally?</h3>
                        <p className="text-gray-600">Yes, we ship to many countries worldwide. Please check our shipping policy for more information.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact; 
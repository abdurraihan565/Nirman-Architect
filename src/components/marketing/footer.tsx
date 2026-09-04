"use client";

import { motion } from "framer-motion";

const locations = [
    {
        title: "BANGLADESH",
        address: "Level -1, House - 2/A, Road- 2/1 Block-L, Banani, Dhaka 1213",
        phone: "+880 1705-847906",
        phoneLink: "tel:+8801705847906",
    },
    {
        title: "UNITED STATES",
        address: "1251, 447 Broadway, 2nd Floor, New York, NY, New York, US, 10013",
        phone: "+19177402976",
        phoneLink: "tel:+19177402976",
    },
    {
        title: "UNITED ARAB EMIRATES",
        address: "Plot 03, WS-2, Oud Metha Rd - Umm Hurair 2 - Dubai - UAE",
        phone: "+971558525669",
        phoneLink: "tel:+971558525669",
    },
];

const Footer = () => {
    return (
        <footer className="w-full bg-white border-t border-border">
            {/* Mailing List Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mx-auto px-8 pt-16 pb-12 text-center"
            >
                <h3 className="text-xl font-medium mb-6">Join our mailing list</h3>
                <div className="text-left">
                    <label className="text-sm text-muted-foreground mb-2 block">Email *</label>
                    <div className="flex gap-4 mb-4">
                        <input
                            type="email"
                            className="flex-1 border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors"
                        />
                        <button className="border border-gray-300 rounded px-12 py-3 text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer">
                            Subscribe
                        </button>
                    </div>
                    <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
                        I want to subscribe to your mailing list.
                    </label>
                </div>
            </motion.div>

            {/* Locations Section */}
            <div className="border-t border-border">
                <div className="max-w-6xl mx-auto px-8 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {/* Location Columns */}
                        {locations.map((location, index) => (
                            <motion.div
                                key={location.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                                className="text-center"
                            >
                                <div className="flex justify-center mb-3">
                                    <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h4 className="text-xs font-bold uppercase tracking-wider mb-3">
                                    {location.title}
                                </h4>
                                <p className="text-xs text-muted-foreground leading-relaxed mb-2">
                                    {location.address}
                                </p>
                                <a
                                    href={location.phoneLink}
                                    className="text-xs text-foreground font-medium hover:text-primary transition-colors underline"
                                >
                                    {location.phone}
                                </a>
                            </motion.div>
                        ))}

                        {/* Connect Column */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-center"
                        >
                            <div className="flex justify-center mb-3">
                                <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                </svg>
                            </div>
                            <h4 className="text-xs font-bold uppercase tracking-wider mb-3">
                                Connect
                            </h4>
                            <div className="flex items-center justify-center gap-3">
                                <a href="#" className="w-8 h-8 rounded-full bg-foreground text-white flex items-center justify-center text-xs font-bold hover:bg-primary transition-colors">
                                    f
                                </a>
                                <a href="#" className="w-8 h-8 rounded-full bg-foreground text-white flex items-center justify-center text-xs font-bold hover:bg-primary transition-colors">
                                    in
                                </a>
                                <a href="#" className="w-8 h-8 rounded-full bg-foreground text-white flex items-center justify-center text-xs font-bold hover:bg-primary transition-colors">
                                    yt
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Bottom Links */}
            <div className="border-t border-border">
                <div className="max-w-5xl mx-auto px-8 py-6">
                    <div className="flex items-center justify-center gap-0">
                        <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors px-8">
                            APPOINTMENT
                        </a>
                        <span className="text-gray-300">|</span>
                        <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors px-8">
                            PRIVACY POLICY
                        </a>
                        <span className="text-gray-300">|</span>
                        <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors px-8">
                            DOWNLOADS
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

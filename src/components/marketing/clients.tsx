"use client";

import { motion } from "framer-motion";

const clients = [
    { name: "SMEC", logo: "/images/client-smec.png" },
    { name: "DOHWA", logo: "/images/client-dohwa.png" },
    { name: "Yooshin", logo: "/images/client-yooshin.png" },
    { name: "IRCON", logo: "/images/client-ircon.png" },
    { name: "Novo Nordisk", logo: "/images/client-novonordisk.png" },
    { name: "INSULCON", logo: "/images/client-insulcon.png" },
    { name: "X-Golf", logo: "/images/client-xgolf.png" },
    { name: "ST Engineering", logo: "/images/client-stengineering.png" },
];

const Clients = () => {
    return (
        <div className="relative w-full py-20 bg-white" id="clients">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto px-6 mb-12">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl md:text-3xl font-bold uppercase tracking-wide"
                >
                    OUR CLIENTS
                </motion.h2>
            </div>

            {/* Logos Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-10 max-w-4xl mx-auto px-6 items-center justify-items-center">
                {clients.map((client, index) => (
                    <motion.div
                        key={client.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.05 + index * 0.08 }}
                        className="flex items-center justify-center opacity-100 hover:grayscale hover:opacity-70 transition-all duration-300"
                    >
                        <img
                            src={client.logo}
                            alt={client.name}
                            className="max-w-[140px] md:max-w-[160px] h-auto object-contain"
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Clients;

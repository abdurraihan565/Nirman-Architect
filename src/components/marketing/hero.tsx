"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Video Background */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/videos/hero.mp4" type="video/mp4" />
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content - Center Aligned */}
            <div className="relative z-10 flex flex-col items-center text-center px-4">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-white text-sm md:text-base font-medium uppercase tracking-[0.4em]"
                >
                    WE ARE
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-white uppercase leading-none mt-4"
                >
                    DHAKA DESIGNER
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-white text-sm md:text-base font-medium uppercase tracking-[0.2em] mt-6"
                >
                    WE CARE WHO YOU ARE
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-10"
                >
                    <Link href="#contact">
                        <button className="bg-blue-600 text-white px-10 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-black hover:text-yellow-400 transition-colors cursor-pointer">
                            CONTACT
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

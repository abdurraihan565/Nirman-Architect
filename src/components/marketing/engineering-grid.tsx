"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const engineeringServices = [
    {
        title: "CIVIL & MEP\nENGINEERING",
        image: "/images/eng-civil.jpg",
    },
    {
        title: "TRANSPORT\nENGINEERING",
        image: "/images/eng-transport.jpg",
    },
    {
        title: "RENOVATION &\nRETROFITTING",
        image: "/images/eng-renovation.jpg",
    },
    {
        title: "LEED & GREEN\nCONSULTANCY",
        image: "/images/eng-leed.jpg",
    },
];

const EngineeringGrid = () => {
    return (
        <div className="relative w-full py-20 bg-white" id="engineering">
            {/* Header */}
            <div className="text-center max-w-4xl mx-auto px-6 mb-12">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl md:text-3xl font-bold uppercase tracking-wide mb-6"
                >
                    ENGINEERING SERVICES
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-[11px] md:text-xs text-muted-foreground leading-[1.8] max-w-3xl mx-auto"
                >
                    At Dhaka Designer, our comprehensive engineering services encompass Civil and MEP Engineering, covering all essential aspects of construction, from structural integrity to mechanical, electrical, and plumbing systems. We specialize in Transport Engineering, providing thorough studies, surveys, and design recommendations for roads and bridges. Our expertise extends to renovation and retrofitting, ensuring existing structures meet modern standards and requirements. Additionally, we offer advanced project management solutions to streamline the construction process, ensuring efficiency, safety, and quality in every project. Discover how our engineering services can support your construction needs at{" "}
                    <Link href="#" className="font-semibold text-foreground hover:text-primary transition-colors">
                        Dhaka Designer
                    </Link>.
                </motion.p>
            </div>

            {/* 4 Cards Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto px-6 mb-16">
                {engineeringServices.map((service, index) => (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                        className="group relative"
                    >
                        <div className="relative overflow-hidden">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full aspect-[3/4] object-cover"
                            />
                        </div>
                        {/* Text label - overlaps from right side, starts 20% from left */}
                        <div className="absolute bottom-0 left-[20%] right-0 bg-[#f0f0f0] py-3 px-4 text-center">
                            <p className="text-[10px] md:text-xs font-bold uppercase tracking-wide leading-tight whitespace-pre-line">
                                {service.title}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Construction & PMC Banner - Full Width */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative w-full overflow-hidden group cursor-pointer"
                style={{ height: "clamp(250px, 30vw, 350px)" }}
            >
                <img
                    src="/images/eng-construction.jpg"
                    alt="Construction & PMC"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-4">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white uppercase tracking-wide transition-all duration-300">
                        CONSTRUCTION & PMC
                    </h3>
                    <p className="text-white text-sm md:text-base font-medium uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        PROJECTS WITH QUALITY, BUDGET AND TIME-FRAME
                    </p>
                    <Link href="#contact">
                        <button className="border-2 border-white text-white px-8 py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-white hover:text-foreground transition-colors cursor-pointer">
                            Book A Meeting
                        </button>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default EngineeringGrid;

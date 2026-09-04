"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Services = () => {
    return (
        <div className="relative w-full" id="services">
            {/* ARCHITECTURE */}
            <div
                className="relative w-full overflow-hidden"
                style={{ height: "clamp(400px, 45vw, 500px)" }}
            >
                {/* White card - left side, 20% from top */}
                <div className="absolute left-0 bg-[#f0efeb]" style={{ width: "60%", top: "20%", bottom: 0 }}>
                    <div className="flex items-center h-full px-8 md:px-14 lg:px-20 py-12 pl-16 md:pl-24 lg:pl-32">
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="text-lg md:text-xl lg:text-2xl font-bold uppercase tracking-wide mb-4"
                            >
                                ARCHITECTURE
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-[11px] md:text-xs text-muted-foreground leading-[1.8] mb-6"
                            >
                                DhakaDesigner is your one-stop solution for all your architecture and design needs. Our team of experts provides comprehensive support, from site surveys and feasibility studies to the handover of the building, ensuring a seamless and successful completion of your project. We understand the importance of having a trusted partner who can guide you through every step of the design and construction process, and that's why we are dedicated to delivering high-quality, innovative, and cost-effective solutions that meet your needs and exceed your expectations. Contact us today to bring your vision to life.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <Link href="#" className="text-sm font-semibold hover:text-primary transition-colors">
                                    Read More
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Video - right side, 20% from bottom */}
                <div className="absolute right-0 z-10" style={{ width: "50%", top: 0, bottom: "20%" }}>
                    <video
                        src="/videos/service-architecture.mp4"
                        poster="/images/service-architecture.jpg"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover opacity-60"
                    />
                </div>
            </div>

            {/* Gap */}
            <div className="h-16 md:h-24 bg-white" />

            {/* INTERIOR DESIGN - no overlap */}
            <div
                className="relative w-full overflow-hidden"
                style={{ height: "clamp(400px, 45vw, 500px)" }}
            >
                {/* Video - left side */}
                <div className="absolute top-0 bottom-0 left-0" style={{ width: "50%" }}>
                    <video
                        src="/videos/service-interior.mp4"
                        poster="/images/service-interior.jpg"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* White card - right side, no overlap */}
                <div className="absolute top-0 bottom-0 right-0 bg-[#f0efeb]" style={{ width: "50%" }}>
                    <div className="flex items-center h-full px-8 md:px-14 lg:px-20 py-12 pl-16 md:pl-24 lg:pl-32">
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="text-lg md:text-xl lg:text-2xl font-bold uppercase tracking-wide mb-4"
                            >
                                INTERIOR DESIGN
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-[11px] md:text-xs text-muted-foreground leading-[1.8] mb-6"
                            >
                                At Dhaka Designer, we transform spaces with our bespoke interior design services, blending aesthetics with functionality to create unique environments tailored to our clients' preferences. Our team meticulously curates every detail, from color palettes to furnishings, ensuring a cohesive and harmonious result. Committed to sustainability, we integrate energy-efficient and environmentally responsible practices into our designs.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <Link href="#" className="text-sm font-semibold hover:text-primary transition-colors">
                                    Read More
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

const Founder = () => {
    return (
        <div className="relative w-full">
            {/* Top Section - Photo + Info Card */}
            <div className="relative bg-[#e8e4df] overflow-hidden w-full">
                <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[400px]">
                    {/* Left - Photo */}
                    <div className="relative flex items-end justify-center lg:justify-end">
                        <div className="w-full max-w-[320px] lg:max-w-[380px] aspect-[3/4] overflow-hidden">
                            <img
                                src="/images/founder.jpg"
                                alt="Arif Ashraf Image"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                    </div>

                    {/* Right - Info Card */}
                    <div className="flex items-center justify-start lg:pl-0 py-12 lg:py-0">
                        <div className="bg-white p-8 md:p-10 lg:p-12 shadow-lg w-full max-w-md lg:-ml-16 z-10">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="text-2xl md:text-3xl font-bold uppercase tracking-wide"
                            >
                                ARIF ASHRAF IMAGE
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-muted-foreground mt-2"
                            >
                                Founder
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-sm text-muted-foreground leading-relaxed mt-6"
                            >
                                Bangladesh is a land of creative young people who can provide world-class services with competitive budgets. My job is to utilize this potential to outsource jobs from all over the globe. Pricing, Quality and Timeline are all three important factors that can be controlled by creating a physical office space and close mentoring by my skilled managers.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="mt-8"
                            >
                                <Button
                                    variant="blue"
                                    className="rounded-full px-8 py-2 text-sm font-semibold uppercase tracking-wide"
                                >
                                    MY QUALIFICATION
                                </Button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section - Description + Book Now */}
            <div className="bg-white py-16 md:py-20">
                <div className="max-w-3xl mx-auto px-6 md:px-12">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6"
                    >
                        <strong>Greetings!</strong>
                        <br />
                        I am Arif, proudly representing Dhaka Designer—a company that unites the creativity of architects, the precision of engineers, and the artistry of designers from Bangladesh to deliver innovative solutions tailored to your needs.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6"
                    >
                        At Dhaka Designer, we embrace a collaborative approach, believing in the transformative power of specialized expertise. Every project we undertake is carefully crafted to address your unique requirements, ensuring solutions that stand out.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6"
                    >
                        Our team specializes in a broad spectrum of services related to the built environment and real assets, combining technical proficiency with creative vision. We understand that each project is one of a kind, and we are committed to delivering personalized solutions that not only meet but exceed your expectations.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8"
                    >
                        Thank you for considering Dhaka Designer. We are excited about the opportunity to work with you and bring your vision to life.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-center"
                    >
                        <Link href="#contact">
                            <Button
                                variant="blue"
                                className="rounded-full px-8 py-2 text-sm font-semibold"
                            >
                                Book Now &gt;
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Founder;

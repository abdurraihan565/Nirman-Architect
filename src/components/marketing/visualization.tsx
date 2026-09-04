"use client";

import { motion } from "framer-motion";

const hexagonImages = [
    { src: "/images/viz-hex-1.jpg", size: 120, top: "0%", left: "8%" },
    { src: "/images/viz-hex-2.jpg", size: 100, top: "-5%", left: "20%" },
    { src: "/images/viz-hex-3.jpg", size: 110, top: "5%", left: "32%" },
    { src: "/images/viz-hex-4.jpg", size: 115, top: "-2%", left: "45%" },
    { src: "/images/viz-hex-5.jpg", size: 95, top: "8%", left: "58%" },
    { src: "/images/viz-hex-6.jpg", size: 105, top: "-3%", left: "70%" },
    { src: "/images/viz-hex-7.jpg", size: 120, top: "40%", left: "5%" },
    { src: "/images/viz-hex-8.jpg", size: 100, top: "50%", left: "18%" },
    { src: "/images/viz-hex-9.jpg", size: 110, top: "42%", left: "32%" },
    { src: "/images/viz-hex-10.jpg", size: 115, top: "48%", left: "50%" },
    { src: "/images/viz-hex-11.jpg", size: 100, top: "40%", left: "65%" },
    { src: "/images/viz-hex-12.jpg", size: 110, top: "50%", left: "78%" },
];

const categoryCards = [
    { title: "ARCHITECTURE", video: "/videos/viz-architecture.mp4", poster: "/images/viz-architecture.jpg" },
    { title: "AVIATION", video: "/videos/viz-aviation.mp4", poster: "/images/viz-aviation.jpg" },
    { title: "INDUSTRIAL", video: "/videos/viz-industrial.mp4", poster: "/images/viz-industrial.jpg" },
    { title: "ENTERTAINMENT", video: "/videos/viz-entertainment.mp4", poster: "/images/viz-entertainment.jpg" },
];

const Visualization = () => {
    return (
        <div className="relative w-full py-20 bg-white" id="visualization">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto px-6 mb-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold uppercase tracking-wide mb-4"
                >
                    3D VISUALIZATION
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-sm text-muted-foreground"
                >
                    all sorts of video and marketing contents for architecture &amp; infrastructure
                </motion.p>
            </div>

            {/* Hexagonal Image Grid */}
            <div className="relative w-full max-w-4xl mx-auto px-6 mb-10" style={{ height: "320px" }}>
                {hexagonImages.map((img, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.5, rotate: -30 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{
                            duration: 0.6,
                            delay: 0.05 + index * 0.08,
                            ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                        className="absolute"
                        style={{
                            top: img.top,
                            left: img.left,
                            width: img.size,
                            height: img.size,
                            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                        }}
                    >
                        <img
                            src={img.src}
                            alt={`Visualization ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                ))}
            </div>

            {/* 3D Animations Button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center mb-12"
            >
                <a
                    href="#"
                    className="inline-block border-2 border-foreground text-foreground font-semibold uppercase tracking-wider text-sm px-10 py-3 hover:bg-foreground hover:text-white transition-colors"
                >
                    3D ANIMATIONS
                </a>
            </motion.div>

            {/* 4 Category Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto px-6 mb-16">
                {categoryCards.map((card, index) => (
                    <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                        className="group relative rounded-xl overflow-hidden aspect-[4/3] cursor-pointer"
                    >
                        <video
                            src={card.video}
                            poster={card.poster}
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            className="w-full h-full object-cover"
                            onMouseEnter={(e) => (e.target as HTMLVideoElement).play()}
                            onMouseLeave={(e) => {
                                const v = e.target as HTMLVideoElement;
                                v.pause();
                                v.currentTime = 0;
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 group-hover:opacity-0" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 transition-opacity duration-300 group-hover:opacity-0">
                            <h3 className="text-white text-sm md:text-base font-bold uppercase tracking-wider">
                                {card.title}
                            </h3>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Real Estate Investment Banner */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative w-full"
                style={{ height: "clamp(200px, 25vw, 300px)" }}
            >
                <img
                    src="/images/real-estate-banner.jpg"
                    alt="Real Estate Investment"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase tracking-wide mb-4">
                        REAL ESTATE INVESTMENT
                    </h3>
                    <a
                        href="#"
                        className="inline-block bg-primary text-white px-8 py-2 rounded text-sm font-semibold hover:bg-primary/90 transition-colors"
                    >
                        NestKeeper UNA
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default Visualization;

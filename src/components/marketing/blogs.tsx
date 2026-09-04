"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { BLOG_POSTS } from "@/constants";

const Blogs = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 5;
    const totalPages = Math.ceil(BLOG_POSTS.length / cardsPerPage);

    const scrollToPage = (page: number) => {
        if (!scrollRef.current) return;
        const cardWidth = 260;
        const scrollLeft = (page - 1) * cardsPerPage * cardWidth;
        scrollRef.current.scrollTo({ left: scrollLeft, behavior: "smooth" });
        setCurrentPage(page);
    };

    const handlePrev = () => {
        if (!scrollRef.current) return;
        const newPage = Math.max(1, currentPage - 1);
        scrollToPage(newPage);
    };

    const handleNext = () => {
        if (!scrollRef.current) return;
        const newPage = Math.min(totalPages, currentPage + 1);
        scrollToPage(newPage);
    };

    return (
        <div className="relative w-full py-20 bg-white" id="blogs">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto px-6 mb-12">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl md:text-3xl font-bold uppercase tracking-wide"
                >
                    WHAT&apos;S HAPPENING IN DHAKA DESIGNER?
                </motion.h2>
            </div>

            {/* Blog Cards Scrollable Row */}
            <div className="max-w-7xl mx-auto px-6 mb-8">
                <div
                    ref={scrollRef}
                    className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2"
                >
                    {BLOG_POSTS.map((post, index) => (
                        <motion.div
                            key={post.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.05 + index * 0.05 }}
                            className="group flex-shrink-0 w-[220px] md:w-[240px] cursor-pointer snap-start"
                        >
                            <div className="relative rounded-xl overflow-hidden bg-white border border-border shadow-sm hover:shadow-lg transition-all duration-300">
                                {/* Image */}
                                <div className="relative h-36 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                                </div>

                                {/* Content */}
                                <div className="p-4">
                                    <span className="inline-block text-[10px] font-semibold text-white bg-primary/80 uppercase tracking-wider px-2 py-0.5 rounded mb-2">
                                        {post.category}
                                    </span>
                                    <h3 className="text-sm font-bold line-clamp-2 leading-tight mb-2 group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                                        {post.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Pagination */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center justify-center gap-4 mb-10"
            >
                <button
                    onClick={handlePrev}
                    disabled={currentPage === 1}
                    className="text-muted-foreground hover:text-foreground transition-colors text-xl cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                >
                    &#8249;
                </button>
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => scrollToPage(i + 1)}
                        className={`text-sm font-medium transition-colors cursor-pointer px-1 ${
                            currentPage === i + 1
                                ? "text-foreground"
                                : "text-muted-foreground hover:text-primary"
                        }`}
                    >
                        {i + 1}
                    </button>
                ))}
                <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className="text-muted-foreground hover:text-foreground transition-colors text-xl cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                >
                    &#8250;
                </button>
            </motion.div>

            {/* ALL BLOGS Button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center"
            >
                <a
                    href="#"
                    className="inline-block border-2 border-foreground text-foreground font-semibold uppercase tracking-wider text-sm px-10 py-3 hover:bg-foreground hover:text-white transition-colors"
                >
                    ALL BLOGS
                </a>
            </motion.div>
        </div>
    );
};

export default Blogs;

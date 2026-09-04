"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SearchIcon, ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib";

const faqCategories = ["Deliverables", "Global Client Support", "Project Process", "Services"];

const faqData: Record<string, { question: string; answer: string }[]> = {
    Deliverables: [
        {
            question: "What file formats will I receive at the end of the project?",
            answer: "Final deliverables depend on the service, but we commonly provide files such as PDF, DWG, JPG, PNG, MP4, and 3D or BIM-related formats when required. We can also share builder-ready 2D floor plans, presentation images, animations, and other project-specific outputs based on your brief."
        },
        {
            question: "Do I own the final design files?",
            answer: "Yes, once the project is completed and fully paid, you retain ownership of all final deliverables and can use them as you see fit."
        },
    ],
    "Global Client Support": [
        {
            question: "Do you work on international projects?",
            answer: "Yes, we have offices in Bangladesh, United States, and UAE. We work with clients globally and can manage projects remotely or on-site."
        },
        {
            question: "How do you handle time zone differences?",
            answer: "Our teams across multiple time zones ensure coverage during your working hours. We schedule regular check-ins and use project management tools for seamless communication."
        },
    ],
    "Project Process": [
        {
            question: "How long does a typical project take?",
            answer: "Project timelines vary based on scope and complexity. A standard residential project typically takes 4-8 weeks, while commercial projects may take 8-16 weeks."
        },
        {
            question: "Can I upgrade or downgrade my plan?",
            answer: "You can adjust your project scope at any time. We'll provide a revised quote based on the changes and ensure transparency throughout."
        },
    ],
    Services: [
        {
            question: "What services does Dhaka Designer provide?",
            answer: "We offer comprehensive architecture, interior design, engineering, 3D visualization, construction management, and real estate consultancy services."
        },
        {
            question: "What is your pricing structure?",
            answer: "Our pricing is project-based and depends on the scope, size, and complexity. We provide detailed quotes after an initial consultation."
        },
    ],
};

const FAQ = () => {
    const [activeCategory, setActiveCategory] = useState("Services");
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    const currentFaqs = faqData[activeCategory] || [];

    const filteredFaqs = searchQuery
        ? currentFaqs.filter(
            (faq) =>
                faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : currentFaqs;

    return (
        <div className="relative w-full py-20 bg-white" id="faq">
            <div className="max-w-5xl mx-auto px-6">
                {/* Header Row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex items-start justify-between mb-10"
                >
                    <h2 className="text-2xl md:text-3xl font-bold">
                        Frequently asked questions
                    </h2>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Looking for something?"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="border-b border-gray-300 pb-2 pr-8 text-sm text-muted-foreground focus:outline-none focus:border-foreground transition-colors w-48 md:w-56"
                        />
                        <SearchIcon className="absolute right-0 top-0 w-4 h-4 text-muted-foreground" />
                    </div>
                </motion.div>

                {/* Category Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex items-center gap-8 mb-8 border-b border-gray-200"
                >
                    {faqCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => {
                                setActiveCategory(category);
                                setOpenIndex(null);
                                setSearchQuery("");
                            }}
                            className={cn(
                                "pb-3 text-sm font-medium transition-colors relative cursor-pointer",
                                activeCategory === category
                                    ? "text-foreground"
                                    : "text-muted-foreground hover:text-foreground"
                            )}
                        >
                            {category}
                            {activeCategory === category && (
                                <motion.div
                                    layoutId="faqTab"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                                    transition={{ duration: 0.3 }}
                                />
                            )}
                        </button>
                    ))}
                </motion.div>

                {/* FAQ Items */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-3"
                >
                    {filteredFaqs.map((faq, index) => (
                        <div
                            key={faq.question}
                            className="border border-gray-200 rounded-lg overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                            >
                                <span className="font-medium text-sm pr-4">{faq.question}</span>
                                <ChevronDownIcon
                                    className={cn(
                                        "w-5 h-5 shrink-0 transition-transform duration-300 text-muted-foreground",
                                        openIndex === index && "rotate-180"
                                    )}
                                />
                            </button>
                            <div
                                className={cn(
                                    "overflow-hidden transition-all duration-300",
                                    openIndex === index ? "max-h-40" : "max-h-0"
                                )}
                            >
                                <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default FAQ;

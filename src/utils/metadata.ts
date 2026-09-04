import { Metadata } from "next";

interface MetadataProps {
    title?: string;
    description?: string;
    icons?: Metadata["icons"];
    noIndex?: boolean;
    keywords?: string[];
    author?: string;
    twitterHandle?: string;
    type?: "website" | "article" | "profile";
    locale?: string;
    alternates?: Record<string, string>;
    publishedTime?: string;
    modifiedTime?: string;
}

export const generateMetadata = ({
    title = `Dhaka Designer AML | Innovative Architectural Solutions Online`,
    description = `Dhaka Designer is a leading architecture and design firm offering comprehensive services including architecture, interior design, engineering, 3D visualization, and real estate consultancy. Based in Bangladesh with offices in USA and UAE.`,
    icons = [
        {
            rel: "icon",
            url: "/icons/favicon.png",
        },
    ],
    noIndex = false,
    keywords = [
        "architecture firm bangladesh",
        "interior design dhaka",
        "engineering services",
        "3D visualization",
        "real estate consultancy",
        "architectural design",
        "construction management",
        "LEED consultancy",
        "civil engineering",
        "MEP engineering"
    ],
    author = process.env.NEXT_PUBLIC_AUTHOR_NAME,
    type = "website",
}: MetadataProps = {}): Metadata => {
    const metadataBase = new URL(process.env.NEXT_PUBLIC_APP_URL || "https://vertra-ai.vercel.app");

    return {
        metadataBase,
        title: {
            template: `%s | ${process.env.NEXT_PUBLIC_APP_NAME}`,
            default: title
        },
        description,
        keywords,
        authors: [{ name: author }],
        creator: author,
        publisher: process.env.NEXT_PUBLIC_APP_NAME,
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
        icons,
    };
};
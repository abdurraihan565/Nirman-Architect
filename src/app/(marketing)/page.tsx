import Wrapper from "@/components/global/wrapper";
import Founder from "@/components/marketing/founder";
import Clients from "@/components/marketing/clients";
import EngineeringGrid from "@/components/marketing/engineering-grid";
import Hero from "@/components/marketing/hero";
import Blogs from "@/components/marketing/blogs";
import FAQ from "@/components/marketing/faq";
import Services from "@/components/marketing/services";
import Visualization from "@/components/marketing/visualization";

const HomePage = () => {
    return (
        <>
            <Hero />
            <Founder />
            <Wrapper className="py-0 relative">
                <Services />
            </Wrapper>
            <EngineeringGrid />
            <Wrapper className="py-0 relative">
                <Visualization />
                <Blogs />
                <Clients />
                <FAQ />
            </Wrapper>
        </>
    )
};

export default HomePage

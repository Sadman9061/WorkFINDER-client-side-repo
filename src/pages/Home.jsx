import Banner from "../components/Banner";
import CategorySelectingSection from "../components/jobCategorySection/CategorySelectingSection";
import Testimonial from "../components/Testimonial";
import WhyChooseUs from "../components/WhyChooseUs";

// ffffffffff
const Home = () => {
    return (
        <div className="py-20">
            <Banner></Banner>
            <CategorySelectingSection></CategorySelectingSection>
            <WhyChooseUs></WhyChooseUs>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;
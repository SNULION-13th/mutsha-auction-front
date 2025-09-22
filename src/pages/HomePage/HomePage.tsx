import { FAQSection } from "./components/FAQSection";
import { InfoSection } from "./components/InfoSection";
import { MainSection } from "./components/MainSection";
import { RecommendSection } from "./components/RecommendSection";

function HomePage() {
  return (
    <div>
      <MainSection />
      <RecommendSection />
      <InfoSection />
      <FAQSection />
    </div>
  );
}

export default HomePage;

import dynamic from "next/dynamic";
import { Suspense } from "react";

const DynamicCarousel = dynamic(() => import("../components/Carousel"), {
  suspense: true,
});

const About = () => {
  return (
    <Suspense fallback={`Loading...`}>
      <DynamicCarousel />
    </Suspense>
  );
};

export default About;

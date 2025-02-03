import CtaBanner13 from "@/components/section/CtaBanner13";
import MobileNavigation6 from "@/components/header/MobileNavigation6";
import Hero13 from "@/components/hero/Hero13";
import BrowserCategory13 from "@/components/section/BrowserCategory13";
import NeedSomething2 from "@/components/section/NeedSomething2";
import TrendingService13 from "@/components/section/TrendingService13";
import React from "react";
import OurBlog1 from "@/components/section/OurBlog1";
import CTa13 from "@/components/section/CTa13";
import Header12 from "@/components/header/Header12";
import Footer4 from "@/components/footer/Footer4";

export const metadata = {
  title: "Sparetan",
};

export default function page() {
  return (
    <>
      <div className="wrapper ovh">
        <Header12 />
        <MobileNavigation6 />
        <div className="body_content">
          <Hero13 />
          <BrowserCategory13 />
          <TrendingService13 />
          <NeedSomething2 />
          <CtaBanner13 />

          {/* <Testimonials13 /> */}

          <OurBlog1 />
          {/* <OurPartner1 /> */}
          <CTa13 />
        </div>
        <Footer4 />
      </div>
    </>
  );
}

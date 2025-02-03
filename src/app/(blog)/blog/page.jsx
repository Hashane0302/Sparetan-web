import Breadcumb2 from "@/components/breadcumb/Breadcumb2";
import Breadcumb3 from "@/components/breadcumb/Breadcumb3";
import Footer4 from "@/components/footer/Footer4";
import Header12 from "@/components/header/Header12";

import BlogArea3 from "@/components/section/BlogArea3";

export const metadata = {
  title: "Freeio - Freelance Marketplace React/Next Js Template | Blog 3",
};

export default function page() {
  return (
    <>
      <Header12 />

      <Breadcumb2
        title="Freeio Blog"
        brief="Give your visitor a smooth online experience with a solid UX design"
      />
      <Breadcumb3 path={["Home", "Services", "Design & Creative"]} />
      <BlogArea3 />
      <Footer4 />
    </>
  );
}

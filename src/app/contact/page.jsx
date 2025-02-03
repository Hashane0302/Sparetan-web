import Breadcumb1 from "@/components/breadcumb/Breadcumb1";
import Footer4 from "@/components/footer/Footer4";
import Header12 from "@/components/header/Header12";
import ContactInfo1 from "@/components/section/ContactInfo1";
import GoogleMap1 from "@/components/section/GoogleMap1";

export const metadata = {
  title: "Freeio - Freelance Marketplace React/Next Js Template | Contact",
};

export default function page() {
  return (
    <>
      <Header12 />
      <Breadcumb1
        title={"Contact us"}
        brief={`We'd love to talk about how we can help you.`}
        isBtnActive={false}
      />
      <ContactInfo1 />
      <GoogleMap1 />

      <Footer4 />
    </>
  );
}

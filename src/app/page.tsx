import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import BookingCta from "./components/BookingCta";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <Hero />
      </main>
      <Services />
      <BookingCta />
      <Footer />
    </>
  );
}

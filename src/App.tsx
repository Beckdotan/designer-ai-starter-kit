import { LangToggle } from '@/components/LangToggle';
import { TopNav } from '@/components/TopNav';
import { BackToTop } from '@/components/BackToTop';
import { FlashOverlay } from '@/components/FlashOverlay';
import { Hero } from '@/sections/Hero';
import { Why } from '@/sections/Why';
import { Poc } from '@/sections/Poc';
import { Principles } from '@/sections/Principles';
import { Models } from '@/sections/Models';
import { Tools } from '@/sections/Tools';
import { Services } from '@/sections/Services';
import { Footer } from '@/sections/Footer';
import { Lecture } from '@/pages/Lecture';
import { Who } from '@/pages/Who';
import { useHashRoute } from '@/hooks/useHashRoute';

export default function App() {
  const route = useHashRoute();

  if (route === '/lecture') {
    return (
      <>
        <FlashOverlay />
        <TopNav />
        <LangToggle />
        <Lecture />
      </>
    );
  }

  if (route === '/who') {
    return (
      <>
        <FlashOverlay />
        <TopNav />
        <LangToggle />
        <Who />
        <Footer />
      </>
    );
  }

  return (
    <>
      <FlashOverlay />
      <TopNav />
      <LangToggle />
      <main>
        <Hero />
        <Why />
        <Poc />
        <Principles />
        <Models />
        <Tools />
        <Services />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

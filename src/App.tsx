import { LangToggle } from '@/components/LangToggle';
import { BackToTop } from '@/components/BackToTop';
import { FlashOverlay } from '@/components/FlashOverlay';
import { Hero } from '@/sections/Hero';
import { Story } from '@/sections/Story';
import { Poc } from '@/sections/Poc';
import { Principles } from '@/sections/Principles';
import { Models } from '@/sections/Models';
import { Tools } from '@/sections/Tools';
import { Speakers } from '@/sections/Speakers';
import { Services } from '@/sections/Services';
import { Footer } from '@/sections/Footer';
import { Lecture } from '@/pages/Lecture';
import { useHashRoute } from '@/hooks/useHashRoute';

export default function App() {
  const route = useHashRoute();

  if (route === '/lecture') {
    return (
      <>
        <FlashOverlay />
        <Lecture />
      </>
    );
  }

  return (
    <>
      <FlashOverlay />
      <LangToggle />
      <main>
        <Hero />
        <Story />
        <Speakers />
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

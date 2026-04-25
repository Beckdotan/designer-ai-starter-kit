import { TopNav } from '@/components/TopNav';
import { BackToTop } from '@/components/BackToTop';
import { FlashOverlay } from '@/components/FlashOverlay';
import { Hero } from '@/sections/Hero';
import { Why } from '@/sections/Why';
import { Poc } from '@/sections/Poc';
import { Principles } from '@/sections/Principles';
import { Models } from '@/sections/Models';
import { Services } from '@/sections/Services';
import { Footer } from '@/sections/Footer';
import { Lecture } from '@/pages/Lecture';
import { Who } from '@/pages/Who';
import { useHashRoute } from '@/hooks/useHashRoute';
import { trackPath } from '@/lib/track';
import { useEffect } from 'react';

export default function App() {
  const route = useHashRoute();

  useEffect(() => {
    // SPA route changes are virtual pageviews — surfaces /lecture and /who
    // separately in the GoatCounter Pages panel.
    trackPath(route === '' ? '/' : route);
  }, [route]);

  if (route === '/lecture') {
    return (
      <>
        <FlashOverlay />
        <TopNav />
        <Lecture />
      </>
    );
  }

  if (route === '/who') {
    return (
      <>
        <FlashOverlay />
        <TopNav />
        <Who />
        <Footer />
      </>
    );
  }

  return (
    <>
      <FlashOverlay />
      <TopNav />
      <main>
        <Hero />
        <Why />
        <Poc />
        <Principles />
        <Models />
        <Services />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

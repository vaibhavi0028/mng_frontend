import Navbar from '@/components/Navbar';
import FirstComponent from '@/components/FirstComponent';
import SecondComponent from '@/components/SecondComponent';
import ThirdComponent from '@/components/ThirdComponent';
import FourthComponent from '@/components/FourthComponent';
import Video from '@/components/video';
import About from '@/components/about';
import Testimonials from '@/components/testimonials';
import Booking from '@/components/booking';
import Footer from '@/components/footer';
export default function HomePage() {
  return (
    <div>
      <Navbar />
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
      <FourthComponent />
      <Video />
      <About />
      <Testimonials />
      <Booking />
      <Footer />
    </div>
  );
}

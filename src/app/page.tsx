// pages/index.tsx
import Head from 'next/head';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Destinations from './components/Destinations';
import BookTrip from './components/BookTrip';
import Testimonials from './components/temp';
import Footer from './components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Travello - Travel Agency</title>
        <meta name="description" content="Best travel agency to plan your perfect trip." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Services />
      <Destinations />
      <BookTrip />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;

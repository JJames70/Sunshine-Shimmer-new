import Navbar from '../../components/Navbar/Navbar';
import styles from './Home.module.css';
import homeImage from "../../assets/images/home/6.webp";
import img1 from "../../assets/images/home/header.jpeg";
import img2 from "../../assets/images/2.webp";
import img3 from "../../assets/images/3.webp";
import img4 from "../../assets/images/4.webp";
import test from "../../assets/images/home/1.webp";
import Footer from '../../components/Footer/Footer';
import Slider from '../../components/Slider/Slider';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Home - Sunshine Shimmer Painting & Decor</title>
        <meta
          name="description"
          content="Transform your space with Sunshine Shimmer Painting & Decorating. We offer exceptional painting and decorating services on the Sunshine Coast. Discover the perfection and commitment to quality we bring to every project."
        />
        <meta
          name="keywords"
          content="Sunshine Shimmer, home, painting services, decorating services, Sunshine Coast, professional painters, residential painting, commercial painting, interior painting, exterior painting, decorative painting, custom painting solutions, creative painting techniques, high-quality finishes, reliable painting services, trusted painting company, experienced painters, color consultation, sustainable painting practices, eco-friendly painting, paint maintenance tips, painting project management, detailed craftsmanship, customer satisfaction guarantee, paint selection advice, painting safety standards, painting portfolio showcase, affordable painting rates, professional painting tools, local painting experts, licensed painters, painting industry insights, painting service testimonials, painting project timeline"
        />
      </Helmet>
      <header className={styles.header}>
        <Navbar />
      </header>
      <section className={styles.section}>
        <img src={img1} className={styles.homeImage} alt="Home" />
        <div className={styles.sectionTextBox}>
          <h2 className={styles.sectionSubTitle}>SUNSHINE SHIMMER PAINTING & DECOR</h2>
          <h1 className={styles.sectionTitle}>We bring color to life on the Sunshine Coast</h1>
          <p className={styles.sectionText}>With a passion for perfection and a commitment to quality, our team of skilled painters and decorators transforms spaces with vibrant and lasting finishes. Whether you need a fresh coat for your home, a complete makeover, or intricate decorative touches, we tailor our services to meet your unique vision. Experience the magic of exceptional craftsmanship and outstanding customer service with Sunshine Shimmer Painting and Decorating – where your satisfaction is our masterpiece.</p>
          <button className={styles.sectionButton}>LEARN MORE</button>
        </div>
      </section>
      <section className={styles.featuredProjects}>
        <header className={styles.featuredProjectsHeader}>
          <h2 className={styles.featuredProjectsTitle}>Featured Projects</h2>
          <button className={styles.featuredProjectsButton}>VIEW ENTIRE PORTFOLIO</button>
        </header>
        <Slider images={[img2, img3, img4, homeImage]} />
      </section>
      <section className={styles.section} id={styles.invertSession}>
        <div className={styles.sectionTextBox} style={{ marginRight: "80px", marginLeft: "0" }} id="riptide">
          <h2 className={styles.sectionSubTitle}>WE GUARANTEE OUR WORK</h2>
          <h1 className={styles.sectionTitle}>Why Choose Us</h1>
          <p className={styles.sectionText}>At Sunshine Shimmer Painting and Decorating, we combine years of expertise with high-quality materials to deliver exceptional results that last. We pride ourselves on reliability and timely completion of projects, all at competitive rates. Choose us for a painting experience that brings your vision to life with precision and care.</p>
          <button className={styles.sectionButton}>VIEW PROJECT</button>
        </div>
        <img src={img4} className={styles.homeImage} alt="Why Choose Us" />
      </section>
      <Footer />
    </div>
  );
};

export default Home;

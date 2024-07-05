import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import styles from './AboutUs.module.css';
import aboutUsImg from '../../assets/images/aboutUs/image-5.png';
import rod from '../../assets/images/members/rod.png';

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>About Us - Sunshine Shimmer Painting & Decor</title>
        <meta
          name="description"
          content="Discover Sunshine Shimmer Painting & Decorating, offering professional residential and commercial painting services on the Sunshine Coast. Learn about our commitment to quality craftsmanship and client satisfaction."
        />
        <meta
          name="keywords"
          content="Sunshine Shimmer, about us, professional painters, residential painting, commercial painting, quality craftsmanship, painting services, interior painting, exterior painting, decorative painting, creative painting techniques, customer satisfaction, custom painting solutions, high-quality finishes, reliable painting services, trusted painting company, experienced painters, residential decorating, commercial decorating, interior design services, color consultation, sustainable painting practices, eco-friendly painting, paint maintenance tips, painting project management, detailed craftsmanship, customer satisfaction guarantee, paint selection advice, painting safety standards, painting portfolio showcase, affordable painting rates, professional painting tools, local painting experts, licensed painters, painting industry insights, painting service testimonials, painting project timeline"
        />
      </Helmet>
      <Navbar />
      <section className={styles.section} style={{ marginTop: '40px' }}>
        <h2 className={styles.sectionSubTitle}>ABOUT US</h2>
        <h1 className={styles.sectionTitle}>Transforming Spaces with Excellence</h1>
        <p className={styles.sectionText}>
          At Sunshine Shimmer Painting & Decorating we collaborate with individuals, families, and institutions to transform spaces into exceptional environments that celebrate creative design and quality craftsmanship. We honor the natural beauty of the Sunshine Coast and create lasting memories through our dedication to excellence.
        </p>
        <p className={styles.sectionText}>
          We provide a highly collaborative process that is as special as the projects we undertake. Our single-source approach ensures seamless communication among the project team and with our clients to meet deadlines, stay on budget, and deliver quality workmanship that realizes the client’s vision.
        </p>
        <img src={aboutUsImg} className={styles.aboutUsImg} alt="About Us" />
      </section>
      <section className={styles.section} style={{ marginTop: '100px' }}>
        <h2 className={styles.sectionSubTitle}>OUR LOCATION</h2>
        <h1 className={styles.sectionTitle}>Serving the Sunshine Coast in Queensland, Australia</h1>
        <p className={styles.sectionText}>
          Our fully integrated painting and decorating firm completes high-end residential and select commercial projects throughout the Sunshine Coast of Queensland, Australia. You’ll find our main office in the heart of this beautiful coastal region. If you are visiting the Sunshine Coast, please call ahead to schedule an appointment.
        </p>
      </section>
      <section className={styles.section} style={{ marginTop: '100px' }}>
        <h2 className={styles.sectionSubTitle}>OUR DEDICATED TEAM</h2>
        <h1 className={styles.sectionTitle}>A cross-disciplinary leadership and senior management team</h1>
        <p className={styles.sectionText}>
          At Sunshine Shimmer Painting & Decorating, our team is the cornerstone of our success. Comprising skilled painters, decorators, and project managers, each member brings a wealth of experience and a passion for excellence to every project. We pride ourselves on our collaborative spirit and unwavering commitment to quality. Our team works tirelessly to ensure that every detail is perfect, transforming your vision into a stunning reality. With a focus on customer satisfaction and a dedication to exceeding expectations, we strive to create beautiful, lasting spaces that reflect your unique style and needs.
        </p>
      </section>
      <div className={styles.membersContainer}>
        <div className={styles.memberContainer}>
          <img className={styles.memberPic} src={rod} alt="Rodrigo Shimaru (Shima)" />
          <h2 className={styles.memberName}>Rodrigo Shimaru (Shima)</h2>
        </div>
        {/* Additional team members can be added here */}
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;

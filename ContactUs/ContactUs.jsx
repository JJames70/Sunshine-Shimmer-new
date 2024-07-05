import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import styles from './ContactUs.module.css';
import map from '../../assets/images/contact/map.png';
import { useState } from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const [contactForm, setContactForm] = useState(false);
  const [emailInfo, setEmailInfo] = useState({});
  const [message, setMessage] = useState('');

  const sendEmail = () => {
    if (!emailInfo.email) {
      setMessage('Please provide your email');
      return;
    }
    if (!emailInfo.subject) {
      setMessage('Please provide the email subject');
      return;
    }
    if (!emailInfo.message) {
      setMessage('Please provide the email message');
      return;
    }

    emailjs
      .send(
        'service_h64ybhb',
        'template_3kimtb5',
        {
          to_email: emailInfo.email,
          subject: emailInfo.subject,
          message: emailInfo.message
        },
        'user_HwCHQdNOxWTCryONN'
      )
      .then(() => {
        setContactForm(false);
        setMessage('');
        setEmailInfo({});
      })
      .catch(() => {
        setMessage('Some error occurred. Try again later.');
      });
  };

  return (
    <div className={styles.container}>
      <Helmet>
        <title>Contact Us - Sunshine Shimmer Painting & Decor</title>
        <meta
          name="description"
          content="Contact Sunshine Shimmer Painting & Decorating for exceptional painting and decorating services on the Sunshine Coast. Let us bring your vision to life with quality craftsmanship and outstanding results."
        />
        <meta
          name="keywords"
          content="Sunshine Shimmer, contact us, painting services, decorating services, Sunshine Coast, professional painters, residential painters, commercial painters, interior painting, exterior painting, decorative painting, custom painting solutions, creative painting techniques, high-quality finishes, reliable painting services, trusted painting company, experienced painters, residential decorating, commercial decorating, interior design services, color consultation, sustainable painting practices, eco-friendly painting, paint maintenance tips, painting project management, detailed craftsmanship, customer satisfaction guarantee, paint selection advice, painting safety standards, painting portfolio showcase, affordable painting rates, professional painting tools, local painting experts, licensed painters, painting industry insights, painting service testimonials, painting project timeline"
        />
      </Helmet>
      <Navbar />
      <section className={styles.section} style={{ marginTop: '40px' }}>
        <h2 className={styles.sectionSubTitle}>CONTACT</h2>
        <h1 className={styles.sectionTitle}>What’s your vision?</h1>
        <p className={styles.sectionText}>
          We value our clients and work hard to provide exceptionally satisfactory results. We look forward to hearing from you.
        </p>
      </section>
      <section className={styles.section}>
        <button className={styles.contactButton} onClick={() => setContactForm(true)}>
          CONTACT US
        </button>
      </section>
      {contactForm ? (
        <ContactForm setContactForm={setContactForm} message={message} submit={sendEmail} emailInfo={emailInfo} setEmailInfo={setEmailInfo} />
      ) : null}
      <section className={styles.section} style={{ marginTop: '100px' }}>
        <h2 className={styles.sectionSubTitle}>OUR LOCATION</h2>
        <h1 className={styles.sectionTitle}>Serving Coastal Southeastern New England</h1>
        <p className={styles.sectionText}>
          Our fully integrated design build firm completes high-end, residential homes and select institutional projects on Cape Cod, the Islands of Nantucket and Martha’s Vineyard, and throughout coastal southeastern New England. You’ll find our main office on Route 137 in East Harwich, Massachusetts, in the heart of Lower Cape Cod. If you are visiting the Cape, please call ahead to schedule an appointment.
        </p>
      </section>
      <section className={styles.mapSection}>
        <div className={styles.addressSection}>
          <h3 className={styles.addressSectionText}>CAPE COD MAIN OFFICE</h3>
          <h3 className={styles.addressSectionText}>xxxxxxxxxxx</h3>
          <h3 className={styles.addressSectionText}>yyyyyyyyyyy</h3>
        </div>
        <img src={map} alt="Map" className={styles.mapImage} />
      </section>
      <Footer />
    </div>
  );
};

export default ContactUs;

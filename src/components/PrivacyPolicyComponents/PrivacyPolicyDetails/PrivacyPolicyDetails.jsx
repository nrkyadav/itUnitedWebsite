"use client";

import React from "react";
import styles from "./PrivacyPolicyDetails.module.css";
import { Mail, Phone, MapPin } from "lucide-react";

const PrivacyPolicyDetails = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h3>Privacy Policy for Samyotech.com</h3>
        <p>
          Welcome to Samyotech! Your privacy is important to us, and we are committed to
          protecting the personal information you share with us. This Privacy Policy outlines
          how we collect, use, and safeguard your information when you interact with our
          website, products, and services.
        </p>
        <p>
          As a leading provider of software services and product development, we understand
          the significance of data privacy in today’s digital world. We are dedicated to
          ensuring that your data remains secure, confidential, and used only for legitimate
          purposes.
        </p>
        <p>
          By using our website and services, you agree to the terms outlined in this Privacy
          Policy. Please take a moment to read through it to understand how we handle your
          information.
        </p>

        <h4>Information We Collect</h4>
        <ul className={styles.list}>
          <li>
            <strong>Personal Information:</strong> Name, email address, phone number, company
            details, and payment information provided during account registration or project
            discussions.
          </li>
          <li>
            <strong>Technical Information:</strong> Device type, browser type, IP address, and
            usage data collected through cookies and analytics tools.
          </li>
          <li>
            <strong>Project Information:</strong> Any files, documents, or data shared with us
            as part of your project requirements.
          </li>
        </ul>

        <h4>How We Use Your Information</h4>
        <ul className={styles.list}>
          <li>Deliver and improve our software services and products.</li>
          <li>Communicate project updates, technical support, and service improvements.</li>
          <li>Process payments and ensure the security of our platform.</li>
          <li>Comply with legal obligations and prevent fraudulent activities.</li>
        </ul>

        <h4>Data Security</h4>
        <ul className={styles.list}>
          <li>
            <strong>Encryption:</strong> We use secure protocols to protect sensitive data.
          </li>
          <li>
            <strong>Access Controls:</strong> Only authorized personnel have access to your
            information.
          </li>
          <li>
            <strong>Regular Audits:</strong> We regularly review our security practices to
            safeguard your data.
          </li>
        </ul>

        <h4>Data Sharing</h4>
        <ul className={styles.list}>
          <li>
            <strong>Service Providers:</strong> Trusted partners who assist us in delivering
            our services, such as cloud storage providers.
          </li>
          <li>
            <strong>Legal Authorities:</strong> If required by law or to protect our rights
            and comply with legal obligations.
          </li>
        </ul>

        <h4>Your Rights</h4>
        <ul className={styles.list}>
          <li>
            <strong>Access and Update Your Information:</strong> You can request access to the
            information we hold about you and update it if necessary.
          </li>
          <li>
            <strong>Request Data Deletion:</strong> You can ask us to delete your personal
            data, subject to any legal obligations we may have.
          </li>
          <li>
            <strong>Opt Out of Marketing Communications:</strong> You can opt out of receiving
            promotional emails by following the instructions in the email.
          </li>
        </ul>

        <h4>Cookies and Tracking</h4>
        <p>
          We use cookies to improve your experience on our website. Cookies help us understand
          how you use our site and allow us to provide a better service. You can manage your
          cookie preferences through your browser settings.
        </p>

        <h4>Third-Party Links</h4>
        <p>
          Our website may contain links to third-party websites. We are not responsible for
          the privacy practices of these sites and encourage you to review their policies.
        </p>

        <h4>Changes to This Policy</h4>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on
          this page with a revised effective date.
        </p>

        <h4>Contact Us</h4>
        <p>If you have any questions or concerns about our Privacy Policy, please contact us at:</p>
        <ul className={styles.contactList}>
          <li>
            <Mail size={18} /> Email: amit@samyotech.com
          </li>
          <li>
            <Phone size={18} /> Phone: +91 786 999 9639
          </li>
          <li>
            <MapPin size={18} /> Address: Samyotech HQ, 1st Floor Pramukh Plaza, Near Sajan
            Prabha Garden, Vijaynagar, Indore, Madhya Pradesh, 452010
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PrivacyPolicyDetails;

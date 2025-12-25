"use client";

import React from "react";
import styles from "./TermsConditionsDetails.module.css";
import { Mail, Phone, MapPin } from "lucide-react";

const TermsConditionsDetails = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h3>Terms and Conditions for Software Development and Consulting Services</h3>
        <p>
          Welcome to Samyotech! By accessing our website and engaging our services, you agree to comply with the following Terms and Conditions. 
          These terms govern the provision of our software development and consulting services to ensure a clear understanding of rights, responsibilities, and expectations.
        </p>
        <p>
          Please read these Terms and Conditions carefully before engaging with our services. 
          If you do not agree to any of the terms outlined below, you must refrain from using our services.
        </p>

        <h4>Definitions</h4>
        <ul className={styles.list}>
          <li><strong>Agreement:</strong> Refers to the contract formed between Samyotech and the Client upon acceptance of a service proposal.</li>
          <li><strong>Client:</strong> Refers to the individual or organization that engages Samyotech for services.</li>
          <li><strong>Services:</strong> Refer to the software development, consulting, and related technical services provided by Samyotech.</li>
          <li><strong>Deliverables:</strong> Refer to the final software, reports, or other outputs provided to the Client as part of the Services.</li>
        </ul>

        <h4>Scope of Services</h4>
        <ul className={styles.list}>
          <li>Samyotech shall provide software development and consulting services as outlined in the mutually agreed Statement of Work (SOW).</li>
          <li>Any changes to the scope of work must be agreed upon in writing by both parties.</li>
        </ul>

        <h4>Client Responsibilities</h4>
        <ul className={styles.list}>
          <li>The Client shall provide accurate and complete project requirements and ensure timely communication to avoid delays.</li>
          <li>The Client shall make payments as per the agreed terms and ensure access to necessary resources for project completion.</li>
        </ul>

        <h4>Fees and Payment Terms</h4>
        <ul className={styles.list}>
          <li>All fees shall be agreed upon in the SOW or project proposal and shall be payable as per the agreed schedule.</li>
          <li>Late payments may incur additional charges or result in project delays.</li>
        </ul>

        <h4>Intellectual Property Rights</h4>
        <ul className={styles.list}>
          <li>Samyotech retains ownership of the tools, frameworks, and methodologies used in the development process.</li>
          <li>The Client shall have usage rights to the final Deliverables as outlined in the Agreement.</li>
        </ul>

        <h4>Confidentiality</h4>
        <ul className={styles.list}>
          <li>Both parties agree to maintain the confidentiality of proprietary information shared during the project.</li>
          <li>Confidential information shall not be disclosed to third parties without prior written consent.</li>
        </ul>

        <h4>Limitation of Liability</h4>
        <ul className={styles.list}>
          <li>Samyotech shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.</li>
          <li>Our total liability shall be limited to the amount paid by the Client for the specific project.</li>
        </ul>

        <h4>Termination</h4>
        <ul className={styles.list}>
          <li>Either party may terminate the Agreement with written notice if the other party breaches any terms.</li>
          <li>Upon termination, the Client shall pay for all services rendered up to the termination date.</li>
        </ul>

        <h4>Governing Law</h4>
        <p>
          This Agreement shall be governed by the laws as per Indian Jurisdiction. 
          Any disputes arising from this Agreement shall be resolved through arbitration or mediation as mutually agreed by both parties.
        </p>

        <h4>Contact Information</h4>
        <p>If you have any questions or concerns regarding these Terms and Conditions, please contact us at:</p>
        <ul className={styles.contactList}>
          <li><Mail size={18} /> Email: amit@samyotech.com</li>
          <li><Phone size={18} /> Phone: +91 786 999 9639</li>
          <li><MapPin size={18} /> Address: Samyotech HQ, 1st Floor Pramukh Plaza, Near Sajan Prabha Garden, Vijaynagar, Indore, Madhya Pradesh, 452010</li>
        </ul>
      </div>
    </section>
  );
};

export default TermsConditionsDetails;

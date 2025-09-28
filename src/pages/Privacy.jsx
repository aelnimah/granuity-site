import React from 'react';
import { motion } from 'framer-motion';
import './Privacy.css';

const Privacy = () => {
  return (
    <div className="privacy-page">
      <div className="privacy-container">
        <motion.div
          className="privacy-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last updated: September 28, 2025</p>

          <section>
            <h2>1. Introduction</h2>
            <p>
              Grantuity Group ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how 7610262 Canada Inc. collects, uses, discloses, and safeguards your information when you visit our website. This policy complies with the Personal Information Protection and Electronic Documents Act (PIPEDA) and other applicable Canadian privacy laws.
            </p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>
            <h3>2.1 Personal Information</h3>
            <p>We may collect the following types of personal information:</p>
            <ul>
              <li>Name and contact information (email address, phone number)</li>
              <li>Company information (company name, industry, revenue)</li>
              <li>Location information (country, state/province)</li>
              <li>Website usage data and analytics</li>
              <li>Communication preferences</li>
            </ul>

            <h3>2.2 Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul>
              <li>IP address and browser information</li>
              <li>Pages visited and time spent on our site</li>
              <li>Referring website information</li>
              <li>Device and operating system information</li>
            </ul>
          </section>

          <section>
            <h2>3. How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>
            <ul>
              <li>To provide and improve our services</li>
              <li>To respond to your inquiries and provide customer support</li>
              <li>To send you relevant information about our services</li>
              <li>To analyze website usage and improve user experience</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and prevent fraud</li>
            </ul>
          </section>

          <section>
            <h2>4. Information Sharing and Disclosure</h2>
            <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:</p>
            <ul>
              <li>With service providers who assist us in operating our website and conducting our business</li>
              <li>When required by law or to protect our rights</li>
              <li>In connection with a business transfer or acquisition</li>
              <li>With your explicit consent</li>
            </ul>
          </section>

          <section>
            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2>6. Cookies and Tracking Technologies</h2>
            <p>
              Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie settings through your browser preferences. Disabling cookies may affect the functionality of our website.
            </p>
          </section>

          <section>
            <h2>7. Your Rights</h2>
            <p>Under PIPEDA and applicable Canadian privacy laws, you have the right to:</p>
            <ul>
              <li>Access your personal information we hold</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Withdraw consent for data processing</li>
              <li>File a complaint with the Privacy Commissioner of Canada</li>
            </ul>
          </section>

          <section>
            <h2>8. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>
          </section>

          <section>
            <h2>9. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section>
            <h2>10. Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
            </p>
          </section>

          <section>
            <h2>11. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2>12. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="contact-info">
              <p><strong>Grantuity Group</strong></p>
              <p>7610262 Canada Inc.</p>
              <p>First Canadian Place</p>
              <p>100 King Street West Suite 5600</p>
              <p>Toronto, ON, M5X 1C9</p>
              <p>contact@grantuity.org</p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;

import React from 'react';
import { motion } from 'framer-motion';
import './Terms.css';

const Terms = () => {
  return (
    <div className="terms-page">
      <div className="terms-container">
        <motion.div
          className="terms-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Terms of Service</h1>
          <p className="last-updated">Last updated: September 28, 2025</p>

          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Grantuity Group website (the "Service"), you accept and agree to be bound by the terms and provision of this agreement. These Terms of Service ("Terms") govern your use of our website operated by 7610262 Canada Inc. ("us", "we", or "our").
            </p>
          </section>

          <section>
            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials on Grantuity Group's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul>
              <li>modify or copy the materials</li>
              <li>use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
              <li>attempt to decompile or reverse engineer any software contained on the website</li>
              <li>remove any copyright or other proprietary notations from the materials</li>
            </ul>
            <p>
              This license shall automatically terminate if you violate any of these restrictions and may be terminated by Grantuity Group at any time.
            </p>
          </section>

          <section>
            <h2>3. Disclaimer</h2>
            <p>
              The materials on Grantuity Group's website are provided on an 'as is' basis. Grantuity Group makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2>4. Limitations</h2>
            <p>
              In no event shall Grantuity Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Grantuity Group's website, even if Grantuity Group or a Grantuity Group authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
            </p>
          </section>

          <section>
            <h2>5. Accuracy of Materials</h2>
            <p>
              The materials appearing on Grantuity Group's website could include technical, typographical, or photographic errors. Grantuity Group does not warrant that any of the materials on its website are accurate, complete, or current. Grantuity Group may make changes to the materials contained on its website at any time without notice. However, Grantuity Group does not make any commitment to update the materials.
            </p>
          </section>

          <section>
            <h2>6. Links</h2>
            <p>
              Grantuity Group has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Grantuity Group of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section>
            <h2>7. Modifications</h2>
            <p>
              Grantuity Group may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2>8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of Canada and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
            </p>
          </section>

          <section>
            <h2>9. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
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

export default Terms;

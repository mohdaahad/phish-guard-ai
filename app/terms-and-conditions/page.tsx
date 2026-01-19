import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function TermsAndConditions() {
  return (
    <>
      <Header />
      <main className="policy-page">
        <div className="policy-container">
          <h1>Terms & Conditions</h1>
          <p className="policy-effective-date">Effective Date: August 8, 2025</p>

          <section className="policy-intro">
            <p>
              These Terms & Conditions ("Terms") govern your use of the website, software, applications, and services
              provided by <strong>SOL9X PRIVATE LIMITED</strong> ("Company," "we," "us," or "our"). By accessing or using our
              Services, you agree to be bound by these Terms. If you do not agree, you must not access or use
              our Services.
            </p>
          </section>

          <div className="policy-toc">
            <h2>Table of Contents</h2>
            <ol>
              <li>Definitions</li>
              <li>Eligibility & Account</li>
              <li>Scope of Services</li>
              <li>Orders, SOWs & Changes</li>
              <li>Fees, Payments & Taxes</li>
              <li>Payments via Razorpay</li>
              <li>Refunds, Cancellations & Chargebacks</li>
              <li>Acceptable Use</li>
              <li>Intellectual Property</li>
              <li>Confidentiality</li>
              <li>Data, Privacy & Security</li>
              <li>Disclaimers & No Warranties</li>
              <li>Limitation of Liability</li>
              <li>Indemnity</li>
              <li>Suspension & Termination</li>
              <li>Governing Law, Disputes & Arbitration</li>
              <li>Force Majeure</li>
              <li>Notices</li>
              <li>Changes to the Terms</li>
              <li>Miscellaneous</li>
              <li>Contact & Grievance Officer</li>
              <li>Acknowledgment</li>
            </ol>
          </div>

          <section className="policy-section">
            <h2>1. Definitions</h2>
            <ul>
              <li><strong>Client, "you" or "your":</strong> means the individual or legal entity accepting these Terms.</li>
              <li><strong>Deliverables:</strong> means software, code, documentation, configurations, designs, or other work products provided by us under an Order or SOW.</li>
              <li><strong>Third-Party Services:</strong> means services, software, platforms, payment gateways (including Razorpay), hosting, APIs, or libraries not owned or controlled by the Company.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>2. Eligibility & Account</h2>
            <p>You must be legally capable to contract and, if acting for an entity, you represent you have authority to bind that entity. You are responsible for all activities under your account and must maintain accurate information and strong security practices.</p>
          </section>

          <section className="policy-section">
            <h2>3. Scope of Services</h2>
            <p>We provide software development, consulting, integration, implementation, maintenance, and related professional services as described on our website, in an Order, or in a mutually executed SOW. Any timelines are estimates only unless expressly stated as binding milestones in the relevant SOW.</p>
            <p>Beta, demo, or trial features may be provided "as-is," may be modified or discontinued at any time, and are excluded from any uptime or support commitments.</p>
          </section>

          <section className="policy-section">
            <h2>4. Orders, SOWs & Changes</h2>
            <p>Project specifics, fees, deliverables, responsibilities, and assumptions are defined in an Order or SOW. Any change in scope (including additional features, third-party integrations, or acceleration requests) requires a written change order and may involve additional fees and revised schedules at our sole discretion.</p>
            <p>Acceptance testing criteria (if any) shall be defined in the SOW. Deliverables are deemed accepted on the earliest of: (a) your written acceptance; (b) your production use; or (c) 10 days after delivery if you have not provided specific, reproducible rejection reasons aligned with the acceptance criteria.</p>
          </section>

          <section className="policy-section">
            <h2>5. Fees, Payments & Taxes</h2>
            <ul>
              <li><strong>Invoices & Due Dates:</strong> Fees are due as stated in the Order/SOW or at checkout. Late amounts accrue interest at the lesser of 1.5% per month or the maximum permitted by law.</li>
              <li><strong>Non-Refundable:</strong> Unless expressly stated otherwise in a specific Order/SOW or required by law, all payments are non-refundable.</li>
              <li><strong>Set-Off:</strong> You may not set-off or withhold amounts for any reason.</li>
              <li><strong>Taxes:</strong> Fees exclude taxes, levies, and duties (including GST). You are responsible for all applicable taxes.</li>
              <li><strong>Pricing Errors:</strong> We may cancel, suspend, or correct Orders impacted by pricing or typographical errors.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>6. Payments via Razorpay</h2>
            <p>We use Razorpay as a third-party payment processor for certain transactions. By initiating a payment, you authorize Razorpay and the relevant banks/networks to process your payment using available methods (e.g., cards, UPI, net banking, wallets, BNPL). You agree to comply with all terms, policies, authentication flows (including OTP), KYC/AML checks, and security requirements imposed by Razorpay and applicable networks/banks.</p>
            <ul>
              <li><strong>No Storage of Card Data:</strong> We do not collect or store full card numbers, CVVs, or other sensitive payment data; such data is handled by Razorpay.</li>
              <li><strong>Transaction Outcomes:</strong> Authorizations, declines, delays, duplicate holds, refunds processing times, and settlement timelines are controlled by banks, networks, UPI, and Razorpay. We are not liable for any payment failure, delay, or interruption.</li>
              <li><strong>Prohibited Use:</strong> You must not use the payment gateway for illegal, high-risk, or prohibited transactions or in violation of RBI rules, card network rules, or Razorpay policies.</li>
              <li><strong>Disputes:</strong> Any dispute relating to payment processing is between you, the issuing bank, and Razorpay. Our only obligation is to apply payments we successfully receive from Razorpay to your account.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>7. Refunds, Cancellations & Chargebacks</h2>
            <ul>
              <li><strong>Company-Friendly Policy:</strong> Services and Deliverables (including digital goods, custom development, licenses, consulting hours, and setup fees) are non-cancelable and non-refundable once initiated, delivered, or accessed, except where we explicitly agree in writing or where required by applicable law.</li>
              <li><strong>Chargebacks:</strong> If you initiate a chargeback or payment dispute, we may suspend Services and you will be liable for all associated costs, fees, penalties, and our reasonable investigation and collection expenses. We may re-invoice or recharge you for amounts reversed.</li>
              <li><strong>Refund Method & Timing:</strong> Any approved refund (if any) will be processed solely via Razorpay to the original payment instrument and timing is subject to bank and Razorpay processes.</li>
              <li><strong>No Delivery of Physical Goods:</strong> Unless expressly stated otherwise, our Services are digital or professional in nature and delivered electronically. No shipping obligations apply.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>8. Acceptable Use</h2>
            <p>You shall not: (a) violate any law, third-party right, or network rule; (b) attempt to gain unauthorized access to any system; (c) interfere with or disrupt the Services; (d) upload malicious code; (e) use the Services to build a competing product; (f) resell, sublicense, or share access except as expressly permitted; (g) misrepresent or mask the origin of data or requests; or (h) use the Services for any high-risk or unlawful activity.</p>
          </section>

          <section className="policy-section">
            <h2>9. Intellectual Property</h2>
            <ul>
              <li><strong>Pre-Existing IP:</strong> Each party retains ownership of its pre-existing intellectual property.</li>
              <li><strong>Deliverables:</strong> Subject to full and final payment, and unless otherwise stated in an SOW, we grant you a non-exclusive, non-transferable, limited license to use the Deliverables internally for your business purposes. We retain all rights, title, and interest in and to the Deliverables, tools, frameworks, templates, and know-how used or developed.</li>
              <li><strong>Open-Source & Third-Party Components:</strong> Deliverables may include third-party or open-source components governed by their respective licenses. Your use is subject to those licenses, which prevail in case of conflict.</li>
              <li><strong>Feedback:</strong> You grant us a perpetual, irrevocable, worldwide, royalty-free license to use feedback you provide to improve our Services.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>10. Confidentiality</h2>
            <p>Each party may access the other party's confidential information ("Confidential Information"). The receiving party will use the same degree of care it uses to protect its own confidential information (but not less than reasonable care) and will not disclose it except to personnel and service providers who need to know for permitted purposes and are bound by confidentiality obligations. Exclusions apply for information that is public, already known, independently developed, or rightfully obtained. We may disclose as required by law after reasonable notice.</p>
          </section>

          <section className="policy-section">
            <h2>11. Data, Privacy & Security</h2>
            <ul>
              <li><strong>Privacy:</strong> Our processing of personal data is described in our Privacy Policy available on our website. You are responsible for providing any notices and obtaining any consents required under applicable law.</li>
              <li><strong>Security:</strong> We implement commercially reasonable technical and organizational measures. You are responsible for securing your systems, credentials, and endpoints.</li>
              <li><strong>Data Loss:</strong> You acknowledge that online services inherently involve risks. We are not responsible for data loss, corruption, or unauthorized access arising from your systems, third-party services, the internet, or events beyond our reasonable control.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>12. Disclaimers & No Warranties</h2>
            <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE SERVICES AND DELIVERABLES ARE PROVIDED "AS IS" AND "AS AVAILABLE," WITH ALL FAULTS AND WITHOUT ANY WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, AND ANY WARRANTIES ARISING FROM COURSE OF DEALING OR USAGE OF TRADE.</p>
            <p>Without limiting the foregoing, we do not warrant uninterrupted or error-free operation, that defects will be corrected, that the Services are free of harmful components, or that third-party services (including Razorpay, banks, UPI, networks, cloud providers, or open-source components) will meet your requirements or be available at any particular time.</p>
          </section>

          <section className="policy-section">
            <h2>13. Limitation of Liability</h2>
            <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL THE COMPANY BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, ENHANCED, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, REVENUE, GOODWILL, DATA, BUSINESS INTERRUPTION, OR COST OF SUBSTITUTE GOODS OR SERVICES, WHETHER BASED IN CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY, OR OTHERWISE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
            <p>IN NO EVENT SHALL THE COMPANY'S AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO THESE TERMS EXCEED THE LOWER OF (A) THE TOTAL AMOUNT PAID BY YOU TO THE COMPANY FOR THE SERVICES GIVING RISE TO THE CLAIM IN THE THREE (3) MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO LIABILITY, OR (B) INR 10,000.</p>
            <p>These limitations apply cumulatively and regardless of the number of claims. Some jurisdictions do not allow certain limitations; in such cases, the limitations apply to the fullest extent permitted by law.</p>
          </section>

          <section className="policy-section">
            <h2>14. Indemnity</h2>
            <p>You shall defend, indemnify, and hold harmless the Company, its affiliates, and their respective officers, directors, employees, and agents from and against any and all claims, demands, losses, liabilities, damages, costs, and expenses (including reasonable attorneys' fees) arising out of or related to: (a) your use of the Services or Deliverables; (b) your content, data, or instructions; (c) your breach of these Terms or applicable law; (d) disputes with your end users or customers; and (e) your use of third-party services, including Razorpay and banking/UPI networks.</p>
          </section>

          <section className="policy-section">
            <h2>15. Suspension & Termination</h2>
            <ul>
              <li><strong>Suspension:</strong> We may suspend or limit the Services immediately if we believe it necessary to protect the Services, comply with law, address non-payment, investigate suspected misconduct, or respond to third-party requests.</li>
              <li><strong>Termination:</strong> We may terminate the Services or any Order/SOW for convenience with notice, or immediately for cause (including your breach, insolvency, or unlawful activities). You may terminate for convenience only if expressly permitted in the applicable SOW and subject to early termination fees.</li>
              <li><strong>Effect:</strong> Upon termination, all amounts owed become immediately due. Provisions that by their nature should survive (including payment obligations, confidentiality, IP, warranty disclaimers, limitations of liability, indemnity, and dispute resolution) shall survive.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>16. Governing Law, Disputes & Arbitration</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of India, without regard to conflict of laws principles. Any dispute shall be finally resolved by binding arbitration conducted in English under the Arbitration and Conciliation Act, 1996, by a sole arbitrator appointed by the Company. The seat and venue of arbitration shall be New Delhi, India. Subject to arbitration, courts at New Delhi, India shall have exclusive jurisdiction. Class actions, class arbitrations, and representative proceedings are not permitted.</p>
          </section>

          <section className="policy-section">
            <h2>17. Force Majeure</h2>
            <p>We shall not be liable for any delay or failure in performance due to events beyond our reasonable control, including acts of God, natural disasters, pandemics, labor disputes, war, terrorism, civil unrest, government actions, utility failures, network or platform outages, third-party service interruptions (including Razorpay, banks, or UPI), or any similar events.</p>
          </section>

          <section className="policy-section">
            <h2>18. Notices</h2>
            <p>We may provide notices via email, in-product messages, SMS/WhatsApp (where permitted), postal mail, or by posting on our website. You agree that electronic communications satisfy any legal requirements for written notice. Notices to us must be sent to the address below.</p>
          </section>

          <section className="policy-section">
            <h2>19. Changes to the Terms</h2>
            <p>We may modify these Terms at any time at our sole discretion. Changes are effective upon posting or as otherwise stated. Your continued use of the Services after changes become effective constitutes your acceptance of the revised Terms.</p>
          </section>

          <section className="policy-section">
            <h2>20. Miscellaneous</h2>
            <ul>
              <li><strong>Independent Contractors:</strong> The parties are independent contractors. No partnership, agency, or joint venture is created.</li>
              <li><strong>Assignment:</strong> You may not assign or transfer your rights or obligations without our prior written consent. We may assign freely, including to an affiliate or in connection with a merger, acquisition, or sale of assets.</li>
              <li><strong>Severability:</strong> If any provision is found unenforceable, it shall be modified to the minimum extent necessary to make it enforceable, and the remainder shall remain in effect.</li>
              <li><strong>No Waiver:</strong> Failure to enforce any right is not a waiver of future enforcement.</li>
              <li><strong>Entire Agreement:</strong> These Terms, together with any Order or SOW, constitute the entire agreement and supersede all prior understandings on the subject matter.</li>
              <li><strong>Headings:</strong> Headings are for convenience only and do not affect interpretation.</li>
              <li><strong>Language:</strong> The governing language of these Terms is English.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>21. Contact & Grievance Officer</h2>
            <div className="policy-contact">
              <p><strong>SOL9X PRIVATE LIMITED</strong></p>
              <p>New Delhi, India</p>
              <p>Email: <a href="mailto:contact@sol9x.in">contact@sol9x.in</a></p>
              <p>Phone: <a href="tel:+918920950949">+91 8920950949</a></p>
            </div>
          </section>

          <section className="policy-section">
            <h2>22. Acknowledgment</h2>
            <p>BY ACCESSING OR USING THE SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS, INCLUDING THE DISCLAIMERS, LIMITATIONS OF LIABILITY, AND ARBITRATION PROVISIONS ABOVE.</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function PrivacyPolicy() {
    return (
        <>
            <Header />
            <main className="policy-page">
                <div className="policy-container">
                    <h1>Privacy Policy</h1>
                    <p className="policy-effective-date">Effective Date: August 8, 2025</p>

                    <section className="policy-intro">
                        <p>
                            This Privacy Policy describes how <strong>SOL9X PRIVATE LIMITED</strong> ("Company", "we", "us", or "our") collects, uses, and discloses your information in connection with our website, software, applications, and services.
                        </p>
                    </section>

                    <div className="policy-toc">
                        <h2>Table of Contents</h2>
                        <ol>
                            <li>Scope & Applicability</li>
                            <li>Definitions</li>
                            <li>Data We Collect</li>
                            <li>How We Collect Data</li>
                            <li>How We Use Data</li>
                            <li>Consent & Legal Bases</li>
                            <li>Cookies & Tracking</li>
                            <li>Payments via Razorpay</li>
                            <li>Sharing & Disclosures</li>
                            <li>International Transfers</li>
                            <li>Data Security</li>
                            <li>Data Retention</li>
                            <li>Your Rights & Choices</li>
                            <li>Children's Privacy</li>
                            <li>Third-Party Links & Integrations</li>
                            <li>Changes to This Policy</li>
                            <li>Contact & Grievance Officer</li>
                            <li>Acknowledgment</li>
                        </ol>
                    </div>

                    <section className="policy-section">
                        <h2>1. Scope & Applicability</h2>
                        <p>This Policy applies to personal data processed by us in connection with our websites, products, services, marketing, customer support, hiring, and vendor interactions. It does not apply to information processed by third parties that we do not own or control. Our Terms & Conditions, Refund Policy, and Cancellation Policy should be read together with this Policy.</p>
                    </section>

                    <section className="policy-section">
                        <h2>2. Definitions</h2>
                        <ul>
                            <li><strong>Personal Data:</strong> Information that identifies or can reasonably be linked to an identifiable person.</li>
                            <li><strong>Processing:</strong> Any operation on personal data (collection, use, storage, disclosure, deletion, etc.).</li>
                            <li><strong>Controller / Data Fiduciary:</strong> The entity that determines the purposes and means of processing personal data (typically the Company for our services).</li>
                            <li><strong>Processor / Data Processor:</strong> An entity that processes personal data on behalf of a controller (e.g., our cloud, analytics, and payment partners).</li>
                        </ul>
                    </section>

                    <section className="policy-section">
                        <h2>3. Data We Collect</h2>
                        <ul>
                            <li><strong>Contact & Identity:</strong> Name, company, job title, email, phone, address, country.</li>
                            <li><strong>Account & Authentication:</strong> usernames, hashed passwords, role/permission data, access logs.</li>
                            <li><strong>Transactional:</strong> invoices, amounts, currency, plan details, tax info (e.g., GSTIN), and limited payment metadata (e.g., Razorpay payment ID, status). We do not collect or store full card numbers, CVV, or UPI PINs.</li>
                            <li><strong>Usage & Technical:</strong> IP address, device/browser type, OS, pages viewed, referring URLs, session identifiers, crash logs, feature usage, and time stamps.</li>
                            <li><strong>Content You Provide:</strong> project briefs, tickets, emails, attachments, feedback, survey responses.</li>
                            <li><strong>Candidate/HR (if applicable):</strong> CV/resume, qualifications, employment history, and references.</li>
                            <li><strong>Vendor/Partner (if applicable):</strong> business contacts, contract details, KYC information where required by law.</li>
                        </ul>
                    </section>

                    <section className="policy-section">
                        <h2>4. How We Collect Data</h2>
                        <ul>
                            <li><strong>Directly from you:</strong> when you fill forms, create an account, request a quote, sign an SOW, or contact support.</li>
                            <li><strong>Automatically:</strong> via cookies, SDKs, and similar technologies when you use our sites or services.</li>
                            <li><strong>From Third Parties:</strong> payment processors (e.g., Razorpay), analytics providers, marketing partners, social sign-on, publicly available sources, or your employer if they are our customer.</li>
                        </ul>
                    </section>

                    <section className="policy-section">
                        <h2>5. How We Use Data</h2>
                        <ul>
                            <li>To provide, operate, maintain, and secure our services and deliverables.</li>
                            <li>To process orders, invoicing, taxes, and payments; to manage subscriptions and renewals.</li>
                            <li>To communicate with you about features, updates, service notices, security alerts, and administrative messages.</li>
                            <li>To respond to enquiries, support tickets, bug reports, and feedback.</li>
                            <li>To plan, develop, test, and improve products, including analytics, A/B testing, and quality assurance.</li>
                            <li>To prevent fraud, abuse, security incidents, and to enforce our Terms & policies.</li>
                            <li>For legal compliance, regulatory filings, audit, and to establish/defend legal claims.</li>
                            <li>For marketing and business development where permitted (you may opt out at any time).</li>
                        </ul>
                    </section>

                    <section className="policy-section">
                        <h2>6. Consent & Legal Bases</h2>
                        <p>Where required, we process personal data based on one or more of the following:</p>
                        <ul>
                            <li><strong>Consent:</strong> for optional uses (e.g., certain marketing cookies or communications).</li>
                            <li><strong>Contractual Necessity:</strong> to perform our agreement with you or your organization (e.g., delivering services under an Order/SOW).</li>
                            <li><strong>Legitimate Interests / Permitted Uses:</strong> to operate and improve services, secure systems, prevent fraud, and promote our offerings in a way that does not override your rights and freedoms.</li>
                            <li><strong>Legal Obligations:</strong> to comply with applicable laws (e.g., tax, accounting, KYC/AML if applicable) and to respond to lawful requests.</li>
                            <li><strong>Vital Interests / Public Interest:</strong> where necessary to protect individuals or for important public interest recognized by law.</li>
                        </ul>
                        <p>You may withdraw consent at any time with effect for the future, where consent is the basis of processing.</p>
                    </section>

                    <section className="policy-section">
                        <h2>7. Cookies & Tracking</h2>
                        <p>We use cookies and similar technologies (pixels, local storage, SDKs) to operate our websites and services.</p>
                        <ul>
                            <li><strong>Strictly Necessary:</strong> required for core functionality, security, and session management.</li>
                            <li><strong>Functional:</strong> remember preferences and enhance features.</li>
                            <li><strong>Analytics:</strong> measure usage and performance to improve the service.</li>
                            <li><strong>Marketing (optional):</strong> deliver relevant content or communications.</li>
                        </ul>
                        <p>You can manage cookies through our banner (where shown) and your browser settings. Blocking certain cookies may impact functionality.</p>
                    </section>

                    <section className="policy-section">
                        <h2>8. Payments via Razorpay</h2>
                        <ul>
                            <li>We use Razorpay to process certain payments. By initiating a payment, you authorize Razorpay and relevant banks/networks to process your transaction.</li>
                            <li><strong>Card/UPI Data:</strong> We do not collect or store full card numbers, CVV, or UPI PINs. Such sensitive payment data is collected and processed by Razorpay in accordance with its policies and applicable laws.</li>
                            <li><strong>Payment Metadata:</strong> We may receive limited details such as payment ID, status, method, and masked card info to reconcile and support your order.</li>
                            <li><strong>Disputes & Chargebacks:</strong> Bank/network decisions and Razorpay timelines are outside our control. We will cooperate in good faith but are not responsible for processing delays or outcomes determined by third parties.</li>
                        </ul>
                    </section>

                    <section className="policy-section">
                        <h2>9. Sharing & Disclosures</h2>
                        <p>We share personal data only as necessary and with appropriate safeguards:</p>
                        <ul>
                            <li><strong>Service Providers/Processors:</strong> hosting, storage, security, analytics, communications, payment processing (including Razorpay), and customer support vendors.</li>
                            <li><strong>Business Partners:</strong> integration partners and subcontractors engaged to deliver parts of a project or SOW.</li>
                            <li><strong>Legal/Compliance:</strong> to comply with law, legal process, or enforce our agreements; to protect rights, property, security, or prevent fraud/abuse.</li>
                            <li><strong>Business Transfers:</strong> as part of a merger, acquisition, financing, restructuring, or sale of assets, subject to confidentiality.</li>
                            <li><strong>With Your Direction:</strong> when you connect third-party services or request data sharing.</li>
                        </ul>
                        <p>We do not sell personal data. We do not allow our processors to use your data for their own independent marketing without your consent.</p>
                    </section>

                    <section className="policy-section">
                        <h2>10. International Transfers</h2>
                        <p>We may transfer personal data across borders to countries where we or our service providers operate. Where required, we implement appropriate safeguards (e.g., contractual clauses, transfer assessments, or other mechanisms recognized by applicable law). By using the services, you understand that your data may be processed in jurisdictions with different privacy laws than your own.</p>
                    </section>

                    <section className="policy-section">
                        <h2>11. Data Security</h2>
                        <p>We implement commercially reasonable administrative, technical, and organizational measures designed to protect personal data (e.g., access controls, encryption in transit, network segregation, logging, and vulnerability management). However, no method of transmission or storage is fully secure; we cannot guarantee absolute security.</p>
                    </section>

                    <section className="policy-section">
                        <h2>12. Data Retention</h2>
                        <p>We retain personal data for as long as necessary to fulfill the purposes outlined in this Policy, to comply with legal, accounting, or reporting requirements, to resolve disputes, and to enforce our agreements. Typical examples (subject to project or legal requirements):</p>
                        <ul>
                            <li><strong>Account & Transaction Records:</strong> 8 years from the end of the financial year (or longer if required by law).</li>
                            <li><strong>Project/Support Data:</strong> up to 30–180 days after contract closure unless otherwise agreed.</li>
                            <li><strong>Marketing Data:</strong> until you opt out or for a reasonable period after last interaction.</li>
                            <li><strong>Logs & Security Data:</strong> 90–365 days, subject to rotation and security needs.</li>
                        </ul>
                        <p>We may anonymize data for analytics, testing, and product improvement; anonymized data is not subject to this Policy.</p>
                    </section>

                    <section className="policy-section">
                        <h2>13. Your Rights & Choices</h2>
                        <p>Depending on your location and applicable law, you may have rights to:</p>
                        <ul>
                            <li>Access and obtain a copy of your personal data.</li>
                            <li>Request correction or updating of inaccurate or incomplete data.</li>
                            <li>Request deletion, restriction, or objection to certain processing.</li>
                            <li>Withdraw consent where processing is based on consent.</li>
                            <li>Port data to another service (where technically feasible and legally required).</li>
                            <li>Lodge a complaint with a competent supervisory authority.</li>
                        </ul>
                        <p>To exercise rights, email <a href="mailto:contact@sol9x.in">contact@sol9x.in</a>. We may request verification information and may decline or limit requests as permitted by law (e.g., where requests are excessive, unfounded, impact others' rights, or conflict with legal obligations). We may charge a reasonable fee where allowed.</p>
                        <p><strong>Marketing Choices:</strong> You can opt out of marketing emails by using the unsubscribe link in the message or contacting us. You will still receive service and transactional communications.</p>
                    </section>

                    <section className="policy-section">
                        <h2>14. Children's Privacy</h2>
                        <p>Our services are not directed to minors. We do not knowingly collect personal data from children below the age threshold defined by applicable law. If you believe a child has provided personal data to us, contact us so we can take appropriate action.</p>
                    </section>

                    <section className="policy-section">
                        <h2>15. Third-Party Links & Integrations</h2>
                        <p>Our websites and services may contain links to and integrations with third-party sites or platforms. We are not responsible for the privacy practices of those third parties. Please review their policies before providing data.</p>
                    </section>

                    <section className="policy-section">
                        <h2>16. Changes to This Policy</h2>
                        <p>We may update this Policy from time to time. Changes are effective upon posting or as otherwise indicated. If changes materially affect your rights, we will provide additional notice where required by law. Your continued use of the services after the effective date signifies your acceptance of the revised Policy.</p>
                    </section>

                    <section className="policy-section">
                        <h2>17. Contact & Grievance Officer</h2>
                        <div className="policy-contact">
                            <p><strong>SOL9X PRIVATE LIMITED</strong></p>
                            <p>New Delhi, India</p>
                            <p>Email: <a href="mailto:contact@sol9x.in">contact@sol9x.in</a></p>
                            <p>Phone: <a href="tel:+918920950949">+91 8920950949</a></p>
                        </div>
                    </section>

                    <section className="policy-section">
                        <h2>18. Acknowledgment</h2>
                        <p>By using our websites or services, or by making a payment through Razorpay, you acknowledge that you have read and understood this Privacy Policy.</p>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    )
}

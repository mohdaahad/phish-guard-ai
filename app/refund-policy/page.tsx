import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function RefundPolicy() {
  return (
    <>
      <Header />
      <main className="policy-page">
        <div className="policy-container">
          <h1>Refund Policy</h1>
          <p className="policy-effective-date">Effective Date: August 8, 2025</p>

          <section className="policy-intro">
            <p>
              This Refund Policy explains our position on refunds for the services provided by <strong>SOL9X PRIVATE LIMITED</strong>.
            </p>
          </section>

          <div className="policy-toc">
            <h2>Table of Contents</h2>
            <ol>
              <li>Scope & Definitions</li>
              <li>General Refund Position</li>
              <li>Eligibility Matrix by Offering</li>
              <li>Refunds via Razorpay</li>
              <li>How to Request a Refund</li>
              <li>Refund Review & Timelines</li>
              <li>Chargebacks & Disputes</li>
              <li>Strictly Non-Refundable Items</li>
              <li>Third-Party Fees & Pass-Through Costs</li>
              <li>Payment Errors & Failed Transactions</li>
              <li>Cancellations & Terminations</li>
              <li>Statutory Rights</li>
              <li>Contact & Grievance Officer</li>
              <li>Acknowledgment</li>
            </ol>
          </div>

          <section className="policy-section">
            <h2>1. Scope & Definitions</h2>
            <ul>
              <li><strong>Client/You:</strong> the purchaser of our services or deliverables.</li>
              <li><strong>Deliverables:</strong> software, code, configurations, documentation, designs, and other work product provided by us.</li>
              <li><strong>Order/SOW:</strong> an order form or statement of work mutually executed by you and us.</li>
              <li><strong>Third-Party Services:</strong> services not owned or controlled by us (e.g., Razorpay, cloud providers, libraries, banks, UPI).</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>2. General Refund Position</h2>
            <p>To the maximum extent permitted by law and unless expressly stated otherwise in an Order/SOW, all fees paid to the Company are non-refundable, including but not limited to deposits, milestone payments, consulting hours, support fees, subscriptions, setup/onboarding fees, discovery/analysis fees, and license fees. Change-of-mind, preference changes, or internal budgetary decisions do not qualify for refunds.</p>
          </section>

          <section className="policy-section">
            <h2>3. Eligibility Matrix by Offering</h2>
            <ul>
              <li><strong>Custom Development (Fixed-Bid):</strong>
                <ul>
                  <li>Deposit/Advance: Non-refundable after Order/SOW execution or project kickoff (whichever is earlier).</li>
                  <li>Milestone Payments: Non-refundable once the milestone's scope has commenced. Post-delivery disputes are handled under the acceptance criteria in the SOW, not via refunds.</li>
                </ul>
              </li>
              <li><strong>Time & Materials (T&M):</strong> Billed time, expenses, and minimum blocks are non-refundable once logged or allocated, whether or not you fully utilized allocated slots due to client-side delays.</li>
              <li><strong>Maintenance/Support Subscriptions:</strong> Prepaid terms are non-refundable. You may cancel renewal (if allowed in the SOW) effective at the end of the current term; the current term remains non-refundable.</li>
              <li><strong>Licenses, API Keys, Seats, or Activations:</strong> Non-refundable once issued/activated/accessed.</li>
              <li><strong>Templates, Digital Assets, or Downloads:</strong> Non-refundable upon access or download.</li>
              <li><strong>Training/Workshops:</strong> Fees are non-refundable. You may reschedule once with at least 7 days' written notice, subject to availability and rescheduling fees.</li>
              <li><strong>Explicit Billing Errors Only:</strong> We may consider a refund or adjustment for a verifiable, Company-caused duplicate charge or mathematical billing error reported within 3 calendar days of the transaction date and supported by evidence.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>4. Refunds via Razorpay</h2>
            <ul>
              <li>Where a refund is approved at our sole discretion (or required by law), it will be processed only via Razorpay to the original payment method (e.g., card, UPI, net banking, wallet) used for the transaction.</li>
              <li>We do not store card numbers or CVV; sensitive payment data is handled by Razorpay and relevant banks/networks.</li>
              <li>Settlement and refund processing timelines are controlled by banks, networks, UPI, and Razorpay; we are not liable for delays once we have initiated the refund.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>5. How to Request a Refund</h2>
            <p>To request a refund (only where eligible):</p>
            <ol>
              <li>Email <a href="mailto:contact@sol9x.in">contact@sol9x.in</a> with subject line "Refund Request – [Order/SOW/Invoice No.]".</li>
              <li>Include: legal name, contact details, project name, Razorpay payment ID, transaction date/amount, and a clear explanation with evidence (e.g., invoice copy, bank statement highlighting the duplicate entry).</li>
              <li>Submit within 3 calendar days of the transaction date (billing errors only). Requests after this window are automatically ineligible.</li>
            </ol>
          </section>

          <section className="policy-section">
            <h2>6. Refund Review & Timelines</h2>
            <ul>
              <li><strong>Review Time:</strong> We aim to review complete requests within 7–10 business days. We may request additional information; failure to provide it may result in denial.</li>
              <li><strong>If Approved:</strong> We will instruct Razorpay to process the refund. Banks/UPI/wallets typically reflect the credit in 5–14 business days from Razorpay's processing, but timelines can vary outside our control.</li>
              <li><strong>If Denied:</strong> We will notify you with a brief reason. Denials are final except where required by law.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>7. Chargebacks & Disputes</h2>
            <ul>
              <li>You agree to first contact us to resolve billing issues before initiating a chargeback or payment dispute.</li>
              <li>Unauthorized or unwarranted chargebacks may result in suspension of services and you will be liable for related costs, penalties, gateway/network fees, and our reasonable investigation and collection expenses.</li>
              <li>We reserve the right to represent and contest any chargeback with evidence of service delivery, access logs, milestone approvals, or SOW terms.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>8. Strictly Non-Refundable Items</h2>
            <ul>
              <li>Deposits/advances following Order/SOW execution or kickoff.</li>
              <li>Work already commenced, completed, delivered, accessed, or used in whole or part.</li>
              <li>Setup/onboarding fees, discovery/analysis, architecture, and planning artifacts.</li>
              <li>Customization, integrations, and code deliverables (including partial builds, branches, prototypes, or POCs).</li>
              <li>Third-party license costs, pass-through expenses, and government taxes/duties (to the extent non-recoverable).</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>9. Third-Party Fees & Pass-Through Costs</h2>
            <p>Fees charged by third parties (e.g., cloud services, app stores, email/SMS providers, domain/SSL vendors, and Razorpay gateway fees) are non-refundable. Any approved refund will exclude such charges where non-recoverable.</p>
          </section>

          <section className="policy-section">
            <h2>10. Payment Errors, Duplicates & Failed Transactions</h2>
            <ul>
              <li><strong>Duplicate Charges:</strong> If you were inadvertently charged twice for the same invoice and provide proof within 3 calendar days, we may issue a refund for the duplicate entry after verification.</li>
              <li><strong>Failed/Timed-Out Transactions:</strong> If your account is debited but the payment is not captured, the amount is typically reversed by your bank/UPI automatically. If not reversed within 7 business days, contact your bank and share the UTR/reference; notify us with the Razorpay payment ID for follow-up.</li>
              <li><strong>Currency Conversion/FX:</strong> Any FX differences, bank charges, or gateway fees arising from refunds are your responsibility.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>11. Cancellations & Terminations</h2>
            <ul>
              <li><strong>Client-Initiated:</strong> If you cancel a project, subscription, or Order/SOW, all amounts due and payable (including early termination fees, if any) become immediately due. Amounts already paid remain non-refundable.</li>
              <li><strong>Company-Initiated:</strong> We may cancel for cause (e.g., non-payment, policy violation). No refunds apply for cancellation due to your breach.</li>
              <li><strong>Force Majeure:</strong> No refunds are due for delays or non-performance caused by events beyond our reasonable control (e.g., outages, network/bank/UPI issues, platform changes).</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>12. Statutory Rights</h2>
            <p>Nothing in this Refund Policy limits any non-waivable statutory rights that may apply to you under applicable law. Where required by law, we will comply with mandated refund obligations, but in all other cases our company-first, no-refund policy applies.</p>
            <p>This Refund Policy should be read together with our Terms & Conditions and Privacy Policy. In case of conflict, the Terms & Conditions prevail.</p>
          </section>

          <section className="policy-section">
            <h2>13. Contact & Grievance Officer</h2>
            <div className="policy-contact">
              <p><strong>SOL9X PRIVATE LIMITED</strong></p>
              <p>New Delhi, India</p>
              <p>Email: <a href="mailto:contact@sol9x.in">contact@sol9x.in</a></p>
              <p>Phone: <a href="tel:+918920950949">+91 8920950949</a></p>
            </div>
          </section>

          <section className="policy-section">
            <h2>14. Acknowledgment</h2>
            <p>By initiating a payment or engaging our services, you acknowledge and agree to this Refund Policy, including the restrictions, exclusions, and processes described above.</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

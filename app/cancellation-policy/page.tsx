import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function CancellationPolicy() {
  return (
    <>
      <Header />
      <main className="policy-page">
        <div className="policy-container">
          <h1>Cancellation Policy</h1>
          <p className="policy-effective-date">Effective Date: August 8, 2025</p>

          <section className="policy-intro">
            <p>
              This Cancellation Policy sets out how <strong>SOL9X PRIVATE LIMITED</strong> ("Company," "we," "us," or
              "our") handles cancellations for custom software development, integrations, subscriptions, and related
              professional services. This Policy should be read together with our Terms & Conditions and Refund Policy.
              If there is a conflict, the Terms & Conditions control.
            </p>
          </section>

          <div className="policy-toc">
            <h2>Table of Contents</h2>
            <ol>
              <li>Scope & Definitions</li>
              <li>General Position on Cancellations</li>
              <li>Project / SOW Cancellations</li>
              <li>Subscriptions, Support & Maintenance</li>
              <li>Training, Workshops & Meetings</li>
              <li>Third-Party Services & Razorpay</li>
              <li>How to Request a Cancellation</li>
              <li>Fees, Early Termination & Commitments</li>
              <li>Service Suspension, Access & Data</li>
              <li>Chargebacks & Payment Disputes</li>
              <li>Force Majeure</li>
              <li>Statutory Rights</li>
              <li>Contact & Grievance Officer</li>
            </ol>
          </div>

          <section className="policy-section">
            <h2>1. Scope & Definitions</h2>
            <ul>
              <li>
                <strong>Client/You:</strong> the purchaser of our services or deliverables.
              </li>
              <li>
                <strong>Order/SOW:</strong> an order form or statement of work executed by you and us.
              </li>
              <li>
                <strong>Deliverables:</strong> software, code, configurations, documentation, designs, or other work
                product.
              </li>
              <li>
                <strong>Third-Party Services:</strong> platforms or services not owned/controlled by us (e.g., Razorpay,
                cloud providers, banks, UPI, libraries).
              </li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>2. General Position on Cancellations</h2>
            <p>
              Our work is custom and resource-planned. All cancellations are subject to payment for work performed,
              resources reserved, and non-cancellable third-party commitments. Unless otherwise required by law or
              expressly provided in an Order/SOW, amounts already paid are non-refundable. Cancelling a service does not
              waive amounts already due.
            </p>
          </section>

          <section className="policy-section">
            <h2>3. Project / SOW Cancellations</h2>
            <ul>
              <li>
                <strong>Notice:</strong> You may request cancellation of a project/SOW by giving written notice from
                your authorized contact to <a href="mailto:contact@sol9x.in">contact@sol9x.in</a>. A cancellation takes
                effect only when we acknowledge receipt in writing.
              </li>
              <li>
                <strong>In-Progress Work:</strong> You must pay for all work performed up to the effective cancellation
                date, including partially completed tasks, discovery, design, architecture, code branches, prototypes,
                testing, and documentation.
              </li>
              <li>
                <strong>Early Termination Fees (Liquidated Damages):</strong> Where not otherwise specified in the SOW,
                you agree to pay an early termination fee equal to the greater of (a) 30% of the unpaid contract value
                for the remaining scope, or (b) INR 25,000, as a genuine pre-estimate of our costs for resource
                allocation, scheduling, and opportunity loss. If applicable law treats any portion as a penalty, it
                shall be reduced to the maximum enforceable amount.
              </li>
              <li>
                <strong>Change Orders:</strong> Approved change orders, accelerations, or additional features remain
                payable even if the project is cancelled later.
              </li>
              <li>
                <strong>Acceptance Criteria:</strong> Disagreements about deliverables are handled through the
                acceptance process in the SOW and do not constitute a right to cancel without charges.
              </li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>4. Subscriptions, Support & Maintenance</h2>
            <ul>
              <li>
                <strong>Current Term:</strong> Prepaid subscription/support/maintenance terms are non-cancelable and
                non-refundable for the current billing period.
              </li>
              <li>
                <strong>Future Terms:</strong> You may cancel renewal (if permitted by the Order/SOW) by giving at least
                30 days' written notice before the next renewal date, unless the Order/SOW specifies a different notice
                period.
              </li>
              <li>
                <strong>Minimum Commitments:</strong> If your plan has a minimum term or committed volume, cancelling
                early triggers fees for the remaining commitment as set out in the Order/SOW.
              </li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>5. Training, Workshops & Meetings</h2>
            <ul>
              <li>
                <strong>Cancellation:</strong> Fees are non-refundable. You may request one reschedule with at least 7
                calendar days' prior written notice, subject to availability and rescheduling fees.
              </li>
              <li>
                <strong>No-Shows / Late Changes:</strong> Cancellations or reschedule requests made within 7 days of the
                scheduled start time, or no-shows, are charged in full.
              </li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>6. Third-Party Services & Razorpay</h2>
            <ul>
              <li>
                We may rely on Third-Party Services (including Razorpay) for payments, hosting, messaging, analytics,
                authentication, and integrations. We do not control their timelines, policies, or availability.
              </li>
              <li>
                <strong>Payment Instruments:</strong> Cancelling a service does not automatically cancel or reverse
                payments already processed/initiated via Razorpay, banks, card networks, UPI, or wallets.
              </li>
              <li>
                <strong>Auto-Debit / Standing Instructions:</strong> We will stop future auto-debits after your
                cancellation is processed; charges already initiated may still settle. Network or bank delays are not
                our responsibility.
              </li>
              <li>
                <strong>Third-Party Contracts:</strong> Licenses, cloud resources, SMS/email credits, domain/SSL, and
                similar pass-through costs are subject to third-party cancellation terms and are generally
                non-refundable and non-recoverable.
              </li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>7. How to Request a Cancellation</h2>
            <ol>
              <li>
                Email <a href="mailto:contact@sol9x.in">contact@sol9x.in</a> with subject line: "Cancellation –
                [Order/SOW/Invoice No.]".
              </li>
              <li>
                Provide legal name, contact details, project/service name, Razorpay payment ID (if applicable), and the
                requested effective date.
              </li>
              <li>
                We may request additional verification. Cancellations are effective only upon our written confirmation.
              </li>
            </ol>
          </section>

          <section className="policy-section">
            <h2>8. Fees, Early Termination & Commitments</h2>
            <ul>
              <li>
                <strong>Amounts Due:</strong> Upon cancellation, all unpaid amounts become immediately due, including
                time & materials logged, milestone amounts for work commenced, early termination fees, non-cancellable
                third-party charges, and applicable taxes.
              </li>
              <li>
                <strong>Deposits/Advances:</strong> Non-refundable once the Order/SOW is executed or project kickoff
                occurs, whichever is earlier.
              </li>
              <li>
                <strong>Resource Blocking:</strong> Reserved developer time, sprint slots, and dedicated environments
                are chargeable if cancelled or reduced.
              </li>
              <li>
                <strong>Refunds (If Any):</strong> Any refund scenario is governed solely by our Refund Policy;
                cancellation alone does not create a refund entitlement.
              </li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>9. Service Suspension, Access & Data</h2>
            <ul>
              <li>
                <strong>Suspension:</strong> We may immediately suspend access upon a cancellation request or
                non-payment to protect systems and comply with legal or contractual obligations.
              </li>
              <li>
                <strong>IP & Deliverables:</strong> Access to Deliverables, repositories, environments, and licenses
                after cancellation is governed by the Order/SOW and our Terms & Conditions, and is contingent on full
                payment of all amounts due.
              </li>
              <li>
                <strong>Data Retention:</strong> Unless otherwise required by law or specified in the Order/SOW, we may
                retain project data for up to 30 days post-cancellation and then delete or anonymize it. Data exports
                during that window may incur professional service fees. Backups/archives are excluded.
              </li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>10. Chargebacks & Payment Disputes</h2>
            <ul>
              <li>You agree to contact us to resolve billing concerns before initiating a chargeback.</li>
              <li>
                Unwarranted chargebacks may result in service suspension and you will be liable for associated
                gateway/network penalties, investigation costs, and our reasonable recovery expenses.
              </li>
              <li>
                We reserve the right to contest chargebacks with evidence of delivery, access logs, approvals, and
                Order/SOW terms.
              </li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>11. Force Majeure</h2>
            <p>
              We are not liable for delays or failures resulting from events beyond our reasonable control, including
              but not limited to natural disasters, pandemics, labor disputes, governmental actions, utility failures,
              internet/backbone outages, or interruptions at Third-Party Services (including Razorpay, banks, UPI, cloud
              providers, or card networks).
            </p>
          </section>

          <section className="policy-section">
            <h2>12. Statutory Rights</h2>
            <p>
              Nothing in this Cancellation Policy limits any non-waivable statutory rights you may have under applicable
              law. Except as required by law, our company-first cancellation terms apply.
            </p>
          </section>

          <section className="policy-section">
            <h2>13. Contact & Grievance Officer</h2>
            <div className="policy-contact">
              <p>
                <strong>SOL9X PRIVATE LIMITED</strong>
              </p>
              <p>New Delhi, India</p>
              <p>
                Email: <a href="mailto:contact@sol9x.in">contact@sol9x.in</a>
              </p>
              <p>
                Phone: <a href="tel:+91-8920950949">+91-8920950949</a>
              </p>
            </div>
          </section>

          <section className="policy-section">
            <h2>Acknowledgment</h2>
            <p>
              By engaging our services or initiating a payment, you acknowledge and agree to this Cancellation Policy
              and its interaction with our Terms & Conditions and Refund Policy.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

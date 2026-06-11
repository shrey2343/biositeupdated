import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">Last Updated: December 2, 2025</p>
          </div>

          {/* Content */}
          <div className="prose prose-slate max-w-none">
            {/* Section 1 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using DBA Coach services provided by Research Mentor Clinic (Deepiotics Pvt. Ltd.), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">2. Services Provided</h2>
              <p className="text-muted-foreground mb-4">
                DBA Coach offers the following services:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><span className="font-semibold text-foreground">1:1 Doctorate Coaching:</span> Personalized mentoring for DBA candidates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><span className="font-semibold text-foreground">DBA Achiever Program:</span> Comprehensive end-to-end DBA support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><span className="font-semibold text-foreground">Time Saver Services:</span> Done-for-you research assistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><span className="font-semibold text-foreground">Research Templates & Resources:</span> Access to research tools and guides</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><span className="font-semibold text-foreground">Consultation Services:</span> Expert guidance on doctoral journey</span>
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
              <p className="text-muted-foreground mb-4">
                As a user of our services, you agree to:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Provide accurate and complete information when booking services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Maintain the confidentiality of your account credentials</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Use our services only for lawful academic purposes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Respect intellectual property rights of all materials provided</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Attend scheduled consultations or notify us in advance of cancellations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Not share or resell our proprietary materials without permission</span>
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">4. Payment Terms</h2>
              <p className="text-muted-foreground mb-4">
                Payment for services must be made in accordance with the pricing and payment terms communicated at the time of booking. We accept various payment methods including credit cards, debit cards, and online payment platforms.
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>All prices are in Indian Rupees (INR) unless otherwise specified</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Payment is due before service delivery unless otherwise agreed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Installment plans may be available for certain programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Prices are subject to change with prior notice</span>
                </li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">5. Cancellation and Rescheduling</h2>
              <p className="text-muted-foreground">
                Cancellations must be made at least 24 hours in advance for consultation sessions. Rescheduling requests should be submitted as early as possible. Repeated no-shows may result in service restrictions.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">6. Intellectual Property</h2>
              <p className="text-muted-foreground">
                All content, materials, templates, and resources provided by DBA Coach are protected by copyright and intellectual property laws. You may use these materials for your personal academic work but may not reproduce, distribute, or commercialize them without written permission.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">7. Service Limitations</h2>
              <p className="text-muted-foreground mb-4">
                While we strive to provide excellent guidance and support:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>We do not guarantee specific academic outcomes or degree completion timelines</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Final academic decisions rest with your institution and supervisors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>We provide guidance and support, not academic writing services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>You remain responsible for your original research and academic integrity</span>
                </li>
              </ul>
            </div>

            {/* Section 8 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                DBA Coach and Research Mentor Clinic shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability is limited to the amount paid for the specific service in question.
              </p>
            </div>

            {/* Section 9 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">9. Termination</h2>
              <p className="text-muted-foreground">
                We reserve the right to terminate or suspend access to our services for violation of these terms, non-payment, or any behavior deemed inappropriate or harmful to our community.
              </p>
            </div>

            {/* Section 10 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">10. Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-secondary rounded-2xl p-6 border border-border">
                <p className="text-muted-foreground mb-2">
                  <span className="font-semibold text-foreground">Email:</span> hello.dbacoach@gmail.com
                </p>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Address:</span> 204, 2nd Floor, Atulya IT Park, Khandwa Road, Indore
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

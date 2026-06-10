import { Link } from "react-router-dom";
import { Linkedin, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  const trainingLinks: [string, string][] = [
    ["No-Code Bio-AI", "/training/biocode-mastery"],
    ["Bio-AI Lab Course", "/training/bioai-lab"],
    ["AI for Lab Workflows", "#training"],
    ["Free Workshop", "#"],
    ["Enterprise Cohorts", "#"]
  ];
  
  const serviceLinks: [string, string][] = [
    ["Dissertation Writing", "#services"],
    ["Manuscript Writing", "#services"],
    ["Health Data Analysis", "#services"],
    ["Grant Proposals", "#services"],
    ["Policy Documents", "#services"]
  ];
  
  const deepioticsLinks: [string, string][] = [
    ["About Deepiotics", "#"],
    ["Our Experts", "#"],
    ["Global Reach", "#"],
    ["Client Outcomes", "#"],
    ["Contact", "#"]
  ];

  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <img 
                src="/background-removed (1) (1).png" 
                alt="BioAI Lab" 
                className="h-12 w-auto object-contain" 
              />
            </Link>
            <div className="mt-3 text-sm font-medium text-foreground">
              bioai.deepiotics.com · A Deepiotics Initiative
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              The world's only AI-powered end-to-end biotech platform — training the next generation while delivering expert services to the current generation of researchers, professors, and policymakers.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["DEEPIOTICS AI", "NDA PROTECTED", "42+ COUNTRIES", "PHD-LEVEL EXPERTS"].map((badge) => (
                <span 
                  key={badge} 
                  className="rounded-full border border-border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground"
                >
                  {badge}
                </span>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-4">
              <a 
                href="https://linkedin.com" 
                aria-label="LinkedIn" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                aria-label="Instagram" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com" 
                aria-label="Facebook" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                aria-label="Twitter" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Training Links */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-foreground">Training</h5>
            <ul className="mt-4 space-y-3">
              {trainingLinks.map(([label, href]) => (
                <li key={label}>
                  {href.startsWith("/") ? (
                    <Link 
                      to={href} 
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {label}
                    </Link>
                  ) : (
                    <a 
                      href={href} 
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-foreground">Services</h5>
            <ul className="mt-4 space-y-3">
              {serviceLinks.map(([label, href]) => (
                <li key={label}>
                  <a 
                    href={href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Deepiotics Links */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-foreground">Deepiotics</h5>
            <ul className="mt-4 space-y-3">
              {deepioticsLinks.map(([label, href]) => (
                <li key={label}>
                  <a 
                    href={href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © 2025 BioAI Lab · A Deepiotics Initiative. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Confidentiality & NDA</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

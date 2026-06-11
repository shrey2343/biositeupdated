import { Link } from "react-router-dom";
import { Linkedin, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  const trainingLinks: [string, string][] = [
    ["No-Code Bio-AI", "/training/biocode-mastery"],
    ["Bio-AI Lab Course", "/training/bioai-lab"],
  ];

  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr]">
          {/* Brand Section */}
          <div>
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
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-md">
              The world's only AI-powered end-to-end biotech platform — training the next generation while delivering expert services to the current generation of researchers, professors, and policymakers.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["DEEPIOTICS AI", "NDA PROTECTED", "42+ COUNTRIES", "PHD-LEVEL EXPERTS"].map((badge) => (
                <span 
                  key={badge} 
                  className="rounded-full border border-border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground"
                >
                  {badge}
                </span>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-4">
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
            <h5 className="text-xs font-bold uppercase tracking-wider text-foreground mb-4">Training</h5>
            <ul className="space-y-2.5">
              {trainingLinks.map(([label, href]) => (
                <li key={label}>
                  <Link 
                    to={href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-foreground mb-4">Legal</h5>
            <ul className="space-y-2.5">
              <li>
                <Link 
                  to="/privacy-policy" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms-of-service" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © 2025 BioAI Lab · A Deepiotics Initiative. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

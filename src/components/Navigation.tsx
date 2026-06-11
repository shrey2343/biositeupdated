import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Phone, Calendar } from "lucide-react";
import { useFormModal } from "@/contexts/FormModalContext";

export default function Navigation() {
  const [showTrainingDropdown, setShowTrainingDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeDropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const prefersReduced = useReducedMotion();
  const { openFormModal } = useFormModal();

  /* Scroll listener */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => {
    setMobileMenuOpen(false);
    setShowTrainingDropdown(false);
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 150);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleDropdownLinkClick = () => {
    setShowTrainingDropdown(false);
    setMobileMenuOpen(false);
  };

  const clearCloseTimeout = () => {
    if (closeDropdownTimeoutRef.current) {
      clearTimeout(closeDropdownTimeoutRef.current);
      closeDropdownTimeoutRef.current = null;
    }
  };

  const openDropdown = () => {
    clearCloseTimeout();
    setShowTrainingDropdown(true);
  };

  const closeDropdownDelayed = () => {
    clearCloseTimeout();
    closeDropdownTimeoutRef.current = setTimeout(() => setShowTrainingDropdown(false), 120);
  };

  const toggleDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.innerWidth > 768) return;
    clearCloseTimeout();
    setShowTrainingDropdown((prev) => !prev);
  };

  useEffect(() => () => clearCloseTimeout(), []);

  return (
    <motion.header
      className={`sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md transition-shadow${scrolled ? " shadow-md" : ""}`}
      initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/background-removed (1) (1).png" alt="BioAI Lab Logo" className="h-14 w-auto object-contain brightness-110 contrast-125" />
         
        </Link>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col justify-center gap-1.5 rounded-md p-2 md:hidden"
          onClick={() => setMobileMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-foreground transition-transform duration-200${mobileMenuOpen ? " translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-foreground transition-opacity duration-200${mobileMenuOpen ? " opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-foreground transition-transform duration-200${mobileMenuOpen ? " -translate-y-2 -rotate-45" : ""}`} />
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">

          {/* Training dropdown */}
          <div
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdownDelayed}
          >
            <button
              className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary"
              onClick={toggleDropdown}
            >
              Training
              <ChevronDown className={`h-3.5 w-3.5 transition-transform${showTrainingDropdown ? " rotate-180" : ""}`} />
            </button>

            {showTrainingDropdown && (
              <div
                className="absolute left-0 top-full mt-1 w-60 rounded-xl border border-border bg-background shadow-lg"
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdownDelayed}
              >
                <Link
                  to="/training/biocode-mastery"
                  className="block rounded-t-xl px-4 py-3 hover:bg-accent"
                  onClick={handleDropdownLinkClick}
                >
                  <div className="text-sm font-semibold text-foreground">No-Code Bio-AI</div>
                  <div className="text-xs text-muted-foreground">Biology-first. Zero coding anxiety.</div>
                </Link>
                <Link
                  to="/training/bioai-lab"
                  className="block rounded-b-xl px-4 py-3 hover:bg-accent"
                  onClick={handleDropdownLinkClick}
                >
                  <div className="text-sm font-semibold text-foreground">Bio-AI Lab Course</div>
                  <div className="text-xs text-muted-foreground">Code meets biology. Real data, real results.</div>
                </Link>
              </div>
            )}
          </div>

          <a href="#services" onClick={(e) => handleNavClick(e, "services")} className="text-sm font-medium text-foreground/80 hover:text-primary">Services</a>
          <a href="#why" onClick={(e) => handleNavClick(e, "why")} className="text-sm font-medium text-foreground/80 hover:text-primary">Why Us</a>
          <Link to="/blog" className="text-sm font-medium text-foreground/80 hover:text-primary">Blog</Link>
        </nav>

        {/* CTA buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://wa.me/918827272142"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-sm font-medium"
          >
            <Phone className="h-4 w-4 text-primary" /> +91 88272 72142
          </a>
          <button
            onClick={() => openFormModal(false)}
            className="inline-flex items-center gap-2 rounded-full bg-cta px-4 py-2.5 text-sm font-semibold text-cta-foreground shadow-float hover:opacity-95"
          >
            <Calendar className="h-4 w-4" /> Apply Online
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background px-4 pb-5 pt-3 md:hidden">
          <nav className="flex flex-col gap-1">
            <button
              className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-accent"
              onClick={toggleDropdown}
            >
              Training
              <ChevronDown className={`h-4 w-4 transition-transform${showTrainingDropdown ? " rotate-180" : ""}`} />
            </button>

            {showTrainingDropdown && (
              <div className="ml-3 flex flex-col gap-1 border-l border-border pl-3">
                <Link
                  to="/training/biocode-mastery"
                  className="rounded-lg px-3 py-2 text-sm hover:bg-accent"
                  onClick={handleDropdownLinkClick}
                >
                  <div className="font-semibold">No-Code Bio-AI</div>
                  <div className="text-xs text-muted-foreground">Biology-first. Zero coding anxiety.</div>
                </Link>
                <Link
                  to="/training/bioai-lab"
                  className="rounded-lg px-3 py-2 text-sm hover:bg-accent"
                  onClick={handleDropdownLinkClick}
                >
                  <div className="font-semibold">Bio-AI Lab Course</div>
                  <div className="text-xs text-muted-foreground">Code meets biology. Real data, real results.</div>
                </Link>
              </div>
            )}

            <a href="#services" onClick={(e) => handleNavClick(e, "services")} className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-accent">Services</a>
            <a href="#why" onClick={(e) => handleNavClick(e, "why")} className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-accent">Why Us</a>
            <Link to="/blog" className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-accent">Blog</Link>

            <div className="mt-3 flex flex-col gap-2">
              <a
                href="https://wa.me/918827272142"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-medium"
              >
                <Phone className="h-4 w-4 text-primary" /> +91 88272 72142
              </a>
              <button
                onClick={() => {
                  openFormModal(false);
                  setMobileMenuOpen(false);
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cta px-4 py-2.5 text-sm font-semibold text-cta-foreground"
              >
                <Calendar className="h-4 w-4" /> Apply Online
              </button>
            </div>
          </nav>
        </div>
      )}
    </motion.header>
  );
}

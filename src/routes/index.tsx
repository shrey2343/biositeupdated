import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  CheckCircle2, Phone, Calendar, ArrowRight, Star, Zap, Globe2, Rocket,
  Linkedin, Instagram, Facebook, Twitter, ChevronDown, X, Award, Users,
} from "lucide-react";
import heroImg from "@/assets/hero-lab.jpg";
import dnaImg from "@/assets/dna-glow.jpg";
import teamImg from "@/assets/team-research.jpg";
import pipetteImg from "@/assets/pipette.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BioAI Lab — One Platform. Every Biotech Breakthrough." },
      { name: "description", content: "From dissertation to discovery. The world's first end-to-end academic and research services ecosystem built exclusively for the global biotech community." },
      { property: "og:title", content: "BioAI Lab — One Platform. Every Biotech Breakthrough." },
      { property: "og:description", content: "AI × Biotech intelligence platform for students, PhDs, professors, R&D firms and governments." },
    ],
  }),
  component: Home,
});

const APPLY_URL = "https://docs.google.com/forms/d/e/1FAIpQLSe6JxqYEUKk6Zq05XCzhhiaooeZ35dsp6v9M-vmmfySv1-qjA/viewform?usp=header";
const PDF_URL = "/Bioinformatics_Interview_Bible_Final.pdf";

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PromoBar />
      <Header />
      <Hero />
      <WhoAreYou />
      <AudienceSplit />
      <Training />
      <Resources />
      <Services />
      <WhyUs />
      <Testimonials />
      <Global />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  PROMO BAR                                                           */
/* ------------------------------------------------------------------ */
function PromoBar() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="relative bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-2.5 text-center text-sm sm:text-[15px]">
        <span className="font-bold tracking-wide">Free Download</span>
        <span className="mx-2 opacity-80">•</span>
        <span className="opacity-95">The Bioinformatics Interview Bible — 20 real interview questions with model answers</span>
        <a
          href={PDF_URL}
          download
          className="ml-3 inline-flex items-center gap-1 rounded-full bg-cta px-3 py-1 text-xs font-semibold text-cta-foreground hover:opacity-90"
        >
          Download Free <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
      <button
        onClick={() => setOpen(false)}
        aria-label="Dismiss"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 hover:bg-white/10"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  HEADER                                                              */
/* ------------------------------------------------------------------ */
function TrainingDropdown() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary">
        Training <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute left-0 top-full mt-1 w-52 rounded-xl border border-border bg-background shadow-lg">
          <a href="#training" className="block rounded-t-xl px-4 py-2.5 text-sm text-foreground/80 hover:bg-accent hover:text-primary">
            All Programs
          </a>
          <Link
            to="/training/bioai-lab"
            className="block rounded-b-xl px-4 py-2.5 text-sm text-foreground/80 hover:bg-accent hover:text-primary"
          >
            BioAI Lab
          </Link>
        </div>
      )}
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5">
        <Link to="/" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-teal-gradient font-bold text-white">B</div>
          <div className="leading-tight">
            <div className="font-display text-lg font-extrabold tracking-tight">BioAI<span className="text-gradient">Lab</span></div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">A Deepiotics Initiative</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <TrainingDropdown />
          {[
            ["Services", "#services"],
            ["Why Us", "#why"],
            ["Blog", "#blog"],
          ].map(([label, href]) => (
            <a key={label} href={href} className="text-sm font-medium text-foreground/80 hover:text-primary">{label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="tel:+918827272142" className="hidden items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-sm font-medium md:inline-flex">
            <Phone className="h-4 w-4 text-primary" /> +91 88272 72142
          </a>
          <a
            href={APPLY_URL}
            className="inline-flex items-center gap-2 rounded-full bg-cta px-4 py-2.5 text-sm font-semibold text-cta-foreground shadow-float hover:opacity-95"
          >
            <Calendar className="h-4 w-4" /> Book Free Consultation
          </a>
        </div>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  HERO                                                                */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <section className="bg-hero">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 lg:grid-cols-2 lg:gap-8 lg:py-24">
        <div className="flex flex-col justify-center">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-primary" />
            A Deepiotics Initiative · AI × Biotech Intelligence Platform
          </p>
          <h1 className="mt-4 text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-[68px]">
            One Platform.{" "}
            <span className="text-gradient">Every Biotech Breakthrough.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            From dissertation to discovery — BioMind Research Institute is the world's first end-to-end academic and research services ecosystem built exclusively for the global biotech community.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={APPLY_URL}
              className="inline-flex items-center gap-2 rounded-full bg-teal-gradient px-7 py-4 text-base font-semibold text-white shadow-float hover:opacity-95"
            >
              Book My Free Consultation <ArrowRight className="h-4 w-4" />
            </a>
            <span className="text-sm text-muted-foreground">No pressure. Just clarity on your path.</span>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { icon: Zap, label: "Zero coding skill needed" },
              { icon: Globe2, label: "Works in every domain" },
              { icon: Rocket, label: "Get published faster" },
            ].map(({ icon: Icon, label }) => (
              <span key={label} className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
                <Icon className="h-4 w-4" /> {label}
              </span>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/15 via-accent-cyan/15 to-transparent blur-2xl" />
          <div className="relative w-full max-w-xl rounded-3xl bg-card p-3 shadow-card ring-1 ring-border">
            <img
              src={heroImg}
              alt="BioAI Lab researcher working with AI and genomic data"
              width={1280}
              height={1024}
              className="h-auto w-full rounded-2xl"
            />
          </div>
          <div className="absolute -right-2 top-6 flex items-center gap-3 rounded-2xl bg-card p-3 pr-5 shadow-float ring-1 ring-border sm:right-0 lg:right-[-1rem]">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-accent-cyan/15 text-accent-cyan">
              <CheckCircle2 className="h-6 w-6" />
            </span>
            <div className="leading-tight">
              <div className="text-lg font-extrabold">87% Success</div>
              <div className="text-xs text-muted-foreground">First-round grants</div>
            </div>
          </div>
          <div className="absolute -left-2 bottom-10 flex items-center gap-3 rounded-2xl bg-card p-3 pr-5 shadow-float ring-1 ring-border sm:left-0 lg:left-[-1rem]">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/15 text-primary">
              <Award className="h-6 w-6" />
            </span>
            <div className="leading-tight">
              <div className="text-lg font-extrabold">$18M+</div>
              <div className="text-xs text-muted-foreground">Grants secured</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  WHO ARE YOU                                                         */
/* ------------------------------------------------------------------ */
function WhoAreYou() {
  const cards = [
    {
      tag: "For Students & Early Career",
      title: "Train for a Biotech AI Career",
      desc: "UG, PG & early researchers. Courses, AI skills, and job-ready training built for the next generation.",
      features: ["🎓 Structured Courses", "💼 Career Support", "🚀 Hands-on Projects"],
      link: "Explore Courses",
      href: "#training",
    },
    {
      tag: "For Researchers & Orgs",
      title: "Expert Research Support",
      desc: "PhD students, professors, R&D firms, government bodies, and think tanks. Domain-matched specialists only.",
      features: ["📊 Data Analysis", "📝 Paper Writing", "💰 Grant Support"],
      link: "View Services",
      href: "#services",
    },
  ];

  const stats = [
    ["500+", "Students Trained"],
    ["$18M+", "Grants Secured"],
    ["350+", "Papers Published"],
    ["42+", "Countries Served"],
  ];

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
            Choose Your Path
          </span>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">Who are you?</h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Select your journey and unlock tailored resources designed for your goals
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {cards.map((c) => (
            <div key={c.tag} className="flex flex-col rounded-3xl border border-border bg-card p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-card">
              <span className="self-start rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{c.tag}</span>
              <h3 className="mt-5 text-2xl font-extrabold">{c.title}</h3>
              <p className="mt-3 text-base text-muted-foreground">{c.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {c.features.map((f) => (
                  <span key={f} className="rounded-full bg-secondary px-3 py-1 text-sm font-medium">{f}</span>
                ))}
              </div>
              <a href={c.href} className="mt-7 inline-flex items-center gap-2 self-start font-semibold text-primary hover:underline">
                {c.link} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map(([num, label]) => (
            <div key={label} className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
              <div className="text-3xl font-extrabold text-gradient sm:text-4xl">{num}</div>
              <div className="mt-2 text-sm font-medium text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  AUDIENCE SPLIT                                                      */
/* ------------------------------------------------------------------ */
function AudienceSplit() {
  const panels = [
    {
      num: "01",
      tag: "For Students",
      title: "Train for the Roles That Didn't Exist Five Years Ago",
      body: "Biotech employers now demand computational skills alongside lab credentials. Our AI courses are built for exactly this gap — practical, internationally recognised, and laser-focused on getting you hired or into top PhD programs.",
      list: [
        "No-Code Bio-AI — zero coding anxiety",
        "Bio-AI Lab — Python & R on real datasets",
        "AI Tools for Research Workflows",
        "Career support and placement pathways",
      ],
      cta: "Explore All Courses →",
      href: "#training",
    },
    {
      num: "02",
      tag: "For Researchers & Orgs",
      title: "Specialist Support Your Research Actually Deserves",
      body: "You don't need a generalist — you need a partner with domain depth equal to yours. Every BioAI Lab expert holds a PhD in their specialisation. An 87% grant success rate and $18M+ in secured funding speaks louder than promises.",
      list: [
        "Dissertation & manuscript writing — committee-ready",
        "Genomic & EHR data pipelines — publication-grade",
        "NIH, NSF, Wellcome Trust, DBT grant proposals",
        "White papers, biosafety policy & regulatory submissions",
      ],
      cta: "Explore Research Services →",
      href: "#services",
    },
  ];

  return (
    <section className="bg-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">// Two Paths. One Destination.</p>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">Built for Both of You</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Whether you're a student building a career or a researcher needing specialist firepower — BioAI Lab has a world-class solution, built specifically for your situation.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {panels.map((p) => (
            <div key={p.num} className="relative rounded-3xl border border-border bg-card p-8 pt-10 shadow-sm">
              <div className="absolute -top-5 left-8 grid h-10 w-10 place-items-center rounded-2xl bg-teal-gradient text-sm font-extrabold text-white shadow-float">
                {p.num}
              </div>
              <span className="self-start rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{p.tag}</span>
              <h3 className="mt-4 text-xl font-extrabold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              <ul className="mt-5 space-y-2">
                {p.list.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href={p.href} className="mt-6 inline-flex items-center gap-2 font-semibold text-primary hover:underline">
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  TRAINING                                                            */
/* ------------------------------------------------------------------ */
function Training() {
  const courses = [
    {
      level: "Foundation · Self-Paced · No Coding Required",
      title: "No-Code Bio-AI",
      hook: "Biology-first. Zero coding anxiety. Maximum impact.",
      desc: "Master AI-powered tools for drug discovery, protein analysis, literature mining, and genomics — entirely through visual no-code platforms. Built for UG and PG students with zero programming background who want AI on their CV before graduation.",
      tags: ["AI Drug Discovery", "Protein Folding Tools", "Literature AI Mining", "No Coding Needed", "Visual Platforms"],
      meta: ["📅 8 Weeks", "🎯 Self-Paced", "🏆 Certificate"],
      featured: false,
    },
    {
      level: "Intermediate · Live + Lab · Cohort",
      title: "Bio-AI Lab Course",
      hook: "Code meets biology. Real data, real results.",
      desc: "Python and R applied to actual genomic datasets, EHR data, and imaging pipelines. Weekly live sessions, virtual simulations, and a portfolio project that impresses every interviewer.",
      tags: ["Python / R", "ML in Genomics", "Virtual Lab"],
      meta: ["📅 12 Weeks", "🎬 Live"],
      featured: true,
    },
  ];

  return (
    <section id="training" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">// Training Academy</p>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
            The AI Skills Biotech Employers <span className="text-gradient">Are Hiring For</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Our courses don't teach theory. They build the exact tools, pipelines, and portfolios that open doors at leading research labs and biotech companies worldwide.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {courses.map((c) => (
            <div
              key={c.title}
              className={`relative flex flex-col rounded-3xl border bg-card p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-card ${
                c.featured ? "border-primary ring-2 ring-primary" : "border-border"
              }`}
            >
              {c.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cta px-4 py-1 text-xs font-bold uppercase tracking-wider text-cta-foreground shadow-float">
                  ⭐ Most Popular
                </span>
              )}
              <p className="text-xs font-bold uppercase tracking-wider text-primary">{c.level}</p>
              <h3 className="mt-2 text-2xl font-extrabold">{c.title}</h3>
              <p className="mt-1 font-semibold text-foreground">{c.hook}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <span key={t} className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                {c.meta.map((m) => (
                  <span key={m} className="text-sm text-muted-foreground">{m}</span>
                ))}
              </div>
              <Link
                to="/training/bioai-lab"
                className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${
                  c.featured ? "bg-cta text-cta-foreground hover:opacity-95" : "bg-teal-gradient text-white hover:opacity-95"
                }`}
              >
                Read More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FREE RESOURCES                                                      */
/* ------------------------------------------------------------------ */
function Resources() {
  const resources = [
    {
      badge: "FREE STRATEGY GUIDE",
      title: "The Grant Winning Formula",
      subtitle: "$18M+ in NIH, DBT & Wellcome Trust grants",
      desc: "The exact structure behind $18M+ in funded NIH, DBT & Wellcome Trust grants.",
      list: [
        "The 5-Part Specific Aims Formula",
        "Innovation Argument Framework",
        "Agency-Specific Rules: NIH · DBT · Wellcome",
        "The 4-Step Resubmission Formula",
        "7 parts · Instant PDF · Print-ready",
      ],
      tags: ["NIH R01/R21", "DBT / ICMR", "Wellcome Trust"],
      stats: [["$18M+", "Grants secured"], ["87%", "First-round success"], ["120+", "Proposals written"], ["42+", "Countries served"]],
      cta: "Download Free Guide →",
    },
    {
      badge: "FREE DOWNLOAD",
      title: "The PhD Rescue Checklist",
      subtitle: "12 steps before your next supervisor meeting",
      desc: "12 things every struggling PhD student should do before their next supervisor meeting.",
      list: [
        "Section A — Preparation (Items 1–4)",
        "Section B — Knowledge & Writing (Items 5–8)",
        "Section C — Action & Confidence (Items 9–12)",
        "Instant PDF · 4 pages · Print-ready",
      ],
      tags: ["4 pages", "12 items", "42+ countries"],
      stats: [["500+", "Users"], ["12", "Action items"], ["4", "Pages"], ["42+", "Countries"]],
      cta: "Download Free Checklist →",
    },
    {
      badge: "FREE DOWNLOAD",
      title: "The Bioinformatics Interview Bible",
      subtitle: "20 questions · 20 answers · zero blanks",
      desc: "20 real interview questions with model answers — written in simple English every biology student can understand.",
      list: [
        "Section A — NGS Basics (Items 1–5)",
        "Section B — Tools & Quality Control (Items 6–9)",
        "Section C — Alignment & Variants (Items 10–14)",
        "Section D — RNA-Seq, AI & Clinical (Items 15–20)",
        "Instant PDF · 15 pages · Print-ready",
      ],
      tags: ["15 pages", "20 questions", "Simple English"],
      stats: [["20", "Questions"], ["20", "Answers"], ["15", "Pages"], ["100%", "Free"]],
      cta: "Download Free Bible →",
    },
  ];

  return (
    <section className="bg-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Free Resources</p>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
            Expert Guides to <span className="text-gradient">Accelerate Your Success</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Download our proven frameworks used by researchers worldwide
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {resources.map((r) => (
            <div key={r.title} className="flex flex-col rounded-3xl border border-border bg-card p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-card">
              <span className="self-start rounded-full bg-cta px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-cta-foreground">
                {r.badge}
              </span>
              <p className="mt-4 text-sm text-muted-foreground">{r.desc}</p>
              <div className="mt-5 rounded-2xl border border-border bg-secondary p-5">
                <p className="font-extrabold">{r.title}</p>
                <p className="mt-1 text-xs text-muted-foreground">{r.subtitle}</p>
                <ul className="mt-4 space-y-1.5">
                  {r.list.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {r.tags.map((t) => (
                  <span key={t} className="rounded-full border border-border px-2.5 py-0.5 text-xs font-medium">{t}</span>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-4 gap-2">
                {r.stats.map(([num, label]) => (
                  <div key={label} className="text-center">
                    <div className="text-sm font-extrabold text-gradient">{num}</div>
                    <div className="text-[10px] text-muted-foreground leading-tight">{label}</div>
                  </div>
                ))}
              </div>
              <a
                href={PDF_URL}
                download
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-teal-gradient px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
              >
                {r.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SERVICES                                                            */
/* ------------------------------------------------------------------ */
function Services() {
  const services = [
    {
      title: "Dissertation & Thesis Writing",
      desc: "Chapter writing · Methodology · Literature review · Committee-ready delivery",
      tags: ["PhD", "Master's"],
    },
    {
      title: "Research Paper & Manuscript Writing",
      desc: "Full drafting · Journal targeting · Submission · Rebuttal writing",
      tags: ["PhD", "Professors", "R&D"],
    },
    {
      title: "Health Data Analysis",
      desc: "Genomic pipelines · EHR analysis · Biostatistics · R/Python · Pub-grade visuals",
      tags: ["PhD", "R&D", "Govt"],
    },
    {
      title: "Grant Proposal Writing",
      desc: "NIH R01/R21 · NSF · SBIR/STTR · Wellcome · DBT · ICMR · DOD",
      tags: ["Professors", "Startups", "Govt"],
    },
    {
      title: "Policy Document Writing",
      desc: "White papers · Biosafety policy · Regulatory submissions · Public health briefs",
      tags: ["Govt", "NGO", "Think Tanks"],
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">// Research & Expert Services</p>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
            Specialist Support for <span className="text-gradient">Serious Research</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            No generalists. No juniors. Every BioAI Lab expert holds a PhD in their exact domain — matched to your specific field, not assigned by availability.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
          {[
            "PhD candidates at IIT, Johns Hopkins & UCL",
            "PIs with funded R01 grants",
            "Government health ministries in Asia & Europe",
            "Biotech startups raising SBIR funding",
          ].map((item) => (
            <span key={item} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> {item}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="flex flex-col rounded-3xl border border-border bg-card p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-card">
              <h3 className="text-xl font-extrabold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={APPLY_URL}
            className="inline-flex items-center gap-2 rounded-full bg-cta px-8 py-4 text-base font-semibold text-cta-foreground shadow-float hover:opacity-95"
          >
            Apply Now <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  WHY US                                                              */
/* ------------------------------------------------------------------ */
function WhyUs() {
  const reasons = [
    {
      num: "01",
      title: "AI Company Behind Every Service",
      body: "BioAI Lab runs on Deepiotics infrastructure — meaning every service we deliver has AI-augmented research, analysis, and quality assurance built in. You're not getting human effort alone. You're getting human + AI at scale.",
    },
    {
      num: "02",
      title: "Domain Depth, Not Generalism",
      body: "Your genomics pipeline isn't handled by a data analyst who took a biology elective. It's built by a computational biologist who has published in this field. Every expert is PhD-level and domain-matched.",
    },
    {
      num: "03",
      title: "International Standard — Everywhere",
      body: "Our outputs meet NIH, Nature, EMA, and Wellcome Trust standards. Clients at Johns Hopkins, IIT Delhi, University of Edinburgh, and A*STAR Singapore set our bar — not local expectations.",
    },
    {
      num: "04",
      title: "Results You Can Point To",
      body: "Published papers, funded grants, thesis distinctions, employment rates — not hours billed. Our 87% grant success rate and $18M+ are client outcomes, not marketing numbers.",
    },
    {
      num: "05",
      title: "Legally Protected Confidentiality",
      body: "Every engagement begins with a strict NDA. Your research, data, and grant strategy are legally protected from day one. We do not reuse, resell, or reference your work — ever.",
    },
    {
      num: "06",
      title: "Curriculum That Moves With the Market",
      body: "Our courses are reviewed every quarter with industry partners. We teach what employers are actually hiring for right now — not what was relevant when someone wrote a textbook three years ago.",
    },
  ];

  return (
    <section id="why" className="bg-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">// Why BioAI Lab · Deepiotics</p>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
            What Separates Us from <span className="text-gradient">Every Other Option</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            There are tutors. Freelancers. Generic consultancies. Then there is BioAI Lab — the only AI-powered biotech platform built end-to-end, at international standard, under a dedicated AI company.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.num} className="relative rounded-3xl border border-border bg-card p-8 pt-10 shadow-sm">
              <div className="absolute -top-5 left-8 grid h-10 w-10 place-items-center rounded-2xl bg-teal-gradient text-sm font-extrabold text-white shadow-float">
                {r.num}
              </div>
              <h3 className="text-lg font-extrabold">{r.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  TESTIMONIALS                                                        */
/* ------------------------------------------------------------------ */
function Testimonials() {
  const cards = [
    {
      tag: "PHD STUDENT",
      icon: "🎓",
      quote: "Three chapters rewritten in six weeks. My supervisor called the methodology section \"exemplary.\" I submitted on time, passed my viva, and had a manuscript accepted at Nucleic Acids Research four months later. BioAI Lab didn't just save my PhD — they elevated it.",
      name: "Sonal K.",
      role: "PhD Genomics · University of Edinburgh",
    },
    {
      tag: "PRINCIPAL INVESTIGATOR",
      icon: "🔬",
      quote: "Our NIH R21 was funded on first submission — $240,000. The BioAI Lab grant team preempted every reviewer concern. The specific aims page alone was worth the entire fee. I've referred three colleagues since.",
      name: "Dr. Marcus R.",
      role: "Associate Professor · Johns Hopkins University",
    },
    {
      tag: "UG STUDENT → INDUSTRY",
      icon: "🚀",
      quote: "I was a final-year biotech student with zero coding skills. The No-Code Bio-AI course changed everything. Eight months later I had a job offer from a Singapore biotech firm — and a CV line every interviewer asks about.",
      name: "Priya L.",
      role: "Computational Biologist · Genentech, Singapore",
    },
  ];

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">// What Our Clients Say</p>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
            Real Outcomes. <span className="text-gradient">Real People.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <figure key={c.name} className="flex flex-col rounded-3xl border border-border bg-card p-7 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{c.icon}</span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary">{c.tag}</span>
              </div>
              <div className="mt-3 flex text-cta">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                "{c.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <div className="font-bold">{c.name}</div>
                <div className="text-xs text-muted-foreground">{c.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  GLOBAL                                                              */
/* ------------------------------------------------------------------ */
function Global() {
  const regions = [
    { flag: "🇮🇳", name: "India", desc: "Founding hub — IIT, AIIMS, CSIR, ICMR, DBT ecosystem. Largest South Asian client base." },
    { flag: "🇺🇸", name: "United States", desc: "NIH R01/R21, NSF, SBIR/STTR. Academic clients from Hopkins to UCSF." },
    { flag: "🇬🇧", name: "United Kingdom", desc: "Wellcome Trust & BBSRC proposals. Russell Group PhD clients. NHS health data projects." },
    { flag: "🇪🇺", name: "Europe", desc: "Horizon Europe / H2020 grants. BioRegion clients across Germany, Netherlands & Nordics." },
    { flag: "🌏", name: "Southeast Asia", desc: "A*STAR Singapore, ASEAN biotech growth. Clients in Singapore, Malaysia & South Korea." },
    { flag: "🇦🇺", name: "Australia", desc: "NHMRC grants, Go8 university clients, Australian biotech sector partnerships." },
  ];

  return (
    <section id="blog" className="bg-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">// International Reach</p>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
            Deepiotics Operates <span className="text-gradient">Where Biotech Leads</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Active clients across four continents. Grant expertise across NIH, Wellcome, DBT, SERB, H2020, and NSF. A genuinely international AI-biotech operation.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {regions.map((r) => (
            <div key={r.name} className="flex items-start gap-4 rounded-3xl border border-border bg-card p-6 shadow-sm">
              <span className="text-3xl">{r.flag}</span>
              <div>
                <h3 className="font-extrabold">{r.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FINAL CTA                                                           */
/* ------------------------------------------------------------------ */
function FinalCTA() {
  return (
    <section className="bg-hero py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">// Take the First Step</p>
        <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
          Whatever You Need Next in Biotech — <span className="text-gradient">We Are Ready.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
          Book a free 30-minute consultation for research services. Or join the next free BioAI Career Launchpad Workshop. Your next breakthrough starts at bioai.deepiotics.com
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={APPLY_URL}
            className="inline-flex items-center gap-2 rounded-full bg-cta px-8 py-4 text-base font-semibold text-cta-foreground shadow-float hover:opacity-95"
          >
            Apply Now <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">No commitment. No hard sell. Just expert guidance on your exact situation.</p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FOOTER                                                              */
/* ------------------------------------------------------------------ */
function Footer() {
  const trainingLinks = [
    ["No-Code Bio-AI", "#training"],
    ["Bio-AI Lab Course", "/training/bioai-lab"],
    ["AI for Lab Workflows", "#training"],
    ["Free Workshop", "#"],
    ["Enterprise Cohorts", "#"],
  ];
  const serviceLinks = [
    ["Dissertation Writing", "#services"],
    ["Manuscript Writing", "#services"],
    ["Health Data Analysis", "#services"],
    ["Grant Proposals", "#services"],
    ["Policy Documents", "#services"],
  ];
  const deepioticsLinks = [
    ["About Deepiotics", "#"],
    ["Our Experts", "#"],
    ["Global Reach", "#"],
    ["Client Outcomes", "#"],
    ["Contact", "#"],
  ];

  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-teal-gradient font-bold text-white">B</div>
              <div className="leading-tight">
                <div className="font-display text-lg font-extrabold tracking-tight">BioAI<span className="text-gradient">Lab</span></div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">A Deepiotics Initiative</div>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              The world's only AI-powered end-to-end biotech platform — training the next generation while delivering expert services to the current generation of researchers, professors, and policymakers.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["DEEPIOTICS AI", "NDA PROTECTED", "42+ COUNTRIES", "PHD-LEVEL EXPERTS"].map((b) => (
                <span key={b} className="rounded-full border border-border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{b}</span>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-4">
              <a href="https://linkedin.com" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary"><Linkedin className="h-5 w-5" /></a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-muted-foreground hover:text-primary"><Instagram className="h-5 w-5" /></a>
              <a href="https://facebook.com" aria-label="Facebook" className="text-muted-foreground hover:text-primary"><Facebook className="h-5 w-5" /></a>
              <a href="https://twitter.com" aria-label="Twitter" className="text-muted-foreground hover:text-primary"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Training */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-foreground">Training</p>
            <ul className="mt-4 space-y-3">
              {trainingLinks.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-sm text-muted-foreground hover:text-primary">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-foreground">Services</p>
            <ul className="mt-4 space-y-3">
              {serviceLinks.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-sm text-muted-foreground hover:text-primary">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Deepiotics */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-foreground">Deepiotics</p>
            <ul className="mt-4 space-y-3">
              {deepioticsLinks.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-sm text-muted-foreground hover:text-primary">{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">© 2025 BioAI Lab · A Deepiotics Initiative. All rights reserved.</p>
          <div className="flex gap-5 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms</a>
            <a href="#" className="hover:text-primary">Confidentiality & NDA</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

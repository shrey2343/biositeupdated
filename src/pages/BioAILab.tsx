import { useState } from "react";
import { ArrowRight, Calendar, ChevronDown, Video, PlayCircle, MessageCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImg from "@/assets/hero-bioai.jpg";

const APPLY_URL = "https://docs.google.com/forms/d/e/1FAIpQLSe6JxqYEUKk6Zq05XCzhhiaooeZ35dsp6v9M-vmmfySv1-qjA/viewform?usp=header";
const PDF_URL = "/Bioinformatics_Interview_Bible_Final.pdf";

export default function BioAILab() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <BioHero onCta={() => setModalOpen(true)} />
      <AboutSection />
      <GlanceSection />
      <AudienceSection />
      <CurriculumSection />
      <BonusModuleSection />
      <FiveBonusesSection />
      <DeliverySection />
      <FinalCTA onCta={() => setModalOpen(true)} />
      <Footer />
      {modalOpen && <InterviewBibleModal onClose={() => setModalOpen(false)} />}
    </div>
  );
}

function BioHero({ onCta }: { onCta: () => void }) {
  return (
    <section className="bg-hero">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 lg:grid-cols-2 lg:gap-8 lg:py-24">
        <div className="flex flex-col justify-center">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-primary" />
            By Deepiotics · Program Brochure 2025
          </p>
          <h1 className="mt-5 text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-[68px]">
            <span className="text-gradient">BioAI Lab</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            India's First AI-Powered, No-Code Bioinformatics Program.
            <br />
            <span className="font-semibold text-foreground">Bioinformatics ka naya tarika — bina coding ke.</span>
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["8-Week Structured Curriculum", "No-Code AI-Powered Tools", "Job-Ready In 90 Days"].map((s) => (
              <span key={s} className="rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">{s}</span>
            ))}
          </div>
          <div className="mt-8">
            <button onClick={onCta} className="inline-flex items-center gap-2 rounded-full bg-cta px-7 py-4 text-base font-semibold text-cta-foreground shadow-float hover:opacity-95">
              Get The Bioinformatics Interview Bible <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/15 via-accent-cyan/15 to-transparent blur-2xl" />
          <div className="relative w-full max-w-xl rounded-3xl bg-card p-3 shadow-card ring-1 ring-border">
            <img src={heroImg} alt="BioAI Lab — AI-powered bioinformatics training" width={1280} height={1024} className="h-auto w-full rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="bg-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">About the Program</p>
        <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">About the Program</h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          BioAI Lab is an 8-week, 100% online program for Biotechnology, Life Science, Microbiology, Genetics, and Biochemistry graduates who want to build a real bioinformatics career — without learning Python or any coding language.
        </p>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">
          Students use AI tools like Galaxy, ChatGPT, and Claude to run actual NGS pipelines, analyse real Indian genomic datasets from NCBI/SRA, build a professional GitHub portfolio, and prepare confidently for interviews at Biocon, Syngene, and leading research institutions.
        </p>
      </div>
    </section>
  );
}

function GlanceSection() {
  const cards = [
    { icon: "📚", title: "8-Week Structured Curriculum", desc: "AI tools, NGS pipelines, real Indian datasets, GitHub portfolio, and a complete interview preparation system — built week by week. Every module is designed around what bioinformatics employers actually look for." },
    { icon: "🤖", title: "No-Code, AI-Powered Tools", desc: "Run full NGS pipelines using Galaxy, ChatGPT, and Claude. No Python. No terminal. No coding required — ever. If you can use a browser, you can do bioinformatics." },
    { icon: "💼", title: "Job-Ready in 90 Days", desc: "A real GitHub portfolio, a LinkedIn profile optimised for biotech recruiters, and a complete interview preparation system — all built during the program, not after it." },
  ];
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Program at a Glance</p>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">What You <span className="text-gradient">Get</span></h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <div key={c.title} className="flex flex-col rounded-3xl border border-border bg-card p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-card">
              <div className="text-4xl">{c.icon}</div>
              <h3 className="mt-5 text-xl font-extrabold">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AudienceSection() {
  const items = [
    { num: "01", title: "Life Science & Biotech Graduates", desc: "You have the biology. You understand the science. You just need the bioinformatics skills that labs are hiring for — and a portfolio that proves you can do the work." },
    { num: "02", title: "MSc Students Entering the Job Market", desc: "Your degree got you the interview. BioAI Lab gets you the job — with a GitHub portfolio, real NGS experience, and answers to the exact questions Biocon and Syngene ask." },
    { num: "03", title: "Researchers Without Coding Background", desc: "You do not need Python. You do not need the terminal. Galaxy + AI tools handle the pipelines. You handle the biology. That is the job." },
    { num: "04", title: "Career Switchers", desc: "Lab technicians and research assistants ready to transition into higher-paying bioinformatics analyst roles — on their own timeline." },
  ];
  return (
    <section className="bg-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Target Audience</p>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">Who Is This Program <span className="text-gradient">For?</span></h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {items.map((item) => (
            <div key={item.num} className="relative rounded-3xl border border-border bg-card p-8 pt-10 shadow-sm">
              <div className="absolute -top-5 left-8 grid h-10 w-10 place-items-center rounded-2xl bg-teal-gradient text-sm font-extrabold text-white shadow-float">{item.num}</div>
              <h3 className="text-xl font-extrabold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const weeks = [
  { week: "Week 1", title: "Foundation: AI Tool Stack & Introduction", desc: "What bioinformatics is and why it matters in 2025 India · Your AI tool stack: Galaxy, ChatGPT, Claude · Browser-based workspace setup — no installation required · Understanding NGS technology and sequencing concepts · Your first FASTQ file: structure, format, and how to read it" },
  { week: "Week 2", title: "QC & Pre-processing", desc: "FastQC on Galaxy — AI interprets every quality metric · Phred scores, adapter contamination, and GC bias explained · Trimmomatic: AI configures, you review and understand output · Before/after QC — knowing when your data is clean to proceed · Hands-on: process a real Indian FASTQ file end-to-end" },
  { week: "Week 3", title: "Alignment: Reference Genome", desc: "What a reference genome is and why we align reads to it · BWA-MEM: AI walks through every parameter — you understand the logic · SAM and BAM formats: structure, sorting, and indexing · Mapping statistics: what 98% alignment rate means · Hands-on: align Indian genomics reads to hg38 — live" },
  { week: "Week 4", title: "Variant Calling with GATK", desc: "SNV vs InDel vs structural variant — explained simply · GATK HaplotypeCaller: AI configures, you follow the logic · VCF file output: every column explained in plain language · GVCF workflow for multi-sample joint calling — overview · Hands-on: call variants on your Indian dataset — output VCF" },
  { week: "Week 5", title: "Annotation & Interpretation", desc: "ClinVar and dbSNP: what they contain and how to query · ANNOVAR/SnpEff: AI runs the tool, you interpret the output · Pathogenic vs benign vs VUS — clinical significance explained · p-values, allele frequency, Hardy-Weinberg demystified · Hands-on: annotate VCF and identify top 3 relevant variants" },
  { week: "Week 6", title: "Data Visualisation — No R Required", desc: "Heatmaps: publication-quality using AI and drag-drop tools · Manhattan plots for GWAS — significance thresholds · PCA (Principal Component Analysis): what it shows · Volcano plots for differential expression analysis · Hands-on: generate 4 visualisation types — no R code" },
  { week: "Week 7", title: "GitHub Portfolio & LinkedIn", desc: "Why GitHub is the most powerful bioinformatics job tool · Profile setup: README — AI writes your first draft · Project 1: NGS pipeline repo with full documentation · Project 2: Indian genomics variant analysis repo · LinkedIn headline and skills — AI-optimised for recruiters" },
  { week: "Week 8", title: "Interview Preparation & Placement", desc: "90 Biocon/Syngene questions with model answers · Technical: NGS pipeline, variant interpretation, tools · AI mock interview: 30-minute simulation with feedback · Salary negotiation: word-for-word scripts tested · Cold outreach: LinkedIn and email (34% HR response rate)" },
];

function CurriculumSection() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Complete Week-by-Week</p>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">The 8-Week <span className="text-gradient">Curriculum</span></h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">Complete week-by-week — covering every stage of the NGS bioinformatics workflow using AI tools.</p>
        </div>
        <div className="mt-12 space-y-3">
          {weeks.map((w, i) => (
            <div key={i} className="overflow-hidden rounded-2xl border border-border bg-card">
              <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between px-6 py-4 text-left">
                <div className="flex items-center gap-4">
                  <span className="min-w-[56px] text-xs font-bold uppercase tracking-widest text-primary">{w.week}</span>
                  <span className="font-semibold">{w.title}</span>
                </div>
                <ChevronDown className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="border-t border-border px-6 py-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BonusModuleSection() {
  const items = [
    "90-question Biocon/Syngene bank with full model answers",
    "AI mock interview simulator with real-time feedback",
    "Salary negotiation scripts — tested, word-for-word",
    "200+ HR contacts + cold outreach templates (34% response rate)",
  ];
  return (
    <section className="bg-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Bonus Module</p>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">Interview Mastery <span className="text-gradient">System</span></h2>
          <p className="mx-auto mt-3 text-base text-muted-foreground">Included with the program.</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">✓</span>
              <p className="text-sm font-medium leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FiveBonusesSection() {
  const bonuses = [
    { num: "01", title: "60-Minute Daily Session System", desc: "Structured 60-minute daily sessions with pre-built weekly schedules for students juggling college, lab work, and internships. No marathon sessions. Built for real student life." },
    { num: "02", title: "Zero-Hardware Setup Kit", desc: "Run enterprise-level NGS analysis on any ₹15,000 laptop or smartphone via browser. Pre-configured Day 1 environments. No installation, no IT support required." },
    { num: "03", title: "The Comeback Protocol", desc: "A re-entry module for students who tried bioinformatics before and stopped. Diagnoses where you got stuck and provides a personalised 2-week sprint forward." },
    { num: "04", title: "Cold Recruiter Playbook", desc: "Word-for-word LinkedIn messages, email, and WhatsApp templates for HR managers at Biocon, Syngene, and 50+ biotech companies — with a verified 34% response rate." },
    { num: "05", title: "Real Indian Genomics Dataset Pack", desc: "Curated NCBI/SRA datasets from Indian population genomics studies covering diabetes, cardiac, and oncology contexts — the exact disease areas top Indian biotech firms ask about in interviews." },
  ];
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Additional Value</p>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">Five Bonuses <span className="text-gradient">Included</span></h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bonuses.map((b) => (
            <div key={b.num} className="relative flex flex-col rounded-3xl border border-border bg-card p-7 pt-10 shadow-sm">
              <div className="absolute -top-5 left-7 grid h-10 w-10 place-items-center rounded-2xl bg-teal-gradient text-sm font-extrabold text-white shadow-float">{b.num}</div>
              <h3 className="text-lg font-extrabold">{b.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DeliverySection() {
  const pillars = [
    { icon: <Video className="h-6 w-6 text-primary" />, title: "Weekly Live Sessions", desc: "Instructor-led cohort calls every week — real-time Q&A, live demos, and guided walkthroughs of each module." },
    { icon: <PlayCircle className="h-6 w-6 text-primary" />, title: "Self-Paced Recordings", desc: "Every session is recorded. Rewatch at your own pace as many times as needed. Lifetime access included." },
    { icon: <MessageCircle className="h-6 w-6 text-primary" />, title: "Community & Support", desc: "Private WhatsApp group with peers, mentors, and the Deepiotics team — for questions, help, and project feedback throughout the program." },
  ];
  return (
    <section className="bg-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Program Delivery</p>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">Live, Recorded & Supported — <span className="text-gradient">All Three</span></h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="flex flex-col rounded-3xl border border-border bg-card p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">{p.icon}</div>
              <h3 className="mt-5 text-xl font-extrabold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA({ onCta }: { onCta: () => void }) {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">// Take the First Step</p>
        <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">Ready to Start Your <span className="text-gradient">Bioinformatics Career?</span></h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">No coding. No prior bioinformatics experience required. Just 60 minutes a day and the drive to build something real.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button onClick={onCta} className="inline-flex items-center gap-2 rounded-full bg-cta px-8 py-4 text-base font-semibold text-cta-foreground shadow-float hover:opacity-95">
            Get The Bioinformatics Interview Bible <ArrowRight className="h-4 w-4" />
          </button>
          <a href={APPLY_URL} className="inline-flex items-center gap-2 rounded-full border border-primary px-8 py-4 text-base font-semibold text-primary hover:bg-primary/5">
            Apply Now <Calendar className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function InterviewBibleModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4" onClick={onClose}>
      <div className="w-full max-w-md rounded-3xl bg-card p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-2xl font-extrabold">Get the Free Interview Bible</h2>
        <p className="mt-2 text-sm text-muted-foreground">20 real bioinformatics interview questions with model answers — the exact questions asked at Biocon and Syngene.</p>
        <a href={PDF_URL} download className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cta px-6 py-3.5 text-sm font-semibold text-cta-foreground hover:opacity-95">
          Download Free PDF <ArrowRight className="h-4 w-4" />
        </a>
        <button onClick={onClose} className="mt-3 w-full rounded-full border border-border py-3 text-sm font-medium hover:bg-accent">No thanks</button>
      </div>
    </div>
  );
}

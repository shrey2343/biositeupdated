import { useState } from "react";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useFormModal } from "@/contexts/FormModalContext";
import heroImg from "@/assets/Gemini_Generated_Image_jqj56xjqj56xjqj5.png";

export default function BioCodeMastery() {
  const { openFormModal } = useFormModal();
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <BCHero openFormModal={openFormModal} />
      <BCCurriculum />
      <BCSkills />
      <BCTools />
      <BCHighlights />
      <BCCertificate />
      <BCFinalCTA openFormModal={openFormModal} />
      <Footer />
    </div>
  );
}

function BCHero({ openFormModal }: { openFormModal: (trigger: boolean) => void }) {
  return (
    <section className="bg-hero">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 lg:grid-cols-2 lg:gap-8 lg:py-24">
        <div className="flex flex-col justify-center">
          <div className="flex flex-wrap gap-2">
            {["Intensive", "8 Weeks", "Certificate Program"].map((b) => (
              <span key={b} className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                {b}
              </span>
            ))}
          </div>
          <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-[72px]">
            <span className="text-gradient">BioCode Mastery</span>
          </h1>
          <p className="mt-4 text-2xl font-semibold text-foreground">From Foundations to Clinical Applications</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {["Python", "R", "Linux", "NGS", "AI/ML"].map((t) => (
              <span key={t} className="rounded-full bg-secondary px-4 py-2 text-sm font-bold">{t}</span>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {[
              ["8 Weeks", "Duration"],
              ["5 Projects", "Hands-on"],
              ["Python + R", "Full Code Stack"],
              ["NGS + AI", "Applied Skills"],
              ["NCBI · PDB", "Real Databases"],
              ["Certificate", "On Completion"],
            ].map(([val, label]) => (
              <div key={label} className="rounded-2xl border border-border bg-card px-4 py-4 text-center shadow-sm">
                <div className="text-lg font-extrabold text-gradient">{val}</div>
                <div className="mt-1 text-[11px] font-medium text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <button onClick={() => openFormModal(false)} className="inline-flex items-center gap-2 rounded-full bg-cta px-8 py-4 text-base font-semibold text-cta-foreground shadow-float hover:opacity-95">
              Apply Online <ArrowRight className="h-4 w-4" />
            </button>
            <p className="mt-3 text-sm text-muted-foreground">Limited Seats. Real Skills. Real Impact.</p>
          </div>
        </div>
        
        <div className="relative flex items-center justify-center">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/15 via-accent-cyan/15 to-transparent blur-2xl" />
          <div className="relative w-full max-w-xl rounded-3xl bg-card p-3 shadow-card ring-1 ring-border">
            <img src={heroImg} alt="BioCode Mastery — Computational biology and bioinformatics training" width={1280} height={1024} className="h-auto w-full rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

const bcWeeks = [
  { week: "Week 1", title: "Linux & Bioinformatics Foundations", desc: "Command line · File handling · NCBI & Ensembl databases · Bioinformatics intro", project: "Bioinformatics Environment Setup" },
  { week: "Week 2", title: "Python for Bioinformatics", desc: "FASTA/FASTQ handling · Biopython · Sequence analysis · GC content", project: "DNA Sequence Analysis System" },
  { week: "Week 3", title: "R Programming & Statistics", desc: "Statistical analysis · Data visualization with ggplot2 · Gene Expression Profiling", project: "Gene Expression Analysis" },
  { week: "Week 4", title: "NGS Fundamentals & Quality Control", desc: "NGS workflow · FASTQ · BAM · VCF formats · Quality metrics", project: "NGS Quality Assessment" },
  { week: "Week 5", title: "RNA-Seq Analysis", desc: "HiSAT2 · StringTie · DESeq2 · Differential expression analysis", project: "Differential Gene Expression Analysis" },
  { week: "Week 6–7", title: "AI & Machine Learning in Biology", desc: "ML basics · Disease prediction · Python ML tools · Model evaluation", project: "Disease Prediction Model" },
  { week: "Week 8", title: "Clinical Integration & Final Task", desc: "Personalized medicine · EGFR mutation case study · Variant interpretation", project: "Cancer Data Interpretation" },
];

function BCCurriculum() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">8-Week Curriculum</p>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">Complete <span className="text-gradient">Learning Path</span></h2>
        </div>
        <div className="mt-12 space-y-3">
          {bcWeeks.map((w, i) => (
            <div key={i} className="overflow-hidden rounded-2xl border border-border bg-card">
              <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between px-6 py-4 text-left">
                <div className="flex items-center gap-4">
                  <span className="min-w-[60px] text-xs font-bold uppercase tracking-widest text-primary">{w.week}</span>
                  <span className="font-semibold">{w.title}</span>
                </div>
                <ChevronDown className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="border-t border-border px-6 py-5">
                  <p className="text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
                    🗂️ Project: {w.project}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BCSkills() {
  const skills = [
    { icon: "💻", title: "Work in Linux confidently", desc: "Navigate command line and handle bioinformatics file formats" },
    { icon: "</>", title: "Write Python & R code", desc: "Analyse biological data, plot results and use statistical methods" },
    { icon: "🧬", title: "Run NGS pipelines end-to-end", desc: "From raw FASTQ files to variant calls and RNA-Seq results" },
    { icon: "⚖️", title: "Apply AI/ML in biology", desc: "Build disease prediction models and interpret clinical genomic data" },
    { icon: "📁", title: "Build a project portfolio", desc: "5 hands-on projects ready for research labs and industry recruiters" },
    { icon: "🗄️", title: "Query real databases", desc: "NCBI, Ensembl, UniProt & PDB integrated across all 8 weeks" },
  ];
  return (
    <section className="bg-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">You Will Be Able To</p>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">Skills You'll <span className="text-gradient">Master</span></h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <div key={s.title} className="flex flex-col rounded-3xl border border-border bg-card p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-card">
              <div className="text-3xl">{s.icon}</div>
              <h3 className="mt-4 text-lg font-extrabold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BCTools() {
  const tools = ["Linux / Bash", "Python", "Biopython", "R / RStudio", "FastQC", "HiSAT2", "StringTie", "DESeq2", "scikit-learn", "pandas / numpy", "NCBI", "Ensembl", "UniProt", "PDB"];
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Tools & Technologies</p>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">Industry-Standard <span className="text-gradient">Tech Stack</span></h2>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {tools.map((t) => (
            <span key={t} className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold shadow-sm transition hover:border-primary hover:text-primary">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function BCHighlights() {
  const items = [
    { title: "Hands-on Projects", desc: "5 real-world projects building your portfolio" },
    { title: "Real Biological Datasets", desc: "Work with actual genomic data from NCBI and public databases" },
    { title: "Industry & Research Ready", desc: "Skills aligned with biotech industry and academic research needs" },
    { title: "Mentorship & Support", desc: "Expert guidance throughout your learning journey" },
  ];
  return (
    <section className="bg-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Program Highlights</p>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">Why Choose <span className="text-gradient">BioCode Mastery</span></h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {items.map((item) => (
            <div key={item.title} className="flex items-start gap-4 rounded-3xl border border-border bg-card p-7 shadow-sm">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">✓</span>
              <div>
                <h3 className="font-extrabold">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BCCertificate() {
  const items = ["Issued by BioAI", "Powered by Deepiotics", "5 Project Portfolio", "Shareable on LinkedIn"];
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Certificate</p>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
            Certified Bioinformatics Analyst — <span className="text-gradient">BioCode Mastery</span>
          </h2>
        </div>
        <div className="mt-10 overflow-hidden rounded-3xl border border-primary/30 bg-card shadow-card ring-2 ring-primary/20">
          <div className="bg-teal-gradient px-8 py-6 text-center">
            <div className="text-lg font-extrabold uppercase tracking-widest text-white/80">Certificate of Completion</div>
            <div className="mt-1 text-3xl font-extrabold text-white">BioCode Mastery</div>
            <div className="mt-1 text-sm text-white/80">Certified Bioinformatics Analyst</div>
          </div>
          <div className="grid grid-cols-2 gap-4 p-8 sm:grid-cols-4">
            {items.map((item) => (
              <div key={item} className="flex flex-col items-center gap-2 text-center">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">✓</span>
                <span className="text-sm font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BCFinalCTA({ openFormModal }: { openFormModal: (trigger: boolean) => void }) {
  return (
    <section className="bg-hero py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">// Learn. Build. Certify.</p>
        <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
          Future-ready skills for careers in <span className="text-gradient">bioinformatics, data science, and biotechnology.</span>
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button onClick={() => openFormModal(false)} className="inline-flex items-center gap-2 rounded-full bg-cta px-8 py-4 text-base font-semibold text-cta-foreground shadow-float hover:opacity-95">
            Apply Online <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">bioai.deepiotics.com/biocodemastery · +91 88272 72142</p>
      </div>
    </section>
  );
}



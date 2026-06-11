import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import {
  CheckCircle2, ArrowRight, Star, Zap, Globe2, Rocket, X, Award,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PopupModal from "@/components/PopupModal";
import { useFormModal } from "@/contexts/FormModalContext";
import heroImg from "@/assets/hero-lab.jpg";
import dnaGlowImg from "@/assets/dna-glow.jpg";
import pipetteImg from "@/assets/pipette.jpg";
import teamResearchImg from "@/assets/team-research.jpg";

const APPLY_URL = "https://docs.google.com/forms/d/e/1FAIpQLSe6JxqYEUKk6Zq05XCzhhiaooeZ35dsp6v9M-vmmfySv1-qjA/viewform?usp=header";
const PDF_URL = "/Bioinformatics_Interview_Bible_Final.pdf";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PromoBar />
      <Navigation />
      <PopupModal />
      <Hero />
      <WhoAreYou />
      <AudienceSplit />
      <BentoShowcase />
      <Training />
      <Resources />
      <Services />
      <WhyUs />
      <ImageCarousel />
      <Testimonials />
      <Global />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function PromoBar() {
  const [open, setOpen] = useState(true);
  const { openFormModal } = useFormModal();
  
  if (!open) return null;
  
  const handleDownload = () => {
    openFormModal(true); // true = trigger PDF download after form submission
  };
  
  return (
    <div className="relative bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-2.5 text-center text-sm sm:text-[15px]">
        <span className="font-bold tracking-wide">Free Download</span>
        <span className="mx-2 opacity-80">•</span>
        <span className="opacity-95">The Bioinformatics Interview Bible — 20 real interview questions with model answers</span>
        <button 
          onClick={handleDownload}
          className="ml-3 inline-flex items-center gap-1 rounded-full bg-cta px-3 py-1 text-xs font-semibold text-cta-foreground hover:opacity-90"
        >
          Download Free <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
      <button onClick={() => setOpen(false)} aria-label="Dismiss" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 hover:bg-white/10">
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}

function Hero() {
  const ref = useRef(null);
  const { openFormModal } = useFormModal();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="bg-hero relative overflow-hidden">
      {/* Animated background shapes */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Desktop with parallax, Mobile without */}
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 lg:grid-cols-2 lg:gap-8 lg:py-24 relative z-10">
        <div className="flex flex-col justify-center text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center lg:justify-start gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary"
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block h-2 w-2 rounded-full bg-primary"
            />
            A Deepiotics Initiative · AI × Biotech Intelligence Platform
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[68px]"
          >
            One Platform.{" "}
            <motion.span
              className="text-gradient inline-block"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Every Biotech Breakthrough.
            </motion.span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 mx-auto lg:mx-0 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            From dissertation to discovery — BioMind Research Institute is the world's first end-to-end academic and research services ecosystem built exclusively for the global biotech community.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            <motion.button
              onClick={() => openFormModal(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-full bg-teal-gradient px-7 py-4 text-base font-semibold text-white shadow-float hover:opacity-95 w-full sm:w-auto justify-center"
            >
              Book My Free Consultation
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.div>
            </motion.button>
            <span className="text-sm text-muted-foreground text-center">No pressure. Just clarity on your path.</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start"
          >
            {[
              { icon: Zap, label: "Zero coding skill needed" },
              { icon: Globe2, label: "Works in every domain" },
              { icon: Rocket, label: "Get published faster" }
            ].map(({ icon: Icon, label }, i) => (
              <motion.span
                key={label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 2 }}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground cursor-pointer"
              >
                <Icon className="h-4 w-4" /> {label}
              </motion.span>
            ))}
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative flex items-center justify-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/15 via-accent-cyan/15 to-transparent blur-2xl"
          />
          <motion.div
            whileHover={{ scale: 1.02, rotate: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative w-full max-w-xl rounded-3xl bg-card p-3 shadow-card ring-1 ring-border"
          >
            <img src={heroImg} alt="BioAI Lab researcher" width={1280} height={1024} className="h-auto w-full rounded-2xl" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            whileHover={{ scale: 1.05 }}
            className="hidden lg:flex absolute -right-2 top-6 items-center gap-3 rounded-2xl bg-card p-3 pr-5 shadow-float ring-1 ring-border sm:right-0 lg:right-[-1rem]"
          >
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="grid h-10 w-10 place-items-center rounded-full bg-accent-cyan/15 text-accent-cyan"
            >
              <CheckCircle2 className="h-6 w-6" />
            </motion.span>
            <div className="leading-tight">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="text-lg font-extrabold"
              >
                87% Success
              </motion.div>
              <div className="text-xs text-muted-foreground">First-round grants</div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            whileHover={{ scale: 1.05 }}
            className="hidden lg:flex absolute -left-2 bottom-10 items-center gap-3 rounded-2xl bg-card p-3 pr-5 shadow-float ring-1 ring-border sm:left-0 lg:left-[-1rem]"
          >
            <motion.span
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="grid h-10 w-10 place-items-center rounded-full bg-primary/15 text-primary"
            >
              <Award className="h-6 w-6" />
            </motion.span>
            <div className="leading-tight">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.6 }}
                className="text-lg font-extrabold"
              >
                $18M+
              </motion.div>
              <div className="text-xs text-muted-foreground">Grants secured</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function BentoShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-8 sm:py-10 relative overflow-hidden">
      {/* Animated background orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
      />
      
      {/* White mist overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 rounded-full bg-cta/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cta cursor-pointer"
          >
            AI × Research · In Action
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl"
          >
            AI-powered pipelines. <span className="text-gradient">Human-led science.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            From lab to computation — experience the future of biological research
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 relative">
          {/* Subtle white mist within grid area */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px] rounded-3xl pointer-events-none" />
          
          {/* Large featured image - DNA Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            whileHover={{ scale: 1.02, rotateY: 2 }}
            className="group relative overflow-hidden rounded-3xl md:col-span-1 md:row-span-2 lg:col-span-2 lg:row-span-2"
          >
            <motion.img 
              src={dnaGlowImg} 
              alt="AI-powered genomic analysis" 
              className="h-full w-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            {/* White mist effect on image */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute bottom-0 left-0 right-0 p-8"
            >
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="inline-block rounded-full bg-cta px-3 py-1 text-xs font-bold uppercase tracking-wider text-cta-foreground mb-3"
              >
                AI · Research in Motion
              </motion.span>
              <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                AI-powered pipelines. Human-led science.
              </h3>
              <p className="mt-2 text-sm text-white/90 max-w-lg">
                From big data to biological discovery — machine learning tools that work seamlessly alongside manual research flows.
              </p>
            </motion.div>
          </motion.div>

          {/* PhD mentored mentor pools - Team Research */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 15 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05, rotateY: -5 }}
            className="group relative overflow-hidden rounded-3xl md:col-span-1 md:row-span-1"
          >
            <motion.img 
              src={teamResearchImg} 
              alt="PhD-mentored research teams" 
              className="h-full w-full object-cover"
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.6 }}
            />
            {/* White mist effect on image */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute bottom-0 left-0 right-0 p-6"
            >
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="inline-block rounded-full bg-primary/20 backdrop-blur-sm px-3 py-1 text-xs font-bold text-white mb-2"
              >
                WHY LAB IMPACTS
              </motion.span>
              <h3 className="text-lg font-extrabold text-white">
                PhD-mentored mentor pools
              </h3>
              <p className="mt-1 text-xs text-white/80">
                Every expert holds a PhD in their specialization
              </p>
            </motion.div>
          </motion.div>

          {/* Bench to Bioinformatics - Pipette */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 15 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05, rotateY: -5 }}
            className="group relative overflow-hidden rounded-3xl md:col-span-1 md:row-span-1"
          >
            <motion.img 
              src={pipetteImg} 
              alt="Laboratory to computational workflow" 
              className="h-full w-full object-cover"
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.6 }}
            />
            {/* White mist effect on image */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute bottom-0 left-0 right-0 p-6"
            >
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="inline-block rounded-full bg-accent-cyan/20 backdrop-blur-sm px-3 py-1 text-xs font-bold text-white mb-2"
              >
                WET LAB INSIGHTS
              </motion.span>
              <h3 className="text-lg font-extrabold text-white">
                Bench to bioinformatics
              </h3>
              <p className="mt-1 text-xs text-white/80">
                Bridging laboratory practice with computational analysis
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function WhoAreYou() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cards = [
    { tag: "For Students & Early Career", title: "Train for a Biotech AI Career", desc: "UG, PG & early researchers. Courses, AI skills, and job-ready training built for the next generation.", features: ["🎓 Structured Courses", "💼 Career Support", "🚀 Hands-on Projects"], link: "Explore Courses", href: "#training" },
    { tag: "For Researchers & Orgs", title: "Expert Research Support", desc: "PhD students, professors, R&D firms, government bodies, and think tanks. Domain-matched specialists only.", features: ["📊 Data Analysis", "📝 Paper Writing", "💰 Grant Support"], link: "View Services", href: "#services" },
  ];
  const stats: [string, string][] = [["500+", "Students Trained"], ["$18M+", "Grants Secured"], ["350+", "Papers Published"], ["42+", "Countries Served"]];
  
  return (
    <section ref={ref} className="py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary"
          >
            Choose Your Path
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-3xl sm:text-4xl font-extrabold leading-tight lg:text-5xl"
          >
            Who are you?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-3 text-base sm:text-lg text-muted-foreground px-4"
          >
            Select your journey and unlock tailored resources designed for your goals
          </motion.p>
        </motion.div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {cards.map((c, i) => (
            <motion.div
              key={c.tag}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + i * 0.2 }}
              whileHover={{ y: -10, rotateX: 5, scale: 1.02 }}
              className="flex flex-col rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm text-center md:text-left"
            >
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="self-center md:self-start rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
              >
                {c.tag}
              </motion.span>
              <h3 className="mt-5 text-xl sm:text-2xl font-extrabold">{c.title}</h3>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground">{c.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2 justify-center md:justify-start">
                {c.features.map((f, idx) => (
                  <motion.span
                    key={f}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 1 + idx * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="rounded-full bg-secondary px-3 py-1 text-xs sm:text-sm font-medium"
                  >
                    {f}
                  </motion.span>
                ))}
              </div>
              <motion.a
                href={c.href}
                whileHover={{ x: 5 }}
                className="mt-7 inline-flex items-center gap-2 self-center md:self-start font-semibold text-primary hover:underline"
              >
                {c.link}
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.div>
              </motion.a>
            </motion.div>
          ))}
        </div>
        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {stats.map(([num, label], i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 + i * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="rounded-2xl border border-border bg-card p-4 sm:p-6 text-center shadow-sm cursor-pointer"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.4 + i * 0.1, type: "spring" }}
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gradient"
              >
                {num}
              </motion.div>
              <div className="mt-2 text-xs sm:text-sm font-medium text-muted-foreground">{label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AudienceSplit() {
  const panels = [
    { num: "01", tag: "For Students", title: "Train for the Roles That Didn't Exist Five Years Ago", body: "Biotech employers now demand computational skills alongside lab credentials. Our AI courses are built for exactly this gap — practical, internationally recognised, and laser-focused on getting you hired or into top PhD programs.", list: ["No-Code Bio-AI — zero coding anxiety", "Bio-AI Lab — Python & R on real datasets", "AI Tools for Research Workflows", "Career support and placement pathways"], cta: "Explore All Courses →", href: "#training" },
    { num: "02", tag: "For Researchers & Orgs", title: "Specialist Support Your Research Actually Deserves", body: "You don't need a generalist — you need a partner with domain depth equal to yours. Every BioAI Lab expert holds a PhD in their specialisation. An 87% grant success rate and $18M+ in secured funding speaks louder than promises.", list: ["Dissertation & manuscript writing — committee-ready", "Genomic & EHR data pipelines — publication-grade", "NIH, NSF, Wellcome Trust, DBT grant proposals", "White papers, biosafety policy & regulatory submissions"], cta: "Explore Research Services →", href: "#services" },
  ];
  return (
    <section className="bg-secondary py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">// Two Paths. One Destination.</p>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">Built for Both of You</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">Whether you're a student building a career or a researcher needing specialist firepower — BioAI Lab has a world-class solution, built specifically for your situation.</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {panels.map((p) => (
            <div key={p.num} className="relative rounded-3xl border border-border bg-card p-8 pt-10 shadow-sm">
              <div className="absolute -top-5 left-8 grid h-10 w-10 place-items-center rounded-2xl bg-teal-gradient text-sm font-extrabold text-white shadow-float">{p.num}</div>
              <span className="self-start rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{p.tag}</span>
              <h3 className="mt-4 text-xl font-extrabold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              <ul className="mt-5 space-y-2">{p.list.map((item) => <li key={item} className="flex items-start gap-2.5 text-sm"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span>{item}</span></li>)}</ul>
              <a href={p.href} className="mt-6 inline-flex items-center gap-2 font-semibold text-primary hover:underline">{p.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Training() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const courses = [
    { level: "Foundation · Self-Paced · No Coding Required", title: "No-Code Bio-AI", hook: "Biology-first. Zero coding anxiety. Maximum impact.", desc: "Master AI-powered tools for drug discovery, protein analysis, literature mining, and genomics — entirely through visual no-code platforms. Built for UG and PG students with zero programming background who want AI on their CV before graduation.", tags: ["AI Drug Discovery", "Protein Folding Tools", "Literature AI Mining", "No Coding Needed", "Visual Platforms"], meta: ["📅 8 Weeks", "🎯 Self-Paced", "🏆 Certificate"], featured: false, to: "/training/biocode-mastery" },
    { level: "Intermediate · Live + Lab · Cohort", title: "Bio-AI Lab Course", hook: "Code meets biology. Real data, real results.", desc: "Python and R applied to actual genomic datasets, EHR data, and imaging pipelines. Weekly live sessions, virtual simulations, and a portfolio project that impresses every interviewer.", tags: ["Python / R", "ML in Genomics", "Virtual Lab"], meta: ["📅 12 Weeks", "🎬 Live"], featured: true, to: "/training/bioai-lab" },
  ];
  
  return (
    <section id="training" ref={ref} className="py-8 sm:py-10 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -left-20 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl"
      />
      
      <div className="mx-auto max-w-6xl px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            whileHover={{ scale: 1.05 }}
            className="text-xs font-bold uppercase tracking-[0.25em] text-primary"
          >
            // Training Academy
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl"
          >
            The AI Skills Biotech Employers <span className="text-gradient">Are Hiring For</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground"
          >
            Our courses don't teach theory. They build the exact tools, pipelines, and portfolios that open doors at leading research labs and biotech companies worldwide.
          </motion.p>
        </motion.div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {courses.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + i * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative flex flex-col rounded-3xl border bg-card p-7 shadow-sm ${c.featured ? "border-primary ring-2 ring-primary" : "border-border"}`}
            >
              {c.featured && (
                <motion.span
                  initial={{ opacity: 0, y: -20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cta px-4 py-1 text-xs font-bold uppercase tracking-wider text-cta-foreground shadow-float"
                >
                  ⭐ Most Popular
                </motion.span>
              )}
              <p className="text-xs font-bold uppercase tracking-wider text-primary">{c.level}</p>
              <h3 className="mt-2 text-2xl font-extrabold">{c.title}</h3>
              <p className="mt-1 font-semibold text-foreground">{c.hook}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {c.tags.map((t, idx) => (
                  <motion.span
                    key={t}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 1 + idx * 0.05 }}
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-3">{c.meta.map((m) => <span key={m} className="text-sm text-muted-foreground">{m}</span>)}</div>
              <Link to={c.to}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${c.featured ? "bg-cta text-cta-foreground hover:opacity-95" : "bg-teal-gradient text-white hover:opacity-95"}`}
                >
                  Read More
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Resources() {
  const { openFormModal } = useFormModal();
  const resources = [
    { badge: "FREE STRATEGY GUIDE", title: "The Grant Winning Formula", subtitle: "$18M+ in NIH, DBT & Wellcome Trust grants", desc: "The exact structure behind $18M+ in funded NIH, DBT & Wellcome Trust grants.", list: ["The 5-Part Specific Aims Formula", "Innovation Argument Framework", "Agency-Specific Rules: NIH · DBT · Wellcome", "The 4-Step Resubmission Formula", "7 parts · Instant PDF · Print-ready"], tags: ["NIH R01/R21", "DBT / ICMR", "Wellcome Trust"], stats: [["$18M+", "Grants secured"], ["87%", "First-round success"], ["120+", "Proposals written"], ["42+", "Countries served"]] as [string,string][], cta: "Download Free Guide →" },
    { badge: "FREE DOWNLOAD", title: "The PhD Rescue Checklist", subtitle: "12 steps before your next supervisor meeting", desc: "12 things every struggling PhD student should do before their next supervisor meeting.", list: ["Section A — Preparation (Items 1–4)", "Section B — Knowledge & Writing (Items 5–8)", "Section C — Action & Confidence (Items 9–12)", "Instant PDF · 4 pages · Print-ready"], tags: ["4 pages", "12 items", "42+ countries"], stats: [["500+", "Users"], ["12", "Action items"], ["4", "Pages"], ["42+", "Countries"]] as [string,string][], cta: "Download Free Checklist →" },
    { badge: "FREE DOWNLOAD", title: "The Bioinformatics Interview Bible", subtitle: "20 questions · 20 answers · zero blanks", desc: "20 real interview questions with model answers — written in simple English every biology student can understand.", list: ["Section A — NGS Basics (Items 1–5)", "Section B — Tools & Quality Control (Items 6–9)", "Section C — Alignment & Variants (Items 10–14)", "Section D — RNA-Seq, AI & Clinical (Items 15–20)", "Instant PDF · 15 pages · Print-ready"], tags: ["15 pages", "20 questions", "Simple English"], stats: [["20", "Questions"], ["20", "Answers"], ["15", "Pages"], ["100%", "Free"]] as [string,string][], cta: "Download Free Bible →" },
  ];
  return (
    <section className="bg-secondary py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Free Resources</p>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">Expert Guides to <span className="text-gradient">Accelerate Your Success</span></h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">Download our proven frameworks used by researchers worldwide</p>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {resources.map((r) => (
            <div key={r.title} className="flex flex-col rounded-3xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-card h-full">
              <span className="self-start rounded-full bg-cta px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-cta-foreground">{r.badge}</span>
              <p className="mt-4 text-sm text-muted-foreground min-h-[40px]">{r.desc}</p>
              <div className="mt-5 flex-1 rounded-2xl border border-border bg-secondary p-5">
                <p className="font-extrabold min-h-[48px] flex items-center">{r.title}</p>
                <p className="mt-1 text-xs text-muted-foreground min-h-[32px]">{r.subtitle}</p>
                <ul className="mt-4 space-y-2">{r.list.map((item) => <li key={item} className="flex items-start gap-2 text-xs"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" /><span>{item}</span></li>)}</ul>
              </div>
              <div className="mt-5 flex flex-wrap gap-2 min-h-[56px] items-start">{r.tags.map((t) => <span key={t} className="rounded-full border border-border px-2.5 py-1 text-xs font-medium">{t}</span>)}</div>
              <div className="mt-5 grid grid-cols-4 gap-3 pb-1">{r.stats.map(([num, label]) => <div key={label} className="text-center"><div className="text-sm font-extrabold text-gradient">{num}</div><div className="text-[10px] text-muted-foreground leading-tight mt-1">{label}</div></div>)}</div>
              <button onClick={() => openFormModal(true)} className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-teal-gradient px-5 py-3 text-sm font-semibold text-white hover:opacity-95">{r.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const { openFormModal } = useFormModal();
  const services = [
    { title: "Dissertation & Thesis Writing", desc: "Chapter writing · Methodology · Literature review · Committee-ready delivery", tags: ["PhD", "Master's"] },
    { title: "Research Paper & Manuscript Writing", desc: "Full drafting · Journal targeting · Submission · Rebuttal writing", tags: ["PhD", "Professors", "R&D"] },
    { title: "Health Data Analysis", desc: "Genomic pipelines · EHR analysis · Biostatistics · R/Python · Pub-grade visuals", tags: ["PhD", "R&D", "Govt"] },
    { title: "Grant Proposal Writing", desc: "NIH R01/R21 · NSF · SBIR/STTR · Wellcome · DBT · ICMR · DOD", tags: ["Professors", "Startups", "Govt"] },
    { title: "Policy Document Writing", desc: "White papers · Biosafety policy · Regulatory submissions · Public health briefs", tags: ["Govt", "NGO", "Think Tanks"] },
  ];
  return (
    <section id="services" className="py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">// Research & Expert Services</p>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">Specialist Support for <span className="text-gradient">Serious Research</span></h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">No generalists. No juniors. Every BioAI Lab expert holds a PhD in their exact domain — matched to your specific field, not assigned by availability.</p>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
          {["PhD candidates at IIT, Johns Hopkins & UCL", "PIs with funded R01 grants", "Government health ministries in Asia & Europe", "Biotech startups raising SBIR funding"].map((item) => (
            <span key={item} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-primary" /> {item}</span>
          ))}
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="flex flex-col rounded-3xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-card h-full">
              <h3 className="text-xl font-extrabold min-h-[56px] flex items-start">{s.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground flex-1 min-h-[60px]">{s.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2 min-h-[36px] content-start">{s.tags.map((t) => <span key={t} className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{t}</span>)}</div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <button onClick={() => openFormModal(false)} className="inline-flex items-center gap-2 rounded-full bg-cta px-8 py-4 text-base font-semibold text-cta-foreground shadow-float hover:opacity-95">Apply Now <ArrowRight className="h-4 w-4" /></button>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const reasons = [
    { num: "01", title: "AI Company Behind Every Service", body: "BioAI Lab runs on Deepiotics infrastructure — meaning every service we deliver has AI-augmented research, analysis, and quality assurance built in. You're not getting human effort alone. You're getting human + AI at scale." },
    { num: "02", title: "Domain Depth, Not Generalism", body: "Your genomics pipeline isn't handled by a data analyst who took a biology elective. It's built by a computational biologist who has published in this field. Every expert is PhD-level and domain-matched." },
    { num: "03", title: "International Standard — Everywhere", body: "Our outputs meet NIH, Nature, EMA, and Wellcome Trust standards. Clients at Johns Hopkins, IIT Delhi, University of Edinburgh, and A*STAR Singapore set our bar — not local expectations." },
    { num: "04", title: "Results You Can Point To", body: "Published papers, funded grants, thesis distinctions, employment rates — not hours billed. Our 87% grant success rate and $18M+ are client outcomes, not marketing numbers." },
    { num: "05", title: "Legally Protected Confidentiality", body: "Every engagement begins with a strict NDA. Your research, data, and grant strategy are legally protected from day one. We do not reuse, resell, or reference your work — ever." },
    { num: "06", title: "Curriculum That Moves With the Market", body: "Our courses are reviewed every quarter with industry partners. We teach what employers are actually hiring for right now — not what was relevant when someone wrote a textbook three years ago." },
  ];
  return (
    <section id="why" className="bg-secondary py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">// Why BioAI Lab · Deepiotics</p>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">What Separates Us from <span className="text-gradient">Every Other Option</span></h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">There are tutors. Freelancers. Generic consultancies. Then there is BioAI Lab — the only AI-powered biotech platform built end-to-end, at international standard, under a dedicated AI company.</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.num} className="relative rounded-3xl border border-border bg-card p-8 pt-10 shadow-sm">
              <div className="absolute -top-5 left-8 grid h-10 w-10 place-items-center rounded-2xl bg-teal-gradient text-sm font-extrabold text-white shadow-float">{r.num}</div>
              <h3 className="text-lg font-extrabold">{r.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImageCarousel() {
  const column1Images = [
    "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=300&fit=crop", // DNA sequencing
    "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&h=300&fit=crop", // Lab microscope
    "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&h=300&fit=crop", // Laboratory work
    "https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=400&h=300&fit=crop", // Petri dish research
  ];

  const column2Images = [
    "https://cdn.pixabay.com/photo/2024/07/14/10/28/ai-generated-8894086_1280.png", // DNA helix
    "https://cdn.pixabay.com/photo/2024/05/23/12/04/ai-generated-8783069_1280.jpg", // Laboratory equipment
    "https://cdn.pixabay.com/photo/2024/02/13/17/30/dna-8571480_1280.jpg", // Research scientist
    "https://cdn.pixabay.com/photo/2025/02/25/04/52/ai-generated-9429535_1280.jpg", // Cell culture
  ];

  const column3Images = [
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop", // Pipette lab work
    "https://images.unsplash.com/photo-1583911860205-72f8ac8ddcbe?w=400&h=300&fit=crop", // Blood samples
    "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&h=300&fit=crop", // Microscope slides
    "https://images.unsplash.com/photo-1564325724739-bae0bd08762c?w=400&h=300&fit=crop", // Chemical flasks
  ];

  const column4Images = [
    "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&h=300&fit=crop", // Medical research
    "https://images.unsplash.com/photo-1581093804475-577d72e38aa0?w=400&h=300&fit=crop", // Lab testing
    "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?w=400&h=300&fit=crop", // Genomic data
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop", // Research documentation
  ];

  const column5Images = [
    "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=400&h=300&fit=crop", // Lab tubes
    "https://cdn.pixabay.com/photo/2024/02/13/17/30/dna-8571480_1280.jpg", // Biotech equipment
    "https://images.unsplash.com/photo-1581093577421-f561a654a353?w=400&h=300&fit=crop", // Lab analysis
    "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=300&fit=crop", // Scientific research
  ];

  // Triple the images for seamless looping
  const tripleImages = (imgs: string[]) => [...imgs, ...imgs, ...imgs];

  return (
    <section className="py-8 sm:py-10 overflow-hidden bg-secondary">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center mb-12"
        >
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.25em] text-primary"
          >
            // Our Work in Action
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl"
          >
            Real Research. <span className="text-gradient">Real Impact.</span>
          </motion.h2>
        </motion.div>

        <div className="flex gap-3 justify-center overflow-hidden">
          {/* Column 1 - Scroll Down */}
          <div className="relative w-[140px] sm:w-[160px] h-[300px] sm:h-[440px] overflow-hidden rounded-xl flex-shrink-0">
            <div className="absolute top-0 left-0 right-0 h-12 sm:h-16 z-10 bg-gradient-to-b from-secondary/90 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 z-10 bg-gradient-to-t from-secondary/90 to-transparent pointer-events-none" />
            <motion.div
              className="flex flex-col gap-3"
              animate={{ 
                y: ["0%", "-33.333%"]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              }}
            >
              {tripleImages(column1Images).map((img, i) => (
                <div key={i} className="w-full h-[120px] sm:h-[140px] rounded-lg overflow-hidden flex-shrink-0 border border-border/50">
                  <img alt="Biotech research" className="w-full h-full object-cover" src={img} loading="lazy" />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Column 2 - Scroll Up */}
          <div className="relative w-[140px] sm:w-[160px] h-[300px] sm:h-[440px] overflow-hidden rounded-xl flex-shrink-0">
            <div className="absolute top-0 left-0 right-0 h-12 sm:h-16 z-10 bg-gradient-to-b from-secondary/90 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 z-10 bg-gradient-to-t from-secondary/90 to-transparent pointer-events-none" />
            <motion.div
              className="flex flex-col gap-3"
              animate={{ 
                y: ["-33.333%", "0%"]
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              }}
            >
              {tripleImages(column2Images).map((img, i) => (
                <div key={i} className="w-full h-[120px] sm:h-[140px] rounded-lg overflow-hidden flex-shrink-0 border border-border/50">
                  <img alt="Laboratory work" className="w-full h-full object-cover" src={img} loading="lazy" />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Column 3 - Scroll Down */}
          <div className="relative w-[140px] sm:w-[160px] h-[300px] sm:h-[440px] overflow-hidden rounded-xl flex-shrink-0 hidden sm:block">
            <div className="absolute top-0 left-0 right-0 h-12 sm:h-16 z-10 bg-gradient-to-b from-secondary/90 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 z-10 bg-gradient-to-t from-secondary/90 to-transparent pointer-events-none" />
            <motion.div
              className="flex flex-col gap-3"
              animate={{ 
                y: ["0%", "-33.333%"]
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              }}
            >
              {tripleImages(column3Images).map((img, i) => (
                <div key={i} className="w-full h-[120px] sm:h-[140px] rounded-lg overflow-hidden flex-shrink-0 border border-border/50">
                  <img alt="Scientific analysis" className="w-full h-full object-cover" src={img} loading="lazy" />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Column 4 - Scroll Up */}
          <div className="relative w-[140px] sm:w-[160px] h-[300px] sm:h-[440px] overflow-hidden rounded-xl flex-shrink-0 hidden md:block">
            <div className="absolute top-0 left-0 right-0 h-12 sm:h-16 z-10 bg-gradient-to-b from-secondary/90 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 z-10 bg-gradient-to-t from-secondary/90 to-transparent pointer-events-none" />
            <motion.div
              className="flex flex-col gap-3"
              animate={{ 
                y: ["-33.333%", "0%"]
              }}
              transition={{
                duration: 19,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              }}
            >
              {tripleImages(column4Images).map((img, i) => (
                <div key={i} className="w-full h-[120px] sm:h-[140px] rounded-lg overflow-hidden flex-shrink-0 border border-border/50">
                  <img alt="Medical research" className="w-full h-full object-cover" src={img} loading="lazy" />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Column 5 - Scroll Down */}
          <div className="relative w-[140px] sm:w-[160px] h-[300px] sm:h-[440px] overflow-hidden rounded-xl flex-shrink-0 hidden lg:block">
            <div className="absolute top-0 left-0 right-0 h-12 sm:h-16 z-10 bg-gradient-to-b from-secondary/90 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 z-10 bg-gradient-to-t from-secondary/90 to-transparent pointer-events-none" />
            <motion.div
              className="flex flex-col gap-3"
              animate={{ 
                y: ["0%", "-33.333%"]
              }}
              transition={{
                duration: 21,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              }}
            >
              {tripleImages(column5Images).map((img, i) => (
                <div key={i} className="w-full h-[120px] sm:h-[140px] rounded-lg overflow-hidden flex-shrink-0 border border-border/50">
                  <img alt="Biotech innovation" className="w-full h-full object-cover" src={img} loading="lazy" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const cards = [
    { tag: "PHD STUDENT", icon: "🎓", quote: "Three chapters rewritten in six weeks. My supervisor called the methodology section \"exemplary.\" I submitted on time, passed my viva, and had a manuscript accepted at Nucleic Acids Research four months later. BioAI Lab didn't just save my PhD — they elevated it.", name: "Sonal K.", role: "PhD Genomics · University of Edinburgh" },
    { tag: "PRINCIPAL INVESTIGATOR", icon: "🔬", quote: "Our NIH R21 was funded on first submission — $240,000. The BioAI Lab grant team preempted every reviewer concern. The specific aims page alone was worth the entire fee. I've referred three colleagues since.", name: "Dr. Marcus R.", role: "Associate Professor · Johns Hopkins University" },
    { tag: "UG STUDENT → INDUSTRY", icon: "🚀", quote: "I was a final-year biotech student with zero coding skills. The No-Code Bio-AI course changed everything. Eight months later I had a job offer from a Singapore biotech firm — and a CV line every interviewer asks about.", name: "Priya L.", role: "Computational Biologist · Genentech, Singapore" },
  ];
  return (
    <section className="py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">// What Our Clients Say</p>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">Real Outcomes. <span className="text-gradient">Real People.</span></h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <figure key={c.name} className="flex flex-col rounded-3xl border border-border bg-card p-7 shadow-sm">
              <div className="flex items-center gap-2"><span className="text-2xl">{c.icon}</span><span className="text-[11px] font-bold uppercase tracking-wider text-primary">{c.tag}</span></div>
              <div className="mt-3 flex text-cta">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">"{c.quote}"</blockquote>
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
    <section id="blog" className="bg-secondary py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">// International Reach</p>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">Deepiotics Operates <span className="text-gradient">Where Biotech Leads</span></h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">Active clients across four continents. Grant expertise across NIH, Wellcome, DBT, SERB, H2020, and NSF. A genuinely international AI-biotech operation.</p>
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

function FinalCTA() {
  const { openFormModal } = useFormModal();
  return (
    <section className="bg-hero py-8 sm:py-10">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">// Take the First Step</p>
        <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">Whatever You Need Next in Biotech — <span className="text-gradient">We Are Ready.</span></h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">Book a free 30-minute consultation for research services. Or join the next free BioAI Career Launchpad Workshop. Your next breakthrough starts at bioai.deepiotics.com</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button onClick={() => openFormModal(false)} className="inline-flex items-center gap-2 rounded-full bg-cta px-8 py-4 text-base font-semibold text-cta-foreground shadow-float hover:opacity-95">Apply Now <ArrowRight className="h-4 w-4" /></button>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">No commitment. No hard sell. Just expert guidance on your exact situation.</p>
      </div>
    </section>
  );
}

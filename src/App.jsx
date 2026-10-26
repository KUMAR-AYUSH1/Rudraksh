
import FAQAccordion from "./components/ui/FQA.jsx";
import CardHoverEffectDemo1 from "./components/ui/Treatment.jsx";
import CardHoverEffectDemo2 from "./components/ui/Surgery.jsx";
import { CardStackDemo } from "./components/ui/review.jsx";
import { TextGenerateEffectDemo } from "./components/ui/About_Dr.jsx";
import { LayoutTextFlipDemo } from "./components/ui/Expertise.jsx";
import { DirectionAwareHoverDemo } from "./components/ui/DRimg.jsx";
import { FlipWordsDemo } from "./components/ui/Certifications.jsx";
import Footer from "./components/ui/footer.jsx";
import Header from "./components/ui/Navbar.jsx";

// Reusable section heading
function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-5 max-w-3xl text-center">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-400 sm:text-sm">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      {/* Navigation */}
      <Header />

      <main>
        {/* Hero / Doctor Introduction */}
        <section
          id="home"
          aria-label="Meet our doctor"
          className="relative isolate overflow-hidden"
        >
          {/* Subtle background decoration */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-32 top-10 -z-10 h-80 w-80 rounded-full bg-emerald-100/60 blur-3xl dark:bg-emerald-900/20"
          />

          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
            <div className="flex justify-center">
              <DirectionAwareHoverDemo />
            </div>

            <div className="space-y-7">
              <TextGenerateEffectDemo />

              <FlipWordsDemo />
            </div>
          </div>
        </section>

        {/* Medical Expertise */}
        <section
          id="expertise"
          className="border-y border-slate-100 bg-slate-50/80 px-5 py-16 dark:border-slate-800 dark:bg-slate-900/50 sm:px-8 md:py-20"
        >
          <div className="mx-auto max-w-7xl">
            <LayoutTextFlipDemo />
          </div>
        </section>

        {/* Patient Reviews */}
        <section
          id="reviews"
          className="scroll-mt-24 px-5 py-16 sm:px-8 md:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Patient Experiences"
              title="Stories of Hope and Happiness"
              description="Discover the experiences shared by patients and families who have trusted us on their journey."
            />

            <div className="mx-auto max-w-5xl">
              <CardStackDemo />
            </div>
          </div>
        </section>

        {/* Treatments */}
        <section
          id="treatments"
          className="scroll-mt-24 bg-slate-50 px-5 py-16 dark:bg-slate-900/70 sm:px-8 md:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Personalized Healthcare"
              title="Our Treatments"
              description="Explore our fertility and healthcare treatment options, designed around individual needs and guided by professional care."
            />

            <CardHoverEffectDemo1 />
          </div>
        </section>

        {/* Surgical Services */}
        <section
          id="surgery"
          className="scroll-mt-24 px-5 py-16 sm:px-8 md:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Specialized Care"
              title="Surgical Services"
              description="Learn about our surgical services and available care options, with a focus on informed decisions and patient well-being."
            />

            <CardHoverEffectDemo2 />
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section
          id="faq"
          className="scroll-mt-24 bg-slate-50 px-5 py-16 dark:bg-slate-900/70 sm:px-8 md:py-24"
        >
          <div className="mx-auto max-w-5xl">
            <SectionHeading
              eyebrow="Here to Help"
              title="Frequently Asked Questions"
              description="Find answers to common questions about treatments, procedures, and the care we provide."
            />

            <FAQAccordion />
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

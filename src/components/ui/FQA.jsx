import { useState } from "react";

const faqData = [
  {
    question:
      "What treatment does an orthopaedic doctor offer?",
    answer:
      "An orthopaedic doctor provides treatment for musculoskeletal trauma, spine conditions, sports injuries, degenerative diseases, infections, bone cancers, and congenital problems.",
  },
  {
    question: "Do orthopaedic doctors handle emergency cases?",
    answer:
      "Yes, orthopaedic doctors are trained to perform emergency surgeries and treatment when required.",
  },
  {
    question:
      "Where is Dr. Rajeev Ranjan located in Khajpura?",
    answer:
      "He is located at Pillar No. 25, Opposite Shiv Mandir, Khajpura, Patna.",
  },
  {
    question: "What are the business hours?",
    answer:
      "The clinic is open 24 hours a day, 7 days a week (Monday through Sunday).",
  },
  {
    question: "How can I contact the clinic?",
    answer:
      "You can call +91-7405615964 for appointments and enquiries.",
  },
];


export default function FAQAccordion() {
  // Tracks the index of the currently open item. Set to null if all are closed.
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-10 p-4 bg-white dark:bg-black rounded-xl shadow-md border border-slate-100">
      

      <div className="space-y-4">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="border-b border-slate-200 last:border-none pb-4 last:pb-0"
            >
              {/* Trigger Button */}
              <button
                type="button"
                className="flex justify-between items-center w-full py-3 text-left font-medium text-slate-700 hover:text-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 rounded-lg transition-colors duration-200"
                onClick={() => toggleAccordion(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
                id={`faq-button-${index}`}
              >
                <span className="text-lg">{item.question}</span>
                
                {/* Animated Chevron Icon */}
                <svg
                  className={`w-5 h-5 text-slate-400 transition-transform duration-300 transform ${
                    isOpen ? "rotate-180 text-indigo-600" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Collapsible Content Panel */}
              <div
                id={`faq-panel-${index}`}
                role="region"
                aria-labelledby={`faq-button-${index}`}
                className={`grid transition-all duration-300 ease-in-out text-slate-600 overflow-hidden ${
                  isOpen ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden leading-relaxed text-sm sm:text-base">
                  {item.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
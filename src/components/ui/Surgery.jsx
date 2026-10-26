import { HoverEffect } from "../ui/card-hover-effect";

export default function CardHoverEffectDemo2() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Arthroplasty",
    description:
      "A surgical procedure performed to restore the function and integrity of a damaged joint.",
  },
  {
    title: "Cruciate Ligament Reconstruction",
    description:
      "Surgery to replace a torn cruciate ligament in the knee, typically using a tissue graft.",
    
  },
  {
    title: "Knee Replacement",
    description:
      "A procedure to resurface a damaged knee joint with artificial metal and plastic parts",
    
  },
  {
    title: "Ligament Reconstruction",
    description:
      "An operation to repair or replace torn or damaged stabilizing ligaments throughout the body.",
  },
  {
    title: "Shoulder Replacement",
    description:
      "A surgical procedure where sections of an arthritic or damaged shoulder joint are replaced.",

  },
  {
    title: "Spinal Disc",
    description:
      "Procedures focused on treating damaged, herniated, or degenerated cushions between the spine's vertebrae.",
  },
  {
    title: "Spine Surgery",
    description:
      "A broad category of surgical interventions designed to treat structural problems or compression in the back.",
  },
];

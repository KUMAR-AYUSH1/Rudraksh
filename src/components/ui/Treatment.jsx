import { HoverEffect } from "../ui/card-hover-effect";

export default function CardHoverEffectDemo1() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Ankylosing Spondylitis",
    description:
      "A chronic inflammatory disease that primarily causes inflammation of the joints in the spine.",
  },
  {
    title: "Fracture Nasal Bone Correction",
    description:
      "A medical procedure performed to realign and repair a broken or displaced nose structure.",
    
  },
  {
    title: "Frozen Shoulder",
    description:
      "A condition characterized by stiffness, severe pain, and limited range of motion in the shoulder joint.",
    
  },
  {
    title: "Musculoskeletal Infections",
    description:
      "Bacterial, fungal, or viral infections that affect the bones, joints, muscles, or surrounding soft tissues.",
  },
  {
    title: "Neck Pain",
    description:
      "General discomfort, soreness, or stiffness occurring in any of the structures within the cervical spine area.",

  },
  {
    title: "Osteoarthritis",
    description:
      "A common degenerative joint disease involving the gradual wear and tear of protective cartilage over time.",
  },
  {
    title: "Plantar Fasciitis",
    description:
      "Inflammation of the thick band of tissue running across the bottom of the foot, causing intense heel pain.",
  },
  {
    title: "Rotator Cuff Injury",
    description:
      "Damage, strain, or tearing affecting the group of muscles and tendons that stabilize the shoulder joint.",
  },
];

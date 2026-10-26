
import Rating from '@mui/material/Rating';

"use client";
import { CardStack } from "../ui/card-stack";
import { cn } from "@/lib/utils";
export function CardStackDemo() {
  return (
    <div className="h-[40rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}>
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Saurabh Yadush",
    designation: <Rating name="read-only" value={5} readOnly />,
    content: (
      <p>
        I highly recommend <Highlight>Dr.Rajeev Ranjan</Highlight> for anyone dealing with an <Highlight>sports injury</Highlight>. They didn't just perform an excellent surgery they also guided through a clear, thorough recovery plan. They truly understand the needs of active people and athletes.
      </p>
    ),
  },
  {
    id: 1,
    name: "MD JAVED KHAN",
    designation: <Rating name="read-only" value={5} readOnly />,
    content: (
      <p>
        <Highlight>Dr. Rajeev Ranjan</Highlight> is an excellent surgeon in bihar(patna). my patient recovered very quickly after undergoing <Highlight>ORIF surgery</Highlight> for an acetabular fracture performed by him. The physiotherapy treatment (exercises) provided by his team member, Mr. Firdous, was also excellent. Thanks Rudraksh health care.
      </p>
    ),
  },
  {
    id: 2,
    name: "Rahul yadush",
    designation: <Rating name="read-only" value={5} readOnly />,
    content: (
      <p>
        Doctor is himself very friendly and hospital service is also good.
      </p>
    ),
  },
  {
    id: 3,
    name: "Bharti Kumari",
    designation: <Rating name="read-only" value={5} readOnly />,
    content: (
      <p>
        सर बहुत अच्छे डॉक्टर हैं। मेरी मम्मी का हाथ टूट गया था, हम लोगों ने भी यहीं इलाज करवाया था।
      </p>
    ),
  }
];

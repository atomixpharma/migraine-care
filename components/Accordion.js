import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export function Accordion({ items }) {
  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <AccordionItem key={index} {...item} />
      ))}
    </div>
  );
}

export function AccordionItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-4 py-3 text-left font-medium"
      >
        <span>{question}</span>
        <FiChevronDown
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-4 pb-4 text-sm text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
}

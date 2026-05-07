"use client";

import React, { useState } from "react";
import * as Lucide from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(true);

  return (
    <div className="faq-item">
      <button
        onClick={() => setOpen(!open)}
        className="faq-question"
        aria-expanded={open}
      >
        <span>{question}</span>
        <Lucide.ChevronDown
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <div className="faq-answer pr-8 text-sm">{answer}</div>}
    </div>
  );
}

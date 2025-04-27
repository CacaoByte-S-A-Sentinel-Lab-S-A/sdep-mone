"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import faqData from "@/data/faq-data";
import type { FAQItem } from "@/data/faq-data";


export default function FAQ() {
  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl bg-[var(--card-color)] text-[var(--text-color)] p-6 lg:p-8">
      <div className="text-3xl font-bold text-primary mb-6">Preguntas Frecuentes</div>

      <Accordion type="single" collapsible className="w-full border-none select-none">
        {faqData.map((item: FAQItem, index: number) => (
          <AccordionItem key={index} value={`faq${index}`} className="border-b-0">
            <AccordionTrigger className="py-3 hover:no-underline">
              <h2 className="text-xl font-bold text-orange-500 text-left">{item.question}</h2>
            </AccordionTrigger>
            <AccordionContent>
              <Card className="bg-[var(--background-color)] border-none">
                <CardContent className="p-4">
                  <div className="text-sm text-[var(--text-color-lighten)]">
                    {item.answer}
                  </div>
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

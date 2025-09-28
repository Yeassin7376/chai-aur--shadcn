import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

function AccordionPage() {
  const faq = [
    {
      question: 'textt',
      answer: 'answerr'
    },
    {
      question: 'Is it accessible?',
      answer: 'Yes. It adheres to the WAI-ARIA design pattern.'
    }
  ];

  return (
    <div className="h-full flex justify-center items-center">
      <main className="w-[500px]">
        {faq.map((qn, index) => (
          <Accordion type="single" key={index} collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>{qn.question}</AccordionTrigger>
              <AccordionContent>{qn.answer}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </main>
    </div>
  );
}

export default AccordionPage;

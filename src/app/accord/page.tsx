import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog';

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
      <AlertDialog>
        <AlertDialogTrigger>Open chai</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default AccordionPage;

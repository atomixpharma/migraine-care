import { Accordion, AccordionItem } from "@/components/Accordion";


const faqData = [
  {
    section: "Migraine Care 101",
    items: [
      {
        question: "What is this service?",
        answer: "An online platform to assess and treat migraine with licensed Ontario healthcare providers."
      },
      {
        question: "Who can use this service?",
        answer: "Anyone aged 18+ in Ontario experiencing migraine symptoms."
      },
      {
        question: "Do I need a referral?",
        answer: "No referral is needed to use this service."
      }
    ]
  },
  {
    section: "Online Visits",
    items: [
      {
        question: "How does the online visit work?",
        answer: "Complete the intake form. A licensed provider reviews it and may contact you if needed."
      },
      {
        question: "Do I need to book an appointment?",
        answer: "No, the form can be completed anytime. A provider will follow up within 24–48 hours."
      }
    ]
  },
  {
    section: "Medication & Delivery",
    items: [
      {
        question: "How long does delivery take?",
        answer: "Most medications are delivered within 1–3 business days once approved."
      },
      {
        question: "Is the packaging discreet?",
        answer: "Yes, we use plain packaging with no medical labels."
      },
      {
        question: "Can I pick up my medication instead?",
        answer: "Yes, pickup from a local pharmacy is an option in most cases."
      }
    ]
  },
  {
    section: "Pricing & Insurance",
    items: [
      {
        question: "How much does the service cost?",
        answer: "The intake assessment is a flat fee. Medication costs vary and are explained before payment."
      },
      {
        question: "Can I use my insurance?",
        answer: "Yes. Upload your insurance card and we will check coverage if applicable."
      }
    ]
  },
  {
    section: "Privacy & Safety",
    items: [
      {
        question: "Is my information secure?",
        answer: "Yes. Your data is encrypted and only shared with licensed providers."
      },
      {
        question: "Is this legal and safe?",
        answer: "Yes. We comply with Ontario health regulations and patient safety standards."
      }
    ]
  }
];

export default function FAQSection() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold text-center mb-10">Frequently Asked Questions</h2>
      {faqData.map((section, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-xl font-bold mb-4">{section.section}</h3>
          <Accordion
            items={section.items.map(({ question, answer }) => ({ question, answer }))}
          />
        </div>
      ))}
    </section>
  );
}

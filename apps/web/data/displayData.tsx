import { CircleCheck, Pencil, Smile, Zap } from "lucide-react";


export const featureData = [
  {
    icon: <Zap className="size-6" />,
    title: "Summarizer",
    description:
      "Transform lengthy articles into concise summaries that capture key points without losing essential information.",
    beforeData:
      "The implementation of artificial intelligence in content creation has revolutionized the way writers approach their craft. The technology provides assistance with research, editing, and structural elements that were previously manual processes requiring significant time investment...",
    afterData:
      "AI has transformed content creation by automating research, editing, and structural tasks that once required extensive manual effort.",
  },
  {
    icon: <Pencil className="size-6" />,
    title: "Rewriter",
    description:
      "Refresh and enhance your existing content with alternative phrasings while preserving your original message.",
    beforeData:
      "Our company has been in business for over 10 years and we have a lot of experience in the industry. We offer high-quality products at competitive prices and have excellent customer service.",
    afterData:
      "With over a decade of industry expertise, we deliver premium products at market-competitive rates, complemented by outstanding customer support.",
  },
  {
    icon: <CircleCheck className="size-6" />,
    title: "Grammar Fixer",
    description:
      "Identify and correct grammatical errors, spelling mistakes, and punctuation issues for error-free writing.",
    beforeData:
      "The team have been working on this project for month's, but they still havent finished it despite there best efforts.",
    afterData:
      "The team has been working on this project for months, but they still haven't finished it despite their best efforts.",
  },
  {
    icon: <Smile className="size-6" />,
    title: "Tone Adjuster",
    description:
      "Modify your writing to match various tones – professional, friendly, academic, or persuasive – for any audience.",
    beforeData:
      "Hey guys! So we're super excited to announce our new product that's gonna blow your mind! It's totally awesome and you're gonna love it!",
    afterData:
      "We are pleased to announce the launch of our new product. We believe this innovative solution will significantly enhance your experience and provide substantial value.",
  },
];

export const dataDisplay = [
  {
    value: "10x",
    title: "Faster Writing",
  },
  {
    value: "99%",
    title: "Grammar Accuracy",
  },
  {
    value: "50+",
    title: "Writing Styles",
  },
  {
    value: "24/7",
    title: "Available Anywhere",
  },
];

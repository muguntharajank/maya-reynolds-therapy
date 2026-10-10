import { Wind, ShieldCheck, Leaf, Brain, Waves, Feather, Activity, MapPin, Video } from "lucide-react";

export const site = {
  name: "Dr. Maya Reynolds, PsyD",
  role: "Licensed Clinical Psychologist",
  street: "123th Street 45 W",
  city: "Santa Monica, CA 90401",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=123th+Street+45+W+Santa+Monica+CA+90401",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Our Office", href: "#office" },
  { label: "FAQs", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  { icon: Wind, title: "Anxiety & Panic Therapy", description: "Clients often feel \u201cfunctional\u201d on the outside while quietly struggling with constant worry, tension in the body, difficulty sleeping, or a sense of always bracing for something to go wrong." },
  { icon: ShieldCheck, title: "Trauma & EMDR Therapy", description: "Support for adults with single-incident trauma or more complex, long-standing patterns, paced carefully with an emphasis on safety, stabilization, and regulation." },
  { icon: Leaf, title: "Burnout & Perfectionism Therapy", description: "Support for entrepreneurs, creatives, and professionals dealing with burnout, perfectionism, and high internal pressure after years of pushing through stress." },
];

export const methods = [
  { icon: Brain, title: "CBT", description: "Practical tools for understanding patterns and developing new responses." },
  { icon: Waves, title: "EMDR", description: "Trauma-focused support for processing difficult experiences." },
  { icon: Feather, title: "Mindfulness", description: "Building awareness and connection with present-moment experience." },
  { icon: Activity, title: "Body-oriented techniques", description: "Understanding how emotional experiences can also show up physically." },
];

export const officeTraits = ["Quiet", "Private", "Naturally lit", "Comfortable", "Uncluttered", "Grounding"];

export const therapyOptions = [
  { icon: MapPin, title: "In person", description: "Sessions are available from Dr. Maya's private office in Santa Monica." },
  { icon: Video, title: "Telehealth", description: "Secure telehealth sessions are available for clients located in California." },
];

export const clientFit = ["Adults", "Professionals", "Entrepreneurs", "Creatives", "High-achieving individuals", "People experiencing anxiety", "People experiencing trauma", "People experiencing burnout", "People dealing with perfectionism"];

export const faqs = [
  { question: "Do you offer in-person therapy in Santa Monica?", answer: "Yes. Dr. Maya offers in-person therapy from her Santa Monica office." },
  { question: "Do you offer online therapy in California?", answer: "Yes. Secure telehealth sessions are available for clients located in California." },
  { question: "What can therapy with a Santa Monica psychologist help with?", answer: "Anxiety, panic, trauma, burnout, perfectionism, chronic stress, and high internal pressure." },
  { question: "Do you offer trauma and EMDR therapy?", answer: "Yes. Trauma work is an important part of Dr. Maya's practice, with an emphasis on safety, stabilization, pacing, and regulation." },
  { question: "What therapeutic approaches do you use?", answer: "CBT, EMDR, mindfulness-based practices, and body-oriented techniques." },
  { question: "Who do you typically work with?", answer: "Dr. Maya primarily works with adults, including professionals, entrepreneurs, creatives, and high-achieving individuals experiencing anxiety, burnout, trauma, or emotional exhaustion." },
];

export const images = {
  maya: "/images/therapist/dr-maya-reynolds.jpg",
  office: ["/images/office/office-1.jpg", "/images/office/office-2.jpg"],
  alt: {
    maya: "Portrait of Dr. Maya Reynolds, PsyD, smiling in a white blazer",
    office1: "Sunlit therapy room with a gray sofa, armchair, and tall windows in Dr. Maya's Santa Monica office",
    office2: "Quiet therapy room with a sofa, olive tree, and shelving in Dr. Maya's Santa Monica office",
  },
};

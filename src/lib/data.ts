const landingImages1 = [
  "/images/landingPage/image1.jpeg",
  "/images/landingPage/image2.jpg",
  "/images/landingPage/image3.jpg",
  "/images/landingPage/image4.jpeg",
  "/images/landingPage/image5.jpg",
  "/images/landingPage/image6.jpg",
  "/images/landingPage/image7.png",
  "/images/landingPage/image8.jpg",
  "/images/landingPage/image9.jpg",
  "/images/landingPage/image10.jpg",
  "/images/landingPage/image11.jpg",
  "/images/landingPage/image12.jpg",
];

const landingImages2 = [
  "/images/landingPage/image6.jpg",
  "/images/landingPage/image11.jpg",
  "/images/landingPage/image8.jpg",
  "/images/landingPage/image1.jpeg",
  "/images/landingPage/image9.jpg",
  "/images/landingPage/image7.png",
  "/images/landingPage/image10.jpg",
  "/images/landingPage/image3.jpg",
  "/images/landingPage/image2.jpg",
  "/images/landingPage/image4.jpeg",
  "/images/landingPage/image5.jpg",
  "/images/landingPage/image12.jpg",
];

const landingImages3 = [
  "/images/landingPage/image7.png",
  "/images/landingPage/image8.jpg",
  "/images/landingPage/image9.jpg",
  "/images/landingPage/image10.jpg",
  "/images/landingPage/image11.jpg",
  "/images/landingPage/image12.jpg",
  "/images/landingPage/image1.jpeg",
  "/images/landingPage/image2.jpg",
  "/images/landingPage/image3.jpg",
  "/images/landingPage/image4.jpeg",
  "/images/landingPage/image5.jpg",
  "/images/landingPage/image6.jpg",
];

const images1 = [
  "/images/image_1.png",
  "/images/image_2.png",
  "/images/image_3.png",
  "/images/image_4.png",
  "/images/image_5.png",
  "/images/image_6.png",
  "/images/image_7.png",
  "/images/image_8.png",
];

const images2 = [
  "/images/image_8.png",
  "/images/image_4.png",
  "/images/image_2.png",
  "/images/image_1.png",
  "/images/image_6.png",
  "/images/image_3.png",
  "/images/image_7.png",
  "/images/image_5.png",
];

const images3 = [
  "/images/image_3.png",
  "/images/image_5.png",
  "/images/image_4.png",
  "/images/image_1.png",
  "/images/image_7.png",
  "/images/image_6.png",
  "/images/image_2.png",
  "/images/image_8.png",
];

interface AboutServiceProps {
  title: string;
  content: string[];
}

const AboutServicesWide: AboutServiceProps[] = [
  {
    title: "Production & Creative Support",
    content: [
      "Full-service production for film, stills & branded content",
      "Estimating & cost planning",
      "Art buying & visual research",
      "Casting, celebrity & testimonial booking",
      "Photographer & director screening",
      "Connecting with AI creatives",
      "Sustainable production planning, eco-conscious workflows",
      "Carbon footprint reduction strategies",
    ],
  },
  {
    title: "AI Production",
    content: [
      "AI-generated backgrounds for seamless integration with real models",
      "Studio-to-scene integration for models and products",
    ],
  },
  {
    title: "Locations & Logistics",
    content: [
      "Location scouting & permitting",
      "Travel plannings & accommodations",
      "On-set management & coordination",
      "Crew assembly & talent negotiation",
      "Equipment rental & technical support",
      "Catering, safety & insurance handling",
    ],
  },
  {
    title: "Post-Production & Delivery",
    content: [
      "Post-production coordination",
      "Behind-the-scenes & fashion content production",
      "Fashion film & branded content creationn",
      "Delivery optimised for print, digital & social media",
    ],
  },

  {
    title: "Legal & Financial Management",
    content: [
      "Rights clearance & legal support",
      "Contract negotiation for talent & locations",
      "Safety advice & insurance certificates",
      "Billing & financial transparency",
    ],
  },
];

const AboutServicesSmall: AboutServiceProps[] = [
  {
    title: "Planning & Organization",
    content: [
      "Budgeting & cost estimates",
      "Full pre-production services",
      "Travel & accommodation arrangements",
    ],
  },
  {
    title: "Locations & Logistics",
    content: [
      "Finding the perfect locations & getting permits",
      "Managing everything on set",
      "Equipment rental & technical support",
      "Catering & hospitality services",
      "Safety & insurance",
    ],
  },
  {
    title: "Talent & Casting",
    content: ["Finding and hiring models & actors", "Negotiating contracts"],
  },

  {
    title: "Creative & Media",
    content: ["Behind-the-scenes videos", "Fashion films & branded content"],
  },
];

export {
  images1,
  images2,
  images3,
  landingImages1,
  landingImages2,
  landingImages3,
  AboutServicesWide,
  AboutServicesSmall,
};

export type { AboutServiceProps };

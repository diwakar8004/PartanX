import { ServiceDetailTemplate } from "@/components/service-detail-template"
import { GraduationCap } from "lucide-react"

export const metadata = {
  title: "Security Awareness Training | PartanX",
  description: "Interactive training programs to build a human firewall against social engineering and cyber threats.",
}

const service = {
  name: "Security Awareness Training",
  tagline: "Build a Human Firewall with Expert Security Awareness Training",
  description:
    "Transform your employees into your strongest security defense with engaging, interactive training programs that reduce human error and strengthen security culture.",
  icon: GraduationCap,
  problems: [
    "90% of successful cyberattacks start with human error or social engineering",
    "Employees lack awareness of current phishing and social engineering tactics",
    "Generic training programs fail to engage users and drive behavior change",
    "Compliance requirements demand regular security awareness training",
    "Remote work has increased exposure to social engineering attacks",
    "Lack of metrics to measure training effectiveness and security culture improvement",
  ],
  howItWorks: [
    {
      step: "Step 1",
      title: "Assess",
      description:
        "Evaluate current security awareness levels through baseline phishing simulations and security culture assessments to identify training priorities.",
    },
    {
      step: "Step 2",
      title: "Train",
      description:
        "Deploy interactive training modules, conduct simulated phishing campaigns, and provide role-specific security education tailored to your organization.",
    },
    {
      step: "Step 3",
      title: "Measure",
      description:
        "Track training completion, measure behavior change through ongoing simulations, and provide detailed reporting on security culture improvements.",
    },
  ],
  deliverables: [
    "Baseline security awareness assessment",
    "Interactive training modules and content library",
    "Simulated phishing campaign management",
    "Role-specific security training programs",
    "Security culture measurement and reporting",
    "Incident response training and tabletop exercises",
    "Policy awareness and compliance training",
    "Monthly phishing simulation reports",
    "Quarterly security culture assessments",
    "Annual training program optimization",
  ],
  integrations: ["KnowBe4", "Proofpoint", "Microsoft Viva Learning", "Mimecast", "Cofense", "SANS Security Awareness"],
  plans: [
    {
      name: "Essential",
      price: "$15/user/month",
      description: "Basic security awareness for small teams",
      features: [
        "Up to 50 users",
        "Monthly phishing simulations",
        "Basic training library",
        "Email support",
        "Quarterly reporting",
      ],
    },
    {
      name: "Professional",
      price: "$25/user/month",
      description: "Comprehensive training with advanced features",
      popular: true,
      features: [
        "Up to 500 users",
        "Weekly phishing simulations",
        "Advanced training modules",
        "Role-specific content",
        "Real-time reporting",
        "Priority support",
        "Custom branding",
      ],
    },
    {
      name: "Enterprise",
      price: "Contact Us",
      description: "Full-scale program for large organizations",
      features: [
        "Unlimited users",
        "Custom training content",
        "Advanced analytics",
        "Dedicated training manager",
        "Executive reporting",
        "API integrations",
        "SLA guarantees",
      ],
    },
  ],
  faqs: [
    {
      question: "How often should security awareness training be conducted?",
      answer:
        "We recommend continuous training with monthly phishing simulations and quarterly formal training sessions, supplemented by just-in-time training based on current threats.",
    },
    {
      question: "What topics are covered in the training program?",
      answer:
        "Our training covers phishing, social engineering, password security, mobile device safety, remote work security, data protection, and incident reporting procedures.",
    },
    {
      question: "How do you measure training effectiveness?",
      answer:
        "We track metrics including phishing click rates, training completion rates, knowledge retention scores, and security incident reduction to measure program effectiveness.",
    },
    {
      question: "Can the training be customized for our industry?",
      answer:
        "Yes, we provide industry-specific training content for healthcare, finance, manufacturing, and other sectors with tailored scenarios and compliance requirements.",
    },
  ],
}

export default function SecurityAwarenessTrainingPage() {
  return <ServiceDetailTemplate service={service} />
}

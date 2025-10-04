import { ServiceDetailTemplate } from "@/components/service-detail-template"
import { Key } from "lucide-react"

export const metadata = {
  title: "Identity & Access Management (MFA, SSO, PAM) | PartanX",
  description:
    "Multi-factor authentication, single sign-on, and privileged access management for comprehensive identity security.",
}

const service = {
  name: "Identity & Access Management (MFA, SSO, PAM)",
  tagline: "Multi-factor authentication, single sign-on, and privileged access management.",
  description:
    "Comprehensive identity and access management solution that secures user identities, simplifies access, and protects privileged accounts across your organization.",
  icon: Key,
  problems: [
    "Password-based authentication is vulnerable to credential theft and reuse",
    "Users struggle with multiple passwords and complex authentication processes",
    "Privileged accounts pose significant security risks if compromised",
    "Lack of visibility and control over user access across applications",
    "Compliance requirements for access controls and audit trails",
    "Difficulty managing user lifecycle and access provisioning",
  ],
  howItWorks: [
    {
      step: "Step 1",
      title: "Assess",
      description:
        "Analyze current identity infrastructure, map user access patterns, and design an integrated IAM strategy that balances security with user experience.",
    },
    {
      step: "Step 2",
      title: "Implement",
      description:
        "Deploy MFA, SSO, and PAM solutions with seamless integration to existing applications and directories, ensuring minimal disruption to user workflows.",
    },
    {
      step: "Step 3",
      title: "Manage",
      description:
        "Continuously monitor access patterns, enforce policies, and provide ongoing user lifecycle management with automated provisioning and deprovisioning.",
    },
  ],
  deliverables: [
    "Identity architecture design and roadmap",
    "Multi-factor authentication deployment",
    "Single sign-on integration and configuration",
    "Privileged access management implementation",
    "User lifecycle management automation",
    "Access governance and compliance reporting",
    "Identity federation and directory integration",
    "Security awareness training for users",
    "Monthly access reviews and audits",
    "Quarterly identity security assessments",
  ],
  integrations: ["Azure AD", "Okta", "Ping Identity", "CyberArk", "BeyondTrust", "OneLogin"],
  plans: [
    {
      name: "Essential IAM",
      price: "Contact Us",
      description: "Basic identity and access management",
      features: ["Up to 100 users", "Basic MFA", "Limited SSO applications", "Standard reporting", "Email support"],
    },
    {
      name: "Professional IAM",
      price: "Contact Us",
      description: "Advanced identity security",
      popular: true,
      features: [
        "Up to 1,000 users",
        "Advanced MFA options",
        "Unlimited SSO applications",
        "Basic PAM capabilities",
        "24/7 support",
        "Advanced analytics",
        "Compliance reporting",
      ],
    },
    {
      name: "Enterprise IAM",
      price: "Contact Us",
      description: "Complete identity security platform",
      features: [
        "Unlimited users",
        "Full PAM solution",
        "Advanced governance",
        "API integrations",
        "Dedicated support team",
        "Executive dashboards",
        "SLA guarantees",
      ],
    },
  ],
  faqs: [
    {
      question: "What MFA methods are supported?",
      answer:
        "We support various MFA methods including SMS, voice calls, mobile apps, hardware tokens, biometrics, and FIDO2/WebAuthn for passwordless authentication.",
    },
    {
      question: "How many applications can be integrated with SSO?",
      answer:
        "Our SSO solution supports thousands of pre-integrated applications and can connect to custom applications through SAML, OAuth, OpenID Connect, and other standards.",
    },
    {
      question: "What is included in privileged access management?",
      answer:
        "PAM includes privileged account discovery, password vaulting, session recording, just-in-time access, and privileged session monitoring for administrative accounts.",
    },
    {
      question: "How does the solution handle user onboarding and offboarding?",
      answer:
        "Automated workflows handle user lifecycle management including provisioning, role changes, and deprovisioning with integration to HR systems and approval processes.",
    },
  ],
}

export default function IdentityAccessPage() {
  return <ServiceDetailTemplate service={service} />
}

import { ServiceDetailTemplate } from "@/components/service-detail-template"
import { HardDrive } from "lucide-react"

export const metadata = {
  title: "Backup & Disaster Recovery | PartanX",
  description: "Business continuity with automated backup and comprehensive disaster recovery solutions.",
}

const service = {
  name: "Backup & Disaster Recovery",
  tagline: "Ensure Business Continuity with Reliable Backup and Recovery",
  description:
    "Protect your business with comprehensive backup and disaster recovery solutions that ensure rapid recovery and minimal downtime during any disruption.",
  icon: HardDrive,
  problems: [
    "Data loss from ransomware, hardware failures, or human error can cripple operations",
    "Traditional backup solutions are slow and unreliable for modern recovery requirements",
    "Lack of tested disaster recovery procedures leads to extended downtime",
    "Compliance requirements demand specific backup retention and recovery capabilities",
    "Cloud migration requires new backup and recovery strategies",
    "Remote work increases data protection complexity and risk",
  ],
  howItWorks: [
    {
      step: "Step 1",
      title: "Assess",
      description:
        "Analyze data protection requirements, recovery objectives, and current backup infrastructure to design optimal backup and disaster recovery strategy.",
    },
    {
      step: "Step 2",
      title: "Implement",
      description:
        "Deploy backup solutions, configure automated schedules, establish disaster recovery procedures, and conduct initial recovery testing.",
    },
    {
      step: "Step 3",
      title: "Monitor",
      description:
        "Continuously monitor backup success, conduct regular recovery testing, and provide ongoing optimization with 24/7 support and maintenance.",
    },
  ],
  deliverables: [
    "Business impact analysis and recovery requirements",
    "Backup and disaster recovery strategy and design",
    "Automated backup solution deployment and configuration",
    "Disaster recovery site setup and testing",
    "Recovery procedures and runbook documentation",
    "Regular backup monitoring and verification",
    "Disaster recovery testing and validation",
    "Compliance reporting and audit support",
    "Monthly backup reports and health checks",
    "Quarterly disaster recovery tests and updates",
  ],
  integrations: ["Veeam", "Commvault", "Rubrik", "Cohesity", "AWS Backup", "Azure Backup"],
  plans: [
    {
      name: "Essential",
      price: "$50/TB/month",
      description: "Basic backup for small businesses",
      features: [
        "Up to 10TB storage",
        "Daily automated backups",
        "30-day retention",
        "Email support",
        "Monthly reporting",
      ],
    },
    {
      name: "Professional",
      price: "$75/TB/month",
      description: "Advanced backup with disaster recovery",
      popular: true,
      features: [
        "Up to 100TB storage",
        "Continuous data protection",
        "1-year retention",
        "Disaster recovery testing",
        "24/7 monitoring",
        "Priority support",
        "Real-time dashboards",
      ],
    },
    {
      name: "Enterprise",
      price: "Contact Us",
      description: "Comprehensive business continuity",
      features: [
        "Unlimited storage",
        "Advanced replication",
        "Custom retention policies",
        "Dedicated support team",
        "Executive reporting",
        "Custom integrations",
        "SLA guarantees",
      ],
    },
  ],
  faqs: [
    {
      question: "What is the difference between backup and disaster recovery?",
      answer:
        "Backup creates copies of data for protection, while disaster recovery includes the processes and infrastructure needed to restore complete business operations after a disruption.",
    },
    {
      question: "How often should we test disaster recovery procedures?",
      answer:
        "We recommend quarterly disaster recovery tests with annual full-scale exercises to ensure procedures work effectively and meet recovery time objectives.",
    },
    {
      question: "Can you backup cloud applications and data?",
      answer:
        "Yes, we provide backup solutions for Office 365, Google Workspace, Salesforce, and other SaaS applications, as well as IaaS and PaaS platforms.",
    },
    {
      question: "What are typical recovery time objectives?",
      answer:
        "Recovery times vary by solution: critical systems can be restored in minutes with replication, while full disaster recovery typically takes 2-4 hours depending on data volume.",
    },
  ],
}

export default function BackupDRPage() {
  return <ServiceDetailTemplate service={service} />
}

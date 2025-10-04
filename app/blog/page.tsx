import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Security Insights Blog | PartanX",
  description:
    "Stay updated with the latest cybersecurity trends, threats, and best practices from our security experts.",
}

const blogPosts = [
  {
    id: 1,
    title: "The Rise of AI-Powered Cyber Attacks: What Businesses Need to Know",
    excerpt:
      "Explore how artificial intelligence is being weaponized by cybercriminals and learn essential defense strategies to protect your organization.",
    category: "Threat Intelligence",
    author: "Dr. Emily Watson",
    date: "2024-01-15",
    readTime: "8 min read",
    slug: "ai-powered-cyber-attacks",
    featured: true,
  },
  {
    id: 2,
    title: "Zero Trust Architecture: Implementation Best Practices for 2024",
    excerpt:
      "A comprehensive guide to implementing Zero Trust security architecture in modern enterprise environments.",
    category: "Best Practices",
    author: "Michael Rodriguez",
    date: "2024-01-12",
    readTime: "12 min read",
    slug: "zero-trust-implementation-guide",
    featured: false,
  },
  {
    id: 3,
    title: "GDPR Compliance in the Age of Remote Work",
    excerpt:
      "Navigate the complexities of GDPR compliance while maintaining security in distributed work environments.",
    category: "Industry News",
    author: "Sarah Chen",
    date: "2024-01-10",
    readTime: "6 min read",
    slug: "gdpr-remote-work-compliance",
    featured: false,
  },
  {
    id: 4,
    title: "Ransomware Trends Q4 2023: What We Learned",
    excerpt:
      "Analysis of the latest ransomware campaigns and emerging attack vectors observed in the final quarter of 2023.",
    category: "Threat Intelligence",
    author: "James Park",
    date: "2024-01-08",
    readTime: "10 min read",
    slug: "ransomware-trends-q4-2023",
    featured: false,
  },
  {
    id: 5,
    title: "Securing Cloud Infrastructure: AWS, Azure, and GCP Best Practices",
    excerpt: "Essential security configurations and monitoring strategies for major cloud platforms.",
    category: "Best Practices",
    author: "Dr. Emily Watson",
    date: "2024-01-05",
    readTime: "15 min read",
    slug: "cloud-security-best-practices",
    featured: false,
  },
  {
    id: 6,
    title: "The Impact of New EU Cybersecurity Regulations on Global Businesses",
    excerpt: "Understanding how recent European cybersecurity legislation affects international organizations.",
    category: "Industry News",
    author: "Michael Rodriguez",
    date: "2024-01-03",
    readTime: "7 min read",
    slug: "eu-cybersecurity-regulations-impact",
    featured: false,
  },
]

const categories = [
  { name: "All Posts", slug: "all", count: 6 },
  { name: "Threat Intelligence", slug: "threat-intelligence", count: 2 },
  { name: "Best Practices", slug: "best-practices", count: 2 },
  { name: "Industry News", slug: "industry-news", count: 2 },
]

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Security Insights & Expert Analysis
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Stay ahead of cyber threats with insights from our security experts. Get the latest on cybersecurity
              trends, best practices, and industry developments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#latest-posts">
                  Read Latest Posts
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Subscribe to Updates</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={category.slug === "all" ? "/blog" : `/blog/category/${category.slug}`}
                className="group"
              >
                <Badge
                  variant="secondary"
                  className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {category.name} ({category.count})
                </Badge>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <Badge className="mb-4">Featured Article</Badge>
                <h2 className="text-3xl font-bold text-foreground mb-4">Editor's Pick</h2>
              </div>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline">{featuredPost.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground gap-4">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-2xl mb-3">{featuredPost.title}</CardTitle>
                  <CardDescription className="text-base">{featuredPost.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button asChild>
                    <Link href={`/blog/${featuredPost.slug}`}>
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Latest Posts */}
      <section id="latest-posts" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Latest Articles</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the latest insights, analysis, and best practices from our cybersecurity experts.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {regularPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline">{post.category}</Badge>
                  </div>
                  <CardTitle className="text-xl mb-2 line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-muted-foreground gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{new Date(post.date).toLocaleDateString()}</span>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/blog/${post.slug}`}>
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Stay Informed</h2>
            <p className="text-muted-foreground mb-8">
              Get the latest cybersecurity insights delivered directly to your inbox. Join thousands of security
              professionals who trust our expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Subscribe to Newsletter</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/security-assessment">Get Security Assessment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

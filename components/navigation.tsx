"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, Shield, ChevronDown, X } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu"
import { Search } from "@/components/search"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({})
  const pathname = usePathname()
  const router = useRouter()
  const menuRef = useRef<HTMLDivElement>(null)
  const hamburgerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false)
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey)
      document.addEventListener("mousedown", handleClickOutside)
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey)
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const closeMenu = () => {
    setIsOpen(false)
    setExpandedSections({})
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-200 ease-in-out flex flex-col items-center justify-center",
        isScrolled
          ? "bg-card/95 backdrop-blur-md supports-[backdrop-filter]:bg-card/80 shadow-lg border-border/50 dark:bg-black"
          : "bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 shadow-none dark:bg-black",
      )}
    >
  <div className="container flex h-24 items-center justify-between px-4">
        {/* Logo (text) */}
        <Link href="/" className="flex items-center space-x-2 transition-all duration-200 ease-in-out hover:scale-105">
          <span className="flex items-center rounded-lg p-1 bg-transparent dark:bg-background">
            <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-none select-none">PartanX</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-all duration-200 ease-in-out hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 relative",
                    pathname === "/" &&
                      "after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-6 after:h-0.5 after:bg-primary after:rounded-full",
                  )}
                >
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-all duration-200 ease-in-out hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 relative",
                    pathname === "/about" &&
                      "after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-6 after:h-0.5 after:bg-primary after:rounded-full",
                  )}
                >
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={cn(
                  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-all duration-200 ease-in-out hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 relative",
                  pathname.startsWith("/services") &&
                    "after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-6 after:h-0.5 after:bg-primary after:rounded-full",
                )}
              >
                  <div className="flex items-center gap-2">
                    <span
                      onClick={(e) => {
                        e.stopPropagation()
                        router.push("/services")
                      }}
                      className="cursor-pointer"
                    >
                      Services
                    </span>
                    <ChevronDown className="ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" />
                  </div>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 md:w-[900px] lg:w-[1000px] lg:grid-cols-3">
                  <div className="row-span-6">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/services"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">Explore Our Services</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Security, Web Services, and Social Media Marketing to protect and grow your business.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>

                  {/* Security Services (existing) */}
                  <div className="space-y-1">
                    <h4 className="text-sm font-medium text-muted-foreground px-3 py-1">Security</h4>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/services/advanced-ztna"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Zero Trust Network Access</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Advanced ZTNA solutions</p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/services/managed-soc"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Managed SOC</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">24/7 security monitoring</p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/services/penetration-testing"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Penetration Testing</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Security vulnerability assessment</p>
                      </Link>
                    </NavigationMenuLink>
                  </div>

                  {/* Web Services */}
                  <div className="space-y-1">
                    <h4 className="text-sm font-medium text-muted-foreground px-3 py-1">Web Services</h4>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/services/web-design"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Web Design</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Modern responsive web design and UX</p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/services/web-hosting"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Web Hosting</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Secure managed hosting and server maintenance</p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/services/web-seo"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">SEO</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Search engine optimization and performance</p>
                      </Link>
                    </NavigationMenuLink>
                  </div>

                  {/* Social Media Marketing (SMM) */}
                  <div className="space-y-1">
                    <h4 className="text-sm font-medium text-muted-foreground px-3 py-1">Social Media Marketing</h4>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/services/smm-strategy"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">SMM Strategy</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Audience research and channel strategy</p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/services/smm-content"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Content & Creative</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Content creation and campaign assets</p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/services/smm-paid"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Paid Media</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Paid social campaigns and ad optimization</p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/why-choose-us" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-all duration-200 ease-in-out hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 relative",
                    pathname === "/why-choose-us" &&
                      "after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-6 after:h-0.5 after:bg-primary after:rounded-full",
                  )}
                >
                  Why Choose Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={cn(
                  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-all duration-200 ease-in-out hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 relative",
                  pathname.startsWith("/blog") &&
                    "after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-6 after:h-0.5 after:bg-primary after:rounded-full",
                )}
              >
                  <div className="flex items-center gap-2">
                    <span
                      onClick={(e) => {
                        e.stopPropagation()
                        router.push("/blog")
                      }}
                      className="cursor-pointer"
                    >
                      Blog
                    </span>
                    <ChevronDown className="ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" />
                  </div>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <div className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/blog"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">Security Insights</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Stay updated with the latest cybersecurity trends, threats, and best practices.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/blog/category/threat-intelligence"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">Threat Intelligence</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Latest threat reports and analysis
                      </p>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/blog/category/best-practices"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">Best Practices</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Security implementation guides
                      </p>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/blog/category/industry-news"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">Industry News</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Cybersecurity industry updates
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={cn(
                  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-all duration-200 ease-in-out hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 relative",
                  pathname.startsWith("/compliance") &&
                    "after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-6 after:h-0.5 after:bg-primary after:rounded-full",
                )}
              >
                Compliance
                <ChevronDown className="ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <div className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/compliance"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">Legal & Privacy</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Our commitment to data protection, privacy, and regulatory compliance.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/compliance/privacy-policy"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">Privacy Policy</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        How we protect your data
                      </p>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/compliance/terms-of-service"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">Terms of Service</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Service terms and conditions
                      </p>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/compliance/certifications"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">Certifications</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Our security certifications
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Partners removed per request */}

            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-all duration-200 ease-in-out hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 relative",
                    pathname === "/contact" &&
                      "after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-6 after:h-0.5 after:bg-primary after:rounded-full",
                  )}
                >
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Search and CTA Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Search />
          <ThemeToggle />
          <div className="flex items-center gap-2 ml-2">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 flex items-center gap-2 shadow-sm px-5 py-2 dark:bg-background dark:text-primary dark:border-primary dark:hover:bg-white dark:hover:text-primary"
            >
              <Link href="/login" className="flex items-center gap-2 px-2 py-1">
                <Shield className="h-4 w-4" />
                <span className="font-bold">Login</span>
              </Link>
            </Button>
            <Button
              variant="default"
              size="sm"
              className="rounded-full bg-primary text-white hover:bg-primary/90 transition-all duration-200 flex items-center gap-2 shadow-sm px-5 py-2"
            >
              <Link href="/register" className="flex items-center gap-2 px-2 py-1">
                <Menu className="h-4 w-4" />
                <span>Register</span>
              </Link>
            </Button>
          </div>
        </div>

        <div className="lg:hidden flex items-center space-x-2">
          <ThemeToggle />
          <Button
            ref={hamburgerRef}
            variant="ghost"
            size="icon"
            onClick={() => {
              // When opening the mobile menu, reset any expanded accordion sections
              // so the Register/Login area (and other UI) remains visible by default.
              if (!isOpen) {
                setExpandedSections({})
              }
              setIsOpen(!isOpen)
            }}
            className={cn(
              "transition-all duration-200 ease-in-out hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
              isOpen && "bg-accent",
            )}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {isOpen && (
          <div className="lg:hidden fixed inset-0 z-40 bg-[#f5f5f5]/95 dark:bg-black backdrop-blur-md animate-in fade-in-0 duration-300 h-screen">
            <div className="flex items-center justify-between px-4 py-4 border-b border-border/30  bg-white dark:bg-black sticky top-0 z-50">
              <span className="flex items-center rounded-lg p-1 bg-white dark:bg-black">
                <span className="text-lg font-bold select-none">partnX</span>
              </span>
              <button
                onClick={closeMenu}
                className="p-2 rounded-full bg-card/80 hover:bg-accent text-foreground shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div
              ref={menuRef}
              className="container mx-auto px-4 py-6 h-full overflow-y-auto pb-32 animate-in slide-in-from-top-2 duration-300"
            >
              <nav className="flex flex-col space-y-1">
                {/* Main Navigation Sections */}
                <div className="space-y-1 pb-4 border-b border-border/50">
                  <Link
                    href="/"
                    className={cn(
                      "flex items-center px-4 py-3 text-lg font-medium rounded-lg transition-all duration-200 ease-in-out hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                      pathname === "/" && "bg-accent text-accent-foreground",
                    )}
                    onClick={closeMenu}
                  >
                    Home
                  </Link>

                  <Link
                    href="/about"
                    className={cn(
                      "flex items-center px-4 py-3 text-lg font-medium rounded-lg transition-all duration-200 ease-in-out hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                      pathname === "/about" && "bg-accent text-accent-foreground",
                    )}
                    onClick={closeMenu}
                  >
                    About
                  </Link>

                  {/* Services Section */}
                  <div className="space-y-1">
                    <button
                      onClick={() => toggleSection("services")}
                      className={cn(
                        "flex items-center justify-between w-full px-4 py-3 text-lg font-medium rounded-lg transition-all duration-200 ease-in-out hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                        pathname.startsWith("/services") && "bg-accent text-accent-foreground",
                      )}
                      aria-expanded={expandedSections.services}
                    >
                      Services
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          expandedSections.services && "rotate-180",
                        )}
                      />
                    </button>

                    {expandedSections.services && (
                      <div className="ml-4 space-y-1 animate-in slide-in-from-top-1 duration-200">
                        <Link
                          href="/services"
                          className="flex items-center px-4 py-2 text-base rounded-lg text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                          onClick={closeMenu}
                        >
                          All Services
                        </Link>
                        <div className="space-y-1 ml-2 pl-2 border-l border-border/30">
                          <Link
                            href="/services/advanced-ztna"
                            className="block px-3 py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-1 focus:ring-primary rounded touch-target"
                            onClick={closeMenu}
                          >
                            Zero Trust Network Access
                          </Link>
                          <Link
                            href="/services/managed-soc"
                            className="block px-3 py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-1 focus:ring-primary rounded touch-target"
                            onClick={closeMenu}
                          >
                            Managed SOC
                          </Link>
                          <Link
                            href="/services/endpoint-protection"
                            className="block px-3 py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-1 focus:ring-primary rounded"
                            onClick={closeMenu}
                          >
                            Endpoint Protection
                          </Link>
                          <Link
                            href="/services/ngfw"
                            className="block px-3 py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-1 focus:ring-primary rounded"
                            onClick={closeMenu}
                          >
                            Next-Gen Firewall
                          </Link>
                          <Link
                            href="/services/penetration-testing"
                            className="block px-3 py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-1 focus:ring-primary rounded"
                            onClick={closeMenu}
                          >
                            Penetration Testing
                          </Link>
                          <Link
                            href="/services/vulnerability-management"
                            className="block px-3 py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-1 focus:ring-primary rounded"
                            onClick={closeMenu}
                          >
                            Vulnerability Management
                          </Link>
                            <Link
                              href="/services/cloud-security-aws"
                              className="block px-3 py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-1 focus:ring-primary rounded"
                              onClick={closeMenu}
                            >
                              Cloud Security (AWS)
                            </Link>
                            <Link
                              href="/services/backup-dr"
                              className="block px-3 py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-1 focus:ring-primary rounded"
                              onClick={closeMenu}
                            >
                              Backup & Disaster Recovery
                            </Link>
                            <Link
                              href="/services/business-continuity"
                              className="block px-3 py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-1 focus:ring-primary rounded"
                              onClick={closeMenu}
                            >
                              Business Continuity
                            </Link>
                            <Link
                              href="/services/edr"
                              className="block px-3 py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-1 focus:ring-primary rounded"
                              onClick={closeMenu}
                            >
                              Endpoint Detection & Response (EDR)
                            </Link>
                            <Link
                              href="/services/mdm"
                              className="block px-3 py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-1 focus:ring-primary rounded"
                              onClick={closeMenu}
                            >
                              Mobile Device Management (MDM)
                            </Link>
                            <Link
                              href="/services/patch-management"
                              className="block px-3 py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-1 focus:ring-primary rounded"
                              onClick={closeMenu}
                            >
                              Patch Management
                            </Link>
                            <Link
                              href="/services/dlp"
                              className="block px-3 py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-1 focus:ring-primary rounded"
                              onClick={closeMenu}
                            >
                              Data Loss Prevention (DLP)
                            </Link>
                            <Link
                              href="/services/email-security"
                              className="block px-3 py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-1 focus:ring-primary rounded"
                              onClick={closeMenu}
                            >
                              Email Security
                            </Link>
                            <Link
                              href="/services/network-segmentation"
                              className="block px-3 py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-1 focus:ring-primary rounded"
                              onClick={closeMenu}
                            >
                              Network Segmentation
                            </Link>
                            <Link
                              href="/services/sase-swg-casb"
                              className="block px-3 py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-1 focus:ring-primary rounded"
                              onClick={closeMenu}
                            >
                              SASE / SWG / CASB
                            </Link>
                            <Link
                              href="/services/secure-sd-wan"
                              className="block px-3 py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-1 focus:ring-primary rounded"
                              onClick={closeMenu}
                            >
                              Secure SD-WAN
                            </Link>
                            <Link
                              href="/services/waf-ddos-protection"
                              className="block px-3 py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-1 focus:ring-primary rounded"
                              onClick={closeMenu}
                            >
                              WAF & DDoS Protection
                            </Link>
                            <Link
                              href="/services/xdr"
                              className="block px-3 py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-1 focus:ring-primary rounded"
                              onClick={closeMenu}
                            >
                              Extended Detection & Response (XDR)
                            </Link>
                        </div>
                      </div>
                    )}
                  </div>

                  <Link
                    href="/why-choose-us"
                    className={cn(
                      "flex items-center px-4 py-3 text-lg font-medium rounded-lg transition-all duration-200 ease-in-out hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                      pathname === "/why-choose-us" && "bg-accent text-accent-foreground",
                    )}
                    onClick={closeMenu}
                  >
                    Why Choose Us
                  </Link>

                  {/* Partners link removed from mobile menu */}

                  <Link
                    href="/contact"
                    className={cn(
                      "flex items-center px-4 py-3 text-lg font-medium rounded-lg transition-all duration-200 ease-in-out hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                      pathname === "/contact" && "bg-accent text-accent-foreground",
                    )}
                    onClick={closeMenu}
                  >
                    Contact
                  </Link>
                </div>

                {/* Secondary Sections */}
                <div className="space-y-1 py-4 border-b border-border/50">
                  {/* Blog Section */}
                  <div className="space-y-1">
                    <button
                      onClick={() => toggleSection("blog")}
                      className={cn(
                        "flex items-center justify-between w-full px-4 py-3 text-lg font-medium rounded-lg transition-all duration-200 ease-in-out hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                        pathname.startsWith("/blog") && "bg-accent text-accent-foreground",
                      )}
                      aria-expanded={expandedSections.blog}
                    >
                      Blog
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          expandedSections.blog && "rotate-180",
                        )}
                      />
                    </button>

                    {expandedSections.blog && (
                      <div className="ml-4 space-y-1 animate-in slide-in-from-top-1 duration-200">
                        <Link
                          href="/blog"
                          className="flex items-center px-4 py-2 text-base rounded-lg text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                          onClick={closeMenu}
                        >
                          All Articles
                        </Link>
                        <div className="space-y-1 ml-2 pl-2 border-l border-border/30">
                          <Link
                            href="/blog/category/threat-intelligence"
                            className="block px-3 py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-1 focus:ring-primary rounded"
                            onClick={closeMenu}
                          >
                            Threat Intelligence
                          </Link>
                          <Link
                            href="/blog/category/best-practices"
                            className="block px-3 py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-1 focus:ring-primary rounded"
                            onClick={closeMenu}
                          >
                            Best Practices
                          </Link>
                          <Link
                            href="/blog/category/industry-news"
                            className="block px-3 py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-1 focus:ring-primary rounded"
                            onClick={closeMenu}
                          >
                            Industry News
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Compliance Section */}
                  <div className="space-y-1">
                    <button
                      onClick={() => toggleSection("compliance")}
                      className={cn(
                        "flex items-center justify-between w-full px-4 py-3 text-lg font-medium rounded-lg transition-all duration-200 ease-in-out hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                        pathname.startsWith("/compliance") && "bg-accent text-accent-foreground",
                      )}
                      aria-expanded={expandedSections.compliance}
                    >
                      Compliance
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          expandedSections.compliance && "rotate-180",
                        )}
                      />
                    </button>

                    {expandedSections.compliance && (
                      <div className="ml-4 space-y-1 animate-in slide-in-from-top-1 duration-200">
                        <Link
                          href="/compliance"
                          className="flex items-center px-4 py-2 text-base rounded-lg text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                          onClick={closeMenu}
                        >
                          Overview
                        </Link>
                        <div className="space-y-1 ml-2 pl-2 border-l border-border/30">
                          <Link
                            href="/compliance/privacy-policy"
                            className="block px-3 py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-1 focus:ring-primary rounded"
                            onClick={closeMenu}
                          >
                            Privacy Policy
                          </Link>
                          <Link
                            href="/compliance/terms-of-service"
                            className="block px-3 py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-1 focus:ring-primary rounded"
                            onClick={closeMenu}
                          >
                            Terms of Service
                          </Link>
                          <Link
                            href="/compliance/certifications"
                            className="block px-3 py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-1 focus:ring-primary rounded"
                            onClick={closeMenu}
                          >
                            Certifications
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Login/Register Buttons - Mobile (Visually Separated) */}
                <div className="mt-8 pt-6 border-t border-border/50 space-y-3 bg-background/80 dark:bg-black">
                  <Button
                    variant="outline"
                    className="w-full rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 flex items-center gap-2 shadow-sm px-5 py-2"
                  >
                    <Link href="/login" onClick={closeMenu} className="flex items-center gap-2 w-full px-2 py-1">
                      <Shield className="h-4 w-4" />
                      <span>Login</span>
                    </Link>
                  </Button>
                  <Button
                    variant="default"
                    className="w-full rounded-full bg-primary text-white hover:bg-primary/90 transition-all duration-200 flex items-center gap-2 shadow-sm px-5 py-2"
                  >
                    <Link href="/register" onClick={closeMenu} className="flex items-center gap-2 w-full px-2 py-1">
                      <Menu className="h-4 w-4" />
                      <span>Register</span>
                    </Link>
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

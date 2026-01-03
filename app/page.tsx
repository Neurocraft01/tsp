"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  CheckCircle2,
  ShieldCheck,
  HardDrive,
  Mail,
  Wrench,
  RefreshCw,
  Cloud,
  Users,
  Phone,
  MessageSquare,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

// Add smooth scrolling behavior
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId.replace("#", ""))
  if (element) {
    const headerOffset = 80 // Account for sticky header
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }
}

function Brand() {
  return (
    <Link href="#" className="flex items-center gap-3" aria-label="TSP Computers Home">
      <Image
        src="/images/tsp-logo.png"
        alt="TSP Computers logo"
        width={40}
        height={40}
        className="h-10 w-10"
        priority
      />
      <div className="flex flex-col leading-tight">
        <span className="text-base font-semibold tracking-wide text-slate-900">TSP Computers</span>
        <span className="text-xs text-slate-500">Your Trusted IT Partner</span>
      </div>
    </Link>
  )
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Brand />
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm text-slate-600 hover:text-slate-900 cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("platforms")}
              className="text-sm text-slate-600 hover:text-slate-900 cursor-pointer"
            >
              Cloud Suites
            </button>
            <button
              onClick={() => scrollToSection("why")}
              className="text-sm text-slate-600 hover:text-slate-900 cursor-pointer"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection("mission")}
              className="text-sm text-slate-600 hover:text-slate-900 cursor-pointer"
            >
              Mission
            </button>
            <button
              onClick={() => scrollToSection("clients")}
              className="text-sm text-slate-600 hover:text-slate-900 cursor-pointer"
            >
              Clients
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm text-slate-600 hover:text-slate-900 cursor-pointer"
            >
              Contact
            </button>
          </nav>
          <div className="hidden sm:flex items-center gap-2">
            <Button
              asChild
              variant="outline"
              className="border-lime-300 text-slate-700 hover:bg-lime-50 bg-transparent"
            >
              <a href="tel:+918169992609">
                <Phone className="mr-2 h-4 w-4" /> Call
              </a>
            </Button>
            <Button asChild className="bg-sky-600 hover:bg-sky-700">
              <a href="https://wa.me/918169992609" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="mr-2 h-4 w-4" /> WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="bg-gradient-to-b from-sky-50 via-white to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Badge className="bg-lime-200 text-slate-800 hover:bg-lime-200">
              Simplifying Tech, Empowering Business
            </Badge>
            <h1 className="mt-4 text-3xl md:text-5xl font-bold text-slate-900">
              Complete IT Solutions for your Business
            </h1>
            <p className="mt-4 text-slate-600 text-base md:text-lg">
              You focus on growing your business. We'll manage your IT – professionally, securely, and affordably.
            </p>
            <p className="mt-6 text-slate-700 leading-relaxed">
              We provide system setup, antivirus, cloud email, and data backup as a trusted <span className="font-bold">IT Service Company in Pune</span>, offering collaboration tools,<span className="font-bold"> IT support services, Managed IT Services, and IT AMC service.</span>
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700">
                <a href="https://forms.gle/h9aH9GyJddgUVwY49" target="_blank" rel="noopener noreferrer">
                  Get Free Consultation
                </a>
              </Button>
              <Button
                onClick={() => scrollToSection("services")}
                size="lg"
                variant="outline"
                className="border-slate-300 bg-transparent cursor-pointer"
              >
                Explore Services
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
              <div className="flex -space-x-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-lime-300 text-[10px] font-bold text-slate-800">
                  100+
                </span>
              </div>
              <span>Happy business clients</span>
              <span className="hidden md:inline">•</span>
              <span className="hidden md:inline">Free demo setup for cloud suites</span>
            </div>
          </div>
          <div className="relative">
            <Image
              src="https://i.postimg.cc/qBYMMTmp/indian-asian-young-business-professionals-600nw-2474120445.webp"
              alt="Illustrative hero image placeholder"
              width={720}
              height={520}
              className="rounded-xl border shadow-sm bg-white object-cover"
              priority
            />
            <div className="absolute -top-3 -left-3 h-16 w-16 rounded-lg bg-lime-200/60" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  const items = [
    {
      icon: <Wrench className="h-5 w-5" />,
      title: "Computer & Hardware Support",
      bullets: [
        "Desktop / laptop setup & troubleshooting",
        "Printer, scanner & router installation",
        "Wi‑Fi and LAN setup",
        "Hardware repair & upgrades",
      ],
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Business Email & Collaboration",
      bullets: [
        "Microsoft 365, Google Workspace, Zoho Workplace",
        "Business email with your domain",
        "Secure admin setup & onboarding",
        "Team sharing: OneDrive / Drive / WorkDrive",
      ],
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "Cybersecurity & Antivirus",
      bullets: [
        "Antivirus with auto‑updates",
        "Web protection & firewall",
        "Spam & phishing filters",
        "Ransomware prevention",
      ],
    },
    {
      icon: <Cloud className="h-5 w-5" />,
      title: "Data Backup & Recovery",
      bullets: [
        "Cloud or external HDD backups",
        "Daily/weekly auto‑backup",
        "Safe restore after crash or loss",
        "OneDrive / Drive / WorkDrive",
      ],
    },
    {
      icon: <HardDrive className="h-5 w-5" />,
      title: "Software Installation & Licensing",
      bullets: [
        "Genuine Office, Tally, Adobe & more",
        "License management",
        "Staff training",
        "Ongoing updates & support",
      ],
    },
    {
      icon: <RefreshCw className="h-5 w-5" />,
      title: "Annual Maintenance Contract (AMC)",
      bullets: [
        "Remote & on‑site IT support",
        "System cleaning & tuning",
        "Quick troubleshooting & health checks",
        "Priority response for AMC clients",
      ],
    },
  ]
  return (
    <section id="services" className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Our Core IT Services</h2>
          <p className="mt-3 text-slate-600">Essential, reliable, and cost‑effective IT solutions for businesses.</p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((card, i) => (
            <Card key={i} className="border-sky-100 hover:shadow-sm transition">
              <CardHeader>
                <div className="inline-flex items-center justify-center rounded-md bg-sky-50 text-sky-700 p-2">
                  {card.icon}
                </div>
                <CardTitle className="mt-3 text-lg">{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  {card.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-lime-500 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function Platforms() {
  const suites = [
    {
      name: "Microsoft 365",
      logo: "https://i.postimg.cc/8c1HvBTT/microsoft-365-copilot-logo-png-seeklogo-501781.png",
      description: "Complete productivity suite with enterprise-grade security",
      features: [
        "Professional email (name@yourcompany.com)",
        "Word, Excel, PowerPoint, Outlook & Teams",
        "SharePoint for secure document collaboration",
        "OneDrive cloud storage with advanced sync",
        "Advanced security & compliance tools",
        "24/7 Microsoft support included",
      ],
      highlight: "Most Popular",
      color: "border-blue-200 bg-blue-50/50",
      badgeColor: "bg-blue-100 text-blue-800",
    },
    {
      name: "Google Workspace",
      logo: "https://i.postimg.cc/B63cWcL2/google-workspace-logo.webp",
      description: "Seamless collaboration tools built for modern teams",
      features: [
        "Gmail for business with custom domain",
        "Google Drive, Docs, Sheets & Meet",
        "Advanced admin console & security",
        "Smart calendar & scheduling tools",
        "Real-time collaboration features",
        "Mobile-first design & accessibility",
      ],
      highlight: "Best for Collaboration",
      color: "border-emerald-200 bg-emerald-50/50",
      badgeColor: "bg-emerald-100 text-emerald-800",
    },
    {
      name: "Zoho Workplace",
      logo: "https://i.postimg.cc/Dzk1sdcR/images.png",
      description: "Cost-effective business suite with comprehensive features",
      features: [
        "Zoho Mail with professional domain",
        "Zoho Docs, Writer, Sheet & Show",
        "Cliq team chat & WorkDrive storage",
        "Integrated CRM & business apps",
        "Budget-friendly pricing plans",
        "Dedicated setup & training support",
      ],
      highlight: "Best Value",
      color: "border-orange-200 bg-orange-50/50",
      badgeColor: "bg-orange-100 text-orange-800",
    },
  ]

  return (
    <section id="platforms" className="py-20 md:py-24 bg-gradient-to-b from-white to-sky-50/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Badge className="bg-lime-200 text-slate-800 hover:bg-lime-200 mb-4">Cloud Productivity Solutions</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Professional Email & Collaboration Platforms
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Transform your business communication with enterprise-grade cloud solutions. We provide complete setup,
            migration, training, and ongoing support for your team.
          </p>
        </div>

        {/* Platform Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {suites.map((suite, i) => (
            <Card
              key={i}
              className={cn("relative overflow-hidden hover:shadow-lg transition-all duration-300", suite.color)}
            >
              {/* Highlight Badge */}
              <div className="absolute top-4 right-4">
                <Badge className={suite.badgeColor}>{suite.highlight}</Badge>
              </div>

              <CardHeader className="pb-4">
                {/* Logo */}
                <div className="flex items-center justify-center h-16 w-full mb-4">
                  <Image
                    src={suite.logo || "/placeholder.svg"}
                    alt={`${suite.name} logo`}
                    width={120}
                    height={40}
                    className="h-10 w-auto object-contain"
                  />
                </div>

                <CardTitle className="text-xl font-bold text-center text-slate-900">{suite.name}</CardTitle>
                <p className="text-sm text-slate-600 text-center mt-2">{suite.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3">
                  {suite.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-lime-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-700 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-4 border-t border-slate-200">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>✓ Migration support</span>
                    <span>✓ 7-day trial available</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 rounded-lg bg-white border border-slate-200">
            <div className="inline-flex items-center justify-center rounded-full bg-sky-100 p-3 mb-4">
              <ShieldCheck className="h-6 w-6 text-sky-700" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Secure Migration</h3>
            <p className="text-sm text-slate-600">
              Complete data migration with zero downtime and full security compliance
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-white border border-slate-200">
            <div className="inline-flex items-center justify-center rounded-full bg-lime-100 p-3 mb-4">
              <Users className="h-6 w-6 text-lime-700" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Team Training</h3>
            <p className="text-sm text-slate-600">
              Comprehensive training sessions to maximize productivity and adoption
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-white border border-slate-200">
            <div className="inline-flex items-center justify-center rounded-full bg-sky-100 p-3 mb-4">
              <RefreshCw className="h-6 w-6 text-sky-700" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Ongoing Support</h3>
            <p className="text-sm text-slate-600">24/7 technical support and regular system optimization services</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700">
              <a href="https://forms.gle/h9aH9GyJddgUVwY49" target="_blank" rel="noopener noreferrer">
                <Mail className="mr-2 h-5 w-5" />
                Request Free Demo & Quote
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-slate-300 bg-transparent">
              <a href="mailto:business@tspgroup.co.in">
                <MessageSquare className="mr-2 h-5 w-5" />
                Speak with Expert
              </a>
            </Button>
          </div>
          <p className="text-sm text-slate-500 mt-4">Free consultation • Fast setup & deployment</p>
        </div>
      </div>
    </section>
  )
}

function WhyChoose() {
  const points = [
    "Expert team with proven IT support experience",
    "Trusted Microsoft 365 partner in Pune offering end-to-end Microsoft 365 solutions",
    "Complete setup for Microsoft 365, Google Workspace & Zoho Workplace",
    "Affordable and flexible service plans",
    "100+ satisfied business clients",
    "Free consultation & demo setup",
  ]
  return (
    <section id="why" className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Why Choose TSP Computers?</h2>
            <p className="mt-3 text-slate-600">
              Reliable partner to modernise your IT—securely and without complexity.
            </p>
            <ul className="mt-6 space-y-2 text-slate-700">
              {points.map((p, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-lime-600 mt-0.5" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-3">
              <Button onClick={() => scrollToSection("services")} variant="outline" className="cursor-pointer">
                See All Services
              </Button>
              <Button asChild className="bg-sky-600 hover:bg-sky-700">
                <a href="#contact">Contact Us</a>
              </Button>
            </div>
          </div>
          <div>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src="https://i.postimg.cc/Xv7pBg9W/india-office-i-Stock.jpg"
                  alt="Modern Indian office environment"
                  width={720}
                  height={420}
                  className="object-cover"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

function MissionVision() {
  return (
    <section id="mission" className="py-16 md:py-20 bg-gradient-to-b from-sky-50/30 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Our Mission & Vision</h2>
          <p className="mt-3 text-slate-600">Driving digital transformation for businesses with purpose and clarity.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <Card className="border-sky-100 bg-white shadow-sm">
            <CardHeader className="text-center">
              <div className="mx-auto inline-flex items-center justify-center rounded-full bg-sky-100 p-3">
                <Users className="h-6 w-6 text-sky-700" />
              </div>
              <CardTitle className="text-xl text-slate-900">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 leading-relaxed">
                To empower businesses with reliable, secure, and affordable IT solutions for businesses in Pune. As a trusted IT solutions provider and IT support company, we deliver professional IT support in Pune, dependable network support, and modern technology solutions that simplify operations, protect data, and drive business growth.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="outline" className="border-lime-300 text-lime-700">
                  Reliable
                </Badge>
                <Badge variant="outline" className="border-lime-300 text-lime-700">
                  Secure
                </Badge>
                <Badge variant="outline" className="border-lime-300 text-lime-700">
                  Affordable
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Vision Card */}
          <Card className="border-lime-100 bg-white shadow-sm">
            <CardHeader className="text-center">
              <div className="mx-auto inline-flex items-center justify-center rounded-full bg-lime-100 p-3">
                <ShieldCheck className="h-6 w-6 text-lime-700" />
              </div>
              <CardTitle className="text-xl text-slate-900">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 leading-relaxed">
                To become the most trusted IT service partner for businesses across India by delivering smart, future-ready technology solutions. We strive to lead in Corporate IT services, IT AMC services, computer repair, and computer & hardware support services in Pune, with a strong focus on service quality, customer success, and continuous innovation.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="outline" className="border-sky-300 text-sky-700">
                  Trusted Partner
                </Badge>
                <Badge variant="outline" className="border-sky-300 text-sky-700">
                  Future-Ready
                </Badge>
                <Badge variant="outline" className="border-sky-300 text-sky-700">
                  Innovation
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Supporting Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-sky-700">100+</div>
            <div className="text-sm text-slate-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-sky-700">5+</div>
            <div className="text-sm text-slate-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-sky-700">24/7</div>
            <div className="text-sm text-slate-600">Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-sky-700">99%</div>
            <div className="text-sm text-slate-600">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Clients() {
  const clientLogos = [
    {
      name: "Framehome",
      src: "/images/clients/framehome.png",
      alt: "Framehome - Real Estate Solutions",
    },
    {
      name: "Kalyani",
      src: "/images/clients/kalyani.webp",
      alt: "Kalyani Group - Industrial Solutions",
    },
    {
      name: "Lovejoy India",
      src: "/images/clients/lovejoy.webp",
      alt: "Rathi Transpower Pvt. Ltd.",
    },
    {
      name: "RXIL",
      src: "/images/clients/rxil.webp",
      alt: "RXIL - NSE SIDBI Joint Venture",
    },
    {
      name: "TBEA",
      src: "/images/clients/tbea.webp",
      alt: "TBEA - Power Equipment Solutions",
    },
    {
      name: "World Trade Centre Mumbai",
      src: "/images/clients/wtc-mumbai.webp",
      alt: "World Trade Centre Mumbai",
    },
    {
      name: "Core Integra",
      src: "/images/clients/core-integra.webp",
      alt: "Core Integra - Business Solutions",
    },
    {
      name: "Vertex",
      src: "/images/clients/vertex.webp",
      alt: "Vertex - Technology Solutions",
    },
  ]

  return (
    <section id="clients" className="py-16 md:py-20 bg-sky-50/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Our Trusted Partners</h2>
          <p className="mt-3 text-slate-600">
            We support businesses across retail, services, manufacturing, and enterprises with reliable IT solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {clientLogos.map((client, i) => (
            <Card key={i} className="border-slate-200 hover:shadow-md transition-shadow duration-300">
              <CardContent className="flex h-24 items-center justify-center p-4">
                <Image
                  src={client.src || "/placeholder.svg"}
                  alt={client.alt}
                  width={140}
                  height={60}
                  className="max-h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-6">
            Join our growing family of satisfied clients who trust us with their IT infrastructure
          </p>
          <Button asChild className="bg-sky-600 hover:bg-sky-700">
            <a href="https://forms.gle/h9aH9GyJddgUVwY49" target="_blank" rel="noopener noreferrer">
              Become Our Next Success Story
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

function ContactCTA() {
  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="rounded-2xl border bg-white">
          <div className="p-6 sm:p-10 bg-gradient-to-br from-white via-white to-sky-50/60">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900">Let's Modernise Your Business IT</h3>
                <p className="mt-2 text-slate-600">
                  Upgrade your email, secure your data, and simplify your tech. We make it easy, fast, and affordable.
                </p>
                <div className="mt-4 flex flex-wrap gap-3 text-sm">
                  <Badge className="bg-lime-200 text-slate-800 hover:bg-lime-200">Free consultation</Badge>
                  <Badge variant="outline" className="border-slate-300">
                    Demo setup for Microsoft 365 / Workspace / Zoho
                  </Badge>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Button asChild size="lg" variant="outline" className="border-slate-300 bg-transparent">
                  <a href="tel:+918169992609">
                    <Phone className="mr-2 h-4 w-4" /> 8169992609
                  </a>
                </Button>
                <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700">
                  <a href="mailto:computers@tspgroup.co.in">computers@tspgroup.co.in</a>
                </Button>
              </div>
            </div>
            <Separator className="my-6" />
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-lime-600" />
                <span className="text-slate-700 text-sm">Secure by default</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-lime-600" />
                <span className="text-slate-700 text-sm">Friendly support</span>
              </div>
              <div className="flex items-center gap-3">
                <Cloud className="h-5 w-5 text-lime-600" />
                <span className="text-slate-700 text-sm">Cloud‑ready solutions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SiteFooter() {
  return (
    <footer className="bg-sky-900 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/images/tsp-logo.png" alt="TSP logo" width={32} height={32} className="h-8 w-8" />
              <span className="font-semibold text-white">TSP Computers</span>
            </div>
            <p className="mt-3 text-sm text-slate-400">Reliable & Trusted. End‑to‑end IT support for businesses.</p>
            <div className="mt-4 flex gap-4">
              <a href="https://www.facebook.com/tspcomputers" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://www.instagram.com/tsp.computers?igsh=Zno0cnU1a256NnJo" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
            <div className="mt-4 text-sm text-slate-400">
              <p className="font-semibold text-white mb-1">Head Office:</p>
              <p>450, Padmawati Towers, Office No 3,</p>
              <p>Amrai Ali, Bhor, Pune,</p>
              <p>Maharashtra, India 412206</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-white cursor-pointer text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("platforms")}
                  className="hover:text-white cursor-pointer text-left"
                >
                  Cloud Suites
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("why")} className="hover:text-white cursor-pointer text-left">
                  Why Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("mission")}
                  className="hover:text-white cursor-pointer text-left"
                >
                  Mission & Vision
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("clients")}
                  className="hover:text-white cursor-pointer text-left"
                >
                  Clients
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-white cursor-pointer text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href="tel:+918169992609" className="hover:text-white">
                  📞 8169992609
                </a>
              </li>
              <li>
                <a href="mailto:computers@tspgroup.co.in" className="hover:text-white">
                  📧 computers@tspgroup.co.in
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/918169992609"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  💬 WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Separator className="my-8 bg-sky-700" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p className="text-sm text-slate-500">&copy; 2025 TSP Business Services and Solutions Pvt Ltd. All rights reserved.</p>
          <span>Created by DevTiwari Innovations Pvt Ltd</span>
        </div>
      </div>
    </footer>
  )
}

export default function Page() {
  return (
    <main className="bg-white">
      <a href="#main" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <SiteHeader />
      <Hero />
      <Services />
      <Platforms />
      <WhyChoose />
      <MissionVision />
      <Clients />
      <ContactCTA />
      <SiteFooter />
    </main>
  )
}

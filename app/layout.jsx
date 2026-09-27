import "@fontsource/jetbrains-mono/400.css";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTranstion";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-primary",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://cyprian-portfolio.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Cyprian Ocharo | Software Engineer & Full-Stack Developer",
    template: "%s | Cyprian Ocharo",
  },
  description:
    "Cyprian Ocharo is a Software Engineer based in Nairobi, Kenya specializing in Next.js, React, Laravel 11, PHP, and scalable cloud systems. Developer of SkolarTrak SIS & E-Library and DreamRoots Kenya Consultancy.",
  keywords: [
    "Cyprian Ocharo",
    "Software Engineer Kenya",
    "Full Stack Developer Nairobi",
    "Next.js Developer",
    "React Developer",
    "Laravel Developer Kenya",
    "SkolarTrak",
    "SkolarTrak SIS",
    "DreamRoots Kenya",
    "DreamRoots Consultancy",
    "CBC School Management System",
    "EdTech Kenya",
    "M-Pesa Integration Developer",
    "Web Developer Nairobi",
  ],
  authors: [{ name: "Cyprian Ocharo", url: siteUrl }],
  creator: "Cyprian Ocharo",
  publisher: "Cyprian Ocharo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Cyprian Ocharo | Software Engineer & Full-Stack Developer",
    description:
      "Crafting production-grade software platforms, school information systems, and high-performance web applications.",
    url: siteUrl,
    siteName: "Cyprian Ocharo Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyprian Ocharo | Software Engineer",
    description:
      "Software Engineer specializing in Next.js, React, Laravel, and cloud architectures. Developer of SkolarTrak & DreamRoots Kenya.",
    creator: "@cyprianocharo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "08c267d0f3ef212c",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Cyprian Ocharo",
      givenName: "Cyprian",
      familyName: "Ocharo",
      jobTitle: "Software Engineer",
      description:
        "Full-Stack Software Engineer building modern web apps, school management systems (SIS), and cloud architectures with Next.js, React, Laravel, and PHP.",
      url: siteUrl,
      email: "mailto:ocharo.dev@gmail.com",
      telephone: "+254788523896",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nairobi",
        addressRegion: "Ongata Rongai",
        addressCountry: "KE",
      },
      sameAs: [
        "https://github.com/cyprian-c",
        "https://linkedin.com/in/cyprian-ocharo",
        "https://x.com/cyprianocharo",
        "https://instagram.com/_ocharo",
      ],
      knowsAbout: [
        "Software Engineering",
        "Next.js",
        "React",
        "Laravel",
        "PHP",
        "JavaScript",
        "Tailwind CSS",
        "MySQL",
        "M-Pesa API Integration",
        "Competency-Based Curriculum (CBC) Systems",
        "Student Information Systems (SIS)",
        "Search Engine Optimization (SEO)",
        "Generative Engine Optimization (GEO)",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Cyprian Ocharo Portfolio",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
      description:
        "Personal portfolio and flagship engineering showcase of Cyprian Ocharo.",
      inLanguage: "en-US",
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/#featured-projects`,
      name: "Featured Engineering Projects by Cyprian Ocharo",
      itemListElement: [
        {
          "@type": "SoftwareApplication",
          position: 1,
          name: "SkolarTrak SIS & E-Library",
          url: "https://skolartrak.com",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Cloud / Web",
          description:
            "Production-grade Student Information System and CBC Digital E-Library built for Kenyan primary schools and Junior Secondary Schools.",
          author: {
            "@id": `${siteUrl}/#person`,
          },
        },
        {
          "@type": "WebSite",
          position: 2,
          name: "DreamRoots Kenya Consultancy",
          url: "https://dreamrootskenya.com",
          description:
            "Executive advisory and management consultancy platform for East African corporate and educational development.",
          author: {
            "@id": `${siteUrl}/#person`,
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="author" href="/llms.txt" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${jetbrainsMono.variable} font-primary`}>
        <Header />
        <PageTransition>{children}</PageTransition>
        <StairTransition />
      </body>
    </html>
  );
}

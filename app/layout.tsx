import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Matias Guevara - Full Stack Software Engineer | Web Developer",
    template: "%s | Matias Guevara - Software Engineer",
  },
  description:
    "Experienced Full Stack Software Engineer specializing in modern web applications. Expert in React, Next.js, Node.js, TypeScript, and cloud technologies. Available for freelance projects and full-time opportunities.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Backend Developer",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Matias Guevara",
    "Portfolio",
    "Web Applications",
    "Software Development",
    "Freelancer",
  ],
  authors: [{ name: "Matias Guevara" }],
  creator: "Matias Guevara",
  publisher: "Matias Guevara",
  metadataBase: new URL("https://tudominio.com"), // Cambia por tu dominio real
  alternates: {
    canonical: "https://tudominio.com", // Cambia por tu dominio real
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tudominio.com", // Cambia por tu dominio real
    siteName: "Matias Guevara Portfolio",
    title: "Matias Guevara - Full Stack Software Engineer",
    description:
      "Experienced Full Stack Software Engineer specializing in modern web applications. Expert in React, Next.js, Node.js, TypeScript, and cloud technologies.",
    images: [
      {
        url: "/og-image.jpg", // Crea esta imagen (1200x630px recomendado)
        width: 1200,
        height: 630,
        alt: "Matias Guevara - Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matias Guevara - Full Stack Software Engineer",
    description:
      "Experienced Full Stack Software Engineer specializing in modern web applications. Expert in React, Next.js, Node.js, TypeScript, and cloud technologies.",
    images: ["/og-image.jpg"], // La misma imagen de OpenGraph
    creator: "@tutwitter", // Cambia por tu handle de Twitter si tienes
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "tu-codigo-de-verificacion-de-google", // Opcional: para Google Search Console
    // yandex: "tu-codigo-yandex",
    // yahoo: "tu-codigo-yahoo",
    // other: {
    //   bing: "tu-codigo-bing",
    // },
  },
  category: "technology",
  classification: "Software Development Portfolio",
  other: {
    "linkedin:profile": "https://linkedin.com/in/tu-perfil", // Cambia por tu LinkedIn
    "github:profile": "https://github.com/tu-usuario", // Cambia por tu GitHub
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicons mejorados */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Preconnect para mejorar performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Matias Guevara",
              jobTitle: "Software Engineer",
              description:
                "Experienced Full Stack Software Engineer specializing in modern web applications",
              url: "https://tudominio.com", // Cambia por tu dominio
              sameAs: [
                "https://linkedin.com/in/tu-perfil", // Cambia por tu LinkedIn
                "https://github.com/tu-usuario", // Cambia por tu GitHub
                "https://twitter.com/tutwitter", // Cambia por tu Twitter si tienes
              ],
              knowsAbout: [
                "Software Engineering",
                "Full Stack Development",
                "React",
                "Next.js",
                "Node.js",
                "TypeScript",
                "JavaScript",
                "Web Development",
              ],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Tu Universidad", // Opcional: agrega tu universidad
              },
              worksFor: {
                "@type": "Organization",
                name: "Freelancer", // O tu empresa actual
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

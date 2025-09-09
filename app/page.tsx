import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { SkillBadge } from "@/components/skill-badge";
import { Timeline } from "@/components/timeline";
import { ContactForm } from "@/components/contact-form";
import { CreativeHero } from "@/components/creative-hero";
import { FloatingNav } from "@/components/floating-nav";
import { MouseFollower } from "@/components/mouse-follower";
import { ScrollProgress } from "@/components/scroll-progress";
import { SectionHeading } from "@/components/section-heading";
import { GlassmorphicCard } from "@/components/glassmorphic-card";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 mt-4">
                <span className="relative z-10">
                  Software Engineer & Creative Developer
                </span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 animate-pulse"></span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-600">
                Matías Hernán Guevara
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-[600px]">
              I craft exceptional digital experiences with code, creativity, and
              a passion for innovation.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="relative overflow-hidden group bg-gradient-to-r from-blue-500 to-purple-500 border-0">
                <Link href={"#projects"}>
                  <span className="relative z-10 flex items-center">
                    View Projects{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-zinc-700 text-purple-500 hover:text-blue-700 hover:border-zinc-500 bg-transparent"
              >
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <Link
                href="https://github.com/Big-Sh4rk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/matias-guevara15/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:chlmatias.guevara@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <CreativeHero />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="About Me"
            subtitle="My background and journey"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl opacity-70"></div>
              <div className="relative w-full h-full aspect-square rounded-xl overflow-hidden border border-zinc-800">
                <img
                  src="/matias-pic.webp?height=600&width=600"
                  alt="Matías Hernán Guevara"
                  className="object-left"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <GlassmorphicCard>
                <p className="text-lg text-zinc-300">
                  I'm a passionate software engineer with experience building
                  web applications and digital products. I specialize in
                  software development with React and Next.js, Golang, NodeJS
                  with Express, databases like PostgreSQL and MongoDB.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  More than 7 years of experience as a Software Developer. I
                  headed product migration with traffic of more than 5 million
                  daily users, and the creation from scratch of different
                  projects, applying new trends such as Micro-Frontends,
                  achieving scalability in the products. Fan of DevOps culture
                  and exploring new technologies.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  When I'm not programming, you can find me exploring new
                  technologies and finding my place with my own startup.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Name</div>
                    <div className="font-medium">Matías Hernán Guevara</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium break-all">
                      chlmatias.guevara@gmail.com
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Location</div>
                    <div className="font-medium">Europe</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Availability</div>
                    <div className="font-medium text-green-500">
                      Open to opportunities
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:bg-zinc-700 animate-pulse text-white shadow-sm shadow-pink-500/50">
                    <Link
                      href={
                        "https://drive.google.com/uc?export=download&id=1JUKePZwDRqaIPyPac2Zcdpim8XR1jHiV"
                      }
                    >
                      Download Resume
                    </Link>
                  </Button>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="My Skills"
            subtitle="Technologies I work with"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
            {/* Fila 1 */}
            <SkillBadge name="JavaScript" level={90} />
            <SkillBadge name="TypeScript" level={90} />
            <SkillBadge name="Go" level={95} />
            <SkillBadge name="React" level={95} />
            {/* Fila 2 */}
            <SkillBadge name="Node.js" level={95} />
            <SkillBadge name="Express" level={90} />
            <SkillBadge name="Next.js" level={80} />
            <SkillBadge name="Tailwind CSS" level={90} />
            {/* Fila 3 */}
            <SkillBadge name="MongoDB" level={75} />
            <SkillBadge name="PostgreSQL" level={70} />
            <SkillBadge name="AWS" level={65} />
            <SkillBadge name="GCP" level={65} />
            {/* Fila 4 */}
            <SkillBadge name="Docker" level={70} />
            <SkillBadge name="Kubernetes" level={60} />
            <SkillBadge name="CI/CD" level={60} />
            <SkillBadge name="Git" level={85} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="Featured Projects"
            subtitle="Some of my recent work"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ProjectCard
              title="Ride Sharing"
              description="This application emulates the microservices system for a Uber‑style ride‑sharing app"
              tags={[
                "Golang",
                "Microservices",
                "gRPC",
                "Docker",
                "Kubernetes",
                "RabbitMQ",
                "PostgreSQL",
                "Socket",
              ]}
              image="/project/ride-sharing.webp?height=400&width=600"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title="Social App"
              description="A RESTful API for a social media platform with user authentication and post management. Using Clean Architecture."
              tags={["Golang", "Postgre", "Docker"]}
              image="/project/social-app.webp?height=400&width=600"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title="Microfrontends Architecture"
              description="Frontend application using microfrontends architecture with Module Federation, allowing independent deployment and scaling of features."
              tags={[
                "React",
                "Microfrontends",
                "Module Federation",
                "NX",
                "Webpack",
                "Tailwind CSS",
                "TypeScript",
              ]}
              image="/project/microfronts.webp?height=400&width=600"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title="Influencer Portfolio"
              description="A portfolio website for an influencer showcasing their work and achievements, so can have more visibility for collaborations."
              tags={[
                "Next.js",
                "React",
                "TypeScript",
                "Framer Motion",
                "Re Send",
                "Cloudflare",
              ]}
              image="/project/influencer-portfolio.webp??height=400&width=600"
              demoUrl="https://0124c33f.lazaplays.pages.dev/"
            />
            <ProjectCard
              title="Currency and Taxes Dashboard"
              description="A dashboard application for managing currency exchange rates and tax calculations for every country."
              tags={[
                "Next.js",
                "React",
                "Tailwind CSS",
                "TypeScript",
                "Firebase",
                "Cloudflare",
              ]}
              image="/project/cur-and-tax.webp?height=400&width=600"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title="Veterinary Clinic Management"
              description="A RESTful API to manage animal appointments, keep medical records, and track medication stock."
              tags={[
                "Node.js",
                "Express",
                "MongoDB",
                "Mongoose",
                "Docker",
                "JWT",
              ]}
              image="/project/veterinary.webp?height=400&width=600"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title="Chat Application"
              description="This real-time chat application allows users to communicate in channels and direct messages."
              tags={[
                "Next.js",
                "React",
                "Tailwind CSS",
                "TypeScript",
                "Node.js",
                "Express",
                "Socket",
                "Auth0",
                "Firebase",
              ]}
              image="/project/chat-app.webp?height=400&width=600"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title="Grit Solutions"
              description="My own startup project. We have some projects powered by AI as a Service and other products that are Software as a Service. In addition to consulting, we also develop software for other companies."
              tags={[
                "Next.js",
                "Tailwind CSS",
                "Framer Motion",
                "TypeScript",
                "Re Send",
                "Cloudflare",
              ]}
              image="/project/grit-solutions.webp?height=400&width=600"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title="Portfolio Website"
              description="This portfolio website built with Next.js and Tailwind CSS."
              tags={[
                "Next.js",
                "Tailwind CSS",
                "Framer Motion",
                "TypeScript",
                "Re Send",
                "Cloudflare",
              ]}
              image="/project/portfolio-web.webp?height=400&width=600"
              demoUrl="https://matias-guevara.pages.dev/"
              repoUrl="https://github.com/Big-Sh4rk/portfolio"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="Work Experience"
            subtitle="My professional journey"
          />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Get In Touch" subtitle="Let's work together" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">
                      chlmatias.guevara@gmail.com
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">LinkedIn</div>
                    <div className="font-medium">
                      linkedin.com/in/matias-guevara15/
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Github className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">GitHub</div>
                    <div className="font-medium">github.com/Big-Sh4rk</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-800">
                <h4 className="text-lg font-medium mb-4">Current Status</h4>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span>Available for full-time opportunities</span>
                </div>
              </div>
            </GlassmorphicCard>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-600">
                Matias
              </span>
              <span className="text-white">HG</span>
            </Link>
            <p className="text-sm text-zinc-500 mt-2">
              © {new Date().getFullYear()} Matías Hernán Guevara. All rights
              reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="https://github.com/Big-Sh4rk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/matias-guevara15/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:chlmatias.guevara@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

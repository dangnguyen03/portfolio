'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Header } from '../components/Header'
import { ProjectCard } from '../components/project-card'
import { Certificates } from '../components/certificates'
import { ContactForm } from '../components/contact-form'
import { Footer } from '../components/footer'

const blogPosts = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution built with Next.js, featuring a modern UI and seamless payment integration.',
    date: 'June 2023',
    image: '/placeholder.svg?height=600&width=800',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A beautiful and intuitive task management application with real-time updates.',
    date: 'July 2023',
    image: '/placeholder.svg?height=600&width=800',
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'A modern weather dashboard with beautiful visualizations and accurate forecasts.',
    date: 'August 2023',
    image: '/placeholder.svg?height=600&width=800',
  }
]

const certificates = [
  { name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', year: 2023 },
  { name: 'Google UX Design Professional Certificate', issuer: 'Google', year: 2022 },
  { name: 'React Native Specialist', issuer: 'Meta', year: 2022 },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-neutral-900 dark:text-white">
      <Header />

      <main className="container mx-auto px-4 py-24">
        {/* Hero Section */}
        <section id="about" className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-6xl font-bold leading-tight mb-6">
                <span className="inline-block">
                  I{' '}
                  <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                    design products
                  </span>
                </span>
                <br />
                that delight and
                <br />
                inspire people.
              </h1>
              <p className="text-xl text-neutral-600 dark:text-neutral-300 mb-8">
                Hi! I&apos;m Jake, a product designer based in Berlin. I create 
                user-friendly interfaces for fast-growing startups.
              </p>
              <div className="flex items-center gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="#contact"
                    className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full inline-block font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
                  >
                    Book a call
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/cv"
                    className="text-neutral-900 dark:text-white font-medium inline-flex items-center gap-2 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
                  >
                    Download CV
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <Image
                src="/placeholder.svg"
                alt="Portrait"
                width={600}
                height={600}
                className="rounded-2xl grayscale"
                priority
              />
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogPosts.map((post) => (
              <ProjectCard key={post.id} {...post} />
            ))}
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Certifications</h2>
          <Certificates certificates={certificates} />
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
          <ContactForm />
        </section>
      </main>

      <Footer />

      {/* Webflow Badge */}
      <div className="fixed bottom-4 right-4">
        <a
          href="https://webflow.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#4353FF] text-white text-xs px-3 py-2 rounded-full flex items-center gap-1"
        >
          <span className="opacity-75">Made in</span> Webflow
        </a>
      </div>
    </div>
  )
}


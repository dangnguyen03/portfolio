'use client'

import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import { Header } from '../../../components/Header'
import { Footer } from '../../../components/footer'

// Example blog posts data (in a real app, this would be fetched from an API or database)
const blogPosts = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution built with Next.js, featuring a modern UI and seamless payment integration.',
    date: 'June 2023',
    image: '/placeholder.svg?height=600&width=800',
    content: `# E-commerce Platform

    ## Overview
    Built a complete e-commerce solution using Next.js and modern web technologies.
    
    ## Features
    - Responsive design
    - Cart functionality
    - Payment integration
    - Admin dashboard
    
    ## Technical Stack
    - Next.js
    - TypeScript
    - Tailwind CSS
    - Stripe Integration`
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A beautiful and intuitive task management application with real-time updates.',
    date: 'July 2023',
    image: '/placeholder.svg?height=600&width=800',
    content: `# Task Management App

    ## Overview
    Created an intuitive task management system with real-time collaboration features.
    
    ## Features
    - Drag and drop interface
    - Real-time updates
    - Team collaboration
    - Progress tracking
    
    ## Technical Stack
    - React
    - Firebase
    - Tailwind CSS
    - DnD Kit`
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'A modern weather dashboard with beautiful visualizations and accurate forecasts.',
    date: 'August 2023',
    image: '/placeholder.svg?height=600&width=800',
    content: `# Weather Dashboard

    ## Overview
    Developed a comprehensive weather dashboard with beautiful data visualizations.
    
    ## Features
    - 7-day forecast
    - Interactive maps
    - Historical data
    - Location search
    
    ## Technical Stack
    - React
    - D3.js
    - Weather API
    - Mapbox`
  }
]

export default function ProjectPage() {
  const router = useRouter()
  const { id } = useParams()
  const project = blogPosts.find(post => post.id === id)

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="min-h-screen dark:bg-gray-900 bg-white">
      <Header scrollToSection={() => {}} />

      <main className="px-8 py-20 mt-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Back Button */}
            <button
              onClick={() => router.push('/')}
              className="flex items-center gap-2 hover:text-neutral-900 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to projects
            </button>

            {/* Project Content */}
            <article>
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={600}
                className="rounded-xl mb-8 w-full"
              />
              <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
              <p className="text-neutral-600 mb-8">{project.description}</p>
              <div className="prose prose-neutral max-w-none">
                <pre className="whitespace-pre-wrap font-sans">{project.content}</pre>
              </div>
            </article>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}


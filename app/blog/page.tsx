'use client'
import { Header } from '../../components/Header'
import { motion } from 'framer-motion'
import { format } from 'date-fns'

const blogPosts = [
  {
    title: 'Getting Started with Next.js',
    date: new Date('2023-05-15'),
    excerpt: 'Learn how to build modern web applications with Next.js, the React framework for production.',
    content: '# Getting Started with Next.js\n\nNext.js is a powerful React framework that makes it easy to build server-side rendered and statically generated web applications...',
  },
  {
    title: 'The Power of Tailwind CSS',
    date: new Date('2023-05-22'),
    excerpt: 'Discover how Tailwind CSS can streamline your styling workflow and boost your productivity.',
    content: '# The Power of Tailwind CSS\n\nTailwind CSS is a utility-first CSS framework that allows you to rapidly build custom user interfaces...',
  },
  {
    title: 'Mastering React Hooks',
    date: new Date('2023-05-29'),
    excerpt: 'Dive deep into React Hooks and learn how to write more efficient and maintainable React components.',
    content: '# Mastering React Hooks\n\nReact Hooks have revolutionized the way we write React components, allowing us to use state and other React features without writing a class...',
  },
]

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-12 text-center text-gray-800">Blog Posts</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">{post.title}</h2>
                <p className="text-sm text-gray-600 mb-4">{format(post.date, 'MMMM d, yyyy')}</p>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="#"
                    className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-600 transition-colors duration-200"
                  >
                    Read More
                  </a>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>
      </main>
    </div>
  )
}


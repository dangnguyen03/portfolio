import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

type ProjectCardProps = {
  id: string
  title: string
  description: string
  date: string
  image: string
}

export function ProjectCard({ id, title, description, date, image }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group cursor-pointer bg-neutral-50 dark:bg-gray-800 rounded-xl p-6 hover:bg-neutral-100 dark:hover:bg-gray-700 transition-colors duration-300"
    >
      <Link href={`/project/${id}`}>
        <div className="relative overflow-hidden rounded-xl mb-4">
          <Image
            src={image}
            alt={title}
            width={800}
            height={600}
            className="object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">{title}</h3>
        <p className="text-neutral-600 dark:text-neutral-300">{description}</p>
        <p className="text-sm text-neutral-400 dark:text-neutral-500 mt-2">{date}</p>
      </Link>
    </motion.div>
  )
}


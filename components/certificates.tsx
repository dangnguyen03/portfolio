import { motion } from 'framer-motion'

type Certificate = {
  name: string
  issuer: string
  year: number
}

type CertificatesProps = {
  certificates: Certificate[]
}

export function Certificates({ certificates }: CertificatesProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {certificates.map((cert, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-neutral-50 dark:bg-gray-800 rounded-xl p-6 hover:bg-neutral-100 dark:hover:bg-gray-700 transition-colors duration-300"
        >
          <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">{cert.name}</h3>
          <p className="text-neutral-600 dark:text-neutral-300">{cert.issuer}</p>
          <p className="text-sm text-neutral-400 dark:text-neutral-500 mt-2">{cert.year}</p>
        </motion.div>
      ))}
    </div>
  )
}


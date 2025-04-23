interface PageHeaderProps {
  title: string
  description: string
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-purple-800 to-purple-600 text-white py-16 px-4 md:px-8 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-sm md:text-base opacity-90 max-w-xl mx-auto">{description}</p>
      </div>
    </div>
  )
}

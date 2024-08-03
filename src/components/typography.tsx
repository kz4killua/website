export function SectionHeading({
  children, className
}: {
  children: React.ReactNode, 
  className?: string
}) {
  return (
    <h1 className={`font-bold text-secondary text-center text-3xl md:text-4xl mb-2 ${className}`}>
      {children}
    </h1>
  )
}


export function SectionSubheading({
  children, className
}: {
  children: React.ReactNode, 
  className?: string
}) {
  return (
    <h2 className={`text-center text-gray-600 ${className}`}>
      {children}
    </h2>
  )
}
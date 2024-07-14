export function SectionHeading({
  children, className
}: {
  children: React.ReactNode, 
  className?: string
}) {
  return (
    <h1 className={`font-bold text-center text-4xl mb-2 ${className}`}>
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
    <h2 className={`text-center text-gray-600 text-lg ${className}`}>
      {children}
    </h2>
  )
}
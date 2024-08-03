import clsx from "clsx"


export default function Container({
  children, className
}: {
  children: React.ReactNode,
  className?: string
}) {
  return (
    <div 
      className={clsx(
        "max-w-5xl mx-auto px-8 sm:px-8 lg:px-8", 
        className
      )}
    >
      {children}
    </div>
  )
}
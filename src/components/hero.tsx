import Image from "next/image"
import Container from "@/components/container"


export default function Hero() {
  return (
    <Container className="flex flex-col md:flex-row items-center justify-evenly md:justify-between min-h-dvh py-10 gap-y-10">
      <div className="flex items-center max-w-sm lg:max-w-lg">
        <div className="flex flex-col gap-y-5">
          <h1 className="font-bold text-4xl md:text-5xl">
            Hi, I&apos;m Ifeanyi! <span className="text-3xl lg:text-5xl">👋</span>
          </h1> 
          <h3 className="font-semibold md:text-xl">
            Software Engineer
          </h3>
          <p className="md:text-lg text-gray-600">
            Currently pursuing a Bachelor&apos;s degree in Computer Science at Ontario Tech University. 
            Also an eighth grade spelling bee champion :)
          </p>
        </div>
      </div>
      <div className="w-full order-first md:order-last md:w-fit flex items-center justify-center">
        <Image 
          src="/images/headshot.jpg"
          alt="Ifeanyi"
          width={250}
          height={250}
          className="rounded-full"
        />
      </div>
    </Container>
  )
}
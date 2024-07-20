import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";
import Marquee from "@/components/magicui/marquee";
import { SectionHeading, SectionSubheading } from "./typography";


type Review = {
  name: string;
  avatar: string;
  content: string;
};


const reviews: Review[] = [
  {
    name: "Paws Host, LLC",
    avatar: "",
    content: "This is a very good freelancer. His knowledge of AI is quite through. He’s both an intuitive and technical problem solver."
  },
  {
    name: "Dan R.",
    avatar: "",
    content: "This freelancer continues to do project after project for me successfully. A+++ I highly recommend Ifeanyi for attention to detail, powerful communication and total professionalism."
  },
  {
    name: "Dan R.",
    avatar: "",
    content: "Ifeanyi is the best development resource I ever found in over 6 years on Upwork. I highly recommend him he is brilliant and great communicator and his work is high quality."
  },
  {
    name: "Wolfgang K.",
    avatar: "",
    content: "Super happy with Ifeanyi. I never felt alone. Amazing communication. He solved all challenges of this project, would definitely hire in the future."
  },
  {
    name: "Dan R.",
    avatar: "",
    content: "Great work, communication A+. Highly recommend."
  },
  {
    name: "Dan R.",
    avatar: "",
    content: "Ifeanyi and the work I did with him was my best experience I ever had on this platform. He absolutely delivered 10 out of 10. His communication skills are top notch. He hit all his deadlines. He made it easy to interact with him. He was highly available. The quality of his work is outstanding. You can believe what he says. If he says he can do it...he can do it. You will be lucky if this guy works for you. A+++ amazing."
  },
  {
    name: "Akash G.",
    avatar: "",
    content: "I recommend Ifeanyi Obinelo for any Python development projects you may have. His professionalism and commitment to client satisfaction make him a solid choice. Don't hesitate to hire Ifeanyi - you'll be happy with the results!"
  },
  {
    name: "Rebecca G.",
    avatar: "",
    content: "Ifeanyi is fantastic to work with and super knowledgeable about anything specific to coding/software engineering. Pleasant and engaging attitude. Pleasure to work with! Highly recommend!"
  },
  {
    name: "Tue R.",
    avatar: "",
    content: "Very diligent, accessible, did not over or understate skills, and delivered a very good clean code."
  },
  {
    name: "Dowell Living Lab",
    avatar: "",
    content: "He is great seller! Great working experience. Highly recommended!"
  },
  {
    name: "Archie L.",
    avatar: "",
    content: "Ifeanyi completed the task timely and did a very good job. Would love to work with him again!"
  }
]


export default function Reviews() {
  return (
    <Container>
      <SectionHeading>Reviews</SectionHeading>
      <SectionSubheading>
        Real reviews, from real people on&nbsp;
        <Link 
          href={"https://www.upwork.com/freelancers/~012fb0252a88cecd37"} 
          target="_blank"
          className="font-semibold text-gray-600 hover:underline underline-offset-4"
        >
          Upwork
        </Link>
      </SectionSubheading>
      <div className="mt-7 text-gray-600">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reviews.map((review, index) => (
            <ReviewItem key={index} {...review} />
          ))} 
        </div>
        <div className="text-center mt-8">
          View more reviews on&nbsp;
          <Link 
            href={"https://www.upwork.com/freelancers/~012fb0252a88cecd37"} 
            target="_blank"
            className="font-semibold text-gray-600 hover:underline underline-offset-4"
          >
            Upwork
          </Link>
        </div>
      </div>
    </Container>
  );
}


function ReviewItem({ name, avatar, content }: Review) {
  return (
    <div className="bg-white rounded-xl shadow-lg border p-6 flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gray-200"></div>
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
        </div>
      </div>
      <p className="text-gray-600">{content}</p>
    </div>
  );
}
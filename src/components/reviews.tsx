import clsx from "clsx";
import Link from "next/link";
import Container from "@/components/container";
import { Star, User } from "lucide-react";
import { SectionHeading, SectionSubheading } from "./typography";
import { ArrowRight } from "lucide-react";


type Review = {
  name: string;
  avatar: string;
  content: string;
};


const reviews: Review[] = [
  {
    name: "Kristian H.",
    avatar: "",
    content: "Exceptional developer with excellent problem solving skills and attention to detail. Delivered consistently with prompt and thoughtful communication. Went above and beyond throughout the duration of the project. Absolutely would hire Ifeanyi again!"
  },
  {
    name: "Wolfgang K.",
    avatar: "",
    content: "Ifeanyi is not only an exceptional developer but also super responsive, helpful, and friendly. He was the first developer I worked with and I couldn't be happier. Hopefully, we will have more projects going forward."
  },
  {
    name: "Aubin C.",
    avatar: "",
    content: "One of the sharpest minds I ever had the pleasure of working with. I wish him all the best with all endeavours going forward."
  },
  {
    name: "Paws Host, LLC",
    avatar: "",
    content: "This is a very good freelancer. His knowledge of AI is quite thorough. He’s both an intuitive and technical problem solver."
  },
  {
    name: "Dan R.",
    avatar: "",
    content: "This freelancer continues to do project after project for me successfully. A+++ I highly recommend Ifeanyi for attention to detail, powerful communication and total professionalism."
  },
  {
    name: "Dan R.",
    avatar: "",
    content: "Ifeanyi is the best development resource I've ever found in over 6 years on Upwork. I highly recommend him. He is brilliant and a great communicator and his work is high quality."
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
    content: "Ifeanyi and the work I did with him were the best experience I ever had on this platform. He absolutely delivered 10 out of 10. His communication skills are top notch. He hit all his deadlines. He made it easy to interact with him. He was highly available. The quality of his work is outstanding. You can believe what he says. If he says he can do it...he can do it. You will be lucky if this guy works for you. A+++ amazing."
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
    content: "Very diligent, accessible, did not over or understate skills, and delivered very good, clean code."
  },
  {
    name: "Dowell Living Lab",
    avatar: "",
    content: "He is great seller! Great working experience. Highly recommended!"
  },
  {
    name: "Archie L.",
    avatar: "",
    content: "Ifeanyi completed the task on time and did a very good job. Would love to work with him again!"
  }
]


export default function Reviews() {

  const split = Math.ceil(reviews.length / 2);
  const firstHalf = reviews.slice(0, split);
  const secondHalf = reviews.slice(split, reviews.length);

  return (
    <section id="reviews" className="pt-24 pb-6">

      <Container>
        <SectionHeading>Reviews</SectionHeading>
        <SectionSubheading>
          Real reviews, from real people on&nbsp;
          <Link 
            href={"https://www.upwork.com/freelancers/~012fb0252a88cecd37"} 
            target="_blank"
            className="font-semibold text-secondary hover:text-primary hover:underline underline-offset-4"
          >
            Upwork
          </Link>
        </SectionSubheading>

        <div className="mt-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-y-4">
              {firstHalf.map((review, index) => (
                <ReviewItem key={index} {...review} />
              ))}
            </div>
            <div className="flex flex-col gap-y-4">
              {secondHalf.map((review, index) => (
                <ReviewItem key={index} {...review} />
              ))}
            </div>
          </div>
          <div className="mt-8 text-center">
            View more reviews on&nbsp;
            <Link 
              href={"https://www.upwork.com/freelancers/~012fb0252a88cecd37"} 
              target="_blank"
              className={clsx(
                "group inline-flex items-center justify-center",
                "font-semibold text-secondary hover:text-primary hover:underline underline-offset-4",
              )}
            >
              Upwork&nbsp;
              <ArrowRight className="transition-transform duration-300 ease-in-out group-hover:translate-x-1" size={16} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}


function ReviewItem({ name, avatar, content }: Review) {
  return (
    <div className="bg-background text-foreground rounded-xl shadow-lg border p-6 flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <User className="size-5 text-secondary" />
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
        </div>
      </div>
      <p>{content}</p>
      <div className="flex gap-x-0.5">
        <Star className="fill-amber-400 stroke-0" size={24} />
        <Star className="fill-amber-400 stroke-0" size={24} />
        <Star className="fill-amber-400 stroke-0" size={24} />
        <Star className="fill-amber-400 stroke-0" size={24} />
        <Star className="fill-amber-400 stroke-0" size={24} />
      </div>
    </div>
  );
}
import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/contact/Form";
export default function AboutPage() {
  return (
    <>
      <Image
        priority
        size="100vw"
        src={bg}
        alt="Background Image"
        className="-z-50 top-0 left-0 fixed w-full h-full object-cover object-center opacity-30"
      />
      <article className="relative w-full flex flex-col items-center justify-center space-y-8 py-8 sm:py-0">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            Contact me
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
            Let&apos;s get in Touch! I&apos;m always open to new projects,
            collaborations, or tech discussions. Feel free to reach out!
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}

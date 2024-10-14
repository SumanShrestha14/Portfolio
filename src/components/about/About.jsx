import Link from "next/link";
import React from "react";
import AboutLayout from "./AboutLayout";
import Image from "next/image";
import Profile from "../../../public/Profile_Images/Profile.jpg";

const About = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <div className="top-1/2 col-span-full lg:col-span-full row-span-2 flex justify-between items-center flex-col">
          <div>
            <Image
              className="w-full h-auto max-w-xs rounded-full"
              src={Profile}
              alt="Profile image"
            />
          </div>
          <div className="relative w-full h-fit flex flex-col items-center justify-center py-16">
            <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-4">
              <h1 className="font-bold text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-accent">
                SumanShrestha
              </h1>
            </div>
          </div>
        </div>
        <AboutLayout className="col-span-full lg:col-span-8 row-span-2 flex-col items-start">
          <h2 className="text-xl md:text-2xl text-left w-full capitalize font-bold text-accent">
            Suman Shrestha
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base text-justify">
            Hi, I&apos;m Suman Shrestha, a tech enthusiast passionate about
            full-stack web and mobile app development. I&apos;m always eager to
            explore new technologies and create innovative solutions. Set to
            graduate from Shree Shanti Bhagawati Secondary School in 2025,
            I&apos;m constantly pushing my skills to the next level, ready to
            tackle the challenges of the digital world.
          </p>
        </AboutLayout>

        <AboutLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            10+ <sub className="font-semibold text-base">Clients</sub>
          </p>
        </AboutLayout>
        <AboutLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            2+{" "}
            <sub className="font-semibold text-base">Years of experience</sub>
          </p>
        </AboutLayout>

        <AboutLayout className="col-span-full !p-0">
          <img
            className="w-full h-auto p-4"
            layout="responsive"
            src="https://skillicons.dev/icons?i=androidstudio,arduino,bootstrap,c,cs,cpp,css,discord,bots,dotnet,figma,firebase,github,git,gmail,gradle,html,instagram,java,js,kali,kotlin,linkedin,linux,mongodb,nextjs,nodejs,npm,ps,php,postman,prisma,py,react,replit,stackoverflow,sublime,svg,tailwind,threejs,twitter,ts,unity,vercel,visualstudio,vscode,windows,"
            alt="Most used languages"
            loading="lazy"
          />
        </AboutLayout>

        <AboutLayout className="col-span-full md:col-span-6 !p-0">
          <img
            className="w-full h-auto"
            layout="responsive"
            src="https://github-readme-streak-stats.herokuapp.com?user=sumanshrestha14&theme=dark&hide_border=true&type=png&background=00000000&ring=FEFE5B&currStreakLabel=FEFE5B"
            alt="Longest streak"
            loading="lazy"
          />
        </AboutLayout>

        <AboutLayout className="col-span-full md:col-span-6 !p-0">
          <Link
            href="https://github.com/SumanShrestha14/portfolio"
            className="w-full h-auto"
          >
            <img
              className="w-full h-auto"
              layout="responsive"
              src="https://github-readme-stats.vercel.app/api/pin?username=sumanshrestha14&repo=portfolio&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FEFE5B&text_bold=false&icon_color=FFFFFF&description_lines_count=2"
              alt="Portfolio Repo"
              loading="lazy"
            />
          </Link>
        </AboutLayout>
      </div>
    </section>
  );
};

export default About;

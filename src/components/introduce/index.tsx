/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
const Introduce = () => {
  return (
    <div className="container w-full mx-auto flex text-white calc-vh-minus-header items-center">
      <div className="flex flex-1 flex-col gap-y-6 px-4 md:px-0">
        <span className="sm:text-sm font-extralight text-xs">👋 Hey, I&#39;m</span>
        <h1 className="font-gtWalshiem sm:text-8xl text-6xl bg-linear-gradient bg-clip-text text-transparent">
          Ali Chatraei
        </h1>
        <p className="text-justify">
          I'm a passionate front-end developer with over 3 years of
          experience, specializing in React.js and Next.js. Originally from
          Isfahan but currently based in Tehran, I love bringing designs to life
          and crafting delightful user experiences. Whether it's through
          freelance projects or collaborating with companies, I thrive on
          tackling new challenges and pushing the boundaries of web development.
          Let's build something amazing together! 🚀
        </p>
        <span className="text-2xl cursor-pointer font-extralight w-fit"><Link href="mailto:alichatraei@yahoo.com">Say Hi &#8594;</Link></span>
      </div>
      <div className="lg:flex flex-1 items-center justify-center hidden">
        <Image alt="Alichatraei-photo" src="/images/alichatraei.png" width={500} height={500} className="md:w-80 lg:w-96 xl:w-[500px] rounded-b-full" />
      </div>
    </div>
  );
};

export default Introduce;

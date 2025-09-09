import Link from "next/link";
export default function Home() {
  return (
    <div
      id="home"
      className="max-w-7xl  mx-auto lg:mb-[300px] px-4 sm:px-6 lg:px-8 bg-[#1f1f1f] text-white pt-30 items-center"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center">
        <div className="flex flex-col gap-y-20 lg:mr-15">
          <div className="intro-text-wrapper">
            <div className="intro-text text-3xl text-[#ffffffa3] font-bold">
              {" "}
              Hey There I'm
            </div>
            <div className="intro-text-name font-bold text-3xl">
              Ayush Dhakad
            </div>
          </div>
          <div className="current-available w-[206px]">
            <div className="current-text text-xl ">
              Currently available for freelance projects 🚀
            </div>
          </div>
        </div>
        <div className="rounded mx-auto">
          <img
            src="https://iili.io/3znizAJ.png"
            alt="ayush-img"
            className="w-100 h-auto"
          />
        </div>
        <div className="flex lg:flex-col lg:gap-y-20 lg:ml-15 mt-10 md:flex-row md:justify-between  ">
          <div className="skill-wrapper">
            <div className="skill-text text-[#ffffffa3] font-bold">
              A passionate video editor blending creativity with storytelling to
              craft engaging, polished content. Skilled in Premiere Pro, After
              Effects, and DaVinci Resolve with expertise in cutting, color
              grading, sound, and motion graphics.
            </div>
          </div>

          <Link href={"/contact"}>
            {" "}
            <div className="flex lg:justify-self-center md:justify-self-end lg:mt-[-70px]">
              <button className="rounded-full w-[146px] h-[146px] bg-[#323232] uppercase">
                Let's Chat
              </button>
            </div>
          </Link>
        </div>
        <div className="flex justify-self-center">
          <div className="hero-headline-block  absolute lg:left-[8%]   lg:top-[411px] lg:right-0 lg:pt-23 md:top-[448px] md:left-5  top-[751px]  text-center left-[121px]">
            <div className="hero-headline text-[#fff] lg:tracking-[-9.12px] lg:uppercase lg:whitespace-nowrap lg:leading-[144px] lg:font-bold lg:text-[145.5px] md:uppercase  md:font-bold md:tracking-[-4.5px] md:text-[52px] md:leading-[52px]  tracking-[-3px] whitespace-nowrap text-[63px] leading-[55px] uppercase font-bold">
              video editor
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import TypeIt from "typeit-react";
import {Link} from "react-router-dom";

import {PiInstagramLogoFill, PiLinkedinLogoFill, PiWhatsappLogoBold} from "react-icons/pi";
import {FaGithub} from "react-icons/fa";
import {VscVscode} from "react-icons/vsc";
import {SiIntellijidea} from "react-icons/si";
import {SiLeetcode} from "react-icons/si";

import {ScrollToTop} from "../components/index.js";
import {scrollToSection} from "../utils/utils.js";



function LandingPage() {


  const socialMedia = [
    {
      id: 1,
      icon: (<PiInstagramLogoFill size={30}/>),
      link: "#"
    },
    {
      id: 2,
      icon: (<PiWhatsappLogoBold size={30}/>),
      link: "#"
    },
    {
      id: 3,
      icon: (<PiLinkedinLogoFill size={30}/>),
      link: "#"
    },
    {
      id: 4,
      icon: (<FaGithub size={30}/>),
      link: "#"
    },
    {
      id: 5,
      icon: (<SiLeetcode size={30}/>),
      link: "#"
    },
  ]
  const skill = [
    {id: 2, icon: (<img src="/logo/html.svg" alt="no image found" className={"size-16"}/>)},
    {id: 3, icon: (<img src="/logo/css.svg" alt="no image found" className={"size-16"}/>)},
    {id: 4, icon: (<img src="/logo/linux.png" alt="no image found" className={"size-16"}/>)},
    {id: 5, icon: (<img src="/logo/git.svg" alt="no image found" className={"size-16"}/>)},
    {id: 6, icon: <VscVscode size={60}/>},
    {id: 7, icon: <SiIntellijidea size={55}/>},
    {id: 8, icon: (<img src="/logo/flutter.svg" alt="no image found" className={"size-16"}/>)},
    {id: 9, icon: (<img src="/logo/dart.svg" alt="no image found" className={"size-16"}/>)},
    {id: 10, icon: (<img src="/logo/redux.svg" alt="no image found" className={"size-16"}/>)},
    {id: 11, icon: (<img src="/logo/javascript.svg" alt="no image found" className={"size-16"}/>)},
    {id: 12, icon: (<img src="/logo/typescript.svg" alt="no image found" className={"size-16"}/>)},
    {id: 13, icon: (<img src="/logo/react-native.svg" alt="no image found" className={"size-16"}/>)},
    {id: 14, icon: (<img src="/logo/python.svg" alt="no image found" className={"size-16"}/>)},
    {id: 15, icon: (<img src="/logo/java.svg" alt="no image found" className={"size-16"}/>)},
  ]
  const timelineData = [
    {
      id: 1,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      ),
      time: "1984",
      title: "Lorem Ipsum Title 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 2,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      ),
      time: "1990",
      title: "Lorem Ipsum Title 2",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: 3,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      ),
      time: "2000",
      title: "Lorem Ipsum Title 3",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      id: 4,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      ),
      time: "2010",
      title: "Lorem Ipsum Title 4",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id: 5,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      ),
      time: "2020",
      title: "Lorem Ipsum Title 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
  const contactMethods = [
    {
      icon:
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
             className="w-7 h-7 text-white">
          <path strokeLinecap="round" strokeLinejoin="round"
                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"/>
        </svg>
      ,
      title: "Instagram",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: {
        name: "Send me DMs",
        href: ""
      },
    },
    {
      icon: (<FaGithub size={30} color={"#fff"}/>),
      title: "Github",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: {
        name: "Follow me",
        href: ""
      },
    },
  ]

  return (
    <div>
      {/* Hero start */}
      <div className="hero min-h-screen" id={"profile"}>
        <div className="hero-content pb-56 flex-col lg:flex-row">

          <img
            alt={"Image not found"}
            src="/logo/killua.jpeg"
            className="max-w-sm rounded-lg shadow-2xl"/>

          <div>
            <TypeIt
              className="text-5xl font-semibold"
              getBeforeInit={(instance) => {
                instance.type("Raihan Firdxsu")
                  .pause(1000).delete(3).pause(600).type("aus!")
                return instance
              }}
            />
            <p className="py-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
            <div className={"flex gap-x-5"}>
              <Link className="btn btn-primary" to={"blog"}>Check my blog</Link>

              <nav className="grid grid-cols-5 gap-4 md:place-self-center md:justify-self-end">
                {socialMedia.map((data) => (
                  <Link
                    to={data.link}
                    key={data.id}
                    className={"btn "}
                  >
                    {data.icon}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Hero End */}

      {/* About me Start */}
      <div id={"about"} className={"bg-base-200 min-h-screen p-10"}>

        <div className={"flex justify-center items-center mx-auto"}>
          <p className={"px-5 py-3 text-4xl bg-base-200 rounded-xl "}>About me</p>
        </div>

        <div className={"flex lg:flex-row md:flex-col sm:flex-col gap-x-3 mt-10"}>

          <div className={"flex-1"}>
            <img src="/logo/killua.jpeg" alt="Image not found" className={"lg:w-3/4 md:w-1/2 sm:w-1/2 md:mx-auto sm:mx-auto rounded-md"}/>
          </div>

          <div className={"flex-1 gap-y-3"}>

            <div className={"flex justify-center mx-auto lg:mt-0 md:mt-10 sm:mt-10"}>
              <p className={"p-3 text-2xl  "}>Curious about me?</p>
            </div>

            <p className={"textarea-sm"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.</p>
          </div>

        </div>


      </div>
      {/* About me End */}

      {/* Skills  Start */}
      <div id={"skill"} className={"my-44 "}>

        <div className={"flex flex-col justify-center items-center mx-auto"}>
          <p className={"px-5 py-3 text-4xl bg-base-200 rounded-xl "}>Skill</p>
          <p className={"textarea-sm "}>The skills, tools, and technologies I am really good at:</p>
        </div>

        <div className={"mx-auto w-4/5"}>
          <div className={"grid grid-cols-7 place-items-center mt-5 gap-5"}>
            {skill.map((data) => (
              <div key={data.id}>
                {data.icon}
              </div>
            ))}
          </div>
        </div>

      </div>
      {/* Skills End */}

      {/* Experience Start */}
      <div id={"experience"} className={"bg-base-200 min-h-screen p-10"}>

        <div className={"flex justify-center items-center mx-auto"}>
          <p className={"px-5 py-3 text-4xl bg-base-200 rounded-xl "}>Experience</p>
        </div>

        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mt-10">
          {timelineData.map((data) => (
            <li key={data.id}>
              <div className="timeline-middle">
                {data.icon}
              </div>
              <div className={`${data.id % 2 !== 0 ? "timeline-start mb-10 md:text-end" : "timeline-end mb-10"}`}>
                <time className="font-mono italic">{data.time}</time>
                <div className="text-lg font-black">{data.title}</div>
                {data.description}
              </div>
              <hr/>
            </li>
          ))}
        </ul>

      </div>
      {/* Experience End */}

      {/*Contact start*/}
      <section className="py-14" id={"contact"}>
        <div className="max-w-screen-xl mx-auto px-4 gap-12 md:px-8 lg:flex">
          <div className="max-w-md">
            <h3 className=" text-3xl font-semibold sm:text-4xl">
              Let’s connect
            </h3>
            <p className="mt-3">
              We&apos;re here to help and answer any questions you might have. Looking forward to hearing from you!.
            </p>
          </div>
          <div>
            <ul className="mt-12 gap-y-6 gap-x-12 items-center md:flex lg:gap-x-0 lg:mt-0">
              {
                contactMethods.map((item, idx) => (
                  <li key={idx}
                      className="space-y-3 border-t py-6 md:max-w-sm md:py-0 md:border-t-0 lg:border-l lg:px-12 lg:max-w-none">
                    <div className="w-12 h-12 rounded-full border flex items-center justify-center text-gray-700">
                      {item.icon}
                    </div>
                    <h4 className=" text-lg font-medium xl:text-xl">
                      {item.title}
                    </h4>
                    <p>
                      {item.desc}
                    </p>
                    <a href={item.link.href}
                       className="flex items-center gap-1 text-sm text-indigo-600 duration-150 hover:text-indigo-400 font-medium">
                      {item.link.name}
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                           className="w-5 h-5">
                        <path fillRule="evenodd"
                              d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                              clipRule="evenodd"/>
                      </svg>
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </section>
      {/*Contact end*/}

      <ScrollToTop/>
    </div>
  );
}

export default LandingPage;
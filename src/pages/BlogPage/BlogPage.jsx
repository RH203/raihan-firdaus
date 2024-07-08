import TypeIt from "typeit-react";
import {Link} from "react-router-dom";
import {PiInstagramLogoFill, PiLinkedinLogoFill, PiWhatsappLogoBold} from "react-icons/pi";
import {FaGithub} from "react-icons/fa";
import {SiLeetcode} from "react-icons/si";

function BlogPage() {
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

  const items = [
    {
      id: 1,
      title: 'The Future of AI',
      desc: 'Exploring the advancements and future prospects of artificial intelligence in various fields.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fEFJfGVufDB8fHx8MTYxNDAyMzI1NA&ixlib=rb-1.2.1&q=80&w=400',
      date: 'July 8, 2024'
    },
    {
      id: 2,
      title: 'Blockchain Revolution',
      desc: 'An in-depth analysis of how blockchain technology is transforming industries and creating new opportunities.',
      image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      date: 'July 8, 2024'
    },
    {
      id: 3,
      title: 'Cybersecurity in the Modern Era',
      desc: 'Understanding the importance of cybersecurity measures in protecting data and privacy in the digital age.',
      image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      date: 'July 8, 2024'
    },
    {
      id: 4,
      title: 'The Rise of Quantum Computing',
      desc: 'A look into how quantum computing is set to revolutionize problem-solving capabilities in science and technology.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fHF1YW50dW0lMjBjb21wdXRpbmd8ZW58MHx8fHwxNjE0MDIzMjU0&ixlib=rb-1.2.1&q=80&w=400',
      date: 'July 8, 2024'
    },
    {
      id: 5,
      title: 'Advancements in Robotics',
      desc: 'Exploring the latest developments in robotics and their applications in various industries.',
      image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      date: 'July 8, 2024'
    },
    {
      id: 6,
      title: 'The Future of AI',
      desc: 'Exploring the advancements and future prospects of artificial intelligence in various fields.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fEFJfGVufDB8fHx8MTYxNDAyMzI1NA&ixlib=rb-1.2.1&q=80&w=400',
      date: 'July 8, 2024'
    },
  ];

  return (
    <div className={"mx-auto w-10/12 "}>

      {/* Hero start */}
      <div className="hero" id={"profile"}>
        <div className="hero-content  flex-col lg:flex-row">

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
              <Link className="btn btn-primary" to={"about-me"}>About me</Link>

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

      <div className={"divider"}></div>

      {/*Blog start*/}
      <div>
        <div className={"flex justify-between"}>
          <p className={"text-xl font-medium"}>Writting</p>
          <Link className={"btn bg-transparent border-0 hover:bg-transparent"} to={""}>see more</Link>
        </div>

        <div className={"grid gap-x-8 gap-y-10 mt-12 sm:grid-cols-2 lg:grid-cols-3 "}>
          {items.map((data) => (
            <div className="w-full mx-auto sm:max-w-sm cursor-pointer group" key={data.id}>
              <a href={data.link}>
                <div
                  className="relative overflow-hidden group-hover:scale-105 transition-transform duration-300 rounded-lg max-w-full">
                  <img src={data.image} alt={data.title} className="w-full rounded-lg"
                  />
                </div>
                <div className="mt-3 space-y-2">
                  <span className="block text-indigo-500 text-sm">{data.date}</span>
                  <h3 className="text-lg font-semibold">
                    {data.title}
                  </h3>
                  <p className="text-sm text-gray-400">{data.desc}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      {/*Blog End*/}

      <div className={"divider"}></div>

      {/* Project start*/}
      <div>
        <div className={"flex justify-between"}>
          <p className={"text-xl font-medium"}>Project</p>
          <Link className={"btn bg-transparent border-0 hover:bg-transparent"} to={""}>see more</Link>
        </div>

        <div className={"grid gap-x-8 gap-y-10 mt-12 sm:grid-cols-2 lg:grid-cols-3 "}>
          {items.slice(0,3).map((data) => (
            <div className="w-full mx-auto sm:max-w-sm cursor-pointer group" key={data.id}>
              <a href={data.link}>
                <div
                  className="relative overflow-hidden group-hover:scale-105 transition-transform duration-300 rounded-lg max-w-full">
                  <img src={data.image} alt={data.title} className="w-full rounded-lg"
                  />
                </div>
                <div className="mt-3 space-y-2">
                  <span className="block text-indigo-500 text-sm">{data.date}</span>
                  <h3 className="text-lg font-semibold">
                    {data.title}
                  </h3>
                  <p className="text-sm text-gray-400">{data.desc}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* Project End*/}
    </div>
  );
}

export default BlogPage;
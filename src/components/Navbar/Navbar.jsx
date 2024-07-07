import {RiMenu3Line} from "react-icons/ri";
import {useState} from "react";
import {scrollToSection} from "../../utils/utils.js";

function Navbar() {
  const [rotated, setRotated] = useState(false);

  const toggle = () => setRotated(!rotated)

  return (
    <div className="navbar bg-base-100 font-poppins">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" href={"profile"}>Raihan Firdaus</a>
      </div>
      <div className="flex-none lg:block md:block sm:hidden">
        <ul className="menu menu-horizontal px-1 space-x-4">
          <li>
            <div onClick={() => scrollToSection('skill')}>
              Skill
            </div>
          </li>
          <li>
            <div onClick={() => scrollToSection('experience')}>
              Experience
            </div>
          </li>
          <li>
            <div onClick={() => scrollToSection('contact')}>
              Contact me
            </div>
          </li>

        </ul>
      </div>
      <div className="dropdown dropdown-bottom dropdown-end lg:hidden md:hidden sm:block">
        <div tabIndex={0} role="button" className="btn m-1" onClick={toggle}>
          <RiMenu3Line size={25} className={`transform transition-transform duration-300 ${
            rotated ? 'rotate-180' : ''
          }`}/>
        </div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow ">
          <li>
            <div onClick={() => scrollToSection('skill')}>
              Skill
            </div>
          </li>
          <li>
            <div onClick={() => scrollToSection('experience')}>
              Experience
            </div>
          </li>
          <li>
            <div onClick={() => scrollToSection('contact')}>
              Contact me
            </div>
          </li>

        </ul>
      </div>
    </div>
  );
}

export default Navbar;
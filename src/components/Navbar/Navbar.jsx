import {RiMenu3Line} from "react-icons/ri";
import {useState} from "react";

function Navbar() {
  const [rotated, setRotated] = useState(false);

  const toggle = () => setRotated(!rotated)

  return (
    
    <div className="navbar bg-base-100 font-poppins">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" href={"profile"}>Raihan Firdaus</a>
      </div>
      <div className="flex-none lg:block md:block sm:hidden">
        <ul className="menu menu-horizontal px-1">
          <li><a>Skill</a></li>
          <li><a>Experience</a></li>
          <li><a>Contact me</a></li>
        </ul>
      </div>
      <div className="dropdown dropdown-bottom dropdown-end lg:hidden md:hidden sm:block">
        <div tabIndex={0} role="button" className="btn m-1" onClick={toggle}>
          <RiMenu3Line size={25} className={`transform transition-transform duration-300 ${
            rotated ? 'rotate-180' : ''
          }`}/>
        </div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li><a>Skill</a></li>
          <li><a>Experience</a></li>
          <li><a>Contact me</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
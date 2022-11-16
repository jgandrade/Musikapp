import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import { SiMusicbrainz } from "react-icons/si";
import { links } from "../assets/constants";

const NavLinks = ({ handleClick }) => {
  return (
    <div className="mt-10">
      {links.map((e) => {
        return (
          <NavLink
            key={e.name}
            to={e.to}
            className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-slate-400"
            onClick={() => handleClick && handleClick()}
          >
            <e.icon className="w-6 h-6 mr-2" />
            {e.name}
          </NavLink>
        );
      })}
    </div>
  );
};

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
      <h1 className="font-bold text-white text-3xl text-center select-none">
        <SiMusicbrainz className="inline mb-2" />
        Musikapp
      </h1>
      <NavLinks />
    </div>
  );
};

export default Sidebar;

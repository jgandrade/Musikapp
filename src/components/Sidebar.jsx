import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import { SiMusicbrainz } from "react-icons/si";
import { links } from "../assets/constants";
import { HiOutlineMenu } from "react-icons/hi";

const NavLinks = ({ handleClick }) => {
  return (
    <div className="mt-10">
      {links.map((e) => {
        return (
          <NavLink
            key={e.name}
            to={e.to}
            className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-slate-50 smooth-transition"
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
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#272727]">
        <h1 className="font-bold text-white text-3xl text-center select-none">
          <SiMusicbrainz className="inline mb-2" />
          Musikapp
        </h1>
        <NavLinks />
      </div>

      <div className="absolute md:hidden block top-6 right-3">
        {mobileMenuOpen ? (
          <RiCloseLine
            className="w-6 h-6 text-white mr-2 cursor-pointer z-10"
            onClick={() => setMobileMenuOpen(false)}
          />
        ) : (
          <HiOutlineMenu
            className="w-6 h-6 text-white mr-2 cursor-pointer z-10"
            onClick={() => setMobileMenuOpen(true)}
          />
        )}
      </div>

      <div
        className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#212122] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${
          mobileMenuOpen ? "left-0" : "-left-full"
        }`}
      >
        <h1 className="font-bold text-white text-3xl text-center select-none">
          <SiMusicbrainz className="inline mb-2" />
          Musikapp
        </h1>
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;

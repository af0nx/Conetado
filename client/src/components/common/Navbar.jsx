import React, { useState } from "react";
import { BiMenu, BiRedo } from "react-icons/bi";
import "../../styles-v2.css";
import logoImg from "../images/logo.png";


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <div className="flex items-center">
      <a href="/"> 
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-700 to-green-50">Conetado</h1>
        </a>        

        <div className="navbar-logo mr-4">

          <a href="/">
  <img src={logoImg} alt="Logo" className="h-14 pl-2" />
</a>        

</div>
      </div>

      <ul className="hidden md:flex">
        <li className="p-4">
          <a href="/blog">Blog</a>
        </li> 
        <li className="p-4">
          <a href="/servicos">Serviços</a>
        </li>
        <li className="p-4">
          <a href="/parceiros">Parceiros</a>
        </li>
        <li className="p-4">
          <a href="/servicos">Login</a>
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <BiRedo size={27} /> : <BiMenu size={25} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#097969] m-4">
          Conetado
        </h1>
        <li className="p-4 border-b border-gray-600">
          <a href="/empresa">Empresa</a>
        </li>
        <li className="p-4 border-b border-gray-600">
          <a href="/mercado">Mercado</a>
        </li>
        <li className="p-4 border-b border-gray-600">
          <a href="/sobre">Sobre</a>
        </li>
        <li className="p-4 border-b border-gray-600">
          <a href="/atualizacoes">Atualizações</a>
        </li>
        <li className="p-4 border-b border-gray-600">
          <a href="/login">Login</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
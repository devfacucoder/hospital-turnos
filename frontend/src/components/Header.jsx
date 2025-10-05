import React, { useState } from "react";

import { FaBars } from "react-icons/fa";

import MenuMobile from "./MenuMobile";
function Header() {
  const [viewMenu, setViewMenu] = useState(false);
  return (
    <div className="w-full h-[60px] bg-blue-500 flex justify-between">
      {viewMenu ? <MenuMobile onClose={setViewMenu}  pShowView={viewMenu} /> : null}
      <h1 className="h-full w-[200px]  text-[28px] text-white font-mono flex items-center justify-center">
        Saque-Turno
      </h1>
      <button className="h-full w-[50px] flex justify-center items-center "
      onClick={()=>{
        setViewMenu(true)

      }}
      >
        <FaBars fontSize={"35px"} />
      </button>
    </div>
  );
}

export default Header;

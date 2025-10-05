import React from "react";
import { MdOutlineLocalHospital } from "react-icons/md";

import { Link } from "react-router-dom";
function CardReqTurno() {
  return (
    <Link to={"/pedirturno"}>
      <div className="bg-white shadow-2xs rounded-2xl border-[5px] border-black w-[240px] h-[240px] flex items-center justify-center flex-col">
        <MdOutlineLocalHospital fontSize={"150px"} />
        
        <h3 className="text-[30px]">Solicitar Turno</h3>
      </div>
    </Link>
  );
}

export default CardReqTurno;

import React,{createContext,useState} from "react";
import ListMEdicos from "../components/ListMedicos";
import { Outlet } from "react-router-dom";

function RequestTurno() {
  const [medicoSelect,setMedicoSelect] = useState("")

  return (
    <div className="flex flex-col justify-center gap-2 items-center py-4">
      <ListMEdicos onSelect={setMedicoSelect} />

      <Outlet  context={medicoSelect}/>
    </div>
  );
}

export default RequestTurno;

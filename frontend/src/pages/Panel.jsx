import React, { useState, createContext } from "react";
import MedicosEdit from "../components/MedicosEdit";
import FormEdit from "../components/FormEdit";
export const ctxMedicoSelect = createContext();
function Panel() {
  const [medicoForEdit, setMedicoForEdit] = useState("");
  return (
    <ctxMedicoSelect.Provider value={[medicoForEdit, setMedicoForEdit]}>
      <div className="w-full flex flex-col items-center">
        <div className="w-full sm:w-[70%] md:w-[50%]">
          <MedicosEdit  />

          <FormEdit  />
        </div>
      </div>
    </ctxMedicoSelect.Provider>
  );
}

export default Panel;

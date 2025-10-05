import React, { useState, useContext } from "react";

import useTurnoApi from "../hooks/useTurnosApi";
import useMedicosApi from "../hooks/useMedicosApi";
import { ctxMedicoSelect } from "../pages/Panel";
function FormEdit() {
  const [dataRequesMedico, setDataRequestMedico] = useState({
    nombre: "",
    apellido: "",
    especialidad: "",
  });
  const { editMedico } = useMedicosApi();
  const [medicoIdSelect, _] = useContext(ctxMedicoSelect);
  const handleEdit = () => {
    console.log(medicoIdSelect);
    editMedico(dataRequesMedico, medicoIdSelect);
  };

  return (
    <div className="w-full md:w-[400px] md:hidden p-2 h-[310px]  flex justify-center items-center">
      <form
        className="bg-blue-800 w-full h-full flex flex-col"
        onSubmit={(e) => {
          e.preventDefault();
          handleEdit();
        }}
      >
        <div className="w-full flex flex-col px-4">
          <label htmlFor="nombre" className="text-white text-[20px]">
            Nombre
          </label>
          <input
            id="nombre"
            className="h-[30px] bg-white"
            type="text"
            onChange={(e) =>
              setDataRequestMedico((prev) => ({
                ...prev,
                nombre: e.target.value,
              }))
            }
          />
        </div>
        <div className="w-full flex flex-col px-4">
          <label htmlFor="apellido" className="text-white text-[20px]">
            Apellido
          </label>
          <input
            id="apellido"
            className="h-[30px] bg-white"
            type="text"
            onChange={(e) =>
              setDataRequestMedico((prev) => ({
                ...prev,
                apellido: e.target.value,
              }))
            }
          />
        </div>
        <div className="w-full flex flex-col px-4">
          <label htmlFor="especialidad" className="text-white text-[20px]">
            Especialidad
          </label>
          <select
            id="especialidad"
            className="h-[30px] bg-white"
            onChange={(e) =>
              setDataRequestMedico((prev) => ({
                ...prev,
                especialidad: e.target.value,
              }))
            }
          >
            <option value="">nasi</option>
            <option value="pancho">pancho</option>
            <option value="ahre">ahre</option>
          </select>
        </div>
        <button className="bg-white text-blue-800 font-bold mt-4 mx-4 py-2 rounded">
          Editar
        </button>
      </form>
    </div>
  );
}

export default FormEdit;

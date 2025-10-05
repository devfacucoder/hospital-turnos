import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import useMedicosApi from "../hooks/useMedicosApi";
function ListMedicos({onSelect}) {
  const repeatCount = 20;
  const medicos = Array.from({ length: repeatCount }, (_, i) => ({
    nombre: "Juan Pereira",
    especialidad: "Cardiólogo",
  }));
  const { getMedicos } = useMedicosApi();
  const [dataMedicos, setDataMedicos] = useState([]);
  useEffect(() => {
    const requestGetMedicos = async () => {
      const data = await getMedicos();
      setDataMedicos(data.data);
    };
    requestGetMedicos();
  }, []);
  return (
    <div className="bg-white w-[90%] min-h-[80vh] gap-4 flex flex-col sm:w-[500px] overflow-y-scroll rounded-xl shadow-md p-4">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">
        Lista de Médicos
      </h2>
      <ul className="space-y-3">
        {dataMedicos.map((medico, i) => (
          <Link to="formulario" onClick={()=>{
            onSelect(medico._id)
          }} >
            <li
              key={i}
              className="flex shadow-2xs border-b-[5px] border-blue-700 justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 hover:shadow transition"
            >
              <div>
                <p className="text-[28px] font-semibold text-gray-800">
                  {medico.nombre}
                </p>
                <p className="text-[18px] text-gray-500">
                  {medico.especialidad.nombre}
                </p>
              </div>
              <button className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm  hover:bg-blue-700 transition">
                Ver más
              </button>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default ListMedicos;

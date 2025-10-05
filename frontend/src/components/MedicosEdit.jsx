import React, { useEffect, useState } from "react";
import useMedicosApi from "../hooks/useMedicosApi";
import ItemTable from "./ItemTable";
function MedicosEdit({setMedicoForEdit}) {
  const { getMedicos } = useMedicosApi();
  const [dataMedicos, setDataMedicos] = useState([]);

  useEffect(() => {
    const handleGetMedicos = async () => {
      const data = await getMedicos();
      setDataMedicos(data.data);
    };
    handleGetMedicos();
  }, []);
  return (
    <div className="p-2">
      <table className="min-w-full border bg-gray-200 ">
        <thead>
          <tr className="bg-blue-100">
            <th className="py-2 px-1 border-b">Nombre Completo</th>

            <th className="py-2 px-1 border-b">Especialidad</th>
            <th className="py-2 px-1 border-b">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {dataMedicos.map((e, index) => (
            <ItemTable dataItem={e} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MedicosEdit;

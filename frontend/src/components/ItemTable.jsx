import React, { useEffect, useContext, useState } from "react";
import useTurnosApi from "../hooks/useTurnosApi";
import { FaListUl } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { ctxMedicoSelect } from "../pages/Panel";
function ItemTable({ dataItem }) {
  const [dataTurnos, setDataTurnos] = useState([]);
  const { getTurnosById } = useTurnosApi();
  const [vieTurnoList, setVieTurnoList] = useState(false);
  const [_, setMedicoSelect] = useContext(ctxMedicoSelect);
  const handleGetTurnosById = async () => {
    const data = await getTurnosById(dataItem._id);
    setDataTurnos(data.data);
  };
  return (
    <>
      <tr className="border-t-[3px] border-black">
        <td className="py-2 px-4 border-b">
          {`${dataItem.nombre || "Nombre"} ${dataItem.apellido || "Apellido"}`}
        </td>
        <td className="py-2 px-4 border-b">{dataItem.especialidad.nombre}</td>
        <td className="py-2 px-4 border-b flex gap-2 items-center justify-center">
          <button
            onClick={() => {
              handleGetTurnosById();
              setVieTurnoList(true);
            }}
            className="bg-blue-600 p-[5px] text-white"
          >
            <FaListUl fontSize={"30px"} />
          </button>
          <button
            onClick={() => {
              setMedicoSelect(dataItem._id);
            }}
            className="bg-green-600 p-[5px]  text-white"
          >
            <AiFillEdit fontSize={"30px"} />
          </button>
        </td>
      </tr>

      {vieTurnoList ? (
        <>
          <tr>
            <td>Paciente</td>
            <td>Fecha</td>
            <td>Hora</td>
          </tr>
          {dataTurnos.map((e) => (
            <tr>
              <td>{e.nombrePaciente}</td>
              <td>20/12</td>
              <td className="flex gap-2">

                12:30
                <div className="flex gap-2">
                  <button>
            <AiFillEdit fontSize={"25px"} />

                  </button>
                  <button>
            <FaListUl fontSize={"25px"} />

                  </button>
                </div>
              </td>
            </tr>
          ))}
        </>
      ) : null}
    </>
  );
}

export default ItemTable;

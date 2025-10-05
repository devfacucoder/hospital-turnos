import React, { useState } from "react";

import { useOutletContext } from "react-router-dom";
import InputHora from "./InputHora";
import useTurnoApi from "../hooks/useTurnosApi";

function FormTurno({ PidMedico }) {
  const medicoSelect = useOutletContext();
  const [dateForRequest, setDataForRequest] = useState({
    nombrePaciente: "",
    apellidoPaciente: "",
    fecha: "",
    hora: "",
    dniPaciente: "",
    telefonoPaciente: "",
    idMedico: medicoSelect,
  });

  const { requestTurno } = useTurnoApi();
  const [mensaje, setMensaje] = useState("");

  const handelRequestTurno = async (e) => {
    e.preventDefault();
    const response = await requestTurno(dateForRequest);
    if (response) {
      setMensaje("Turno solicitado correctamente.");
      setDataForRequest({
        nombrePaciente: "",
        apellidoPaciente: "",
        fecha: "",
        hora: "",
        dniPaciente: "",
        telefonoPaciente: "",
        idMedico: medicoSelect,
      });
    } else {
      setMensaje("Hubo un error al solicitar el turno.");
    }
  };

  return (
    <div className="justify-center items-center bg-white w-[90%] min-h-[80vh] gap-4 flex flex-col sm:w-[500px] overflow-y-scroll rounded-xl shadow-md p-4">
      <form
        onSubmit={handelRequestTurno}
        action=""
        className="w-full flex flex-col items-center gap-2 justify-center"
      >
        <div className="w-full">
          <input
            value={dateForRequest.fecha}
            onChange={(e) => {
              const value = e.target.value; // formato yyyy-mm-dd
              if (value) {
                const [year, month] = value.split("-");
                setDataForRequest((prev) => ({
                  ...prev,
                  fecha: `${month}/${year.slice(2)}`, // mm/aa
                }));
              } else {
                setDataForRequest((prev) => ({
                  ...prev,
                  fecha: "",
                }));
              }
            }}
            id="fecha"
            type="date"
            className="h-10 w-full bg-gray-200 text-lg"
          />
        </div>
        <InputHora setDataForRequest={setDataForRequest} />
        <div className="w-full">
          <label
            htmlFor="nombre"
            className="flex flex-col text-lg font-semibold"
          >
            Nombre
          </label>
          <input
            value={dateForRequest.nombrePaciente}
            onChange={(e) => {
              setDataForRequest((prev) => ({
                ...prev,
                nombrePaciente: e.target.value,
              }));
            }}
            id="nombre"
            type="text"
            className="h-10 w-full bg-gray-200 text-lg"
            placeholder="Ingrese su nombre"
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="apellido"
            className="flex flex-col text-lg font-semibold"
          >
            Apellido
          </label>
          <input
            value={dateForRequest.apellidoPaciente}
            onChange={(e) => {
              setDataForRequest((prev) => ({
                ...prev,
                apellidoPaciente: e.target.value,
              }));
            }}
            id="apellido"
            type="text"
            className="h-10 w-full bg-gray-200 text-lg"
            placeholder="Ingrese su apellido"
          />
        </div>
        <div className="w-full">
          <label htmlFor="dni" className="flex flex-col text-lg font-semibold">
            DNI
          </label>
          <input
            value={dateForRequest.dniPaciente}
            onChange={(e) => {
              setDataForRequest((prev) => ({
                ...prev,
                dniPaciente: e.target.value,
              }));
            }}
            id="dni"
            type="text"
            className="h-10 w-full bg-gray-200 text-lg"
            placeholder="Ingrese su DNI"
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="telefono"
            className="flex flex-col text-lg font-semibold"
          >
            Telefono
          </label>
          <input
            value={dateForRequest.telefonoPaciente}
            onChange={(e) => {
              setDataForRequest((prev) => ({
                ...prev,
                telefonoPaciente: e.target.value,
              }));
            }}
            id="telefono"
            type="text"
            className="h-10 w-full bg-gray-200 text-lg"
            placeholder="Ingrese su Telefono"
          />
        </div>
        <button className="bg-blue-600 w-[80%] h-10 text-[22px] font-bold text-white mt-4">
          Solicitar Turno
        </button>
        {mensaje && (
          <div className="w-full text-center mt-2 text-lg font-semibold text-green-600">
            {mensaje}
          </div>
        )}
      </form>
    </div>
  );
}

export default FormTurno;
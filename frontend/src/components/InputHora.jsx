import React, { useState } from "react";

const horarios = [
  "9:00",
  "9:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
];

function InputHora({ setDataForRequest }) {
  const [horaSelect, setHoraSelect] = useState("");
  return (
    <div className="grid grid-cols-3 gap-4 mb-4 w-full">
      {horarios.map((hora) => (
        <button
          onClick={() => {
            setHoraSelect(hora);
            setDataForRequest((prev) => ({
              ...prev,
              hora: hora,
            }));
          }}
          key={hora}
          type="button"
          className={`${
            hora === horaSelect
              ? "bg-white text-blue-600 border-blue-700 border-[1px]"
              : "bg-blue-700 text-white border-blue-700 border-[1px]"
          }  rounded-lg py-4 text-xl font-bold  hover:bg-blue-700 transition w-full`}
        >
          {hora}
        </button>
      ))}
    </div>
  );
}

export default InputHora;

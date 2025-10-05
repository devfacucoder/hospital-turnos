import React, { useState } from "react";
import useMedicosApi from "../hooks/useMedicosApi";

import { useNavigate } from "react-router-dom";
function Join() {
  const navigate = useNavigate();
  const { login } = useMedicosApi();
  const [dataForRequest, setDataForRequest] = useState({
    cod: "",
    contrasenna: "",
  });
  const handleLogin = async (e) => {
    e.preventDefault();
    const data = await login(dataForRequest);
    if (data.token) {
      sessionStorage.setItem("tk", data.token);
      navigate("/panel");
    }
  };
  return (
    <div className="flex flex-col justify-center w-full items-center">
      <form
        onSubmit={handleLogin}
        className=" w-[300px] flex flex-col h-[320px] p-4  bg-blue-600"
      >
        <div className="w-full font-mono  text-[30px] flex flex-col">
          <label htmlFor="">Codigo</label>
          <input
            onChange={(e) => {
              setDataForRequest((prev) => ({
                ...prev,
                cod: e.target.value,
              }));
            }}
            type="text"
            className="bg-white"
          />
        </div>
        <div className="w-full font-mono text-[30px] flex flex-col">
          <label htmlFor="">Contraseña</label>
          <input
            onChange={(e) => {
              setDataForRequest((prev) => ({
                ...prev,
                contrasenna: e.target.value,
              }));
            }}
            type="text"
            className="bg-white"
          />
        </div>
        <button className="text-[30px] font-mono bg-blue-500 text-white px-2">
          Ingresar
        </button>
      </form>
    </div>
  );
}

export default Join;

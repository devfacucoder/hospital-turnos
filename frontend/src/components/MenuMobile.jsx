import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

function MenuMobile({ onClose, pShowView }) {
  const location = useLocation();
 
  return (
    <>
      {/* Fondo oscuro con blur */}
      <div
        className="bg-black/50 backdrop-blur-sm fixed inset-0 z-40"
        onClick={() => {
          onClose(false);
        }}
      ></div>

      {/* Sidebar */}
      <div className="bg-white fixed left-0 top-0 w-[75%] h-screen z-50 shadow-lg animate-slideIn">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold text-blue-700">Menú</h2>
          <button
            className="p-2"
            onClick={() => {
              onClose(false);
            }}
          >
            X
          </button>
        </div>

        <ul className="flex flex-col gap-4 p-6 text-lg font-medium text-[25px]">
          <li>
            <Link to="/" className="hover:text-blue-600 transition ">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/pedir-turno" className="hover:text-blue-600 transition">
              Pedir Turno
            </Link>
          </li>
          <li>
            <Link
              to="/revisar-turno"
              className="hover:text-blue-600 transition "
            >
              Revisar Turno
            </Link>
          </li>
          <li>
            <Link to="/ingresar" className="hover:text-blue-600 transition ">
              Ingresar
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MenuMobile;

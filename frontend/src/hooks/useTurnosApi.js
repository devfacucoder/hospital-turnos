const apiUrl = import.meta.env.VITE_API_URL;

function useTurnoApi() {
  const requestTurno = async (turnoData) => {
    try {
      const response = await fetch(`${apiUrl}api/turnos/${idMEdico}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${sessionStorage.getItem("tk")}`,
        },
        body: JSON.stringify(turnoData),
      });
      if (!response.ok) {
        throw new Error("Error al solicitar el turno");
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  const getTurnosById = async (idMedico) => {
    try {
      const response = await fetch(apiUrl + "api/turnos/" + idMedico);
      if (response.ok) {
        const data = await response.json();
        return data;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  const editTurno = async (bodyRequest,idMEdico) => {
    try {
      const response = await fetch(apiUrl + "api/turnos/"+idMEdico, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(bodyRequest),
      });
      if (response.ok) {
        const data = await response.json();
        return data;
      }
      return null;
    } catch (error) {
      return null;
      console.log(error);
    }
  };
  return { requestTurno, getTurnosById, editTurno };
}

export default useTurnoApi;

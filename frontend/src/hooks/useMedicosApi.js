const apiUrl = import.meta.env.VITE_API_URL;
function useMedicosApi() {
  const login = async (bodyRequest) => {
    try {
      const response = await fetch(apiUrl + "api/medicos/auth", {
        method: "POST",
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
      console.log(error);
    }
  };

  const getMedicos = async () => {
    try {
      const response = await fetch(apiUrl + "api/medicos");
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

  const createMedico = async (nombre, apellido, contrasenna, especialidad) => {
    try {
      const response = await fetch(apiUrl + "api/medicos", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          ombre,
          apellido,
          contrasenna,
          especialidad,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        return data;
      }
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  const editMedico = async (bodyRequest, idMedico) => {
    try {
      const response = await fetch(apiUrl + "api/medicos/" + idMedico, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          authorization: "bearer " + sessionStorage.getItem("tk"),
        },
        body: JSON.stringify(bodyRequest),
      });
      if (response.ok) {
        const data = await response.json();
        return data;
      }
      return null
    } catch (error) {
      console.log(error);

      return null;
    }
  };
  return { getMedicos, createMedico, login, editMedico };
}
export default useMedicosApi;

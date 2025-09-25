import roleModel from "../model/role.model.js";

const createRoles = async () => {
  try {
    const count = await roleModel.estimatedDocumentCount();
    if (count > 0) {
      console.log("Roles already exist");
      return;
    };
    const values = await Promise.all([
      new roleModel({ role: "medico" }).save(),
      new roleModel({ role: "admin" }).save(),
      new roleModel({ role: "secretario" }).save(),
    ]);
    console.log(values);
  } catch (error) {
    console.error("Error creating roles:", error);
    throw error;
  }
};

export default createRoles;

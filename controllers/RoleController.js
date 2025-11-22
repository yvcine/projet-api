const Role = require("../models/Role");

const RoleController = {
  getAllRoles: async (req, res) => {
    const roles = await Role.findAll();
    res.json(roles);
  },
  getRoleById: async (req, res) => {
    const role = await Role.findByPk(req.params.id);
    if (!role) return res.status(404).json({ message: "Rôle non trouvé" });
    res.json(role);
  },
  createRole: async (req, res) => {
    const { name } = req.body;
    const role = await Role.create({ name });
    res.status(201).json({ message: "Rôle créé", role });
  },
  updateRole: async (req, res) => {
    const role = await Role.findByPk(req.params.id);
    if (!role) return res.status(404).json({ message: "Rôle non trouvé" });
    await role.update(req.body);
    res.json({ message: "Rôle mis à jour", role });
  },
  deleteRole: async (req, res) => {
    const role = await Role.findByPk(req.params.id);
    if (!role) return res.status(404).json({ message: "Rôle non trouvé" });
    await role.destroy();
    res.json({ message: "Rôle supprimé" });
  }
};

module.exports = RoleController;

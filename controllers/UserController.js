const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Role = require("../models/Role");

const UserController = {

  // Inscription
  register: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

      const { name, email, password, role_id } = req.body;

      // Vérifier si email existe
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) return res.status(400).json({ message: "Email déjà utilisé" });

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await User.create({ name, email, password: hashedPassword, role_id });

      res.status(201).json({ message: "Utilisateur créé", user });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Erreur serveur" });
    }
  },

  // Connexion
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });
      if (!user) return res.status(400).json({ message: "Utilisateur non trouvé" });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ message: "Mot de passe incorrect" });

      const token = jwt.sign({ id: user.id, role_id: user.role_id }, process.env.JWT_SECRET, { expiresIn: "1d" });
      res.json({ token });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Erreur serveur" });
    }
  },

  // CRUD utilisateur (admin)
  getAllUsers: async (req, res) => {
    const users = await User.findAll({ include: Role });
    res.json(users);
  },

  getUserById: async (req, res) => {
    const user = await User.findByPk(req.params.id, { include: Role });
    if (!user) return res.status(404).json({ message: "Utilisateur non trouvé" });
    res.json(user);
  },

  updateUser: async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: "Utilisateur non trouvé" });
    await user.update(req.body);
    res.json({ message: "Utilisateur mis à jour", user });
  },

  deleteUser: async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: "Utilisateur non trouvé" });
    await user.destroy();
    res.json({ message: "Utilisateur supprimé" });
  }
};

module.exports = UserController;
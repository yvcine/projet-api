// middleware/role.js
// usage: roleMiddleware('admin') or roleMiddleware(['admin','moderator'])
module.exports = (allowed) => {
  const allowedArr = Array.isArray(allowed) ? allowed : [allowed];
  return (req, res, next) => {
    if (!req.user) return res.status(401).json({ message: "Non authentifié" });
    // assume role stored as role name via eager include or join; fallback to roleId check
    const roleName = req.user.roleName || req.user.role?.name || null;
    if (roleName && allowedArr.includes(roleName)) return next();
    // fallback: numeric roleId (if you map roleId=1 => admin etc.)
    if (req.user.roleId && allowedArr.includes(req.user.roleId)) return next();
    return res.status(403).json({ message: "Accès refusé (rôle requis)" });
  };
};

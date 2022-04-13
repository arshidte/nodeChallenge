import jwt from "jsonwebtoken";

export const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      res.json("Not authenticated, token failed");
    }
  }

  if (!token) {
    res.status(401);
    res.json("Not authenticated, No token");
  }
};

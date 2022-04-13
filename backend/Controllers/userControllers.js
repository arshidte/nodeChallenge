import generateToken from "../utils/generateToken.js";

const id = "1njbhugvty67";
const username = "user";
const password = "12345";

export const authUser = async (req, res) => {
  try {
    const { user, pwd } = req.body;

    if (user === username && pwd === password) {
      res.json({
        username: user,
        token: generateToken(id),
      });
    } else {
      res.status(404);
      res.json({ message: "User not found" });
    }
  } catch (error) {
    res.json(error);
  }
};


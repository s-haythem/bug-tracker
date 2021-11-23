const jwt = require("jsonwebtoken");
const User = require("../Models/Users");

const isAuth = async (req, res, next) => {
  try {
    const token = req.header("auth-token");
    //check the existance of the token
    if (!token)
      return res.status(401).json({ msg: "user not authentificated" });

    //decode the token
    const decodedToken = await jwt.verify(token, process.env.PASS_TOKEN);

    //find this specific user
    const user = await User.findById(decodedToken.id);

    //check for the user
    if (!user) return res.status(404).json({ msg: "user not found " });

    //create user
    req.user = user;

    next();
  } catch (error) {
    res.status(401).json({ msg: "user is not authorized" });
  }
};

// const authAdmin =  async (req, res, next) => {
//   const userRole = req.user.role;
//   if (userRole !== "admin") {
//     res.status(401);
//     return res.send("Not allowed");
//   }
//   next();
// };

// const authDev =  async (req, res, next) => {
//   const userRole = req.user.role;
//   if (userRole !== "developer") {
//     res.status(401);
//     return res.send("Not allowed");
//   }
//   next();
// };

// const authClient =  async (req, res, next) => {
//   const userRole = req.user.role;
//   if (userRole !== "client") {
//     res.status(401);
//     return res.send("Not allowed");
//   }
//   next();
// };

module.exports = { isAuth };

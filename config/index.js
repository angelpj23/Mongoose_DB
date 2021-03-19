if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

module.exports = {
  ACCESS: process.env.ACCESS,
};

const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./db/Database");


// Handling uncaught exceptions
process.on("uncaughtException", (err) => {
    console.error(`Error: ${err.message}`);
    console.error(`Shutting down the server due to an uncaught exception`);
    process.exit(1);
  });

  // Config
dotenv.config({ path: "config/.env" });

// Connect to database
connectDatabase();


// Assign PORT
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
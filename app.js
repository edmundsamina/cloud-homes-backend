import express from "express";
import propertiesRouter from "./routes/routes.js";
const app = express();

app.use(express.json());
app.use("/api/properties", propertiesRouter);


const PORT = 3000;

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});

export default app;

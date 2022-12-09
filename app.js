import express from "express";
import propertiesRouter from "./routes/routes.js";
const app = express();
const PORT = process.env.PORT;


app.use(express.json());
app.use("/api/properties", propertiesRouter);


app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});

export default app;

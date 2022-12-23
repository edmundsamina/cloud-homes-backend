import express from "express";
var propertiesRouter = express.Router();

import {
getAllProperties,
getPropertiesByDescription,
getPropertiesByLocation,
getPropertiesByName

} from "../models/models.js"

//get
propertiesRouter.get("/", async function (req, res) {
    if (req.query.location !== undefined) {
      const result = await getPropertiesByLocation(req.query.location);
      return res.json({ success: true, payload: result });
    }
    if (req.query.metaverse !== undefined) {
        const result = await getPropertiesByName(req.query.metaverse);
        return res.json({ success: true, payload: result });
      }
      if (req.query.description !== undefined) {
        const result = await getPropertiesByDescription(req.query.description);
        return res.json({ success: true, payload: result });
      }
    const result = await getAllProperties();
    res.json({ success: true, payload: result });
  });


  export default propertiesRouter

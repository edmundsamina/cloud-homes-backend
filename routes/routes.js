import express from "express";
var propertiesRouter = express.Router();

import {
getAllProperties,
getPropertiesByDescription,
getPropertiesByMetaverse,
getPropertiesByName

} from "../models/models.js"

//get
propertiesRouter.get("/", async function (req, res) {

    if (req.query.metaverse !== undefined) {
      const result = await getPropertiesByMetaverse(req.query.metaverse, req.query.rent, req.query.type,req.query.bedrooms, req.query.bathrooms);
      return res.json({ success: true, payload: result });
    }
    if (req.query.name !== undefined) {
        const result = await getPropertiesByName(req.query.name);
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

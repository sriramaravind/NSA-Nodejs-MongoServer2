module.exports = app => {
  const freezes = require("../controllers/tutorial.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", freezes.create);

  // Retrieve all freezes
  router.get("/", freezes.findAll);

  // Retrieve all published freezes
  router.get("/published", freezes.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", freezes.findOne);

  // Update a Tutorial with id
  router.put("/:id", freezes.update);

  // Delete a Tutorial with id
  router.delete("/:id", freezes.delete);

  // Create a new Tutorial
  router.delete("/", freezes.deleteAll);

  app.use("/api/freezes", router);
};

const express = require("express");

const router = express.Router();
const articlesController = require("../controllers/articlesControllers.js");

// Index - Recupera la lista di tutti i post
router.get("/", articlesController.index);

// Show - Recupera i dettagli di un post specifico per ID
router.get("/:id", articlesController.show);

// Store - Crea un nuovo post
router.post("/", articlesController.store);

// Update - Aggiorna un post esistente tramite ID
router.put("/:id", articlesController.update);

// Delete - Elimina un post tramite ID
router.delete("/:id", articlesController.destroy);

module.exports = router;

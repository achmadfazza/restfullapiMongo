const router = require("express").Router();
const itemController = require("../controllers/item.Controller");

router.get("/item", itemController.getItem);
router.get("/item/:id", itemController.getItemDetail);
router.post("/item", itemController.create);
router.put("/item/:id", itemController.update);
router.delete("/item/:id", itemController.delete);

module.exports = router;

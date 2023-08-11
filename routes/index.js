const Router = require("koa-router");
const router = new Router();
const CompanyController = require("../controllers/company.controller");

router.post("/company", CompanyController.create);
router.get("/company", CompanyController.findAll);
router.get("/company/:id", CompanyController.findOne);
router.patch("/company/:id", CompanyController.update);
router.delete("/company/:id", CompanyController.destroy);

module.exports = router;

const Koa = require("koa");
const Router = require("koa-router");
const Parser = require("koa-parser");
const db = require("./models/");
const router = require("./routes");

const PORT = 3000;
const app = new Koa();

app.use(Parser());

db.sequelize.sync().then(() => {
  console.log("all models have been synced");
});
app.context.db = db;

app.use(router.routes());

app.on("error", (err) => {
  console.log(`Server recognized unexpected ERROR : `, err);
});
app.listen(PORT);

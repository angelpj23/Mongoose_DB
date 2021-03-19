const mongoose = require("mongoose");

const { ACCESS } = require("./config");
const axios = require("axios").default;
const cheerio = require("cheerio");
const cron = require("node-cron");

mongoose.connect(ACCESS, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const { Exmvc } = require("./models");

cron.schedule("0 */2 * * *", async () => {
  console.log("Updated 🚀");
  //0 5 * * * = se actualizara cada 2 hrs todos los dias
  const html = await axios.get("https://listindiario.com/");
  const $ = cheerio.load(html.data); //$ sera la funcion de cheerio que recibira la data de get
  const titles = $(".topleftmain_titulo"); //clase del <h2>
  titles.each((index, element) => {
    const mvc = {
      title: $(element).text(), //de ese elemento queremos el texto
      link: $(element).children().attr("href"), //children es el elemento hijo de <h2> que viene siendo en este caso la etiqueta <a> que contiene el "href", attr es un atributo
    };
    Exmvc.create([mvc]);
  });
});

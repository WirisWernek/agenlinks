const express = require("express");
const bodyparser = require("body-parser");
require("dotenv").config();
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(
  bodyparser.urlencoded({
    extended: false,
  })
);
app.use(bodyparser.json());

app.get("/", (req, res) => {
  let user = {
    username: "Wiris Wernek",
    links: [
      { link: "https://github.com/WirisWernek", tipo: "GITHUB" },
      { link: "https://www.linkedin.com/in/wiris-wernek", tipo: "LINKEDIN" },
      { link: "https://www.instagram.com/wiriswernek", tipo: "INSTAGRAM" },
      { link: "https://www.twitch.tv/lost905", tipo: "TWITCH" },
      { link: "https://www.youtube.com/@wiriswernek", tipo: "YOUTUBE" },
      { link: "https://home-wiriswernek.vercel.app", tipo: "PORTIFOLIO" },
      { link: "https://twitter.com/wiriswernek", tipo: "TWITTER" },
      { link: "https://home-wiriswernek.vercel.app", tipo: "OUTROS" },
    ],
  };
  res.render("index", { user: user });
});

app.listen(5000, () => {
  console.log("App rodando");
});

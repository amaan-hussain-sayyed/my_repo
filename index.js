let express = require("express")
let app = express()
require("dotenv").config()

app.use(express.static("public"))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index")
})
app.listen(process.env.PORT, () => {
    console.log("server started to http://localhost:" + process.env.PORT)
})
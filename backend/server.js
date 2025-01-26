const express = require("express")
const mongoose = require('mongoose')
const dotenv = require("dotenv")
const user = require("./models/userModel");
const cors = require("cors")



const router = require("./routes/userRoute")

const app = express()

dotenv.config();


app.use(express.json())
app.use(cors())

mongoose.connect(process.env.URI).then(() => {
    console.log("connected succ")
    app.listen(process.env.PORT, (err) => {
        if (err)
            console.log("err at listening");
        console.log("listening at ", process.env.PORT);

    }

    );

})
    .catch((err) => {
        console.log("error ", err)
    });

app.use(router);



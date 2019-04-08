import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import PlantData from './PlantData';
import settings from '../settings'

const express = require("express");
const logger = require("morgan");

const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

const dbRoute = settings.DB_ROUTE;

// connects our back end code with the database
mongoose.connect(
    dbRoute,
    { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ defaultCharset: 'utf-8', extended: true }));
app.use(bodyParser.json());
app.use(logger("dev"));

router.get("/getPlants", (req, res) => {
    PlantData.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data});
    });
});

router.get("/plantFilter/:filter", (req, res) => {
    const filter = req.params.filter;

    PlantData.find(
        {$or:[
                {'scientific_name': new RegExp(filter, "gi")},
                {'common_name': new RegExp(filter, "gi")},
                {'family_name': new RegExp(filter, "gi")},
                {'flowering_season': new RegExp(filter, "gi")}
        ]}, (err, data) => {
            if (err) return res.json({ success: false, error: err });
            return res.json({ success: true, data: data});
        });
});

//take json of new plant and put into database
/* TEMPLATE CURL POST:
    curl --header "Content-Type: application/json" --request POST --data '{ "scientific_name": "Aeschynomyne rudis", "common_name": "", "family_name": "Fabaceae", "description": "", "flowering_season": "", "gps": "-24.99978N -57.54022E", "image_name": ["IMG_8714.jpg"]}' http://localhost:3000/api/newPlant
*/
router.post("/newPlant", (req, res) => {
    let data = new PlantData();
    const { scientific_name, common_name, family_name, description,
    flowering_season, gps, image_name } = req.body;

    data.scientific_name = scientific_name;
    data.common_name = common_name;
    data.family_name = family_name;
    data.description = description;
    data.flowering_season = flowering_season;
    data.gps = gps;
    data.image_name = image_name;

    data.save(err => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

app.use("/api", router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));

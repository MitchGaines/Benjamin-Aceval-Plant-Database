const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlantSchema = new Schema(
    {
        scientific_name: String,
        common_name: String,
        family_name: String,
        description: String,
        flowering_season: String,
        gps: String,
        image_name: []
    }
);

module.exports = mongoose.model("plants", PlantSchema);
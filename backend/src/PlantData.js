
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlantSchema = new Schema(
    {
        scientific_name: String,
        common_name: String,
        family_name: String,
        description: String,
        flowering_season: String,
        facts: String,
        gps: String,
        sources: String,
        image_name: String
    },
    { timestamp: true }
);

module.exports = mongoose.model("plants", PlantSchema);
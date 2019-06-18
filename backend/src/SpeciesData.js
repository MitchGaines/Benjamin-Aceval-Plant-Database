const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SpeciesSchema = new Schema(
    {
            scientific_name: String,
            author: String,
            common_name: String,
            family_name: String,
            species_type: String,
            bird_call: String,
            description: String,
            flowering_season: String,
            gps: String,
            image_name: []
    }
);

module.exports = mongoose.model("species", SpeciesSchema);
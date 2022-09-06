const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let stateSchema = new Schema ({
    name: { type: String },
    countryname: { type: String },
    country: { type: mongoose.Schema.Types.ObjectId, ref: "Country" },
    population: { type: Number, require: true },
    area: { type: String },
    neighbouringState: [{ type: mongoose.Schema.Types.ObjectId, ref: "State"}]
});

module.exports = mongoose.model('State', stateSchema);
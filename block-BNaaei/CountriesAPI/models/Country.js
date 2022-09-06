const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let countrySchema = new Schema({
  name: { type: String },
  states: [{ type: Schema.Types.ObjectId, ref: 'State'}],
  continent: { type: String },
  population: { type: Number, required: true },
  ethnicity: { type: String },
  neighbouring: [{ type: Schema.Types.ObjectId, ref: 'Country'}],
  area: { type: String }
});

module.exports = mongoose.model('Country', countrySchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let categorySchema = new Schema ({
    name: { type: String, required: true },
    bookId: { type: mongoose.Schema.Types.ObjectId }
});


module.exports = mongoose.model('Category', categorySchema);
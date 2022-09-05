const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bookSchema = new Schema ({
    name: { type: String,required: true },
    category: { type: String,required: true },
    author: { type: String },
    comments: [{ type: mongoose.Schema.Types.ObjectId,ref: "Comment" }]
});

module.exports = mongoose.model('Book', bookSchema);



const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bookSchema = new Schema ({
    name: { type: String, required: true},
    category: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category"}],
    author: { type: String },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
    tags: [{ type: String }]
});

module.exports = mongoose.model('Book', bookSchema);
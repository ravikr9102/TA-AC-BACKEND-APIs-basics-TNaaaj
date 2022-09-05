const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let commentSchema = new Schema ({
    content: { type: String,required: true },
    bookId: { type: mongoose.Schema.Types.ObjectId,ref: "Book"},
});

module.exports = mongoose.model('Comment', commentSchema);
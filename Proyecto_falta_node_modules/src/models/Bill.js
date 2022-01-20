const mongoose = require("mongoose");
const { Schema } = mongoose;

const SchemaBill = new Schema({             //terminar *1
    title: { type: String, required: true},
    value: { type: Number, required: true}
});

module.exports = mongoose.model("Bill", SchemaBill);
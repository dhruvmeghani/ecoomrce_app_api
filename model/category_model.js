var mongoose = require('mongoose')

var categorySchema = new mongoose.Schema({

    name:{

        type:String,

    }

})

module.exports = mongoose.model('category',categorySchema);
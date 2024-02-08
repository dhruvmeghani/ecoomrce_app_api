const { response } = require('express');
var category = require('../model/category_model');

exports.insert =  async (req, res) => {

    var data = await category.create(req.body)

    res.status(200).json({

        data

    })

}

exports.delete = async (req, res) => {

    var data = await category.findByIdAndDelete(req.body.id)

    res.status(200).json({

        status:"delete successfully"

    })

}

exports.update = async (req, res) => {

    var data = await category.findByIdAndUpdate(req.body.id, req.body)

    res.status(200).json({

        status:"update successfully"

    })

}

exports.see_data = async (req, res) => {


    var data = await category.find()

    res.status(200).json({

        data

    })

}
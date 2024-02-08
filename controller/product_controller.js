var product = require('../model/product_model');

exports.insert = async (req, res) => {

    var data = await product.create(req.body)

    res.status(200).json({

        data

    })

}

exports.update = async (req, res) => {

    var data = await product.findByIdAndUpdate(req.params.id, req.body)

    res.status(200).json({
        
        status:"update Successfully"

    })

}

exports.delete = async (req, res) => {

    var data = await product.findByIdAndDelete(req.params.id)

    res.status(200).json({

        status:"delete Successfully"

    })


}

exports.see_data = async (req, res) => {

    var data = await product.find()

    res.status(200).json({

        data

    })

}
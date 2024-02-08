var user = require('../model/user_model');
var bcrypt = require('bcrypt');


exports.insert = async (req, res) => {

    var bcrypt_pass = await req.body.password;

    req.body.password = await bcrypt.hash(bcrypt_pass, 10);

    var data = await user.create(req.body)

    res.status(200).json({

        data

    })

}

exports.delete = async (req, res) => {

    var data = await user.findByIdAndDelete(req.params.id)

    res.status(200).json({

        status:"delete successfully"

    })

}

exports.update = async (req, res) => {

    var data = await user.findByIdAndUpdate(req.params.id, req.body)

    res.status(200).json({

        status:"update successfully"

    })

}

exports.see_data =async (req, res) => {

    var data = await user.find()

    res.status(200).json({

        data

    })

}
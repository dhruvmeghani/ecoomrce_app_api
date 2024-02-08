var admin = require("../model/admin_model");
var bcrypt = require("bcrypt");


exports.insert = async (req, res) => {

    var bcrypt_pass = req.body.password;

    req.body.password = await bcrypt.hash(bcrypt_pass, 10);

    var data = await admin.create(req.body)

    res.status(200).json({

        data

    })

}

exports.delete = async (req, res) => {


    var data = await admin.findByIdAndDelete(req.params.id);

    res.status(200).json({

        status: "delete Success"

    })

}

exports.update = async (req, res) => {

    var data = await admin.findByIdAndUpdate(req.params.id, req.body)

    res.status(200).json({

        status: "update Success"

    })

}

exports.see_data = async (req, res) => {

    var data = await admin.find()

    res.status(200).json({

        data

    })

}

exports.login = async (req, res) => {

    var data = await admin.find({ 'email': req.body.email })

    if (data.length == 1) {

        bcrypt.compare(req.body.password, data[0].password, async function (err, result) {

            if (result == true) {

                res.status(200).json({

                    status: "login successfully"

                })

            } else {

                res.status(200).json({

                    status: "login failed"

                })

            }


        });

    } else {

        res.status(200).json({

            status: "login failed"

        })

    }

}
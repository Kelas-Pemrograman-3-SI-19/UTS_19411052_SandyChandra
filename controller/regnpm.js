const regnpmModel = require('../model/regnpm')
const objectId = require('mongoose').Types.ObjectId

exports.create = (data) =>
    new Promise((resolve, reject) => {
        regnpmModel.create(data)
            .then(() => {
                resolve({
                    status: true,
                    pesan: 'Berhasil Input regnpm'
                })
            }).catch(() => reject({
                status: false,
                pesan: 'Gagal Input regnpm'
            }))
    })

    exports.getAll = () =>
    new Promise((resolve, reject) => {
        regnpmModel.find()
            .then(result => {
                resolve({
                    status: true,
                    pesan: 'Berhasil Menampilkan Data',
                    result: result
                })
            }).catch(() => reject({
                status: true,
                pesan: 'Gagal Mendapatkan Data',
                result: []
            }))
    })

    exports.getById = (id) =>
    new Promise((resolve, reject) => {
        regnpmModel.findOne({
            _id: objectId(id)
        }).then(result => resolve({
            status: true,
            pesan: 'Berhasil Mendapatkan Data',
            result: result
        })).catch(() => reject({
            status: false,
            pesan: 'Gagal Mendapatkan Data',
            result: null
        }))
    })

exports.update = (id, data) =>
        new Promise((resolve, reject) => {
            regnpmModel.updateOne({
                _id: objectId(id)
            }, data).then(() => resolve({
                status: true,
                pesan: 'Berhasil Update Data'
            })).catch(() => reject({
                status: false,
                pesan: 'Gagal Update'
            }))
        })

exports.delete = (id) =>
        new Promise((resolve, reject) => {
            regnpmModel.deleteOne({
                _id: objectId(id)
            }).then(() => resolve({
                status: true,
                pesan: 'Berhasil Delet Data'
            })).catch(() => reject({
                status: false,
                pesan: 'Gagal Update Data'
            }))
        })
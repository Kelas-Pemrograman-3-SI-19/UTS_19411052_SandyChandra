const mongoose = require('mongoose')
const Schema = mongoose.Schema

const regnpmSchema = new Schema({
    namalengkap: {
        type : String,
    },
    tempatlahir: {
        type : String,
    },
    tanggallahir: {
        type : String
    },
    nohp: {
        type : String
    },
    nomorregistrasi: {
        type : String
    },
    email: {
        type : String
    },
    passsword: {
        type : String
    }
})

module.exports = mongoose.model('regnpm', regnpmSchema)
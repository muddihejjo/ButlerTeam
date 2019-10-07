const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const EmployeeUserSchema = new Schema({

    userExists: {
        type: Boolean,
        required: true
    },

    facebookId: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    job_type: {
        type: Array,
        required: true
    },

    canWorkLocations: {
        type: Array,
        required: true
    },

    profilePicture: {
        type: String,
    },

    city: {
        type: String,
        required: true
    },

    address: {
        type: String,
    },

    zipCode: {
        type: String,
    },

    phoneNumber: {
        type: String,
    },

    profileDescription: {
        type: String,
    },

    driversLicense: {
        type: String,
        required: true
    },

    ownsCar: {
        type: String,
        required: true
    },

    englishLanguageSkill: {
        type: String,
        required: true
    },

    danishLanguageSkill: {
        type: String,
        required: true
    },

    role: {
        type: Array,
        required: true
    }
});

EmployeeUserSchema.pre('save', function(next) {
    if (!this.isModified('password')) return next();
    this.password = this.encryptPassword(this.password);
    next();
});

EmployeeUserSchema.methods = {

    // check the passwords on signin
    authenticate: function(plainTextPassword) {
        return bcrypt.compareSync(plainTextPassword, this.password);
    },

    // hash the passwords
    encryptPassword: function(plainTextPassword) {
        if (!plainTextPassword) {
            return ''
        } else {
            var salt = bcrypt.genSaltSync(10);
            return bcrypt.hashSync(plainTextPassword, salt);
        }
    },

    toJson: function() {
        let obj = this.toObject();
        delete obj.password;
        return obj;
    }
};


module.exports = mongoose.model('employee', EmployeeUserSchema);

const mongoose = require('mongoose');
const { Schema } = mongoose;

const EmployeeSchema = new Schema({
    name: { type: String, required: true },
    position: { type: String, required: true },
    office: { type: String, required: true },
    salary: { type: Number, required: true }
});

// guardara en la base de datos, los datos EmployeeSchema y los guardara en la tabla que creara llamada Employee
module.exports = mongoose.model('Employee', EmployeeSchema);
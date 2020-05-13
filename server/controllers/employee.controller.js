const Employee = require('../models/employee');
const employeeController = {};

employeeController.getEmployees = async(req, res) => {
    const employees = await Employee.find();
    res.json(employees);
}

employeeController.getEmployee = async(req, res) => {
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
}

employeeController.createEmployee = async(req, res) => {
    const employee = new Employee(req.body);
    await employee.save();
    res.json({
        'status': 'Employee'
    });
}
employeeController.updateEmployee = async(req, res) => {
    const { id } = req.params;
    const employee = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
    await Employee.findByIdAndUpdate(id, { $set: employee }, { new: true });
    res.json({ status: 'employee updated' });
}

employeeController.deleteEmployee = async(req, res) => {
    await Employee.findByIdAndRemove(req.params.id)
    res.json({ status: 'Employee deleted' });
}


module.exports = employeeController;
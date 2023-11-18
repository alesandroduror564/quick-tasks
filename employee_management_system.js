Here is a code in JavaScript that implements a simple Employee Management System. Although it may not be extremely sophisticated, it meets the complexity and length requirements.

```javascript
// employee_management_system.js

// Employee class definition
class Employee {
  constructor(id, name, age, position) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.position = position;
  }

  promote(newPosition) {
    console.log(`${this.name} has been promoted to ${newPosition}.`);
    this.position = newPosition;
  }

  resign() {
    console.log(`${this.name} has resigned.`);
  }

  getEmployeeDetails() {
    return `ID: ${this.id}\nName: ${this.name}\nAge: ${this.age}\nPosition: ${this.position}`;
  }
}

// EmployeeManagementSystem class definition
class EmployeeManagementSystem {
  constructor() {
    this.employees = [];
  }

  hireEmployee(employee) {
    this.employees.push(employee);
    console.log(`${employee.name} has been hired.`);
  }

  fireEmployee(employeeId) {
    const index = this.employees.findIndex((employee) => employee.id === employeeId);
    if (index !== -1) {
      const employee = this.employees[index];
      this.employees.splice(index, 1);
      console.log(`${employee.name} has been fired.`);
    } else {
      console.log(`Employee with ID ${employeeId} not found.`);
    }
  }

  promoteEmployee(employeeId, newPosition) {
    const employee = this.employees.find((employee) => employee.id === employeeId);
    if (employee) {
      employee.promote(newPosition);
    } else {
      console.log(`Employee with ID ${employeeId} not found.`);
    }
  }

  getEmployeeDetails(employeeId) {
    const employee = this.employees.find((employee) => employee.id === employeeId);
    if (employee) {
      console.log(employee.getEmployeeDetails());
    } else {
      console.log(`Employee with ID ${employeeId} not found.`);
    }
  }

  listAllEmployees() {
    console.log('Employee List:');
    this.employees.forEach((employee) => {
      console.log(`- ${employee.name}, ${employee.position}`);
    });
  }
}

// Usage example
const empSys = new EmployeeManagementSystem();

const john = new Employee(1, 'John Doe', 30, 'Developer');
empSys.hireEmployee(john);

const mary = new Employee(2, 'Mary Smith', 35, 'Manager');
empSys.hireEmployee(mary);

empSys.listAllEmployees();

empSys.promoteEmployee(1, 'Senior Developer');
empSys.fireEmployee(2);

empSys.getEmployeeDetails(2);
empSys.getEmployeeDetails(1);
```

This code implements two classes (`Employee` and `EmployeeManagementSystem`) that allow for the management of employees. It includes methods for hiring, firing, promoting, and getting details of employees. A few employees are hired and managed using the `EmployeeManagementSystem` class. The classes demonstrate object-oriented programming concepts in JavaScript.
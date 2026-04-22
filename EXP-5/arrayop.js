// 1. Create an empty list (array) to hold our employees
let employees = [];

// ---------------------------------------------------------
// HELPER FUNCTIONS (To make our code shorter and reusable)
// ---------------------------------------------------------

// This function finds the "outputArea" in your HTML and puts content inside it
function renderOutput(htmlContent) {
    document.getElementById('outputArea').innerHTML = htmlContent;
}

// This function takes a list of employees and turns them into neat "Cards" instead of a table
function createEmployeeCards(employeeList) {
    // If the list is empty, tell the user
    if (employeeList.length === 0) {
        return "<p>No employees found.</p>";
    }

    let html = ""; // Start with empty text

    // Loop through every single employee in the list
    employeeList.forEach(function(emp) {
        // Add a styled box (using Bootstrap classes) for each employee to our html text
        html += `
            <div class="border p-3 mb-2 bg-white rounded shadow-sm border-start border-primary border-4">
                <h5 class="text-dark mb-1">${emp.name}</h5>
                <p class="mb-0 text-muted">
                    <strong>ID:</strong> ${emp.id} &nbsp;|&nbsp; 
                    <strong>Department:</strong> ${emp.dept} &nbsp;|&nbsp; 
                    <strong>Salary:</strong> $${emp.salary}
                </p>
            </div>
        `;
    });

    return html; // Give back the finished HTML so it can be displayed
}


// BUTTON FUNCTIONS (These run when you click the buttons)


// 1. Add Employee
function addEmployee() {
    // Get the values the user typed into the input boxes
    const id = document.getElementById('empId').value;
    const name = document.getElementById('empName').value;
    const salary = document.getElementById('empSalary').value;
    const dept = document.getElementById('empDept').value;

    // Check if any box was left empty
    if (id === "" || name === "" || salary === "" || dept === "") {
        alert("Please fill in all fields.");
        return; // Stop the function here if something is missing
    }

    // Create an employee "object" and save it to our list
    let newEmployee = {
        id: id,
        name: name,
        salary: Number(salary), // Turn the salary text into a real math number
        dept: dept
    };
    employees.push(newEmployee);

    // Clear the input boxes so they are empty for the next person
    document.getElementById('empId').value = '';
    document.getElementById('empName').value = '';
    document.getElementById('empSalary').value = '';
    document.getElementById('empDept').value = '';

    // Show a success message
    renderOutput(`<div class="alert alert-success">Employee <strong>${name}</strong> added successfully!</div>`);
}

// 2. Display All
function displayAll() {
    // Use our helper function to make cards for ALL employees
    let result = createEmployeeCards(employees);
    renderOutput(`<h5>All Employees</h5>` + result);
}

// 3. Salary > 50,000
function displayHighSalary() {
    // Create a new list containing ONLY people making more than 50000
    let highEarners = employees.filter(function(emp) {
        return emp.salary > 50000;
    });

    // Use our helper function to make cards for just the high earners
    let result = createEmployeeCards(highEarners);
    renderOutput(`<h5>Employees earning > $50,000</h5>` + result);
}

// 4. Total Salary
function showTotalSalary() {
    let total = 0; // Start at zero

    // Loop through everyone and add their salary to the total
    employees.forEach(function(emp) {
        total = total + emp.salary;
    });

    renderOutput(`<h5 class="text-success">Total Salary Payout: $${total}</h5>`);
}

// 5. Average Salary
function showAvgSalary() {
    if (employees.length === 0) {
        renderOutput("No employees to calculate average.");
        return;
    }

    let total = 0;
    employees.forEach(function(emp) {
        total = total + emp.salary;
    });

    // Divide the total by the number of employees
    let average = total / employees.length;
    
    renderOutput(`<h5 class="text-secondary">Average Salary: $${average.toFixed(2)}</h5>`);
}

// 6. Count by Department
function countByDepartment() {
    if (employees.length === 0) {
        renderOutput("No employees available.");
        return;
    }

    let itCount = 0;
    let cseCount = 0;
    let eceCount = 0;
    let civilCount = 0;

    // Tally up the departments
    employees.forEach(function(emp) {
        if (emp.dept === "IT") itCount++;
        if (emp.dept === "CSE") cseCount++;
        if (emp.dept === "ECE") eceCount++;
        if (emp.dept === "Civil") civilCount++;
    });

    // Create a simple list to show the counts
    let resultHTML = `
        <ul class="list-group">
            <li class="list-group-item">IT: <strong>${itCount}</strong></li>
            <li class="list-group-item">CSE: <strong>${cseCount}</strong></li>
            <li class="list-group-item">ECE: <strong>${eceCount}</strong></li>
            <li class="list-group-item">Civil: <strong>${civilCount}</strong></li>
        </ul>
    `;
    
    renderOutput(`<h5>Employee Count by Department</h5>` + resultHTML);
}
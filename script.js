function startUp () {
    console.log('IT\S ALIIIIIIIIVE!');
}
startUp();


let totalSalary = 0;


// submit button
function addEmployee(event) {

    // immediate actions
    event.preventDefault();
    console.log('addEmployee called.');

    // get input data
    let formFirstName = document.getElementById('firstNameInput').value;
    let formLastName = document.getElementById('lastNameInput').value;
    let formIdNumber = document.getElementById('idInput').value;
    let formJobTitle = document.getElementById('titleInput').value;
    let formAnnualSalary = document.getElementById('annualSalaryInput').value;

    // store input in table
    let newEmployee = 
        `
        <tr>
            <td>${formFirstName}</td>
            <td>${formLastName}</td>
            <td>${formIdNumber}</td>
            <td>${formJobTitle}</td>
            <td id="salary">${formAnnualSalary}</td>
            <td><button onclick="deleteEmployee(event)">❌</button></td>
        </tr>
        `;
    let table = document.getElementById('table');
    table.innerHTML += newEmployee; //adds to table

    // update total salary
    totalSalary += Number(formAnnualSalary);
    let totalMonthlySalary = totalSalary/12;
    let roundedMonthly = Math.floor(totalMonthlySalary * 100) / 100 //rounds value
    document.getElementById('counter').textContent = roundedMonthly; //updates footer

    // over-budget indicator
    let footer = document.querySelector('footer');
    if (totalSalary/12 > 20000) {
        footer.classList.add('over-budget');
    }

    // clear form inputs
    document.getElementById('firstNameInput').value = '';
    document.getElementById('lastNameInput').value = '';
    document.getElementById('idInput').value = '';
    document.getElementById('titleInput').value = '';
    document.getElementById('annualSalaryInput').value = '';
}


// delete button press
function deleteEmployee (event) {

    // immediate action
    console.log('deleteEmployee called.');

    // reflects in monthly total
    let targetParent = event.target.parentElement.parentElement.children;
    for (targetChild of targetParent) {
        if (targetChild.id === 'salary')
            totalSalary -= Number(targetChild.innerHTML)
            document.getElementById('counter').innerHTML = totalSalary/12
    }

    // make red text go away if below 20k
    if (totalSalary/12 <= 20000) {
        let footer = document.querySelector('footer');
        footer.classList.remove('over-budget');
    }

    // removes <tr>
    event.target.parentElement.parentElement.remove();
}
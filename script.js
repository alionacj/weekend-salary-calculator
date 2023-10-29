startUp();

function startUp () {
    console.log('IT\S ALIIIIIIIIVE!');
}
 
let totalSalary = 0;

// submit button press
function addEmployee(event) {

    // immediate actions
    event.preventDefault();
    console.log('addEmployee called.');

    // get input data
    let formFirstName = document.getElementById('firstNameInput').value
    let formLastName = document.getElementById('lastNameInput').value
    let formIdNumber = document.getElementById('idInput').value
    let formJobTitle = document.getElementById('titleInput').value
    let formAnnualSalary = document.getElementById('annualSalaryInput').value

    // store input in table
    let table = document.getElementById('table');
    table.innerHTML +=
    `
        <tr>
            <td>${formFirstName}</td>
            <td>${formLastName}</td>
            <td>${formIdNumber}</td>
            <td>${formJobTitle}</td>
            <td>${formAnnualSalary}</td>
            <td><button onclick="deleteEmployee(event)">❌</button></td>
        </tr>
    `

    // update total salary
    totalSalary += Number(formAnnualSalary)
    document.getElementById('counter').innerHTML = totalSalary/12

    // over-budget indicator
    let footer = document.querySelector('footer');
    if (totalSalary/12 > 20000) {
        footer.classList.add('red-text');
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
    console.log('deleteEmployee called.');

    // reflects in monthly total
        // take the annual salary of the clicked tr
        // let whatIsThis = event.target.parentElement.parentElement.getElementById('remover');
        // console.log(whatIsThis)

    // remove salary from total

    // make red text go away if below 20k
    if (totalSalary <= 20000) {
        let footer = document.querySelector('footer');
        footer.classList.remove('red-text');
    }

    // removes <tr>
    event.target.parentElement.parentElement.remove();
}
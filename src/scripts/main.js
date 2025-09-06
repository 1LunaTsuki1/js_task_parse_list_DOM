'use strict';

const ul = document.querySelector('ul');
const list = [...document.querySelectorAll('ul > li')];

function parseSalary(money) {
  return Number(money.replace(/[$,]/g, ''));
}

function sortList(value) {
  value.sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
  );

  value.forEach((li) => {
    ul.appendChild(li);
  });
}

function getEmployees(value) {
  const result = value.map((employee) => {
    return {
      name: employee.textContent.trim(),
      position: employee.dataset.position,
      salary: parseSalary(employee.dataset.salary),
      age: parseSalary(employee.dataset.age),
    };
  });

  return result;
}

sortList(list);
getEmployees(list);
// write code here

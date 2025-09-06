'use strict';

const list = [...document.querySelectorAll('li')];

function sortList(value) {
  const ul = value[0].parentElement;

  value.sort(
    (a, b) =>
      Number(b.dataset.salary.replace(/[^\d.-]/g, '')) -
      Number(a.dataset.salary.replace(/[^\d.-]/g, '')),
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
      salary: Number(employee.dataset.salary.replace(/[^\d.-]/g, '')),
      age: Number(employee.dataset.age.replace(/[^\d.-]/g, '')),
    };
  });

  return result;
}

sortList(list);
getEmployees(list);
// write code here

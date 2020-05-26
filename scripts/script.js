const initSection = document.querySelector('#init');
const mainSection = document.querySelector('#main');
const initializeButton = document.querySelector('#initialize');
const calculateButton = document.querySelector('#calculate');

const nameInput = document.querySelector('#name');
const xInput = document.querySelector('#x');
const yInput = document.querySelector('#y');

const tableBody = document.querySelector('#tableBody');

const initializeFunction = () => {
  initSection.style.display = 'none';
  mainSection.style.display = 'flex';
};

const calculateFunction = () => {
  if (!nameInput.value || !xInput.value || !yInput.value) {
    alert('Preencha valores válidos!... 😅');
    return;
  }

  const xNumber = Number(xInput.value);
  const yNumber = Number(yInput.value);

  const minNumber = Math.min(xNumber, yNumber);
  const maxNumber = Math.max(xNumber, yNumber);

  const multiples3 = [];
  const multiples5 = [];

  for (let i = minNumber; i <= maxNumber; i++) {
    if (i % 3 === 0) multiples3.push(i);
    if (i % 5 === 0) multiples5.push(i);
  }

  multiples3Value = multiples3.length ? multiples3.join(', ') : '-';
  multiples5Value = multiples5.length ? multiples5.join(', ') : '-';

  const mediaValue = String((xNumber + yNumber) / 2.0);

  const tr = document.createElement('tr');
  const tdName = document.createElement('td');
  const tdX = document.createElement('td');
  const tdY = document.createElement('td');
  const tdMedia = document.createElement('td');
  const td3 = document.createElement('td');
  const td5 = document.createElement('td');

  tdName.innerHTML = `<span>${nameInput.value}</span>`;
  tdX.innerHTML = `<span>${xNumber}</span>`;
  tdY.innerHTML = `<span>${yNumber}</span>`;
  tdMedia.innerHTML = `<span>${mediaValue}</span>`;
  td3.innerHTML = `<span>${multiples3Value}</span>`;
  td5.innerHTML = `<span>${multiples5Value}</span>`;

  td3.setAttribute('title', multiples3Value);
  td5.setAttribute('title', multiples5Value);

  tr.appendChild(tdName);
  tr.appendChild(tdX);
  tr.appendChild(tdY);
  tr.appendChild(tdMedia);
  tr.appendChild(td3);
  tr.appendChild(td5);

  tableBody.appendChild(tr);

  nameInput.value = '';
  xInput.value = '';
  yInput.value = '';
};

initializeButton.addEventListener('click', initializeFunction);
calculateButton.addEventListener('click', calculateFunction);
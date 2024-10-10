function calculator() {
  function findInputs() {
    return document.querySelectorAll("input");
  }

  const inputs = findInputs();

  const calculatorData = {
    bill: 0,
    percent: 0,
    people: 0,
  };

  function updateData(id) {
    const input = document.getElementById(id);
    calculatorData[id] = input ? parseFloat(input.value) || 0 : 0;
    isPercentValid(id);
    isPeopleValid(id)
    calculateBillSplit();
  }

  function calculateBillSplit() {
    const { bill, percent, people } = calculatorData;

    const tipAmount = (bill * (percent / 100)) / people;
    const totalPerPerson = (bill + bill * percent / 100) / people;

    const amountText = document.querySelector("[data-amount]");
    const totalText = document.querySelector('[data-total]');

    if (!(isFinite(tipAmount) && isFinite(totalPerPerson))) {
      amountText.textContent = "$0.00"
      totalText.textContent = "$0.00"
      return
    }

    amountText.textContent = tipAmount.toFixed(2);
    totalText.textContent = totalPerPerson.toFixed(2);
  }

  function isPercentValid(id) {
    if (!(id === "percent")) {
      return;
    }
    const valuePercent = document.getElementById(id).value;
    calculatorData[id] = parseFloat(valuePercent) <= 100 ? parseFloat(valuePercent) : 0;
  }


  function isPeopleValid(id) {
    if (!(id === 'people')) {
      return;
    }

    const valuePeople = document.getElementById(id).value;
    const errorPeople = document.querySelector("[data-people-error");

    if (!(valuePeople > 0)) {
      errorPeople.classList.remove('hidden');
      return
    }
    errorPeople.classList.add('hidden');
  }

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      updateData(input.id);
    });
  });

  inputs.forEach((input) => {
    input.addEventListener("keydown", (evt) => {
      if (evt.key == "-" || evt.key == 'e') {
        evt.preventDefault();
        return;
      }
    });
  });

  function findButtons() {
    return document.querySelectorAll("button");
  }

  const buttons = findButtons();

  buttons.forEach(button => {
    button.addEventListener("click", (evt) => {
      const percent = evt.target.dataset.percent;
      calculatorData.percent = percent;
      
      const newButtonActive = evt.target;
      
      let currentActiveButton = document.querySelector(`.active`);

      if (currentActiveButton) {
        currentActiveButton.classList.remove('bg-[#26c2ae]', 'text-very-dark-cyan', "active");
      }

      newButtonActive.classList.add('bg-[#26c2ae]', 'text-very-dark-cyan', "active");
      


      calculateBillSplit();
    });
  });

  const buttonReset = document.querySelector('#reset');
  buttonReset.addEventListener("click", () => {
    
    const inputs = findInputs();
    inputs.forEach(input =>{
      input.value = ''
    });

    const amountText = document.querySelector("[data-amount]");
    const totalText = document.querySelector('[data-total]');

    amountText.textContent = "$0.00";
    totalText.textContent = "$0.00";

    Object.assign(calculatorData, {
      bill: 0,
      percent: 0,
      people: 0,
    })
  });
}

calculator();

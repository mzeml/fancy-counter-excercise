const increaseButtonEl = document.querySelector('.counter__button--increase');
const decreaseButtonEl = document.querySelector('.counter__button--decrease');
const counterValueEl = document.querySelector('.counter__value');
const resetButtonEl = document.querySelector('.counter__reset-button');
const counterEl = document.querySelector('.counter');
const counterTitleEl = document.querySelector('.counter__title');
const proToggleButtonEl = document.querySelector('.toggle__pro');
const proToggleIconEl = document.querySelector('.toggle__icon ');

let isPro = false;

const incrementCounter = () => {
  const currentValueAsNumber = +counterValueEl.textContent;

  if (currentValueAsNumber >= 5 && !isPro) {
    console.log('t');
    counterEl.classList.add('counter--limit');
    proToggleButtonEl.classList.add('toggle__pro--limit');
    counterTitleEl.innerHTML = 'Limit! Buy <b>Pro</b> for >5';
    increaseButtonEl.disabled = true;
    decreaseButtonEl.disabled = true;

    proToggleButtonEl.disabled = true;
  } else {
    const increasedCurrentValue = currentValueAsNumber + 1;
    counterValueEl.textContent = increasedCurrentValue;
  }

  increaseButtonEl.blur();
};

const decrementCounter = () => {
  const currentValueAsNumber = +counterValueEl.textContent;

  if (currentValueAsNumber > 0) {
    const decreasedCurrentValue = currentValueAsNumber - 1;
    counterValueEl.textContent = decreasedCurrentValue;
  }
  decreaseButtonEl.blur();
};

const resetCounter = () => {
  counterValueEl.textContent = 0;
  increaseButtonEl.disabled = false;
  decreaseButtonEl.disabled = false;
  proToggleButtonEl.disabled = false;
  counterTitleEl.textContent = 'Fancy Counter';
  counterEl.classList.remove('counter--limit');
  proToggleButtonEl.classList.remove('toggle__pro--limit');
  resetButtonEl.blur();
};

const togglePro = () => {
  if (isPro) {
    proToggleIconEl.classList.remove('fa-lock-open');
    proToggleIconEl.classList.add('fa-lock');
  } else {
    proToggleIconEl.classList.remove('fa-lock');
    proToggleIconEl.classList.add('fa-lock-open');
  }
  isPro = !isPro;
};

document.addEventListener('keydown', incrementCounter);
increaseButtonEl.addEventListener('click', incrementCounter);
decreaseButtonEl.addEventListener('click', decrementCounter);
resetButtonEl.addEventListener('click', resetCounter);
proToggleButtonEl.addEventListener('click', togglePro);

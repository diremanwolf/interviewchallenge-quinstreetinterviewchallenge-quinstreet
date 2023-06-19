const city = document.getElementById('city')
const state = document.getElementById('state')

const isNumericOrModifierKey = event => {
  const key = event.keyCode;
  return ((key >= 48 && key <= 57) || (key >= 96 && key <= 105) || (event.shiftKey === true || key === 35 || key === 36) || (key === 8 || key === 9 || key === 13 || key === 46) || (key > 36 && key < 41));
};

const enforcePhoneFormat = event => {
  if(!isNumericOrModifierKey(event)) {
		event.preventDefault();
	}
};

const convertPhoneToMask = event => {
  const target = event.target;
	const input = event.target.value.replace(/\D/g,'').substring(0,10);
  
  const lada = input.substring(0,3);
	const middle = input.substring(3,6);
	const last = input.substring(6,10);

	if (input.length > 6){
    target.value = `(${lada}) ${middle}-${last}`;
  } else if (input.length > 3) {
    target.value = `(${lada}) ${middle}`;
  } else if (input.length > 0){
    target.value = `(${lada}`;
  }
};

const validatePhoneInputValue = () => {
  const phone = document.getElementById('phone');
  const phoneValue = phone.value.replace(/\D/g,'').substring(0,10);

  if(phoneValue.length !== 10) {
    phone.classList.add('error');
  } else {
    phone.classList.remove('error')
    
    return true;
  }
}

const phone = document.getElementById('phone');

phone.addEventListener('keydown', event => {
  enforcePhoneFormat(event)
})
phone.addEventListener('keyup', event => {
  convertPhoneToMask(event)
})
phone.addEventListener('blur', () => {
  validatePhoneInputValue()
})

const validateNameInputValue = () => {
  const name = document.getElementById('name');
  const nameValue = name.value;

  function isAlphabetOnly(value) {
    return /[a-zA-Z]/g.test(value);
  }

  if(nameValue.length === 0 || nameValue.length < 2 || !isAlphabetOnly(nameValue)) {
    name.classList.add('error');
  } else {
    name.classList.remove('error');

    return true;
  }
}

const name = document.getElementById('name')

name.addEventListener('blur', () => {
  validateNameInputValue()
})

const validateEmailInputValue = () => {
  const email = document.getElementById('email');
  const emailValue = email.value;

  function isAlphabetOnly(value) {
    return /\S+@\S+\.\S+/g.test(value);
  }

  if(emailValue.length === 0 || emailValue.length < 2 || !isAlphabetOnly(emailValue)) {
    email.classList.add('error');
  } else {
    email.classList.remove('error');

    return true;
  }
}

const email = document.getElementById('email');

email.addEventListener('blur', () => {
  validateEmailInputValue()
})

const button = document.getElementById('submit');

const disableInputsAndButton = () => {
  let cursorStyle = 'cursor: not-allowed;'
  name.disabled = true;
  name.style = cursorStyle;
  
  city.disabled = true;
  city.style = cursorStyle;

  state.disabled = true;
  state.style = cursorStyle;
  
  phone.disabled = true;
  phone.style = cursorStyle;
  
  email.disabled = true;
  email.style = cursorStyle;
  
  button.disabled = true;
  button.style = cursorStyle + ' opacity: .75;';

  button.children[0].innerHTML = "Submitted";
}

button.addEventListener('click', event => {
  event.preventDefault();
  if(!validateNameInputValue()|| !validatePhoneInputValue() || !validateEmailInputValue()) {
    return;
  }
  
  disableInputsAndButton();
  
  // ajax with values of inputs
})
// SECTION: declaration of constants.

const name = document.getElementById('name');
const city = document.getElementById('city');
const state = document.getElementById('state');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const button = document.getElementById('submit');

const URL = " https://formsws-hilstaging-com-0adj9wt8gzyq.runscope.net/solar";

// SECTION: declaration of functions.

const isNumericOrModifierKey = event => {
  const key = event.keyCode;
  return ((key >= 48 && key <= 57) || (key >= 96 && key <= 105) || (event.shiftKey === true || key === 35 || key === 36) || (key === 8 || key === 9 || key === 13 || key === 46) || (key > 36 && key < 41));
};

const enforcePhoneFormat = event => {
  if(!isNumericOrModifierKey(event)) {
		event.preventDefault();
	}
};

function convertPhoneToMask(event) {
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

function retrieveDataFromInput() {
  return {
    name: name.value,
    city: city.value,
    state: state.value,
    phone: phone.value,
    email: email.value
  }
};

function xhrAjax(request) {
  const xhr = new XMLHttpRequest();

  xhr.open('POST', URL, true);
  xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');

  xhr.send(JSON.stringify(request));

  xhr.onload = function () {
    if(xhr.status === 201) {
      console.info("Successful post.") 
    }
  };
};

function validatePhoneInputValue() {
  const phone = document.getElementById('phone');
  const phoneValue = phone.value.replace(/\D/g,'').substring(0,10);

  if(phoneValue.length !== 10) {
    phone.classList.add('error');
  } else {
    phone.classList.remove('error')
  }
};

function disableInputsAndButton() {
  name.classList.add('disabled');
  city.classList.add('disabled');
  state.classList.add('disabled');
  phone.classList.add('disabled');
  email.classList.add('disabled');
  button.classList.add('disabled');
};

// SECTION: functions being added to elements as event listeners.

phone.addEventListener('keydown', event => enforcePhoneFormat(event))

phone.addEventListener('keyup', event => convertPhoneToMask(event))

phone.addEventListener('blur', event => validatePhoneInputValue())

button.addEventListener('click', event => {
  event.preventDefault();

  if(name.value !== '' && phone.value !== '' && email.value !== '') {
    button.children[0].innerHTML = 'Submitted';
  
    disableInputsAndButton();
    
    const request = retrieveDataFromInput();
    xhrAjax(request);
  }

  return false;
})
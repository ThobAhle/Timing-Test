// write cool JS hwere!!

function init(e) {
    if (!e.target.closest('.item')) return;
    let hero = document.querySelector('div[data-pos="0"]');
    let target = e.target.parentElement;
    [target.dataset.pos,hero.dataset.pos] = [hero.dataset.pos,target.dataset.pos];
  }

  window.addEventListener('click',init,false);



// VALIDATION

document.getElementById('adoptionForm').addEventListener('submit', function(event) {

    event.preventDefault();

    let isValid = validateForm();

    if (isValid) {
        alert('Form is valid and ready to be submitted.');
    }
});

function validateForm() {

    let name = document.getElementById('name').value.trim();
    let address = document.getElementById('address').value.trim();
    let tlf = document.getElementById('tlf').value.trim();
    let zipcode = document.getElementById('zipcode').value.trim();
    let email = document.getElementById('email').value.trim();
    let gender = document.getElementById('gender').value;


    if (name === '') {
        alert('Navn is required.');
        return false;
    }
    if (address === '') {
        alert('Adresse is required.');
        return false;
    }
    if (tlf === '' || !/^\d+$/.test(tlf)) {
        alert('Telefon is required and must be a number.');
        return false;
    }
    if (zipcode === '' || !/^\d{4,5}$/.test(zipcode)) {
        alert('Postnummer is required and must be a 4 or 5 digit number.');
        return false;
    }
    if (email === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Valid email is required.');
        return false;
    }
    if (gender === '') {
        alert('Køn is required.');
        return false;
    }

    return true;
}

// COOKIES

document.addEventListener('DOMContentLoaded', function() {
    const cookiePolicy = document.getElementById('cookie-policy');
    const acceptButton = document.getElementById('accept-cookies');
    const form = document.getElementById('cookie-form');

    setTimeout(() => {
        cookiePolicy.classList.add('show');
    }, 500); 

    acceptButton.addEventListener('click', () => {
        cookiePolicy.classList.remove('show');

        const formData = new FormData(form);
        const selectedCookies = [];
        formData.forEach((value, key) => {
            selectedCookies.push(value);
        });
        console.log('Cookie preferences:', selectedCookies);
    });
});
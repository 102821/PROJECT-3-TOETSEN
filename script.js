let navMenu = document.querySelector('nav ul');
let burgeMenu = document.querySelector('.burger-menu');


burgeMenu.addEventListener('click', ()=> {
    navMenu.classList.toggle('active');
    console.log(navMenu)
});

// Details-product pagina
// function showProduct(productN) {
//     location.href = 'products-page.html';

    
// }
// let cartDiv = document.querySelectorAll('');

let form = document.querySelector('.cart-page-container');
console.log(form)

// form.addEventListener('submit', (e)=> {
//     e.preventDefault();
//     // if () {

//     // }
//     let valid = true;

//     let errorDivs = document.querySelectorAll('.error');
//     errorDivs.forEach((div)=> {
//         div.textContent = '';
//     })

//     const fName = document.querySelector('#firstName').value;
//     console.log(fName);
//     if (!/^[A-Za-z]{2,}$/.test(fName) && fName !== '') {
//         document.querySelector('#fNameError').textContent = 'Ongeldig voornaam !';
//         valid = false
//     }
    
//     const lName = document.querySelector('#lastName').value;
//     console.log(lName)

//     if (!/^[A-Za-z]{2,}$/.test(lName) && lName !== '') {
//         document.querySelector('#lNameError').textContent = 'Ongeldig achternaam !';
//         valid = false
//     }

//     // /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     const email = document.querySelector('#email').value;
//     // if (!/^[A-Za-z]{2,}$/.test(email) && email !== '') {
//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email !== '') {
//         document.querySelector('#emailError').textContent = 'Ongeldig email !';
//         valid = false
//     }


//     // /^[A-Za-z\s]+ \d+[a-zA-Z]?$/ 
//     const address = document.querySelector('#address').value;
//     if (!/^[A-Za-z\s]+ \d+[a-zA-Z]?$/.test(address) && address !== '') {
//         document.querySelector('#addressError').textContent = 'Ongeldig adres ((noordplein) (44) ) !';
//         valid = false
//     }


//     const postCode = document.querySelector('#postCode').value;
//     if (!/^[1-9][0-9]{3}\s?[A-Za-z]{2}$/.test(postCode) && postCode !== '') {
//         document.querySelector('#postCodeError').textContent = 'ongeldig postcode !';
//         valid = false
//     }

//     if (valid) {
//         alert(`${fName.toUpperCase()}, Bestteling is gelukt :)`)
//     }
// })
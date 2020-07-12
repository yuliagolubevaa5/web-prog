this.checked = false;

let color = document.getElementById('color_btn');
let style = document.getElementById('blockStyle');
let form = document.getElementById('myForm');
var password = document.getElementById('password');
let passwordConfirmation = document.getElementById('password-confirmation');
let sex = document.getElementsByName('sex');
let male = document.getElementById('sex');
let submit = form.querySelector('.validateBtn');
let select = document.getElementById('age');


addColor = function () {
    style.classList.toggle("black");
    form.classList.toggle("otherColor");

    if (style.className == "black") {
        color.innerText = "Светлая тема";
    } else {
        color.innerText = "Тёмная тема";
    }
}

     var error = document.createElement('div');
     error.classList.add('error');

ageValidate = function() {
    if (select.value == 'default') {
        error.innerHTML = 'Укажите свой возраст';
        select.after(select, error);
    }
    return false;
}

 passwordConfirm = function() {
     if (password.value !== passwordConfirmation.value) {
         passwordConfirmation.classList.add('_red-bg');
         password.classList.add("_red-bg");

         if (password.value.length !== passwordConfirmation.value.length) {
             error.innerHTML = 'Разная длина паролей';
         } else {
             error.innerHTML = 'Пароли не совпадают';
         }
         passwordConfirmation.after(passwordConfirmation, error)
     }
     return false;
 }

  passwordValidate = function() {
     if (password.value.length < 8) {
         error.innerHTML = 'Недостаточное количество </br> символов в пароле (8)';
         password.after(password, error)
     }
     return false;
 }

 errorDelete = function() {
     var errors = form.querySelectorAll('.error')

     for (let i = 0; i < errors.length; i++) {
         errors[i].remove()
     }
 }

 sexIdentity = function() {
     if (sex[0].attributes || sex[1].attributes !== checked) {
         error.innerHTML = 'Не указан пол';
         select.before(select, error)
     }
     return false;
 }

 form.addEventListener('submit', function () {
     event.preventDefault();
     errorDelete();
     sexIdentity();
     ageValidate();
     passwordValidate();
     passwordConfirm();
 })
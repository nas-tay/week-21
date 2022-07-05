let userName, lastName, accountName, password, passwordRepeat, errorMessage1, errorMessage2, errorMessage3, errorMessage4, errorMessage5;

function getVariables() {
    userName = document.querySelector("#name");
    lastName = document.querySelector("#lastName");
    accountName = document.querySelector("#accountName");
    password = document.querySelector("#exampleInputPassword1");
    passwordRepeat = document.querySelector(".passwordRepeat");
    errorMessage1 = document.querySelector(".errorMessage_1");
    errorMessage2 = document.querySelector(".errorMessage_2");
    errorMessage3 = document.querySelector(".errorMessage_3");
    errorMessage4 = document.querySelector(".errorMessage_4");
    errorMessage5 = document.querySelector(".errorMessage_5");
}

//Валидация для имен, делает первую букву заглавной и принимает только буквы и тире
function correctInput(e) {
    getVariables();
    this.value = this.value.replace(/[^a-zа-я-0-9]/gi, "");
    if (this.value) {
        let capitalFirst = this.value[0].toUpperCase() + this.value.slice(1);
        this.value = capitalFirst;
        let arr = this.value.split("-");
        if (arr[1]) {
            let capitalSecond = arr[1][0].toUpperCase() + arr[1].slice(1);
            arr[1] = capitalSecond;
            let capitalBoth = arr.join("-");
            this.value = capitalBoth;
        }
    }
}

document.querySelector("#name").addEventListener("input", correctInput);
document.querySelector("#lastName").addEventListener("input", correctInput);

function checkName() {
    getVariables();
    if (userName.validity.valueMissing) {
        //Проверка поля "Имя"
        userName.classList.add("input-border"); //появляется красная обводка для поля "Имя"
        errorMessage1.innerHTML = `<svg aria-hidden="true" class="stUf5b LxE1Id" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
        <span class="errorText">Укажите имя</span> `; //Выводится сообщение об ошибке
        errorMessage1.classList.add("errorMessage"); //Стили для сообщения об ошибке
    } else {
        return true;
    }
}

function checkLastName() {
    getVariables();
    if (lastName.validity.valueMissing) {
        //Проверка поля "Фамилия"
        lastName.classList.add("input-border"); //появляется красная обводка для поля "Фамилия"
        errorMessage1.innerHTML = `<svg aria-hidden="true" class="stUf5b LxE1Id" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
        <span class="errorText">Укажите фамилию</span> `; //Выводится сообщение об ошибке
        errorMessage1.classList.add("errorMessage"); //Стили для сообщения об ошибке
    } else {
        return true;
    }
}

function checkAccountName() {
    let accountNameFormat = /^[a-z0-9.]{1,30}$/;
    getVariables();
    if (accountName.validity.valueMissing) {
        //Проверка поля "Имя пользователя"(email)
        errorMessage2.innerHTML = `<svg aria-hidden="true" class="stUf5b LxE1Id" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
        <span class="errorText">Укажите адрес Gmail</span>`; //Сообщение об ошибке
        accountName.classList.add("input-border"); //Красная обводка
        document.querySelector(".details_1").innerHTML = "";
        errorMessage2.classList.add("errorMessage"); //Стили для сообщения об ошибке
        accountName.classList.add("accountCheck"); //Добавляется больший margin для поля email
        accountName.classList.remove("accountName"); //Убирается меньший margin для поля email
    } else if (!accountName.value.match(accountNameFormat)) {
        errorMessage3.innerHTML = `<svg aria-hidden="true" class="stUf5b LxE1Id" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
            <span class="errorText">Имя пользователя может включать латинские буквы (a-z), цифры (0-9) и точку (.).</span>`; //Сообщение об ошибке
        accountName.classList.add("input-border");
        errorMessage3.classList.add("errorMessage"); //Стили для сообщения об ошибке
        document.querySelector(".details_1").innerHTML = "";
    } else if (accountName.validity.tooShort || accountName.validity.tooLong) {
        errorMessage3.innerHTML = `<svg aria-hidden="true" class="stUf5b LxE1Id" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
            <span class="errorText">Имя пользователя должно содержать от 6 до 20 символов.</span>`; //Сообщение об ошибке
        accountName.classList.add("input-border");
        errorMessage3.classList.add("errorMessage"); //Стили для сообщения об ошибке
        document.querySelector(".details_1").innerHTML = "";
    } else {
        return true;
    }
}

function checkPassword() {
    getVariables();
    if (password.validity.valueMissing) {
        //Проверка поля "Пароль"
        errorMessage4.innerHTML = `<svg aria-hidden="true" class="stUf5b LxE1Id" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
        <span class="errorText">Введите пароль</span>`;
        password.classList.add("input-border"); //Красная обводка
        document.querySelector(".details_2").innerHTML = ""; //Сообщение об ошибке
        errorMessage4.classList.add("errorMessage"); //Стили для сообщения об ошибке
    } else if (password.validity.tooShort) {
        errorMessage4.innerHTML = `<svg aria-hidden="true" class="stUf5b LxE1Id" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
        <span class="errorText">Пароль не может быть короче 8 символов</span>`;
        passwordRepeat.classList.add("input-border"); //Красная обводка
        document.querySelector(".details_2").innerHTML = ""; //Сообщение об ошибке
        errorMessage4.classList.add("errorMessage"); //Стили для сообщения об ошибке
    } else if (password.value != passwordRepeat.value) {
        errorMessage5.innerHTML = `<svg aria-hidden="true" class="stUf5b LxE1Id" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
        <span class="errorText">Пароли не совпадают. Повторите попытку.</span>`;
        passwordRepeat.classList.add("input-border"); //Красная обводка
        document.querySelector(".details_2").innerHTML = ""; //Сообщение об ошибке
        errorMessage5.classList.add("errorMessage"); //Стили для сообщения об ошибке
    } else {
        return true;
    }
}

function finalCheck() {
    getVariables();
    let errors = document.querySelectorAll(".errorMessage");
    let borders = document.querySelectorAll(".input-border");

    let user = {
        name: userName.value,
        lastname: lastName.value,
        login: accountName.value,
        password: password.value,
    };

    errors.forEach((element) => {
        element.innerHTML = "";
        element.classList.remove("errorMessage");
    });

    borders.forEach((element) => {
        element.classList.remove("input-border");
    });

    accountName.classList.remove("accountCheck");
    accountName.classList.add("accountName");

    checkName();

    checkLastName();

    if (userName.validity.valueMissing && lastName.validity.valueMissing) {
        //Проверка если оба поля "Имя" и "Фамилия" не заполнены
        errorMessage1.innerHTML = `<svg aria-hidden="true" class="stUf5b LxE1Id" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
        <span class="errorText">Введите имя и фамилию</span> `; //Выводится сообщение об ошибке
        errorMessage1.classList.add("errorMessage"); //Стили для сообщения об ошибке
    }

    checkAccountName();

    checkPassword();

    if (checkName() && checkLastName() && checkAccountName() && checkPassword()) {
        // alert(`Добро пожаловать, ${userName.value}!`);
        let inputs = document.querySelectorAll("input");
        sendPost(user);
        for (const input of inputs) {
            input.value = "";
        }
    }
}

document.querySelector(".btn-submit").addEventListener("click", finalCheck);

//Показать-скрыть пароль
function show_hide_password() {
    if (password.getAttribute("type") == "password") {
        password.setAttribute("type", "text");
    } else {
        password.setAttribute("type", "password");
    }
}

document.querySelector("#showPassword").addEventListener("click", show_hide_password);

function sendPost(user) {
    fetch("https://httpbin.org/post", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application / json; charset=utf-8",
        },
    })
        .then((response) => response.json())
        .then((user) => {
            console.log(user);
        })
        .catch((error) => console.log(error));
}

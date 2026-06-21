function register() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let msg = document.getElementById("msg");

    // проверка: пароль 8 цифр
    if (!/^\d{8}$/.test(pass)) {
        msg.innerText = "❌ Пароль должен быть из 8 цифр!";
        return;
    }

    if (user === "") {
        msg.innerText = "❌ Введите никнейм!";
        return;
    }

    // сохраняем
    localStorage.setItem("user", user);
    localStorage.setItem("pass", pass);

    msg.innerText = "✅ Аккаунт создан!";
}


// ВХОД
function login() {
    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;

    let savedUser = localStorage.getItem("user");
    let savedPass = localStorage.getItem("pass");

    let msg = document.getElementById("msg");

    if (user !== savedUser) {
        msg.innerText = "❌ Никнейм не верный!";
        return;
    }

    if (pass !== savedPass) {
        msg.innerText = "❌ Пароль не верный!";
        return;
    }

    msg.innerText = "✅ Успешный вход!";
}

// Registration Function
function register() {
    event.preventDefault();
    var username = document.getElementById('newUsername').value;
    var password = document.getElementById('newPassword').value;
    var email = document.getElementById('newEmail').value;

    var user = {
        username: username,
        password: password,
        email: email
    }

    var json = JSON.stringify(user);
    localStorage.setItem(username, json);

    alert('Registration Successful!');
    console.log('Registration complete');
    console.log(user);
    console.log(window.location.href);
    window.location.href = "login.html";
}


// Login Function
function login() {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var user = localStorage.getItem(username);
    console.log(user);
    var data;

    if (user) {
        data = JSON.parse(user);
    } else {
        alert('User Not Found');
        return;
    }

    console.log(data);

    if(username == data.username && password == data.password){
        alert('Login Successful');
        window.location.href = "index.html";
    } else {
        alert('Wrong password');
    }
}




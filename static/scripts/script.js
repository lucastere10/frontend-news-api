//FUNÇÃO PARA LOGAR ESSA MERDA
function signup(e){
    
var user = {
    email: email,
    username: username,
    password: pass,
};

var json = JSON.stringify(user);
localStorage.setItem(username,json);
console.log('user added');



}


function loginFunc(e){
    event.preventDefault();
    console.log(123);
}


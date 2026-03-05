// we have call stack where everything is getting executed
//this call stack also contain global execution and other execution gets added on top of this
// "this" gives the current context value


function SetUsername(username){
    this.username=username
    console.log("called");
}

function createUser(username, email,password){
    SetUsername.call(this, username)

    this.email=email;
    this.password=password
}

const chai= new createUser("chai", "chai@gmail.com", "12345")
console.log(chai);

//object literal
const user = {
    username: "Neelam",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log(this.username)
    }
}
// console.log(user)
// console.log(user.getUserDetails())
console.log(this)



// construction function

// "new" keyword is construction function which allow us to make multiple instannce from one object
// but there are some cases where we want new instance dont disturb main object


function User(username,loginCount, isLoggedIn){
    this.username= username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    return this //by default this is passed
}

// this function will get override when new instance is created because "new" keyword is not used
// const userOne = User("Neelam", 12, true)
// console.log(userOne);

const userOne = new User("Neelam", 12, true)
const userTwo = new User("HeHeHeHe", 12, true)
console.log(userOne);
console.log(userTwo);


//when "new" keyword is used new instance of theta object is created
// steps how
//1: create object
// 2: data get passon in the object
// 3: this data gets add in that instance





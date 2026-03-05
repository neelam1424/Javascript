class User{
    constructor(email,password){
        this.email=email
        this.password=password
    }
    get email(){
        return this.email.toUpperCase()
    }

    set email(value){
        this._email = value

    }
    get password(){
        return `${this._password}neelam`
    }

    set password(value){
        this._password = value
    }
}

const neelam = new User("n@gmail.com", "abc")
console.log(neelam.email)
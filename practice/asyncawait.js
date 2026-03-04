let promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task is complete")
        resolve()
        
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed")
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
        
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})



function step1(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Step 1 completed");
            resolve();
        },1000)
    })
}

function step2(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Step 2 completed")
            resolve()
        },1000)
    })
}

function step3(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Step 3 completed")
            resolve()
        },1000)
    })
}

async function runFunction(){
    await step1();
    await step2();
    await step3();
    console.log("Doneeeeee");
}


runFunction()



//behind the scene


async function getAllUsers(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        console.log(data)  
        
    } catch (error) {
        console.log(error)
    }
}

getAllUsers()
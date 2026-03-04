const persons = [
    {firstname: "Aarav", lastname: "Mehta"},
    {firstname: "Elena", lastname: "Martinez"},
    {firstname: "Caleb", lastname: "Thompson"},
]

function getFullName(item){
    return [item.firstname, item.lastname]
}

let ans = persons.map(getFullName);
console.log(ans);

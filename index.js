let count = 0
function increment() {
    count = count +1
    document.getElementById("count-el").innerText = count
    console.log(count)
}


function save() {
let prev = count +"-"
document.getElementById("save-el").innerText += prev
document.getElementById("count-el").innerText = 0
count = 0

}




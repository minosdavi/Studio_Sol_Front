<<<<<<< HEAD


var number_aux = ' ';
var button_user = document.querySelector("#number_user_button")
var button_new_game = document.querySelector('#button_new_game')
var answer = 0

var set_answer = async() =>{
    var url = 'https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300'
    var answer_fetch = await fetch(url)
    var answer_aux = await answer_fetch.json()
    console.log(answer_aux["value"])
    answer = parseInt(answer_aux["value"]) 
}


button_new_game.onclick = function(){

    set_answer()

}

button_user.onclick = function() {
    number_aux = document.querySelector('#number_user')
    number_compare(number_aux.value, answer)
    console.log(number_aux.value)
    console.log(answer)
}





function number_compare (number_aux, answer){
    if(number_aux > answer) alert("numero grande da porra")
    if(number_aux == answer) alert("acertou mizeravi")
    if(number_aux < answer) alert ("numerozinho pikenu")
=======
console.log('1')

const number_compare = async() =>{
    document.getElementById("number_user")
            .addEventListener("focusout")
    
    
    console.log('1')

}

function click_number_button(){
    document.getElementById('number_user_button')
>>>>>>> 2dfb6f0c33d7e5e7d6cc05eed4c914d79d1297e4
}
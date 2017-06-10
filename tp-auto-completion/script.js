// Function for uppercase first character and lowercase after
const firstUppCase = word => {
    let first = word.charAt(0).toUpperCase();
    let second = '';
    for (let i = 1; i < word.length; i++) {
        second += word.charAt(i).toLowerCase();
    };
    return first + second;
};

let input = document.getElementById('search');
let countPush = 0; //Count the number push pad directional
let lastEvent; //Test if last event is with pad directional

input.addEventListener('keyup', function(event){

    let rollDiv = document.getElementById('roll');
    rollDiv.innerHTML = '';
    let inputVal = firstUppCase(input.value);
    let lenInput = inputVal.length;
    let lenTowns = towns.length;

    for (let i = 0; i < lenTowns; i++) {  // in towns array

        let divAdd = document.createElement('div');  //Create div content for result

        for (let j = 0; j < lenInput; j++) {  //in input array

            let y = 0;

            towns[i][j] != inputVal[j] && y++;
//if letter towns != letter input we stop verif for this word
            if (y > 0) {
                break;
            }
            else if (j == lenInput-1 && y == 0) {
                divAdd.innerHTML = towns[i];
                divAdd.className = "results";
                rollDiv.appendChild(divAdd);
            }
        };              // End Second For
    };                 // End First For

    let divClick = document.querySelectorAll('.results');

    for (let i = 0; i < divClick.length; i++) {
        divClick[i].addEventListener('mouseover', function(e){
            input.value = e.target.innerHTML;
        });
        divClick[i].addEventListener('click', function(e){
            input.value = e.target.innerHTML;
            rollDiv.style.display = 'none';
        });
    };

    input.addEventListener('keydown', function(e){
        rollDiv.style.display = 'block';
    });
});

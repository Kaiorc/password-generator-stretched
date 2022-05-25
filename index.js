//Array de caracteres
let characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", 
                "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", 
                "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", 
                "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", 
                "5", "6", "7", "8", "9", ".", "+", "-", "*", "/", "^", "~", "<", ">", 
                "?","!", "&", "%", "#", "@", "$"];

let initialVal = document.getElementById("initial-val");

//Função que cria e retorna a senha aleatória
function generatePassword() {
    //String de senha vazia
    let password = "";
    //For que gera um número aleatório que define uma posição aleatória
    //do array de caracteres a ser lida, e salva o caractere da posição 
    //do array, na string
    for (let i = 0; i < initialVal.value; i++) {
        let randomValue = Math.floor( Math.random()*characters.length)
        
        password += (characters[randomValue]);
    }
    return password;
}

//Função que renderiza as senhas
function renderPassword() {
    clear();
    
    //For que percorre os elementos com id "svg-span" e atribui o .textContent 
    //de cada um, invocando generatePassword()
    for (let i = 1; i < 5; i++) {
        let btn = document.getElementById("btn"+[i]);
        
        btn.textContent = generatePassword();
    }
}

//Função que limpa o valor dentro das tags com o id "svg-span" e os ícones
function clear() {
    let icon = document.querySelector(".fa-solid fa-ellipsis");
    
    //If que verifica se o elemento com id "icon" já foi removido,
    //se não foi, o remove
    if(icon != null){
        icon.remove();
    }
    
    //For que percorre os elementos com id "svg-span" e "icon" e limpa os seus conteúdos
    for(let i = 1; i < 5; i++){
        let btn = document.getElementById("btn"+[i]);
        
        btn.textContent = "";
    }
}
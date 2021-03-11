const string='juanitoalimaña'
let vocals = 'aeiou'
let consonants = ''

function vowelsConsonants(){
    for( let letter of string){
        if(vocals.includes(letter)){
            console.log(letter)
        }
        else{
            consonants += letter +"\n"
        }    
    }
    console.log(consonants)
}

console.log(vowelsConsonants())
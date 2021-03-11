
// with s= Number(1234) catch return message:
//  "s.split is not function"
// const s = Number(1234)
// with s= "1234" try return:
//  "4231"
const s = Number(1234)
// const s = "1234"



function reverseString(s) {
    const str_reverse = s.split("").reverse().join("")
    return str_reverse
}

try{
    console.log(reverseString(s))
} 
catch(e){
    console.log(e.message)
    console.log(s)

}
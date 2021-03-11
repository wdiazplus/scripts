function operacionescon(number){
    let first_number = number

    return {
        suma: function (other_number){
            return first_number + other_number
        },
        resta:function(other_number){
            return first_number - other_number
        },
        multiplica: function (other_number){
            return first_number * other_number
        },
        divide:function (other_number){
            return first_number / other_number
        }
    }
}

let operocon2 = operacionescon(2)
console.log(operocon2.suma(3))
console.log(operocon2.resta(3))
console.log(operocon2.multiplica(3))
console.log(operocon2.divide(3))


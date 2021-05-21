
const drawALine = function(lineLength = 30, lineCharacter = "-"){
    let line = ""
    for (let i = 0; i < lineLength; i++){
        line += lineCharacter
    }

    return line
}

const writeHeader = function(header, lineLength = 30, lineCharacter = "-"){ // default values for parameters

    /*if (lineLength === undefined){
        lineLength = 30
    }
    if (lineCharacter === undefined){
        lineCharacter = "-"
    }*/

    let line = drawALine(lineLength, lineCharacter)

    console.log(`\n>${line}<| ${header.toUpperCase()} |>${line}<`)
}

writeHeader("switch case", 40, "=")
/*writeHeader("switch case", 20, "~")
writeHeader("switch case", 10, ".")
writeHeader("switch case", 60, "_")*/

let user = "Max"

let welcomeText

if (user === "Marcelo"){
    welcomeText = "Hi Marcelo!"
} else if (user === "Jamal"){
    welcomeText = "Good morning Jamal!"
} else if (user === "James"){
    welcomeText = "Hey James, how are you doing?"
} else {
    welcomeText = `Hello ${user}!`
}

console.log("IF-ELSE:", welcomeText)

const greetTheUser = function(userToGreet){
    switch(userToGreet){
        case "Marcelo": welcomeText = "Hi Marcelo!"; break
        case "Jamal": welcomeText = "Good morning Jamal!"; break
        case "James": welcomeText = "Hey James, how are you doing?"; break
        case "Luna": welcomeText = "Hi Luna! Is everything ok?"; break
        case "Max": welcomeText = "Hey there, Max! Happy to see you"; break
        default: welcomeText = `Hello ${userToGreet}!`
    }

    console.log("SWITCH-CASE:", welcomeText)
}

greetTheUser(user)

writeHeader("ENUMERATING A STRING")
let stringIWantToEnumerate = "Hello Strivers"
                           // 01234567
/*console.log(stringIWantToEnumerate[6])

let anotherWayToSeeOurString = ["H", "e", "l", "l", "o", " ", "S", "t", "r", "i", "v", "e", "r", "s" ]
console.log(anotherWayToSeeOurString[6])*/

// console.log(stringIWantToEnumerate[4])
let composedString = ""
for (let i = 0; i < stringIWantToEnumerate.length; i++){
    let currentCharacter = stringIWantToEnumerate[i]
    console.log(currentCharacter)
    composedString += currentCharacter
}
console.log(composedString)

// SCOPE OF VARIABLE
// a variable only exists in its enclosing block { ... }
/*{
    let scopedVariable = "I'm scoped!"
    console.log(scopedVariable)
} // scopedVariable disappears from now on

console.log(scopedVariable)*/

let myEvechangingVariable = "FirstValue"
myEvechangingVariable = "SecondValue"
myEvechangingVariable = "ThirdValue"

const myFixedVariable = "InitialValue" // Performances / need to be fixed
//myFixedVariable = "AnotherValue" // this will throw an error


writeHeader("COPYING SOME CONTENT TO ANOTHER ARRAY")
let listOfOrders = [
    { id: "A232389", product: "Wireless Keyboard", quantity: 1 },
    { id: "A232154", product: "Red Bull 500ml", quantity: 10 },
    { id: "A232301", product: "HD Webcam", quantity: 1 },
]

let orderIds = []
for (let i = 0; i < listOfOrders.length; i++){
    let currentObject = listOfOrders[i]
    let orderId = currentObject.id
    orderIds.push(orderId)
}

console.log(orderIds)

let stringConvertedToAnArrayOfCharacters = []
for (let i = 0; i < stringIWantToEnumerate.length; i++){
    let currentCharacter = stringIWantToEnumerate[i]
    if (currentCharacter === " ")
        continue // go straight to the next iteration

    if (currentCharacter === "v")
        break // exit from the for loop completely

    stringConvertedToAnArrayOfCharacters.push(currentCharacter)
    // other code
}
console.log(stringConvertedToAnArrayOfCharacters)


writeHeader("TO UPPER/LOWER")
// More about String functions on: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

let welcomeYell = welcomeText.toUpperCase() // nameOfTheFunction() => calling/invoking a function called nameOfTheFunction
console.log(welcomeYell)

let welcomeWhisper = welcomeText.toLowerCase()
console.log(welcomeWhisper)


writeHeader("FIND FIRST OCCURRENCE OF CHARACTER")
let indexOfW = welcomeText.indexOf("w") // here we are providing a parameter/argument to the function: "W", the letter we want to look for
console.log(indexOfW)

writeHeader("GETTING A SUBSTRING")
let nameOnly = welcomeText.slice(4, 9)
console.log(nameOnly)

writeHeader("SPLIT INTO SEVERAL STRING")
// we want to remove any symbol before
let welcomeTextWithoutSymbols = welcomeText.replace(",", "")
welcomeTextWithoutSymbols = welcomeTextWithoutSymbols.replace("?", "")
let arrayOfWords = welcomeTextWithoutSymbols.split(" ")
console.log(arrayOfWords)

writeHeader("JOIN ELEMENTS OF AN ARRAY INTO A STRING")
let dashedWelcome = arrayOfWords.join("-|-")
console.log(dashedWelcome)


greetTheUser("Attila")
greetTheUser("James")
greetTheUser("Lea")

// DRY - Don't Repeat Yourself
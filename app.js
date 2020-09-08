//........................................................ Day 5 .....................................................


//////////////////////////////////////////////////////////   Level 1   ///////////////////////////////////////////////

// Q No. 1)
let arr = [] ;

// Q No. 2)
let arr = ["apple","banana","mango","grapes","strawberry","berry"]

// Q No. 3)
console.log(arr.length)

// Q No. 4)
console.log(arr[0],arr[3],arr[arr.length-1])

// Q No. 5)
let mixedDataTypes = [
    "mango",
    8,
    true,
    {name:"ali",age:15},
    {name:"khan",age:18},
    [1,2,3]
]

// Q No. 6)
var itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

// Q No. 7)
console.log(itCompanies)

// Q No. 8)
console.log(itCompanies.length)

// Q No. 9)
console.log(itCompanies[0],itCompanies[3],itCompanies[itCompanies.length-1])

// Q No. 10)
console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[6])

// Q No. 11)
console.log(itCompanies[0].toUpperCase())
console.log(itCompanies[1].toUpperCase())
console.log(itCompanies[2].toUpperCase())
console.log(itCompanies[3].toUpperCase())
console.log(itCompanies[4].toUpperCase())
console.log(itCompanies[5].toUpperCase())
console.log(itCompanies[6].toUpperCase())

// Q No. 12)
console.log(`${itCompanies} are big IT companies`)

// Q No. 13)
var a = prompt("Enter a Company Name:");
let b = a.toLowerCase();
let index = itCompanies.indexOf(b)
index != -1
? alert("Company Found")
: alert("Company not found")

// Q No. 14)
// console.log()

// Q No. 15)
console.log(itCompanies.sort())

// Q No. 16)
console.log(itCompanies.reverse())

// Q No. 17)
console.log(itCompanies.slice(0,3))

// Q No. 18)
console.log(itCompanies.slice(4,7))

// Q No. 19)
console.log(itCompanies.slice(3,4))

// Q No. 20)
console.log(itCompanies.shift())

// Q No. 21)
console.log(itCompanies.splice(2,1))

// Q No. 22)
console.log(itCompanies.pop())

// Q No. 23)
console.log(itCompanies.splice())


//////////////////////////////////////////////////////////   Level 2   ///////////////////////////////////////////////

// Q No. 1)
// samjh ni aya

// Q No. 2)
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let a = text.split(' ')
console.log(a)
console.log(a.length)

// Q No. 3)
// i)
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'] ;
shoppingCart.unshift('Meat');
console.log(shoppingCart)

// ii)
shoppingCart.push('Sugar')
console.log(shoppingCart)

// iii)
shoppingCart.splice(4,1)
console.log(shoppingCart)

// iv)
shoppingCart[3] = "Green Tea";
console.log(shoppingCart)

// Q No. 4)
const countries = [   'Albania',   'Bolivia',   'Canada',   'Denmark',   'Ethiopia',   'Finland',   'Germany',   'Hungary',   'Ireland',   'Japan',   'Kenya' ] 
console.log(countries === 'Ethiopia', 'ETHIOPIA') //yes

// Q No. 5)
const webTechs = [   'HTML',   'CSS',   'JavaScript',   'React',   'Redux',   'Node',   'MongoDB' ];
console.log(webTechs === 'Saas') //No
webTechs[7] = 'Saas';
console.log(webTechs)

// Q No. 6)
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'] 
const backEnd = ['Node','Express', 'MongoDB'] 
const fullStack = frontEnd + backEnd 
console.log(fullStack)


//////////////////////////////////////////////////////////   Level 2   ///////////////////////////////////////////////

// Q No. 1)
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] 

// i)
console.log(ages.sort()) // 19 min and 26 max

// ii)


// Aage saare faltu sawal h ok me ni kar raha 
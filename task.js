// 1. WAP to convert the degree celsius to degreee fahremheit
// const celsius=30;
//  const fahrenheit= celsius*(9/5)+32
// console.log("Fahrenheit:",fahrenheit);



// 2.Write a JavaScript program to calculate BMI using weight and height and display the BMI value.
// Hint:
// BMI = weight / (height × height)

// const weight = 60;   
// const height = 5.65; 
// const  bmi = weight / (height * height);
// console.log(" BMI: " ,bmi);



// 3. declare four variable w,x,y,z and find largest/greatest among them using if else if condition
// let w=20
// let x=60
// let y=40
// let z=50

// if(w>x && w>y && w>z)
//    { console.log(w+"is greater");}
// else if(x>y && x>z)
// {
//     console.log(x+"is greater");
// }
// else if(y>z)
// {
//     console.log(y+"is greater");
// }
// else{
//     console.log(z+"is greater");
// }

// 4.Using if else if else statment, display "your BMI[BMI VALUE] is prefect",your BMI is below average or your BMI is above average.

// const weight = 55;  
// const height = 2; 

// const bmi = weight / (height * height);

// if (bmi < 18) {
//   console.log( bmi+" your BMI is below average");
// } else if (bmi >= 18&& bmi <= 24) {
//   console.log( bmi+"  your BMI is perfect");
// } else {
//   console.log(bmi+ "  your BMI is above average");
// }

// 5.the user has got marks in one subject let us assume the marks can be form (1 to 100)we need to find the grade
//  got by student based on his marks
// a. if he got 90 or above the grade is A+
// b. if he got above 80 and bellow 90 the grade is A
// c. if he got above 60 and below 80 the grade is B
// d.else he got C
// and finally if marks is less than 40 he will be failed
// nested if
// let marks=67;
// if (marks>40){
//     if (marks>90){
//         console.log("he got A+");
//     }
//     else if(marks >80 && marks<90){
//         console.log("he got A");
//     }
//     else if(marks>60 && marks<80){
//         console.log("HE got B");
//     }
//     else {
//         console.log("he got C");
//     }
// }
// else{
//     console.log("he failed the exam");
// }


// 6.using the if else-if else statement,calculate the electricity bill based on units consumen:
// condition:
// up to 50 units=Rs 3 per unit
// 51 to 150 units= Rs 5 per unit
// Above 150 unit =Rs 8 per unit

// let units = 180;   
// let bill = 0;

// if (units <= 50) {
//     bill = units * 3;
// } 
// else if (units <= 150) {
//     bill = (50 * 3) + ((units - 50) * 5);
// } 
// else {
//     bill = (50 * 3) + (100 * 5) + ((units - 150) * 8);
// }

// console.log("Electricity Bill = Rs " + bill);



//  7.Write a program to check the age of a person and display the category.
// Conditions
// Below 13 = Child
// 13 – 19 =Teenager
// 20 – 59 = Adult
// 60 and above = Senior Citizen

// const age=0;

// if (age < 13) {
//     console.log( age +" age is in Child category" );
// } else if (age >= 13 && age <= 19) {
//     console.log( age+"  age is in Teenager category");
// } else if (age >= 20 && age <= 59) {
//     console.log( age+"  age is in Adult category");
// } else {
//     console.log( age+" age is in Senior Citizen category");
// } 

// 8. Check whether the given number is odd or even using function and conditional statement

// function OE(num) {
//     if (num % 2 === 0) {
//         console.log(num + " is Even");
//     } else {
//         console.log(num + " is Odd");
//     }
// }
// OE(4)
// or Aeeow dunction morden function syntax
const OE =(num)=>{
    if (num % 2 === 0) {
        console.log(num + " is Even");
    } else {
        console.log(num + " is Odd");
    }
}
OE(4)

const mul = ()=>{
    
}
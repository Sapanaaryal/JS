const questiondata={
    id:1,
    title:"JavaScript Quiz",
    totalQuestion:3,
    questions:[
        {
        id:101,
        question:"what is JavaScript ?",
        option:["programming language","Database","operating System","Browser"],
        correctAnswer:"Programming Language"
    },
    {
    id:102,
    question:"Which keyword is used to declare variable?",
    option:["var","int","letvar","define"],
    correctAnswer:"var",
    },
    {
        id:103,
        question:"Which symbol is used for simple line comment?",
        option:["//","/* */","#","<!--->"],
        correctAnswer : "//"
    }

    ]

};
//get all question
console.log(questiondata.question);

//get question with option
questiondata.questions.forEach((question)=>{
    console.log(question.question)
    console.log(question.option)  

})

//Access single question

console.log(questiondata.questions[0].question);
//Access correct answer of a question
questiondata.questions.forEach((question)=>{
    console.log(question.question);
console.log(question.correctAnswer)

}
)
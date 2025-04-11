fetch("https://opentdb.com/api.php?amount=5&category=28&difficulty=easy&type=multiple")
   .then(response=>response.json())
   .then(data=> console.log(data))




















// let data={
//     "response_code": 0,
//     "results": [
//     {
//     "type": "multiple",
//     "difficulty": "easy",
//     "category": "Vehicles",
//     "question": "The LS1 engine is how many cubic inches?",
//     "correct_answer": "346",
//     "incorrect_answers": [
//     "350",
//     "355",
//     "360"
//     ]
//     },
//     {
//     "type": "multiple",
//     "difficulty": "easy",
//     "category": "Vehicles",
//     "question": "What are the cylinder-like parts that pump up and down within the engine?",
//     "correct_answer": "Pistons",
//     "incorrect_answers": [
//     "Leaf Springs",
//     "Radiators",
//     "ABS"
//     ]
//     },
//     {
//     "type": "multiple",
//     "difficulty": "easy",
//     "category": "Vehicles",
//     "question": "The LS3 engine is how many cubic inches?",
//     "correct_answer": "376",
//     "incorrect_answers": [
//     "346",
//     "364",
//     "427"
//     ]
//     },
//     {
//     "type": "multiple",
//     "difficulty": "easy",
//     "category": "Vehicles",
//     "question": "The Italian automaker Lamborghini uses what animal as its logo?",
//     "correct_answer": "Bull",
//     "incorrect_answers": [
//     "Bat",
//     "Horse",
//     "Snake"
//     ]
//     },
//     {
//     "type": "multiple",
//     "difficulty": "easy",
//     "category": "Vehicles",
//     "question": "What is the fastest road legal car in the world?",
//     "correct_answer": "Koenigsegg Agera RS",
//     "incorrect_answers": [
//     "Hennessy Venom GT",
//     "Bugatti Veyron Super Sport",
//     "Pagani Huayra BC"
//     ]
//     }
//     ]
//     }


//     let question_block=data.results;

//     let html_question_block = question_block.map(question=>{

//     })
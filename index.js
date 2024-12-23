const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public')); //Serve static files(CSS)
app.set('view engine', 'ejs'); //Set ejs template

let todos = []; //Array to store tasks

//Routes
app.get('/', (req, res) => {
    res.render('index', {todos});
});

app.post('/add', (req, res)=> {
    const newTodo = req.body.todo;
    if (newTodo) todos.push(newTodo); //Add new task to todolist
    res.redirect('/');
});

app.post('/delete', (req, res) => {
    const index = req.body.index; // Get the index from the request body
    todos.splice(index, 1); // Remove the task at the specified index
    res.redirect('/'); // Redirect back to the homepage
});


//Start Server
const PORT = 3000;
app.listen(PORT, ()=> {
    console.log(`Server is running at http://localhost:${PORT}`);

});
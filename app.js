const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

//use the ejs
app.set('view engine', 'ejs');
//bodyparser extension
app.use(bodyParser.urlencoded({extended:true}));
//treat public dir as a static files container
app.use(express.static('public'));

//make a list of todos
let newTodoItems = ['write journal', 'gym workout', 'work'];

app.get('/', function(req, res) {
    var today = new Date();

    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }

    //change the date format in string
    let day = today.toLocaleDateString('en-US', options)

    //send the updated date to the template file 
    res.render("list", {
        kindOfDay: day,
        todoLists: newTodoItems
    });
});

app.post('/', function(req, res) {
    //get data from html form and add to array
    newTodoItems.push(req.body.todoItem);
    //redirecting the user to root
    res.redirect('/');
})
app.listen(port, function() {
    console.log('hit hit -- 3000')
});
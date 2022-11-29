const express = require("express");
const bodyParser = require("body-parser");

const port = 3000;

let newTodoLists = ['do workout'];

const app = express();

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){

    let todayDate = new Date();

    res.render('list', {
        todoLists: newTodoLists 
    })

});

app.post('/', function(req, res) {
    newTodoLists.push(req.body.newTodo);
    res.redirect('/');
});

app.listen(port, function(){
    console.log('hit hit success on port 3000');
})
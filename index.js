const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());



const port = process.env.port || 5000;


const categories = require('./data/categories.json');
const course = require('./data/course.json');


app.get('/course-categories', (req, res) => {
    res.send(categories)
});
app.get('/course-categories/:id', (req, res) => {
    const id = req.params.id;
    if (id === "08") {
        res.send(course)
    }
        else { 
        const course_category = course.filter(c => c.category_id === id);
    res.send(course_category)
        }
   
});
app.get('/course', (req, res) => {
    res.send(course)
});

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const singleCourse = course.find(c => c._id === id);
    res.send(singleCourse)
});










app.listen(port, () => { 
    console.log("server in running ",port);
})
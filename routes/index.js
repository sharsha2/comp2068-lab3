'use strict';
//link to use express package
var express = require('express');
//instanciates a new express route to handle http requests
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Lab 3 200429011' });
});


const persons = [
    {
        path: 'harsha',
        name: 'Harsha Karuturi',
        age: 23,
        likes: "likes playing cricket and watching movies",
        works: "uber"
    },
    {
        path: 'sairam',
        name: 'Sairam Karuturi',
        age: 47,
        likes: "Farming",
        works: "a Farmer",
        relation: 'Father'
    },
    {
        path: 'sridevi',
        name: 'Sridevi Karuturi',
        age: 45,
        likes: "Reading God Books",
        works: "House Wife",
        relation: 'Mother'
    },
    {
        path: 'santoshi',
        name: 'Santoshi Karuturi',
        age: 21,
        likes: "Coding",
        works: "Software Developer in OYO",
        relation: 'Sister'
    }
]

router.get('/:name', (req, res, next) => {
    const name = req.params.name;
    const person = persons.find(per => per.path === name);

    //throw error if person doesn't exist
    if (!person) {
        return next(new Error('Person doesn\'t exist'))
    }

    //pass person to the person view
    res.render('person', person);
})

module.exports = router;
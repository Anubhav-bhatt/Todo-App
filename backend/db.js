const mongoose =require('mongoose');
const { string } = require('zod');
// mongodb url handy
//2aDi9WB9vrNaRPT1
//mongodb+srv://anubhavbhatt2001zxc123:2aDi9WB9vrNaRPT1@cluster0.d7io4du.mongodb.net/?retryWrites=true&w=majority
mongoose.connect("mongodb+srv://anubhavbhatt2001zxc123:2aDi9WB9vrNaRPT1@cluster0.d7io4du.mongodb.net/?retryWrites=true&w=majority")
const todoSchema=mongoose.Schema({
title: String,
description: String,
completed: Boolean
})

const todo =mongoose.model('todos', todoSchema);
module.exports = {
    todo
}
const Todo = require('../model/todoModel')

exports.createTodo = async (req, res) =>{
    try {
        const title = req.body.title;
        // Initially the tasks will be empty
        const tasks = [];

        //If title doesn't exist throw error
        if(!title){
            throw new Error('Title is required.');
        }
        const todo = await Todo.create({title})
        res.status(201).json({
            success: true,
            message: "Todo Created Successfully",
            todo,
          });
    } catch (error) {
        res.status(401).json({
            success:false,
            error
        })
    }
}
const express = require("express");
const { TaskModel } = require("../models/task");
const {authMiddleware}=require("../auth/auth");




const taskRoutes = express.Router();

taskRoutes.post("/create",authMiddleware, async (req, res) => {
    const {title,description,dueDate,priority,status,userId}=req.body
    try {
        
        if (!title || !description || !dueDate) {
            return res.status(400).send({ msg: "Title, description and due date are required" });
        }
        else{
            const task = new TaskModel(req.body)
           

        await task.save();
        res.status(201).send({ msg: "Task created successfully", task });
        }

    } catch (error) {
        res.status(500).send({ msg: "Error creating task", error: error.message });
    }
});


taskRoutes.get("/",authMiddleware, async (req, res) => {
    try {
        const tasks = await TaskModel.find(req.body);
        res.status(200).send(tasks)
    } catch (error) {
        res.status(500).send({ msg: "Error fetching tasks", error: error.message })
    }
});

taskRoutes.get("/:id",authMiddleware, async (req, res) => {
    try {
        const task = await TaskModel.findById(req.params.id)
        if (!task) {
            return res.status(404).send({ msg: "Task not found" })
        }
        else{
            res.status(200).send(task)
        }
    } catch (error) {
        res.status(500).send({ msg: "Error fetching task", error: error.message })
    }
});


taskRoutes.patch("/update/:id",authMiddleware, async (req, res) => {
    try {
       
        const updatedTask = await TaskModel.findByIdAndUpdate(req.params.id,req.body);

        if (!updatedTask) {
            return res.status(404).send({ msg: "Task not found" });
        }
        else{
            res.status(200).send({ msg: "Task updated successfully", task: updatedTask });
        }

       
    } catch (error) {
        res.status(500).send({ msg: "Error updating task", error: error.message });
        }
});


taskRoutes.delete("/delete/:id",authMiddleware, async (req, res) => {
    try {
        const deletedTask = await TaskModel.findByIdAndDelete(req.params.id);
        
        if (!deletedTask) {
            return res.status(404).send({ msg: "Task not found" });
        }
        else{
            res.status(200).send({ msg: "Task deleted successfully" });
        }
    } catch (error) {
        res.status(500).send({ msg: "Error deleting task", error: error.message });
    }
});

module.exports={taskRoutes}
const mongoose=require("mongoose")

const taskSchema=mongoose.Schema({
    title: String,
    description: String,
    dueDate: Date,
    priority: {
        type: String,
        enum: ['Low', 'Medium', 'High'],
        default: 'Medium'
    },
    status: {
        type: String,
        enum: ['Pending', 'In Progress', 'Completed'],
        default: 'Pending'
    },
    userId:String
})
const TaskModel=mongoose.model("Task",taskSchema)

module.exports={TaskModel}
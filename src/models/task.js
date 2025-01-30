const mongoose = require("mongoose");
/**
 * *Schema for Task with all required fields
 */
const TaskSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		description: { type: String, required: true },
		dueDate: { type: Date },
		priority: { type: String, enum: ["Low", "Urgent", "High"], default: "Low" },
		status: {
			type: String,
			enum: ["Pending", "In Progress", "Completed"],
			default: "Pending",
		},
	},
	{ timestamps: true },
);

TaskSchema.set("toJSON", {
	transform: (doc, ret) => {
	  if (ret.dueDate && ret.dueDate instanceof Date && !isNaN(ret.dueDate)) {
		ret.dueDate = ret.dueDate.toISOString().split("T")[0]; // Format date as YYYY-MM-DD
	  } else {
		ret.dueDate = null; // Set fallback to null if invalid or missing
	  }
	  return ret;
	},
  });
  



module.exports = mongoose.model("Task", TaskSchema);
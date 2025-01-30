const Joi = require("joi");
const { priority, status, taskId } = require("./custom.validation");

const createTask = {
	body: Joi.object().keys({
		title: Joi.string().required(),
		description: Joi.string().required(),
		dueDate: Joi.date(),
		priority: Joi.string().custom(priority).required(),
		status: Joi.string().custom(status).required(),
	}),
};


const getTaskById = {
	params: Joi.object().keys({
		id: Joi.string().custom(taskId),
	}),
};


const updateTask = {
	params: Joi.object().keys({
		id: Joi.string().custom(taskId),
	}),
	body: Joi.object().keys({
		title: Joi.string().required(),
		description: Joi.string().required(),
		dueDate: Joi.date().required(),
		priority: Joi.string().custom(priority).required(),
		status: Joi.string().custom(status).required(),
	}),
};



const deleteTask = {
	params: Joi.object().keys({
		id: Joi.string().custom(taskId),
	}),
};

module.exports = {
	createTask,
	getTaskById,
	updateTask,
	deleteTask,
};
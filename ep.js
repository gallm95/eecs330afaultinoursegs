function Group(group_name) {
	this.group_name = group_name;
	this.Event = [];
	this.User = [];
}

function User(user_name) {
	this.user_name = user_name;
	this.Task = [];
	this.Group = [];
}

function EPEvent(event_name, group_name, event_descripton, event_date) {
	this.event_name = event_name;
	this.group_name = group_name;
	this.event_descripton = event_descripton;
	this.date = event_date;
	this.Task = [];
	return this;
}

function Task(task_name, task_description, number_of_people, deadline, Event) {
	this.task_name = task_name;
	this.task_description = task_description;
	this.number_of_people = number_of_people;
	this.deadline = deadline;
	this.Event = Event;
}
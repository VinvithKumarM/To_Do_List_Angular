var express = require('express');
var todo = require('./todo');
var router = express.Router();

router.get('/todos', function(req,res){
  res.json(todo.list);
});
router.post('/todos', function(req,res){
  var task = {id:++todo.currentId, task: req.body.task};
todo.list.push(task);
res.status(201).json(task);
});
router.patch('/todos/:id', function(req,res){
var task = getTodo(req.params.id);
if(!task){
  return res.sendstatus(404);
}
update(task, req.body.task);
res.status(202).json(task);
});

router.delete('/todos/:id', function(req,res){
  var taskIndex = getIndex(req.params.id);
  if(!taskIndex < 0){
    return res.sendstatus(404);
  }
  todo.list.splice(taskIndex, 1);
  res.status(202).send(`Todo ${req.params.id} was deleted`);
});

function getIndex(id){
  return todo.list.findIndex(function(item){
    return item.id === parseInt(id);
  });
}

function getTodo(id){
  return todo.list.find(function(item){
    return item.id === parseInt(id);
  });
}
function update(task, newtask){
  Object.assign(task, newtask);
}
module.exports = router;

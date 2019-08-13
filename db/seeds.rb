todos = [{title: "Vacuum"}, {title: "Study"}, {title: "Organize desk"}, {title: "Clean room"}, {title: "Clean kitchen"}]
todos.each do |todo| 
  Todo.create(todo)
end 
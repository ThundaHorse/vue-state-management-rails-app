class Api::TodosController < ApplicationController
  def index 
    @todos = Todo.all 
    render 'index.json.jbuilder'
  end 

  def update 
    @todo = Todo.find(params[:id]) 

    @todo.title = params[:title] || @todo.title
    @todo.completed = params[:completed] || @todo.completed

    if @todo.save 
      render 'show.json.jbuilder'
    else 
      render json: { messages: @todo.errors.full_messages }, status: :unprocessable_entity
    end 
  end 

  def completed 
    @todos = Todo.where(completed: true)
    render 'completed.json.jbuilder'
  end 

  def show 
    @todo = Todo.find(params[:id])
    render 'show.json.jbuilder'
  end 

  def create 
    @todo = Todo.new(
      title: params[:title],
      completed: params[:completed] || false
    )

    if @todo.save 
      render 'show.json.jbuilder'
    else 
      render json: { message: @todo.errors.full_messages }
    end 
  end 

  def destroy 
    @todo = Todo.find(params[:id])
    if @todo 
      @todo.destroy 
      render json: {errors: "Successfully removed!" }
    else 
      render json: { message: "Unable to find To-do" }
    end 
  end 

  def limit 
    @limit = params[:limit]
    @all_todo_ids = Todo.all.pluck(:id)
    @returned = [] 

    @all_todo_ids.each { |id| id <= @limit.to_i ? @returned << Todo.find(id) : next }

    render 'limit.json.jbuilder'
  end 
end

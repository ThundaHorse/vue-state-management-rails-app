class Api::TodosController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index 
    @todos = Todo.all 
    render 'index.json.jbuilder'
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
  
  def update 
    @todo = Todo.find(params[:id]) 

    @todo.title = params[:title] || @todo.title
    @todo.completed = params[:completed] || @todo.completed

    @todo.save
    render 'show.json.jbuilder'
    # if @todo.save 
    #   @todo.save
    #   render 'show.json.jbuilder'
    # else 
    #   render json: { messages: @todo.errors.full_messages }, status: :unprocessable_entity
    # end 
  end

  def destroy 
    @todo = Todo.find(params[:id])
    @todo.destroy 
    render json: {errors: "Successfully removed!" }
  end 

  def limit 
    @limit = params[:limit]
    @all_todo_ids = Todo.all.pluck(:id)
    @returned = [] 

    @all_todo_ids.each { |id| id <= @limit.to_i ? @returned << Todo.find(id) : next }

    render 'limit.json.jbuilder'
  end 
end

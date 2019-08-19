require 'rails_helper' 
require 'simplecov'
SimpleCov.start

RSpec.describe Todo, type: :model do 
  describe "Verifies a todo has a title" do 
    it "should not save a todo without a title" do 
      todo = Todo.new
      todo.title = '' 
      todo.valid?
      todo.errors[:title].should_not include("")
    end 
  end 
end 



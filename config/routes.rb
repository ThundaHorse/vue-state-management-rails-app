Rails.application.routes.draw do
  namespace :api do 
    get '/todos' => 'todos#index'
    get '/todos/completed' => 'todos#completed'
    get '/todos/:id' => 'todos#show'
    get '/todos/limit/:limit' => 'todos#limit'
    post '/todos' => 'todos#create'
    patch '/todos/:id' => 'todos#update'
    delete '/todos/:id' => 'todos#destroy'

    get "/*path" => proc { [200, {}, [ActionView::Base.new.render(file: 'public/index.html')]] }
  end 
end

require 'rails_helper' 
require 'simplecov'

class ApplicationController < ActionController::Base
  class AccessDenied < StandardError; end
end

class ApplicationControllerSubclass < ApplicationController

  rescue_from ApplicationController::AccessDenied, :with => :access_denied

  private

  def access_denied
    redirect_to "/401.html"
  end
end

RSpec.describe ApplicationControllerSubclass do
  controller(ApplicationControllerSubclass) do
    def index
      raise ApplicationController::AccessDenied
    end
  end

  describe "handling AccessDenied exceptions" do
    it "redirects to the /401.html page" do
      get :index
      expect(response).to redirect_to("/401.html")
    end
  end
end

RSpec.describe Api::TodosController, type: :controller do 
  describe Api::TodosController do
    it { should route(:get, 'api/todos').to(action: :index) }

    it { should route(:get, 'api/todos/completed').to(action: :completed) }

    it { should route(:get, 'api/todos/1').to(action: :show, id: 1) }

    it { should route(:patch, 'api/todos/2').to(action: :update, id: 2) }

    it { should route(:delete, 'api/todos/4').to(action: :destroy, id: 4) }

    it { should route(:get, 'api/todos/limit/3').to(action: :limit, limit: 3)}

    it { should route(:post, 'api/todos').to(action: :create)}
  end

  describe "index action" do 
    it "renders the index template" do 
      get:index 
      expect(response).to render_template("index.json.jbuilder") 
    end 
  end 

  describe "completed action" do 
    it "renders the completed template" do 
      get:completed 
      expect(response).to render_template("completed.json.jbuilder")
    end 
  end 
end 



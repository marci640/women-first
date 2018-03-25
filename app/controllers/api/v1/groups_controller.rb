class Api::V1::GroupsController < ApplicationController
  def index
    @groups = Group.all
    render 'index.json.jbuilder'
  end 
end

class LikesController < ApplicationController
  def create
    @idea = Idea.find(params[:idea_id])
    @idea.likes.create
    redirect_to ideas_path
  end

  def destroy
    @idea = Idea.find(params[:idea_id])
    @idea.likes.last.destroy
    redirect_to ideas_path
  end
end
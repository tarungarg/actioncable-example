class PostsController < ApplicationController

  def index
    @posts = Post.all
  end

  def chat_first
    @messages = Message.all
  end

  def chat_second
    @messages = Message.all
  end

  def chat_third
    @messages = Message.all
  end
end

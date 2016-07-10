class ReplyChannel < ApplicationCable::Channel
  def subscribed
    stream_from "messages_reply"
  end
end

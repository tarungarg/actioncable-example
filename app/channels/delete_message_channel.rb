class DeleteMessageChannel < ApplicationCable::Channel
  def subscribed
    stream_from "delete_message"
  end
end

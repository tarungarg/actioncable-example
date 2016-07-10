function openChatConnections(message_channel, reply_channel, delete_channel, chat_box_id){
  // try{
  //   if (this.App.cable.subscriptions && this.App.cable.subscriptions.subscriptions.length > 1){
  //       for (var i=0; i <= this.App.cable.subscriptions.subscriptions.length; i++) {
  //         this.App.cable.subscriptions.remove(this.App.cable.subscriptions.subscriptions[i+1])
  //       }
  //   }
  // } catch(e){
  //   console.log(e)
  // }

  // Subscribe channel for main messages, passing id as for unique channel
  this.App.snippets = this.App.cable.subscriptions.create({channel: message_channel}, {

  // Actioncable predefined method to receive data
    received: function(data) {
        $(".message_form")[0].reset();
          return $('#'+chat_box_id).prepend(this.renderMessage(data));
    },
    renderMessage: function(data) {
      return JST["messages"](data);
    }
  });

  // Subscribe channel for reply messages, passing id as for unique channel
  this.App.replies = this.App.cable.subscriptions.create({channel: reply_channel}, {
    received: function(data) {
      $('.form-group textarea').val('');
      return $('.replydiv'+data.model_name+data.message_id+'_'+data.model_id).append(this.renderMessage(data));
    },
    renderMessage: function(data) {
      return JST["reply"](data);
    }
  });

  this.App.messages = this.App.cable.subscriptions.create({channel: delete_channel}, {
    received: function(data) {
      return $('.'+data.module_name+'_'+data.message_id).remove();
    }
  });
}

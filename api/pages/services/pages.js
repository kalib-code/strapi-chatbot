'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {

     callSendAPI(sender_psid, response) {
        // Construct the message body
        let request_body = {
          "recipient": {
            "id": sender_psid
          },
          "message": response
        }
      },

     handleMessage(sender_psid, received_message) {

        let response;
      
        // Check if the message contains text
        if (received_message.text) {    
      
          // Create the payload for a basic text message
          response = {
            "text": `You sent the message: "${received_message.text}".!`
          }
        }  
        
        // Sends the response message
        this.callSendAPI(sender_psid, response);    
      },
    async webhook(ctx) {
        let body = ctx.request.body;

     
        if (body.object === 'page') {
      
          // Iterate over each entry - there may be multiple if batched
          body.entry.forEach(function(entry) {
      
            // Get the webhook event. entry.messaging is an array, but 
            // will only ever contain one event, so we get index 0
            let webhook_event = entry.messaging[0];
            console.log(webhook_event);
            console.log('Sender PSID: ' + sender_psid);

            if (webhook_event.message) {
                this.handleMessage(sender_psid, webhook_event.message);        
              }
            
          });
      
          // Return a '200 OK' response to all events
          res.status(200).send('EVENT_RECEIVED');
      
        } else {
          // Return a '404 Not Found' if event is not from a page subscription
          res.sendStatus(404);
        }
    }
};

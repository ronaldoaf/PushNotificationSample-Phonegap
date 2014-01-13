var gcm = require('node-gcm');
var message = new gcm.Message();
 
//API Server Key
var sender = new gcm.Sender('AIzaSyCpQ30WVDfD3o1De_6Eu1bEd1ALjQbIFhg');
var registrationIds = [];
 
// Value the payload data to send...
message.addData('message',"Hello Sir! Hope you like the feature!");
message.addData('title','Push Notification Sample' );
message.addData('msgcnt','3'); // Shows up in the notification in the status bar
message.addData('soundname','beep.wav'); //Sound to play upon notification receipt - put in the www folder in app
//message.collapseKey = 'demo';
//message.delayWhileIdle = true; //Default is false
message.timeToLive = 3000;// Duration in seconds to hold in GCM and retry before timing out. Default 4 weeks (2,419,200 seconds) if not specified.
 
// At least one reg id required
registrationIds.push('APA91bEhJde_B6YShwyPeLvdbq_ZPCatLWKzfA5x-yPx2eWUGXrHgnDhNsLeXksdzBbzCdSBzW7RuDTSQWt5zVPuMNnJn4pAwQQ3f2P8mpVoY0f6iRhFBF2rQsGW3swwJGa5JPix-EIzaoG74QI5JjCRt9iTHcZRLA');
//ADD NEW registrationIDs here. VERY IMPORTANT!!!!! to run on your device. Push ID string into registrationIds array. 
/**
 * Parameters: message-literal, registrationIds-array, No. of retries, callback-function
 */
sender.send(message, registrationIds, 4, function (err,result) {
    if(err)
    {
    	console.log(err);
    }
    else
    {
    	console.log(result);
    }
});



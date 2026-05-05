
// import {Vonage} from '@vonage/server-sdk'

// import 'dotenv/config'


// const vonage = new Vonage(
//  {
//  apiKey: process.env.SMS_API_KEY,
//  apiSecret: process.env.SMS_API_KEY_SECRET,
//  }
// );

// const sendsms=async(usernumber)=>{
//  try {
//    const res= await  vonage.sms.send({
//         to:usernumber,
//         from:usernumber,
//         text:"message sent"
//     })
//     // console.log(res.messages)
//     console.log('sms sent')
    
//  } catch (error) {
//     console.log(error);
    
//  }
// }
// sendsms("917903594651")
import { Vonage } from '@vonage/server-sdk';
import 'dotenv/config';

const vonage = new Vonage({
  apiKey: process.env.SMS_API_KEY,
  apiSecret: process.env.SMS_API_KEY_SECRET,
});

const sendSMS = async () => {
  try {
    const res = await vonage.sms.send({
      to:919541156502,          // recipient (must be verified in trial)
      from: "Vonage",          // sender ID (trial restriction)
      text: "Message sent successfully!"
    });

    console.log("Full response:", JSON.stringify(res, null, 2));

    const message = res.messages[0];
    if (message.status === "0") {
      console.log("✅ SMS sent successfully, ID:", message["message-id"]);
    } else {
      console.error("❌ SMS failed:", message["error-text"]);
    }
  } catch (error) {
    console.error("Error sending SMS:", error);
  }
};

sendSMS();
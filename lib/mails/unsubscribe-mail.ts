import { EEvent } from "@/hooks";
import nodemailer from "nodemailer";

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.APP_ADDRESS,
    pass: process.env.APP_PASSWORD,
  },
});

export const SendUnSubscribeNotification = async ({
  to,
  event,
}: {
  to: string;
  event: EEvent;
}) => {
  let mailOptions = {
    from: `Events Sri Lanka ${process.env.APP_ADDRESS}`,
    to: to,
    subject: "RSVP to Unsubscribe of the Event",
    html: `<!DOCTYPE html>
      <html>
      <head>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  background-color: #f4f4f4;
              }
              .container {
                  width: 100%;
                  padding: 20px;
                  background-color: white;
              }
              .content {
                  max-width: 600px;
                  margin: 0 auto;
                  background-color: #ffffff;
                  padding: 20px;
                  border: 1px solid #e0e0e0;
                  text-align: center;
              }
              .button {
                  display: inline-block;
                  padding: 10px 20px;
                  margin: 20px 0;
                  background-color: #007bff;
                  color: white;
                  text-decoration: none;
                  border-radius: 5px;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <div class="content">
                  <h2>RSVP to Unsubscribe of the Event</h2>
                  <p>Congradulations... your process of unsubscribe for the event has been successfull </p>
                  <h1>${event.title}</h1>
                  <p>${event.description}</p>
              </div>
          </div>
      </body>
      </html>
      `,
  };

  transporter.sendMail(mailOptions, (error: any) => {
    if (error) {
      throw new Error(error);
    }
  });
};

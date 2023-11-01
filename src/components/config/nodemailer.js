const nodemailer = require('nodemailer');
// const appData = require('../utils/variables');
//legithustle2020@gmail.com
//support@firepipsfx.com

const UpgardeUserSubEmailToAdminOne = async (user, plan, amount, upgrader) => {
  const currentDate = new Date();

  const fullYear = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Note that months are zero-based (0-11).
  const day = currentDate.getDate();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  const fullDate = `${fullYear}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smpt.gmail.com',
      // port: 465,
      secure: false,
      auth: {
        user: 'firepipsfxx@gmail.com',
        pass: 'kugwggpxmsxfteir',
      },
    });

    const options = {
      from: `firepipsfxx@gmail.com`,
      // to: `support@firepipsfx.com`,
      to: `Benson.jeffrey96@yahoo.com`,
      subject: 'User Subscription Plan Upgraded Successful',

      html: `
            <div style="width: 100%; max-width: 500px; display: block; margin: auto">
            <h1 style="color: #17a2b8; text-align: center">
               User Subscription Plan Upgraded Successful
            </h1>
            <p style="font-size: 1rem">
              We are thrilled to inform you that you have successfully Upgraded ${user?.first_name} ${user?.last_name}
              plan to ${plan} on this day ${fullDate}
            </p>
            <section>
              <h4 style="font-size: 1.5rem">User Details</h4>
              <p style="font-size: 1rem ; uppercase"> FULL NAME :${user?.first_name} ${user?.last_name}</p>
              <p style="font-size: 1rem"> USER EMAIL : ${user?.email}</p>
              <p style="font-size: 1rem"> AMOUNT : #${amount}</p>
              <p style="font-size: 1rem">SUB PLAN: ${plan}</p>
            </section>
            <section style="font-size: 1.5rem ; margin: 2rem 0">
            <span>Initiator</span> :  <span style="font-size: 1.5rem">${upgrader?.first_name}  ${upgrader?.last_name}</span>
            </section>
          </div>
              
                  `,
    };

    const emailSent = await transporter.sendMail(options);
    console.log(emailSent);
  } catch (error) {
    console.log(error);
  }
};

module.exports = UpgardeUserSubEmailToAdminOne;

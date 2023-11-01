const handler = async (req, res) => {
  // console.log(req.body);

  if (req.method === 'POST') {
    const data = req?.body;
    const email = process.env.EMAIL;

    if (!data) {
      // console.log({ error: 'error' });
      return res.status(400).json({ message: 'Bad Request' });
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        // ...generateEmailContent(data),
        subject: `Message From ${data.name}`,
        // text: 'This is text string',
        html: `<h1>Sender: ${data.name}</h1> <h6>Sender Email ${
          data.email
        } </h6> <p>Mobile Number : ${
          data.phoneNumber ? data.phoneNumber : ''
        }</p> <p> Address : ${data.address ? data.address : ''}</p> <p>${
          data.comment ? data.comment : ''
        }</p> `,
      });
      return res.status(201).json({ success: true });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }
  return res.status(400).json({ message: 'Bad Request' });
};

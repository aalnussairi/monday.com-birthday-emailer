import {
  getItemName,
  getRecipientAge,
  getRecipientEmail,
} from '../services/mondayService.js';
import { sendEmail } from '../services/sendgridService.js';

export const executeAction = async (req, res) => {
  const { shortLivedToken } = req.session;
  const { itemId, email, birthdate } = req.body.payload.inboundFieldValues;
  try {
    const recipientName = await getItemName(shortLivedToken, itemId);
    const recipientEmail = await getRecipientEmail(
      shortLivedToken,
      itemId,
      email
    );
    const recipientAge = await getRecipientAge(
      shortLivedToken,
      itemId,
      birthdate
    );

    await sendEmail(recipientEmail, recipientName, recipientAge);

    return res.status(200).send({});
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: 'internal server error' });
  }
};

/* "use server";
import sgMail from "@sendgrid/mail";

export async function sendEmail({
  to,
  subject,
  text,
}: {
  to: string;
  subject: string;
  text: string;
}) {
  if (!process.env.SENDGRID_API_KEY) {
    throw new Error("SENDGRID_API_KEY environment variable is not set");
  }
  if (!process.env.EMAIL_FROM) {
    throw new Error("EMAIL_FROM environment variable is not set");
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const message = {
    to: to.toLowerCase().trim(),
    from: process.env.EMAIL_FROM,
    subject: subject.trim(),
    text: text.trim(),
  };

  try {
    const [response] = await sgMail.send(message);

    if (response.statusCode !== 202) {
      throw new Error(`SendGrid API returned status code ${response.statusCode}`);
    }

    return {
      success: true,
      messageId: response.headers['x-message-id'],
    };

  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "Failed to send email. Please try again later.",
    }
  }
}



/*"use server";

import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from "resend";
import { EmailTemplate } from '@/src/components/signup-mail-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail((req: NextApiRequest, res: NextApiResponse)
  {
      to,
      subject,
      text,
    }: {
      to: string;
      subject: string;
      text: string;
    }) {
      if (!process.env.RESEND_API_KEY) {
        throw new Error("RESEND_API_KEY environment variable is not set");
      }
      if (!process.env.EMAIL_FROM) {
        throw new Error("EMAIL_FROM environment variable is not set");
      }

try {
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['delivered@resend.dev'],
    subject: 'Hello world',
    react: EmailTemplate({ firstName: 'John' }),
  });

  if (error) {
      throw new Error("There was a problem sending the mail");
  }

  if (error) {
      return res.status(400).json(error);
      throw new Error(`Resend API returned status code ${data.statusCode}`);
  }

  return {
      success: true,
      messageId: data.headers['x-message-id'],
    }

} catch (error) {
  console.error("Error sending email:", error);
  return {
    success: false,
    message: "Failed to send email. Please try again later.",
  }
}
}
*/

// remove that
export{};
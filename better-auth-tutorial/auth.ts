import { betterAuth, BetterAuthOptions } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/src/lib/prisma";
// import { sendEmail } from "@/actions/email";
// but instead:
import { resend } from "@/src/lib/resend";
import { openAPI } from "better-auth/plugins";
import { EmailTemplateSignup } from "@/src/app/email-templates/signuplink"
import { EmailTemplateReset } from  "@/src/app/email-templates/forgotpwd"
import { EmailTemplateChange } from  "@/src/app/email-templates/change-email"

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "mongodb",
      }),
      session: {
          expiresIn: 60 * 60 * 24 * 7, // all 7 days
          updateAge: 60 * 60 * 24, // 1 day (for updating session expiration based on user activity)
          cookieCache: {
            enabled: true,
            maxAge: 5 * 60 // cache duration in seconds
          }
        },
      user: {
        additionalFields: {
            premium: {
              type: "boolean",
              required: false,
            },
        },
        changeEmail: {
          enabled: true,
          sendChangeEmailVerification: async ({ newEmail, user, url }) => {
            await resend.emails.send({
              from: "Acme <onboarding@resend.dev>", // You could add your custom domain
              // to: newEmail, // email of the user to want to end
              // this won't work without a domain. except a resend-internal address
              to: ['delivered@resend.dev'],
              subject: "Confirm your new Email", // Main subject of the email
              // html: `Click the link to verify your email: ${url}`, // Content of the email
              react: EmailTemplateReset({ userName: String(user.name), senderEmail: String(process.env.EMAIL_FROM), url: String(url)}),
            });
          }
        }
      },   
      /*
      account: {
        accountLinking: {
          enabled: true, // can be set false
          trustedProviders: ["github"],
        },
      },
      */
      socialProviders: {
        github: {
          clientId: process.env.GITHUB_CLIENT_ID as string,
          clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        },
      },
      plugins: [openAPI()], // api/auth/reference
      emailAndPassword: {
        enabled: true,
        requireEmailVerification: true,
        sendResetPassword: async ({ user, url }) => {
            await resend.emails.send({
              from: "Acme <onboarding@resend.dev>", // You could add your custom domain
              // to: user.email, // email of the user to want to end
              // this won't work without a domain. except a resend-internal address
              to: ['delivered@resend.dev'],
              subject: "New Email Reset Password Link", // Main subject of the email
              // html: `Click the link to verify your email: ${url}`, // Content of the email
              react: EmailTemplateReset({ userName: String(user.name), senderEmail: String(process.env.EMAIL_FROM), url: String(url)}),
            });
          },
      },
      emailVerification: {
        sendOnSignUp: true,
        autoSignInAfterVerification: true,
        sendVerificationEmail: async ({ user, token }) => {
          const verificationUrl = `${process.env.BETTER_AUTH_URL}/api/auth/verify-email?token=${token}&callbackURL=${process.
            env.EMAIL_VERIFICATION_CALLBACK_URL}`;
            await resend.emails.send({
              from: "Acme <onboarding@resend.dev>", // You could add your custom domain
              // to: user.email, // email of the user to want to end
              // this won't work without a domain. except a resend-internal address
              to: ['delivered@resend.dev'],
              subject: "New Email Signup Link", // Main subject of the email
              // html: `Click the link to verify your email: ${url}`, // Content of the email
              react: EmailTemplateSignup({ userName: String(user.name), senderEmail: String(process.env.EMAIL_FROM), url: String(verificationUrl)}),
            });
          },
        },
} satisfies BetterAuthOptions);

export type Session = typeof auth.$Infer.Session; 
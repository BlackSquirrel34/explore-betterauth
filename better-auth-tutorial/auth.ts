import { betterAuth, BetterAuthOptions } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/src/lib/prisma";
// import { sendEmail } from "@/actions/email";
// but instead:
import { resend } from "@/src/lib/resend";
import { openAPI } from "better-auth/plugins";
import { EmailTemplate } from "@/src/app/email-templates/signuplink"

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "mongodb",
      }),
      plugins: [openAPI()], // api/auth/reference
      emailAndPassword: {
        enabled: true,
        requireEmailVerification: true,
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
              subject: "Email Signup Link", // Main subject of the email
              // html: `Click the link to verify your email: ${url}`, // Content of the email
              react: EmailTemplate({ userName: String(user.name), senderEmail: String(process.env.EMAIL_FROM), url: String(verificationUrl)}),
            });
          },
        },
} satisfies BetterAuthOptions);
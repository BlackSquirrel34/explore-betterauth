import { betterAuth, BetterAuthOptions } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/src/lib/prisma";
// import { sendEmail } from "@/actions/email";
// but instead:
import { resend } from "@/src/lib/resend";
import { openAPI } from "better-auth/plugins";

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
        sendVerificationEmail: async ({ user, url }) => {
            await resend.emails.send({
              from: "Acme <onboarding@resend.dev>", // You could add your custom domain
              // to: user.email, // email of the user to want to end
              // this won't work without a domain. expcept a resend-internal address
              to: ['delivered@resend.dev'],
              subject: "Email Verification", // Main subject of the email
              html: `Click the link to verify your email: ${url}`, // Content of the email
              // you could also use "React:" option for sending the email template and there content to user
            });
          },
        },
} satisfies BetterAuthOptions);
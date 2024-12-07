import { betterAuth, BetterAuthOptions } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/src/lib/prisma";
import { sendEmail } from "@/src/app/actions/email";
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
        sendVerificationEmail: async ({ user, token }) => {
          const verificationUrl = `${process.env.BETTER_AUTH_URL}/api/auth/verify-email?token=${token}&callbackURL=${process.env.EMAIL_VERIFICATION_CALLBACK_URL}`;
          await sendEmail({
            to: user.email,
            subject: "Verify your email address",
            text: `Click the link to verify your email: ${verificationUrl}`,
          });
        },
      }
} satisfies BetterAuthOptions);
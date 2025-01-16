This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started
First, make sure there is inside the package.json among the scripts this line:

```
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "prisma": "prisma generate"
}
```

The cd to better-auth-tutorial and go like:

```
pnpm run prisma
```

After this is done, there are still some prerequisites. Basically, you need a .env file stuffed with all the valid values corresponding to this as a sample:

```
# often critical: whether atlas allows connections from your IP. if its a hoe IP it probably switches. You can also enable from all IP's from your Atlas account
DATABASE_URL="mongodb+srv://<user>:<password>@cluster1.js7ky.mongodb.net/betterauth?retryWrites=true&w=majority&appName=Cluster1"
# for a local mongoDB:
# DATABASE_URL="mongodb://127.0.0.1:27017/dbserver"

# base url of your website. your domain in production
BETTER_AUTH_URL=http://localhost:3000 

# Auth Secret
BETTER_AUTH_SECRET=<some-crypto-secure-large-string>
# will change to your domain when in production
EMAIL_VERIFICATION_CALLBACK_URL=http://localhost:3000/email-verified

EMAIL_FROM="bananas@com"
RESEND_API_KEY=<obtain-this-key-from-resend-account>


# Github Authentication
GITHUB_CLIENT_ID=O<some-id>
GITHUB_CLIENT_SECRET=<some-secret>
```


#### That means, you'll need a setup with:
1) A MongoDB you can connect to running somewhere. (In our case, Atlas)

2) An app created in your GitHub Account for the GitHub authentication to run without complaints.

3) A Resend Account

4) You have generated a secret for better-auth

#### Setup and Prereq's all good? Then let's go!! ;)


First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

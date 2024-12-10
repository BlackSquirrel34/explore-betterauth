### Authentication

Although next.js is a fullstack framework, it does not (really) come out of the box with a solution to the problem of authentication. You know, the thing with the colorful signup, signout, forgot-password buttons. 

#### There are a few existing solutions to this problem. But somehow, I was not really happy about the existing ones. And hey, it's not the case that the Login/Logout thing in web applications is something that suddenly, maybe just this season, was discovered to be the 'dernier crie'.

I was on the lookout for solutions that 
- are open-source
- allow owning your data and being in charge of your auth
- have security features such as rate limiting
- do not require a subscription to some SaaS somewhere far away
- give a great developer experience (I am not into suffering)
- do not require setting up a dedicated auth-server in the backend (although this could be an option for huger projects)


Personally, I explored auth.js (formerly next.auth) for a while, as it was featured seemingly everywhere, and came to a negative conclusion. Although I digged into the docs and meticusously folled along with an array of tutorials that promised to be up and running with authentication within a few minutes, somehow it was not working for me. At least not without investing significant time. That's why I decided hey instead debugging stuff that was promised to work so easily I could just invest in learning something more stable and reliable.

#### That's when I came across better-auth and decided to give it a try. Currently, there are very few tutorials on this library, as it is a very recent development, heavily inspried by auth.js (next.auth).

Once of the first tutorials about better-auth is available at https://www.youtube.com/watch?v=V--T0q9FrEw
with the git repository at
https://github.com/adityasinghcodes/better-auth-nextjs

and this was even a bit earlier:
https://www.youtube.com/watch?v=BiVwYIUophk
with Github repo at: https://github.com/candraKriswinarto/nextsecure

This blogpost about setting up better-auth with email and password:
https://dev.to/daanish2003/email-and-password-auth-using-betterauth-nextjs-prisma-shadcn-and-tailwindcss-hgc

and also this Blogpost about integrating Resend into a Next.js with better-auth:
https://dev.to/daanish2003/email-verification-using-betterauth-nextjs-and-resend-37gn
with the Github repository: https://github.com/Daanish2003/better_auth_nextjs

I decided to first re-built along these lines an app and then, as soon as I feel confident, integrate the lib in my other projects.

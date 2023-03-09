import axios from "axios";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        // const user=credentials;
        // console.log('test user',user)
        // const res = await fetch("http://localhost:5000/login", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     email: email,
        //     password: password,
        //   }),
        // });
        const res:any = await axios.post('http://localhost:5000/login',
          {
            email:email,
            password:password
          }
        )
        const user =  res;

        if (user ) {
          // Any object returned will be saved in `user` property of the JWT
          return user.data;
        } else {
          // throw new Error(res.error.message);
          // If you return null then an error will be displayed advising the user to check their details.
          throw new Error('Invalid credentials');
          return  null;
        }
      }
    }),

  ],
  pages: {
    signIn: "/auth/signin",
    // error: '/auth/error',
    // signOut: '/auth/signout'
  },
  callbacks: {
    async jwt({ token, user }) {
      // console.log('test jwt ',token);
      // console.log('test jwt user',user)
      return {...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token as any;
      // console.log('test session',session)
      return session;
    },
  },
};

export default NextAuth(authOptions);
import prisma from "@/utills/prismaClient";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextResponse } from "next/server";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Type your Username",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials, req) {
        if (!credentials || !credentials.username || !credentials.password) {
          return null;
        }
        // const user = users.find((user) => user.name === credentials.username);
        console.log(credentials);

        const user = await prisma.user.findFirst({
          where: {
            name: credentials.username,
          },
        });
        console.log(user);

        if (user) {
          return user;
        } else {
          console.log(error);
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  theme: {
    colorScheme: "light",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

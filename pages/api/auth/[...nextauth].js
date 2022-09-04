import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId:"03f53cdc3cadab7e4c18",
      clientSecret:"c2a7cb3ecaf485a640d0bc72d406d088137aa038",
    }),
    GoogleProvider({
      clientId:"257707643962-cm74r2lm4hsr4h3lfgopfqmuogsl8ji7.apps.googleusercontent.com",
      clientSecret:"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",
    }),
  ],

})
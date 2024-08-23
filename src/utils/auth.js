import { PrismaAdapter } from "@auth/prisma-adapter";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { getServerSession } from "next-auth";
import prisma from "./connect";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "default-client-id",
      clientSecret: process.env.GOOGLE_SECRET || "default-client-secret"
    }),
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID || "default-github-id",
    //   clientSecret: process.env.GITHUB_SECRET|| "default-github-secret"
    // }),
  ],
};

export const getAuthSession = () => getServerSession(authOptions);
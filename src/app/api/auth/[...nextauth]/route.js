import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET,NEXTAUTH_SECRET } from "../../../variables.ts";

const handler = NextAuth({
    providers : [
        GoogleProvider({
            clientId : GOOGLE_CLIENT_ID,
            clientSecret : GOOGLE_CLIENT_SECRET,
            
        })
    ],
    secret : NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }
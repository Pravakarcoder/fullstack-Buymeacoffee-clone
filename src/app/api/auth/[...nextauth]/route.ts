import { authOptions } from "@/app/lib/authOptions";
import nextAuth, { AuthOptions } from "next-auth";

const handler = nextAuth(authOptions as AuthOptions);

export { handler as GET, handler as POST };

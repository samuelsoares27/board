import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {

    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID ?? '',
            clientSecret: process.env.GITHUB_CLIENT_SECRET ?? '',
            authorization: {
                params: {
                    scope: 'read/user',
                },
            },
        }),

    ],
    callback: {
        async session(session: any, profile: any) {

            try {
                console.log(profile)
                return { ...session, id: profile.sub };
            } catch {
                return { ...session, id: null };
            }

        },
        async signIn(user: { email: any; }, account: any, profile: any) {

            const { email } = user;

            try {
                return true;
            } catch (err) {
                console.error('Erro:', err);
                return false;
            }
        }
    }


}

export default NextAuth(authOptions)


import NextAuth from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';

export default NextAuth({
    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_ID,
            clientSecret: process.env.DISCORD_SECRET,
            authorization: {
                params: { scope: 'identify guilds email connections' },
            },
        }),
    ],
    callbacks: {
        async jwt({ token, account }) {
            // Persist the OAuth access_token to the token right after signin
            if (account) {
                // eslint-disable-next-line no-param-reassign
                token.accessToken = account.access_token;
            }
            return token;
        },
        async session({ session, token, user }) {
            // Send properties to the client, like an access_token from a provider.
            // eslint-disable-next-line no-param-reassign
            session.accessToken = token.accessToken;
            return session;
        },
    },
});

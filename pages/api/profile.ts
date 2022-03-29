/* eslint-disable import/no-anonymous-default-export */
import { getSession } from 'next-auth/react';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({ req });

    try {
        if (session) {
            const response = await await fetch(
                'https://discord.com/api/users/@me',
                {
                    headers: {
                        authorization: `Bearer ${session.accessToken}`,
                    },
                }
            );

            const data = await response.json();
            console.log('🚀 ~ data', data);

            res.statusCode = 200;
            res.send(data);
            res.end();
        }
    } catch (error) {
        res.json(error);
        res.status(405).end();
    }
};

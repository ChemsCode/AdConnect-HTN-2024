import 'dotenv/config';

export default {
    providers: [
        {
            domain: process.env.AUTH0_DOMAIN,
            applicationID: process.env.UTH0_CLIENT_ID,
        },
    ],
};

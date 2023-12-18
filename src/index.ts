import { Hono } from 'hono'
import {Client, Events, GatewayIntentBits} from 'discord.js';

const app = new Hono()

app.get('/', (c) => c.text('Hello Hono!'))

app.get('/hello',(c)=>{


    return c.json({message:"Hello man"})
})

const client = new Client({intents: [GatewayIntentBits.Guilds]});

// listen for the client to be ready
client.once(Events.ClientReady, (c) => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
  });

  client.login(process.env.DISCORD_TOKEN);

// app.post('/interactions', verifyKeyMiddleware('MY_CLIENT_PUBLIC_KEY'), (req, res) => {
//     const message = req.body;
//     if (message.type === InteractionType.APPLICATION_COMMAND) {
//       res.send({
//         type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
//         data: {
//           content: 'Hello world',
//         },
//       });
//     }
//   });

export default app

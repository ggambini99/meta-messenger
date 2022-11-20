import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
  appId: process.env.PUSHER_APP_ID!,
  key: process.env.PUSHER_KEY!,
  secret: process.env.PUSHER_SECRET!,
  cluster: "us2",
  useTLS: true,
});

export const clientPusher = new ClientPusher("65f2e66b64c89ec2574e", {
  cluster: "us2",
  forceTLS: true,
});

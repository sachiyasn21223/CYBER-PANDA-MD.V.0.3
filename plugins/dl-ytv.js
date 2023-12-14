
import fs from 'fs';
import os from 'os';
import fetch from 'node-fetch';

let limit = 500;
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
  let chat = global.db.data.chats[m.chat];
  if (!args || !args[0]) throw `✳️ Example:\n${usedPrefix + command} https://youtu.be/YzkTFFwxtXI`;
  if (!args[0].match(/youtu/gi)) throw `❎ Verify that the YouTube link`;
  

  var ggapi = `https://vihangayt.me/download/ytmp4?url=${encodeURIComponent(args)}`

  const response = await fetch(ggapi);
  if (!response.ok) {
      console.log('Error searching for song:', response.statusText);
      throw 'Error searching for song';
  }
  const data = await response.json();

  const caption = `
┍━━━━━━━━━━━━━━━━━━ •
┃🦋 𝘠𝘖𝘜𝘠𝘜𝘉𝘌-𝘝𝘐𝘋𝘌𝘖 🦋
┗━━━━━━━━━━━━━━━━━━ •
┍━━━━━━━━━━━━━━━━━━ •
┃🦋 𝘛𝘐𝘛𝘓𝘌: ${data.data.title}
┃🦋 𝘓𝘐𝘕𝘒: ${args[0]}
┗━━━━━━━━━━━━━━━━━━ •`
 let vres = data.data.vid_360p

  let vid = await fetch(vres)
  const vidBuffer = await vid.buffer();

  conn.sendFile(
    m.chat,
    vidBuffer,
    `error.mp4`,
    caption,
    m,
    false,
    { asDocument: chat.useDocument }
  );
     
};

handler.help = ['ytmp4 <yt-link>'];
handler.tags = ['downloader'];
handler.command = ['ytmp4', 'video', 'ytv'];
handler.diamond = false;

export default handler;


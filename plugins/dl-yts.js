import axios from 'axios';

let handler = async (m, { conn, text }) => {
  if (!text) throw '✳️ What do you want me to search for on YouTube?';

  try {
    const query = encodeURIComponent(text);
    const response = await axios.get(`https://weeb-api.vercel.app/ytsearch?query=${query}`);
    const results = response.data;

    if (results.length === 0) {
      throw 'No results found for the given query.';
    }

    const firstResult = results[0];

    const message = `
┍━━━━━━━━━━━━━━━━━━ •
┃🦋 ${firstResult.title}
┃━━━━━━━━━━━━━━━━━━ •
┃🦋 *𝘓𝘐𝘕𝘒* : ${firstResult.url}
┃🦋 *𝘋𝘜𝘙𝘈𝘛𝘐𝘖𝘕* : ${firstResult.timestamp}
┃🦋 *𝘗𝘜𝘉𝘓𝘐𝘚𝘏𝘌𝘋* ${firstResult.ago} 
┃🦋 *𝘝𝘐𝘌𝘞𝘚* ${firstResult.views}
┗━━━━━━━━━━━━━━━━━━ •
 `;

    conn.sendFile(m.chat, firstResult.thumbnail, 'yts.jpeg', message, m);
  } catch (error) {
    console.error(error);
    throw 'An error occurred while searching for YouTube videos.';
  }
};

handler.help = ['ytsearch'];
handler.tags = ['downloader'];
handler.command = ['ytsearch', 'yts'];

export default handler;

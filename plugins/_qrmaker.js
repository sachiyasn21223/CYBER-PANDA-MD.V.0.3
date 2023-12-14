import { toDataURL } from 'qrcode'
let handler = async (m, { text, conn }) => {
if (!text) throw `*Give a text to convert*`
conn.sendFile(m.chat, await toDataURL(text.slice(0, 2048), { scale: 8 }), 'qrcode.png', '🦋 │𝐂𝐘𝐁𝜩𝐑│𝐏𝜟𝐍𝐃𝐀│𝐌𝐃│𝐕➂ 🦋', m)
}
handler.help = ['', 'code'].map(v => 'qr' + v + ' <text>')
handler.tags = ['tools']
handler.command = /^qr(code)?$/i
export default handler

import { exec } from 'child_process'
import speed from 'performance-now'

let handler = async (m, { conn }) => {

  let pingMsg = await conn.sendMessage(m.chat, {text: 'Pinging...'})

  let timestamp = speed()

  await exec('neofetch --stdout', async (error, stdout) => {

    let latency = (speed() - timestamp).toFixed(4)

    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: pingMsg.key,
        type: 14,
        editedMessage: {
          conversation: `Pong! Latency: ${latency} ms
┍━━━━━━━━━━━━━━━━━━ •
│*🦋│𝐂𝐘𝐁𝜩𝐑│𝐏𝜟𝐍𝐃𝐀│𝐌𝐃│𝐕➂ 🦋*
┗━━━━━━━━━━━━━━━━━━ •
┍━━━━━━━━━━━━━━━━━━ •
│✬  *Thanks for all*
┠━━━━━━━━━━━━━━━━━━ •
│©2023 *CYBER PANDA MD*
┡━━━━━━━━━━━━━━━━━━ •
│*𝘉𝘰𝘵 𝘊𝘳𝘦𝘢𝘵𝘦𝘥 𝘉y 𝘚𝘢𝘤𝘩𝘪𝘵𝘩 𝘊𝘩𝘢𝘯𝘥𝘳𝘢*
┗━━━━━━━━━━━━━━━━━━ •
┍━━━━━━━━━━━━━━━━━━ •
┃  *_💞THANK SENESH💞_*
┗━━━━━━━━━━━━━━━━━━ •
┏━━━━━━━━━━━━━━━━━━ •
┃🦋 *𝘎𝘐𝘏𝘜𝘉-𝘓𝘐𝘕𝘒* *https://github.com/CYBER-x-SACHIYA-SL-MD-BOT/CYBER-PANDA-MD.V.0.3*
┃
┗━━━━━━━━━━━━━━━━━━ •
┍━━━━━━━━━━━━━━━━━━ •
┃🦋 *𝘞𝘏𝘈𝘛𝘚𝘈𝘈𝘗𝘗 𝘎𝘙𝘖𝘜𝘗* : *https://chat.whatsapp.com/FiVM7anDmin0qnLqWwkgev*
┃
┗━━━━━━━━━━━━━━━━━━ •` 
        }
      }
    }, {})

  })

}

handler.help = ['ping']
handler.tags = ['main']
handler.command = ['ping', 'speed'] 

export default handler

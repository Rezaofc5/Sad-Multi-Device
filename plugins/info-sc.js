import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*NYARI SC DEK?*\nLU PUNYA TANGAN KAN? \nKALAU PUNYA TANGAN BUAT SENFIRI LAH ANJ`
conn.sendHydrated(m.chat, str, wm, pp, 'https://doujindesu.xxx.com', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['𝙼𝙴𝙽𝚄', '/menu']
], m)
}
handler.command = handler.help = ['sc']
handler.tags = ['info']

export default handler

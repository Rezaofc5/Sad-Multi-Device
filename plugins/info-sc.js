import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*NYARI SC BANH?*\nBUAT SENDIRI LAH PUNYA TANGAN KAN? \nMAU ENAK DOANG ANJ`
conn.sendHydrated(m.chat, str, wm, pp, 'CARI SENDIRI ASU', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['𝙼𝙴𝙽𝚄', '/menu']
], m)
}
handler.command = handler.help = ['sc']
handler.tags = ['info']

export default handler

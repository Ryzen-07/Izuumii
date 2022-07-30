let handler = async (m, { conn }) => {
/*
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  const town = await conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m, {quoted: fkontak})
  await conn.reply(m.chat, "My Owner", m, {quoted: town})
  */
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;ハリー;;;\nFN:ハリー\nORG:ハリー\nTITLE:\nitem1.TEL;waid=6283148375193:+62 831-4837-5193\nitem1.X-ABLabel:ハリー\nX-WA-BIZ-DESCRIPTION: Nih owner ku kack yg mengaktifkan aq.\nX-WA-BIZ-NAME:ハリー\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, {quoted: m})

}
handler.help = ['owner']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler

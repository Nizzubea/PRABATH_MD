const { prefix,cmd,tlang,Config } = require('../lib')
cmd({ on: "body" }, async(Void, citel, { isCreator }) => {
     if (!isCreator) && citel.text) {
         const emojis = ['👨‍💻']
         const emokis = emojis[Math.floor(Math.random() * (emojis.length))]
         Void.sendMessage(citel.chat, {
             react: {
                 text: emokis,
                 key: citel.key
             }
         })
     }
 })

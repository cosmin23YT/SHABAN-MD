import makeWASocket from "@whiskeysockets/baileys"

async function startBot() {
    const sock = makeWASocket({
        printQRInTerminal: true
    })
}

startBot()

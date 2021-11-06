const TelegramBot = require("node-telegram-bot-api");
const TOKEN = require("./config").TOKEN;

const bot = new TelegramBot(TOKEN, {
    polling: true,
})

bot.on("message", async (msg) => {
    if (msg.text) {
        if (msg.text === "/start") {
            await bot.sendMessage(msg.from.id, `Assalomu alaykum, hurmatli <b>${msg.from.first_name}</b>. QR Code yaratish uchun biror text yuboring`, {
                parse_mode: "HTML",
            })
        } else {
            let qrCode = `https://api.qrserver.com/v1/create-qr-code/?size=150x180&data=${msg.text}`;
            await bot.sendPhoto(msg.from.id, qrCode, {
                caption: `<b>${msg.text}</b> uchun QR Code\n\n <a href="https://t.me/randompicrobot">@QrCodeBot</a>`,
                parse_mode: "HTML"
            });
        }
    }
})
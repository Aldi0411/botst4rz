exports.donate = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `🔰 -----[ *MENU DONASI ${BotName}* ]----- 🔰
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Mau donasi? ✨

⚠️ *${tampilTanggal}*
⚠️ *${tampilWaktu}*

♻ Silahkan donasi dibawah ini :
   
⚜ *OVO*: +6285751928963
⚜ *#DANA*: +6285751928963
⚜ *#PULSA*: +6285751928963
⚜ *#GOPAY*: +6285751928963

📺 *Iklan* :

✅ Follow akun instagram admin ${Aldii0411}

⚠️ INFORMASI COVID-19 TERBARU!

⚠️ POSITIF: *${corohelp.confirmed.value}*
⚠️ SEMBUH: *${corohelp.recovered.value}*
⚠️ MENINGGAL: *${corohelp.deaths.value}*
⚠️ UPDATE: *${corohelp.lastUpdate}*

♻️ _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_

♻️ Mau pasang iklan di *${BotName} ?*
☎️ WA : *${whatsapplu}*
  
⚠️ Gunakan dengan bijak ‼️
⚠️ Bot ini berjalan ${kapanbotaktif} ‼️

  
🔰 -----[ *POWERED BY ${BotName}* ]----- 🔰`
}

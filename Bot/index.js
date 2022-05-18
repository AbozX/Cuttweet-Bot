const {
	Discord,
	Permissions,
	Intents,
	Client,
	MessageEmbed,
	MessageAttachment,
	Collection,
	Collector,
	MessageCollector,
	MessageActionRow,
	MessageButton,
	MessageSelectMenu
} = require('discord.js');
const colors = require(`colors`);
const db = require(`quick.db`);
const config = require(`./config.json`);
const client = new Client({
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MEMBERS,
		Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_VOICE_STATES
	],
	allowedMentions: {
		parse: ['users'],
		repliedUser: false
	}
});
const usersMap = new Map();

client.on('ready', () => {
	console.log(`	Logged Us ${client.user.tag}`);
});




const Cuttweet = [
	"اسم اول صديق لك",
	"ممكن في يوم من الأيام تصبح شخص نباتي ؟.",
	"تجامل ولا صريح ؟",
	"مع او ضد : الرجال اكثر حقداً من النساء ؟",
	"من الاشياء البسيطة اللي تسعدك ؟",
	"اذا تم تعينك ملكا لجميع البلاد العربيه فما اول قرار ستخذه ؟ و لماذا ؟",
	"الرقم السري حق جوالك ...",
	"تشوف الي يفكر كثير نفسية ؟",
	"الفلوس كل شيء ؟",
	"مع او ضد : النوم افضل حل لـ مشاكل الحياة ...",
	"شنو تتوقع بتصير بعد 10 سنين ؟",
	"كم من 10 كتابتك بالقلم حلوة ؟",
	"اكثر اغنية تكرهها ؟",
	"لعبة تشوف نفسك فنان فيها ؟",
	"اكثر مصايبك مع مين ؟",
	"كم من 10 البرود فيك ؟",
	"متى لازم تقول لا ؟",
	"@منشن : شخص تحس انه نكبه",
	"تقدر تعيش يوم كامل بدون نت ؟",
	"شيء مستحيل ترفضه ؟.",
	"لو بتغير اسمك ايش بيكون الجديد ؟",
	"1جمال المراة يكمن في ...",
	"اذا جلست عند ناس م تعرفهم .. تكتفي بالسكوت ، ولا تتكلم معهم ؟",
	"اكثر لونين تحبهم مع بعض ؟",
	"لو زعلت بقوة وش بيرضيك ؟",
	"كلمه تعبر عن شعورك ؟",
	"عبر عن مودك الحالي بصورة ؟",
	"ردة فعلك لو مزح معك شخص م تعرفه ؟",
	"تعتبر نفسك شخص عاطفي ولا عقلاني ؟",
	"شيء جميل صار لك اليوم ؟",
	"مع او ضد : الصدق هو سر استمرار العلاقات فترة طويلة"
  ];




client.on("messageCreate", async message => {
	switch (message.content.split(" ")[0]) {
	  case config.bot_info.prefix + "Cuttweet":
  ///
  if(message.author.bot || !message.guild) return;
		var embed = new MessageEmbed()
		  .setAuthor(message.author.username , message.author.avatarURL(), "رابط سيرفرك هنا")
		  .setTitle(`**Cuttweet** 💬 *:*`)
		  .setDescription(`**${Cuttweet[Math.floor(Math.random() * Cuttweet.length)]}**`)
		  .setColor("#4954F1")
		  message.channel.send({ embeds: [embed] });
		break;
	}
  });









client.login(config.bot_info.token)
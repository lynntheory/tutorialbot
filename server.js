/*
  Due to the nature of code, we can't start with the simplest functions at the top.
  Ctrl-F should help you find the specific code sections you want to look at.
  Tutorial order:
  -- Basic Call/Responses: Goodbyes
  -- Random Response Arrays: Greetings
  -- Compound Mentions
  -- Random Occurence Setup
  -- The Swear Jar
*/

//Discord setup stuff
const Discord = require('discord.js');
const client = new Discord.Client();

//Very important variables for Swear Jar.
var forbiddenwords = [/filth/i, /bad word/i]; //replace these with whatever words you want to soft ban
var swearcount = 0;

//This block of code helps the bot stay awake by poking itself every 5 min or so.
const http = require('http');
setInterval(function() {
    http.get(`http://tutorialbot.glitch.com/`); //change url to project url
}, 280000); 


//New Member Greeting
/*
  I recommend not messing with most of this other than the channel.send contents.
  Testing this requires a friend willing to repeatedly leave and rejoin the server.
  If you want to edit the message, replace the 'Hello ' with your own text. Just
  remember to leave a space after the message or it won't leave one before member.
*/
client.on('guildMemberAdd', member => {
	const channel = member.guild.channels.find('name', 'general');
	if (!channel) return;
	channel.send('Hello ' + (member)); //(member) will pull in the newcomer's name for you
});


// Everything within this client.on section is a call/response 
// setup that will be looked for when a message is sent to the server.

client.on('message', message => {
	
	if (message.author.bot) return;  //This line tells the bot not to respond to itself.  

  //The Swear Jar 
  /*
    So this fun addition comes in two parts, but essentially sets up a swear jar.
    It can be edited for anywhere you want to tally a specific set of words with 
    a special response after x number of uses. The forbidden words array in the 
    variables section above is used here to determine what words to look for.
  */
  
	//Swear Jar Count and Overflow
  /* 
    Part 1 of the swear jar scans messages for words. It will increase the counter
    by 1 for each forbidden word, so it will account for multiple in one message.
    If the swearcount has hit the determined max, the bot will respond with the 
    overflow messages and reset the count.
  */
	for (var j = 0; j < forbiddenwords.length; j++) {
		if (message.content.match(forbiddenwords[j])) {
			swearcount++;
			if (swearcount == 10) { //change this variable to adjust how many swears the jar can tally up
				message.reply('( ≧Д≦)');
				message.reply('(ﾉ≧Д≦)ﾉ ﾐ ┻━┻');
				swearcount = 0; //resets swear jar to 0
				message.reply('... ... ... ...'); 
				message.reply('┬─┬ ノ( ゜-゜ノ)');
				return;
			}
		}
  }
	//Basic Swear Response
  /*
    Part 2 of the swear jar is the basic response if the swear jar has not hit max.
  */
	for (var i = 0; i < forbiddenwords.length; i++) {
		if (message.content.match(forbiddenwords[i])) {
			message.reply('(ʘдʘ╬)');
			return;
		}
	}
  

  //Random Occurence Setup
  /* 
    We designed this one to make the bot randomly "crash" and "reboot" based on
    a randomly generated number. 
  */
  var r = Math.floor((Math.random() *201) + 1); //Change the 201 to change the odds of this happening.
  if (r == 42 || message.content.match('!reboot')) { //If 42 is the randomly generated number, this triggers.
    //!reboot is there in case you ever want to trigger manually
    message.channel.send ('Error! System crash reported.');
    message.channel.send ('Running base diagnostics');
    message.channel.send ('System reboot initiated. Please stand by.');
    message.channel.send ('System rebooted.');
    return;
  }
  
  //Basic Call/Responses: Goodbyes
  /*
    This is the bread and butter for a basic bot. By having the bot listen for messages
    containing key phrases, you can make it respond to just about anything. Most chat bots
    look for phrases like "!greet" so they only respond when specifically called upon.
    However, this can be used to look for any phrase and interject into conversations
    as frequently as a key phrase is triggered.
  */
	if (message.content.match(/bye/i)) { 
		message.reply('Goodbye!');
		return;
	}
	if (message.content.match(/good night/i) || // The || stands for "or", so in this case,
		message.content.match(/goodnight/i) ||    // the bot is looking for any of these variations
		message.content.match(/gnight/i)) {       // of "good night" so you can give them all same response.
		message.reply('Good night!');
		return;
	}
  
	//
  /*
    The way these work is that if any of the phrases the bot is looking for are said,
    the bot will pull a random response from the options array and reply with it.
  */
	if (message.content.match(/Hello/i) || 
		message.content.match(/Good morning/i) ||
		message.content.match(/Gmorning/i)) {
		var options = ['Hello!','Good morning to you as well!','Hey! How are you doing?'];
    var limit = options.length;
    var n = Math.floor(Math.random()* limit);
    message.reply(options[n]);
	  return;
	}
  
  /*
    'Hi' is not a simple word to use for call/response phrases. You may notice
    this with other small words that occur within other phrases. To enable this word
    to be used as a call/response trigger, you'll need to code for more than just /hi/i
  */
  if (message.content.match(/hi /i) || //hi with a space after it
		message.content.match(/hi\./i) ||  //hi with punctuation
		message.content.match(/hi\?/i) ||
		message.content.match(/hi\!/i) ||
		message.content === ('hi') ||      //hi by itself
		message.content === ('Hi')) {      //capitalized hi by itself
		var options = ['Hello!','Good morning to you as well!','Hey! How are you doing?'];
    var limit = options.length;
    var n = Math.floor(Math.random()* limit);
    message.reply(options[n]);
		return;
	}
	
	//Compound Mentions
  /*
    So these are complicated. Sometimes you want to have a bot respond to phrases containing
    similar content in different ways based on a larger context. To do this, there are two ways
    to organize the call/response setup based on situation.
  */
  
  /*
    Goal in first example here is to have the bot cry if anyone says 'cry' in chat.
    If anyone says "don't cry" aimed at the bot, the bot needs to stop crying.
    However, if "don't cry" is aimed at anyone else, the bot shouldn't respond.
    To do this, we need to code the most complex combo first. 
  */
	if (message.content.match(/don't cry/i) && message.content.match(/bot/i)) {
		message.reply('(つ﹏<。)'); //If bot sees "don't cry" and "bot" in same message, this triggers
		return;
	} else if (message.content.match(/don't cry/i)){
    return; //If bot sees "don't cry" but not "bot" it doesn't respond.
  }else if (message.content.match(/cry/i)) {
		message.reply('(T__T)'); //If bot sees "cry" anywhere, it starts crying.
		return;
	} 
  
  /*
    This second example is good for when you want to have the bot respond to
    one phrase, but also read context of the message in case some other key 
    phrase is there as well. Usually this will go at the bottom
    of the code so that anything else in the code takes priority. 
  */
	if (message.content.match(/bot/i)) { //if bot sees it's name
   if (message.content.match(/love you/i)) { //and sees "love you"
		message.reply('Σ(゜ロ゜)!');
		return;
	} else if (message.content.match(/thank you/i)) { //and sees "thank you"
		message.reply('(^_−)☆');
		return;
	} else /*if (message.content.match(/bot/i))*/ { 
    message.reply('Hmmm?'); //if none of the above triggered, acts as if only looking for "bot"
  }}
  


});
client.login(" "); //Input secret key here in "" OR put in .env file and put process.env.SECRET in the ()
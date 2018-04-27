JavaScript for Discord Bots
=========================

**"I've never coded before! How could I ever program a bot?"**

If there is one thing I can ask of you going into this, please never feel intimidated if you look at a block of code and have no idea what it is saying. Code is looking at a foreign language that shares a root with your native tongue. It seems entirely different at first glance, but once you spot the patterns and words you are familiar with, the rest slowly falls into place. Not only that, but we've done our best with this tutorialbot to include comments in the code to detail what doesn't seem straightforward at first glance. You CAN code a bot; it just takes a bit of reading and translation.

**How does this program work?**

Ok, let's break this down. In this program you'll see a package.json file and a server.js file. The package.json file contains two types of information: metadata on who wrote the program and what it is, and information for the computer to know what resources to pull to run the file. Basic rule of thumb: if you don't know what it is, best to leave it be. Otherwise, it's a pretty simple document.

The server.js file is where the magic really happens. In this file is all the actual coding that makes the bot work. The code can be broken into three chunks:

-- Setup and Variables

-- client.on () code that makes things happen

-- client.login code that lets your bot get online

Most of your time will be spent copying, pasting, and editing elements of the client.on() code to get the responses you want.

**How the bot works**

Once you hook your bot up to Discord and tell it "Hey, this is a bot!" the program will look at your Discord server for specific events. This tutorial bot includes "when a new member joins your server" and "when someone makes a new message." Once one of these events happens, the bot will look at the message for information it is programmed to recognize and then react according to it's prewritten response. How complex you want to make this is entirely up to you.

**Basic Call/Response messages**

      if (message.content.match(/bye/i)) { 
        message.reply('Goodbye!');
	  	  return;
    	}

This is the most basic of call/response sequences. The way you read this is "If the message content contains some variation of "bye", then reply with "Goodbye!" and stop looking for more things to respond to."

      if (message.content.match(/bye/i)) { 
This is the start of an "if statement." Message.content.match is asking the program to look at the message you posted to see if it's content is a match. Inside the parenthesees we have /bye/i. This is a fancy way of writing "bye" that tells the program to look for "bye" but not JUST "bye." By putting "bye" there, the program would respond to "bye" but not "goodbye" or "Bye." It teaches the program to be less literal and more general when looking for the content you want. 

        message.reply('Goodbye!');
Message.reply posts the message as an @reply to whoever triggered it. This can be handy in long conversations to keep track of who the bot is talking to. When putting text in the parenthesis for a message.reply, all plain text needs to be in quotes. Any variables can be added, but would need to be added in with a +. For more information on that, look at the new member message section.

**Random Response Arrays: Greetings**

    if (message.content.match(/Hello/i) || 
		  message.content.match(/Good morning/i) ||
		  message.content.match(/Gmorning/i)) {
		var options = ['Hello!','Good morning to you as well!','Hey! How are you doing?'];
    var limit = options.length;
    var n = Math.floor(Math.random()* limit);
    message.reply(options[n]);
	  return;
	  }

This may look scary at first but it's really simple. This piece of code does the same thing as the previous section only a) it will trigger if the bot sees any one of several phrases and b) it will give a random response from a short list of phrases. These touches make the bot seem much more intelligent, if "realism" is something you are going for with your bot.

      if (message.content.match(/Hello/i) || 
		  message.content.match(/Good morning/i) ||
		  message.content.match(/Gmorning/i)) {

This block of text is the same as the message.content.match statemembt above. The only key difference is it uses || to denote an 'or' statement. This could be read as "If the message content contains some variation of Hello, Good morning, or Gmorning, then..." Note the use of parenthesis here; all statements within brackets or parenthesis in Javascript must be closed with a corresponding end bracket or parenthesis or your code will produce errors.

      var options = ['Hello!','Good morning to you as well!','Hey! How are you doing?'];

This array labeled "options" currently has three options of response the bot can return to you if it sees any of the statements in the previous snippet. 
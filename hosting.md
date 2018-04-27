How to set up your Discord Bot
=========================

# Get your own copy of this code
**On Glitch**
In the upper left hand corner of this window, click the "tutorialbot" name and select "remix this" from the dropdown. That will copy this program over to a new version and let you edit everything there, without disrupting the original code. You can also download a copy from Glitch by going to the advanced options.

**On GitHub**
In the upper right corner of the GitHub repository, there is a button labeled "fork." Click this and it will get you a copy of the code for your own account. From there you can edit at will. 

# Edit your code

Dive into tutorial.md for a quick tutorial on discord bots, then try editing the server.js file yourself! Don't forget to carefully edit your personal details in package.json.

# Link your bot to Discord Developers

# Host your code
**Glitch**
If you are using Glitch for editing your code, this will be somewhat easier to start. Glitch will let you host your Discord Bot for free, but with a five minute inactivity timeout. It's a good starting point, but eventually you will want a more long-term hosting location. If you are using GitHub, you can also import your GitHub code to Glitch for easy updates.

**Heroku**
Heroku is a cloud platform for apps with a bunch of different plans. Their free one should be more than enough to get you started. https://www.heroku.com/pricing To get your code onto Heroku without a lot of technical knowhow, you'll need a Heroku account and a Github account. 

1) If you've been using Glitch and haven't yet imported your bot to GitHub, you'll need to move your code to GitHub. 

  -- In the upper right corner of GitHub, click the + sign and select "new repository." Give your repository a name. Most importantly, click the checkbox for "Initialize this repository with a README." If your Glitch file already has a Readme, it will override the GitHub one. 
  -- Now, on Glitch, click the dropdown that is your project name, click advanced options. Select "export to GitHub." When it asks you for a repository, that will be "username/projectname" for your GitHub account. 
  -- Back in GitHub, you now should have 2 branches. Click on 

2) Log into your Heroku account and visit your dashboard. In the upper right, click "new" and select "new app." Select a name for your bot that is available and launch the bot.

3) You should now be on the bot's "deploy" page. Under deployment method, select GitHub and follow any steps it might have to connect your accounts. Then, under "connect to GitHub" type in your projectname on GitHub. Search, then hit connect.

4) Now your bot is on Heroku. Under "automatic deploys" you can click "enable" so that anything you put into the master branch of the bot on GitHub automatically updates in Heroku. If you don't want this, then you'll need to manually update in Heroku whenever your bot has a change.



/*

COPYRIGHT:   All rights copyright to creator of this script. Using this script without a permission is high forbidden.
CREATOR:     By ID: 5266523 / @Freyr
FOR:         https://plug.dj/mwf

*/

var bot = {
  creator: 5266523,
  accountID: API.getUser().id,
  status: false,
  name: "Brain | BOT",
  version: "1.9.6",
  room: "https://plug.dj/mwf",
  cmdprefix: "!",
  commands: null,
  discord: "https://discordapp.com/invite/JxNpJrs",
  facebook: null,
  rules: null,
  web: null,
  language: "English",
  messages: {

    "English": {
      "onstart": "Bot version %BOTVERSION% created by Freyr is successfully enabled.",
      "botkilled": "Bot is successfully disabled.",
      "creator": "@%NAME% Creator of this bot is Freyr. If any problem you can contact him on Discord: @Freyr#1996.",
      "commands": "@%NAME% Link to commands list: %COMMANDS%.",
      "chatcleared": "@%NAME% Chat was cleared.",
      "discord": "@%NAME% Our Discord server link: %DISCORD%.",
      "facebook": "@%NAME% Our Facebook page link: %FACEBOOK%.",
      "languagechanged": "@%NAME% Language is successfully changed to: %NEWLANGUAGE%.",
      "maxlengthskipped": "@%NAME% your song is longer than 7 minutes. Im skipping.",
      "me": "@%NAME% Your banana has: %CICINA%cm. You have %IQ% IQ and you are sexy on %SEXY%.",
      "nopermission": "@%NAME% You haven't got permission.",
      "rules": "@%NAME% Link to our rules: %RULES%.",
      "skipped": "@%NAME% You skipped a song.",
      "songstuck": "Song is stuck, im skipping.",
      "welcome": "Welcome @%NAME% to the community Music witch friends! Please respect the rules and play the right songs! Have fun!",
      "welcomeback": "Welcome back @%NAME%. :heart:",
      "web": "@%NAME% Our website link: %WEB%.",
      "userafk": "User @%NAME% is AFK.",
      "userafkwithreason": "User @%NAME% is AFK from reason: %REASON%.",

       "automat": {
         "win": "@%NAME% You won! Your automat slots was: %SLOT1% | %SLOT2% | %SLOT3%. You gained 50 coins. Now you have %COINS% coins.",
         "lose": "@%NAME% Hmm.. what a pity, you lost! Your automat slots was: %SLOT1% | %SLOT2% | %SLOT3%. You lost 10 coins. Now you have %COINS% coins."
       },

      "coins": {
        "notvalid": "@%NAME% Not valid command. Type: !give @user coins.",
        "given": "@%NAME% You given %GIVENCOINS% coins to @%RECEIVER%. Now he has %COINS% coins.",
        "needed": "@%NAME% You haven't got a needed coins! You need %NEEDED% coins yet.",
        "balance": "@%NAME% You have %COINS% coins.",
        "help": "@%NAME% In our communit we have virtual currency. You can earn with djing and playing songs. 1 Woot = 1 coin | 1 Grab = 2 coins. You will earn coins after your song ends."
      },

      "cookies": {
        "notvalid": "@%NAME% Not valid command. Type: !cookie @user.",
        "list": ["oreo cookie", "love cookie"],
        "valid": "@%FROM% gives %COOKIE% to @%TO%."
      },

      "love": {
        "notvalid": "@%NAME% Not valid command. Type: !love @user.",
        "valid": "@%NAME% %FROM% loves @%TO% on %PERCENT%. :heart:"
      },

      "roulette": {
        "start": "@everyone Roulette is now open! Type !join to the chat and you can win first position in waitlist.",
        "join": "@%NAME% Successfully joined to Roulette.",
        "winner": "@%NAME% You won a roulette! Now im moving you to first position."
      },

      "settings": {
        "on": "@%NAME% Function %FUNCTION% is successfully enabled.",
        "off": "@%NAME% Function %FUNCTION% is successfully disabled.",

        "adfilter": "AdFilter",
        "autoroulette": "AutoRoulette",
        "autoskip": "AutoSkip",
        "autowoot": "AutoWoot",
        "maxlengthskip": "MaxLengthSkip",
        "welcomemsg": "WelcomeMessage",
        "language": "Language"
      },

      "waitlist": {
        "notvaliddc": "@%NAME% Bot didn't find you in disconnected positions.",
        "validdc": "@%NAME% You was successfully found. Your position was %POSITION%.",
        "notvalidmove": "@%NAME% Not valid command. Type !move @user position.",
        "validmove": "@%NAME% You moved user @%USER% to %NEWPOSITION% position in waitist.",
        "validbought": "@%NAME% You successfully bought a first position in waitlist. Now you have %COINS% coins."
      }

    },

    "Czech": {
      "onstart": "Bot verze %BOTVERSION% kterou vytvořil Freyr je úspěšně zapnutá.",
      "botkilled": "Bot je úspěšně vypnutý.",
      "creator": "@%NAME% Tvorca tohoto bota je Freyr. Pokud máte nějaký problém, můžete ho kontaktovat na Discordu: @Freyr#1996.",
      "commands": "@%NAME% Odkaz na seznam příkazů: %COMMANDS%.",
      "chatcleared": "@%NAME% Chat byl vyčisten.",
      "discord": "@%NAME% Náš odkaz na Discord server: %DISCORD%.",
      "facebook": "@%NAME% Náš odkaz na Facebook stránku: %FACEBOOK%.",
      "languagechanged": "@%NAME% Jazyk byl úspěšně změněn na: %NEWLANGUAGE%.",
      "maxlengthskipped": "@%NAME% tvá pesnička je dlhšia ako 8 minút. Bude přeskočená.",
      "me": "@%NAME% Tvúj banán má: %CICINA%cm. Ty máš %IQ% IQ a jsi sexy na %SEXY%.",
      "nopermission": "@%NAME% Na toto nemáte povolení.",
      "rules": "@%NAME% Odkaz na naše pravidlá: %RULES%.",
      "skipped": "@%NAME% Přeskočil jsi píseň.",
      "songstuck": "Píseň je zaseklá, přeskočuji ju.",
      "welcome": "Vítej @%NAME% v komunitě Exclusive Music. Jsme rádi, že jste přišli mezi nás :heartpulse: a přišli jste poslouchat pouze EDM.",
      "welcomeback": "Vítej zpět @%NAME%. :heart:",
      "web": "@%NAME% Náš odkaz na stránku: %WEB%.",
      "userafk": "Užívatel @%NAME% je AFK.",
      "userafkwithreason": "Užívatel @%NAME% je AFK z důvodu: %REASON%.",

      "automat": {
         "win": "@%NAME% Vyhráli jste! Vaše sloty v automatu byly: %SLOT1% | %SLOT2% | %SLOT3%. Získali jste 50 mincí. Nyní máte %COINS% mincí.",
         "lose": "@%NAME% Hmm.. to je škoda, prohráli jste! Vaše sloty v automatu byly: %SLOT1% | %SLOT2% | %SLOT3%. Ztratili jste 10 mincí. Nyní máte %COINS% mincí."
       },

      "coins": {
        "notvalid": "@%NAME% Neplatný příkaz. Napíš: !give @uživatel mince.",
        "given": "@%NAME% Dali jste %GIVENCOINS% mincí @%RECEIVER%. Nyní má %COINS% mincí.",
        "needed": "@%NAME% Nemáte potřebné mince! Potřebujete ještě %NEEDED% mincí.",
        "balance": "@%NAME% Máte %COINS% mincí­.",
        "help": "@%NAME% V naší komunitě máme virtuální měnu. Můžete si vydělátat djingem. 1 Woot = 1 mince | 1 Grab = 2 mince. Mince získáte po dokončení vaší skladby."
      },

      "cookies": {
        "notvalid": "@%NAME% Neplatný příkaz. Napíš: !cookie @uživatel.",
        "list": ["oreo sušenku", "zamilovanú sušenku"],
        "valid": "@%NAME% %FROM% dal %COOKIE% uživateli @%TO%."
      },

      "love": {
        "notvalid": "@%NAME% Neplatný příkaz. Napíš: !love @uživatel.",
        "valid": "@%NAME% %FROM% miluje @%TO% na %PERCENT%. :heart:"
      },

      "roulette": {
        "start": "@everyone Ruleta je nyní otevřená! Napíš !join do chatu k připojení a můžete vyhrát první pozici v seznamu čekání­.",
        "join": "@%NAME% Úspěšně jste se připojili k Rulete.",
        "winner": "@%NAME% Vyhráli jste ruletu! Teď vás přesunu na první místo."
      },

      "settings": {
        "on": "@%NAME% Funkce %FUNCTION% je úspěšně zapnuta.",
        "off": "@%NAME% Funkce %FUNCTION% je úspěšně vypnuta.",

        "adfilter": "FiltrNaKomunity",
        "autoroulette": "AutoRuleta",
        "autoskip": "AutomatickePřeskočení",
        "autowoot": "AutomatickeWootováni",
        "maxlengthskip": "PřeskočeníMaximálnejDĺžky",
        "welcomemsg": "UvítacíZpráva",
        "language": "Jazyk"
      },

      "waitlist": {
        "notvaliddc": "@%NAME% Bot vás nenašel v odpojených pozicích.",
        "validdc": "@%NAME% Byly jste úspěšně nalezen. Vaše pozice byla %POSITION%.",
        "notvalidmove": "@%NAME% Neplatný příkaz. Napíš: !move @uživatel pozice.",
        "validmove": "@%NAME% Přesunuli jste uživatele @%USER% na %NEWPOSITION% pozici ve seznamu čekání­.",
        "validbought": "@%NAME% Úspěšně jste si zakoupili první pozici v seznamu čekání. Teraz máte %COINS% mincí­."
      }

    }

  },
  settings: {
    adfilter: true,
    autoroulette: false,
    autoskip: true,
    autoskipTimer: null,
    autowoot: true,
    maxlengthskip: true,
    welcomemsg: true
  },
  API: {

    onStart: function(){
      bot.status = true;
      if(bot.settings.autowoot == true) $("button.room-controls--desktop-btn.btn-like").click();
      API.sendChat(bot.API.convertChat(bot.messages[bot.language].onstart, {botname: bot.name, botversion: bot.version}));
    },

    command: function(message, command){
      return message.startsWith(bot.cmdprefix + command);
    },

    community: {
      users: []
    },

    convertChat: function(message, args){
      for(var value in args) message = message.replace("%"+ value.toUpperCase() +"%", args[value]);
      return message;
    },

    getCoins: function(userID){
      var coins;

      if(localStorage.getItem(userID) == null || localStorage.getItem(userID) === "undefined"){
        localStorage.setItem(userID, 0);
        coins = localStorage.getItem(userID);
      }

      else{
        coins = localStorage.getItem(userID);
      }

      return parseInt(coins);
    },

    roulette: {
      status: false,
      users: [],
      automatic: setInterval(function(){ if(bot.status == true && bot.settings.autoroulette == true) bot.API.roulette.start() }, 60 * 60000),
      timer: null,

      start: function(){
        bot.API.roulette.status = true;
        bot.API.roulette.timer = setTimeout(function(){
          bot.API.roulette.end();
        }, 60000);
        API.sendChat(bot.messages[bot.language].roulette.start);
      },

      end: function(){
        bot.API.roulette.status = false;
        var winner = bot.API.roulette.users[Math.floor(Math.random() * bot.API.roulette.users.length)];
        bot.API.roulette.users = [];
        API.sendChat(bot.API.convertChat(bot.messages[bot.language].roulette.winner, {name: API.getUser(winner).username}));

        setTimeout(function(){
          API.moderateAddDJ(winner);
          setTimeout(function(){
            API.moderateMoveDJ(winner, 1);
          }, 1000);
        }, 2000);
      }

    },

    waitlist: {
      users: [],
      disconnected: [],

      updatePosition: function(userID, newPosition){
        var userInUsers = bot.API.waitlist.users.find(i => i.userID == userID);

        if(userInUsers){
          userInUsers.position = newPosition;
        }

        else{
          bot.API.waitlist.users.push({
            userID: userID,
            position: newPosition
          });
        }

      },

      returnBack: function(userID){
        var userInDisconnected = bot.API.waitlist.disconnected.find(i => i.userID == userID);

        if(userInDisconnected){
          var position = userInDisconnected.position;
          bot.API.waitlist.disconnected.splice(bot.API.waitlist.disconnected.findIndex(i => i.userID == userID), 1);
          API.sendChat(bot.API.convertChat(bot.messages[bot.language].waitlist.validdc, {name: API.getUser(userID).username, position: position}));

          setTimeout(function(){
            API.moderateAddDJ(userID);
            setTimeout(function(){
              API.moderateMoveDJ(userID, position);
            }, 1000);
          }, 2000);
        }

        else{
          API.sendChat(bot.API.convertChat(bot.messages[bot.language].waitlist.notvaliddc, {name: API.getUser(userID).username}));
        }

      }

    }

  }
};

(function(){
  bot.API.onStart();

  // Handle user join event
  API.on("userJoin", function(data){
    if(bot.status == false && bot.settings.welcomemsg == false) return;

    if(bot.API.community.users.indexOf(data.id) == -1){
      API.sendChat(bot.API.convertChat(bot.messages[bot.language].welcome, {name: data.username}));
      bot.API.community.users.push(data.id);
    }

    else{
      API.sendChat(bot.API.convertChat(bot.messages[bot.language].welcomeback, {name: data.username}));
    }

  });
  /***********************************************************************************************/

  // Handle advance events
  API.on("advance", function(data){
    if(bot.status == false) return;

    setTimeout(function(){
      if(bot.settings.autowoot == true) $("button.room-controls--desktop-btn.btn-like").click();
    }, 1000);

    if(bot.settings.maxlengthskip == true && data.media.duration > 8 * 60){
      API.sendChat(bot.API.convertChat(bot.messages[bot.language].maxlengthskipped, {name: data.dj.username}));
      setTimeout(function(){
        API.moderateForceSkip();
      }, 2000);
    }

    if(!data.lastPlay) return;
    var lastDJID = data.lastPlay.dj.id;
    var lastDJName = data.lastPlay.dj.username;
    var coins = bot.API.getCoins(lastDJID);
    var reward = parseInt(data.lastPlay.score.positive + (data.lastPlay.score.grabs * 2));

    localStorage.setItem(lastDJID, coins + reward);

    if(bot.settings.autoskip == true){
      var startcid = API.getMedia().cid;

      setTimeout(function(){
  	    var endcid = API.getMedia().cid;

  	    if(startcid === endcid){
          API.sendChat(bot.messages[bot.language].songstuck);
          API.moderateForceSkip();
        }
    	}, (API.getMedia().duration * 1000) + 5000);
    }

  });
  /***********************************************************************************************/

  // Handle chat messages
  API.on("chat", function(data){
    var message = data.message;
    var fromID = data.uid;
    var fromName = data.un;

    if(message.startsWith(bot.cmdprefix +"start")){
      var role = API.getUser(fromID).role;

      if(role >= API.ROLE.MANAGER || fromID == bot.creator) bot.API.onStart();
      else API.sendChat(bot.API.convertChat(bot.messages[bot.language].nopermission, {name: fromName}));
    }

    if(bot.status == false) return;

    if(bot.settings.adfilter == true && (message.indexOf("https://plug.dj/") > -1 || message.indexOf("plug.dj/") > -1)){
      if(fromID == bot.accountID) return;
      API.moderateDeleteChat(data.cid);
    }

    else if(message.startsWith(bot.cmdprefix)){
      if(fromID != bot.accountID) API.moderateDeleteChat(data.cid);

      // Co-Host and higher
      if(bot.API.command(message, "give")){
        var role = API.getUser(fromID).role;

        if(role >= API.ROLE.COHOST || fromID == bot.creator){
          var receiver = message.substring(message.indexOf("@") + 1, message.lastIndexOf(" "));
          var givenCoins = parseInt(message.substring(message.lastIndexOf(" ") + 1));
          var userInCommunity = API.getUsers().find(i => i.username === receiver);

          if(userInCommunity){

            if(givenCoins > 0){
              var coins = bot.API.getCoins(userInCommunity.id);
              localStorage.setItem(userInCommunity.id, coins + givenCoins);
              API.sendChat(bot.API.convertChat(bot.messages[bot.language].coins.given, {name: fromName, givencoins: givenCoins, receiver: receiver, coins: bot.API.getCoins(userInCommunity.id)}));
            }

            else API.sendChat(bot.API.convertChat(bot.messages[bot.language].coins.notvalid, {name: fromName}));
          }

          else API.sendChat(bot.API.convertChat(bot.messages[bot.language].coins.notvalid, {name: fromName}));
        }

        else API.sendChat(bot.API.convertChat(bot.messages[bot.language].nopermission, {name: fromName}));
      }

      // Manager and higher
      else if(bot.API.command(message, "adfilter")){
        var role = API.getUser(fromID).role;

        if(role >= API.ROLE.MANAGER || fromID == bot.creator){

          if(bot.settings.adfilter == false){
            bot.settings.adfilter = true;
            API.sendChat(bot.API.convertChat(bot.messages[bot.language].settings.on, {name: fromName, function: bot.messages[bot.language].settings.adfilter}));
          }

          else{
            bot.settings.adfilter = false;
            API.sendChat(bot.API.convertChat(bot.messages[bot.language].settings.off, {name: fromName, function: bot.messages[bot.language].settings.adfilter}));
          }

        }

        else API.sendChat(bot.API.convertChat(bot.messages[bot.language].nopermission, {name: fromName}));
      }

      else if(bot.API.command(message, "autoroulette") || bot.API.command(message, "autoruleta")){
        var role = API.getUser(fromID).role;

        if(role >= API.ROLE.MANAGER || fromID == bot.creator){

          if(bot.settings.autoroulette == false){
            bot.settings.autoroulette = true;
            API.sendChat(bot.API.convertChat(bot.messages[bot.language].settings.on, {name: fromName, function: bot.messages[bot.language].settings.autoroulette}));
          }

          else{
            bot.settings.autoroulette = false;
            API.sendChat(bot.API.convertChat(bot.messages[bot.language].settings.off, {name: fromName, function: bot.messages[bot.language].settings.autoroulette}));
          }

        }

        else API.sendChat(bot.API.convertChat(bot.messages[bot.language].nopermission, {name: fromName}));
      }

      else if(bot.API.command(message, "autoskip")){
        var role = API.getUser(fromID).role;

        if(role >= API.ROLE.MANAGER || fromID == bot.creator){

          if(bot.settings.autoskip == false){
            bot.settings.autoskip = true;
            API.sendChat(bot.API.convertChat(bot.messages[bot.language].settings.on, {name: fromName, function: bot.messages[bot.language].settings.autoskip}));
          }

          else{
            bot.settings.autoskip = false;
            clearInterval(bot.settings.autoskipTimer);
            API.sendChat(bot.API.convertChat(bot.messages[bot.language].settings.off, {name: fromName, function: bot.messages[bot.language].settings.autoskip}));
          }

        }

        else API.sendChat(bot.API.convertChat(bot.messages[bot.language].nopermission, {name: fromName}));
      }

      else if(bot.API.command(message, "autowoot")){
        var role = API.getUser(fromID).role;

        if(role >= API.ROLE.MANAGER || fromID == bot.creator){

          if(bot.settings.autowoot == false){
            bot.settings.autowoot = true;
            API.sendChat(bot.API.convertChat(bot.messages[bot.language].settings.on, {name: fromName, function: bot.messages[bot.language].settings.autowoot}));
            $("button.room-controls--desktop-btn.btn-like").click();
          }

          else{
            bot.settings.autowoot = false;
            API.sendChat(bot.API.convertChat(bot.messages[bot.language].settings.off, {name: fromName, function: bot.messages[bot.language].settings.autowoot}));
          }

        }

        else API.sendChat(bot.API.convertChat(bot.messages[bot.language].nopermission, {name: fromName}));
      }

      else if(bot.API.command(message, "changelang") || bot.API.command(message, "zmenitjazyk")){
        var role = API.getUser(fromID).role;

        if(role >= API.ROLE.MANAGER || fromID == bot.creator){
          bot.language = (bot.language === "English") ? "Czech" : "English";
          API.sendChat(bot.API.convertChat(bot.messages[bot.language].languagechanged, {name: fromName, newLanguage: bot.language}));
        }

        else API.sendChat(bot.API.convertChat(bot.messages[bot.language].nopermission, {name: fromName}));
      }

      else if(bot.API.command(message, "clearchat") || bot.API.command(message, "vycistitchat")){
        var role = API.getUser(fromID).role;

        if(role >= API.ROLE.MANAGER || fromID == bot.creator){
          var messages = $("#chat-messages").children();
          for(var i = 0; i < messages.length; i++) API.moderateDeleteChat(messages[i].getAttribute("data-cid"));
          API.sendChat(bot.API.convertChat(bot.messages[bot.language].chatcleared, {name: fromName}));
        }

        else API.sendChat(bot.API.convertChat(bot.messages[bot.language].nopermission, {name: fromName}));
      }

      else if(bot.API.command(message, "kill")){
        var role = API.getUser(fromID).role;

        if(role >= API.ROLE.MANAGER || fromID == bot.creator){
          bot.status = false;
          clearInterval(bot.API.roulette.automatic);
          clearTimeout(bot.API.roulette.timer);
          clearInterval(bot.settings.autoskipTimer);
          API.sendChat(bot.API.convertChat(bot.messages[bot.language].botkilled, {name: fromName}));
        }

        else API.sendChat(bot.API.convertChat(bot.messages[bot.language].nopermission, {name: fromName}));
      }

      else if(bot.API.command(message, "maxlengthskip")){
        var role = API.getUser(fromID).role;

        if(role >= API.ROLE.MANAGER || fromID == bot.creator){

          if(bot.settings.maxlengthskip == false){
            bot.settings.maxlengthskip = true;
            API.sendChat(bot.API.convertChat(bot.messages[bot.language].settings.on, {name: fromName, function: bot.messages[bot.language].settings.maxlengthskip}));
          }

          else{
            bot.settings.maxlengthskip = false;
            API.sendChat(bot.API.convertChat(bot.messages[bot.language].settings.off, {name: fromName, function: bot.messages[bot.language].settings.maxlengthskip}));
          }

        }

        else API.sendChat(bot.API.convertChat(bot.messages[bot.language].nopermission, {name: fromName}));
      }

      else if(bot.API.command(message, "move")){
        var role = API.getUser(fromID).role;

        if(role >= API.ROLE.MANAGER || fromID == bot.creator){
          var who = message.substring(message.indexOf("@") + 1, message.lastIndexOf(" "));
          var position = parseInt(message.substring(message.lastIndexOf(" ") + 1));
          var userInCommunity = API.getUsers().find(i => i.username === who);

          if(userInCommunity){

            if(position > 0){
              API.sendChat(bot.API.convertChat(bot.messages[bot.language].waitlist.validmove, {name: fromName, user: who, newposition: position}));

              setTimeout(function(){
                API.moderateAddDJ(userInCommunity.id);
                setTimeout(function(){
                  API.moderateMoveDJ(userInCommunity.id, position);
                }, 1000);
              }, 2000);
            }

            else API.sendChat(bot.API.convertChat(bot.messages[bot.language].waitlist.notvalidmove, {name: fromName}));
          }

          else API.sendChat(bot.API.convertChat(bot.messages[bot.language].waitlist.notvalidmove, {name: fromName}));
        }

        else API.sendChat(bot.API.convertChat(bot.messages[bot.language].nopermission, {name: fromName}));
      }

      else if(bot.API.command(message, "roulette") || bot.API.command(message, "ruleta")){
        var role = API.getUser(fromID).role;

        if(role >= API.ROLE.MANAGER || fromID == bot.creator){
          if(bot.API.roulette.status == false) bot.API.roulette.start();
        }

        else API.sendChat(bot.API.convertChat(bot.messages[bot.language].nopermission, {name: fromName}));
      }

      else if(bot.API.command(message, "welcomemsg")){
        var role = API.getUser(fromID).role;

        if(role >= API.ROLE.MANAGER || fromID == bot.creator){

          if(bot.settings.welcomemsg == false){
            bot.settings.welcomemsg = true;
            API.sendChat(bot.API.convertChat(bot.messages[bot.language].settings.on, {name: fromName, function: bot.messages[bot.language].settings.welcomemsg}));
          }

          else if(bot.settings.welcomemsg == true){
            bot.settings.welcomemsg = false;
            API.sendChat(bot.API.convertChat(bot.messages[bot.language].settings.off, {name: fromName, function: bot.messages[bot.language].settings.welcomemsg}));
          }

        }

        else API.sendChat(bot.API.convertChat(bot.messages[bot.language].nopermission, {name: fromName}));
      }

      // Bouncer and higher
      else if(bot.API.command(message, "settings") || bot.API.command(message, "nastaveni")){
        var role = API.getUser(fromID).role;

        if(role >= API.ROLE.BOUNCER || fromID == bot.creator){
          var response = "[@"+ fromName +"] ";

          response += bot.messages[bot.language].settings.adfilter +": ";
          if(bot.settings.adfilter == true) response += "ON";
          else response += "OFF";
          response += " | ";

          response += bot.messages[bot.language].settings.autoroulette +": ";
          if(bot.settings.autoroulette == true) response += "ON";
          else response += "OFF";
          response += " | ";

          response += bot.messages[bot.language].settings.autoskip +": ";
          if(bot.settings.autoskip == true) response += "ON";
          else response += "OFF";
          response += " | ";

          response += bot.messages[bot.language].settings.autowoot +": ";
          if(bot.settings.autowoot == true) response += "ON";
          else response += "OFF";
          response += " | ";

          response += bot.messages[bot.language].settings.maxlengthskip +": ";
          if(bot.settings.maxlengthskip == true) response += "ON";
          else response += "OFF";
          response += " | ";

          response += bot.messages[bot.language].settings.welcomemsg +": ";
          if(bot.settings.welcomemsg == true) response += "ON";
          else response += "OFF";
          response += " | ";

          response += bot.messages[bot.language].settings.language +": "+ bot.language;
          response += ".";

          API.sendChat(response);
        }

        else API.sendChat(bot.API.convertChat(bot.messages[bot.language].nopermission, {name: fromName}));
      }

      else if(bot.API.command(message, "skip") || bot.API.command(message, "preskocit")){
        var role = API.getUser(fromID).role;

        if(role >= API.ROLE.BOUNCER || fromID == bot.creator){
          API.sendChat(bot.API.convertChat(bot.messages[bot.language].skipped, {name: fromName}));

          setTimeout(function(){
            API.moderateForceSkip();
          }, 2000);
        }

        else API.sendChat(bot.API.convertChat(bot.messages[bot.language].nopermission, {name: fromName}));
      }

      // All users
      else if(bot.API.command(message, "afk")){
        var space = message.indexOf(" ");

        if(space == -1) API.sendChat(bot.API.convertChat(bot.messages[bot.language].userafk, {name: fromName}));
        else if(message.substring(space + 1).trim() === "") API.sendChat(bot.API.convertChat(bot.messages[bot.language].userafk, {name: fromName}));

        else{
          var reason = message.substring(message.indexOf(" ") + 1);
          API.sendChat(bot.API.convertChat(bot.messages[bot.language].userafkwithreason, {name: fromName, reason: reason}));
        }

      }

       else if(bot.API.command(message, "minigame")){
         var coins = parseInt(bot.API.getCoins(fromID));
      
         if(coins >= 20){
           localStorage.setItem(fromID, coins - 20);
      
           setTimeout(function(){
             coins = parseInt(bot.API.getCoins(fromID));
      
             var random = Math.floor(Math.random() * 5) + 1;
      
             if(slot1 === slot2 && slot2 === slot3){
               localStorage.setItem(fromID, coins + 50);
               API.sendChat(bot.API.convertChat(bot.messages[bot.language].automat.win, {name: fromName, slot1: slot1, slot2: slot2, slot3: slot3, coins: bot.API.getCoins(fromID)}));
             }
      
             else API.sendChat(bot.API.convertChat(bot.messages[bot.language].automat.lose, {name: fromName, slot1: slot1, slot2: slot2, slot3: slot3, coins: coins}));
           }, 2000);
      
         }
      
         else API.sendChat(bot.API.convertChat(bot.messages[bot.language].coins.needed, {name: fromName, needed: 20 - coins}));
       }

      else if(bot.API.command(message, "buy") || bot.API.command(message, "koupit")){
        var coins = parseInt(bot.API.getCoins(fromID));

        if(coins >= 100){
          localStorage.setItem(fromID, coins - 100);
          API.sendChat(bot.API.convertChat(bot.messages[bot.language].waitlist.validbought, {name: fromName, coins: bot.API.getCoins(fromID)}));

          setTimeout(function(){
            API.moderateAddDJ(fromID);
            setTimeout(function(){
              API.moderateMoveDJ(fromID, 1);
            }, 1000)
          }, 2000);

        }

        else API.sendChat(bot.API.convertChat(bot.messages[bot.language].coins.needed, {name: fromName, needed: 100 - coins}));
      }

      else if(bot.API.command(message, "cookie")){
        var space = message.indexOf(" ");

        if(space == -1) API.sendChat(bot.API.convertChat(bot.messages[bot.language].cookies.notvalid, {name: fromName}));
        else if(message.substring(space + 1).trim() === "" || message.indexOf("@") == -1) API.sendChat(bot.API.convertChat(bot.messages[bot.language].cookies.notvalid, {name: fromName}));

        else{
          var name = message.substring(message.indexOf("@") + 1);
          var random = bot.messages[bot.language].cookies.list[Math.floor(Math.random() * bot.messages[bot.language].cookies.list.length)];
          API.sendChat(bot.API.convertChat(bot.messages[bot.language].cookies.valid, {name: fromName, from: fromName, cookie: random, to: name}));
        }

      }

      else if(bot.API.command(message, "coins") || bot.API.command(message, "mince")){
        API.sendChat(bot.API.convertChat(bot.messages[bot.language].coins.balance, {name: fromName, coins: bot.API.getCoins(fromID)}));
      }

      else if(bot.API.command(message, "helpcoins") || bot.API.command(message, "pomocmince")){
        API.sendChat(bot.API.convertChat(bot.messages[bot.language].coins.help, {name: fromName, from: fromName, cookie: random, to: name}));
      }

      else if(bot.API.command(message, "commands") || bot.API.command(message, "prikazy")){
        API.sendChat(bot.API.convertChat(bot.messages[bot.language].commands, {name: fromName, commands: bot.commands}));
      }

      else if(bot.API.command(message, "creator") || bot.API.command(message, "tvorca")){
        API.sendChat(bot.API.convertChat(bot.messages[bot.language].creator, {name: fromName}));
      }

      else if(bot.API.command(message, "dc")){
        bot.API.waitlist.returnBack(parseInt(fromID));
      }

      else if(bot.API.command(message, "discord")){
        API.sendChat(bot.API.convertChat(bot.messages[bot.language].discord, {name: fromName, discord: bot.discord}));
      }

      else if(bot.API.command(message, "facebook") || bot.API.command(message, "fb")){
        API.sendChat(bot.API.convertChat(bot.messages[bot.language].facebook, {name: fromName, facebook: bot.facebook}));
      }

      else if(bot.API.command(message, "join")){
        if(bot.API.roulette.status == true && bot.API.roulette.users.indexOf(fromID) == -1){
          bot.API.roulette.users.push(fromID);
          API.sendChat(bot.API.convertChat(bot.messages[bot.language].roulette.join, {name: fromName}));
        }
      }

      else if(bot.API.command(message, "love") || bot.API.command(message, "laska")){
        var space = message.indexOf(" ");

        if(space == -1) API.sendChat(bot.API.convertChat(bot.messages[bot.language].love.notvalid, {name: fromName}));
        else if(message.substring(space + 1).trim() === "" || message.indexOf("@") == -1) API.sendChat(bot.API.convertChat(bot.messages[bot.language].love.notvalid, {name: fromName}));

        else{
          var name = message.substring(message.indexOf("@") + 1);
          var random = Math.floor(Math.random() * 101);
          API.sendChat(bot.API.convertChat(bot.messages[bot.language].love.valid, {name: fromName, from: fromName, to: name, percent: random +"%"}));
        }

      }

      else if(bot.API.command(message, "me") || bot.API.command(message, "ja")){
        var cicina = Math.floor(Math.random() * 41);
        var sexy = Math.floor(Math.random() * 101);
        var iq = Math.floor(Math.random() * 181);

        API.sendChat(bot.API.convertChat(bot.messages[bot.language].me, {name: fromName, cicina: cicina, iq: iq, sexy: sexy +"%"}));
      }

      else if(bot.API.command(message, "rules") || bot.API.command(message, "pravidla")){
        API.sendChat(bot.API.convertChat(bot.messages[bot.language].rules, {name: fromName, rules: bot.rules}));
      }

      else if(bot.API.command(message, "web")){
        API.sendChat(bot.API.convertChat(bot.messages[bot.language].web, {name: fromName, web: bot.web}));
      }

    }

  });
  /***********************************************************************************************/

  // Handle waitlist updates
  API.on("waitListUpdate", function(data){
    if(bot.status == false) return;

    for(var i = 0; i < data.length; i++){
      var userID = parseInt(data[i].id);
      bot.API.waitlist.updatePosition(userID, parseInt(API.getWaitListPosition(userID)) + 1);
    }
  });
  /***********************************************************************************************/

  // Handle user leave event
  API.on("userLeave", function(data){
    if(bot.status == false) return;

    var userID = parseInt(data.id);
    var userInUsers = bot.API.waitlist.users.find(i => i.userID == userID);

    if(userInUsers){
      var userInDisconnected = bot.API.waitlist.disconnected.find(i => i.userID == userID);

      if(!userInDisconnected){
        bot.API.waitlist.disconnected.push({
          userID: userID,
          position: userInUsers.position
        });
      }

    }

  });

}());

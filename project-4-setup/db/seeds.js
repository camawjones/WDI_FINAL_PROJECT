const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');

mongoose.connect(dbURI, { useMongoClient: true });

const User = require('../models/user');
const Chat = require('../models/chat');

User.collection.drop();
Chat.collection.drop();

mongoose.connect(dbURI, { useMongoClient: true })
  .then(db => db.dropDatabase())
  .then(() => {
    return User.create([
      {
        firstName: 'Truman',
        lastName: 'Faldo',
        email: 'tru@tru.com',
        username: 'Trumanjags',
        lookalike: 'Mick Jagger',
        bio: 'Just here for fun. no time wasters please',
        sex: 'male',
        interestedIn: 'women',
        password: 'password',
        passwordConfirmation: 'password',
        image: 'http://www.talentbookingusa.com/look-a-likes/images/mick-jagger-rw-b.jpg'
      }, {
        firstName: 'Rilo',
        lastName: 'Wilbee',
        email: 'cher@me.com',
        username: 'Chersomeloving',
        lookalike: 'Cher',
        bio: 'I just want someone to get to know the real me',
        sex: 'female',
        interestedIn: 'men',
        password: 'password',
        passwordConfirmation: 'password',
        image: 'http://www.kansascity.com/entertainment/pmnpkh/picture437574/ALTERNATES/FREE_320/Cher%20Wheeler.jpg'
      }, {
        firstName: 'Tam',
        lastName: 'Salm',
        email: 'tam@me.com',
        username: 'tamalam',
        lookalike: 'Cilla Black',
        bio: 'Im partially sighted in my right eye',
        sex: 'female',
        interestedIn: 'men',
        password: 'password',
        passwordConfirmation: 'password',
        image: 'http://www.lookalikes.info/umbraco/ImageGen.ashx?image=/media/53649/cilla%20black%20-%20caroline%20bernstein%20update.jpg&width=250&constrain=true'
      }, {
        firstName: 'Ben',
        lastName: 'Reemoi',
        email: 'AgentBen@me.com',
        username: 'agents',
        lookalike: 'Agent Smith',
        bio: 'Fun fact: my dad went to school with Winston Churchill!',
        sex: 'male',
        interestedIn: 'women',
        password: 'password',
        passwordConfirmation: 'password',
        image: 'http://www.fakefaces.co.uk/images/lookalikes/fullsize/493-MickCollinswithLogo.JPG'
      }, {
        firstName: 'Polmy',
        lastName: 'Wedsla',
        email: 'deniro@me.com',
        username: 'polmydeniro',
        lookalike: 'Robert Deniro',
        bio: 'you talking to me. you talking to me? lolol Just kidding Im really not a confrontational type of guy. Love movies nights in and rollerblading',
        sex: 'male',
        interestedIn: 'women',
        password: 'password',
        passwordConfirmation: 'password',
        image: 'http://www.bubbygram.com/performers/denirogamn.jpg'
      }, {
        firstName: 'Haj',
        lastName: 'Jerby',
        email: 'haj@me.com',
        username: 'Hajjjjjjjj',
        lookalike: 'Marilyn Monroe',
        bio: 'Born for the stage. I can talk to Marilyns spirit in my sleep',
        sex: 'female',
        interestedIn: 'men',
        password: 'password',
        passwordConfirmation: 'password',
        image: 'http://i.dailymail.co.uk/i/pix/2015/10/01/15/2CF5E24600000578-0-image-a-9_1443710364326.jpg'
      },
      {
        firstName: 'Wilson',
        lastName: 'Crisp',
        email: 'wilsycrispo@me.com',
        username: 'Ivgotthexfactr',
        lookalike: 'Simon Cowell',
        bio: 'fun loving, care free kinda guy. Only dates women with the x factor ;) lol',
        sex: 'male',
        interestedIn: 'men',
        password: 'password',
        passwordConfirmation: 'password',
        image: 'http://21entertainment.co.uk/acts/images/Simon-Cowell-Lookalike-Andy-Monk-03.jpg'
      },
      {
        firstName: 'Cursal',
        lastName: 'Lont-Wertman',
        email: 'blessingoracursal@me.com',
        username: 'Babewatch22',
        lookalike: 'Pamela Anderson',
        bio: 'Fav hobbies - travelling, gin cocktails and bottomless brunch (not that I can remember many hahhahahahahahahahahahahahahahahaah) ;) ',
        sex: 'female',
        interestedIn: 'men',
        password: 'password',
        passwordConfirmation: 'password',
        image: 'http://digitalspyuk.cdnds.net/14/07/1600x2400/gallery_cantstopsurgery.jpg'
      },
      {
        firstName: 'Barry',
        lastName: 'Kileso',
        email: 'barry@gmail.com',
        username: '2Direction',
        lookalike: 'Harry Styles',
        bio: 'I\'m just bored of girls giving me attention for who I pretend to be. What I really want is to find someone who digs the barry not the harry.',
        sex: 'male',
        interestedIn: 'women',
        password: 'password',
        passwordConfirmation: 'password',
        image: 'http://digitalspyuk.cdnds.net/13/04/1600x2527/gallery_jacob_skelton.jpg'
      },
      {
        firstName: 'Grayson',
        lastName: 'Tellerson',
        email: 'fiddleronthewoof@gmail.com',
        username: 'yeswecan',
        lookalike: 'Barack Obama',
        bio: 'Before you swipe right you should know that I\'m a big fan of the TV programme Cheers and if you get in the way of my bi-weekly watching of Cheers we will never work. ',
        sex: 'male',
        interestedIn: 'women',
        password: 'password',
        passwordConfirmation: 'password',
        image: 'http://talentinnewjersey.com/wp-content/gallery/barack-obama-celebrity-lookalike-impersonator-new-jersey/photo-picture-image-Barack-Obama-celebrity-look-alike-lookalike-impersonator-31d.jpg'
      },{
        firstName: 'Fig',
        lastName: 'Limo',
        email: 'theguffman@gmail.com',
        username: '4leafclover',
        lookalike: 'Collin Farrel',
        bio: 'Not a big fan of small chat.',
        sex: 'male',
        interestedIn: 'women',
        password: 'password',
        passwordConfirmation: 'password',
        image: 'https://cdn.images.dailystar.co.uk/dynamic/1/281x351/132280_1.jpg'
      },
      {
        firstName: 'Red',
        lastName: 'Tuskerson',
        email: 'playboy4lyf@gmail.com',
        username: 'getreddy',
        lookalike: 'Donald Trump',
        bio: 'Despite my professional persona I\'m actualy a pretty nice guy, like carpentry and have 8 kids who have (all but 2) left home' ,
        sex: 'male',
        interestedIn: 'women',
        password: 'password',
        passwordConfirmation: 'password',
        image: 'http://lookalikes.co.uk/wp-content/uploads/2017/04/IMG_1739.jpg'
      },
      {
        firstName: 'Tracy',
        lastName: 'Yeck',
        email: 'liveforthemoment@gmail.com',
        username: 'yeckyeckyeck',
        lookalike: 'Britney Spears',
        bio: 'Dream to live and live to dream. Follow your heart. the past is the past, the future is the future and the moment is now',
        sex: 'female',
        interestedIn: 'men',
        password: 'password',
        passwordConfirmation: 'password',
        image: 'https://thechive.files.wordpress.com/2012/12/michaela-fake-britney-spears-12.jpg?quality=85&strip=info&w=500'
      },
      {
        firstName: 'Bilfery',
        lastName: 'Mansin',
        email: 'thesecondbestcloons@cloon.com',
        username: 'clunessss',
        lookalike: 'George Clooney',
        bio: 'Got big dreams and want to share them with the perfect lady',
        sex: 'male',
        interestedIn: 'women',
        password: 'password',
        passwordConfirmation: 'password',
        image: 'http://i.dailymail.co.uk/i/pix/2012/02/04/article-2096369-11941920000005DC-626_224x423.jpg'
      },
      {
        firstName: 'Gret',
        lastName: 'Loveless',
        email: 'anne@anne.com',
        username: 'princessbbz44',
        lookalike: 'Princess Anne',
        bio: 'Been a lookalike for 25 years now. My mother was a lookalike, and my great grandmother was a lookalike (my grandmother was not but we never spoke to her)',
        sex: 'female',
        interestedIn: 'men',
        password: 'password',
        passwordConfirmation: 'password',
        image: 'https://i.pinimg.com/originals/36/bb/cb/36bbcb36ab69e185c9b7416445ce2048.jpg'
      }]);
  })
  .then(users => {
    console.log(`${users.length} users created!`);

    return Chat.create([
      {
        users: [users[1], users[2]],
        messages: [{
          sender: users[1] ,
          content: 'Liking the pic babe'
        },{
          sender: users[2] ,
          content: 'Liking the pic too'
        }]
      },{
        users: [users[1], users[0]],
        messages: [{
          sender: users[0] ,
          content: 'When I first saw your pic I was like woo thats that famous person off the tele and then I realised wait no you\'ve got a different name hahaha I can be so silly sometimes wooohoooo'
        },{
          sender: users[1] ,
          content: 'lol I get that a lot. wanna go for a drink?'
        }]
      }
    ]);
  })
  .then(chats => {
    console.log(chats);
    console.log(`${chats.length} chats created!`);
  })
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());

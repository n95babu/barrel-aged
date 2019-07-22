const { User, Whiskey, Review } = require('./models');

const main = async () => {

  const userA = await User.create({

    user_name: 'Sterling Archer',

    email: 'archer@isis.gov',
    password_digest: 'lana',

  })


  const userB = await User.create({

    user_name: 'Grounds Keeper Willy',
    email: 'willy@springfieldelem.com',
    password_digest: 'aye',

  })

  const review1 = await Review.create({

    rating: 5,
    comment: 'I’m scared that if I stop drinking all at once, the cumulative hangover will literally kill me.',

  })

  const review2 = await Review.create({

    rating: 3,
    comment: "If it was up to me, I'd let you go, but the boys have a temper, and they've been drinking all day."
  })

  await review1.setUser(userA);
  await review2.setUser(userB);
};



main();
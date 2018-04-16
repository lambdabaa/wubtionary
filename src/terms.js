const terms = [
  {
    name: 'Awoebee',
    pos: 'noun',
    defn: 'The sweetest, most beautiful young man in the world. He has a heart of gold and loves his fambwee with all of his being.',
  },
  {
    name: 'beweeb',
    pos: 'verb',
    defn: 'To hold and trust a twuf with all of one\'s heart.',
  },
  {
    name: 'biss',
    pos: 'verb',
    defn: 'A whole-body sensation of cold and incompleteness that accompanies being separated from one\'s wub and fambwee.',
  },
  {
    name: 'byne',
    pos: 'adjective',
    defn: 'A wubby way to express a relationship of belonging.',
  },
  {
    name: 'fambwee',
    pos: 'noun',
    defn: 'A group of people who each wub each other with all of their hearts. They do everything in their power to support one another in achieving their dreams. They have oodles of fun together and are always smiling and making jokes together.',
  },
  {
    name: 'finderw',
    pos: 'noun',
    defn: 'Someone who is adept at locating important items such as car keys, wallets, and cell phones.',
  },
  {
    name: 'fink',
    pos: 'verb',
    defn: 'To consider and understand with one\'s mind but much wubbier.',
  },
  {
    name: 'firwst',
    pos: 'adjective',
    defn: 'An inaugural one. Sometimes it is named Awobee. Other times it is named Horriby. It needs great caring and nurturing to reach its full wubby potential.',
  },
  {
    name: 'pordor',
    pos: 'noun',
    defn: 'A mate for life who you pwobiss to wub in sickness and in health.',
  },
  {
    name: 'Gawiss',
    pos: 'noun',
    defn: 'He is a man with a big heart who cares deeply for his family and wants to make the world a better place. Sometimes he needs help finding his way, but pwobiss he\'s weawwy wubby... pwobiss.',
  },
  {
    name: 'gwocer',
    pos: 'adjective',
    defn: 'To be located nearer as opposed to farther away. Oftentimes it will be a very wubby near.',
  },
  {
    name: 'heww',
    pos: 'noun',
    defn: 'This exact place... and probably a bit gwocer than that even.',
  },
  {
    name: 'hewwo',
    pos: 'interjection',
    defn: 'A most wubby greeting reserved for one\'s wub and fambwee.',
  },
  {
    name: 'pwace',
    pos: 'noun',
    defn: 'A location, especially of a wub\'s body.',
  },
  {
    name: 'pwobiss',
    pos: 'noun',
    defn: 'When a wub says that they will turn something they say into a future twuf.',
  },
  {
    name: 'pwoob',
    pos: 'verb',
    defn: 'A demonstration from one wub to another of the twuf of a fink.',
  },
  {
    name: 'Schpewwo',
    pos: 'noun',
    defn: 'A dog who gives you kennel cough every night and vomits toward the sky. But he is actually a weawwy big wub in his heart.',
  },
  {
    name: 'sibby',
    pos: 'adjective',
    defn: 'Popularized in 2018 by a weawwy wittow weez, sibby means funny, bizarre, or hilariously inconceivable.',
  },
  {
    name: 'stwong',
    pos: 'adjective',
    defn: 'When something is weawwy tremendous in magnitude (probably it\'s wub).',
  },
  {
    name: 'Tuna',
    pos: 'noun',
    defn: 'She is a fish and also the wittowest fambwee member. She casts spells with her long fingers and has a very sibby nature.',
  },
  {
    name: 'twuf',
    pos: 'noun',
    defn: 'A wub\'s fink that is (sometimes asserted to be) weawwy, weawwy absowutewy be the case.',
  },
  {
    name: 'twy',
    pos: 'verb',
    defn: 'When someone (probably a wub) really puts their best effort into a pursuit (it\'s probably wubby).',
  },
  {
    name: 'waffabo',
    pos: 'adjective',
    defn: 'When something is just so sibby you can\'t look at it without bursting with giggling.',
  },
  {
    name: 'weawwy',
    pos: 'adjective',
    defn: 'Of or relating to a twuf.',
  },
  {
    name: 'weeb',
    pos: 'verb',
    defn: 'When a wub separates temporarily from another, often resulting in a stwong biss.',
  },
  {
    name: 'weez',
    pos: 'noun',
    defn: 'A member of a fambwee dedicated to wub, gwoceness, and sibby above all else.',
  },
  {
    name: 'wex',
    pos: 'verb',
    defn: 'A physical manifestation of a stwongest possible wub.',
  },
  {
    name: 'wiferd',
    pos: 'noun',
    defn: 'A female pordor.',
  },
  {
    name: 'wike',
    pos: 'verb',
    defn: 'Like wub but possibly slightly less wubby.',
  },
  {
    name: 'wion',
    pos: 'noun',
    defn: 'A big stwong animal who wubs might best avoid in the wild. But paradoxically, there has been pictographic evidence that a wion can also be a wub. More research is needed.',
  },
  {
    name: 'winerd',
    pos: 'noun',
    defn: 'When a wub drinks too much wine and becomes sibby.',
  },
  {
    name: 'wips',
    pos: 'noun',
    defn: 'A wubby pwace for doing wisses.',
  },
  {
    name: 'wiss',
    pos: 'verb',
    defn: 'A physical expression of weawwy stwong romantic wub.',
  },
  {
    name: 'wissord',
    pos: 'noun',
    defn: 'One who expresses themselves and shares their wub in wisses.',
  },
  {
    name: 'Wiso',
    pos: 'noun',
    defn: 'The smartest, most beautiful, sweetest, most caring woman in the whole wide world. And every day you feel like the luckiest person on earth that she would be your wub and make a fambwee with you.',
  },
  {
    name: 'wittow',
    pos: 'adjective',
    defn: 'Small but probably even a little smaller than that. It has both sibby and wubby connotations.',
  },
  {
    name: 'woob',
    pos: 'noun',
    defn: 'A wubby pwace on a wiferd.',
  },
  {
    name: 'woar',
    pos: 'noun',
    defn: 'The sound a wion makes.',
  },
  {
    name: 'wub',
    pos: 'verb',
    defn: 'To experience and express the best feeling in the whole entire world that makes your heart grow three sizes (sometimes too big!).',
  },
  {
    name: 'wubwess',
    pos: 'adjective',
    defn: 'The most pitiful state of being without wub.',
  },
  {
    name: 'wusbo',
    pos: 'noun',
    defn: 'A male pordor.',
  },
];

module.exports = terms;

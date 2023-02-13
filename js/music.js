let modalPlace = document.querySelector(`.modalPlace`);
let playlists = document.querySelector(`.plists`);
let musicBar = document.querySelector(`.musicBar`);

let plists = [
    {
        img: "wscream.jpg",
        name: "Wordless Scream",
        desc: "Dangerous wordless music with some negative vibes and philosophic thoughts",
        cont:   [
                    {
                        img: "1.jpg",
                        name: "Phantasma",
                        fname: "Phantasma.mp3",
                        author: "Seccesion Studios, Greg Dombrowski",
                        time: "5:30"
                    },
                    {
                        img: "2.jpg",
                        name: "Corals Undet the Sun",
                        fname: "Corals.mp3",
                        author: "Yehezkei Raz, Sivan Talmor",
                        time: "2:07"
                    },
                    {
                        img: "3.png",
                        name: "Circles",
                        fname: "Circles.mp3",
                        author: "2WEI, Ali Christenhusz",
                        time: "3:12"
                    },
                    {
                        img: "4.jpg",
                        name: "The Mad Queen",
                        fname: "Queen.mp3",
                        author: "Rok Nardin",
                        time: "3:48"
                    },
                    {
                        img: "5.jpg",
                        name: "Shadow Hunter",
                        fname: "Shadow.mp3",
                        author: "Power-Haus, Christian Reindl, Lucie Paradis",
                        time: "1:53"
                    },
                    {
                        img: "6.png",
                        name: "Run Baby Run",
                        fname: "Run.mp3",
                        author: "2WEI, Ali Christenhusz",
                        time: "2:56"
                    },
                    {
                        img: "7.jpg",
                        name: "Paint It Black",
                        fname: "Paint.mp3",
                        author: "Sebastian Böhm",
                        time: "3:22"
                    },
                    {
                        img: "8.jpg",
                        name: "Leaving England",
                        fname: "Leaving.mp3",
                        author: "John Murphy",
                        time: "2:32"
                    },
                    {
                        img: "9.jpg",
                        name: "The Mad Priest",
                        fname: "Priest.mp3",
                        author: "Rok Nardin",
                        time: "4:01"
                    },
                    {
                        img: "10.jpg",
                        name: "Now You See Me 2 Main Titles",
                        fname: "See.mp3",
                        author: "Brian Tyler",
                        time: "3:00"
                    },
                    {
                        img: "11.jpg",
                        name: "Moonlight Sonata Trailerized",
                        fname: "Moonlight.mp3",
                        author: "Wall of Noise, Людвиг ван Бетховен",
                        time: "2:40"
                    },
                    {
                        img: "12.jpg",
                        name: "Vanguard",
                        fname: "Vanguard.mp3",
                        author: "Jo Blankenburg",
                        time: "3:48"
                    },
                    {
                        img: "13.jpg",
                        name: "Luminous and Unstoppable",
                        fname: "Luminous.mp3",
                        author: "Aleksandar Dimitrijeviiić",
                        time: "2:14"
                    }
                ],
    },
    {
        img: "fhigh.jpg",
        name: "Feeling high",
        desc: "Relaxing dance music with some positive vibes and great feelings",
        cont:   [
                    {
                        img: "1.jpg",
                        name: "Phantasma",
                        author: "Seccesion Studios, Greg Dombrowski",
                        time: "5:30"
                    },
                    {
                        img: "2.jpg",
                        name: "Corals Undet the Sun",
                        author: "Yehezkei Raz, Sivan Talmor",
                        time: "2:07"
                    },
                    {
                        img: "3.png",
                        name: "Circles",
                        author: "2WEI, Ali Christenhusz",
                        time: "3:12"
                    },
                    {
                        img: "4.jpg",
                        name: "The Mad Queen",
                        author: "Rok Nardin",
                        time: "3:48"
                    },
                    {
                        img: "5.jpg",
                        name: "Shadow Hunter",
                        author: "Power-Haus, Christian Reindl, Lucie Paradis",
                        time: "1:53"
                    },
                    {
                        img: "6.png",
                        name: "Run Baby Run",
                        author: "2WEI, Ali Christenhusz",
                        time: "2:56"
                    },
                    {
                        img: "7.jpg",
                        name: "Paint It Black",
                        author: "Sebastian Böhm",
                        time: "3:22"
                    },
                    {
                        img: "8.jpg",
                        name: "Leaving England",
                        author: "John Murphy",
                        time: "2:32"
                    },
                    {
                        img: "9.jpg",
                        name: "The Mad Priest",
                        author: "Rok Nardin",
                        time: "4:01"
                    },
                    {
                        img: "10.jpg",
                        name: "Now You See Me 2 Main Titles",
                        author: "Brian Tyler",
                        time: "3:00"
                    },
                    {
                        img: "11.jpg",
                        name: "Moonlight Sonata Trailerized",
                        author: "Wall of Noise, Людвиг ван Бетховен",
                        time: "2:40"
                    },
                    {
                        img: "12.jpg",
                        name: "Vanguard",
                        author: "Jo Blankenburg",
                        time: "3:48"
                    },
                    {
                        img: "13.jpg",
                        name: "Luminous and Unstoppable",
                        author: "Aleksandar Dimitrijeviiić",
                        time: "2:14"
                    }
                ],
    },
    {
        img: "chill.jpg",
        name: "Chill",
        desc: "Relaxing semi-Lo-Fi music, you must try it",
        cont: [
            {
                img: "1.jpg",
                name: "Phantasma",
                fname: "Phantasma.mp3",
                author: "Seccesion Studios, Greg Dombrowski",
                time: "5:30"
            },
            {
                img: "2.jpg",
                name: "Corals Undet the Sun",
                fname: "Corals.mp3",
                author: "Yehezkei Raz, Sivan Talmor",
                time: "2:07"
            },
            {
                img: "3.png",
                name: "Circles",
                fname: "Circles.mp3",
                author: "2WEI, Ali Christenhusz",
                time: "3:12"
            },
            {
                img: "4.jpg",
                name: "The Mad Queen",
                fname: "Queen.mp3",
                author: "Rok Nardin",
                time: "3:48"
            },
            {
                img: "5.jpg",
                name: "Shadow Hunter",
                fname: "Shadow.mp3",
                author: "Power-Haus, Christian Reindl, Lucie Paradis",
                time: "1:53"
            },
            {
                img: "6.png",
                name: "Run Baby Run",
                fname: "Run.mp3",
                author: "2WEI, Ali Christenhusz",
                time: "2:56"
            },
            {
                img: "7.jpg",
                name: "Paint It Black",
                fname: "Paint.mp3",
                author: "Sebastian Böhm",
                time: "3:22"
            },
            {
                img: "8.jpg",
                name: "Leaving England",
                fname: "Leaving.mp3",
                author: "John Murphy",
                time: "2:32"
            },
            {
                img: "9.jpg",
                name: "The Mad Priest",
                fname: "Priest.mp3",
                author: "Rok Nardin",
                time: "4:01"
            },
            {
                img: "10.jpg",
                name: "Now You See Me 2 Main Titles",
                fname: "See.mp3",
                author: "Brian Tyler",
                time: "3:00"
            },
            {
                img: "11.jpg",
                name: "Moonlight Sonata Trailerized",
                fname: "Moonlight.mp3",
                author: "Wall of Noise, Людвиг ван Бетховен",
                time: "2:40"
            },
            {
                img: "12.jpg",
                name: "Vanguard",
                fname: "Vanguard.mp3",
                author: "Jo Blankenburg",
                time: "3:48"
            },
            {
                img: "13.jpg",
                name: "Luminous and Unstoppable",
                fname: "Luminous.mp3",
                author: "Aleksandar Dimitrijeviiić",
                time: "2:14"
            }
        ],
    },
    {
        img: "dance.jpg",
        name: "Dance Music",
        desc: "You can`t take your eyes off, your soul is mine, just dance, you - dead romantic",
        cont: [
            {
                img: "1.jpg",
                name: "Phantasma",
                fname: "Phantasma.mp3",
                author: "Seccesion Studios, Greg Dombrowski",
                time: "5:30"
            },
            {
                img: "2.jpg",
                name: "Corals Undet the Sun",
                fname: "Corals.mp3",
                author: "Yehezkei Raz, Sivan Talmor",
                time: "2:07"
            },
            {
                img: "3.png",
                name: "Circles",
                fname: "Circles.mp3",
                author: "2WEI, Ali Christenhusz",
                time: "3:12"
            },
            {
                img: "4.jpg",
                name: "The Mad Queen",
                fname: "Queen.mp3",
                author: "Rok Nardin",
                time: "3:48"
            },
            {
                img: "5.jpg",
                name: "Shadow Hunter",
                fname: "Shadow.mp3",
                author: "Power-Haus, Christian Reindl, Lucie Paradis",
                time: "1:53"
            },
            {
                img: "6.png",
                name: "Run Baby Run",
                fname: "Run.mp3",
                author: "2WEI, Ali Christenhusz",
                time: "2:56"
            },
            {
                img: "7.jpg",
                name: "Paint It Black",
                fname: "Paint.mp3",
                author: "Sebastian Böhm",
                time: "3:22"
            },
            {
                img: "8.jpg",
                name: "Leaving England",
                fname: "Leaving.mp3",
                author: "John Murphy",
                time: "2:32"
            },
            {
                img: "9.jpg",
                name: "The Mad Priest",
                fname: "Priest.mp3",
                author: "Rok Nardin",
                time: "4:01"
            },
            {
                img: "10.jpg",
                name: "Now You See Me 2 Main Titles",
                fname: "See.mp3",
                author: "Brian Tyler",
                time: "3:00"
            },
            {
                img: "11.jpg",
                name: "Moonlight Sonata Trailerized",
                fname: "Moonlight.mp3",
                author: "Wall of Noise, Людвиг ван Бетховен",
                time: "2:40"
            },
            {
                img: "12.jpg",
                name: "Vanguard",
                fname: "Vanguard.mp3",
                author: "Jo Blankenburg",
                time: "3:48"
            },
            {
                img: "13.jpg",
                name: "Luminous and Unstoppable",
                fname: "Luminous.mp3",
                author: "Aleksandar Dimitrijeviiić",
                time: "2:14"
            }
        ],
    },
    {
        img: "autumn.jpg",
        name: "Autumn",
        desc: "gggggggggggggggggggg",
        cont: [
            {
                img: "1.jpg",
                name: "Phantasma",
                fname: "Phantasma.mp3",
                author: "Seccesion Studios, Greg Dombrowski",
                time: "5:30"
            },
            {
                img: "2.jpg",
                name: "Corals Undet the Sun",
                fname: "Corals.mp3",
                author: "Yehezkei Raz, Sivan Talmor",
                time: "2:07"
            },
            {
                img: "3.png",
                name: "Circles",
                fname: "Circles.mp3",
                author: "2WEI, Ali Christenhusz",
                time: "3:12"
            },
            {
                img: "4.jpg",
                name: "The Mad Queen",
                fname: "Queen.mp3",
                author: "Rok Nardin",
                time: "3:48"
            },
            {
                img: "5.jpg",
                name: "Shadow Hunter",
                fname: "Shadow.mp3",
                author: "Power-Haus, Christian Reindl, Lucie Paradis",
                time: "1:53"
            },
            {
                img: "6.png",
                name: "Run Baby Run",
                fname: "Run.mp3",
                author: "2WEI, Ali Christenhusz",
                time: "2:56"
            },
            {
                img: "7.jpg",
                name: "Paint It Black",
                fname: "Paint.mp3",
                author: "Sebastian Böhm",
                time: "3:22"
            },
            {
                img: "8.jpg",
                name: "Leaving England",
                fname: "Leaving.mp3",
                author: "John Murphy",
                time: "2:32"
            },
            {
                img: "9.jpg",
                name: "The Mad Priest",
                fname: "Priest.mp3",
                author: "Rok Nardin",
                time: "4:01"
            },
            {
                img: "10.jpg",
                name: "Now You See Me 2 Main Titles",
                fname: "See.mp3",
                author: "Brian Tyler",
                time: "3:00"
            },
            {
                img: "11.jpg",
                name: "Moonlight Sonata Trailerized",
                fname: "Moonlight.mp3",
                author: "Wall of Noise, Людвиг ван Бетховен",
                time: "2:40"
            },
            {
                img: "12.jpg",
                name: "Vanguard",
                fname: "Vanguard.mp3",
                author: "Jo Blankenburg",
                time: "3:48"
            },
            {
                img: "13.jpg",
                name: "Luminous and Unstoppable",
                fname: "Luminous.mp3",
                author: "Aleksandar Dimitrijeviiić",
                time: "2:14"
            }
        ],
    },
    {
        img: "thinking.jpg",
        name: "Thinking",
        desc: "hhhhhhhhhhhhhhhhhhhhhhhhhhh",
        cont: [
            {
                img: "1.jpg",
                name: "Phantasma",
                fname: "Phantasma.mp3",
                author: "Seccesion Studios, Greg Dombrowski",
                time: "5:30"
            },
            {
                img: "2.jpg",
                name: "Corals Undet the Sun",
                fname: "Corals.mp3",
                author: "Yehezkei Raz, Sivan Talmor",
                time: "2:07"
            },
            {
                img: "3.png",
                name: "Circles",
                fname: "Circles.mp3",
                author: "2WEI, Ali Christenhusz",
                time: "3:12"
            },
            {
                img: "4.jpg",
                name: "The Mad Queen",
                fname: "Queen.mp3",
                author: "Rok Nardin",
                time: "3:48"
            },
            {
                img: "5.jpg",
                name: "Shadow Hunter",
                fname: "Shadow.mp3",
                author: "Power-Haus, Christian Reindl, Lucie Paradis",
                time: "1:53"
            },
            {
                img: "6.png",
                name: "Run Baby Run",
                fname: "Run.mp3",
                author: "2WEI, Ali Christenhusz",
                time: "2:56"
            },
            {
                img: "7.jpg",
                name: "Paint It Black",
                fname: "Paint.mp3",
                author: "Sebastian Böhm",
                time: "3:22"
            },
            {
                img: "8.jpg",
                name: "Leaving England",
                fname: "Leaving.mp3",
                author: "John Murphy",
                time: "2:32"
            },
            {
                img: "9.jpg",
                name: "The Mad Priest",
                fname: "Priest.mp3",
                author: "Rok Nardin",
                time: "4:01"
            },
            {
                img: "10.jpg",
                name: "Now You See Me 2 Main Titles",
                fname: "See.mp3",
                author: "Brian Tyler",
                time: "3:00"
            },
            {
                img: "11.jpg",
                name: "Moonlight Sonata Trailerized",
                fname: "Moonlight.mp3",
                author: "Wall of Noise, Людвиг ван Бетховен",
                time: "2:40"
            },
            {
                img: "12.jpg",
                name: "Vanguard",
                fname: "Vanguard.mp3",
                author: "Jo Blankenburg",
                time: "3:48"
            },
            {
                img: "13.jpg",
                name: "Luminous and Unstoppable",
                fname: "Luminous.mp3",
                author: "Aleksandar Dimitrijeviiić",
                time: "2:14"
            }
        ],
    },
    {
        img: "kill.jpg",
        name: "Killing Strangers",
        desc: "jjjjjjjjjjjjjjjjjjjjjjjjjjj",
        cont: [
            {
                img: "1.jpg",
                name: "Phantasma",
                fname: "Phantasma.mp3",
                author: "Seccesion Studios, Greg Dombrowski",
                time: "5:30"
            },
            {
                img: "2.jpg",
                name: "Corals Undet the Sun",
                fname: "Corals.mp3",
                author: "Yehezkei Raz, Sivan Talmor",
                time: "2:07"
            },
            {
                img: "3.png",
                name: "Circles",
                fname: "Circles.mp3",
                author: "2WEI, Ali Christenhusz",
                time: "3:12"
            },
            {
                img: "4.jpg",
                name: "The Mad Queen",
                fname: "Queen.mp3",
                author: "Rok Nardin",
                time: "3:48"
            },
            {
                img: "5.jpg",
                name: "Shadow Hunter",
                fname: "Shadow.mp3",
                author: "Power-Haus, Christian Reindl, Lucie Paradis",
                time: "1:53"
            },
            {
                img: "6.png",
                name: "Run Baby Run",
                fname: "Run.mp3",
                author: "2WEI, Ali Christenhusz",
                time: "2:56"
            },
            {
                img: "7.jpg",
                name: "Paint It Black",
                fname: "Paint.mp3",
                author: "Sebastian Böhm",
                time: "3:22"
            },
            {
                img: "8.jpg",
                name: "Leaving England",
                fname: "Leaving.mp3",
                author: "John Murphy",
                time: "2:32"
            },
            {
                img: "9.jpg",
                name: "The Mad Priest",
                fname: "Priest.mp3",
                author: "Rok Nardin",
                time: "4:01"
            },
            {
                img: "10.jpg",
                name: "Now You See Me 2 Main Titles",
                fname: "See.mp3",
                author: "Brian Tyler",
                time: "3:00"
            },
            {
                img: "11.jpg",
                name: "Moonlight Sonata Trailerized",
                fname: "Moonlight.mp3",
                author: "Wall of Noise, Людвиг ван Бетховен",
                time: "2:40"
            },
            {
                img: "12.jpg",
                name: "Vanguard",
                fname: "Vanguard.mp3",
                author: "Jo Blankenburg",
                time: "3:48"
            },
            {
                img: "13.jpg",
                name: "Luminous and Unstoppable",
                fname: "Luminous.mp3",
                author: "Aleksandar Dimitrijeviiić",
                time: "2:14"
            }
        ],
    },
    {
        img: "relax.jpg",
        name: "Relax",
        desc: "kkkkkkkkkkkkkkkkkkkkk",
        cont: [
                {
                    img: "1.jpg",
                    name: "Phantasma",
                    fname: "Phantasma.mp3",
                    author: "Seccesion Studios, Greg Dombrowski",
                    time: "5:30"
                },
                {
                    img: "2.jpg",
                    name: "Corals Undet the Sun",
                    fname: "Corals.mp3",
                    author: "Yehezkei Raz, Sivan Talmor",
                    time: "2:07"
                },
                {
                    img: "3.png",
                    name: "Circles",
                    fname: "Circles.mp3",
                    author: "2WEI, Ali Christenhusz",
                    time: "3:12"
                },
                {
                    img: "4.jpg",
                    name: "The Mad Queen",
                    fname: "Queen.mp3",
                    author: "Rok Nardin",
                    time: "3:48"
                },
                {
                    img: "5.jpg",
                    name: "Shadow Hunter",
                    fname: "Shadow.mp3",
                    author: "Power-Haus, Christian Reindl, Lucie Paradis",
                    time: "1:53"
                },
                {
                    img: "6.png",
                    name: "Run Baby Run",
                    fname: "Run.mp3",
                    author: "2WEI, Ali Christenhusz",
                    time: "2:56"
                },
                {
                    img: "7.jpg",
                    name: "Paint It Black",
                    fname: "Paint.mp3",
                    author: "Sebastian Böhm",
                    time: "3:22"
                },
                {
                    img: "8.jpg",
                    name: "Leaving England",
                    fname: "Leaving.mp3",
                    author: "John Murphy",
                    time: "2:32"
                },
                {
                    img: "9.jpg",
                    name: "The Mad Priest",
                    fname: "Priest.mp3",
                    author: "Rok Nardin",
                    time: "4:01"
                },
                {
                    img: "10.jpg",
                    name: "Now You See Me 2 Main Titles",
                    fname: "See.mp3",
                    author: "Brian Tyler",
                    time: "3:00"
                },
                {
                    img: "11.jpg",
                    name: "Moonlight Sonata Trailerized",
                    fname: "Moonlight.mp3",
                    author: "Wall of Noise, Людвиг ван Бетховен",
                    time: "2:40"
                },
                {
                    img: "12.jpg",
                    name: "Vanguard",
                    fname: "Vanguard.mp3",
                    author: "Jo Blankenburg",
                    time: "3:48"
                },
                {
                    img: "13.jpg",
                    name: "Luminous and Unstoppable",
                    fname: "Luminous.mp3",
                    author: "Aleksandar Dimitrijeviiić",
                    time: "2:14"
                }
            ],
    },
    {
        img: "headbang.jpg",
        name: "Headbang",
        desc: "lllllllllllllllllllll",
        cont: [
            {
                img: "1.jpg",
                name: "Phantasma",
                fname: "Phantasma.mp3",
                author: "Seccesion Studios, Greg Dombrowski",
                time: "5:30"
            },
            {
                img: "2.jpg",
                name: "Corals Undet the Sun",
                fname: "Corals.mp3",
                author: "Yehezkei Raz, Sivan Talmor",
                time: "2:07"
            },
            {
                img: "3.png",
                name: "Circles",
                fname: "Circles.mp3",
                author: "2WEI, Ali Christenhusz",
                time: "3:12"
            },
            {
                img: "4.jpg",
                name: "The Mad Queen",
                fname: "Queen.mp3",
                author: "Rok Nardin",
                time: "3:48"
            },
            {
                img: "5.jpg",
                name: "Shadow Hunter",
                fname: "Shadow.mp3",
                author: "Power-Haus, Christian Reindl, Lucie Paradis",
                time: "1:53"
            },
            {
                img: "6.png",
                name: "Run Baby Run",
                fname: "Run.mp3",
                author: "2WEI, Ali Christenhusz",
                time: "2:56"
            },
            {
                img: "7.jpg",
                name: "Paint It Black",
                fname: "Paint.mp3",
                author: "Sebastian Böhm",
                time: "3:22"
            },
            {
                img: "8.jpg",
                name: "Leaving England",
                fname: "Leaving.mp3",
                author: "John Murphy",
                time: "2:32"
            },
            {
                img: "9.jpg",
                name: "The Mad Priest",
                fname: "Priest.mp3",
                author: "Rok Nardin",
                time: "4:01"
            },
            {
                img: "10.jpg",
                name: "Now You See Me 2 Main Titles",
                fname: "See.mp3",
                author: "Brian Tyler",
                time: "3:00"
            },
            {
                img: "11.jpg",
                name: "Moonlight Sonata Trailerized",
                fname: "Moonlight.mp3",
                author: "Wall of Noise, Людвиг ван Бетховен",
                time: "2:40"
            },
            {
                img: "12.jpg",
                name: "Vanguard",
                fname: "Vanguard.mp3",
                author: "Jo Blankenburg",
                time: "3:48"
            },
            {
                img: "13.jpg",
                name: "Luminous and Unstoppable",
                fname: "Luminous.mp3",
                author: "Aleksandar Dimitrijeviiić",
                time: "2:14"
            }
        ],
    },
    {
        img: "lyric.jpg",
        name: "Lyrical",
        desc: "mmmmmmmmmmmmmmmmmmmmmmmmmmmmm",
        cont: [
            {
                img: "1.jpg",
                name: "Phantasma",
                fname: "Phantasma.mp3",
                author: "Seccesion Studios, Greg Dombrowski",
                time: "5:30"
            },
            {
                img: "2.jpg",
                name: "Corals Undet the Sun",
                fname: "Corals.mp3",
                author: "Yehezkei Raz, Sivan Talmor",
                time: "2:07"
            },
            {
                img: "3.png",
                name: "Circles",
                fname: "Circles.mp3",
                author: "2WEI, Ali Christenhusz",
                time: "3:12"
            },
            {
                img: "4.jpg",
                name: "The Mad Queen",
                fname: "Queen.mp3",
                author: "Rok Nardin",
                time: "3:48"
            },
            {
                img: "5.jpg",
                name: "Shadow Hunter",
                fname: "Shadow.mp3",
                author: "Power-Haus, Christian Reindl, Lucie Paradis",
                time: "1:53"
            },
            {
                img: "6.png",
                name: "Run Baby Run",
                fname: "Run.mp3",
                author: "2WEI, Ali Christenhusz",
                time: "2:56"
            },
            {
                img: "7.jpg",
                name: "Paint It Black",
                fname: "Paint.mp3",
                author: "Sebastian Böhm",
                time: "3:22"
            },
            {
                img: "8.jpg",
                name: "Leaving England",
                fname: "Leaving.mp3",
                author: "John Murphy",
                time: "2:32"
            },
            {
                img: "9.jpg",
                name: "The Mad Priest",
                fname: "Priest.mp3",
                author: "Rok Nardin",
                time: "4:01"
            },
            {
                img: "10.jpg",
                name: "Now You See Me 2 Main Titles",
                fname: "See.mp3",
                author: "Brian Tyler",
                time: "3:00"
            },
            {
                img: "11.jpg",
                name: "Moonlight Sonata Trailerized",
                fname: "Moonlight.mp3",
                author: "Wall of Noise, Людвиг ван Бетховен",
                time: "2:40"
            },
            {
                img: "12.jpg",
                name: "Vanguard",
                fname: "Vanguard.mp3",
                author: "Jo Blankenburg",
                time: "3:48"
            },
            {
                img: "13.jpg",
                name: "Luminous and Unstoppable",
                fname: "Luminous.mp3",
                author: "Aleksandar Dimitrijeviiić",
                time: "2:14"
            }
        ],
    },
    {
        img: "indie.jpg",
        name: "Indie",
        desc: "ccccccccccc",
        cont: [
            {
                img: "1.jpg",
                name: "Phantasma",
                fname: "Phantasma.mp3",
                author: "Seccesion Studios, Greg Dombrowski",
                time: "5:30"
            },
            {
                img: "2.jpg",
                name: "Corals Undet the Sun",
                fname: "Corals.mp3",
                author: "Yehezkei Raz, Sivan Talmor",
                time: "2:07"
            },
            {
                img: "3.png",
                name: "Circles",
                fname: "Circles.mp3",
                author: "2WEI, Ali Christenhusz",
                time: "3:12"
            },
            {
                img: "4.jpg",
                name: "The Mad Queen",
                fname: "Queen.mp3",
                author: "Rok Nardin",
                time: "3:48"
            },
            {
                img: "5.jpg",
                name: "Shadow Hunter",
                fname: "Shadow.mp3",
                author: "Power-Haus, Christian Reindl, Lucie Paradis",
                time: "1:53"
            },
            {
                img: "6.png",
                name: "Run Baby Run",
                fname: "Run.mp3",
                author: "2WEI, Ali Christenhusz",
                time: "2:56"
            },
            {
                img: "7.jpg",
                name: "Paint It Black",
                fname: "Paint.mp3",
                author: "Sebastian Böhm",
                time: "3:22"
            },
            {
                img: "8.jpg",
                name: "Leaving England",
                fname: "Leaving.mp3",
                author: "John Murphy",
                time: "2:32"
            },
            {
                img: "9.jpg",
                name: "The Mad Priest",
                fname: "Priest.mp3",
                author: "Rok Nardin",
                time: "4:01"
            },
            {
                img: "10.jpg",
                name: "Now You See Me 2 Main Titles",
                fname: "See.mp3",
                author: "Brian Tyler",
                time: "3:00"
            },
            {
                img: "11.jpg",
                name: "Moonlight Sonata Trailerized",
                fname: "Moonlight.mp3",
                author: "Wall of Noise, Людвиг ван Бетховен",
                time: "2:40"
            },
            {
                img: "12.jpg",
                name: "Vanguard",
                fname: "Vanguard.mp3",
                author: "Jo Blankenburg",
                time: "3:48"
            },
            {
                img: "13.jpg",
                name: "Luminous and Unstoppable",
                fname: "Luminous.mp3",
                author: "Aleksandar Dimitrijeviiić",
                time: "2:14"
            }
        ],
    },
    {
        img: "beating.jpg",
        name: "Beating",
        desc: "ffffffffffffffffffffffffff",
        cont: [
            {
                img: "1.jpg",
                name: "Phantasma",
                fname: "Phantasma.mp3",
                author: "Seccesion Studios, Greg Dombrowski",
                time: "5:30"
            },
            {
                img: "2.jpg",
                name: "Corals Undet the Sun",
                fname: "Corals.mp3",
                author: "Yehezkei Raz, Sivan Talmor",
                time: "2:07"
            },
            {
                img: "3.png",
                name: "Circles",
                fname: "Circles.mp3",
                author: "2WEI, Ali Christenhusz",
                time: "3:12"
            },
            {
                img: "4.jpg",
                name: "The Mad Queen",
                fname: "Queen.mp3",
                author: "Rok Nardin",
                time: "3:48"
            },
            {
                img: "5.jpg",
                name: "Shadow Hunter",
                fname: "Shadow.mp3",
                author: "Power-Haus, Christian Reindl, Lucie Paradis",
                time: "1:53"
            },
            {
                img: "6.png",
                name: "Run Baby Run",
                fname: "Run.mp3",
                author: "2WEI, Ali Christenhusz",
                time: "2:56"
            },
            {
                img: "7.jpg",
                name: "Paint It Black",
                fname: "Paint.mp3",
                author: "Sebastian Böhm",
                time: "3:22"
            },
            {
                img: "8.jpg",
                name: "Leaving England",
                fname: "Leaving.mp3",
                author: "John Murphy",
                time: "2:32"
            },
            {
                img: "9.jpg",
                name: "The Mad Priest",
                fname: "Priest.mp3",
                author: "Rok Nardin",
                time: "4:01"
            },
            {
                img: "10.jpg",
                name: "Now You See Me 2 Main Titles",
                fname: "See.mp3",
                author: "Brian Tyler",
                time: "3:00"
            },
            {
                img: "11.jpg",
                name: "Moonlight Sonata Trailerized",
                fname: "Moonlight.mp3",
                author: "Wall of Noise, Людвиг ван Бетховен",
                time: "2:40"
            },
            {
                img: "12.jpg",
                name: "Vanguard",
                fname: "Vanguard.mp3",
                author: "Jo Blankenburg",
                time: "3:48"
            },
            {
                img: "13.jpg",
                name: "Luminous and Unstoppable",
                fname: "Luminous.mp3",
                author: "Aleksandar Dimitrijeviiić",
                time: "2:14"
            }
        ],
    },
];


for (let i=0; i<plists.length; i++) {
    // плейлист на главной
    let img = plists[i].img;
    let pname = plists[i].name;
    let desc = plists[i].desc;
    
    let plist = `
    <div class="plist" data-id="${i}">
    <img src="assets/${img}" alt="">
    <p class="pixel">${pname}</p>
    </div>
    `;
    
    playlists.innerHTML += plist;
    
    function createModal(i) {
        var tracks = plists[i].cont;    
        var TRACKS = [];  
        let img = plists[i].img;
        let pname = plists[i].name;
        let desc = plists[i].desc;
        
        for (let j=0;j<tracks.length;j++){
            var track = tracks[j];
            
            let trackimg = track.img;
            let trackname = track.name;
            let fname = track.fname;
            let trackauth = track.author;
            let tracktime = track.time;

            let Track = `
                <li class="track" data-track-id="${j}">
                    <div class="df">
                        <img class="trackImg" src="music/imgs/${trackimg}" alt="">
                        <span class="playhover playhover--play"></span>
                        <div class="trackNaming bcu">
                            <p class="bcu pixel pink">${trackname}</p>
                            <p class="bcu pixel smaller lighter">${trackauth}</p>
                        </div>
                    </div>
                    <audio class="audioTrack" src="music/music/${fname}"></audio>
                    <p class="trackLength bcu pixel mr-10">${tracktime}</p>
                </li>
            `;

            
            TRACKS += Track;    
        }

    
        
        let modal = `
            <div class="mplace">
                <div class="modal" id="modal">
                    <div class="modalCont">
                        <div Class="modalTop">
                            <img src="assets/${img}" alt="">
                            <div class="modalTopP">
                                <p class="pixel pink">${pname}</p>
                                <p class="pixel">${desc}</p>
                            </div>
                        </div>
                        <div class="plistsPlace">
                            <ul class="tracks">
                                <!--треки--!>
                                ${TRACKS}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        return modal;
    }


    function modalOff(evt) {
        if (!evt.target.closest(`#modal`)) {
            modalPlace.innerHTML = ``;
            document.removeEventListener(`click`, modalOff);
        }
    };
    
    
    document.addEventListener(`click`, function(evt) {
        if (evt.target.closest(`.plist`)) {
            let i = evt.target.closest(`.plist`).dataset.id;
            modalPlace.innerHTML = createModal(i);
            var playhover = document.querySelectorAll(`.playhover`);
            hoverSearch(playhover);
        } 
        document.addEventListener(`click`, modalOff);
    });
}

function hoverSearch(playhover) {
    for(let k=0;k<playhover.length;k++) {
        playhover[k].addEventListener(`click`, function(evt) {
            onPlay(evt, playhover[k]);
        });
    }
}

function showBar(playhover) {
    let target = playhover.closest('.track');
    musicBar.classList.remove(`d-none`);
    musicBar.innerHTML = '';
    musicBar.append(target);
}

function onPlay(evt, playhover) {
    if (evt.target.classList.contains(`playhover--play`)) {
        evt.target.closest(`.track`).querySelector(`.audioTrack`).play();
        showBar(playhover);
        playhover.classList.remove(`playhover--play`);
        playhover.classList.add(`playhover--pause`);
    } else if (evt.target.classList.contains(`playhover--pause`)) {
        evt.target.closest(`.track`).querySelector(`.audioTrack`).pause();
        playhover.classList.remove(`playhover--pause`);
        playhover.classList.add(`playhover--play`);
    }
}
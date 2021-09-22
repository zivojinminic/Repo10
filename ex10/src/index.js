function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            artist: "Pablo Picasso",
            title: "The Acrobat",
            release_year: 1930,
            formats: {
                1: "FS",
                2: "7Y",
                3: "MT"
            },
        }
    };
    return myMusic;
}
console.log(myFunction()[2]);
module.exports = myFunction;
let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
console.log('Word count: '+ storyWords.length);

let overusedWords = ['really', 'very', 'basically'];
let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let betterWords = storyWords.filter(word => {
    if (!unnecessaryWords.includes(word)) {
        return word;
    }
});
//console.log(betterWords);

//counting the number of overused words
console.log("Number of time each overused word appears: ");
overusedWords.forEach(word => {
    let countOverusedWords = 0;
    betterWords.forEach( bw => {
        if (bw === word) {
            countOverusedWords += 1;
        }
    })
    console.log(`${word} : ${countOverusedWords}`);
    });
    
//counting number of sentences

let numberOfsentences = 0;
storyWords.forEach(word => {
    word.split('').forEach(letter => {
        if(letter === "." || letter === "!"){
            numberOfsentences += 1;
        }})
});
console.log("Sentence Count: "+ numberOfsentences+"\n\n");

console.log(betterWords.join(" "));
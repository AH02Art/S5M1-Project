function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
const widgets = document.querySelectorAll("section div");
widgets.forEach(function(widget, i) {
  widget.classList.add("widget");
  widget.setAttribute("tabindex", i + 1);
});

  // 👉 TASK 2 - Build a "Quote of the Day" widget
// console.log(quotes);                                     // array with testing data
const index = Math.floor(Math.random() * quotes.length);    // finding the index of quotes
const random = quotes[index];                               // getting a randomly chosen quote

const quoteDiv = document.createElement("div");             // created the quote's div
const quoteText = random.quote;                             // assigning the randomly chosen quote data to a const
quoteDiv.textContent = quoteText;                           // assigning the div's text and the randomly generated quote
const widget1 = document.querySelector('.quoteoftheday');   // grabbing the quoteoftheday div
widget1.appendChild(quoteDiv);                              // appending the text to be a child of quoteoftheday

const authorDate = document.createElement('div');                      // creating a div for author & date
const {author, date} = random;                                         // getting the author and date from the randomly generated quote
authorDate.textContent = `${author} in ${date || "an unknown date"}`;  // building the div, ready to be appended
// checking to see if the date is null, date = "an unknown date"
widget1.appendChild(authorDate);                                       // appending the div to quoteoftheday

  // 👉 TASK 3 - Build a "Corporate Speak" widget
const verbsIndex1 = Math.floor(Math.random() * verbs.length);
const nounsIndex1 = Math.floor(Math.random() * nouns.length);
const adverbsIndex1 = Math.floor(Math.random() * adverbs.length);
const verbsIndex2 = Math.floor(Math.random() * verbs.length);
const nounsIndex2 = Math.floor(Math.random() * nouns.length);
const adverbsIndex2 = Math.floor(Math.random() * adverbs.length);

const verbsRandom1 = verbs[verbsIndex1];
const nounsRandom1 = nouns[nounsIndex1];
const adverbsRandom1 = adverbs[adverbsIndex1];
const verbsRandom2 = verbs[verbsIndex2];
const nounsRandom2 = nouns[nounsIndex2];
const adverbsRandom2 = adverbs[adverbsIndex2];

const widget2 = document.querySelector('.corporatespeak');
const speak = document.createElement('p');
speak.textContent = ` We need to ${verbsRandom1} our ${nounsRandom1} ${adverbsRandom1} in order to ${verbsRandom2} our ${nounsRandom2} ${adverbsRandom2}.`
widget2.appendChild(speak);

  // 👉 TASK 4 - Build a "Countdown" widget
const widget3 = document.querySelector('.countdown');
let counter = 5;
const countText = document.createElement('p');
countText.textContent = `T-minus ${counter}...`;
widget3.appendChild(countText);

const timer = setInterval(function() {
  if (counter === 1) {
    countText.textContent = "Liftoff! 🚀";
    clearInterval(timer);
  } else {
    countText.textContent = `T-minus ${--counter}...`;
  }
}, 1000);

  // 👉 TASK 5 - Build a "Friends" widget
const person = people[Math.floor(Math.random() * people.length)];
const friendsPara = document.createElement('p');
document.querySelector('.friends').appendChild(friendsPara);
const year = person.dateOfBirth.split('-')[0];
let sentence = `${person.fname} ${person.lname} was born in ${year} and `;

if (!person.friends.length) {
  sentence += 'has no friends.';
} else {
  sentence += 'is friends with ';
  for (let i = 0; i < person.friends.length; i++) {
    const friendID = person.friends[i];
    const friend = people.find(p => p.id === friendID);
    const fullName = `${friend.fname} ${friend.lname}`
    let isLastIndex = i === person.friends.length - 1;
    let isNextToLastIndex = i === person.friends.length - 2;
    if (isLastIndex) {
      sentence += `${fullName}`;
    } else if (isNextToLastIndex) {
      sentence += `${fullName} and `;
    } else {
      sentence += `${fullName}, `;
    }
  }
}

friendsPara.textContent = sentence;

  // 👉 TASK 6 - Make it so user can tab through the widgets

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()

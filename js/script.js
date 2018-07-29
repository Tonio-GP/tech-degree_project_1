// FSJS - Random Quote Generator


// Create the array of quote objects and name it quotes
var quotes = [
  {quote : "Never doubt that a small group of thoughtful, committed, citizens can change the world. Indeed, it is the only thing that ever has.",
  source : "Margaret Mead" ,
  tags : "Inspirational"
  },
  {quote : "Things change. And friends leave. Life doesn't stop for anybody.",
  source : " Stephen Chbosky" ,
  tags : "Inspirational"
  },
  {quote : "Everyone thinks of changing the world, but no one thinks of changing himself.",
  source : "Leo Tolstoy" ,
  tags : "Inspirational"
  },
  {quote : "Grief does not change you, Hazel. It reveals you.",
  source : "John Green" ,
  tags : "Inspirational"
  },
  {quote : "Education is the most powerful weapon which you can use to change the world.",
  source : "Nelson Mandela" ,
  tags : "Inspirational"
  },
  {quote : "The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.",
  source : "Albert Einstein" ,
  tags : "Inspirational"
  },
  {quote : "Nothing is so painful to the human mind as a great and sudden change.",
  source : "Mary Wollstonecraft Shelley" ,
  tags : "Inspirational"
  },
  {quote : "Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.",
  source : "Remi" ,
  tags : "Inspirational"
  }
];

var randomQuote;
var randomSource;
var randomTags;
var r;
var g;
var b;

// Create the getRandomQuuote function and name it getRandomQuote
function getRandomQuuote (){
  var randomNumber = Math.floor(Math.random() * quotes.length);
  var arrayElement = quotes[randomNumber];
  randomQuote = arrayElement.quote;
  randomSource = arrayElement.source;
  randomTags = arrayElement.tags;
  r = Math.floor(Math.random() * 255);
  g = Math.floor(Math.random() * 255);
  b = Math.floor(Math.random() * 255);
}

// Create the printQuote funtion and name it printQuote
function printQuote(){
  getRandomQuuote();
  document.getElementById("quote-box").innerHTML = "<p class='quote'>" + randomQuote + "</p>";
  document.getElementById("quote-box").innerHTML += "<p class='source'>" + randomSource + ", " + randomTags + "</p>";

  //document.getElementById("body1").style.backgroundColor = rgb(r,g,b);
  document.getElementById("body1").style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';

}

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
setInterval(printQuote, 10000);

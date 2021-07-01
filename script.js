/* .js files add interaction to your website */

var factList = ["Nearly 20 percent of neighborhoods with lower incomes and home values have experienced gentrification since 2000","Comparing 2000 data to the most recent Census estimates suggests at least half of lower-income neighborhoods also gentrified in Minneapolis, Seattle and Washington, D.C.", "Seven cities account for nearly half of the gentrification nationally: New York City, Los Angeles, Washington, D.C., Philadelphia, Baltimore, San Diego and Chicago"
];


var randomFact = document.getElementById("randomFact");
var myBtn = document.getElementById("myBtn");

var count = 0;

myBtn.addEventListener ("click", showFact);

function showFact(){
   randomFact.innerHTML = factList[count];
   count++;
   if (count == factList.length){
     count=0;
   }
}

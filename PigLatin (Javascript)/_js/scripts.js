//uploaded to github 9/1/2017 11:42pm PST

// var phrase = "Anthony eats oats by the bay while laying in hay";

document.getElementById('transBtn').addEventListener('click', wordCheck);

function wordCheck() {
  var phrase = "Anthony eats goats";
  // var phrase = document.getElementById("input").value;
  var output = [];
  var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  var input = phrase.split(" ");
  var count = 1;

  for (i=0; i<input.length;i++){
    for(y=0; y<vowels.length;y++){
        console.log("Testing: #"+ count + " " + input[i].charAt(0) + " from " + input[i]);
        console.log(input[i].charAt(0));
        console.log(vowels[y]);
        count++;
        switch (input[i].charAt(0) == vowels[y].charAt(0)) {
          case  true:
            input[i] = input[i] + "way";
            output.push(input[i]);
            input[i] = input[i+1];
            console.log("---------------------------------------------PUSH IT!---->");
            console.log("YUPPPPP!");
            console.log("");
            console.log("");

            break;
          case false:
            console.log("NOPE");
            console.log("");

        }
    }
  }

  output = output.join(" ");
  console.log(input);
  console.log(output);
  document.getElementById("outputPigLatin").innerHTML = output;
}

/*-------------------------------------
| Not A Match "ay" addition code below
-------------------------------------*/
// var firstLetter = input[i].charAt(0);
// input[i] = input[i].substring(1) + firstLetter + "ay";
// output.push(input[i]);



/*-------------------------------------
| Swtich Part 2
-------------------------------------*/
// switch (input[i].charAt(0) != vowels[y].charAt(0)) {
//   case  true:
//     var firstLetter = input[i].charAt(0);
//     input[i] = input[i].substring(1) + firstLetter + "ay";
//     output.push(input[i]);
//     console.log("---------------------------------------------PUSH IT 2222222!---->");
//   case false:
//     console.log("Switch #2");
// }

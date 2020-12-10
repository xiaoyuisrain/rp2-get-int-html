// TODO: make sure all possible punctuation marks are included
var puncs2remove = ".,;?!…’'";

function formatPuncs(string) {
  return string
    .split("")
    .filter(function(character) {
      return puncs2remove.indexOf(character) === -1;
    })
    .join("");
}

function lowerFirstLetter(string) {
  first_letter = string[0].toLowerCase();
  rest = string.substr(1);
  return first_letter.concat(rest)  
}

function vanishElement(element) {
        element.innerHTML = "";
        element.setAttribute("class", "bef_proceed");
}

function aft_int0() {
  var value_int0 = document.getElementById("int0").value;
  var warning = document.getElementById("compare_warn");
  // Reset `required` attributes
  document.getElementsByName("reason_na")[0].required = false;
  document.getElementsByName("reasonDifficultyRating")[0].required = false;
  // Proceed if > 0 char is entered
  if (value_int0.length) {
    // Display the div asking for general comments
    document.getElementById("comments_regardless").setAttribute("class", "aft_proceed");
    if (value_int0 == document.getElementById("value_na").innerText) {
      // Display step after respondent chooses to give up the task.
      vanishElement(warning);
      document.getElementById("pp_provided").setAttribute("class", "bef_proceed");
      document.getElementById("pp_notprovided").setAttribute("class", "aft_proceed");
      // Reason for giving the task must be provided
      document.getElementsByName("reason_na")[0].required = true;
    } else {
      // Display step after paraphrase is provided
      document.getElementById("pp_notprovided").setAttribute("class", "bef_proceed");
      document.getElementById("pp_provided").setAttribute("class", "aft_proceed");
      // Reason for aptness rating must be provided
      document.getElementsByName("reasonDifficultyRating")[0].required = true;
      // Get original text excluding target word and punctuations
      var text0_html = document.getElementById("text0").innerHTML;
      warning.setAttribute("class", "bef_proceed");
      warning.innerHTML = text0_html;
      warning.getElementsByTagName("em")[0].outerHTML = "";
      text0_excl = formatPuncs(warning.innerText.replace(/\s+/g,' '));
      // Get non-target tokens in original text
      // First letter of first word changed to lowercase
      tokens0 = lowerFirstLetter(text0_excl).split(" "); 
      // Split provided paraphrase into tokens
      // First letter of first word changed to lowercase
      tokens1 = formatPuncs(lowerFirstLetter(value_int0)).split(" ");
      tokens1.forEach(function map2Original(value) {
        /* Compare the focus token with the token
         * at the beginning of tokens0,
         * and remove the latter from tokens0 if the two are the same.
         * */
        if (tokens0.length) {
          beginner = tokens0.shift();
          if (value != beginner) {
            tokens0.unshift(beginner); 
          }
        }
      }); 
      // Display warning if there are tokens not removed from tokens0
      if (tokens0.length) {
        warning.innerHTML = "Non-target words might have been modified." +
          " Please double-check and correct your paraphrase if applicable." + 
          " After correcting your paraphrase, please click 'Proceed'." +
          " If you are certain that your paraphrase is correct," +
          " please ignore this message.";
        warning.setAttribute("class", "aft_proceed wrong");
      } else {
        vanishElement(warning);
      }
    }
  } else {
    // Hide the next step
    vanishElement(warning);
    document.getElementById("pp_provided").setAttribute("class", "bef_proceed");
    document.getElementById("pp_notprovided").setAttribute("class", "bef_proceed");
    document.getElementById("comments_regardless").setAttribute("class", "bef_proceed");
  }
}


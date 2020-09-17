var puncs2remove = '.,;?!';

function formatPuncs(string) {
  return string
    .split('')
    .filter(function(character) {
      return puncs2remove.indexOf(character) === -1;
    })
    .join('');
}

function aft_int0() {
  // Get original text excluding target word and punctuations
  var text0_html = document.getElementById("text0").innerHTML;
  var warning = document.getElementById("compare_warn");
  warning.innerHTML = text0_html;
  warning.getElementsByClassName("tw")[0].outerHTML = "";
  text0_excl = formatPuncs(warning.innerText);
  // Get non-target tokens in original text
  tokens0 = text0_excl.split(" "); 
  // Get input int0
  var value_int0 = document.getElementById("int0").value;
  // TODO: compare original and pp
  if (value_int0.length) {
    if (value_int0 == document.getElementById("value_na").innerText) {
      // Display step after respondent chooses to give up the task.
      document.getElementById("pp_provided").setAttribute("class", "bef_proceed");
      document.getElementById("pp_notprovided").setAttribute("class", "aft_proceed");
    } else {
      // Display step after paraphrase is provided.
      document.getElementById("pp_notprovided").setAttribute("class", "bef_proceed");
      document.getElementById("pp_provided").setAttribute("class", "aft_proceed");
    }
  } else {
    // Hide the next step.
    document.getElementById("pp_provided").setAttribute("class", "bef_proceed");
    document.getElementById("pp_notprovided").setAttribute("class", "bef_proceed");
  }
}


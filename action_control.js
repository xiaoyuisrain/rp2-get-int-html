function aft_int0(){
  // Get input int0
  var value_int0 = document.getElementById("int0").value;
  if (value_int0.length) {
    if (value_int0 == 'NA') {
      // Display step after respondent chooses to give up the task.
      document.getElementById("pp_provided").setAttribute("class", "bef_proceed");
      document.getElementById("pp_notprovided").setAttribute("class", "aft_proceed");
    } else {
      // Display step after paraphrase is provided.
      document.getElementById("pp_notprovided").setAttribute("class", "bef_proceed");
      document.getElementById("pp_provided").setAttribute("class", "aft_proceed");
      // Copy reference text.
      document.getElementById("display_pp").innerHTML = document.getElementById("ref").innerHTML;
      // Replace target word.
      var word_to_replace = document.getElementById("display_pp").getElementsByClassName("tw")[0];
      word_to_replace.setAttribute("class", "int");
      word_to_replace.innerHTML = value_int0; 
    }
  } else {
    // Hide the next step.
    document.getElementById("pp_provided").setAttribute("class", "bef_proceed");
    document.getElementById("pp_notprovided").setAttribute("class", "bef_proceed");
  }
}


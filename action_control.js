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
    }
  } else {
    // Hide the next step.
    document.getElementById("pp_provided").setAttribute("class", "bef_proceed");
    document.getElementById("pp_notprovided").setAttribute("class", "bef_proceed");
  }
}


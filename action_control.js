function aft_int0(){
  var text0_html = document.getElementById("text0").innerHTML;
  var warning = document.getElementById("compare_warn");
  warning.innerHTML = text0_html;
  warning.getElementsByClassName("tw")[0].outerHTML = "";
  text0_excl = warning.innerText; // original string excl. tw
  // TODO: get tokens in original text excl. tw
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


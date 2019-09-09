
// These functions are for styling the selectize input cluster selector

// styling if looking at cluster
function contrastOptions(item, escape) {

  var infoContrasts =  "<div style='color: #A0A0A0;text-align:right;'>" +
                        item.ncells + " :: " + item.pspace + item.pcells + "%" +
                       "</div>";

  var infoSamples =  "<div style='color: #A0A0A0;text-align:right;'>" +
                       item.ntest + " :: " + item.nctrl + 
                      "</div>";
  var info = typeof item.ntest == 'undefined' ? infoContrasts : infoSamples;

  var clustEl = "<div style='columns: 2;'>" +
                            "<div style='margin-right: -80px'>" +
                              "<div class='input-swatch' style='background-color:" + item.testColor + "'></div>" +
                              escape(item.name) +
                            "</div>" +
                            info +
                            "</div>";


  // styling if looking at contrast
  var conEl  = "<div>" +
                 "(<div class='input-swatch' style='margin-left: 5px; background-color:" + item.testColor + "'></div>" +
                 " - " +
                 "<div class='input-swatch' style='background-color:" + item.ctrlColor + "'></div>) " +
                 escape(item.test) + " vs " +
                 escape(item.ctrl) +
               "</div>";

  // either cluster or contrast element
  return (typeof item.pcells !== 'undefined' | typeof item.ntest !== 'undefined') ? clustEl : conEl;
}



//styling for current item
function contrastItem(item, escape) {
  var infoContrasts =  "<span style='color: #A0A0A0;'> (" + item.ncells + " :: " + item.pspace + item.pcells + "%" + ")</span>";
  var infoSamples =  "<span style='color: #A0A0A0;'> (" + item.ntest + " :: " + item.nctrl + ")</span>";
  var info = typeof item.ntest == 'undefined' ? infoContrasts : infoSamples;


  // styling if looking at cluster
  var clustEl = "<div>" +
                    "<div class='input-swatch' style='background-color:" + item.testColor + "'></div>" +
                     escape(item.name) +
                     info +
                "</div>";

   // styling if looking at contrast
  var conEl  = "<div>" +
                 "(<div class='input-swatch' style='margin-left: 5px; background-color:" + item.testColor + "'></div>" +
                 " - " +
                 "<div class='input-swatch' style='background-color:" + item.ctrlColor + "'></div>) " +
                 escape(item.test) + " vs " +
                 escape(item.ctrl) +
               "</div>";

  // either cluster or contrast element
  return (typeof item.pcells !== 'undefined' | typeof item.ntest !== 'undefined') ? clustEl : conEl;
}


function excludeOptions(item, escape) {
  var res = "<div>" +
                "<div class='input-swatch' style='background-color:" + item.color + "'></div>" +
                  escape(item.name) +
            "</div>";

  return res;
}

function integationOption(item, escape) {
  var res = "<div>" +
              "<div class='input-swatch' style='background-color:" + item.color + "'></div>" +
                escape(item.label) +
            "</div>";

  return res;
}

function geneOption(item, escape) {
  var res = "<div style='columns: 2;' title='" + item.description + "'>" +
                  "<div style='margin-right: -80px'>" +
                     escape(item.label) +
                  "</div>" +
                  "<div style='color: #A0A0A0;text-align:right;'>" +
                   item["pct.1"] + " :: " + item.pspace + item["pct.2"] +
                  "</div>" +
                "</div>";


  return res;
}


function geneItem(item, escape) {
  var res = "<div title='" + item.description + "'>" +
                     escape(item.label) +
                  "<span style='color: #A0A0A0;'>" +
                     " (" + item["pct.1"] + " :: " + item["pct.2"] + ")" +
                  "</span>" +
                "</div>";

  return res;

}

function pathGene(item, escape) {
  var res = "<div title = '" + item.description + "'>" + escape(item.label) + "</div>";
  return res;
}

function cellOptions(item, escape) {

  var markup = "<div style='columns: 2;'>" +
    "<div>" +
        escape(item.cell_id) +
    "</div>" +
    "<div style='color: #A0A0A0;text-align:right;'>" +
        item.sample_type +
    "</div>" +
  "</div>";

  return markup;
}

function pathOptions(item, escape) {

  var fdr = item.fdr ? item.fdr : '';

  var markup = 
  "<div>" +
    "<div class = 'pull-left path-name-option' title = '" + escape(item.name) + "'>" +
        escape(item.label) +
    "</div>" +
    "<div class = 'pull-right path-fdr'>" +
    fdr +
    "</div>" +
    "<div class = 'clearfix'></div>" +
  "</div>";

  return markup;
}

function pathItem(item, escape) {

  var fdr = item.fdr ? " (" + item.fdr + ")" : '';

  var markup = 
    "<div title = '" + escape(item.name) + "'>" +
        escape(item.label) +
        "<span class = 'path-fdr'>" + fdr + "</span>"
    "</div>";

  return markup;
}




function studyOption(item, escape) {

  var res = "<div style='columns: 2;'>" +
              "<div style='margin-right: -80px'>" +
                  escape(item.study) +
              "</div>" +
              "<div style='color: #A0A0A0;text-align:right;'>" + item.subset  + "</div>" +
            "</div>";


  return res;  
}


function studyItem(item, escape) {

  var res = "<div>" +
                  escape(item.study) +
                  "<span style='color: #A0A0A0;'>" + " (" + item.subset + ")" +"</span>"; +
            "</div>";

  return res;
}

function queryGenesItem(item, escape) {
  // color to indicate if in cmap alone or cmap and l1000
  var bgColor = item.cmap_only ? '#f0ad4e' : '#efefef';
  var res = "<div style='background-color:" + bgColor + "'>" + escape(item.gene) + "</div>";
  return res;
}

function queryGenesOption(item, escape) {

  var infoText = item.cmap_only ? 'ONLY CMAP02' : '';

  var res = "<div style='columns: 2;'>" +
              "<div style='margin-right: -80px'>" +
                  escape(item.gene) +
              "</div>" +
              "<div style='color: #A0A0A0;text-align:right;'>" + infoText + "</div>" +
            "</div>";

  return res;
}

function transferLabelOption(item, escape) {
  var predsMarkup = item.preds ? "<div class ='circle-swatch pull-right'></div>" : "<div></div>";

  console.log(item.preds);

  var res = "<div style='columns: 2;'>" +
              "<div style='margin-right: -80px'>" +
                  escape(item.label) +
              "</div>" +
              predsMarkup +
            "</div>";

  return res;
}

function querySignatureItem(item, escape) {
 
  var res = "<div>" +
              escape(item.label) +
              "<span style='color: #A0A0A0;'>" + " (" + item.type.toLowerCase() + ")" +"</span>"; +
            "</div>";

  return res;
}
// TODO: CREATE SERVER ENDPOINT TO HANDLE THIS

var data = [];

$( document ).ready(function() {


  // TODO: Remove this placeholder
  generateSampleData();



  // Do a GET to api/ to retrieve a list of profiles
 //  $.get( "api/tlvs", function( data ) {

    // TODO: IMPLEMENT FUNCTIONALITY




   
});


// This function calls the generateAllValidPrimitiveTags function included in idt-tlvDB.js

function generateSampleData() {
  
  console.log('Generating sample DB - remove before launch!');
  data = generateAllValidPrimitiveTags();

}

function populateTable() {


  // <th data-field="tag">Tag</th>
  // <th data-field="name">Name</th>
  // <th data-field="format">Format</th>             
  // <th data-field="length">Length</th>
  // <th data-field="description">Description</th>
  // <th data-field="comments">Comments</th>
  // <th data-field="default">Default Value</th> 
  // <th data-field="detailed">Detailed Information</th>
  

   for (var i = 0; i < data.length; ++i){
      $( "<tr id='tlv-" + i + "'>" +
      '<td class="tlv-tag">' + data[i] + '</td>' +
      '<td class="tlv-name">' + " " + '</td>' +
      '<td class="tlv-format">' + " " + '</td>' +
      '<td class="tlv-length">' + " " + '</td>' +
      '<td class="tlv-description">' + " " + '</td>' +
      '<td class="tlv-comments">' + " " + '</td>' +
      '<td class="tlv-default">' + " " + '</td>' +
      '<td class="tlv-detailed">' + " " + '</td>' +
      "</tr>" ).appendTo( "#tlv-table-primitive" );
      }


}

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
  data = createSamplePrimitiveDB();
  console.log(data);
  populateTable();

}

function populateTable() {
  

   for (var i = 0; i < data.length; ++i){
      $( "<tr id='tlv-" + i + "'>" +
      '<td class="tlv-tag">' + data[i].tag + '</td>' +
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

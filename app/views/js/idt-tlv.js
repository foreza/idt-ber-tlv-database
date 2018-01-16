var rData;  // Data returned from API
var data;   // Data returned from auto-generation - TODO DISABLE THIS

$( document ).ready(function() {


  // TODO: Remove this placeholder
   // generateSampleData();

  // Do a GET to api/tlv to retrieve a list of tlvs
  $.get( "api/tlv", function( data ) {
    rData = data;
    console.log(rData);
    populateTable();
  }
  );
    // TODO: IMPLEMENT FUNCTIONALITY



    


// Handle View elements here

  // Initialize Materialize modal class
  $('.modal').modal();

   
});


// This function calls the generateAllValidPrimitiveTags function included in idt-tlvDB.js

function generateSampleData() {
  
  console.log('Generating sample DB - remove before launch!');
  data = createSamplePrimitiveDB();

  console.log(data);

}

function populateTable() {
  
  // Populates based on rData
   for (var i = 0; i < rData.length; ++i){
      $( "<tr id='tlv-" + i + "'>" +
      '<td class="tlv-tag">' + rData[i].tag + '</td>' +
      '<td class="tlv-name">' + rData[i].tagName + '</td>' +
      '<td class="tlv-format">' + rData[i].tagFormat + '</td>' +
      '<td class="tlv-length">' + rData[i].tagLength + '</td>' +
      '<td class="tlv-description">' + rData[i].tagDescription + '</td>' +
      '<td class="tlv-comments">' + rData[i].tagComments + '</td>' +
      '<td class="tlv-default">' + rData[i].tagDefault + '</td>' +
      '<td class="tlv-detailed">' + rData[i].tagDetailed + '</td>' +
      "</tr>" ).appendTo( "#tlv-table-primitive" );
      }

      for (var i = 0; i < data.length; ++i){
        $( "<tr id='tlv-" + i + "'>" +
        '<td class="tlv-tag">' + data[i].tag + '</td>' +
        '<td class="tlv-name">' + data[i].tagName + '</td>' +
        '<td class="tlv-format">' + data[i].tagFormat + '</td>' +
        '<td class="tlv-length">' + data[i].tagLength + '</td>' +
        '<td class="tlv-description">' + data[i].tagDescription + '</td>' +
        '<td class="tlv-comments">' + data[i].tagComments + '</td>' +
        '<td class="tlv-default">' + data[i].tagDefault + '</td>' +
        '<td class="tlv-detailed">' + data[i].tagDetailed + '</td>' +
        "</tr>" ).appendTo( "#tlv-table-primitive" );
        }


}

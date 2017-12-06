

// This function evaluates a given string to ensure the TLV itself is valid before the costly lookup operation.

    // BER TLV rules

    /*

        See Annex B of Book 3, EMV 4.3, for a summary of BER-TLV rules.
        Byte 1 should be FF if private constructed or DF if private primitive (BER-TLV rule)
        All tags should be 3 bytes
        Byte 2 shall have bit 8 set (BER-TLV rule)
        Byte 3 shall not have bit 8 set, but shall have at least one other bit set (BER-TLV rule. Example, value 00 not allowed)


        Creating new primitive tags:
        
        IDTech proprietary primitive tags will always start with DFE (DFExxx).
        This mean the range available goes from the top DFEF7F down to DFE101.
        Remember you can only use 01 to 7F in the least significant byte.
        When creating a new primitive tag please start at the top DFEF7F and look for an available tag as you move from the highest to the lower tags.
        There may still be tags available for use in the high ranges. If there are none available in the high ranges then use the next available lowest tag. You can find those tags by looking for the highest tag with a green “available” in the left most column. For example, if there are no tags available in the ranges DFEF7F to DFEF01 and DFEE7F to DFEE01 then by all means start by using the highest tag available in the DFED01 to DFED7F range.
        
        Creating new constructed tags:
        
        IDTech proprietary constructed tags will always start with FFEE (FFEExx).
        This means the range available goes from the top FFEE7F down to FFEE01.
        When creating a new constructed tag please start at the bottom of the range FFEE01 and look for an available tag as you move from the lowest to the highest tags.
        There may still be tags available for use in the low ranges. If there are none available in the low ranges then use the next available higher lowest tag. You can find those tags by looking for the highest tag with a green “available” in the left most column. For example, if there are no tags available in the ranges FFEF7F to FFEF01 then by all means start by using the lowest tag available in the FFEE01 to FFEE7F range.
    */


    


// This function will generate all of the IDTECH possible primitive tags. 
function generateAllValidPrimitiveTags(){

 // Range for primitive tags DFE101 -> DFEF7F
        // DF E1 01 
        // DF EF 7F

        var primitiveTags = [];


        // Define max parameters for this function

        var byte_1 = 0xDF;      // Byte 1 shall always be DF for primitive tags
        var byte_2 = 0xEF;      // Byte 2 shall have bit 8 set (BER-TLV rule), which means we can have from EA->EF
        var byte_3 = 0X7F;      // Byte 3 shall not have bit 8 set, but shall have at least one other bit set (BER-TLV rule. Example, value 00 not allowed)



        for (var b1 = 0xDF; b1 <= byte_1; ++b1){

            // Covers from EA -> EF
            for (var b2 = 0xE1; b2 <= byte_2; ++b2){

                // Covers from 01 -> 7F
                for (var b3 = 0x01; b3 <= byte_3; ++b3){
                    // Append the newly constructed tag to the collection
                    primitiveTags.push(returnTLVString([b1,b2,b3]));     
                }
            }               
                
        }


    

        console.log(primitiveTags.length);

        return primitiveTags;



}

// Helper function to concat all of the tags together

function returnTLVString(arr){

    str = "";

    for (var i = 0; i < arr.length; ++i){

        var hex = arr[i].toString(16);

        // If the converted hex digit is one character, we have to correct it. ie: 0xA needs to be 0x0A
        
        if (hex.length == 1){
            hex = "0" + hex;
        } 
    
        str += hex;
        
    }

    console.log(str);
    
    return str;
    

}
// This will define the basic 'TLV' class that will be used.

/*



tagFormat

b = binary
n = numeric
an = alpha-numeric
cn = compressed numeric

*/

var tlv = {
    tag : "",
    tagName : "",
    tagFormat : "",
    tagLength : 0,
    tagDescription : "",
    tagComments : "",
    tagDefault : "",
    tagDetailed : {
        dateCreated : "",
        dateModified : "",
        supportedDevices: [],
        additional: "",
    }
}

// Example: 
example_tlv = {
    tag : "DFEF7D",
    tagName : "Re-power on times",
    tagFormat : "an",
    tagLength : 1,
    tagDescription : "For control the times of re-power on ICC card before fall back to MSR",
    tagComments : "Used by Augusta device in order to properly pass EMV L3 tests by making the fallback times configurable",
    tagDefault : "DFEF7D0103",
    tagDetailed : {
        dateCreated : "",
        dateModified : "",
        supportedDevices: [],
        additional: "Should be added to all Contact L2",
    }
}
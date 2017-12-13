
// This will define the basic 'TLV' class that will be used.

/*

TODO: 
tagFormat values

b = binary
n = numeric
an = alpha-numeric
cn = compressed numeric

*/


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TLVSchema = new Schema({
    tag: {
        type: String,
        require: true,
        default: 'INVALID'
    },
    tagName: {
        type: String,
        require: true,
        default: 'INVALID'
    },
    tagFormat: {
        type: String,
        require: true,
        default: 'b'
    },
    tagLength: {
        type: Number,
        require: true,
        default: "0"
    },
    tagDescription: {
        type: String,
        require: true,
        default: 'INVALID'
    },
    tagComments: {
        type: String,
        require: true,
        default: 'INVALID'
    },
    tagDefault: {
        type: String,
        require: true,
        default: 'INVALID'
    },
    tagDetailed: {
        type: String,
        require: true,
        default: 'INVALID'
    },
    meta: {
        created_at: {
            type: Date,
            default: Date.now
        },
        times_requested: {
            type: Number,
            default: 0
        },
        tagOwner: {
            type: String,
            default: 'IDTECH'
        },
        isPublic: {
            type: Boolean,
            default: false
        }
    }
});



module.exports = mongoose.model('TLV', TLVSchema);



/*

var tlv = {
    tag : {
        type: String, 
          require: true,
          default: 'INVALID'},
    }
    tagName : {
        type: String, 
          require: true,
          default: 'INVALID'},
    }
    tagFormat : {
        type: String, 
          require: true,
          default: 'INVALID'},
    }
    tagLength : 0,
    tagDescription : {
        type: String, 
          require: true,
          default: 'INVALID'},
    }
    tagComments : {
        type: String, 
          require: true,
          default: 'INVALID'},
    }
    tagDefault : {
        type: String, 
          require: true,
          default: 'INVALID'},
    }
    isPublic : false, 
    tagDetailed : {
        dateCreated : {
            type: String, 
          require: true,
          default: 'INVALID'},
        }
        dateModified : {
            type: String, 
          require: true,
          default: 'INVALID'},
        }
        tagOwner : {
            type: String, 
          require: true,
          default: 'INVALID'},
        }
        supportedDevices: [],
        additional: {
            type: String, 
          require: true,
          default: 'INVALID'},
        }
    }
}

*/

// Example TLV used in Postman for posting to api/tlv

/*

{
    "tag" : "DFEF7D",
    "tagName" : "Re-power on times",
    "tagFormat" : "an",
    "tagLength" : 1,
    "tagDescription" : "For control the times of re-power on ICC card before fall back to MSR",
    "tagComments" : "Used by Augusta device in order to properly pass EMV L3 tests by making the fallback times configurable",
    "tagDefault" : "DFEF7D0103",
    "tagDetailed" : "More detailed info"
}

*/
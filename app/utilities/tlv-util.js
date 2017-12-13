const tlvModel = require('../models/tlv');
const tlvUtils = {};


// This utility function creates a TLV based off of specified defaults.
tlvUtils.createTLV = newTLV => {
    return new Promise((resolve, reject) => {
        tlvModel.create(newTLV, (err, createdTLV) => {
            if (err) reject(err);
            resolve(createdTLV);
        });
    });
}


// This utility returns a TLV given the TLV Name
tlvUtils.getTLVByName = (tlv) => {
    return new Promise((resolve, reject) => {
        tlvModel.find({ tlv }, (err, tlv) => {
            if (err) reject(err);
            resolve(tlv[0]);
        });
    });
}

// This utility lists all known TLVs
tlvUtils.listAllTLVs = () => {
    return new Promise((resolve, reject) => {
        tlvModel.find({}, function (err, tlvList) {
            if (err) {
                reject(err);
            }
            resolve(tlvList);

        });

    });
};


module.exports = tlvUtils;

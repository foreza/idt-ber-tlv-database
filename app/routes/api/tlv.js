const router = require('express').Router();
const tlvUtils = require('../../utilities/tlv-util');


// Hitting root directory will return a list of all known TLVs
router.get('/', (req, res) => {
    tlvUtils.listAllTLVs().then(tlvList => {
			if (!tlvList){
				return res.sendStatus(400);
			} else {
				return res.send(tlvList);
			}
		});
	});

// Should only be used once to populate
router.post('/', (req, res) => {
	const tlv = req.body;
	
	console.log('Request body', req.body)
	
	
	// if (!tlv){
	// 	console.log("got nuthin");
	// 	return res.sendStatus(400);
		
	// }

	const newTLV = createNewTLV(tlv);
	console.log("trying to create with this", newTLV);

	tlvUtils.createTLV(newTLV)
		.then(() => res.sendStatus(201), () => res.sendStatus(400));
	
});


const createNewTLV = newTLV => {
	console.log("Making new TLV");
	const { tag, tagName, tagFormat,
		tagLength, tagDescription, tagComments,
		tagDefault, tagDetailed } = newTLV;


	return {  tag, tagName, tagFormat,
		tagLength, tagDescription, tagComments,
		tagDefault, tagDetailed };
};

	module.exports = router;
	
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

	
	module.exports = router;
	
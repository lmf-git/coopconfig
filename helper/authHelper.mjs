
import jwt from 'jsonwebtoken';

import Users from '../services/users.mjs';

export default class Auth {

	static jwtFromRequest = req => {
		let token = null;
	
		// Detect, access, and parse token.
		if (req && req.headers.authorization) 
			token = req.headers.authorization.replace('Bearer ', '');
	
		return token;
	};

	static issuerOpts = {
		issuer: 'api.thecoop.group',
		audience: 'thecoop.group'
	};

	static decode(token) {
		let data = null;
		
		// Detect, access, and parse token.
		if (token)  {
			const deheaderedToken = token.replace('Bearer ', '');
			data = jwt.verify(
				// JWT token to decode.
				deheaderedToken,
	
				// Encryption key.
				process.env.DISCORD_TOKEN, 
	
				// Issuance options, just to be cool lyk dat.
				this.issuerOpts
			);
		}
	
		return data;
	}

	static token(id, username) {
		return jwt.sign(
			// Payload
			{ id, username }, 

			// Encryption keky.
			process.env.DISCORD_TOKEN, 

			// Issuance options, just to be cool lyk dat.
			this.issuerOpts
		);
	}
	
}
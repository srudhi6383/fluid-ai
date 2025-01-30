const jwt = require("jsonwebtoken");
const User = require("../models/User");

const auth = async (req, res, next) => {
	// check for token in header
	const token = req.header("x-auth-token");
	if (!token) {
		return res.status(401).json({ msg: "No token, authorization denied" });
	}
	try {
		// verifying JWT token
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.user = await User.findById(decoded.id);
		next();
	} catch (err) {
		res.status(401).json({ message: "Token is not valid" });
	}
};

module.exports = auth;
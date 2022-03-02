function role(allowedRoles) {
    return(req, res, next) => {
        if(allowedRoles.includes(req.user.roles[0])) {
            next();
        } else {
            res.status(401).json({
                message: "Know your role"
            });
        }
    }
}

module.exports = role;
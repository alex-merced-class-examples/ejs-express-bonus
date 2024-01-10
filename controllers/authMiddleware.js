function authMiddleware(req, res, next){
    if(req.session.loggedIn){
        return next()
    }
    res.redirect("/auth/forms")
}

module.exports = authMiddleware
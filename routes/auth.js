const express = require('express')
const passport = require('passport')
const router = express.Router()

router.get('/login',

    passport.authenticate('azuread-openidconnect', 
      { 
        tenantIdOrName: "aaf20262-a2d1-4302-9cc6-f8aee9fb3e0c",
        failureMessage: true,
        failureRedirect: '/'                      // required
      }
    )
  ,
  (req, res) => {
});

// 'GET returnURL'
// `passport.authenticate` will try to authenticate the content returned in
// query (such as authorization code). If authentication fails, user will be
// redirected to '/' (home page); otherwise, it passes to the next middleware.
router.get('/openid/return',
    passport.authenticate('azuread-openidconnect', 
    { 
        tenantIdOrName: "aaf20262-a2d1-4302-9cc6-f8aee9fb3e0c",
        failureMessage: true,
        failureRedirect: '/'                      // required
      }
    ),
  (req, res) => {
    log.info('We received a return from AzureAD.');
    
  });

// 'POST returnURL'
// `passport.authenticate` will try to authenticate the content returned in
// body (such as authorization code). If authentication fails, user will be
// redirected to '/' (home page); otherwise, it passes to the next middleware.
router.post('/openid/return',
    passport.authenticate('azuread-openidconnect', 
    { 
        tenantIdOrName: "aaf20262-a2d1-4302-9cc6-f8aee9fb3e0c",
        failureMessage: true,
        failureRedirect: '/'                      // required
      }
    )

  ,
  (req, res) => {
    const session = req.session
    res.json({
        message: "logged in",
        session
    })
  });

// 'logout' route, logout from passport, and destroy the session with AAD.
router.get('/logout', function(req, res){
  req.session.destroy(function(err) {
    req.logOut();
    res.redirect(config.destroySessionUrl);
  });
});


module.exports = router;
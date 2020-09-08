const OIDCStrategy = require("passport-azure-ad").OIDCStrategy;
const mongoose = require("mongoose");

const config = {
  clientId: "7ac7882a-8b46-412d-8009-8f6455fa4dbc",
  clientSecret: "vGWp-55-gyT3-K.1jzuyv17S6vCiLgkx29",
};

var users = [];

var findByOid = function (tid, fn) {
  for (var i = 0, len = users.length; i < len; i++) {
    var user = users[i];
    console.log("we are using user: ", user);
    if (user._json.tid === tid) {
      return fn(null, user);
    }
  }
  return fn(null, null);
};

module.exports = (passport) => {
  passport.use(
    new OIDCStrategy(
      {
        identityMetadata:
          "https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration",
        clientID: process.env.CLIENT_ID || config.clientId,
        clientSecret: process.env.CLIENT_SECRET || config.clientSecret,
        responseType: "id_token",
        allowHttpForRedirectUrl: true,
        loggingNoPII: false,
        redirectUrl:
          process.env.REDIRECT_URI ||
          "http://localhost:5000/auth/openid/return",
        skipUserProfile: false,
        responseMode: "form_post",
        passReqToCallback: false,
      },
      (iss, sub, profile, accessToken, refreshToken, done) => {
        console.log(iss, sub, profile, accessToken, refreshToken);
        if (!profile._json.tid) {
          return done(new Error("No oid found"), null);
        }
        // asynchronous verification, for effect...
        process.nextTick(function () {
          findByOid(profile._json.tid, function (err, user) {
            if (err) {
              return done(err);
            }
            if (!user) {
              // "Auto-registration"
              users.push(profile);
              return done(null, profile);
            }
            return done(null, user);
          });
        });
      }
    )
  );
  // array to hold logged in users
  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(function (err, user, done) {
    done(err, user);
  });
};

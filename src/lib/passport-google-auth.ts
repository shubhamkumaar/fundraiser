import { Profile, Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";

import {User} from '@/models/user-model'

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      callbackURL: "/api/oauth2/redirect/google", // this is the endpoint you registered on google while creating your app. This endpoint would exist on your application for verifying the authentication
    },
    async (_accessToken, _refreshToken, profile, cb: any) => {
      try {
        // await saveUser(profile);
        return cb(null, profile);
      } catch (e: any) {
        throw new Error(e);
      }
    }
  )
);

passport.serializeUser((user, cb) => {
  process.nextTick(function () {
    return cb(null, user);
  });
});

passport.deserializeUser(function (
  user: any,
  cb: (arg0: null, arg1: any) => any
) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

export default passport;
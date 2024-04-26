const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require('./models/schemas'); // Importe o modelo de usuário

const passport = require("passport");

const GOOGLE_CLIENT_ID = "1057885497573-glv5gvvh2omq8t6khmion57ik0063rom.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";


passport.use(
    new GoogleStrategy({
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Verifique se o usuário já existe no banco de dados
        let user = await User.findOne({ googleId: profile.id });
  
        if (!user) {
          // Se o usuário não existir, crie um novo usuário com os dados do perfil
          user = new User({
            googleId: profile.id,
            displayName: profile.displayName,
            // Outros campos do perfil do usuário, se necessário
          });
          await user.save(); // Salve o novo usuário no banco de dados
        }
  
        // Retorne o usuário
        done(null, user);
      } catch (error) {
        done(error, null);
      }
    })
  );
  
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (error) {
      done(error, null);
    }
  });
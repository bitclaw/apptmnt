# apptmnt

Appointment Creator

## Documentation

- https://www.themarketingtechnologist.co/eslint-with-airbnb-javascript-style-guide-in-webstorm/

# Installation instructions

- Install NVM: curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash;nvm install node 
- Install Yarn: curl -o- -L https://yarnpkg.com/install.sh | bash
- Clone project from repository using the following command: git clone https://github.com/bitclaw/apptmnt.git

- Install using NPM:
 
 `npm install eslint eslint-config-airbnb gulpjs/gulp-cli --global;npm install eslint-plugin-jsx-a11y@^2.0.0 eslint-plugin-react eslint-plugin-import babel-eslint --global`
 
- Install using Yarn:
 `yarn global add eslint eslint-config-airbnb gulpjs/gulp-cli;yarn global add eslint-plugin-jsx-a11y@^2.0.0 eslint-plugin-react eslint-plugin-import babel-eslint`
 
- Run command `npm install` or `yarn install`
- Run command (Only for development): `npm run dev`
- Run command (Build for production): `npm run prod`

- In order to view gulp tasks run: `gulp --tasks`
- Run tests with `gulp testScripts`
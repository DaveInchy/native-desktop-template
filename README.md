
# >_ native-desktop-template

This is a template for a native app, it uses electron for desktop functionality and uses webpack + create-react-app to handle compiling to Android & iOS. It is intended to be used with a [create-react-app]('https://github.com/DaveInchy/tailwind-app') example project... Make sure to export your original "create react app template" into the `src/` folder and copy every static file to the `public/` folder.

<br>

<br>

# >_ Installing
To install the whole source code, run the following command:

```
$ npm run setup
```
<br>

# >_ Running


```
$ npm run dev <-- A Development setup
$ npm run start
$ npm run test
$ npm run eject
$ npm run build
$ npm run build:dev
$ npm run build:prod
$ npm run build:react
$ npm run build:electron
$ npm run build:windows
$ npm run electron:start
$ npm run eslint:start
$ npm run eslint:fix
$ npm run format:fix
$ npm run format:start
# ----------------------------- #
Are you sure to continue? [y/n] |
>_ maybe?                       |
```

<br>

# >_ Configuration

- Setup by Webpack & Babel -> `webpack.config.js`
- Design by TailwindCSS -> `tailwind.config.js`
- Desktop by Electron -> `public/electron.js`
- Mobile by React Native -> `src/index.js`

# ryvor licensing

View the public site [here](https://ryvor-licensing.web.app/) or [here](https://ryvor-licensing.firebaseapp.com/)

## usage

### prerequisits

- [Node.js](https://nodejs.org/en)
- [Firebase CLI](https://firebase.google.com/docs/cli#install_the_firebase_cli)
- [VS Code](https://code.visualstudio.com/)

### Installation

Download node for the specific system required then run the following command in the root of the project.

``` npm
npm install
```

Once the previous command has been ran, download Firebase CLI using the following command.

``` node
npm install -D firebase-tools
```

Once Firebase-tools have been installed, login to firebase with your google account.

``` node
.\node_modules\.bin\firebase login
```

After you login you can optionally confirm if the login worked by checking if your projects are visible

``` node
.\node_modules\.bin\firebase projects:list
```

After that you need to initializew tthe actual api itself. cd into the api foolder and run the following command

``` node
npm install
```

After that the project should all be setup. Use the debug options to debug or deploy!

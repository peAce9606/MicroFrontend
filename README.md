# Micro Frontends Base
A Micro frontends project integrating Single-spa, Angular and React. 

## Project details

| Application | Directory | Description |
| ------ | ------ | ------ |
| Micro frontends shell | [mf-root/] | Main application to load micro frontends |
| Angular app | [mf-angular/] | an Angular micro frontend |
| React app | [mf-react/] | a React micro frontend |


# Installation and startup

**Shell**
```sh
$ cd mf-root
$ npm i
$ npm start
```
```javascript
// runs on http://localhost:9000
```

**Angular Micro Frontend App**
```sh
$ cd mf-angular
$ npm i
$ npm run serve:single-spa:mf-angular
```
```javascript
// runs on http://localhost:4200
```

**React Micro Frontend App**
```sh
$ cd mf-react
$ npm i
$ npm start
```
```javascript
// runs on http://localhost:8080
```

# Load in browser

Visit [http://localhost:9000](http://localhost:9000)

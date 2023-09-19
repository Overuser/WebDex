import express from 'express';
import fs from 'fs';
// import path from 'path';
import React from 'react';
import ReactDom from 'react-dom/server'
import App from '../pages/App'


const app = express();

app.get('/', (req, res) => {
  fs.readFile("C:/Users/USER/ninja-app/public/index.html", 'utf-8', (error, data) => {
    if (error) {
      console.log(error);
      return res.status(500).send('error happened')
    } 
    return res.send(
      data.replace(
        'div id="root"></div>',
        `div id="root">${ReactDom.renderToString(
          <React.StrictMode>
            <App />
          </React.StrictMode>
        )}</div>`
      )
    )
  })
})

app.use(express.static("C:/Users/USER/ninja-app/public"))

app.listen(5000, () => {
  console.log('listing');
})
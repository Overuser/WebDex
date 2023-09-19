import React from 'react'
import { renderToString } from 'react-dom/server'
import Express from 'express'
import FileSystem from 'fs'
// import { App } from '../pages/App'

const app = Express()

app.use(Express.static("C:/Users/USER/ninja-app/src/pages"))

app.listen(5000, () => {
  FileSystem.readFile("C:/Users/USER/ninja-app/src/pages/App.jsx", "utf-8" , (err, data) => {
    if (!err) {
      console.log(data);
    }
  });
})

app.get('/', (req, res) => {
  res.send(
    renderToString(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )
  )
})


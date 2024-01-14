import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp() {
  return (
    <div>
      <h1>
        Custom app !
      </h1>
    </div>
  )
}

const AnotherElement = (
  <a href="https://google.com" target="_blank"  rel="noreferrer">
    Visit google
  </a>
);

const reactelement = React.createElement (
  'a',
  {href :'http://google.com',target: "_blank"},
  'click me to google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <MyApp />
     <App />

    {AnotherElement}
    {reactelement}
     
  </React.StrictMode>
);

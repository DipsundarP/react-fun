import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "-blank",
  },
  children: "Click me to visit google",
}; 

function MyApp(){
    return(
        <div>
            <h1>Google is very helpful browser</h1>
        </div>
    )
}

const AnotherElement = (
    <a href='https://google.com' target='_blank'>Visit Google</a>
)
const areactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: "_blank"},
    'click to visit google',
    username
)



createRoot(document.getElementById('root')).render(
  
    <App/>
  
)

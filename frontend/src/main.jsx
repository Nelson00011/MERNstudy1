import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import { ChakraProvider } from '@chakra-ui/react'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <ChakraProvider>
//       <App />
//     </ChakraProvider>
//   </StrictMode>,
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      <App />
  
  </React.StrictMode>,
)

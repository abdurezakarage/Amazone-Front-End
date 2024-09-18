import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Dataprovider } from './Component/Dataprovider/Dataprovider.jsx'
import { reducer, initialstate } from './Utility/reducer.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Dataprovider reducer={reducer} initialstate={initialstate}>
      <App />
    </Dataprovider>
  </StrictMode>
);


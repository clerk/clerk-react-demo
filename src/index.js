import React from 'react'
import ReactDOM from 'react-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/index.css'
import App from './App'
import Layout from './components/Layout'
import NoMatch from './components/NoMatch'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
    <React.StrictMode>
        <ClerkProvider frontendApi={process.env.REACT_APP_CLERK_FRONTEND_API}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<App />} />
                    </Route>

                    <Route path="*" element={<NoMatch />} />
                </Routes>
            </BrowserRouter>
        </ClerkProvider>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

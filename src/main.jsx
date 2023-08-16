import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './Shared/Store.js'
import AuthProvider from './Context/AuthProvider.jsx'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store}>
      <AuthProvider>
   <QueryClientProvider client={queryClient}>
      <App />
   </QueryClientProvider>
      </AuthProvider>
    </Provider>
  </React.StrictMode>,
)

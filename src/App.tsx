
import './styles.css'
import '@aws-amplify/ui-react/styles.css';

import { Authenticator, View } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import awsExports from "./aws-exports"
import { Children } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';


Amplify.configure(awsExports)


const ProtectedRoute:React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <Authenticator>
        {
          ({signOut, user}) => (
            <main className='w-[1300px]'>
              { children }
            </main>
          )
        }
      </Authenticator>
  )
}

function App() {

  return (
    <Routes>
      {/* PROTECTED ROUTE */}
      <Route path='/' element={
        <ProtectedRoute>
          <MainPage />
        </ProtectedRoute>
      }/>
    </Routes>
  )
}

export default App

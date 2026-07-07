import { useState } from 'react'
import HomeScreen from './screens/HomeScreen'
import CreateGroupScreen from './screens/CreateGroupScreen'
import SplitBillScreen from './screens/SplitBillScreen'
import ConfirmOrderScreen from './screens/ConfirmOrderScreen'
import './App.css'

function App() {
  const [screen, setScreen] = useState('home')

  return (
    <div className="app">
      {screen === 'home' && <HomeScreen navigate={setScreen} />}
      {screen === 'create' && <CreateGroupScreen navigate={setScreen} />}
      {screen === 'split' && <SplitBillScreen navigate={setScreen} />}
      {screen === 'confirm' && <ConfirmOrderScreen navigate={setScreen} />}
    </div>
  )
}

export default App
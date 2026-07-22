import { useState } from 'react'
import HomeScreen from './screens/HomeScreen'
import CreateGroupScreen from './screens/CreateGroupScreen'
import AddItemsScreen from './screens/AddItemsScreen'
import SplitBillScreen from './screens/SplitBillScreen'
import ConfirmOrderScreen from './screens/ConfirmOrderScreen'
import './App.css'

function App() {
  const [screen, setScreen] = useState('home')
  const [members, setMembers] = useState([
    {
      name: 'Riya',
      avatar: '👩',
      items: [
        { name: '🍕 Margherita Pizza', price: 299 },
        { name: '🥤 Coke', price: 60 },
      ],
    },
    {
      name: 'Arjun',
      avatar: '👨',
      items: [
        { name: '🍔 Chicken Burger', price: 189 },
        { name: '🍟 French Fries', price: 99 },
      ],
    },
  ])

  const handleItemsAdded = ({ name, items }) => {
    setMembers(prev => [...prev, { name, avatar: '🧑', items }])
  }

  return (
    <div className="app">
      {screen === 'home' && <HomeScreen navigate={setScreen} />}
      {screen === 'create' && <CreateGroupScreen navigate={setScreen} />}
      {screen === 'add' && <AddItemsScreen navigate={setScreen} onItemsAdded={handleItemsAdded} />}
      {screen === 'split' && <SplitBillScreen navigate={setScreen} members={members} />}
      {screen === 'confirm' && <ConfirmOrderScreen navigate={setScreen} members={members} />}
    </div>
  )
}

export default App
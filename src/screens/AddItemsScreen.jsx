import { useState } from 'react'

const menuItems = [
  { id: 1, name: 'Margherita Pizza', price: 299, emoji: '🍕' },
  { id: 2, name: 'Chicken Burger', price: 189, emoji: '🍔' },
  { id: 3, name: 'French Fries', price: 99, emoji: '🍟' },
  { id: 4, name: 'Pasta Arrabiata', price: 249, emoji: '🍝' },
  { id: 5, name: 'Coke', price: 60, emoji: '🥤' },
  { id: 6, name: 'Garlic Bread', price: 129, emoji: '🥖' },
  { id: 7, name: 'Chocolate Lava Cake', price: 149, emoji: '🍫' },
  { id: 8, name: 'Veg Supreme Pizza', price: 349, emoji: '🍕' },
]

function AddItemsScreen({ navigate, onItemsAdded }) {
  const [cart, setCart] = useState({})
  const [name, setName] = useState('')

  const addItem = (item) => {
    setCart(prev => ({
      ...prev,
      [item.id]: { ...item, qty: (prev[item.id]?.qty || 0) + 1 }
    }))
  }

  const removeItem = (item) => {
    setCart(prev => {
      const updated = { ...prev }
      if (updated[item.id]?.qty > 1) {
        updated[item.id] = { ...updated[item.id], qty: updated[item.id].qty - 1 }
      } else {
        delete updated[item.id]
      }
      return updated
    })
  }

  const totalAmount = Object.values(cart).reduce((sum, item) => sum + item.price * item.qty, 0)

  const handleDone = () => {
    if (!name) return alert('Please enter your name!')
    if (Object.keys(cart).length === 0) return alert('Please add at least one item!')
    const items = Object.values(cart).map(item => ({
      name: `${item.emoji} ${item.name} x${item.qty}`,
      price: item.price * item.qty
    }))
    onItemsAdded({ name, items, total: totalAmount })
    navigate('split')
  }

  return (
    <div className="screen">
      <button
        onClick={() => navigate('create')}
        style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', marginBottom: '16px' }}
      >
        ←
      </button>

      <h1 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '4px' }}>Add Your Items 🛒</h1>
      <p style={{ color: '#666', fontSize: '14px', marginBottom: '20px' }}>Domino's Pizza • You pay for what you pick</p>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ fontSize: '13px', fontWeight: '600', color: '#444', display: 'block', marginBottom: '6px' }}>
          Your Name
        </label>
        <input
          type="text"
          placeholder="e.g. Riya"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: '100%', padding: '12px', borderRadius: '10px',
            border: '1.5px solid #ddd', fontSize: '15px', outline: 'none'
          }}
        />
      </div>

      <p style={{ fontWeight: '700', fontSize: '15px', marginBottom: '12px' }}>Menu</p>

      {menuItems.map(item => (
        <div key={item.id} style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '14px 16px', border: '1.5px solid #eee', borderRadius: '12px', marginBottom: '10px'
        }}>
          <div>
            <p style={{ fontWeight: '600', fontSize: '14px' }}>{item.emoji} {item.name}</p>
            <p style={{ fontSize: '13px', color: '#fc8019', fontWeight: '600' }}>₹{item.price}</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {cart[item.id] ? (
              <>
                <button onClick={() => removeItem(item)} style={{
                  width: '28px', height: '28px', borderRadius: '50%', border: '2px solid #fc8019',
                  background: 'white', color: '#fc8019', fontSize: '16px', cursor: 'pointer', fontWeight: '700'
                }}>−</button>
                <span style={{ fontWeight: '700', minWidth: '16px', textAlign: 'center' }}>
                  {cart[item.id].qty}
                </span>
              </>
            ) : null}
            <button onClick={() => addItem(item)} style={{
              width: '28px', height: '28px', borderRadius: '50%', border: 'none',
              background: '#fc8019', color: 'white', fontSize: '16px', cursor: 'pointer', fontWeight: '700'
            }}>+</button>
          </div>
        </div>
      ))}

      {totalAmount > 0 && (
        <div style={{
          position: 'sticky', bottom: '20px', background: 'white',
          borderRadius: '12px', padding: '16px', boxShadow: '0 -4px 20px rgba(0,0,0,0.1)',
          marginTop: '16px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ fontWeight: '700', fontSize: '15px' }}>Your Total</p>
              <p style={{ color: '#666', fontSize: '13px' }}>{Object.values(cart).reduce((s, i) => s + i.qty, 0)} items</p>
            </div>
            <button className="btn-primary" style={{ width: 'auto', padding: '12px 24px' }} onClick={handleDone}>
              Done ₹{totalAmount}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AddItemsScreen
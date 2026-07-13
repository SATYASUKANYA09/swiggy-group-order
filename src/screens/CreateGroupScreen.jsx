import { useState } from 'react'

function CreateGroupScreen({ navigate }) {
  const [groupName, setGroupName] = useState('')
  const [restaurant, setRestaurant] = useState('')
  const [timeLimit, setTimeLimit] = useState('15')
  const [linkGenerated, setLinkGenerated] = useState(false)

  const handleCreate = () => {
    if (groupName && restaurant) {
      setLinkGenerated(true)
    }
  }

  return (
    <div className="screen">
      <button
        onClick={() => navigate('home')}
        style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', marginBottom: '16px' }}
      >
        ←
      </button>

      <h1 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '6px' }}>
        Create Group Order 👥
      </h1>
      <p style={{ color: '#666', fontSize: '14px', marginBottom: '28px' }}>
        Set up your group and share the link with friends
      </p>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ fontSize: '13px', fontWeight: '600', color: '#444', display: 'block', marginBottom: '6px' }}>
          Group Name
        </label>
        <input
          type="text"
          placeholder="e.g. Office Lunch Squad"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          style={{
            width: '100%', padding: '12px', borderRadius: '10px',
            border: '1.5px solid #ddd', fontSize: '15px', outline: 'none'
          }}
        />
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ fontSize: '13px', fontWeight: '600', color: '#444', display: 'block', marginBottom: '6px' }}>
          Restaurant
        </label>
        <input
          type="text"
          placeholder="e.g. Domino's Pizza"
          value={restaurant}
          onChange={(e) => setRestaurant(e.target.value)}
          style={{
            width: '100%', padding: '12px', borderRadius: '10px',
            border: '1.5px solid #ddd', fontSize: '15px', outline: 'none'
          }}
        />
      </div>

      <div style={{ marginBottom: '28px' }}>
        <label style={{ fontSize: '13px', fontWeight: '600', color: '#444', display: 'block', marginBottom: '6px' }}>
          Time limit for adding items
        </label>
        <select
          value={timeLimit}
          onChange={(e) => setTimeLimit(e.target.value)}
          style={{
            width: '100%', padding: '12px', borderRadius: '10px',
            border: '1.5px solid #ddd', fontSize: '15px', outline: 'none', background: 'white'
          }}
        >
          <option value="10">10 minutes</option>
          <option value="15">15 minutes</option>
          <option value="20">20 minutes</option>
          <option val ue="30">30 minutes</option>
        </select>
      </div>

      {!linkGenerated ? (
        <button className="btn-primary" onClick={handleCreate}>
          Generate Group Link
        </button>
      ) : (
        <div>
          <div style={{
            background: '#f0fdf4', border: '1.5px solid #86efac', borderRadius: '12px',
            padding: '16px', marginBottom: '16px'
          }}>
            <p style={{ fontSize: '13px', color: '#16a34a', fontWeight: '600', marginBottom: '6px' }}>
              ✅ Group link ready!
            </p>
            <p style={{ fontSize: '13px', color: '#444', wordBreak: 'break-all' }}>
              swiggy.com/group/join/{groupName.toLowerCase().replace(/ /g, '-')}-{Math.floor(Math.random() * 9000) + 1000}
            </p>
          </div>
          <button className="btn-primary" onClick={() => navigate('split')}>
            View Group Cart →
          </button>
        </div>
      )}
    </div>
  )
}

export default CreateGroupScreen
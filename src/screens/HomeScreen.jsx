function HomeScreen({ navigate }) {
  return (
    <div className="screen">
      <div style={{ marginBottom: '32px' }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/1/12/Swiggy_logo.svg"
          alt="Swiggy"
          style={{ width: '100px', marginBottom: '24px' }}
        />
        <h1 style={{ fontSize: '26px', fontWeight: '700', color: '#1a1a1a', marginBottom: '8px' }}>
          Order together,<br />pay separately 🍕
        </h1>
        <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.5' }}>
          Start a group order, invite friends, and everyone pays for their own items. No more chasing people for money.
        </p>
      </div>

      <div style={{ background: '#fff5ee', borderRadius: '16px', padding: '20px', marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
          <span style={{ fontSize: '24px', marginRight: '12px' }}>👥</span>
          <div>
            <p style={{ fontWeight: '600', color: '#1a1a1a' }}>Create a group</p>
            <p style={{ fontSize: '13px', color: '#666' }}>Share a link with friends</p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
          <span style={{ fontSize: '24px', marginRight: '12px' }}>🛒</span>
          <div>
            <p style={{ fontWeight: '600', color: '#1a1a1a' }}>Everyone adds their items</p>
            <p style={{ fontSize: '13px', color: '#666' }}>From the same restaurant</p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ fontSize: '24px', marginRight: '12px' }}>💳</span>
          <div>
            <p style={{ fontWeight: '600', color: '#1a1a1a' }}>Pay individually</p>
            <p style={{ fontSize: '13px', color: '#666' }}>No manual splitting needed</p>
          </div>
        </div>
      </div>

      <button className="btn-primary" onClick={() => navigate('create')}>
        Start Group Order
      </button>
      <button className="btn-secondary" onClick={() => navigate('split')}>
        Join Existing Group
      </button>
    </div>
  )
}

export default HomeScreen
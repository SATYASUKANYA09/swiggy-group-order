function ConfirmOrderScreen({ navigate }) {
  const members = [
    { name: 'Riya', avatar: '👩', amount: 372 },
    { name: 'Arjun', avatar: '👨', amount: 301 },
    { name: 'Sneha', avatar: '👩‍💻', amount: 262 },
  ]

  return (
    <div className="screen">
      <button
        onClick={() => navigate('split')}
        style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', marginBottom: '16px' }}
      >
        ←
      </button>

      <h1 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '4px' }}>
        Confirm Order ✅
      </h1>
      <p style={{ color: '#666', fontSize: '14px', marginBottom: '24px' }}>
        Everyone pays their own share
      </p>

      {/* Delivery address */}
      <div style={{
        border: '1.5px solid #eee', borderRadius: '12px',
        padding: '16px', marginBottom: '16px'
      }}>
        <p style={{ fontWeight: '600', fontSize: '14px', marginBottom: '6px' }}>📍 Delivery Address</p>
        <p style={{ fontSize: '13px', color: '#666' }}>Room 204, Sunrise Hostel, Madhapur, Hyderabad — 500081</p>
        <p style={{ fontSize: '12px', color: '#fc8019', marginTop: '6px' }}>Estimated delivery: 30-35 mins</p>
      </div>

      {/* Restaurant */}
      <div style={{
        border: '1.5px solid #eee', borderRadius: '12px',
        padding: '16px', marginBottom: '24px'
      }}>
        <p style={{ fontWeight: '600', fontSize: '14px', marginBottom: '6px' }}>🍕 Domino's Pizza</p>
        <p style={{ fontSize: '13px', color: '#666' }}>Madhapur Branch • 8 items total</p>
      </div>

      {/* Payment breakdown */}
      <p style={{ fontWeight: '700', fontSize: '15px', marginBottom: '12px' }}>Payment Summary</p>
      {members.map((member, index) => (
        <div key={index} style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '14px 16px', border: '1.5px solid #eee', borderRadius: '12px', marginBottom: '10px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '26px', marginRight: '10px' }}>{member.avatar}</span>
            <div>
              <p style={{ fontWeight: '600', fontSize: '14px' }}>{member.name}</p>
              <p style={{ fontSize: '12px', color: '#666' }}>Paying individually</p>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontWeight: '700', color: '#fc8019', fontSize: '15px' }}>₹{member.amount}</p>
            <p style={{ fontSize: '11px', color: '#16a34a' }}>✓ Ready to pay</p>
          </div>
        </div>
      ))}

      {/* Total */}
      <div style={{
        background: '#f9f9f9', borderRadius: '12px',
        padding: '16px', marginBottom: '24px', marginTop: '8px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p style={{ fontWeight: '700', fontSize: '15px' }}>Total Order Value</p>
          <p style={{ fontWeight: '700', fontSize: '15px', color: '#fc8019' }}>₹935</p>
        </div>
        <p style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>Split across 3 people</p>
      </div>

      <button className="btn-primary" onClick={() => navigate('home')}>
        Place Group Order 🎉
      </button>
    </div>
  )
}

export default ConfirmOrderScreen
function ConfirmOrderScreen({ navigate, members }) {
  const deliveryCharge = 40
  const perPersonDelivery = Math.round(deliveryCharge / members.length)
  const getTotal = (items) => items.reduce((sum, item) => sum + item.price, 0)
  const grandTotal = members.reduce((sum, m) => sum + getTotal(m.items), 0) + deliveryCharge

  return (
    <div className="screen">
      <button
        onClick={() => navigate('split')}
        style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', marginBottom: '16px' }}
      >
        ←
      </button>

      <h1 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '4px' }}>Confirm Order ✅</h1>
      <p style={{ color: '#666', fontSize: '14px', marginBottom: '24px' }}>Everyone pays their own share</p>

      <div style={{ border: '1.5px solid #eee', borderRadius: '12px', padding: '16px', marginBottom: '16px' }}>
        <p style={{ fontWeight: '600', fontSize: '14px', marginBottom: '6px' }}>📍 Delivery Address</p>
        <p style={{ fontSize: '13px', color: '#666' }}>Room 204, Sunrise Hostel, Madhapur, Hyderabad — 500081</p>
        <p style={{ fontSize: '12px', color: '#fc8019', marginTop: '6px' }}>Estimated delivery: 30-35 mins</p>
      </div>

      <div style={{ border: '1.5px solid #eee', borderRadius: '12px', padding: '16px', marginBottom: '24px' }}>
        <p style={{ fontWeight: '600', fontSize: '14px', marginBottom: '6px' }}>🍕 Domino's Pizza</p>
        <p style={{ fontSize: '13px', color: '#666' }}>{members.length} members • {members.reduce((s, m) => s + m.items.length, 0)} items total</p>
      </div>

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
            <p style={{ fontWeight: '700', color: '#fc8019', fontSize: '15px' }}>₹{getTotal(member.items) + perPersonDelivery}</p>
            <p style={{ fontSize: '11px', color: '#16a34a' }}>✓ Ready to pay</p>
          </div>
        </div>
      ))}

      <div style={{ background: '#f9f9f9', borderRadius: '12px', padding: '16px', marginBottom: '24px', marginTop: '8px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p style={{ fontWeight: '700', fontSize: '15px' }}>Grand Total</p>
          <p style={{ fontWeight: '700', fontSize: '15px', color: '#fc8019' }}>₹{grandTotal}</p>
        </div>
        <p style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>Split across {members.length} people</p>
      </div>

      <button className="btn-primary" onClick={() => navigate('home')}>
        Place Group Order 🎉
      </button>
    </div>
  )
}

export default ConfirmOrderScreen
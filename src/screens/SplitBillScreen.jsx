import { useState } from 'react'

function SplitBillScreen({ navigate, members }) {
  const [expandedMember, setExpandedMember] = useState(null)

  const deliveryCharge = 40
  const perPersonDelivery = Math.round(deliveryCharge / members.length)
  const getTotal = (items) => items.reduce((sum, item) => sum + item.price, 0)
  const grandTotal = members.reduce((sum, m) => sum + getTotal(m.items), 0) + deliveryCharge

  return (
    <div className="screen">
      <button
        onClick={() => navigate('add')}
        style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', marginBottom: '16px' }}
      >
        ←
      </button>

      <h1 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '4px' }}>Group Cart 🛒</h1>
      <p style={{ color: '#666', fontSize: '14px', marginBottom: '24px' }}>
        {members.length} members • Domino's Pizza • 8 mins left
      </p>

      <div style={{
        background: '#fff5ee', border: '1.5px solid #fc8019', borderRadius: '12px',
        padding: '12px 16px', marginBottom: '24px', display: 'flex', alignItems: 'center'
      }}>
        <span style={{ fontSize: '20px', marginRight: '10px' }}>⏱️</span>
        <div>
          <p style={{ fontWeight: '600', fontSize: '14px', color: '#fc8019' }}>Order closes in 8 minutes</p>
          <p style={{ fontSize: '12px', color: '#666' }}>Waiting for everyone to add their items</p>
        </div>
      </div>

      {members.map((member, index) => (
        <div
          key={index}
          style={{ border: '1.5px solid #eee', borderRadius: '12px', padding: '14px 16px', marginBottom: '12px', cursor: 'pointer' }}
          onClick={() => setExpandedMember(expandedMember === index ? null : index)}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: '28px', marginRight: '10px' }}>{member.avatar}</span>
              <div>
                <p style={{ fontWeight: '600', fontSize: '15px' }}>{member.name}</p>
                <p style={{ fontSize: '12px', color: '#666' }}>{member.items.length} items</p>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontWeight: '700', color: '#fc8019' }}>₹{getTotal(member.items) + perPersonDelivery}</p>
              <p style={{ fontSize: '11px', color: '#999' }}>incl. delivery</p>
            </div>
          </div>

          {expandedMember === index && (
            <div style={{ marginTop: '12px', borderTop: '1px solid #f0f0f0', paddingTop: '12px' }}>
              {member.items.map((item, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <p style={{ fontSize: '13px', color: '#444' }}>{item.name}</p>
                  <p style={{ fontSize: '13px', fontWeight: '600' }}>₹{item.price}</p>
                </div>
              ))}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', paddingTop: '8px', borderTop: '1px dashed #eee' }}>
                <p style={{ fontSize: '13px', color: '#666' }}>Delivery share</p>
                <p style={{ fontSize: '13px' }}>₹{perPersonDelivery}</p>
              </div>
            </div>
          )}
        </div>
      ))}

      <div style={{ background: '#f9f9f9', borderRadius: '12px', padding: '16px', marginBottom: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
          <p style={{ color: '#666', fontSize: '14px' }}>Subtotal</p>
          <p style={{ fontSize: '14px' }}>₹{grandTotal - deliveryCharge}</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
          <p style={{ color: '#666', fontSize: '14px' }}>Delivery charge</p>
          <p style={{ fontSize: '14px' }}>₹{deliveryCharge}</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #eee', paddingTop: '10px', marginTop: '6px' }}>
          <p style={{ fontWeight: '700', fontSize: '15px' }}>Grand Total</p>
          <p style={{ fontWeight: '700', fontSize: '15px', color: '#fc8019' }}>₹{grandTotal}</p>
        </div>
      </div>

      <button className="btn-primary" onClick={() => navigate('confirm')}>
        Proceed to Pay →
      </button>
    </div>
  )
}

export default SplitBillScreen
import React from 'react'
import './AddressTab.scss'

function AddressTab({address, selected, handleShouldEdit}) {
  return (
    <div className="addressTab">
      <div className="addressLine1">
        <p className="addressUsername">{address.name}</p>
        <p className="addressPhnNumber">{address.phoneNumber}</p>
      </div>
      <div>
        <p className="addressLine2">
          {
            `${address.address}, ${address.landmark}, ${address.locality}, ${address.district}, ${address.state}, ${address.pincode}`
          }
        </p>
      </div>
      {selected && <button className="updateButton" onClick = {handleShouldEdit}> Edit Address </button>}
    </div>
  )
}

export default AddressTab

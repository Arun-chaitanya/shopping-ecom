import React, { useEffect, useState } from 'react'
import './AddressForm.scss'
import { TextField } from '@material-ui/core';

function AddressForm(props) {
  const [phoneNo,setPhoneNo] = useState("")
  const [pincode,setPincode] = useState("")
  const [name, setName] = useState("")
  const [locality, setLocality] = useState("")
  const [address, setAddress] = useState("")
  const [district, setDistrict] = useState("")
  const [landmark, setLandmark] = useState("")
  const [state,setStateUN] = useState("")
  const [altPhnNumber, setAltPhnNumber] = useState("")

  useEffect(()=>{
    if(props.address){
      setPhoneNo(props.phoneNumber)
      setPincode(props.pincode)
      setName(props.name)
      setLocality(props.locality)
      setAddress(props.address)
      setDistrict(props.district)
      setLandmark(props.landmark)
      setStateUN(props.state)
      setAltPhnNumber(props.altPhnNumber)
    }
  },[])
  const onHandlePhoneNoChange = (e) => {
    const phoneno = e.target.value;
    console.log(e.target.id)
    const regexp = /^[0-9\b]+$/;
    if(phoneno ==="" || regexp.test(phoneno)){
      if(e.target.id === "phoneNo") setPhoneNo(phoneno)
      else if(e.target.id === "altPhoneNo") setAltPhnNumber(phoneno)
    }
  }

  const onHandlePincodeChange = (e) => {
    const pin = e.target.value;
    const regexp = /^[0-9\b]+$/;
    if(pin ==="" || regexp.test(pin)){
      setPincode(pin)
    }
  }

  const onHandleTextChange = (e) => {
    const text = e.target.value;
    const id = e.target.id;
    console.log(id, text)
    switch(id){
      case "name":
        setName(text);
        break;
      case "locality":
        setLocality(text)
        break;
      case "address":
        setAddress(text);
        break;
      case "district":
        setDistrict(text);
        break;
      case "state":
        setStateUN(text);
        break;
      case "landmark":
        setLandmark(text);
        break;
      default:
        break;
    }
  }
  const changedAddress = {name, phoneNumber: phoneNo, pincode, locality, address, district, state, landmark, altPhnNumber}
  return (
    <div className="addressForm">
      <div className="addressFormRow">
        <TextField 
          id = "name"
          label="Name"
          autoFocus={true}
          variant="outlined"
          placeholder="eg. Arun Chaitanya"
          className="addressUserName textfield"
          size="small"
          fullWidth={true}
          onChange = {onHandleTextChange}
          value = {name}
        />
        <TextField 
          id = "phoneNo"
          label="Phone Number"
          variant="outlined"
          placeholder="eg. 6245345344"
          className="addressUserPhnNumber textfield"
          size="small"
          fullWidth={true}
          onChange = {onHandlePhoneNoChange}
          value = {phoneNo}
        />
      </div>

      <div className="addressFormRow">
        <TextField 
          label="PINCODE"
          variant="outlined"
          placeholder="eg. 522006"
          className="addressUserPinCode textfield"
          size="small"
          fullWidth={true}
          onChange = {onHandlePincodeChange}
          value = {pincode}
        />
        <TextField 
          id = "locality"
          label="Locality/Post Office"
          variant="outlined"
          placeholder="eg. Pattabhipuram"
          className="addressUserPostOffice textfield"
          size="small"
          fullWidth={true}
          onChange = {onHandleTextChange}
          value = {locality}
        />
      </div>

      <div className="addressFormRow">
        <TextField  
          id = "address"
          label="Address(House Number and Street)"
          variant="outlined"
          placeholder="eg. Door Number 007, Kormangla"
          className="addressUserAddress"
          fullWidth={true}
          size="small"
          multiline={true}
          rows="3"
          rowsMax="6"
          onChange = {onHandleTextChange}
          value = {address}
        />
      </div>

      <div className="addressFormRow">
        <TextField 
          id = "district"
          label="District/City"
          variant="outlined"
          placeholder="eg. Bangalore"
          className="addressUserDistrict textfield"
          size="small"
          fullWidth={true}
          onChange = {onHandleTextChange}
          value = {district}
        />
        <TextField 
          id = "state"
          label="State/Union Territory"
          variant="outlined"
          placeholder="eg. Karnataka"
          className="addressUserState textfield"
          size="small"
          fullWidth={true}
          onChange = {onHandleTextChange}
          value = {state}
        />
      </div>

      <div className="addressFormRow">
        <TextField 
          id = "landmark"
          label="Landmark (Optional)"
          variant="outlined"
          placeholder="eg. Besides Central Mall"
          className="addressUserLandmark textfield"
          size="small"
          fullWidth={true}
          onChange = {onHandleTextChange}
          value = {landmark}
        />
        <TextField 
          id = "altPhoneNo"
          label="Alternate Contact Number"
          variant="outlined"
          placeholder="eg. 9563545345"
          className="addressUserAltPhnNo textfield"
          size="small"
          fullWidth={true}
          onChange = {onHandlePhoneNoChange}
          value = {altPhnNumber}
        />
      </div>
      <div>
        <button onClick={() => {props.shouldUpdate(changedAddress); props.handleShouldEdit();}} className="updateAddress">{props.isNewAddress ? "Add new address" : "Update Address"}</button>
        <button onClick={props.handleShouldEdit} className="cancelUpdate">Cancel</button>
      </div>
    </div>
  )
}

export default AddressForm

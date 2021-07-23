import React,{useState,useEffect} from 'react';
import "./Address.scss"
import AddressTab from './AddressTab/AddressTab';
import AddressForm from './AddressForm/AddressForm';

function Address() {
    const [addressSelected, setAddressSelected] = useState()
    const [shouldEdit,setShouldEdit] = useState(false)
    const [isNewAddress, setIsNewAddress] = useState(false) 
    const [addressesList,setAddressesList] = useState([
        {
            name: "arun chaitanya",
            phoneNumber: "9932507987",
            pincode: "522006",
            locality: "Venkataramana Colony",
            address: "Door Number: 16-45-26/7, Pattabhipuram",
            district: "Guntur",
            state: "Andhra Pradesh",
            landmark: "Beside Ward Sachivalayam, Venkataramana Colony",
            altPhnNumber: "7464567334"
        },
        {
            name: "arun chaitanya",
            phoneNumber: "9932507987",
            pincode: "522006",
            locality: "Venkataramana Colony",
            address: "Door Number: 16-45-26/7, Pattabhipuram",
            district: "Guntur",
            state: "Andhra Pradesh",
            landmark: "Beside Ward Sachivalayam, Venkataramana Colony",
            altPhnNumber: "7464567334"
        },
        {
            name: "arun chaitanya",
            phoneNumber: "9932507987",
            pincode: "522006",
            locality: "Venkataramana Colony",
            address: "Door Number: 16-45-26/7, Pattabhipuram",
            district: "Guntur",
            state: "Andhra Pradesh",
            landmark: "Beside Ward Sachivalayam, Venkataramana Colony",
            altPhnNumber: "7464567334"
        },
    ])
    
    const handleRadioBtnChange = (index) => {
        console.log(index)
        setAddressSelected(index)
        setShouldEdit(false)
    }

    const handleShouldEdit = () => {
        if(isNewAddress){
            setIsNewAddress(false)
        }
        setShouldEdit(!shouldEdit)
    }

    const editNewAddress = () => {
        setShouldEdit(true)
        setIsNewAddress(true)
        setAddressSelected()
    }

    const shouldUpdate =(updatedAddress) => {
        console.log(updatedAddress)
        const dupAddressList = [...addressesList];
        if(isNewAddress){
            dupAddressList.unshift(updatedAddress)
        }
        else{
            dupAddressList[addressSelected] = updatedAddress;
        }
        setAddressesList(dupAddressList);
    }

    return (
        <div className="addressList">
            <div className="addNewAddress">
                <p onClick={editNewAddress}>Add new address</p>
                {
                    (shouldEdit && isNewAddress) && <div className="newAddressForm">
                        <AddressForm handleShouldEdit={handleShouldEdit} isNewAddress={isNewAddress} shouldUpdate={shouldUpdate}/>
                    </div>
                }
            </div>
            {
                addressesList.map((address,index)=> (
                    <div className="addressDetailsTab" key = {index}>
                        <label className="addressLabel">
                            <input className="addressSelectRadioBtn" type="radio" name="addressSelect" onChange={() => handleRadioBtnChange(index)}/>
                            {(shouldEdit && (index === addressSelected)) ? 
                                <AddressForm {...address} handleShouldEdit={handleShouldEdit} shouldUpdate={shouldUpdate}/> :
                                <AddressTab address={address} selected = {index === addressSelected ? true : false} handleShouldEdit={handleShouldEdit} />
                            }
                        </label>
                    </div>    
                ))
            }
        </div>
    )
}

export default Address
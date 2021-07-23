import React from 'react';
import "./ItemModal.css"

class ItemModal extends React.Component {
  itemModalRef = React.createRef()
  itemModalContentRef = React.createRef()

  closeModal = (e) => {
    if (e.target === this.itemModalRef.current) {
      this.props.closeModal()
    }
  }
  render(){
    return (
      <div className="itemModal" onClick={this.closeModal} ref={this.itemModalRef}>
        <div className="itemModal__Content" ref={this.itemModalContentRef}>
          <img className="itemModal__img" src={this.props.item.src} alt=""/>
          <div className="itemModal__ContentMatter">
            <h2 className="itemModal__ItemName">{this.props.item.itemName}</h2>
            <p className="itemModal__description">{this.props.item.description}</p>
            <p className="itemModal__price">{this.props.item.price}</p>
          </div>
        </div>
      </div>
    )
  }  
}

export default ItemModal

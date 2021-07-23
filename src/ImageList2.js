import React from 'react';
import "./ImageList.css"

class ImageList extends React.Component {
    imageListRef = React.createRef()
    state = {
        isScrolling: true    
    }
    id=()=>{}

    scrollDiv = () => {
        let container = this.imageListRef.current
        container.scrollBy(2,0);
        if((container.scrollLeft+container.clientWidth) === container.scrollWidth){
            this.setState(() => ({isScrolling : false}), () => {this.scrollList(this.state.isScrolling)})
        }
    }

    scrollList = (condition) => {
        let container = this.imageListRef.current
        if(condition){
            this.id = setInterval(this.scrollDiv, 10);
        }
        else clearInterval(this.id);   
        if((container.scrollLeft+container.clientWidth) === container.scrollWidth){
            clearInterval(this.id);    
        }
    }
    toggleScroll = () => {
        this.setState((prevState) => ({isScrolling : !(prevState.isScrolling)}), () => {this.scrollList(this.state.isScrolling)})
    }
    componentDidMount(){
        this.scrollList(this.state.isScrolling);
    }

    componentWillUnmount(){
        clearInterval(this.id)
    }

    render(){
        let handleAnimation = this.state.isScrolling ? "walk 1.0s steps(12) infinite" : "stop_walk 1.0s steps(1) infinite";
        return (
            <div className="container">
                <div className="header"></div>
                <div className="imageList" ref={this.imageListRef}>
                    <img src="https://i.pinimg.com/originals/83/f9/37/83f937b69f30bb886ab8a03390da6771.jpg" alt=""/>
                    <img src="https://i.pinimg.com/originals/83/f9/37/83f937b69f30bb886ab8a03390da6771.jpg" alt=""/>
                    <img src="https://i.pinimg.com/originals/83/f9/37/83f937b69f30bb886ab8a03390da6771.jpg" alt=""/>
                    <img src="https://i.pinimg.com/originals/83/f9/37/83f937b69f30bb886ab8a03390da6771.jpg" alt=""/>
                    <img src="https://i.pinimg.com/originals/83/f9/37/83f937b69f30bb886ab8a03390da6771.jpg" alt=""/>
                    <img src="https://i.pinimg.com/originals/83/f9/37/83f937b69f30bb886ab8a03390da6771.jpg" alt=""/>
                    <img src="https://i.pinimg.com/originals/83/f9/37/83f937b69f30bb886ab8a03390da6771.jpg" alt=""/>
                    <img src="https://i.pinimg.com/originals/83/f9/37/83f937b69f30bb886ab8a03390da6771.jpg" alt=""/>
                    <img src="https://i.pinimg.com/originals/83/f9/37/83f937b69f30bb886ab8a03390da6771.jpg" alt=""/>
                    <img src="https://i.pinimg.com/originals/83/f9/37/83f937b69f30bb886ab8a03390da6771.jpg" alt=""/>
                    <img src="https://i.pinimg.com/originals/83/f9/37/83f937b69f30bb886ab8a03390da6771.jpg" alt=""/>
                </div>
                
                <div className = "scrolling_button" style={{animation:handleAnimation}} onClick={this.toggleScroll}></div>
                <p>{this.state.isScrolling?"scrolling":"stopped"}</p>
            </div>
            
        )
    }
}

export default ImageList
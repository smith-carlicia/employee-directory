import React from "react";

class Text extends React.Component{
    state={ 
        count:0
    }
    render(){
        return(
            <div>
                <h1 onClick={()=>{this.setState({count: this.state.count+1})}}>{this.props.texttoshow}</h1>
                <p>{this.state.count}</p>
            </div>
        )
    }
}

export default Text;
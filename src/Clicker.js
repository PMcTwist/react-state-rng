import React, { Component } from 'react';

class Clicker extends Component {
    // Instance constructor
    constructor(props) {
        super(props);
        this.state = { num: 1 };
        this.button_Clicked = this.button_Clicked.bind(this);
    }

    // Class functions
    button_Clicked(event) {
        let new_num = Math.floor(Math.random() * 11)
        this.setState({ num: new_num });
    }

    // Render the returned component 
    render() {
        return (
            <div>
                <h1>Number: {this.state.num}</h1>
                {this.state.num === 7 
                    ? <h2>Ya got 7!</h2>
                    : <button onClick={this.button_Clicked}>Click me!</button>}
            </div>
        )
    }
};

// Export the component from the file
export default Clicker;
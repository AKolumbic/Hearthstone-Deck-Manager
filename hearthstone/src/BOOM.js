import React, { Component } from 'react';
import axios from 'axios';

class BOOM extends Component {
    state = { cards: [] }
    
    componentDidMount() {
        axios.get('http://localhost:8888/boom')
            .then(boom => {
                console.log("Response: ", boom);
                this.setState({ cards: boom.data.body[0] });
            })
            .catch(err => {
                console.log({ errorMessage: err });
            });
    };

    render() { 
        return (
            <div>
                {console.log("STATE: ", this.state.cards)}
                <div>
                    <img src={this.state.cards.img} alt="card_img" />
                    <h1>{this.state.cards.name}</h1>
                    <h5>Cost: {this.state.cards.cost} / Attack: {this.state.cards.attack} / Health: {this.state.cards.health}</h5>
                </div>
            </div>
        );
    }
}
 
export default BOOM;
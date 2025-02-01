import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    handlePositive = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    handleNegative = () => {
        this.setState({
            count: this.state.count - 1
        });
    };

    render() {
        return (
            <div className="counter center">
                <h1 className="counter__title">Counter App</h1>
                <div className="card center">
                    <h2 className="card__title">Count: {this.state.count}</h2>
                    <div className="card__btns">
                        <button className="btn card__btn" onClick={this.handlePositive} disabled={this.state.count === 5 ? true: false}>+</button>
                        <button className="btn card__btn" onClick={this.handleNegative} disabled={this.state.count === -5 ? true: false}>-</button>
                        <button className="btn card__btn" onClick={() => this.setState({ count: 0 })}>0</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Counter;

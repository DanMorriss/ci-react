import React, { Component } from 'react'
import MethodsAsPropsChild from './MethodsAsPropsChild'

class MethodsAsPropsParent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false,
        }
    }

    // handleSignIn = () => {
    //     this.setState({
    //         isLoggedIn: true,
    //     })
    //     console.log(this)
    // }

    // handleSignOut = () => {
    //     this.setState({
    //         isLoggedIn: false,
    //     })
    //     console.log(this)
    // }

    toggleIsLoggedIn = () => {
        this.setState((prevState) => ({
            isLoggedIn: !prevState.isLoggedIn,
        }));
    };

    render() {
        return (
            <div>
                <MethodsAsPropsChild 
                    isLoggedIn={this.state.isLoggedIn}
                    handleSignIn={this.handleSignIn}
                    handleSignOut={this.handleSignOut}
                    toggleIsLoggedIn={this.toggleIsLoggedIn}
                />
            </div>
        )
    }
}

export default MethodsAsPropsParent

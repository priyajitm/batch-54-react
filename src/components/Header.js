import React, {Component} from 'react'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            greet: 'Hello from Header'
        }
        console.log('constructor method called')
    }

    // static getDerivedStateFromProps(props, state) {
    //     console.log('getderived method called')
       
        
    // }

    componentDidMount() {
        console.log('componentdidmount called')
    }

    render () {
        console.log('render method called')
        return (
            <p>{this.state.greet}</p>
        )
    }
}

export default Header
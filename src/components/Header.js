import React, {Component} from 'react'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: this.props.count,
            someVal : 'data from api'
        }
       
    }

    componentDidMount() {
        console.log('component did mount called')
        const data = 'data from apis'
        // this.state.someVal = data
        this.setState({
            count: this.props.count,
            someVal: data
        })
    }



    // static getDerivedStateFromProps(props, state) {
    //   if(props.count !== state.count) {
    //     state.count = props.count
    //   } else {
    //     return null
    //   }
    // }

  

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('component should update called')
    //     if (this.state.someVal !== nextState.someVal) {
    //         return true
    //     } else {
    //         return false
    //     }
    // }

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log('getSnapshotBeforeUpdate called')
    //     console.log(prevProps)
    //     console.log(prevState)
    //     return null
    // }

    // componentDidUpdate() {
    //     console.log('component di update called')
    // }


    render () {
        console.log('render method called')
        return (
            <>
            <p>{this.state.count}</p>
            <p>{this.state.someVal}</p>
            </>
            
        )
    }
}

export default Header


import React, {Component} from 'react';

class Lifecycle extends Component {
    //The constructor fires first during when in the components lifecycle, to initialize state and props for the component
    constructor(){
        super()
        this.state = {
            car: 'Testa Model S'
        }
    }

    //componentDidMount will fire after the initial render on the screen. This method is great for grabbing data you need on the component right away.
    componentDidMount(){
        this.setState({car: 'Geo Metro'})
        console.log('componentDidMount Fired')
    }

    //componentDidUpdate will not fire after the initial render, but on each subsequent re-render. This is part of the updation phase of the component lifecycle.
    componentDidUpdate(){
        console.log('componentDidUpdate Fired')
    }

    //render will fire during the 'mounting' phase of the components lifecycle. Mounting refers to the components display being 'mounted' onto the viewport. Render will also re-fire after any state or props change.
    render(){
        console.log('Render Fired')
        return(
            <div>Lifecycle Method Examples</div>
        )
    }
}

export default Lifecycle;
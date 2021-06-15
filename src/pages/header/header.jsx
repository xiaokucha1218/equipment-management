import { Component } from 'react';
import store from '../../store/index';
import "./header.scss";
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
    }
    componentDidMount(){
        store.subscribe(this.changeStore)
   }
    changeStore=()=>{
        this.setState(store.getState());
    }
    render() { 
        return <div id="header-container">
        <header>{this.state.title}</header>
    </div>
    }
}
 
export default Header;
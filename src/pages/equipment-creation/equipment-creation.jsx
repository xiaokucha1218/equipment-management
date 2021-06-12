import { Component } from 'react';
import EquipmentDetail from '../equipment-detail/equipment-detail';
class EquipmentCreation extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <EquipmentDetail/>
        </div> );
    }
}
 
export default EquipmentCreation;
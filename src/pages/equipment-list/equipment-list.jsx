import { Component } from "react";
import axios from "axios";
import "./equipment-list.scss";
import { Link } from "react-router-dom";
import store from '../../store/index';

class EquipmentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      equipmentList: [],
      showMessage:false,
      currentId:null
    };
  }
  componentDidMount() {
    this.getEquipmentList();
    store.dispatch({type:'list'});
  }
  getEquipmentList = () => {
     axios
      .get("http://localhost:8000/equipments")
      .then((res) => {
        const data = res.data;
        this.setState({
          equipmentList: data,
        });
      })
      .catch(() => {
        console.log("error");
      });
  };
  changeStore=()=>{
    this.setState(store.getState());
  }
  deleteEquipment=()=>{
    axios
      .post("http://localhost:8000/equipments/",this.state.currentId)
      .then(() => {
        this.setState({
          showMessage:false
        })
      })
      .catch(() => {
        console.log("error");
      });
  }

  // setEquipmentId=(currentId)=>{
  //   this.timer1= setTimeout(()=>{
  //   this.setState({currentId})
  // }) };

  render() {
    return (
      <div id="euqipment-container">
        <div className="confirm-message" style={{display:this.state.showMessage?'block':'none'}}>
          <p>Are you sure to delete the equipemnt ?</p>
          <div className="btn-wrap">
            <button className="comfirm" onClick={this.deleteEquipment}>Ok</button>
            <button className="cancel">Cancel</button>
          </div>
        </div>
        <ul className="equipment-list">
          {this.state.equipmentList.map((equipment) => {
            return (
              <li className="equipemnt-item" key={equipment.id}>
                <div className="equipment-left">
                  <div className="equipment-model">{equipment.model}</div>
                  <span>{equipment.id}</span>
                </div>
                <div className="equipment-right">
                  <div className="equipment-date">
                    {equipment.manufactureDate}
                  </div>
                  <div className="action mt20">
                    <Link to={'/detail/'+equipment.id}> <i className="iconfont detail mr5">&#xe7a6;</i></Link>
                    <Link to="/add"> <i className="iconfont add mr5">&#xe601;</i></Link>
                    <span> <i className="iconfont delete">&#xe6cd;</i></span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default EquipmentList;

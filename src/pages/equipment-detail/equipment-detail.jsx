import { Component } from "react";
import axios from "axios";
import equipmentImg from "../../assets/img/equipment.jpeg";
import "./equipment-detail.scss";
import store from '../../store/index';

class EquipmentDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail:{}
    };
    this.detail = {};
  }
  componentDidMount() {
    store.dispatch({type:'detail'});
    this.getDetail();
  }
  getDetail = () => {
    const equipmentId = this.props.match.params.id;
    axios
      .get("http://localhost:8000/equipments/" + equipmentId)
      .then((res) => {
        this.setState({
          detail: res.data
        });
      })
      .catch(() => {
        console.log("error");
      });
  };
  render() {
    return (
      <div id="equipment-detail">
        <div className="detail-img">
          <img className="logo" alt="equipment" src={equipmentImg}></img>
        </div>
        <div className="detail-content">
          {Object.keys(this.state.detail).map((key,index) => {
            return (
              <div className="content-wrap" key={index}>
                <div className="content-left">{key}:</div>
                <div className="content-right">{this.state.detail[key]}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default EquipmentDetail;

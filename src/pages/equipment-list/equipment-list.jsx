import { Component } from "react";
import axios from "axios";
import './equipment-list.scss';

class EquipmentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      equipmentList: [],
    };
  }
  componentDidMount() {
    this.getEquipmentList();
  }
  getEquipmentList = () => {
    axios
      .get("/api/db.json")
      .then((res) => {
        const data = res.data.equipments;
        this.setState({
          equipmentList: data,
        });
      })
      .catch(() => {
        console.log("error");
      });
  };
  render() {
    return (
      <div id="euqipment-container">
        <ul className="equipment-list">
          {this.state.equipmentList.map((equipment) => {
            return <li className="equipemnt-item" key={equipment.id}>{equipment.model}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default EquipmentList;

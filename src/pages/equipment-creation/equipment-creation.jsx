import { Component } from "react";
import axios from "axios";
import "./equipment-creation.scss";
import store from '../../store/index';
class EquipmentCreation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: "",
      brand: "",
      weight: "",
      manufactureDate: "2020-06-10",
      showMessage:false
    };
    this.timer = null;
  }
  componentDidMount() {
    store.dispatch({type:'add'});
  }
  handelChange = (stateName, e) => {
    this.setState({
      [stateName]: e.target.value,
    });
  };
  handelSubmit = (e) => {
    e.preventDefault();
    const submitData = {
        ...this.state,
        id:'asset:'+new Date().valueOf()
    }
    axios
      .post("http://localhost:8000/equipments",submitData)
      .then(() => {
        this.setState({
          showMessage:true
        })
        this.timer= setTimeout(()=>{
          this.props.history.push('/list');
          this.setState({
            showMessage:false
          })
        },1500)
      })
      .catch(() => {
        console.log("error");
      });
  };
  componentWillUnmount(){
    clearTimeout(this.timer);
  }
  render() {
    return (
      <div id="equipment-creation">
        <div className="message" style={{display:this.state.showMessage?'block':'none'}}>Add Success~</div>
        <form onSubmit={this.handelSubmit}>
          <div className="input-wrap">
            <label>Model</label>
            <div className="input-value">
              <input
                type="text"
                value={this.state.model}
                onChange={(e) => this.handelChange("model", e)}
              />
            </div>
          </div>
          <div className="input-wrap">
            <label>Brand</label>
            <div className="input-value">
              <input
                type="text"
                value={this.state.brand}
                onChange={(e) => this.handelChange("brand", e)}
              />
            </div>
          </div>
          <div className="input-wrap">
            <label>Weight</label>
            <div className="input-value">
              <input
                type="text"
                value={this.state.weight}
                onChange={(e) => this.handelChange("weight", e)}
              />
            </div>
          </div>
          <div className="input-wrap">
            <label>ManufactureDate</label>
            <div className="input-value">
              <input
                type="date"
                value={this.state.manufactureDate}
                onChange={(e) => this.handelChange("manufactureDate", e)}
              />
            </div>
          </div>
          <div className="btn-wrap">
            <button className="submit-btn" type="submit">
              提交
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default EquipmentCreation;

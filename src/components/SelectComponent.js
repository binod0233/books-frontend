import React from "react";
class SelectComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      city: null,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      city: event.target.value,
    });
    this.preventDefault();
  }
  submit() {
    console.warn(this.state);
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="">
            <div className="form-row">
              <div className="form-group ">
                <select
                  className="form-control"
                  name="city"
                  onChange={this.handleInputChange}
                  style={{ fontWeight: "700" }}
                >
                  <option value="1">Lost</option>
                  <option value="2">Cold</option>
                  <option value="3" style={{ background: "" }}>
                    Negotiating
                  </option>
                  <option value="3">Won</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SelectComponent;

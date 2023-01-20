import React from "react";
import { connect } from "react-redux";
import * as cartActions from "../../redux/actions/cartActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class StorePage extends React.Component {
  state = {
    cart: {
      item: ""
    }
  };

  handleChange = event => {
    const cart = { ...this.state.cart, item: event.target.value };
    this.setState({ cart });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.cart.item !== "") this.props.actions.addCart(this.state.cart); else alert("Please select item");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Store</h2>
        <h3>Add to Shopping Cart</h3>
      <div>
      <select 
        value={this.state.cart.item} 
        onChange={this.handleChange} 
      >
       <option value="" selected></option>
       <option value="Book"  >Book</option>
        <option value="Flower">Flower</option>
        <option value="Perfume">Perfume</option>
        <option value="Chocolate">Chocolate</option>
      </select>
      </div>       
        <input type="submit" value="Add" />
     
     <div >{this.props.carts.length} item(s) have been added!</div>
   
      </form>
    );
  }
}

StorePage.propTypes = {
  carts: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    carts: state.carts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(cartActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StorePage);

import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";


class ShoppingCartPage extends React.Component {


render() {
  return (
  <div>
    <h1>Shopping Cart</h1>
    <p>Added Items List</p>
    
    {this.props.carts.map(cart => (
     
     <div key={cart.item}>{cart.item}</div>
        ))}
    
  </div>

  )
  }

  
}

ShoppingCartPage.propTypes = {
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
)(ShoppingCartPage);

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Image, Icon, Segment, Menu } from 'semantic-ui-react';
import { deleteFromCart, updateItemUnits } from '../actions/cartActions';

import logo from '../static/img/logo.png';
import './navproducts.css';
import './mediaQuery.css';

// route location 
const locationHome = {
    pathname: '/',
    state: { fromDashboard: true }
};

const locationCart = {
    pathname: '/cart',
    state: { fromDashboard: true }
};

class Nav extends Component {
    render() {
        return (
            <div id="nav">

                {/* <Segment clearing inverted vertical>
                <Link to={locationHome}>
                    <Header as='h2' image={logo}  floated='left' />
                    </Link>
                    <Header as='h2' floated='right'>
                        <Link to={locationCart} target="_blank">
                            <div className="navCart">
                                <span><Icon name="shopping basket" /></span> <span>{this.props.cart.reduce((a, b) => +a + +b.units, 0)}</span>
                            </div>
                        </Link>
                    </Header>
                </Segment> */}

                <Menu className='nav' text fluid widths={2} >
                        <Menu.Item>
                        <Link to={locationHome}>
                    {/* <Header as='h2' image={logo}  floated='left' /> */}
                    <Image className='logoImg' src={logo} />
                    </Link>
                        </Menu.Item>
                        <Menu.Item>
                        <Link to={locationCart} target="_blank">
                            <div className="navCart">
                                <span><Icon name="shopping basket" /></span> <span>{this.props.cart.reduce((a, b) => +a + +b.units, 0)}</span>
                            </div>
                        </Link>
                        </Menu.Item>
                    </Menu>
            </div>
        );
    }
}

// react-redux
const mapStateToProps = state => ({
    cart: state.cart
});

const mapActionsToProps = dispatch => ({
    updateItemUnits: bindActionCreators(updateItemUnits, dispatch)
})

export default connect(mapStateToProps, mapActionsToProps)(Nav);;
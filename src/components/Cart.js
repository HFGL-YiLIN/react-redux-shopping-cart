"use strict";
import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { deleteFromCart, updateItemUnits } from '../actions/cartActions';
import CartItem from "./CartItem";
import { CartEmpty } from "./CartEmpty";
import CartFull from "./CartFull";
import { Menu, Image, Button, Icon } from 'semantic-ui-react';

import { Link } from 'react-router-dom';
import './cart.css';
import logo from '../static/img/logo.png';

const locationHome = {
    pathname: '/',
    state: { fromDashboard: true }
};

const locationProducts = {
    pathname: '/products',
    state: { fromDashboard: true }
};

class Cart extends React.Component {

    render() {
        if (this.props.cart.length !== 0) {
            return (

                <div id='cart'>
                    <Menu className='nav' text fluid>
                        <Menu.Item>
                            <Link to={locationHome}>
                                <Image className='logoImg' src={logo} />
                            </Link>
                        </Menu.Item>

                    </Menu>

                    <div className='cartWrapper'>
                        <h3>Shopping Cart</h3>
                        <div className='cartfullCon'>
                            <div>
                                <CartFull />
                            </div>
                        </div>
                    </div>

                    <Menu className='cartbtn' text fluid stackable>
                        <Menu.Item position='left'>
                            <Link to={locationProducts}>
                                <span className='cartbtntoproducts'>
                                    <Button color='pink' animated>

                                        <Button.Content visible>continue shopping</Button.Content>
                                        <Button.Content hidden>
                                            <Icon name='arrow left' />
                                        </Button.Content>
                                    </Button>
                                </span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            {/* <Link to={locationProducts}> */}
                            <span className='cartbtntofuture'>
                                <Button color='pink' animated='fade'>

                                    <Button.Content visible> continue</Button.Content>
                                    <Button.Content hidden>
                                        coming soon
                                        </Button.Content>
                                </Button>
                            </span>
                            {/* </Link> */}
                        </Menu.Item>
                    </Menu>

                </div>
            );
        }

        return (

            <div id='cart'>
                <Menu className='nav' text fluid>
                    <Menu.Item>
                        <Link to={locationHome}>
                            <Image className='logoImg' src={logo} />
                        </Link>
                    </Menu.Item>

                </Menu>

                <div className='cartWrapper'>
                    <h3>Shopping Cart</h3>
                    <div className='cartemptyCon'>
                        <div>
                            <CartEmpty />
                        </div>
                    </div>
                </div>

                <Menu className='cartbtn' text fluid stackable>
                    <Menu.Item position='left'>
                        <Link to={locationProducts}>
                            <span className='cartbtntoproducts'>
                                <Button color='pink' animated>

                                    <Button.Content visible>continue shopping</Button.Content>
                                    <Button.Content hidden>
                                        <Icon name='arrow left' />
                                    </Button.Content>
                                </Button>
                            </span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        {/* <Link to={locationProducts}> */}
                        <span className='cartbtntofuture'>
                            <Button color='pink' animated='fade'>

                                <Button.Content visible> continue</Button.Content>
                                <Button.Content hidden>
                                    coming soon
                                        </Button.Content>
                            </Button>
                        </span>
                        {/* </Link> */}
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

const mapActionsToProps = dispatch => (
    bindActionCreators({
        deleteFromCart,
        updateItemUnits
    }, dispatch)
);

export default connect(mapStateToProps, mapActionsToProps)(Cart);
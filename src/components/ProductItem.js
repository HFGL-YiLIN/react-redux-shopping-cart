import React from 'react';
import { Button, Icon, Image, Reveal, Item, Label } from 'semantic-ui-react';
import image1 from '../static/img/shopping-cart.jpg';

import './productsItem.css';

class ProductItem extends React.Component {

    render() {
        return (
            <Reveal animated='move' id='productsItem'>

                <Reveal.Content visible>
                    <Image src={this.props.product.img} size='massive' />
                </Reveal.Content>

                <Reveal.Content hidden >

                    {/* <div className='bgImg'>
                    <div className='overlay'>
                        <h4>{this.props.product.title}</h4>
                        <p>{this.props.product.description}</p>

                        <div>
                        <span>￥ {this.props.product.price}</span>
                        <span><Button size='tiny'
                            onClick={() => this.props.handleOnAdd(this.props.product)}
                            animated='vertical'>
                            <Button.Content hidden>BUY</Button.Content>
                            <Button.Content visible>
                                <Icon name='shop' />
                            </Button.Content>
                        </Button>
                        </span>
                        </div> 
 </div>
                    </div>*/}
                    <Item.Group >
                        <Item className='bgImg'>
                            <Item.Content className='overlay'>
                                <Item.Header as='h2'>{this.props.product.title}</Item.Header>
                                <Item.Meta>
                                    <span className='cinema'>Union Square 14</span>
                                </Item.Meta>
                                <Item.Description as='h3'>{this.props.product.description}</Item.Description>
                                <Item.Extra>
                                    <Label>IMAX</Label>
                                    <Label icon='globe' content='Additional Languages' />
                                    <div className='floatRight'>
                                        <span className='price'>￥ {this.props.product.price}</span>
                                        <span><Button size='tiny'
                                            onClick={() => this.props.handleOnAdd(this.props.product)}
                                            animated='vertical'>
                                            <Button.Content hidden>BUY</Button.Content>
                                            <Button.Content visible>
                                                <Icon name='shop' />
                                            </Button.Content>
                                        </Button>
                                        </span>
                                    </div>
                                </Item.Extra>
                            </Item.Content>
                        </Item>
                    </Item.Group>

                </Reveal.Content>

            </Reveal>
        );
    }
}

export default ProductItem;
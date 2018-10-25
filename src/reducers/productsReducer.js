import image1 from '../static/img/1.jpg'; 
import image2 from '../static/img/2.jpg'; 
import image3 from '../static/img/3.jpg'; 
import image4 from '../static/img/4.jpg'; 
import image5 from '../static/img/5.jpg'; 
import image6 from '../static/img/6.jpg'; 


const INIT_PRODUCTS = [
    {id:1, 
        title: "Black'47", 
        description: "Set in Ireland during the Great Famine| the drama follows an Irish Ranger who has been fighting for the British Army abroad| as he abandons his post to reunite with his family. Despite experiencing the horrors of war| he is shocked by the famine's destruction of his homeland and the brutalization of his people and his family.",
        price: 79, 
        img: image1
    },
    {id:2, title: "Easy Rider", description: "Through the open country and desert lands| two bikers head from L.A to New Orleans| and along the way| meet a man who bridges a counter-culture gap they are unaware of.", price: 49, img: image2},
    {id:3, title: 'Captain Fantastic', description: "In the forests of the Pacific Northwest| a father devoted to raising his six kids with a rigorous physical and intellectual education is forced to leave his paradise and enter the world| challenging his idea of what it means to be a parent.", price: 59, img: image3},
    {id:4, title: 'Eighth Grade', description: "In the forests of the Pacific Northwest| a father devoted to raising his six kids with a rigorous physical and intellectual education is forced to leave his paradise and enter the world| challenging his idea of what it means to be a parent.", price: 79, img: image4},
    {id:5, title: 'Hacksaw Ridge', description: "World War II American Army Medic Desmond T. Doss| who served during the Battle of Okinawa| refuses to kill people| and becomes the first man in American history to receive the Medal of Honor without firing a shot.", price: 69, img: image5},
    {id:6, title: 'Yojimbo', description: "A crafty ronin comes to a town divided by two criminal gangs and decides to play them against each other to free the town.", price: 49, img: image6}
];

export const productsReducer = (state=INIT_PRODUCTS, action={}) => {
    return state;
}
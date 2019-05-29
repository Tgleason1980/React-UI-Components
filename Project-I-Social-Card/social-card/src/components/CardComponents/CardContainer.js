import React from 'react';
import './Card.css';
import HeaderContainer from '../HeaderComponents/HeaderContainer';
import CardBanner from '../CardComponents/CardBanner';
const CardContainer = () => {
    return (
        <div className='container'>
        <HeaderContainer></HeaderContainer>
        <CardBanner></CardBanner>
        </div>
        
    );
}

export default CardContainer;
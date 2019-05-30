import React from 'react';
import './Card.css';
import HeaderContainer from '../HeaderComponents/HeaderContainer';
import CardBanner from '../CardComponents/CardBanner';
import CardContent from '../CardComponents/CardContent';

const CardContainer = () => {
    return (
        <div className='container'>
        <HeaderContainer></HeaderContainer>
        <CardBanner></CardBanner>
        <CardContent></CardContent>
        </div>
        
    );
}

export default CardContainer;
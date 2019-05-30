import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from '../HeaderComponents/HeaderContent';
import HeaderTitle from '../HeaderComponents/HeaderTitle'
const HeaderContainer = () => {

    return (
        <div className='headerCont'>
          <ImageThumbnail></ImageThumbnail>
          <div className='contvert'>
          <HeaderTitle></HeaderTitle>
        <HeaderContent className='hc'></HeaderContent>
        </div>
        </div>
      );
};

export default HeaderContainer;

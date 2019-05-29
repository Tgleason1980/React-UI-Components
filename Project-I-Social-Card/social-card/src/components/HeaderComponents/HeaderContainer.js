import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from '../HeaderComponents/HeaderContent';
import HeaderTitle from '../HeaderComponents/HeaderTitle'
const HeaderContainer = () => {

    return (
        <div className='headerCont'>
          <ImageThumbnail></ImageThumbnail>
          <HeaderTitle></HeaderTitle>
        <HeaderContent className='hc'></HeaderContent>
        </div>
      );
};

export default HeaderContainer;

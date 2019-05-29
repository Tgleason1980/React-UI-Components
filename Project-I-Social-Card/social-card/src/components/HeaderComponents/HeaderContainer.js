import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from '../HeaderComponents/HeaderContent';
import HeaderTitle from '../HeaderComponents/HeaderTitle'
const HeaderContainer = () => {

    return (
        <div>
          <ImageThumbnail></ImageThumbnail>
          <HeaderTitle></HeaderTitle>
          <HeaderContent></HeaderContent>
        </div>
      );
};

export default HeaderContainer;

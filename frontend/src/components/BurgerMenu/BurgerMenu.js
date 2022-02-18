import React from 'react';
import Popup from 'reactjs-popup';
import BurgerList from './BurgerList';
import BurgerIcon from './BurgerIcon';
import './burgermenu.css';

const BurgerMenu = () => {
  const contentStyle = {
    background: 'rgba(255,255,255,0)',
    width: '80%',
    border: 'none'
  };

  const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    marginTop: '40px'
  };

  return (
    <div style={styles}>
      <Popup
        modal
        overlayStyle={{ background: 'rgba(255,255,255,0.98' }}
        contentStyle={contentStyle}
        closeOnDocumentClick={false}
        trigger={(open) => <BurgerIcon open={open} />}
      >
        {(close) => <BurgerList close={close} />}
      </Popup>
    </div>
  );
};

export default BurgerMenu;

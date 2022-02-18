import React from 'react';
import BurgerIcon from './BurgerIcon';
import './burgermenu.css';

const BurgerToggle = ({ open, ...props }) => {
  const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center'
  };
  return (
    <div style={styles}>
      <BurgerIcon open={true} />
      <BurgerIcon close={false} />
    </div>
  );
};

export default BurgerToggle;

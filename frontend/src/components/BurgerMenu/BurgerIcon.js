import React from 'react';
import './burgermenu.css';

const BurgerIcon = React.forwardRef(({ open, ...props }, ref) => {
  return (
    <div className={`burger-menu ${open ? ' open' : ''}`} {...props} ref={ref}>
      <div className="bar1" />
      <div className="bar2" />
      <div className="bar3" />
    </div>
  );
});

export default BurgerIcon;

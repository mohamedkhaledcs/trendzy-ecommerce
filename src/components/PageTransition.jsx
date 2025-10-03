import React from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import './PageTransition.css';

// Wrapper for animated page transitions
function PageTransition({ children }) {
  const location = useLocation();
  return (
    <SwitchTransition>
      <CSSTransition
        key={location.pathname}
        classNames="fade"
        timeout={350}
        unmountOnExit
      >
        <div>{children}</div>
      </CSSTransition>
    </SwitchTransition>
  );
}

export default PageTransition;

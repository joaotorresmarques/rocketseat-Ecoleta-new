import React from 'react';
interface HeaderProps {
  title?: string; //nao é obrigatoria
}
//fc = Function Component
const Headr: React.FC<HeaderProps> = (props)=>{
  return(
    <header>
      <h2>{props.title}</h2>
    </header>
  )
}

export default Headr;
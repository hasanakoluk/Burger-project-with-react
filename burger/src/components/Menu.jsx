import React from 'react';
import  MenuItem  from '../components/MenuItem';
import {Data} from '../components/Data';
import '../styles/Menu.css';


export const Menu = () => {
  return <div className="menu">
      <h1 className="menuTitle">Burgerlerimiz</h1>
      <div className="menuList">
        {Data.map((Item, key) => {
          return (
            <MenuItem
               key={key}
              image={Item.image}
              name={Item.name}
              content={Item.content}
              price={Item.price}
            />
            
          );
         
        })}
      
      </div>
    </div>
  
};

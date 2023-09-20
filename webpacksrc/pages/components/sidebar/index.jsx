import { NavLink } from 'react-router-dom';
import './sidebar.scss';

export const SideBar = () => {
  return (
    <div className="sidebar" >
      <NavLink to="/" className='sidebar__items' >My Pokedex</NavLink>
      <NavLink to='/moves' className='sidebar__items' >Moves</NavLink>
      <NavLink to='/items' className='sidebar__items' >Items</NavLink>
      <NavLink to='/abilities' className='sidebar__items' >Abilities</NavLink>
      <NavLink to='/natures' className='sidebar__items' >Natures</NavLink>
      <NavLink to='locations' className='sidebar__items' >Locations</NavLink>
      <NavLink to='/gymleaders' className='sidebar__items' >Gym Leaders</NavLink>
    </div>
  );
};

import { Outlet } from 'react-router-dom'
import './teambuilder.scss';

export const TeamBuilder = () => {
  return (
    <div className='teambuilder' >
      <Outlet />
    </div>
  )
}

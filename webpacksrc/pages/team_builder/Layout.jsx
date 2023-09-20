import { Outlet } from 'react-router-dom'
import './team_builder_style/teambuilder.scss';

export const TeamBuilder = () => {
  return (
    <div className='teambuilder' >
      <Outlet />
    </div>
  )
}

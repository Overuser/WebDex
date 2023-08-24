import { NavLink } from 'react-router-dom'

export const Teams = () => {
  return (
    <div className='teams' >
      <h1 className="teams__header">Team Component</h1>
      <button className='teams__button'>
        <NavLink to='builder'>Create team</NavLink>
      </button>
    </div>
  )
}

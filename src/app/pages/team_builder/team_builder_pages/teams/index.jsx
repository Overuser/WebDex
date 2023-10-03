import { NavLink } from 'react-router-dom'
import { usePokemon } from '../../../../Provider'
import TeamsBlock from './teams_components/teams_block/teams_block';
export const Teams = () => {
  const { pending, teams } = usePokemon();

  return (
    <div className='teams' >
      { pending ? <h1>Loading</h1> :
        <>
          <h1 className="teams__header">Team Component</h1>
          <button className='teams__button'>
            <NavLink to='builder'>Create team</NavLink>
          </button>
          <div>
            {/* { teams.map(( team ) => {
                console.log(team.team, 'teambuilder comp');
                return <TeamsBlock key={ team.id } members={ team.team } />
              })} */}
          </div>
        </>
      }
    </div>
  )
}

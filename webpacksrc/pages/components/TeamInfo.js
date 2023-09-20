import { Link } from "react-router-dom";

const TeamInfo = ({ team, removePoke, createTeam }) => {
  
  return (
    <div className="create__teaminfo">
      <div className="create__teaminfo__container">
        {
          team.map((mem, i) => {
            const sprite = require(`../sprites/${String( mem.id ).padStart(3, 0)}MS.png`);

            return (
              <div key={i} className="create__teaminfo__team">
                <div className="create__teaminfo__team__image">
                  <img src={ sprite } alt={ mem.name.english } />
                </div>
                <div className='create__teaminfo__team__link'>
                  <Link to={`/${mem.id}`}>{mem.name.english}</Link>
                </div>
                <div className="create__teaminfo__team__types">
                  {
                    mem.type.map((type, i) => {
                      return <p className={`Type ${type}`} key={i}>{type}</p>
                    })
                  }
                </div>
                <button className="create__teaminfo__team__button" onClick={ () => removePoke( mem ) } >delete</button>
              </div>
            );
          })
        }
      </div>
      <button className="create__teaminfo__team__button" onClick={ createTeam }>Create Team</button>
    </div>
  );
}

export default TeamInfo;
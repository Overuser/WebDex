import { Link } from "react-router-dom";
import React from "react";

export const DexBlock = ({ dex , ModalView}) => {
  const image = require(`../images/${String( dex.id ).padStart(3, 0)}.png`);

  return (
    <div className="home__dex__block">
      <div className="home__dex__block__image">
        <img src={ image } alt={ dex.name.english } height="80px" width="80px" />
      </div>
      <div className="home__dex__block__link">
        <p onClick={ (event) => {
          event.preventDefault()
          ModalView( dex )
        } } >{ dex.name.english.toUpperCase() }</p>
      </div>
      <div className="home__dex__block__types">
        { 
          dex.type.map((type, i) => {
            return <p className={`Type ${type}`} key={i}>{ type }</p>
          }) 
        }
      </div>
    </div>
  )
}

export const CreateBlock = ({ dex, addPoke, team }) => {
  const image = require(`../sprites/${String( dex.id ).padStart(3, 0)}MS.png`);

  return (
    <div className="create__teaminfo__dex__block">
      <div className="create__teaminfo__dex__block__image">
        <img src={ image } alt={ dex.name.english } />
      </div>
      <div className="create__teaminfo__dex__block__link">
        <Link to={`/pokemon/${ dex.id }`}>{ dex.name.english.toUpperCase() }</Link>
      </div>
      <div className="create__teaminfo__dex__block__types">
        { 
          dex.type.map((type, i) => {
            return <p className={`Type ${type}`} key={i}>{ type }</p>
          }) 
        }
      </div>
      { team.length < 6 ? <button className="create__teaminfo__dex__block__button" onClick={() => addPoke( dex ) }>Add</button> : undefined }
    </div>
  )
}


export const TeamBlock = ({ dex, deleteTeam }) => {

  return (
    <div className="teambuilder__team" >
      <div className="teambuilder__team-members">
        {
          dex.team.map(( team, i) => {
            const sprite = require(`../sprites/${String( team.pokemon.id ).padStart(3, 0)}MS.png`);

            return(
              <div key={i} className="teambuilder__team-member">
                <div className="teambuilder__team-member__image">
                  <img src={ sprite } alt={ team.pokemon.name.english } />
                </div>
                <div className="teambuilder__team-member__link" >
                  <p>{ team.pokemon.name.english }</p>
                </div>
                <div className="teambuilder__team-member__types">
                  { 
                    team.pokemon.type.map((type, i) => {
                      return <p className={`Type ${type}`} key={i}>{ type }</p>
                    })
                  }
                </div>
              </div>
            )
          })
        }
      </div>
      <button className="teambuilder__team-members__delete" onClick={() => { deleteTeam( dex.id ) }}>Delete team</button>
    </div>
  )
}

import { useState } from "react";
import CreateTeamBlocks from "./CreateTeamBlocks";
import TeamInfo from "./TeamInfo";
import { useEffect } from "react";
import ReactModal from "react-modal";
import LsideBar from "./LsideBar";
import RsideBar from "./RsideBar";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const TeamCreator = ({ 
  isPending, 
  error, 
  pokedex, 
  filteredDex, 
  searchDex, 
  handleFilterOption, 
  handleFilteredSearch, 
  filterOption, 
  clearFilter, 
  toggleAll }) => {
  const [ team, setTeam ] = useState([]);
  const [ bottom, setBottom ] = useState("-550px")
  const [ isClosed, setIsCLosed ] = useState(false);
  const history = useHistory();

  const addPoke = ( poke ) => {
    const modalOverlay = document.getElementById("create-modal-overlay").parentElement;
    const uptd = team;
    uptd.push( poke );

    modalOverlay.addEventListener("click", ( event ) => {
      event.preventDefault();
      setBottom("-550px");
      setIsCLosed( false )
    })

    setTeam([...uptd]);
    modalOverlay.click();
    localStorage.setItem('team', JSON.stringify(uptd));
  }

  const removePoke = ( poke ) => {
    const utd = team;
    const filUtd = utd.filter(( mem ) => { return mem !== poke })
    setTeam([...filUtd]);

    localStorage.setItem('team', JSON.stringify( filUtd ));
  }

  const createTeam = () => {
    const upTeam = team.map((mem) => {
      return {
        pokemon: mem,
        level: 1,
        EV: {
          hp: 0,
          attack: 0,
          defence: 0,
          'sp attack' : 0,
          'sp defence' : 0,
          speed: 0
        },
        IV: {
          hp: 0,
          attack: 0,
          defence: 0,
          'sp attack' : 0,
          'sp defence' : 0,
          speed: 0
        },
        'hidden type': '',
        nature: '',
        happiness: '',
        gender: '',
        moves: Array(4),
      }
    })
    
    fetch('http://localhost:5000/teams', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({
        team: upTeam
      }) 
    }).then(() => {
      setTeam([]);
      localStorage.removeItem('team');
      history.push("/teambuilder");
    })
    
  }

  const onOpen = () => {
    setBottom("0px")
  }

  const onClose = () => {
    setBottom("-550px");
    setIsCLosed( false )
  }

  const onAdd = () => {
    setIsCLosed( true );
  }

  useEffect(() => {
    if ( !!localStorage.getItem('team') ) {
      setTeam( JSON.parse( localStorage.getItem( 'team' ) ));
    } else {

    }
  }, [])



  return ( 
    <div className="content" >
      <div className='Left-bar'>
        <LsideBar />
      </div>
      <div className='Main'>
        <div className="create">
          {isPending && <h2>Loading.....</h2>}
          {error && <h2>{ error }</h2>}
          {
            pokedex && (
              <div className="create__container">
                <h2 className="create__title" >Team</h2>
                {
                  team.length > 0 ? 
                  <TeamInfo 
                    team={ team } 
                    removePoke={ removePoke } 
                    createTeam={createTeam} 
                  /> : <div></div> 
                }
                <button 
                  onClick={ event => {
                    event.preventDefault(); 
                    onAdd() 
                  }} 
                >
                  Add pokemon
                </button>
                <ReactModal
                  isOpen={ isClosed }
                  parentSelector={ () => document.querySelector(".Main") }
                  closeTimeoutMS={ 300 }
                  style={ 
                    { overlay: {
                        position: "absolute",
                        backgroundColor: "rgba(0, 0, 0, 0.20)"
                      },
                      content: {
                        height: "85%",
                        width: "100%",
                        padding: "0",
                        inset: "",
                        bottom: bottom,
                        transition: "bottom 300ms ease-out"
                      } 
                    } 
                  }
                  ariaHideApp={ false }
                  onAfterOpen={ onOpen }
                  onRequestClose={ onClose }
                  className={ "create__modal" }
                  id="create-modal-overlay"
                >
                  <CreateTeamBlocks 
                    dexData={ searchDex ? searchDex : filteredDex ? filteredDex : pokedex } 
                    addPoke={ addPoke } 
                    team={ team }
                  />
                </ReactModal>
              </div>
            )
          }
        </div>     
      </div>
      <div className='Right-bar team-creator'>
        <RsideBar
        search={ handleFilteredSearch } 
        handleFilterOption={ handleFilterOption } 
        option={ filterOption } 
        toggleAll={ toggleAll } 
        clearFilter={ clearFilter } 
        />
      </div>
    </div>
  );
}
 
export default TeamCreator;


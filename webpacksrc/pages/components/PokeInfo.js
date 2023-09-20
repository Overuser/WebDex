import { useHistory } from "react-router-dom";
import ReactModal from "react-modal";

const PokeInfo = ({ pokemon, isClosed, onClose, onOpen, bottom }) => {
  const history = useHistory();
  const image = pokemon ? require(`../images/${String( pokemon.id ).padStart(3, 0)}.png?blur=200&px=16&auto=format`) : '';

    return ( 
      <div>
        {pokemon && (
            <ReactModal 
              isOpen={ isClosed }
              onAfterOpen={ onOpen }
              closeTimeoutMS={ 500 }
              onRequestClose={ onClose }
              className={ "center" } 
              id="modal"
              style={ 
                { overlay: {
                    zIndex: 2,
                    backgroundColor: "rgba(0, 0, 0, 0.50)"
                  },
                  content: {
                    bottom: bottom,
                    transition: "bottom 500ms ease-out"
                  } 
                } 
              } 
              ariaHideApp={ false } 
            >
              <div className="left">
                <p>Hp: {pokemon.base.HP}</p>
                <p>Attack: {pokemon.base.Attack}</p>
                <p>Defense: {pokemon.base.Defense}</p>
                <p>Sp.Attack: {pokemon.base["Sp. Attack"]}</p>
                <p>Sp.Defense: {pokemon.base["Sp. Defense"]}</p>
                <p>Speed: {pokemon.base.Speed}</p>
              </div>
              <div className="center">
                <div className="img" >
                  <img src={ image } alt={ pokemon.name.english } height="80px" width="80px" />
                </div>
                <div>
                  <h2>{pokemon.name.english}</h2>
                  {
                    pokemon.type.map((type, i) => {
                      return <p className={`Type ${type}`} key={i}>{ type }</p>
                    }) 
                  }
                </div>
              </div>
              <div className="right" >
                <button onClick={() => { history.goBack() }}>Back</button>
              </div>
            </ReactModal>
        )}
      </div>
     );
}
 
export default PokeInfo;
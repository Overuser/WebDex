import { useHistory, useParams } from "react-router-dom";
import useFetch from "../useFetch";

const DexDetails = () => {
    const { id } = useParams();
    const { data: pokedex, isPending, error } = useFetch(`http://localhost:8000/pokemon/${id}`)
    const history = useHistory();

    return ( 
        <div>
            {isPending && <h2>Loading.....</h2>}
            {error && <h2>{ error }</h2>}
            {pokedex && (
                <div>
                    <h2>{pokedex.name.english}</h2>
                    <div>
                        { 
                            pokedex.type.map((type, i) => {
                                return <p className={`Type ${type}`} key={i}>{ type }</p>
                            }) 
                        }
                    </div>
                    <div>
                        <p>Hp: {pokedex.base.HP}</p>
                        <p>Attack: {pokedex.base.Attack}</p>
                        <p>Defense: {pokedex.base.Defense}</p>
                        <p>Sp.Attack: {pokedex.base["Sp. Attack"]}</p>
                        <p>Sp.Defense: {pokedex.base["Sp. Defense"]}</p>
                        <p>Speed: {pokedex.base.Speed}</p>
                    </div>
                    <div>
                        <button onClick={() => { history.goBack() }}>Back</button>
                    </div>
                </div>
            )}
        </div>
     );
}
 
export default DexDetails;
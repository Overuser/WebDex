import TeamBuilder from "./TeamBuilder";

const NotFound = () => {
    return ( 
        <div className="notfound">
            <h2>Sorry</h2>
            <p>that page cannot be found</p>
            <dialog>
              <TeamBuilder />
            </dialog>
        </div>
     );
}
 
export default NotFound;
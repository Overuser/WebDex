import Filter from "./Filter";

const RsideBar = ({ search, handleFilterOption, option, toggleAll, clearFilter }) => {
    return ( 
        <div id="rside-bar" >
            <Filter search={ search } handleFilterOption={ handleFilterOption } option={ option } toggleAll={ toggleAll } clearFilter={ clearFilter } />
        </div>
    );
}
 
export default RsideBar;
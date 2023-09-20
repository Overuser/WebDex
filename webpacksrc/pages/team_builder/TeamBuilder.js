import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { TeamBlock } from "../components/blocks/Block";
import LsideBar from "../components/LsideBar";
import RsideBar from "../components/RsideBar";

const TeamBuilder = ({
  handleFilterOption,
  filterOption,
  toggleAll,
  clearFilter,
  handleFilteredSearch,
}) => {
  const {
    data: teams,
    isPending,
    error,
    setData: setTeams,
    setIsPending,
    setError,
  } = useFetch("http://localhost:5000/teams");

  const deleteTeam = (id) => {
    fetch("http://localhost:5000/teams/" + id, {
      method: "DELETE",
    })
      .then((res) => {
        return res.json();
      })
      .then(() => {
        fetch("http://localhost:5000/teams")
          .then((res) => {
            if (!res.ok) {
              throw new Error("could not fetch the data for that ressource");
            } else {
              return res.json();
            }
          })
          .then((data) => {
            setTeams(data);
            setIsPending(false);
          })
          .catch((err) => {
            setIsPending(false);
            setError(err.message);
          });
      });
  };

  return (
    <div className='content'>
      <div className='Left-bar'>
        <LsideBar />
      </div>
      <div className='Main'>
        <div className='Team-wrapper'>
          <h2>Teambuilder</h2>
          <button className='teambuilder__teamcreator'>
            <Link to='/teamcreator'>create-team</Link>
          </button>
          {isPending && <h2>Loading.....</h2>}
          {error && <h2>{error}</h2>}
          {teams && (
            <div className='Team-container'>
              <div className='Teams'>
                {teams.map((team, i) => {
                  return (
                    <TeamBlock
                      key={i}
                      dex={team}
                      index={i}
                      deleteTeam={deleteTeam}
                    />
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className='Right-bar'>
        <RsideBar
          search={handleFilteredSearch}
          handleFilterOption={handleFilterOption}
          option={filterOption}
          toggleAll={toggleAll}
          clearFilter={clearFilter}
        />
      </div>
    </div>
  );
};

export default TeamBuilder;

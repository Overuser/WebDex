import TeamsCard from "./teams-card"

const TeamsBlock = ({ members }) => {
  console.log(members, "team block comp");
  return (
    <div>
      {
        members.map((member, i) => {
          return <TeamsCard key={i} member={ member }/>
        })
      }
    </div>
  )
}

export default TeamsBlock
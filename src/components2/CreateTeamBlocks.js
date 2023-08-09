import { CreateBlock } from "./Block";

const CreateTeamBlocks = ({ dexData, addPoke, team }) => {
  return (
    <div className="create__teaminfo__dex">
      {
        dexData.map((dex) => {
          return ( 
            <CreateBlock key={ dex.id } dex={ dex } addPoke={ addPoke } team={ team } />
          )
        })
      }
    </div>
  );
}
 
export default CreateTeamBlocks;
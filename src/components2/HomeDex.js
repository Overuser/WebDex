import  { DexBlock } from "./Block";

const DexBlocks = ({ dexData, ModalView }) => {

  return (
    <div className="home__dex">
      {
        dexData.map((dex) => {
          return ( <DexBlock key={ dex.id } dex={ dex } ModalView={ ModalView} /> )
        })
      }
    </div>
  );
}
 
export default DexBlocks;
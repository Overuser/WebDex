import ReactModal from "react-modal";
import "./Pokeview.scss";

const Pokeview = ({
  isOpen,
  closeModal,
  pokemon,
  bottom,
  afterOpen,
  background,
}) => {
  return (
    <>
    {
      pokemon &&
        <ReactModal
        isOpen={isOpen}
        parentSelector={() => document.getElementById("home")}
        onRequestClose={closeModal}
        onAfterOpen={afterOpen}
        className={"center"}
        overlayClassName={"overlay"}
        closeTimeoutMS={ 0 }
        style={{
          overlay: {
            background: background,
            transition: "background 200ms ease-in-out",
            zIndex: 3
          },
          content: {
            bottom: bottom,
            transition: "bottom 300ms ease-in-out",
          },
        }}
        ariaHideApp={false}
      >
        <div className='left'></div>
        <div className='middle'>
          <h2>{ pokemon.name.english }</h2>
        </div>
        <div className='right'></div>
      </ReactModal>
    
    }
    </>
  );
};

export default Pokeview;

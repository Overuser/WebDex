import ReactModal from "react-modal";
const Pokeview = ({isOpen, closeModal, pokemon}) => {
  
  return (
    <ReactModal
      isOpen={ isOpen }
      parentSelector={() => document.getElementById("home__content")}
      onRequestClose={ closeModal }
      style={{
        overlay: {
          zIndex: 2,
          backgroundColor: "rgba(0, 0, 0, 0.50)",
        },
        content: {
          bottom: "0px",
          transition: "bottom 500ms ease-out",
        },
      }}
      ariaHideApp={false}
    >
      <h1>{ pokemon &&  pokemon.name.english }</h1>
    </ReactModal>
  );
};

export default Pokeview;

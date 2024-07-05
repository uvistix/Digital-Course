import ModalVideo from "react-modal-video";

const ModalVideoComp = ({
  videoSource,
  isModalVideoOpen,
  setModalVideoOpen,
}) => {
  return (
    <ModalVideo
      channel="youtube"
      youtube={{ mute: 0, autoplay: 0 }}
      isOpen={isModalVideoOpen}
      videoId={videoSource}
      onClose={() => setModalVideoOpen(false)}
    />
  );
};

export default ModalVideoComp;

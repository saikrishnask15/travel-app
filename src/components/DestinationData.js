
const DestinationData = (props) => {
  return (
    <div className={props.des_className}>
      <div className="des-text">
        <h3 className="des-info-title">{props.des_title}</h3>
        <p className="des-about">
          {props.des_description}
        </p>
      </div>

      <div className="destination-images-ctn">
        <img src={props.img1} alt="" />
        <img src={props.img2} alt="" />
      </div>
    </div>
  );
};

export default DestinationData;

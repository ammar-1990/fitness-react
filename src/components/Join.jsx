import "./Join.scss";

const Join = () => {

  
  return (
    <div className="join">
      <div className="jLeft">
        <p>
          <span className="stroke">ready to </span> level up <br />
          your body <span className="stroke">with us ?</span>
        </p>
      </div>
      <div className="jRight">
        <form action="" >
          <input type="email" name="email" placeholder="Enter Your Email..." />
        <button onClick={(e)=>{e.preventDefault()}}>Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;

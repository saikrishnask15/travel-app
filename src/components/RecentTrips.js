import lakshadweep from "../assests/lakshadweep.jpg";
import goa from "../assests/goa.jpg";
import leh from "../assests/leh.jpg";
const RecentTrips = () => {
  return (
    <div className="section container">
      <div className="Trips">
        <h2>Recent Trips</h2>
        <p>You can discover unique destinations using Google Maps.</p>
      </div>
      <div className="recent-trips-places">
        <div className="recent-trips-card">
          <div className="recent-image">
            <img src={lakshadweep} alt="" />
          </div>
          <div className="recent-trips-info">
            <h4>Lakshadweep</h4>
            <p>
              Settled off the Kerala coast on Laccadive sea, Lakshadweep
              translates to ‘a hundred thousand islands’. A club of 36 atolls
              and coral reefs, the nature tourism destination is known for
              preserved ecology and water sports.
            </p>
          </div>
        </div>
        <div className="recent-trips-card">
          <div className="recent-image">
            <img src={goa} alt="" />
          </div>
          <div className="recent-trips-info">
            <h4>Goa</h4>
            <p>
              Popularly known as India’s party capital, Goa seduces travellers
              from all around the globe with its boho beaches, ancient churches,
              majestic forts and unbeatable nightlife!
            </p>
          </div>
        </div>
        <div className="recent-trips-card">
          <div className="recent-image">
            <img src={leh} alt="" />
          </div>
          <div className="recent-trips-info">
            <h4>Leh</h4>
            <p>
              Located at a height of 11,500 feet, Leh finds place in the bucket
              list of many travel enthusiasts. It will leave you in awe with its
              iconic monasteries and picturesque landscapes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentTrips;

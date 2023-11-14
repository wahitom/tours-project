import "./Footer.css";

function Footer() {
  return (
    <footer className="main-footer mt-auto py-3">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>HOLIDAY TOUR & TRAVELS</h4>
            <ul>
              <li>Kenya's leading tour and travels</li>
              <li>Booking website,Over 10,000 packages ountry wide</li>
              <li>Do not miss out on offers</li>
            </ul>
          </div>

          <div className="col">
            <h4>QUICK ACCESS</h4>
            <ul>
              <li>Home</li>
              <li>All destination</li>
              <li>Available Packages</li>
              <li>Offers</li>
            </ul>
          </div>
          <div className="col">
            <h4>FIND US ON</h4>
            <ul>
              <li>YouTube</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>TikTok</li>
              <li>X</li>
            </ul>
          </div>
          <div className="row">
            <div className="footer-bottom text-white text-center">
              <p>
                Copyright@{new Date().getFullYear()}.Kenya Tourism Board. All
                Rights Reserved. | Tours Kenya
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

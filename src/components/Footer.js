import React from "react"

import { Link } from "gatsby"

export default () => (
  <footer>
    <div id="footer-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1349.6494224834978!2d13.628670900568657!3d47.425615859635144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47713029f1ff093f%3A0xa00c4e4cf1b65e8e!2sHaus%20Karlwirt!5e0!3m2!1sen!2suk!4v1569166214716!5m2!1sen!2suk"
        width="100%"
        height="400"
        frameBorder="0"
        allowFullScreen=""
        title="Google Map: Apartment Waltraud, Haus Karlwirt, Ramsau am Dachstein"
      >
      </iframe>
    </div>

    <div id="footer-info">
      <div>
        <h2>Address</h2>
        Apartment Waltraud<br />
        Top 13 (2nd Floor)<br />
        Haus Karlwirt<br />
        Schildlehen 34,<br />
        8972 Ramsau am Dachstein<br />
        Austria<br />
      </div>

      <div>
        <h2>Contact</h2>
        Email: <a
          href="mailto:judy.roger@btinternet.com?subject=Apartment Waltraud Enquiry"
          target="_self"
        >
          judy.roger@btinternet.com
        </a><br />
        Tel: <a href="tel:+447968749370">+44 7968 749 370</a>

        <h2 style={{ marginTop: "1.8em" }}>Quick Links</h2>
        <Link to="/privacy-policy">Privacy Policy</Link><br />
        <a
          href="https://www.schladming-dachstein.at/en/summercard"
          target="_blank"
          rel="noopener noreferrer"
        >
          Summer Card
        </a>
      </div>

      <div id="footer-sommercard">
        <a
          href="https://www.schladming-dachstein.at/en/summercard"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            style={{ width: 200, height: "auto" }}
            alt="Schladming Dachstein Sommercard"
            src="/images/sommercard_logo.png"
          />
        </a>
      </div>
    </div>
  </footer>
)

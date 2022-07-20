import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    const userData = fetch(url)
      .then((resp) => resp.json())
      .then((data) => setDetails(data));
  }, []);
  return (
    <>
      <section className="section">
        <div className="title">
          <h2>experience</h2>
          <div className="underline"></div>
        </div>
        <div className="jobs-center">
          <div className="btn-container">
            <button className="job-btn active-btn">TOMMY</button>
          </div>
          <article className="job-info">
            <h3>Full Stack Web Developer</h3>
            <h4>TOMMY</h4>
            <p className="job-date">December 2015 - Present</p>
            <div className="job-desc">
              <FaAngleDoubleRight className="job-icon" />
              <p>
                Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual
                poke leggings offal cold-pressed brunch neutra. Hammock photo
                booth live-edge disrupt.
              </p>
            </div>
          </article>
        </div>
        <button type="button" className="btn">
          more info
        </button>
      </section>
    </>
  );
}

export default App;

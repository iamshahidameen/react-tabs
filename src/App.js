import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setJobs(data));
  }, []);
  console.log(jobs, 'all jobs');

  console.log(selectedJob, 'selected Jobs');
  //;

  function filterJob(clickedJob) {
    const newJob = jobs.filter((job) => job.company === clickedJob);
    setSelectedJob(newJob);
  }

  return (
    <>
      <section className="section">
        <div className="title">
          <h2>experience</h2>
          <div className="underline"></div>
        </div>
        <div className="jobs-center">
          <div className="btn-container">
            {jobs.map((job, index) => {
              //console.log(job);

              return (
                <button
                  key={index}
                  className="job-btn"
                  onClick={() => filterJob(job.company)}
                >
                  {job.company}
                </button>
              );
            })}
          </div>
          <article className="job-info">
            <h3>Full Stack Web Developer</h3>
            <h4>TOMMY</h4>
            <p className="job-date">December 2015 - Present</p>
            {/* {selectedJob ? console.log(selectedJob.title, 'yessss') : ''} */}
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

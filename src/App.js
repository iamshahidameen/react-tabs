import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState([]);

  // fetch(url)
  //   .then((resp) => resp.json())
  //   .then((data) => setJobs(data));

  async function getApiData() {
    const resp = await fetch(url);
    const data = await resp.json();
    setJobs(data);
    setSelectedJob(data[0]);
    setLoading(false);
  }
  useEffect(() => {
    getApiData();
  }, []);
  console.log(jobs, 'all jobs');

  console.log(selectedJob, 'selected Jobs');
  //;

  function filterJob(clickedJob) {
    const newJob = jobs.filter((job) => job.company === clickedJob);
    setSelectedJob(newJob[0], 'this is new job');
    console.log(newJob[0], 'this is new job');
  }
  const { id, company, dates, title } = selectedJob;
  // setJobDuties(selectedJob.duties);
  // console.log(jobDuties, 'job duties');
  if (loading) {
    return <h2>Content Is Being loaded</h2>;
  }
  if (jobs) {
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
                console.log(job, 'new console check');

                return (
                  <button
                    key={id}
                    className={`job-btn ${job.id === id ? 'active-btn' : ''}`}
                    onClick={() => filterJob(job.company)}
                  >
                    {job.company}
                  </button>
                );
              })}
            </div>
            {
              <article className="job-info">
                <h3>{title}</h3>
                <h4>{company}</h4>
                <p className="job-date">{dates}</p>
                {selectedJob.duties.map((duty) => {
                  return (
                    <div className="job-desc">
                      <FaAngleDoubleRight className="job-icon" />
                      <p>
                        Tote bag sartorial mlkshk air plant vinyl banjo
                        lumbersexual poke leggings offal cold-pressed brunch
                        neutra. Hammock photo booth live-edge disrupt.
                      </p>
                    </div>
                  );
                })}
              </article>
            }
          </div>
          <button type="button" className="btn">
            more info
          </button>
        </section>
      </>
    );
  }
}

export default App;

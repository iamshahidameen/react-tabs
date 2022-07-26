import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);
  const [tabs, setTabs] = useState([]);

  // fetch(url)
  //   .then((resp) => resp.json())
  //   .then((data) => setJobs(data));

  async function getApiData() {
    const resp = await fetch(url);
    const data = await resp.json();
    setJobs(data);
    setTabs(data);
    setLoading(false);
  }
  useEffect(() => {
    getApiData();
  }, []);

  function filterJob(clickedJob) {
    //const newJob = jobs.filter((job) => index === clickedJob);
    //setSelectedJob(newJob[0], 'this is new job');
    setValue(clickedJob);
  }

  if (loading) {
    return <h2>Content Is Being loaded</h2>;
  }

  //const { id, company, dates, title } = selectedJob;
  const { id, company, dates, title, duties, order } = jobs[value];
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
              {tabs.map((tab, index) => {
                const { id } = tab;
                return (
                  <button
                    key={id}
                    className={`job-btn ${value === index ? 'active-btn' : ''}`}
                    onClick={() => filterJob(index)}
                  >
                    {tab.company}
                  </button>
                );
              })}
            </div>
            {
              <article className="job-info">
                <h3>{title}</h3>
                <h4>{company}</h4>
                <p className="job-date">{dates}</p>
                {duties.map((duty) => {
                  return (
                    <div className="job-desc">
                      <FaAngleDoubleRight className="job-icon" />
                      <p>{duty}</p>
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

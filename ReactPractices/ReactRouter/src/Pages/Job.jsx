import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Job = () => {
  const jobData = useLoaderData();

  return (
    <div className="job-list">
      {jobData.map((job) => (
        <Link key={job.id} to={`/jobs/${job.id}`} className="job-item">
          <h3>{job.title}</h3>
          <p>{job.company}</p>
          <p>{job.location}</p>
        </Link>
      ))}
    </div>
  );
};

export default Job;

// eslint-disable-next-line react-refresh/only-export-components
export  const jobsLoader = async ()=>{
  const  res=  await fetch("http://localhost:5000/jobs")
  return res.json();
 }

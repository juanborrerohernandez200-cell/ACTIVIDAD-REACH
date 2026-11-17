import JobListing from './JobListing'
import {useState, useEffect} from 'react'
import Spinner from './Spinner'

const JobListings = ({ ishome }) => {
  const [jobs, setJobs] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    const apiUrl = ishome ? 
    '/api/jobs?_page=1&_limit=10' :
    '/api/jobs?_page=1&_limit=20'
const fetchJobs = async () => {
  try {
    const resultado = await fetch(apiUrl)
    const data = await resultado.json()
    setJobs(data)
  } catch (error) {
    console,log('Error al cargar los datos:', error)
  } finally {
    setCargando(false)
  }
} 
fetchJobs()
  }, [])

   
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        {cargando ? (<Spinner loading={cargando} />) : 
        (<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobListing key={job.id} job={job}/>
          ))}
        </div>)}
        
      </div>
    </section>
  )
}

export default JobListings
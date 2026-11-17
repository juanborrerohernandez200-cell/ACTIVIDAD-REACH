import {useParams} from 'react-router'
import {useState, useEffect} from 'react'
const JobPage = () => {
  const {id} = useParams()
  const [job, setJob] = useState(null)
  const [cargando, setcargando] = useState(true)

  useEffect(() => {
    const fetchJob = async () => {
        try {
            const result= await fetch(`/api/jobs/${id}`)
            const data = await result.json()
            setJob(data)
        } catch (error) {
            console.log('Error al cargar los datos:', error)
        } finally {
            setcargando(false)
        }
    }
    fetchJob()
  }, [])

  return (
    <div>
      jobpage {id}
      <h1>{job?.title}</h1>
    </div>
  )
}

export default JobPage

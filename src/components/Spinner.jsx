import {ClipLoader} from 'react-Spinners'

const override = {
  display: 'block',
  margin: '100px auto'
}

const Spinner = ({ cargando }) => {
  return (
    <div>
      <ClipLoader 
      color="#4338ca"
      loading={cargando}
      cssOverride={override}
      size={150}
      />
    </div>
  )
}

export default Spinner


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faSquareInstagram, faSquareThreads } from '@fortawesome/free-brands-svg-icons'

function IconsBar () {
  return (
    <article className='icons'>
      <FontAwesomeIcon icon={faSquareFacebook} />
      <FontAwesomeIcon icon={faSquareInstagram} />
      <FontAwesomeIcon icon={faSquareThreads} />
    </article>
  )
}

export default IconsBar

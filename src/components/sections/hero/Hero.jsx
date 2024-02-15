import logo from '../../../assets/img/logo-flyart-100-px.png'
import IconsBar from '../../generics/icons_bar'
import PropTypes from 'prop-types'

function Hero ({ occupation, institution }) {
  return (
    <header className="hero">
      <picture className="logo">
        <img src={logo} alt="flyart logo" />
      </picture>
      <div className="hero__info">
        <p className="occupation">{occupation}</p>
        <p className="institution">{institution}</p>
      </div>
      <IconsBar />
    </header>
  )
}

Hero.propTypes = {
  occupation: PropTypes.string.isRequired,
  institution: PropTypes.string.isRequired
}

export default Hero

import PropTypes from 'prop-types'

function CardExpo ({ img, alt, title }) {
  return (
    <article className="expo">
      <img src={img} alt={alt} className="expo__img" />
      <h1 className="expo__title">{title}</h1>
    </article>
  )
}

CardExpo.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default CardExpo

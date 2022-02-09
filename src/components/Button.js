import PropTypes from 'prop-types'

const Button= (props) => {
  return(
    <div>
      <button
        onClick={props.onClick}
        className={props.className}
      >
        {props.text}
      </button>
    </div>
  )
}

Button.defaultProps= {
  text: 'button',
  className: 'button'
}

Button.propTypes= {
  text: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button

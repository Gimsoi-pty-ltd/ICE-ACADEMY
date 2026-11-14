
import './Button.css'

export default function Button({
  children,
  onClick,
  variant = 'primary',
  type = 'button',
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`ice-button ice-button-${variant}`}
    >
      {children}
    </button>
  )
}

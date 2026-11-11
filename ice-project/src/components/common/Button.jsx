
export default function Button({
  children,
  onClick,
  variant = 'primary',
  type = 'button',
}) {
  const styles = {
    primary: 'bg-red-600 text-white hover:bg-red-700',
    secondary: 'border border-gray-300 text-gray-900 hover:bg-gray-100',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-3 rounded-md font-semibold transition ${styles[variant]}`}
    >
      {children}
    </button>
  )
}

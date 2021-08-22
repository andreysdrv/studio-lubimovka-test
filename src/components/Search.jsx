export const Search = ({ onSearchSubmit, handleChange, value, title }) => {

  const handleInputChange = (e) => {
    handleChange(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearchSubmit(value)
  }
  
  return (
    <form
      onSubmit={ handleSubmit }
      className="search"
    >
      <h2 className="search__title">{title}
      </h2>
      <div className="search__input-wrapper">
        <input
          placeholder="Что Вы хотите найти?"
          className="search__input"
          type="text"
          onChange={ handleInputChange }
        />
        <button
          className={ `searh__btn ${ value ? '' : 'searh__btn_disabled'}`}
          type="submit"
          disabled={ !value }
          >
            ИСКАТЬ
        </button>
      </div>
    </form>
  )
}
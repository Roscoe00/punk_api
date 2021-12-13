import SearchBox from '../SearchBox/SearchBox';
import "./Navbar.scss";


const Navbar = props => {
   const { label, searchTerm, handleInput, filterABV, filterClassic, filterPh } = props;

   return (<form className='nav'>
      <h1 className='nav__title'>BrewDog IPA Finder</h1>
      <div className='nav__search'>
         <SearchBox label={label} seacherTerm={searchTerm} handleInput={handleInput} />
      </div>
      <input className='nav__check' type="checkbox" id="searchABV" onClick={filterABV} />
      <label className='nav__label' htmlFor="searchABV">High ABV (&#62; 6%)</label>
      <input className='nav__check' type="checkbox" id="searchClassic" onClick={filterClassic} />
      <label className='nav__label' htmlFor="searchClassic">Classic Range</label>
      <input className='nav__check' type="checkbox" id="searchPh" onClick={filterPh} />
      <label className='nav__label' htmlFor="searchPh">Acidic (ph &#60; 4 )</label>
   </form>)
}

export default Navbar
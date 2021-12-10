import SearchBox from '../SearchBox/SearchBox';


const Navbar = props => {
   const { label, searchTerm, handleInput, filterABV, filterClassic, filterPh } = props;

   return (<form>
      <SearchBox label={label} seacherTerm={searchTerm} handleInput={handleInput} />
      <input type="checkbox" id="searchABV" onClick={filterABV} />
      <label htmlFor="searchABV">High ABV (&#62; 6%)</label>
      <input type="checkbox" id="searchClassic" onClick={filterClassic} />
      <label htmlFor="searchClassic">Classic Range</label>
      <input type="checkbox" id="searchPh" onClick={filterPh} />
      <label htmlFor="searchPh">Acidic (ph &#60; 4 )</label>
   </form>)
}

export default Navbar
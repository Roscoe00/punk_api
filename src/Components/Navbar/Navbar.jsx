import SearchBox from '../SearchBox/SearchBox';


const Navbar = props => {
   const { label, searchTerm, handleInput } = props;

   return (<form>
      <SearchBox label={label} seacherTerm={searchTerm} handleInput={handleInput} />
   </form>)
}

export default Navbar
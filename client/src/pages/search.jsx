export default function search() {
return (
<form>
    <div className="search-wrapper">
        <button className="search-btn">Search for movies</button>
         <div className="form-group">
           <input
           type="text"
           className="form-control"
           placeholder="Searching..."
           /> 
        </div>
    </div>
</form>
  );
 }
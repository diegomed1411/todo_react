import './styles/TodoSearch.css'

export const TodoSearch = ({searchValue, setSearchValue}) => {  

  return <input 
  placeholder="Cortar cebolla" 
  className="TodoSearch" 
  value={searchValue}
  onChange={(event)=>{
    setSearchValue(event.target.value)
    console.log(searchValue)
  }}
  />;
};

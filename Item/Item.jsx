import { useNavigate } from 'react-router-dom';


function Item({ item }) {

  const navigate = useNavigate();

  const handleOnClick = () => {
    
    navigate(`./Details/${item.id}`);
  }
    return (
      <li>
        <p>{item.name}</p>
        <button type="button" onClick={handleOnClick}>Ver detalhes</button>
      </li>
    );
  }
  
  export default Item;
  
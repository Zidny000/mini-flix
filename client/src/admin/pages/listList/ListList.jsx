import "./listList.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ListContext } from "../../context/listContext/ListContext";
import { deleteList, getLists } from "../../context/listContext/apiCalls";

export default function AdminListList() {
  const { lists, dispatch } = useContext(ListContext);

  useEffect(() => {
    getLists(dispatch);
  }, [dispatch]);

  console.log(lists)

  const handleDelete = (id) => {
    deleteList(id, dispatch);
  };

  

  return (
    <>
      <Topbar></Topbar>
      <div className="container">
      <Sidebar></Sidebar>
       <div className="productList">
      
      <table>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Gener</th>
          <th>Type</th>
          {/* <th>Edit</th> */}
          <th>Delete</th>
        </tr>
        {lists.map((item)=>{
          return(
            <tr>
            <td>{item._id}</td>
            <td>{item.title}</td>
            <td>{item.genre}</td>
            <td>{item.type}</td>
            {/* <td><Link
              to={{ pathname: "/list/" + item._id, list: item }}
            >
              <button className="productListEdit">Edit</button>
            </Link></td> */}
            <td><DeleteOutline
               className="productListDelete"
               onClick={() => handleDelete(item._id)}
             /></td>
          </tr>
          )
          
        })}
      </table>
    </div>
      </div>
    
    </>
   
  );
}

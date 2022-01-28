import "./movieList.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { deleteMovie, getMovies } from "../../context/movieContext/apiCalls";

export default function AdminMovieList() {
  const { movies, dispatch } = useContext(MovieContext);
  console.log(movies)
  useEffect(() => {
    getMovies(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteMovie(id, dispatch);
  };

  // const columns = [
  //   { field: "_id", headerName: "ID", width: 90 },
  //   {
  //     field: "movie",
  //     headerName: "Movie",
  //     width: 200,
  //     renderCell: (params) => {
  //       return (
  //         <div className="productListItem">
  //           <img className="productListImg" src={params.row.img} alt="" />
  //           {params.row.title}
  //         </div>
  //       );
  //     },
  //   },
  //   { field: "genre", headerName: "Genre", width: 120 },
  //   { field: "year", headerName: "year", width: 120 },
  //   { field: "limit", headerName: "limit", width: 120 },
  //   { field: "isSeries", headerName: "isSeries", width: 120 },

  //   {
  //     field: "action",
  //     headerName: "Action",
  //     width: 150,
  //     renderCell: (params) => {
  //       return (
  //         <>
  //           <Link
  //             to={{ pathname: "/movie/" + params.row._id, movie: params.row }}
  //           >
  //             <button className="productListEdit">Edit</button>
  //           </Link>
  //           <DeleteOutline
  //             className="productListDelete"
  //             onClick={() => handleDelete(params.row._id)}
  //           />
  //         </>
  //       );
  //     },
  //   },
  // ];

  return (
    <>
      <Topbar></Topbar>
      <div className="container">
      <Sidebar></Sidebar>
       <div className="productList">   
      <table>
        <tr>
          <th>ID</th>
          <th>Movie</th>
          <th>Gener</th>
          <th>Year</th>
          <th>Limit</th>
          <th>isSeries</th>
          <th>Delete</th>
        </tr>
        {movies.map((item)=>{
          return(
            <tr>
            <td>{item._id}</td>
            <td> <div className="productListItem">
             <img className="productListImg" src={item.img} alt="" />
             {item.title}
            </div></td>
            <td>{item.genre}</td>
            <td>{item.year}</td>
            <td>{item.limit}</td>
            <td>{item.isSeries ? "Yes" : "No"}</td>
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

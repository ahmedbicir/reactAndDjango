

// import { AiTwotoneDelete,AiFillEdit } from "react-icons/ai";

// const AddMovie = ({ onAdd }) => {
   
  
//     const onUpdate = (id) => {
//       let item = { name };
//       API.patch(`/${id}/`, item).then((res) => refreshMovies());
//     };
  
//     const onDelete = (id) => {
//       API.delete(`/${id}/`).then((res) => refreshMovies());
//     };
  
//     function selectMovie(id) {
//       let item = movies.filter((movie) => movie.id === id)[0];
//       setName(item.name);
//       setGenre(item.genre);
//       setStarring(item.starring);
//       setMovieId(item.id);
//     }
//   return (
//     <div>

// <div className="col-md-8 m">
//           <table class="table">
//             <thead>
//               <tr>
//                 <th scope="col">#</th>
//                 <th scope="col">Movie Name</th>
//                 <th scope="col">Genre</th>
//                 <th scope="col">Starring</th>
//                 <th scope="col"></th>
//               </tr>
//             </thead>
//             <tbody>
//               {movies.map((movie, index) => {
//                 return (
//                   <tr key="">
//                     <th scope="row">{movie.id}</th>
//                     <td> {movie.name}</td>
//                     <td>{movie.genre}</td>
//                     <td>{movie.starring}</td>
//                     <td>
                     
//                       {/* <FontAwesomeIcon icon="fa-solid fa-trash" onClick={() => onDelete(movie.id)} /> */}
//                       <AiFillEdit onClick={() => selectMovie(movie.id)}/>
//                       <AiTwotoneDelete onClick={() => onDelete(movie.id)}/>
                    
                     
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//           <Button
//                 variant="primary"
//                 type="button"
//                 onClick={() => onUpdate(movieId)}
//                 className="mx-2"
//               >
//                 Update
//               </Button>
//         </div>
//     </div>
//   )
// }

// export default AddMovie
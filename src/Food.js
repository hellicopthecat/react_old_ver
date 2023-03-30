// function Food(props) {
//     return <h1>I'm a {props.more}</h1>;
//   }
//   function Drinks({what}) {
//     return <h1>I'm a {what}</h1>;
//   }
//   function Whatmatch({match, whatdrink, rating}) {
//     return (
//       <div>
//         <h2>
//           {match} && {whatdrink}
//         </h2>
//         <h3>{rating} / 5</h3>
//       </div>
//     );
//   }
//   const foodList = [
//     {id: 1, name: "chicken", with: "beer", rating: 4},
//     {id: 2, name: "pizza", with: "wine", rating: 4},
//     {id: 3, name: "row Fish", with: "soju", rating: 5},
//   ];
//   Whatmatch.propTypes = {
//     name: PropTypes.string,
//     with: PropTypes.string,
//     rating: PropTypes.number,
//   };
//   function App() {
//     return (
//       <div>
//         <h1>Hello</h1>
//         <Food more="cheese" />
//         <Drinks what="coffee" />
//         {foodList.map((current) => (
//           <Whatmatch
//             key={current.id}
//             match={current.name}
//             whatdrink={current.with}
//             rating={current.rating}
//           />
//         ))}
//       </div>
//     );
//   }

//   export default App;

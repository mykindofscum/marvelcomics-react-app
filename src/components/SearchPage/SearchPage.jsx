// import React, { Component } from 'react'


// class SearchPage extends Component {
//     state = {
//       results: []
//     }
  
//     handleSearch = async (query) => {
//       console.log(query);
//       const results = await getComics(query);
//       this.setState({ results: results.data });
//         console.log(results.data);
//         return { results: results.data.map };
  
//       // 1. Update state with the results
//     }
  
//     render() {
//       return (
//         <div>
//           <SearchBar onSubmit={this.handleSearch} />
//           <SearchResults result={this.state.results} />
//         </div>
//       );
//     }
//   }

// export default SearchPage;
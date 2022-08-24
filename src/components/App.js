import React from 'react';
import unsplash from '../api/unsplash';
import ImageList from './ImageLists';
import SearchBar from './SearchBar';


class App extends React.Component{

    state ={
        results:[]
    };

    onSearchSubmit = async (term)=>{
      const response =  await unsplash.get('https://api.unsplash.com/search/photos', {
            params:{ query : term}
        });

        this.setState({results: response.data.results});
        console.log(response.data.results);
    };
   
    render(){
        return(
            <div className='ui container' style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.results} />
            </div>
        )
    }   
};

export default App;
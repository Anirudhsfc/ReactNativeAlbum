import React, {Component } from 'react';
import { Text , ScrollView } from  'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component{

    state= {albums:[] };

    componentWillMount(){
       axios.get('https://rallycoding.herokuapp.com/api/music_albums')
       .then(response => this.setState({albums: response.data }));
    }

    renderAlbums(){
        return this.state.albums.map(album => 
        <AlbumDetail key={album.title} album={album} />// passing orop as album and ther key is album .title . we wd haveoreferred album.id if we had had one
        ); //mname of the prop album is not related to the name of the property . it can be any name we can replace the name here by record or anything as the prop

    }
    render(){

        console.log(this.state);
    return(
        <ScrollView>
           {this.renderAlbums()}
           </ScrollView>
    );
    }
}

export default AlbumList;
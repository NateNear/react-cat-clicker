import React from 'react';
import './App.css';
import CatList from './CatList';
import CatDetail from './CatDetail';
import CatForm from './CatForm';
import CatGallery from './CatGallery';

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state={
        cats:[
              {id:1 ,counter:0, name: 'Cat 1', data:'Ginger',age:'infant' ,url:'http://cdn3-www.cattime.com/assets/uploads/2011/08/best-kitten-names-1.jpg'},
              {id:2, counter:0 ,name: 'Cat 2', data:'Brown',age:'infant' ,url:'http://inspirationseek.com/wp-content/uploads/2016/02/Cute-Kitten-Pics_32.jpg'},
              {id:3 ,counter:0, name: 'Cat 3', data:'Red',age:'infant' ,url:'http://cdn3-www.cattime.com/assets/uploads/2011/08/best-kitten-names-1.jpg'},
              {id:4, counter:0 ,name: 'Cat 4', data:'Purple',age:'infant' ,url:'http://inspirationseek.com/wp-content/uploads/2016/02/Cute-Kitten-Pics_32.jpg'},
              {id:5 ,counter:0, name: 'Cat 5', data:'Violet',age:'infant' ,url:'http://cdn3-www.cattime.com/assets/uploads/2011/08/best-kitten-names-1.jpg'},
              {id:6, counter:0 ,name: 'Cat 6', data:'Yellow',age:'infant' ,url:'http://inspirationseek.com/wp-content/uploads/2016/02/Cute-Kitten-Pics_32.jpg'},
              {id:7 ,counter:0, name: 'Cat 7', data:'Black',age:'infant' ,url:'http://cdn3-www.cattime.com/assets/uploads/2011/08/best-kitten-names-1.jpg'},
              {id:8, counter:0 ,name: 'Cat 8', data:'Love',age:'infant' ,url:'http://inspirationseek.com/wp-content/uploads/2016/02/Cute-Kitten-Pics_32.jpg'},
              {id:9 ,counter:0, name: 'Cat 9', data:'Black',age:'infant' ,url:'http://cdn3-www.cattime.com/assets/uploads/2011/08/best-kitten-names-1.jpg'},
              {id:10, counter:0 ,name: 'Cat 10', data:'Hail',age:'infant' ,url:'http://inspirationseek.com/wp-content/uploads/2016/02/Cute-Kitten-Pics_32.jpg'},
        
        ],
        selectedCat: {id:1 ,counter:0, name: 'Cat 1', data:'Ginger',age:'infant' ,url:'http://cdn3-www.cattime.com/assets/uploads/2011/08/best-kitten-names-1.jpg'}
    }
  }

  selectACat = (id) => {
    let searchedCat = this.state.cats.filter(cat => cat.id == id);
    this.setState({
      selectedCat: searchedCat[0]
    })
  }

  increment = () => {
    let newSelectedCat = this.state.selectedCat;
    let newCatState = this.state.cats;
    newSelectedCat.counter += 1;

    if(newSelectedCat.counter >= 6 && newSelectedCat.counter <= 12) {
      newSelectedCat.age = 'Child'
    }
    if(newSelectedCat.counter >= 13 && newSelectedCat.counter <= 25) {
      newSelectedCat.age = 'Young'
    }
    if(newSelectedCat.counter >= 26 && newSelectedCat.counter <= 40) {
      newSelectedCat.age = 'Middle-Age'
    }
    if(newSelectedCat.counter >= 41 && newSelectedCat.counter <= 60) {
      newSelectedCat.age = 'Old'
    }
    if(newSelectedCat.counter >= 61) {
      newSelectedCat.age = 'Very Old'
    }

    let index = newCatState.findIndex(cat => cat.id == newSelectedCat.id);
    newCatState[index].counter = newSelectedCat.counter;
    newCatState[index].age = newSelectedCat.age;
    this.setState({
      cats: newCatState,
      selectedCat: newSelectedCat
    })
  }

  incrementByID = async (id) => {
    let waitForSetState = await this.selectACat(id);
    this.increment();
  }

  changeUrlAndCounter = (counter, url) => {
    let newSelectedCat = this.state.selectedCat;
    let newCatState = this.state.cats;
    let index = this.state.cats.findIndex(cat => cat.id == newSelectedCat.id);
    newSelectedCat.counter = counter;
    newSelectedCat.url = url;
    newCatState[index].counter = counter;
    newCatState[index].url = url;
    this.setState({
      selectedCat: newSelectedCat,
      cats: newCatState
    })
  }

  createANewCat = (name, counter, url) => {
    let newAge = counter >= 0 && counter <= 5 ? 'Infant' :
                 counter >= 6 && counter <= 12 ? 'Child' :
                 counter >= 13 && counter <= 25 ? 'Young' :
                 counter >= 26 && counter <= 40 ? 'Middle-Age' :
                 counter >= 41 && counter <= 60 ? 'Old' : 'Very Old'

    let newCat = {
      id: this.state.cats[this.state.cats.length-1].id + 1,
      counter: counter,
      url: url,
      data: 'New cat',
      age: newAge,
      name: name
    };
    let newCatState = this.state.cats;
    newCatState.push(newCat);
    this.setState({
      cats: newCatState,
      selectedCat: newCat
    })
  }

  render(){
    return (
      <div className="App">
        <header>
            <div className="Title">
              <p className="TitleText">Cat Clicker App</p>
            </div>
        </header>
        <div className="Panels">
          <CatList cats={this.state.cats} selectACat={this.selectACat} selectedListCat={this.state.selectedCat}/>
          <CatDetail selectedCat={this.state.selectedCat} Increment={this.increment} />
          <CatForm createANewCat={this.createANewCat} changeUrlAndCounter={this.changeUrlAndCounter} data={this.state.selectedCat}/>
        </div>
        <div>
          <CatGallery incrementByID={this.incrementByID} catList={this.state.cats}/>
        </div>
      </div>
    );
  }
}

export default App;

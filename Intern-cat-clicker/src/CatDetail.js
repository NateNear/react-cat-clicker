import React from 'react';
import './CatDetail.css';

class CatDetail extends React.Component{

	render(){
		return(
			<div className="CatDetail">
			  <div className="CatInfo">
		      	<p className="CardDetailText">{this.props.selectedCat.name}</p>
		        <p className="CardDetailText">Number of times clicked :{this.props.selectedCat.counter}</p>
	          </div>
	          <div onClick={this.props.Increment}>
	          	<img className="CatImage" src={this.props.selectedCat.url}/>
	          </div>
	          <div className="CatInfo">
	          	<p className="CardDetailText">{this.props.selectedCat.data}</p>
	          	<p className="CardDetailText">{this.props.selectedCat.age}</p>
	          </div>
	        </div>
		);
}

}


export default CatDetail;
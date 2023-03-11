import React from 'react';
import './CatGalleryItem.css';


class CatGalleryItem extends React.Component{

	constructor(props) {
		super(props);
	}

	handleClick = (e, id) => {
		this.props.incrementByID(id);
	}

	render(){
		return(
				<div className="CatGalleryItem">
					<p>{this.props.name}</p>
					<p className="ItemTextStyle">Number of Times Clicked: {this.props.times}</p>
					<div onClick={(e) => this.handleClick(e, this.props.id)}>
						<a href="#">
						<img className="CatGalleryImage" src={this.props.pic}/>
						</a>
					</div>
				</div>
			);
	}
}


export default CatGalleryItem;
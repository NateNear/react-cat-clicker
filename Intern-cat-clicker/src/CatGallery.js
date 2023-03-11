import React from 'react';
import './CatGallery.css';
import CatGalleryItem from './CatGalleryItem';


class CatGallery extends React.Component{

	constructor(props) {
		super(props);
	}

	render(){
		let galleryList=this.props.catList.map((cat, index) => {
			return <CatGalleryItem incrementByID={this.props.incrementByID} id={cat.id} name={cat.name} times={cat.counter} pic={cat.url}/>
		})
		return(

				<div className="CatGallery">
					<div className="Padding">
					</div>
					<p className="CatsImageGalleryText">Cats Image Gallery</p>
					<div className="ItemsDisplay">
						{galleryList}
					</div>
				</div>
			);
	}
}


export default CatGallery;
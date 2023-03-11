import React from 'react';
import './CatList.css';
import {Button,Badge} from 'react-bootstrap';

class CatList extends React.Component {

	constructor(props) {
		super(props);
	}

	handleClick = (e, id) => {
		this.props.selectACat(id);
	}

	render() {
		let catsBar = this.props.cats.map((cat, index) => {
			return <Button key={index} variant={cat.id == this.props.selectedListCat.id ? 'primary' : 'light'}  size="lg" block onClick={(e) => this.handleClick(e, cat.id)}>
				 	{cat.name} <Badge pill variant="secondary">{cat.counter}</Badge>
				  </Button>
		})
		return(
			 <div className="CatList">
			 	{catsBar}
	        </div>
		);
	}
}


export default CatList;
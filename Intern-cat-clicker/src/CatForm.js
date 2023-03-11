import React from 'react';
import {Button,Badge} from 'react-bootstrap';
import './CatForm.css';

class CatForm extends React.Component{

	constructor(props){
		super(props)
		this.state={
			currentUrl:this.props.data.url,
			currentCounter:this.props.data.counter,
			currentName:this.props.data.name,
			id: this.props.data.id
		}

	}

	componentDidUpdate(prevProps, prevState) {
		console.log(prevState, prevProps.data, this.props.data)
		if(this.props.data.id != prevState.id) {
			console.log('Change')
			this.setState({
				currentUrl:this.props.data.url,
				currentCounter:this.props.data.counter,
				currentName:this.props.data.name,
				id: this.props.data.id
			})
		}
	}

	handleChange = (event, type) => {
		console.log(type, event.target.value)
		if(type == 'name') {
			this.setState({currentName: event.target.value});
		}
		if(type == 'url') {
			this.setState({currentUrl: event.target.value});
		}
		if(type == 'click') {
			this.setState({currentCounter: event.target.value});
		}
	}

	saveChanges = (e) => {
		if(this.state.currentName != this.props.data.name) {
			this.props.createANewCat(this.state.currentName, parseInt(this.state.currentCounter), this.state.currentUrl);
		}
		else if((this.state.currentCounter != this.props.data.counter) || (this.state.currentUrl != this.props.data.url)) {
			this.props.changeUrlAndCounter(parseInt(this.state.currentCounter), this.state.currentUrl);
		}
		else {
			return;
		}
	}

	// static getDerivedStateFromProps(nextProps, prevState) {
	//   if(nextProps.data !== prevState.data ) {	
	//     return {
			// currentUrl: nextProps.data.url,
			// currentCounter: nextProps.data.counter,
			// currentName: nextProps.data.name
	// 	};
	//   }
	// }

	render(){
	return(
			<div className="CatForm">
	          <form className="form">
	            <label className="labels">
	              Cat Name 
	              <input type="text" value={this.state.currentName} onChange={(e) => this.handleChange(e, 'name')}/>
	            </label>
	            <br/>
	            <label className="labels">
	              Cat Image	
	              <input type="text" value={this.state.currentUrl} onChange={(e) => this.handleChange(e, 'url')}/>
	            </label>
	            <br/>
	            <label className="labels">
	              Cat Clicks
	              <input type="text" value={this.state.currentCounter} onChange={(e) => this.handleChange(e, 'click')}/>
	            </label>
	            <br/>
	            <Button variant='success' onClick={this.saveChanges}>Save</Button>
	            <Button variant='danger'>Undo</Button>
	          </form>
        	</div>
		);
}
}

export default CatForm;
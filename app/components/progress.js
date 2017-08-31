import React from 'react';
import { render } from 'react-dom';
import './progress.less'
// import './hello.less'
let Progress=React.createClass({
	getDefaultProps(){
		return {
			barColor:'#2f9842'
		}	
	},
	changeProgress(e){
		let progressBar=this.refs.progressBar;
		let progress=(e.clientX-progressBar.getBoundingClientRect().left)/progressBar.clientWidth;
		this.props.onProgressChange(progress);
	},
	render(){
		return(
			<div className="components-progress row" ref="progressBar" onClick={this.changeProgress}>
				<div className="progress" style={{width:`${this.props.progress}%`,background:this.props.barColor}} >
				</div>
			</div>
		);
	}
});
export default Progress;
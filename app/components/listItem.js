import React from 'react';
require('./listitem.less');
import Pubsub from 'pubsub-js';

let ListItem = React.createClass({
	deleteHandler(item, e) {
		e.stopPropagation();
		PubSub.publish('DEL_MUSIC', item);
	},
    playMusic(musicItem,e){
        Pubsub.publish('PLAY_MUSIC',musicItem);
    },
    render() {
    	let item = this.props.data;
        return (
            <li className={`row components-listitem${this.props.focus ? ' focus' : ''}`} onClick={this.playMusic.bind(this,item)}>
                <p><span className="bold">{item.title}</span>  -  {item.artist}</p>
                <p className="-col-auto delete" onClick={this.deleteHandler.bind(this, item)}></p>
            </li>
        );
    }
});

export default ListItem;

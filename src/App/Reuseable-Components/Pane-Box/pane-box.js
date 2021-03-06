import React from 'react';
import styles from './styles.css';

const PaneBox = (props) => (
                <div key={props.key} id="pane-box-id" className="paneBox-outerDiv">
                    <img src={props.eachVideo.imageOne} className="paneBox-fineBorder" width={400} height={200} />
                    <h2 className="paneBox-title">{props.eachVideo.title}</h2>
                    <h4 className="paneBox-tagline">{props.eachVideo.tagline}</h4>
                </div>
);

export default PaneBox;



import React from 'react';
import Particles from 'react-particles-js';
const Particlse = () => {
    return (
        <div>
        <Particles
        params={{
	    "particles": {
	        "number": {
	            "value": 150
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
        </div>
    );
}

export default Particlse;

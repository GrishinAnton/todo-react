// Rewire create-react-app so not to eject it 
// Add styled-components helper for naming classes  

const { compose } = require('react-app-rewired');  

module.exports = (config, env) => {   
    const rewires = compose(require('react-app-rewire-styled-components'));
    
    return rewires(config, env);
 };
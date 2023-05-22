import React from 'react';

// "React.createContext()" is a function in the React Library that creates a new context object
const UserContext = React.createContext();


// "UserContext.Provider" is a component allows other components to use the context object and supply the necessary informatyion need to the context object
export const UserProvider = UserContext.Provider;

export default UserContext;

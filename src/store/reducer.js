let defaultState = {
    title:'Equipment Management'
}
const changeTitle = (state=defaultState,action)=>{
    let newState = {...defaultState};
    if(action.type === 'add'){
        newState.title = 'Add Equipment';
        return newState;
    }else if(action.type === 'detail'){
        newState.title = 'Equipment Detail';
        return newState;
    }else if(action.type === 'list'){
        newState.title = 'Equipment Management';
        return newState;
    }
    return state;
    
};
export default changeTitle;
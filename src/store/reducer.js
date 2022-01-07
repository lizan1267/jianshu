const defaultState={
    focused:false
};

export const reducer=(state=defaultState,action)=>{
    switch(action.type){
        case 'search_focus':
            return {focused:true}
        case 'search_blur':
            return {focused:false}
    }
    return state;
}
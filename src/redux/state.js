import { RenderUpdate } from './../render';


let store = {
    _state: {
        textForAlert: 'Hello world'
    },

    dispatch(action)
    {
        if(action.type === 'APP-CHANGETEXT')
        {
            console.log(action.value);
            this._state.textForAlert = action.value;
            RenderUpdate(this);
        }
    }
};

export default store;
window.store = store;
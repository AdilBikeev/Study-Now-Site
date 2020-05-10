import { RenderUpdate } from './../render';

const APP_CHANGETEXT = 'APP_CHANGETEXT';

let store = {
    _state: {
        App: {
            textForAlert: 'Hello world'  
        }
    },

    dispatch(action)
    {
        debugger;
        if(action.type === APP_CHANGETEXT)
        {
            console.log(action.value);
            this._state.App.textForAlert = action.value;
            RenderUpdate(this);
        }
    }
};

export const onTextAreaChangeActionCreator = (textNew) => ({
    type: APP_CHANGETEXT,
    value: textNew
});

export default store;
window.store = store;
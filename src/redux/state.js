const APP_CHANGETEXT = 'APP_CHANGETEXT';

let store = {
    _state: {
        App: {
            textForAlert: 'Hello world'  
        }
    },

    _callSubscriber(nameCallback){
        console.log(`callback: ${nameCallback}`);
    },

    subscribe(observe){
        this._callSubscriber = observe;
    },

    dispatch(action){
        if(action.type === APP_CHANGETEXT)
        {
            console.log(action.value);
            this._state.App.textForAlert = action.value;
            this._callSubscriber(this);
        }
    }
};

export const onTextAreaChangeActionCreator = (textNew) => ({
    type: APP_CHANGETEXT,
    value: textNew
});

export default store;
window.store = store;
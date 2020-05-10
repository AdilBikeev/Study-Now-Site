import { RenderUpdate } from './../render';


let store = {
    _state: {
        App: {
            textForAlert: 'Hello world',
            ChangeTextForAlert(text) {
                console.log(text);
                this.textForAlert = text;
                RenderUpdate(store._state);
            }
        }
    }
};

export default store._state;
window.store = store;
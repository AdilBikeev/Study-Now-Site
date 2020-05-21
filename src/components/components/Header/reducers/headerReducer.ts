type initialStateHeader = {
    titleSchool: string,
    titleUniversity: string,
    titleIT: string
};

let initialState: initialStateHeader = {
    titleSchool: 'Школа',
    titleUniversity: 'Университет',
    titleIT: 'IT'
}

export const headerReduser = (state = initialState, action: any): initialStateHeader => {
    switch (action.type) {
        default:
            return state;
    }
}
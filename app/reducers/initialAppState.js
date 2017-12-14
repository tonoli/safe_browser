const initialState = {
    bookmarks : [ ],
    notifications : [
    ],
    tabs : [{
        url          : 'peruse:bookmarks',
        // url          : 'safe-auth://home/',
        history      : ['peruse:bookmarks'],
        // history      : ['safe-auth://home/'],
        historyIndex : 0,
        isActiveTab  : true,
        isClosed     : false,
        windowId     : 1
    }],
    ui : {
        addressBarIsFocussed : false
    }
};

export default initialState;

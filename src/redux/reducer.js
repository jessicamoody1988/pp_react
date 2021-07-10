import { EVENTS } from '../shared/events';
import { ARTISTS } from '../shared/artists';

export const initialState = {
    events: EVENTS,
    artists: ARTISTS
};

export const Reducer = (state = initialState, action) => {
    return state;
};
import reducer from './reducer';


describe("reducer derives the next state as expected", () => {
  let INITIAL_STATE = {
    colorIndex: 0,
    mode: true
  };

  it('when the action type is empty', () => {
    const state = reducer(INITIAL_STATE, {});
    expect(state.colorIndex).toBe(0);
    expect(state.mode).toBe(true);
  });

  it('when the action type is null', () => {
    const state = reducer(INITIAL_STATE, {type: null});
    expect(state.mode).toBe(true);
  });

  it('when the action type is undefined', () => {
    const state = reducer(INITIAL_STATE, {type: undefined});
    expect(state.mode).toBe(true);
  });

  it('when the action type is NEXT and index is 0', () => {
    const state = reducer(INITIAL_STATE, {type: 'NEXT'});
    expect(state.colorIndex).toBe(1);
  });

  it('when the action type is NEXT and index is 2', () => {
    INITIAL_STATE.colorIndex = 2;
    const state = reducer(INITIAL_STATE, {type: 'NEXT'});
    expect(state.colorIndex).toBe(0);
  });

  it('when the action type is NEXT and mode is true', () => {
    const state = reducer(INITIAL_STATE, {type: 'NEXT'});
    expect(state.mode).toBe(true);
  });

  it('when the action type is MODE and mode is true', () => {
    const state = reducer(INITIAL_STATE, {type: 'MODE'});
    expect(state.mode).toBe(false);
  });


});

import successReducer from './successReducer';
import { actionTypes } from '../actions';

test('returns initial state when no action is passed', () => {
  const newState = successReducer(undefined, { });
  expect(newState).toBe(false)
});

test('returns state of true upon receiving an action of types (возвращает true при совпадении имени экшена)', () => {
  const newState = successReducer(undefined, { type: actionTypes.CORRECT_GUESS });
  expect(newState).toBe(true)
});

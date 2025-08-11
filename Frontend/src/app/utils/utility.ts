// general utility methods
import * as _ from 'lodash';

/**
 * get error message from an error object
 * @param e the error obj
 */
export function getErrorMessage(e) {
  if (e && e.error && e.error.errorMessage) {
    return e.error.errorMessage;
  }
  return 'unknown error';
}


/*
  in an array of objects update the array at a given index with a new object
  and return new array instance
 */
export function updateArrAtIndex<T>(arr: T[], index: number, newObj: T): T[] {
  return [
    ..._.slice(arr, 0, index),
    newObj,
    ..._.slice(arr, index + 1)
  ];
}

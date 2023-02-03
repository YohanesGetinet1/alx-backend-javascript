import {RowID , RowElement} from './interface';
/*Ambient file containing the type declaration for each crud function */

export function insertRow(row : RowElement) : number;
export function deleteRow(rowID : RowID) : void;
export function updateRow(rowID : RowID, row:RowElement) : RowID;
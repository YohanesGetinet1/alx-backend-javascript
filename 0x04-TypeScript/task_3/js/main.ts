/// <reference path="./crud.d.ts" />

import {RowID , RowElement} from './interface';
import * as CRUD from './crud';

const row : RowElement = {
    firstName : 'Guilaume',
    lastName : 'Salva'
}

const newRowID : RowID = CRUD.insertRow(row);
const updateRow: RowElement = {...row, age:23};

// calling function
CRUD.updateRow(newRowID, updateRow);
CRUD.deleteRow(newRowID);
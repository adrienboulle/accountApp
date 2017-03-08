import  { Injectable } from '@angular/core';
import { Operation }   from '../operation/operation';

@Injectable()
export class OperationService {
    private currentOp: Operation;
    private emptyOp: Operation;

    setCurrentOp(op: Operation) {
        if(this.currentOp == op) {
            this.currentOp = this.emptyOp;
        }else{
            this.currentOp = op;
        }
    }

    getCurrentOp(): Operation {
        return this.currentOp; 
    }

}
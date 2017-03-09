import  { Injectable } from '@angular/core';
import { Operation }   from '../operation/operation';

@Injectable()
export class OperationService {
    private currentOp: Operation;
    private emptyOp: Operation;

    setCurrentOp(op: Operation) {
        this.currentOp = this.currentOp === op ? undefined : op;
    }

    getCurrentOp(): Operation {
        return this.currentOp; 
    }

}
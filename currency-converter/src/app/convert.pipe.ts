import { Pipe, PipeTransform } from '@angular/core';

// make a variable name for the HTML
@Pipe({
    name: 'convert'
})

export class ConvertPipe implements PipeTransform {
    
    transform(value: any, args?: any): any {
        return value / 70.64;
    }
}
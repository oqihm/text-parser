// camel-case-to-normal.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCaseToNormal'
})
export class CamelCaseToNormalPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value;

    return value
      .replace(/([a-z])([A-Z])/g, '$1 $2') // Add space between camel case words
      .replace(/^./, str => str.toUpperCase()); // Capitalize the first letter
  }

}

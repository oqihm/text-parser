export interface Field {
    name: string;
    displayText: string;
    dataType: DataType; // Or use 'number' if it's always 'number'
    list: ListItem[];
    mandatory: boolean;
    hidden: boolean;
    value: string;
  }

  export interface ListItem {
    // id: string;
    name: string;
    value: string;
  }
  
  export interface Configuration {
    // fields: Field[];
    // calculations: Calculation[];
    categories: Category[];
  }

  export interface Category {
    type: CategoryType;
    fields: Field[];
    calculations: Calculation[];
  }

  export interface Calculation {
    name: string;
    value: string;
  }

  export enum DataType {
    Text = "text",
    List = "list",
    Number = "number"
  }

  export enum CategoryType {
    Field = "fields",
    Calculation = "calculations"
  }
export interface Field {
    name: string;
    dataType: DataType; // Or use 'number' if it's always 'number'
    list: ListItem[];
    mandatory: boolean;
    hidden: boolean;
  }

  export interface ListItem {
    // id: string;
    name: string;
    value: string;
  }
  
  export interface Configuration {
    fields: Field[];
    calculations: Calculation[];
  }

  export interface Calculation {
    name: string;
    value: string;
  }

  enum DataType {
    Text = "text",
    List = "list",
    Number = "number"
  }

  enum CategoryType {
    Field = "fields",
    Calculation = "calculations"
  }
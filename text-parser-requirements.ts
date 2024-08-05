interface Field {
  id: number;
  name: string;
  dataType: DataType;
  list?: KeyValuePair[] | null;
  mandatory: boolean;
  hidden: boolean;
}

interface KeyValuePair {
  key: string;
  value: string;
}

enum DataType {
  Text = "text",
  List = "list",
  Number = "number"
}

// category Fields
// Field "fieldname1"
// DataType list
// Mandatory true
// List {
//   id1: "value1",
//   id2: "value2"
// }

// Field "fieldname2"
// DataType number
// Mandatory true
// endcategory


// category Calculations
//   Calculation "calc1"
//   Value "100"
//   Calculation "calc2"
//   Value "200"
// endcategory
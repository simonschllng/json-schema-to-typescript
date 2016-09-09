export var schema =
{
  "title": "Referencing",
  "type": "object",
  "properties": {
    "foo": {
      "$ref": "test/resources/ReferencedType.json"
    },
    "bar": {
      "$ref": "test/resources/geo.json"
    }
  },
  "required": ["foo"],
  "additionalProperties": false
}

export var configurations = [
  {
    settings: {
      declareReferenced: true
    },
    types: `export interface ExampleSchema {
  firstName: string;
  lastName: string;
  age?: number; // Age in years
  height?: number;
  favoriteFoods?: any[];
  likesDogs?: boolean;
  [k: string]: any;
}
/** A geographical coordinate */
export interface Geo {
  latitude?: number;
  longitude?: number;
  [k: string]: any;
}
export interface Referencing {
  foo: ExampleSchema;
  bar?: Geo;
}`
  },
  {
    settings: {
      declareReferenced: false
    },
    types: `export interface Referencing {
  foo: ExampleSchema;
  bar?: Geo;
}`
  }
]

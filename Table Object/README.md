Create an object in a tabular format.

```js
const table_obj = [
    ['first_name',  'last_name',  'occupation'],
    ['John',        'Smith',      'Carpenter'],
    ['Jane',        'Doe',        'Programmer']
  ]
  
new ObjectArrayFromTableObject(table_obj);
```

Returns:
```js
[
  {
    first_name: 'John',
    last_name: 'Smith',
    occupation: 'Carpenter'
  },
  {
    first_name: 'Jane',
    last_name: 'Doe',
    occupation: 'Programmer'
  }
]
*/
```
## Wheels

#### DeepCopy: 

Self-explainatory … deep copy an object by first stringify it to JSON object and then parse it back to object. 

#### JSONConfigBuilder:

Adds or alerts property in a JSON object, given some well-formed specification. I found it useful when using ChartJS, where I have defined a default chart option JSON, and I want to extend that config to create different charts. 



**Example**:

```javascript
let spec = [{
  path: ['keyA', 'childKey', 0, 'targetKey'],
  value: 100
}];
let source = {
  keyA: {
    childKey: [{
      targetKey: 200
    }]
  }
};
console.log(buildJSON(source, spec));
// Output: { keyA: { childKey: [{ targetKey: 100 }] }}

/* If a key is not found, a new child will be added using that key and the given value. So the output will be: 
* { keyA: { childKey: [{ targetKey: 200 }, 100] }}
* If spec path is ['keyA', 'childKey', 1, 'targetKey']
*/

```
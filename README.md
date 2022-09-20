# archer-loader
## description
a simple javascript UI loader  
It will display a rotating 1/4 colored circle

image:    
![](https://i.imgur.com/3rQeRqK.jpg)

## Install
`npm install archer-loader`

## method
#### `show()`
display the loader
when use `show()` can also use parameters to change color, speed, or text     
sample code:    
```javascript
loader.show("#255AC4", 1.5, "Loading...");
```

parameters are as below    
| parameters  |  type    |    description     |
| -----------------|:-------- |:----------------------- |
|  color       |  string  |  color code
|  speed       |  number  |  speed of loader (seconds)
|  text        |  string  |  display text under rotating circle 


#### `close()` 
close the loader    
sample code:    
```javascript
loader.close();
```

## Useage
### In create-react-app, vue-cli, or angular project 
first, import loader   
```javascript
import loader from 'archer-loader';
```

then use `show()` method to display the loader   
```javascript
loader.show();
```  
Also can use parameters to add color, text , and change speed as below  
```javascript
loader.show("#255AC4", 1.5, "Loading...");
```  

when don't want the loader display, use `close()` to close the loader

### Html 
If only use in a `html`
example:
```html
    <script type="module">
        import loader from "./node_modules/archer-loader/archer-loader.js"
        loader.show("#5D1000", 2.5, "123");
        //loader.close();
    </script>
```

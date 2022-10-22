# archer-loader
## description
a simple javascript UI loader  
It will display a rotating 1/4 colored circle, and produce a background div to cover the screen.

image:    
v1.1.4   
![](https://i.imgur.com/3rQeRqK.jpg)   
v1.1.2   
![](https://i.imgur.com/cnPtwEu.png)

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
|  color       |  string  |  color code (change color of the circle and text's background)
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

### Use UNPKG's CDN
example:
use dist folder
```html
    <script src="https://unpkg.com/archer-loader@1.1.4/dist/archer-loader.cdn.js">
    </script>
    <script>
        loader.show("#5D1000", 2.5, "123");
        //loader.close();
    </script>
```
Also can use a previous version, just cahnge the @[version] block.  
An example using `1.1.2` version
```html
<script src="https://unpkg.com/archer-loader@1.1.2/dist/archer-loader.cdn.js"></script>
```

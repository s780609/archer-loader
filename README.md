# archer-loader
## description
a simple javascript loader(UI)  

## Install
`npm install archer-loader`

## method
#### `show()` method => display the loader
when use `show()` can also use parameters to change color, speed, or text     
parameters are as below 
| parameters  |  type    |    description     |
| -----------------|:-------- |:----------------------- |
|  color       |  string  |  color code
|  speed       |  number  |  speed of loader (seconds)
|  text        |  string  |  display text   


#### `close()` => close the loader

## Useage
### create-react-app, vue-cli, or angular project 
first, import loader      
`import loader from 'archer-loader';`      
then use `show()`
or use parameters to add color, text , and change speed as below  
`loader.show("#255AC4", 1.5, "Loading...");`  
![](https://i.imgur.com/3rQeRqK.jpg)

when don't want the loader display, use `close()` to close the loader

### Html 
In html
example:
```html
    <script type="module">
        import loader from "./node_modules/archer-loader/archer-loader.js"
        loader.show("#5D1000", 2.5, "123");
        //loader.close();
    </script>
```

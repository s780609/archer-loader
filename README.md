# archer-loader
## description
a simple javascript loader    

## Install
`npm install archer-loader`

## method
#### `show()` method => display the loader
| parameters  |  type    |    description     |
| -----------------|:-------- |:----------------------- |
|  color       |  string  |  color code
|  speed       |  number  |  speed of loader (second)
|  text        |  string  |  display text   


#### `close()` => close the loader

## Useage
first, import loader      
`import loader from 'archer-loader';`      
then use `show()` and `close()` methods      
`loader.show()`   or        
`loader.close()`      
or use parameters to add color, text , and change speed as below
`loader.show("#255AC4", 1.5, "Loading...");`  

![](https://imgur.com/a/0G8hGAp)

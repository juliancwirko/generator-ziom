# generator-ziom

Angular + Bootstrap + Scss (Libsass) simple and custom scaffold generator.

## Getting Started

```
$ npm install -g yo
```

To install generator-ziom from npm, run:

```
$ npm install -g generator-ziom
```

Finally, initiate the generator:

```
$ yo ziom
```

## Grunt tasks:

..for watching (Sass, Server on 127.0.0.1:9000 with LiveReload)
```
$ grunt
```
..for publishing project (dist directory)
```
$ grunt publish
```
..for dist directory preview (server on 127.0.0.1:9001)
```
$ grunt server-dist
```
#### Other Grunt tasks

..for validating javascript
```
$ grunt validate-js
```
..for injecting bower libraries (also in default grunt task)
```
$ grunt bower-install
```
..for compiling Sass files
```
$ grunt compile-sass
```

### LiveReload

For LiveReload call 'grunt' (watching) command and go to http://127.0.0.1:9000

### Usemin

Read more about [grunt-usemin](https://github.com/yeoman/grunt-usemin)

### Bower-install

Now you can install your libraries much faster. Example: 
```
bower search magnific-popup
...
bower install magnific-popup --save
...
grunt bower-install
```
This should inject the proper js and css paths into your html files. But you should be careful and check what was injected.
'grunt publish' will then minify and concatenate them into a clean files.
Instead of a 'bower install' with '--save' you can manualy edit the bower.json file and then run a 'grunt bower-install'. It is also included in the default task - 'grunt'.


### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## License

MIT

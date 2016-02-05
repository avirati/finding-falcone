# Finding Falcone

Finding Falcone is a task from GeekTrust.in

### Tech

Dillinger uses a number of open source projects to work properly:

* [AngularJS]
* [Angular Materialize]
* [Materialize]
* [jQuery]
* [Jasmine]
* [Karma]


### Build

You need Grunt installed globally:

```sh
$ npm install -g grunt
```

```sh
$ git clone https://github.com/avirati/finding-falcone finding-falcone
$ cd finding-falcone
$ npm install
$ bower install
$ grunt
$ cd dist/
$ python -m SimpleHTTPServer <PORT>
```

### Run the project

open http://localhost:<PORT>

### Testing

$ npm install -g karma
$ cd test/
$ karma start

License
----

MIT


**Free Software, Hell Yeah!**


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [AngularJS]: https://angularjs.org/
   [Angular Materialize]: https://github.com/krescruz/angular-materialize
   [Materialize]: http://materializecss.com
   [jQuery]: https://jquery.com/
   [Jasmine]: http://jasmine.github.io/
   [Karma]: https://karma-runner.github.io/0.13/index.html
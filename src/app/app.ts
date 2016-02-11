/*
 * Angular 2 decorators and services
 */
var css = require('./app.less');
var bs = require('bootstrap');

import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';

import {RouterActive} from './directives/router-active';
import {Home} from './home/home';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  providers: [ ...FORM_PROVIDERS ],
  directives: [ ...ROUTER_DIRECTIVES, RouterActive ],
  pipes: [],
  styles: [`
    body {
      padding-top: 50px;
    }
    .starter-template {
      padding: 40px 15px;
      text-align: center;
    }
  `],
  template: `
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Project name</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li router-active>
              <a [routerLink]=" ['Index'] ">Index</a>
            </li>
            <li router-active>
              <a [routerLink]=" ['Home'] ">Home</a>
            </li>
            <li router-active>
              <a [routerLink]=" ['About'] ">About</a>
            </li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>

    <div class="container">
      <div class="starter-template">
        <h1>Hello {{ name }}</h1>
        <p class="lead">Use this document as a way to quickly start any new project.<br> All you get is this text and a mostly barebones HTML document.</p>
        <p>This project uses
          <a target="_blank" href="http://getbootstrap.com/examples/starter-template/">Bootstrap's starter template</a>.
          To just ensure everything is working, click the modal button below.
        </p>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-sm">Small modal</button>
      </div>
      <router-outlet></router-outlet>

      <!-- Small modal -->
      <div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
        <div class="modal-dialog modal-sm">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="gridSystemModalLabel">Modal title</h4>
            </div>
            <div class="modal-body">
              I am a modal
            </div>
          </div>
        </div>
      </div>
    </div><!-- /.container -->

    <footer class="text-center">
      <hr>
      WebPack Angular 2 Starter by <a [href]="url">@AngularClass</a>
      <div>
        <img [src]="angularclassLogo" width="10%">
      </div>
    </footer>
  `
})
@RouteConfig([
  { path: '/', component: Home, name: 'Index' },
  { path: '/home', component: Home, name: 'Home' },
  // Async load a component using Webpack's require with es6-promise-loader
  { path: '/about', loader: () => require('./about/about')('About'), name: 'About' },
  { path: '/**', redirectTo: ['Index'] }
])
export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';
  constructor() {

  }
}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 * or via chat on Gitter at https://gitter.im/AngularClass/angular2-webpack-starter
 */

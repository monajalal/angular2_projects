import {bootstrap}   from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<h1>{{title}}</h1>'
})

class AppComponent{
    title= 'Ultra Racing';
}
bootstrap(AppComponent);

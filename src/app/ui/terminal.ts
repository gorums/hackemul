import {
    Component,
    Input,
    Output,
    EventEmitter
} from '@angular/core';

@Component({
    selector: 'terminal',
    styles: [`
        .shell-wrap {
            width: 800px;
            margin: 100px auto 0 auto;
            box-shadow: 0 0 30px rgba(0,0,0,0.4);
            
            -webkit-border-radius: 3px;
            -moz-border-radius: 3px;
            border-radius: 3px;
        }
        
        .shell-top-bar {
            text-align: center;
            color: #525252;
            padding: 5px 0;
            margin: 0;
            text-shadow: 1px 1px 0 rgba(255,255,255,0.5);
            font-size: 0.85em;
            border: 1px solid #CCCCCC;
            border-bottom: none;
            
            -webkit-border-top-left-radius: 3px;
            -webkit-border-top-right-radius: 3px;
            -moz-border-radius-topleft: 3px;
            -moz-border-radius-topright: 3px;
            border-top-left-radius: 3px;
            border-top-right-radius: 3px;
            
            background: #f7f7f7; /* Old browsers */
            background: -moz-linear-gradient(top,  #f7f7f7 0%, #B8B8B8 100%); /* FF3.6+ */
            background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#f7f7f7), color-stop(100%,#B8B8B8)); /* Chrome,Safari4+ */
            background: -webkit-linear-gradient(top,  #f7f7f7 0%,#B8B8B8 100%); /* Chrome10+,Safari5.1+ */
            background: -o-linear-gradient(top,  #f7f7f7 0%,#B8B8B8 100%); /* Opera 11.10+ */
            background: -ms-linear-gradient(top,  #f7f7f7 0%,#B8B8B8 100%); /* IE10+ */
            background: linear-gradient(to bottom,  #f7f7f7 0%,#B8B8B8 100%); /* W3C */
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f7f7f7', endColorstr='#B8B8B8',GradientType=0 ); /* IE6-9 */
        }
        
        .shell-body {
            height: 400px;
            margin: 0;
            text-align: left;            
            padding: 5px;
            list-style: none;
            background: #141414;
            color: #45D40C;
            font: 0.8em 'Andale Mono', Consolas, 'Courier New';
            line-height: 1.6em;
            
            -webkit-border-bottom-right-radius: 3px;
            -webkit-border-bottom-left-radius: 3px;
            -moz-border-radius-bottomright: 3px;
            -moz-border-radius-bottomleft: 3px;
            border-bottom-right-radius: 3px;
            border-bottom-left-radius: 3px;
        }
        
        .shell-body li:before {
            content: '$';
            position: absolute;
            left: 0;
            top: 0;
        }
        
        .shell-body li {
            word-wrap: break-word;
            position: relative;
            padding: 0 0 0 15px;
        }

        .shell-body li input {
            color: #45D40C;
        }
    `],
    template: `
        <div class="shell-wrap">
            <p class="shell-top-bar">{{consoleTitle}}</p>
            <ul class="shell-body">                               
                <li>
                    <form class="row">
                        <input class="col-xs-10" #cmd name="shell-input" (keyup.enter)="onEnter(cmd.value)"/>
                    </form>
                </li>
            </ul>
        </div>
    `
})
export class Terminal{
    @Input() consoleTitle: string = "Terminal";
    @Output() onEnterHandler = new EventEmitter();

    onEnter(cmd) {
        this.onEnterHandler.next(cmd);
    }
};
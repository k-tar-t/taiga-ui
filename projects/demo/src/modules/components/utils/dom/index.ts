import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiLink} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiLink],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class Page {
    protected readonly component = import('./examples/import/import.md?raw');
}
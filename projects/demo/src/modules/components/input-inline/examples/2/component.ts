import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiNotificationsService} from '@taiga-ui/core';

@Component({
    selector: 'tui-input-inline-example-2',
    templateUrl: './template.html',
    changeDetection,
    encapsulation,
    styleUrls: ['./style.less'],
})
export class TuiInputInlineExample2 {
    heading = 'Page heading';
    editing = false;

    constructor(
        @Inject(TuiNotificationsService)
        private readonly notifications: TuiNotificationsService,
    ) {}

    toggle() {
        this.editing = !this.editing;
    }

    onFocusedChange(focused: boolean) {
        if (!focused) {
            this.editing = false;
            this.saveHeading(this.heading);
        }
    }

    private saveHeading(newHeading: string) {
        this.notifications.show(newHeading, {label: 'New heading'}).subscribe();
    }
}

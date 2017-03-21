import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
// import {BootstrapModule} from '@ng/bootstrap';
import {GridModule} from '@ng/grid';
import {CommonModule as NgCommonModule} from '@ng/common';
import {NotificationsModule} from '@ng/notifications';
// import {InterceptableHttpModule} from '@ng/http-extensions';
import {InternalServerErrorModule, ServerValidationsModule} from '@ng/error-handling';
import {AuthorizationModule} from '@ng/authentication';
import {TranslateModule} from '@ngx-translate/core';

// import {NavigationComponent} from './components/navigation/navigation.component';

/**
 * Common module for all other modules
 */
@NgModule(
{
// AuthorizationModule, BootstrapModule, NotificationsModule, GridModule, ErrorHandlingModule, InterceptableHttpModule

    // declarations: [NavigationComponent],
    exports:
    [
        CommonModule,
        FormsModule,
        RouterModule,
        NgCommonModule,
        TranslateModule,
        NotificationsModule,
        GridModule,
        AuthorizationModule,
        InternalServerErrorModule,
        ServerValidationsModule
    ]
})
export class CommonSharedModule
{
}
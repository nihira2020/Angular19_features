import { Routes } from '@angular/router';
import { RAPIComponent } from './component/rapi/rapi.component';
import { LinkComponent } from './component/link/link.component';
import { HmrComponent } from './component/hmr/hmr.component';

export const routes: Routes = [
    { path: 'resouceapi', component: RAPIComponent },
    { path: 'link', component: LinkComponent },
    { path: 'hmr', component: HmrComponent }
];

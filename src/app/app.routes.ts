import { Routes } from '@angular/router';
import { RAPIComponent } from './component/rapi/rapi.component';
import { LinkComponent } from './component/link/link.component';

export const routes: Routes = [
    { path: 'resouceapi', component: RAPIComponent },
    { path: 'link', component: LinkComponent }
];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextParserComponent } from './text-parser/text-parser.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { HomeComponent } from './home/home.component';
import { ForbiddenComponent } from './shared/forbidden/forbidden.component';
import { AuthGuard } from './auth.guard';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: 'text-parser',
    component: TextParserComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'component-two',
    component: ComponentTwoComponent,
    canActivate: [AuthGuard],
  },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/forbidden' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

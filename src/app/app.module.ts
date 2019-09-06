import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';//for webservices(api) client server communication
//for page routing
import{HttpModule}from '@angular/http';
import{RouterModule, Routes}from '@angular/router';

//page routing end----

//form activity
import{ReactiveFormsModule} from '@angular/forms';
import{FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';
import { TopnavComponent } from './topnav/topnav.component';
import { BannerComponent } from './banner/banner.component';
import { InfoblockComponent } from './infoblock/infoblock.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { GallaryComponent } from './gallary/gallary.component';
import { CategoryComponent } from './category/category.component';
import { ClientComponent } from './client/client.component';
import { FooterComponent } from './footer/footer.component';
import { MyarrayComponent } from './myarray/myarray.component';
import { MyservicesComponent } from './myservices/myservices.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MymodalComponent } from './mymodal/mymodal.component';
import { MyuserComponent } from './myuser/myuser.component';
import { ContactComponent } from './contact/contact.component';
import { CrudComponent } from './crud/crud.component';
import { FormvalidationComponent } from './formvalidation/formvalidation.component';
import { AddComponent } from './add/add.component';
import { MytestComponent } from './mytest/mytest.component';
import { ServersComponent } from './servers/servers.component';
import { NewComponent } from './new/new.component';
//for routing page links
const appRoutes:Routes=[
      {path:'aboutus',component:AboutusComponent},
      {path:'array-example',component:MyarrayComponent},
      {path:'api-example',component:MyservicesComponent},
      {path:'my-modal',component:MymodalComponent},
      {path:'myuser',component:MyuserComponent},
      {path:'contact',component:ContactComponent},
      {path:'crud',component:CrudComponent},
      {path:'formvalidation',component:FormvalidationComponent},
      {path:'jkl/add',component:AddComponent},
      {path: 'mytest',component: MytestComponent},
      {path:'servers',component:ServersComponent},
      {path: 'new',component:NewComponent},



      {path:'',redirectTo:'/array-example',pathMatch:'full'},
      {path:'**',component:PagenotfoundComponent}

];
//for routing page links
@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component,
    Test3Component,
    TopnavComponent,
    BannerComponent,
    InfoblockComponent,
    AboutusComponent,
    ContactusComponent,
    GallaryComponent,
    CategoryComponent,
    ClientComponent,
    FooterComponent,
    MyarrayComponent,
    MyservicesComponent,
    PagenotfoundComponent,
    MymodalComponent,
    MyuserComponent,
    ContactComponent,
    CrudComponent,
    FormvalidationComponent,
    AddComponent,
    MytestComponent,
    ServersComponent,
    NewComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    //for page routing
    HttpModule,
    RouterModule.forRoot(appRoutes),//appRoutes is defined just above in same page
    //for page routing end here
    HttpClientModule //this module is called on top in same page

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

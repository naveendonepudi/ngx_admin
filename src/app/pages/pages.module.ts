import { NgModule } from '@angular/core';
import { NbMenuModule, NbTabsetModule, NbCardModule, NbIconModule, NbInputModule, NbListModule, NbUserModule, NbButtonModule, NbSelectModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { AddbrandComponent } from './addbrand/addbrand.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddProductTypeComponent } from './add-product-type/add-product-type.component';
import { AddMatirialtypeComponent } from './add-matirialtype/add-matirialtype.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './user-control/login/login.component';

import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RestService } from './rest.service';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AddSubCategoryComponent } from './add-sub-category/add-sub-category.component';

@NgModule({
  providers: [RestService],
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbTabsetModule,
    NbCardModule,
    NbInputModule,
    NbListModule,
    NbUserModule,
    NbButtonModule,
    NbEvaIconsModule,
    NbSelectModule,
    NbIconModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    PagesComponent,
    AddbrandComponent,
    AddCategoryComponent,
    AddProductTypeComponent,
    AddMatirialtypeComponent,
    AddProductComponent,
    ProductListComponent,
    LoginComponent,
    AddSubCategoryComponent,
  ],
})
export class PagesModule {
}

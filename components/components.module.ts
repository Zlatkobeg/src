import { NgModule } from '@angular/core';
import { CreateplanIndexComponent } from './createplan-index/createplan-index';
import { RecepiesIndexComponent } from './recepies-index/recepies-index';
import { RecepiesDetailsComponent } from './recepies-details/recepies-details';
@NgModule({
	declarations: [CreateplanIndexComponent,
    RecepiesIndexComponent,
    RecepiesDetailsComponent],
	imports: [],
	exports: [CreateplanIndexComponent,
    RecepiesIndexComponent,
    RecepiesDetailsComponent]
})
export class ComponentsModule {}

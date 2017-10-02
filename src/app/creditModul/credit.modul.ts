import{NgModule} from '@angular/core';
import { CommonModule } from "@angular/common";
import { CreditComponent } from "./creditComponent/credit.component";
@NgModule({
    imports:[CommonModule],
    declarations:[CreditComponent],
    providers:[],
    exports:[CreditComponent]
})
export class CreditModule {

}
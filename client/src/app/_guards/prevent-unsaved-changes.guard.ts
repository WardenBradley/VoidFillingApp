import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';

@Injectable({
  providedIn: 'root'
})
export class PreventUnsavedChangesGuard implements CanDeactivate<MemberEditComponent> {
  canDeactivate(component: MemberEditComponent,): boolean{
    if(component.editForm?.dirty){
    return confirm('You sure to continue? Unsaved Progress will be lost.')
    }
    return true;
  }
}

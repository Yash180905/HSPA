import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Property } from '../model/property';
import { HousingService } from './Housing.service';

@Injectable({
  providedIn: 'root',
})
export class PropertyDetailResolverService
  implements Resolve<Property | undefined>
{
  constructor(private housingService: HousingService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Property | undefined> | Property {
    // throw new Error('Method not implemented.');
    const propId = route.params['id'];
    return this.housingService.getProperty(propId);
  }
}

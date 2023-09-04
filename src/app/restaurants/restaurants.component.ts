import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantService } from './restaurant.service';

@Component({
    selector: 'app-restaurants',
    templateUrl: './restaurants.component.html',
    styleUrls: ['./restaurants.component.css'],
})
export class RestaurantsComponent implements OnInit {
    restaurants: Restaurant[];
    constructor(private _restaurantService: RestaurantService) {}

    ngOnInit(): void {
        this.restaurants = this._restaurantService.restaurants();
    }
}

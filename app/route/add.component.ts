import { Component, OnInit } from '@angular/core';
import { Country } from './Country';
import { CountryRepository } from './CountryRepository';


@Component({
    templateUrl: './add.component.html'
})
export class AddComponent   {
     message : string = null; 

     addCountry(code : string, name : string, capital : string) {
        // validate country code 
        CountryRepository.GetCountries().push( 
            {"Code" : code, "Name" : name, "Capital" : capital}
        );
        this.message= name + " has been added successfully!";
     }
}
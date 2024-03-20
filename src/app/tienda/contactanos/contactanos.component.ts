import { Component, OnInit } from '@angular/core';
import { LatLngTuple , Map , tileLayer, marker } from 'leaflet';
@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent implements OnInit {
  condenadas : LatLngTuple[][]=[];
  map!: Map;
  constructor() { }

  ngOnInit(): void {
    this.map = new Map('map').setView([7.11358, -73.11424],19);
    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    marker([7.11320, -73.11426]).addTo(this.map);

    this.map.on('click',this.onMapClick);

  }
  

  onMapClick(e:any){
    debugger;
    const cordenadaActual : LatLngTuple = [e.latlng.lat, e.latlng.lng];
    marker(cordenadaActual).addTo(this.map);
  }

}

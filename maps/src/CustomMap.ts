import { User } from "./User";

interface Coords {
  location: { lat: number; lon: number };
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(id: string) {
    this.googleMap = new google.maps.Map(document.querySelector(`#${id}`), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addUserMarker(obj: Coords): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: obj.location.lat,
        lng: obj.location.lon,
      },
    });
  }
}

import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class LocalStorage {
  
  public set(key: string, value: string): void {
    if (key && value)
      localStorage.setItem(key, value);
  }

  public get(key: string): any {
    if (key)
      return JSON.parse(localStorage.getItem(key) || 'null');
    return null;
  }

  public remove<T>(key: string): void {
    localStorage.removeItem(key);
  }

}
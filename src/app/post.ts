import {House} from './house';

export interface Post {
  id: number;
  house: House;
  title: string;
  status: boolean;
}

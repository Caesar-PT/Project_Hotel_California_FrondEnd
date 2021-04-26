import { HouseStatus } from "./house-status";
import { HouseType } from "./house-type";
import { Photo } from "./photo";
import { User } from "./user";
import { Village } from "./village";

export interface House {
    id:number;
    name:string;
    bedRoom:number;
    bathRoom:number;
    description:string;
    priceDay:number;
    houseType:HouseType;
    houseStatus:HouseStatus;
    village:Village;
    appUser: User;
    photo:Photo[];
    avatar:string;
}

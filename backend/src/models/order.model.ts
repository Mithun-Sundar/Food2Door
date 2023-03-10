import { Schema, Types } from "mongoose";
import { OrderStatus } from "../constants/order_status";
import { Food, FoodSchema } from "./food.model";


export interface LatLng{
    lat:string;
    lng:string;
}

export const LatLngSchema = new Schema<LatLng>({
    lat:{type:String,required:true},
    lng:{type:String,required:true},
});

export interface OrderItem{
    food:Food;
    price:number;
    quantity:number;
}

export const OrderItemSchema = new Schema<OrderItem>(
    {
        food:{type:FoodSchema,required:true},
        price:{type:Number,required:true},
        quantity:{type:Number,required:true},
    }
);

export interface Order {
    id: string;
    items: OrderItem[];
    totalPrice: number;
    name: string;
    address: string;
    addressLatLng: LatLng;
    paymentId: string;
    status: OrderStatus;
    user:Types.ObjectId;
    createdAt: Date;
    updatedAt:Date;
  }
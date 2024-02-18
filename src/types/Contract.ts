import { Principal } from "@dfinity/principal";

export interface IContract {
    id : number | bigint;
  buyer_accepted : boolean;
  terms_and_conditions : string;
  expected_month_of_harvest : string;
  price_per_unit : number | bigint;
  crop : string;
  long_position_holder : Principal;
  bargain : string;
  farmer_accepted : boolean;
  buyer : Principal;
  expected_yield : number | bigint;
  farmer : Principal;
  short_position_holder : Principal;
  contract_status : any;
}
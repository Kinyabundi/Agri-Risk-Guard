import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Buyer {
  'id' : bigint,
  'name' : string,
  'email' : [] | [string],
  'organization' : [] | [string],
  'phone_number' : string,
  'identifier' : string,
  'location' : string,
}
export interface BuyerPayload {
  'name' : string,
  'email' : [] | [string],
  'organization' : [] | [string],
  'phone_number' : string,
  'identifier' : string,
  'location' : string,
}
export type ContractStatus = { 'Terminated' : null } |
  { 'InProgress' : null } |
  { 'Created' : null } |
  { 'Completed' : null } |
  { 'Pending' : null };
export interface Farmer {
  'id' : bigint,
  'updated_at' : [] | [bigint],
  'size_of_land' : bigint,
  'name' : string,
  'created_at' : bigint,
  'national_id' : string,
  'email' : [] | [string],
  'phone_number' : string,
  'identifier' : string,
  'location' : string,
  'croptypes' : Array<string>,
}
export interface FarmerPayload {
  'size_of_land' : bigint,
  'name' : string,
  'national_id' : string,
  'email' : [] | [string],
  'phone_number' : string,
  'identifier' : string,
  'location' : string,
  'croptypes' : Array<string>,
}
export interface FutureContract {
  'id' : bigint,
  'buyer_accepted' : boolean,
  'terms_and_conditions' : string,
  'expected_month_of_harvest' : string,
  'price_per_unit' : bigint,
  'crop' : string,
  'long_position_holder' : [] | [Principal],
  'bargain' : [] | [string],
  'farmer_accepted' : boolean,
  'buyer' : [] | [Principal],
  'expected_yield' : bigint,
  'farmer' : [] | [Principal],
  'short_position_holder' : [] | [Principal],
  'contract_status' : ContractStatus,
}
export interface FutureContractPayload {
  'terms_and_conditions' : string,
  'expected_month_of_harvest' : string,
  'price_per_unit' : bigint,
  'crop' : string,
  'expected_yield' : bigint,
}
export type Result = { 'Ok' : FutureContract } |
  { 'Err' : string };
export type Result_1 = { 'Ok' : Buyer } |
  { 'Err' : string };
export type Result_2 = { 'Ok' : Farmer } |
  { 'Err' : string };
export interface _SERVICE {
  'add_buyer' : ActorMethod<[BuyerPayload], [] | [Buyer]>,
  'add_farmer' : ActorMethod<[FarmerPayload], [] | [Farmer]>,
  'claim_long_position' : ActorMethod<
    [bigint, [] | [string], Principal, string],
    Result
  >,
  'claim_short_position' : ActorMethod<
    [bigint, [] | [string], Principal, string],
    Result
  >,
  'create_future_contract' : ActorMethod<
    [FutureContractPayload],
    [] | [FutureContract]
  >,
  'get_all_buyers' : ActorMethod<[], Array<Buyer>>,
  'get_all_farmers' : ActorMethod<[], Array<Farmer>>,
  'get_all_future_contracts' : ActorMethod<[], Array<FutureContract>>,
  'get_buyer' : ActorMethod<[bigint], Result_1>,
  'get_buyer_by_identifier' : ActorMethod<[string], Result_2>,
  'get_contracts_by_buyer' : ActorMethod<[string], Array<FutureContract>>,
  'get_contracts_by_contract_status' : ActorMethod<
    [ContractStatus],
    Array<FutureContract>
  >,
  'get_contracts_by_farmer' : ActorMethod<[string], Array<FutureContract>>,
  'get_farmer' : ActorMethod<[bigint], Result_2>,
  'get_farmer_by_identifier' : ActorMethod<[string], Result_2>,
  'get_future_contract' : ActorMethod<[bigint], Result>,
  'get_principal' : ActorMethod<[], Principal>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: ({ IDL }: { IDL: IDL }) => IDL.Type[];

export const idlFactory = ({ IDL }) => {
  const BuyerPayload = IDL.Record({
    'name' : IDL.Text,
    'email' : IDL.Opt(IDL.Text),
    'organization' : IDL.Opt(IDL.Text),
    'phone_number' : IDL.Text,
    'location' : IDL.Text,
  });
  const Buyer = IDL.Record({
    'id' : IDL.Nat64,
    'principal' : IDL.Principal,
    'name' : IDL.Text,
    'email' : IDL.Opt(IDL.Text),
    'organization' : IDL.Opt(IDL.Text),
    'phone_number' : IDL.Text,
    'location' : IDL.Text,
  });
  const FarmerPayload = IDL.Record({
    'size_of_land' : IDL.Nat64,
    'name' : IDL.Text,
    'national_id' : IDL.Text,
    'email' : IDL.Opt(IDL.Text),
    'phone_number' : IDL.Text,
    'location' : IDL.Text,
    'croptypes' : IDL.Vec(IDL.Text),
  });
  const Farmer = IDL.Record({
    'id' : IDL.Nat64,
    'updated_at' : IDL.Opt(IDL.Nat64),
    'principal' : IDL.Principal,
    'size_of_land' : IDL.Nat64,
    'name' : IDL.Text,
    'created_at' : IDL.Nat64,
    'national_id' : IDL.Text,
    'email' : IDL.Opt(IDL.Text),
    'phone_number' : IDL.Text,
    'location' : IDL.Text,
    'croptypes' : IDL.Vec(IDL.Text),
  });
  const ContractStatus = IDL.Variant({
    'Terminated' : IDL.Null,
    'InProgress' : IDL.Null,
    'Created' : IDL.Null,
    'Completed' : IDL.Null,
    'Pending' : IDL.Null,
  });
  const FutureContract = IDL.Record({
    'id' : IDL.Nat64,
    'buyer_accepted' : IDL.Bool,
    'terms_and_conditions' : IDL.Text,
    'expected_month_of_harvest' : IDL.Text,
    'price_per_unit' : IDL.Nat64,
    'crop' : IDL.Text,
    'long_position_holder' : IDL.Opt(IDL.Principal),
    'bargain' : IDL.Opt(IDL.Text),
    'farmer_accepted' : IDL.Bool,
    'buyer' : IDL.Opt(IDL.Principal),
    'expected_yield' : IDL.Nat64,
    'farmer' : IDL.Opt(IDL.Principal),
    'short_position_holder' : IDL.Opt(IDL.Principal),
    'contract_status' : ContractStatus,
  });
  const Result = IDL.Variant({ 'Ok' : FutureContract, 'Err' : IDL.Text });
  const FutureContractPayload = IDL.Record({
    'terms_and_conditions' : IDL.Text,
    'expected_month_of_harvest' : IDL.Text,
    'price_per_unit' : IDL.Nat64,
    'crop' : IDL.Text,
    'expected_yield' : IDL.Nat64,
  });
  const Result_1 = IDL.Variant({ 'Ok' : Buyer, 'Err' : IDL.Text });
  const Result_2 = IDL.Variant({ 'Ok' : Farmer, 'Err' : IDL.Text });
  return IDL.Service({
    'add_buyer' : IDL.Func([BuyerPayload], [IDL.Opt(Buyer)], []),
    'add_farmer' : IDL.Func([FarmerPayload], [IDL.Opt(Farmer)], []),
    'claim_long_position' : IDL.Func(
        [IDL.Nat64, IDL.Opt(IDL.Text), IDL.Principal],
        [Result],
        [],
      ),
    'claim_short_position' : IDL.Func(
        [IDL.Nat64, IDL.Opt(IDL.Text), IDL.Principal],
        [Result],
        [],
      ),
    'create_future_contract' : IDL.Func(
        [FutureContractPayload],
        [IDL.Opt(FutureContract)],
        [],
      ),
    'get_all_buyers' : IDL.Func([], [IDL.Vec(Buyer)], ['query']),
    'get_all_farmers' : IDL.Func([], [IDL.Vec(Farmer)], ['query']),
    'get_all_future_contracts' : IDL.Func(
        [],
        [IDL.Vec(FutureContract)],
        ['query'],
      ),
    'get_buyer' : IDL.Func([IDL.Nat64], [Result_1], ['query']),
    'get_buyer_by_principal' : IDL.Func([IDL.Principal], [Result_1], ['query']),
    'get_contracts_by_buyer' : IDL.Func(
        [IDL.Principal],
        [IDL.Vec(FutureContract)],
        ['query'],
      ),
    'get_contracts_by_contract_status' : IDL.Func(
        [ContractStatus],
        [IDL.Vec(FutureContract)],
        ['query'],
      ),
    'get_contracts_by_farmer' : IDL.Func(
        [IDL.Principal],
        [IDL.Vec(FutureContract)],
        ['query'],
      ),
    'get_farmer' : IDL.Func([IDL.Nat64], [Result_2], ['query']),
    'get_farmer_by_principal' : IDL.Func(
        [IDL.Principal],
        [Result_2],
        ['query'],
      ),
    'get_future_contract' : IDL.Func([IDL.Nat64], [Result], ['query']),
    'get_principal' : IDL.Func([], [IDL.Principal], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };

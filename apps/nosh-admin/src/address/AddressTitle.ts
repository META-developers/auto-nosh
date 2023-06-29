import { Address as TAddress } from "../api/address/Address";

export const ADDRESS_TITLE_FIELD = "street";

export const AddressTitle = (record: TAddress): string => {
  return record.street || String(record.id);
};

import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ProductCreateNestedManyWithoutOrdersInput } from "./ProductCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  discount?: number | null;
  priority?: boolean | null;
  product?: ProductCreateNestedManyWithoutOrdersInput;
  quantity?: number | null;
  totalPrice?: number | null;
};

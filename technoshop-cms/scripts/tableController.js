import { tableRender } from "./tableView.js";
import { getGoods } from "./serviceApi.js";

export const tableController = async () => {

  const goods = await getGoods();
  tableRender(goods);
};
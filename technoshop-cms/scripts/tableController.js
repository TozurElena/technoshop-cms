import { tableRender } from "./tableView.js";
import { getGoods } from "./serviceApi.js";
import { modalController } from "./modalController.js";
import { tableGoods} from "./elems.js";

export const tableController = async () => {

  modalController({
    delegation: {
      parent: tableGoods,
      target: '.table-goods-item',
      targetExclude: '.btn-delete',
    }
  })
  const goods = await getGoods();
  tableRender(goods);
};
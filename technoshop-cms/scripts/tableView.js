// goods - товары

import { tableGoods } from "./elems.js"

export const tableRender = (goods) => {
  tableGoods.textContent = '';

  goods.forEach(({id, title, category, price}) => {
    tableGoods.insertAdjacentHTML('afterend', `
    <tr class="table-row table-goods-item" data-id="4836741835">
            <td>4836741835</td>
            <td>Умные часы Xiaomi Redmi Watch 2 Lite Global, слоновая кость</td>
            <td>smartwatch</td>
            <td class="text-end">4 990 &#8381;</td>
            <td class="d-flex">
              <button class="btn-table btn-delete">
                <svg width="30" height="30">
                  <use xlink:href="#delete" />
                </svg>
              </button>
            </td>
          </tr>
    `)
  })
}
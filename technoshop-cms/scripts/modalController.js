import { form, modalTitle, modal, modalSubmotBtn } from './elems.js'
import { hidePreview } from './previewController.js';
import { fillingForm } from './formController.js';

const openModal = (id) => {
  if (id) {
    // заполняем форму
    fillingForm(id);
  } 
  modal.classList.add('d-block');
};

export const closeModal = ()=> {
  modal.classList.remove('d-block');
  form.reset(); //clear form
  hidePreview();
}

export const modalController = ({
        btn,
        delegation
       }) => {
  if (btn) {
    btn.addEventListener('click', () => {
      modalTitle.textContent = 'Добавить новый товар';
      modalSubmotBtn.textContent = 'Добавить товар';
      openModal();
    });
  }
  if (delegation) {
    delegation.parent.addEventListener('click', ({target}) => {
      const goodsRow = target.closest(delegation.target);
      const targetExclude = target.closest(delegation.targetExclude);
      if (goodsRow && !targetExclude) {
        modalTitle.textContent = `Изменить товар #${goodsRow.dataset.id}`;
        modalSubmotBtn.textContent = 'Изменить товар';
        openModal(goodsRow.dataset.id)
      }
    })
  }

  modal.addEventListener('click', ({target}) => {
    if (target === modal || target.classList.contains('btn-close')) {
      closeModal()
    } 
  })
  
};
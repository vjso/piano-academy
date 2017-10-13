import $ from 'jquery';

class Modal {
    constructor(){
        this.openModalButton = $(".open-modal");
        this.modal = $(".modal");
        this.closeModalButton = $(".modal__close-x");

        this.events();
    }

    events(){
        //click open modal button ie get in touch buttons
        this.openModalButton.click(this.openModal.bind(this));
        
        //click on modal close x button
        this.closeModalButton.click(this.closeModal.bind(this));

        //any key

        $(document).keyup(this.keyPressHandler.bind(this));
    }

    keyPressHandler(e){
        if(e.keyCode == 27) {
            this.closeModal();
        }
    }

    openModal(){
        this.modal.addClass("modal--is-visible");
        return false;
    }

    closeModal(){
        this.modal.removeClass("modal--is-visible");
    }
}

export default Modal;
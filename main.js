window.addEventListener('load', () => {

    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const add_btn = document.querySelector('#new-task-submit');
    const list_el = document.querySelector('#tasks');

    add_btn.addEventListener("click",(e) => {
        e.preventDefault();
        const task = input.value;

        if(!task) {
            alert('Please add a task');
            return;
        }
        const task_el = document.createElement('div');
        task_el.classList.add("task");

        const task_content_el = document.createElement('div');
        task_content_el.classList.add("content");
        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement('input');
        task_input_el.classList.add("text");
        task_input_el.type = 'text';
        task_input_el.value = task;
        task_input_el.setAttribute('readonly', 'true'); 

        task_content_el.appendChild(task_input_el);
        
        list_el.appendChild(task_el);

        const actions = document.createElement('actions');
        actions.classList.add("actions");
        task_content_el.appendChild(actions);

        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('id', 'check');
        checkbox.classList.add('checkbox');
        actions.appendChild(checkbox);
        checkbox.addEventListener("click", () => {
            if(checkbox.checked === true) {
                task_input_el.classList.add('checked');

            }else{
                task_input_el.classList.remove('checked');
            };
        });

        // const label = document.createElement('label');
        // label.setAttribute('for', 'check');
        // label.innerText = 'Done';
        // actions.appendChild(label);

        const edit_btn = document.createElement('button');
        edit_btn.classList.add("edit");
        edit_btn.innerText = "Edit";
        actions.appendChild(edit_btn);
        edit_btn.addEventListener("click", () => {
            if(edit_btn.innerText === "Edit"){
                task_input_el.removeAttribute('readonly');
                task_input_el.focus();
                edit_btn.innerText = "Save";
            } else {
                task_input_el.setAttribute('readonly', 'true');
                edit_btn.innerText = "Edit";
            }
        });

        const delete_btn = document.createElement('button');
        delete_btn.classList.add("delete");
        delete_btn.innerText = "Delete";
        actions.appendChild(delete_btn);
        delete_btn.addEventListener("click", () => {
            list_el.removeChild(task_el);
        });

})
});
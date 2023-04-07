function adicionar() 
{
    var novoItem = document.getElementById("text").value;

    if (novoItem !== "") {
        var li = document.createElement("li");
        li.className = "list-item";

        var input = document.createElement('input');
        input.type = 'checkbox';
        input.id = 'check'
        li.appendChild(input)

        var descricao = document.createElement("p");
        descricao.className = "description";
        descricao.textContent = novoItem;
        li.appendChild(descricao);

        var actions = document.createElement("div");
        actions.className = "actions";

        var editar = document.createElement("button");
        editar.textContent = "Editar";
        editar.id = 'editar';
        editar.setAttribute('onclick','editar(this)');
        actions.appendChild(editar);

        var excluir = document.createElement("button");
        excluir.textContent = "Excluir";
        excluir.id = 'excluir';
        excluir.setAttribute('onclick','excluir(this)');
        actions.appendChild(excluir);

        li.appendChild(actions);

        document.querySelector(".list").appendChild(li);
        document.getElementById("text").value = "";

        localStorage.setItem('MyList', document.getElementById('MyList').innerHTML);
    }
    novoItem.focus();
}
function editar(itemList) {
    let listItem = itemList.parentElement.parentElement; //
    let description = listItem.querySelector('.description'); 
    let newDescription = document.createElement('p'); 
    let input = document.createElement('input'); 
    if (description.tagName === 'P')
    {
        input.type = 'text'; 
        input.value = description.textContent; 
        input.classList.add('description'); 
        listItem.replaceChild(input, description); 
        itemList.textContent = 'Concluir'; 
        input.focus(); 
    }
    else if (description.tagName === 'INPUT' && description.value !=='')
    { 
        newDescription = document.createElement('p'); 
        newDescription.classList.add('description'); 
        newDescription.textContent = description.value; 
        listItem.replaceChild(newDescription, description); 
        itemList.textContent = 'Editar';
        localStorage.setItem('MyList', document.getElementById('MyList').innerHTML);
    }
}
function excluir(item)
{
    var listItem = item.parentNode.parentNode;
    listItem.parentNode.removeChild(listItem);
    localStorage.setItem('MyList', document.getElementById('MyList').innerHTML);
}
window.onload = function()
{
    var savedList = localStorage.getItem('MyList');
    if (savedList) {
        document.getElementById('MyList').innerHTML = savedList;
    }
}


function apagar()
{
  localStorage.removeItem('MyList')
  location.reload();

}
// 1. Pegando os elementos do HTML
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const filterButtons = document.querySelectorAll(".filter-btn");

// 2. Estado da nossa Aplicação (Nossos dados)
let tasks = [];
let currentFilter = "all"; // Pode ser: "all", "pending", "completed"

// 3. Salvar no LocalStorage
function saveTasksToLocalStorage() {
    localStorage.setItem("taskflow_tasks", JSON.stringify(tasks));
}

// 4. Carregar do LocalStorage
function loadTasksFromLocalStorage() {
    const storedTasks = localStorage.getItem("taskflow_tasks");
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
    }
    renderTasks();
}

// 5. Função Mestre que desenha as tarefas filtradas na tela
function renderTasks() {
    // Limpa a lista atual do HTML
    taskList.innerHTML = "";

    // Filtra as tarefas dependendo do botão selecionado
    let filteredTasks = tasks;
    if (currentFilter === "pending") {
        filteredTasks = tasks.filter(task => !task.completed);
    } else if (currentFilter === "completed") {
        filteredTasks = tasks.filter(task => task.completed);
    }

    // Atualiza o contador de acordo com as tarefas visíveis
    taskCount.textContent = filteredTasks.length;

    // Desenha cada tarefa que passou no filtro
    filteredTasks.forEach(taskObj => {
        const task = document.createElement("li");

        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskObj.text;
        
        if (taskObj.completed) {
            taskSpan.classList.add("completed");
        }

        // Evento de concluir/desconcluir
        taskSpan.addEventListener("click", function () {
            taskObj.completed = !taskObj.completed;
            saveTasksToLocalStorage();
            renderTasks(); // Redesenha a tela
        });
        task.appendChild(taskSpan);

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remover";
        removeButton.classList.add("remove-btn");

        // Evento de remover
        removeButton.addEventListener("click", function () {
            tasks = tasks.filter(t => t.id !== taskObj.id);
            saveTasksToLocalStorage();
            renderTasks(); // Redesenha a tela
        });
        task.appendChild(removeButton);

        taskList.appendChild(task);
    });
}

// 6. Evento de Adicionar Nova Tarefa
addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Digite uma tarefa!");
        return;
    }

    const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    tasks.push(newTask);
    saveTasksToLocalStorage();
    taskInput.value = "";
    
    renderTasks(); 
});

// Evento de apertar "Enter"
taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTaskButton.click(); 
    }
});

// 7. Lógica dos botões de Filtro
filterButtons.forEach(button => {
    button.addEventListener("click", function () {
        // Remove a classe "active" de todos os botões
        filterButtons.forEach(btn => btn.classList.remove("active"));
        
        // Adiciona a classe "active" apenas no botão clicado
        this.classList.add("active");
        
        // Atualiza a variável de estado com o filtro escolhido
        currentFilter = this.getAttribute("data-filter");
        
        // Redesenha a tela com o novo filtro
        renderTasks();
    });
});

// 8. Inicia a aplicação carregando os dados salvos
loadTasksFromLocalStorage();
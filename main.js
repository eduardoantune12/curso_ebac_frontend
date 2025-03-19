// Garante que o script só execute após o DOM estar carregado
$(document).ready(function() {

    // Adicionar nova tarefa com animação
    $('#form-tarefa').submit(function(event) {
        event.preventDefault(); // Impede o recarregamento da página

        const tarefa = $('#nome-tarefa').val().trim();

        // Verifica se o campo não está vazio e se a tarefa já existe
        if (tarefa === "") {
            alert('Por favor, insira uma tarefa válida!');
            return;
        }

        let tarefaExiste = false;
        $('#lista-tarefas li').each(function() {
            if ($(this).text().includes(tarefa)) {
                tarefaExiste = true;
            }
        });

        if (tarefaExiste) {
            alert('Essa tarefa já existe na lista!');
            return;
        }

        const novoItem = $('<li>' + tarefa + '<span class="checkmark" style="display:none;">✔️</span><span class="warning">⚠️</span><span class="delete">🗑️Deletar tarefa🗑️</span></li>');
        $('#lista-tarefas').append(novoItem);
        novoItem.slideDown(); // Aplica a animação
        $('#nome-tarefa').val(''); // Limpa o campo após adicionar
    });

    // Marcar tarefa como concluída e alternar ícones
    $(document).on('click', '#lista-tarefas li', function(event) {
        if (!$(event.target).hasClass('delete')) {
            $(this).toggleClass('completed');
            $(this).find('.checkmark').toggle();
            $(this).find('.warning').toggle();
        }
    });

    // Remover tarefa ao clicar no ícone de lixeira
    $(document).on('click', '.delete', function() {
        $(this).closest('li').slideUp(function() {
            $(this).remove();
        });
    });
});
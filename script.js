document.getElementById('form-noiva').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede a página de recarregar

    // Seu número atualizado com o código do Brasil (55), DDD (62) e o 9 extra correto
    const seuNumeroWhatsapp = "5562994483889"; 

    // Captura os valores que a noiva preencheu no formulário
    const nome = document.getElementById('nome').value;
    const whatsappNoiva = document.getElementById('whatsapp').value;
    const origem = document.getElementById('origem').value;
    const destino = document.getElementById('destino').value;
    const data = document.getElementById('data').value;
    const horario = document.getElementById('horario').value;

    // Organiza a data para o formato brasileiro (DD/MM/AAAA)
    const dataFormatada = data.split('-').reverse().join('/');

    // Monta o texto que vai chegar no seu WhatsApp de forma organizada
    const mensagem = `Olá! Gostaria de um orçamento para transporte de noiva. Aqui estão os meus dados:%0A%0A` +
                     `*1. Informações de Contato*%0A` +
                     `• *Nome:* ${nome}%0A` +
                     `• *WhatsApp:* ${whatsappNoiva}%0A%0A` +
                     `*2. Detalhes do Casamento*%0A` +
                     `• *Local de Partida:* ${origem}%0A` +
                     `• *Local do Casamento:* ${destino}%0A` +
                     `• *Data:* ${dataFormatada}%0A` +
                     `• *Horário:* ${horario}`;

    // Cria o link definitivo do WhatsApp
    const urlLink = `https://wa.me/${seuNumeroWhatsapp}?text=${mensagem}`;

    // Abre a conversa diretamente
    window.open(urlLink, '_blank');
});

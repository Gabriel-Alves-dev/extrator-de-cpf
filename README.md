# Extrator de CPF

Este projeto é uma API desenvolvida em Node.js, hospedada em uma VPS, que faz parte de um sistema integrado com um bot de WhatsApp para um chatcenter no Bitrix24. A API recebe números de CPF ou CNPJ, realiza o processamento (remoção de máscara e separação dos dois últimos dígitos) e retorna os dados formatados, permitindo que o bot direcione as informações para o colaborador responsável.

# 🚀 Funcionalidades:

- Recebe números de CPF ou CNPJ enviados pelo cliente via WhatsApp.
- Remove a máscara dos números fornecidos.
- Extrai os dois últimos dígitos do CPF/CNPJ.
- Retorna os dados processados para o bot, que realiza o encaminhamento ao colaborador designado.

  
# 🛠️ Tecnologias Utilizadas:

- Node.js: Framework para desenvolvimento da API.
- VPS: Hospedagem para manter a API sempre disponível.
- Bitrix24: Integração com o sistema de gestão de chat do Contact Center.
- WhatsApp API: Comunicação entre clientes e colaboradores.


# 📦 Instalação e Uso:

Pré-requisitos:
- Node.js instalado
- Gerenciador de pacotes (npm ou yarn)
    
Passo a Passo:

 - Clone este repositório:
```
  git clone https://github.com/Gabriel-Alves-dev/extrator-de-cpf.git
```

Acesse a pasta do projeto:
```
cd extrator-de-cpf
```

Instale as dependências:
```
npm install
```

Configure as variáveis de ambiente (crie um arquivo .env se necessário).

Inicie o servidor:
```
npm start
```

# 🌐 Como Funciona:

1. O cliente envia o CPF ou CNPJ via WhatsApp.
2. O bot encaminha o número para a API.
3. A API realiza o processamento:
 - Remove qualquer máscara (como "." e "-").
 - Separa os dois últimos dígitos do número.
4. O bot utiliza os dados retornados para direcionar a solicitação ao colaborador responsável.
   
# 🤝 Contribuições
Contribuições são bem-vindas! Se você tiver sugestões ou encontrar problemas, fique à vontade para abrir uma issue ou enviar um pull request.

# 📄 Licença
Este projeto está sob a licença MIT.

# Protocolo http: requisição, resposta, métodos, status e cabeçalho 

## Fundamentação

### Http (Hypertext Transfer Protocol)


#### Protocolo de comunicação entre cliente e servidor. Quando você digita uma URL, o navegador usa o DNS para traduzir o nome do site em um endereço IP, permitindo localizar o servidor, estabelecer a conexão, e então o cliente envia uma requisição (HTTP request) enquanto o servidor processa e retorna a resposta (HTTP response).

* REFATORANDO. Understanding the HTTP protocol. 2021. 1 vídeo (aprox. [10min]). Publicado pelo canal Refatorando. Disponível em: https://www.youtube.com/watch?v=PcHbyGVoqZk. Acesso em: 15 out. 2026.

### Anatomia da requisição e da resposta

#### A anatomia da requisição e da resposta divide-se em linha inicial, cabeçalhos e corpo. A mensagem HTTP divide-se em três partes: a linha inicial (que define o status, como 200 OK), os cabeçalhos (informações de suporte, como o navegador utilizado e o tipo de arquivo) e o corpo (o conteúdo real que é enviado ou recebido, como o código HTML da página).
Exemplo:

* **linha inicial**

```
res.writeHead(200, { 'Content-Type': 'text/html' });

```
Quando o Node.js executa essa linha, ele pega o número 200 e traduz automaticamente para o padrão do protocolo HTTP, montando a linha inicial da resposta HTTP/1.1 200 OK
* HTTP/1.1 = A versão do protocolo que o servidor está usando
* 200 = O código de status dizendo que deu certo.
* OK = Descrição.

* **Cabeçalhos** como `Content-Type: text/html; charset=utf-8 `
* **Corpo** com o conteúdo retornado, por exemplo: `<h1>Página Inicial</h1>`

* MOZILLA DEVELOPER NETWORK (MDN). Mensagens HTTP. Disponível em: https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Guides/Messages. Acesso em: 15 out. 2026.


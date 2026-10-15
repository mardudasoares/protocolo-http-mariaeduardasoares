import{
  PagInicial,
  Sobre,
  Contato
} from '../views/views.js'

export function route(request, response) {
const parsedUrl = new URL(request.url, `http://${request.headers.host}`);
  const pathname = parsedUrl.pathname;


  if (request.method === 'GET' && pathname === '/busca') {
    const termo = parsedUrl.searchParams.get('termo');

    if (!termo) {
      response.writeHead(400, { 'Content-Type': 'text/html; charset=utf-8' });
      response.end('<h1>Ops! Esqueceu de nos dizer o que está procurando? Digite um termo para começar a busca.</h1>');
      console.log(`${request.method} ${request.url} 400`);
      return;
    }

    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end(`<h1>Sua busca por “${termo}” trouxe estes resultados</h1>`);
    console.log(`${request.method} ${request.url} 200`);
    return;
  }

  if (request.method === 'GET' && request.url === '/') {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    
    response.end(PagInicial())
    console.log(`${request.method} ${request.url} 200`);
    return;
  }

  if (request.method === 'GET' && request.url === '/admin') {
    response.writeHead(403, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end('<h1>Acesso restrito ao Admin 😜</h1>');
    console.log(`${request.method} ${request.url} 403`);
    return;
  }

  if (request.method === 'GET' && request.url === '/sobre') {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end(Sobre());
    console.log(`${request.method} ${request.url} 200`);
    return;
  }
  if (pathname === '/contato') {
    if (request.method === 'GET') {
      response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      response.end(Contato());
      console.log(`${request.method} ${request.url} 200`);
      return;
    }
    
    response.writeHead(405, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end('<h1>Ops! Não é possível enviar dados diretamente para esta URL. Utilize o método GET.</h1>');
    console.log(`${request.method} ${request.url} 405`);
    return;
  }

  if (request.method === 'GET' && request.url === '/antigo') {
    response.writeHead(301, { 'Content-Type': 'text/html; charset=utf-8', 'Location': '/sobre' });
    response.end('Página old não acessar 😢');
    console.log(`${request.method} ${request.url} 301`);
    return;
  }

  response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
  response.end("<h1>Erro 404... Página não encontrada amigo...</h1>");
  console.log(`${request.method} ${request.url} 404`);
};

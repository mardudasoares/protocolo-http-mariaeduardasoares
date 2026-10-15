function layout(title, content) {
  return `
    <!DOCTYPE html>
    <html lang="pt-br">
      <head><meta charset="UTF-8"><title>${title}</title></head>
      <body>
        <nav>
          <a href="/">Página inicial</a>
          <a href="/sobre">Sobre</a>
          <a href="/contato">Contato</a>
        </nav>
        ${content}
      </body>
    </html>
  `;
}

export function PagInicial() {
  return layout('Pagina Inicial', '<h1>Bem-vindo!</h1>');
}
export function Sobre() {
  return layout('Sobre', '<h1>Um pouquinho sobre nós....</h1>');
}
export function Contato() {
  return layout('Contato', '<h1>Insira seus dados abaixo para entrar em contato com a gente 😊</h1>');
}


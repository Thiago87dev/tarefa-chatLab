/**
 * Chatlab - Conceitos de array/object em Javascript.
 * 
 * Implemente as funções a partir daqui.
 */

const listaMensagens = []

function adicionarMensagem(apelido, mensagem) {
  listaMensagens.push({
    apelido: apelido,
    mensagem: mensagem
  })
}

function formatarMensagens() {
  let htmlData = ''
  for (i in listaMensagens) {
    let mensagem = listaMensagens[i]
    htmlData += ` 
    <div class="chat-message">
      <span class="chat-message-apelido">${mensagem.apelido}</span>
      <span class="chat-message-item">${mensagem.mensagem}</span>
    </div>`
  }
  return htmlData

}

function atualizarHTML() {
  document.querySelector('#chat-messages').innerHTML = formatarMensagens()
}

function commitMessageClickHandler() {
  mensagem = document.querySelector('#message-input')
  if(!mensagem.value.trim()){
    mensagem.focus()
    return
  }
  adicionarMensagem('stackx:', mensagem.value)
  atualizarHTML()
  mensagem.value = ''
}

document.addEventListener('keypress',e =>{
  mensagem = document.querySelector('#message-input')
  if (e.key === 'Enter'){
    if(!mensagem.value.trim()){
      mensagem.focus()
      return
    }
    adicionarMensagem('stackx:', mensagem.value)
    atualizarHTML()
    mensagem.value = ''
  }
})



window.addEventListener('load', function () { 
  atualizarHTML();
});

// --------------------------------
// Não remover estas linhas
// --------------------------------
module.exports =
{
  listaMensagens,
  adicionarMensagem,
  formatarMensagens,
  atualizarHTML,
  commitMessageClickHandler
};
// --------------------------------
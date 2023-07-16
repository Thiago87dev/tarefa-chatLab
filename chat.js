/**
 * Chatlab - Conceitos de array/object em Javascript.
 * 
 * Implemente as funções a partir daqui.
 */

const listaMensagens = []

function adicionarMensagem(apelido, msg) {
  listaMensagens.push({
    apelido: apelido,
    msg: msg
  })
}

function formatarMensagens() {
  let htmlData = ''
  for (i in listaMensagens) {
    let item = listaMensagens[i]
    htmlData += `
    <div class="chat-message">
      <span class="chat-message-apelido">
        ${item.apelido}
      </span>
      <span class="chat-message-item">
      ${item.msg}
      </span>
    </div>
`
  }
  return htmlData

}

function atualizarHTML() {
  let resultado = document.querySelector('#chat-messages')
  resultado.innerHTML = formatarMensagens()
}

function commitMessageClickHandler() {
  msg = document.querySelector('#message-input')
  if(!msg.value.trim()){
    msg.focus()
    return
  }
  adicionarMensagem('BigBoss: ', msg.value)
  atualizarHTML()
  msg.value = ''
}

document.addEventListener('keypress',e =>{
  msg = document.querySelector('#message-input')
  if (e.key === 'Enter'){
    if(!msg.value.trim()){
      msg.focus()
      return
    }
    adicionarMensagem('BigBoss: ', msg.value)
    atualizarHTML()
    msg.value = ''
  }
})

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
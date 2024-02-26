const locators_mi = {
    LOGIN_PAGE: {
        USUARIO: '[name="login"]',
        SENHA: '[type="password"]',
        BTN_ENTRAR: '[id="entrar"]',
        BTN_ESQUECI_MINHA_SENHA: '[id="cancelar"]',
        MSG_FALHA: 'p-toastitem',
    },
    PAGINA_INICIAL: {
        MENU_ITENS: '[id="menu-button"]',
        SETTINGS: '//app-topbar/div/div[2]/ul/li/a/i',
        DIARIO_ERROS: '[href="#/diario-erros"]',
    },
}

export default locators_mi;
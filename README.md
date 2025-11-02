# Teste de conexão com Notion

Passos rápidos para verificar se o token e o ID do database estão corretos.

1) Obtenha um Integration Token no Notion
  - Vá em https://www.notion.so/my-integrations e crie uma nova integração.
  - Copie o token (começa com ntn_... ou secret_...).

2) Compartilhe o database com a integração
  - Abra a página do database no Notion.
  - Clique em "Share" e adicione sua integração para permitir acesso.

3) Configure as variáveis de ambiente no PowerShell
  - No PowerShell, rode:

```powershell
$env:NOTION_TOKEN = 'seu_token_aqui'
$env:NOTION_DATABASE_ID = '28813d3ba53f80179967df7ffc00eb15'
```

Observação: para persistir entre sessões, adicione essas variáveis ao seu perfil do PowerShell ou use o painel de variáveis de ambiente do Windows.

4) Rode o teste
  - No workspace root, rode:

```powershell
node src/test-notion.js
```

5) Interpretação dos resultados
  - Se o teste imprimir "Database retrieved successfully", o ID está correto e o token tem permissão.
  - Erro 401/403: token inválido ou sem permissão. Verifique se a integração está compartilhada com o database.
  - Erro 404: databaseId incorreto ou a integração não tem acesso.

Se preferir, eu posso rodar o teste aqui se você colar a saída de erro ou confirmar que quer que eu modifique algo mais.

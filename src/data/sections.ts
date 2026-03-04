export interface CardLink {
  label: string
  url: string
}

export interface FlowStep {
  label: string
  description: string
  icon?: string
}

export interface Analogy {
  title: string
  central: string
  description: string
}

export interface ElementGridItem {
  icon: string
  title: string
  description: string
  highlight?: boolean
}

export interface RelationshipItem {
  icon: string
  label: string
  symbol?: string
}

export interface CommandItem {
  command: string
  description: string
}

export interface ChecklistGroup {
  title: string
  items: string[]
}

export interface RefTableRow {
  feature: string
  description: string
  config: string
}

export interface Card {
  title: string
  subtitle?: string
  level: 'iniciante' | 'intermediario' | 'avancado' | 'expert'
  icon: string
  content: string
  tips?: string[]
  steps?: string[]
  prompt?: string
  links?: CardLink[]
  flowSteps?: FlowStep[]
  analogy?: Analogy
  elementGrid?: ElementGridItem[]
  relationship?: {
    title: string
    items: RelationshipItem[]
    description?: string
  }
  commandList?: CommandItem[]
  checklist?: ChecklistGroup[]
  refTable?: RefTableRow[]
}

export interface Section {
  id: string
  title: string
  description: string
  icon: string
  cards: Card[]
}

export const sections: Section[] = [
  // ═══════════════════════════════════════════════════════════
  // SECAO 1: PRIMEIROS PASSOS
  // ═══════════════════════════════════════════════════════════
  {
    id: 'primeiros-passos',
    title: 'Primeiros Passos com Lovable',
    description: 'Do zero ao seu primeiro app juridico',
    icon: 'rocket',
    cards: [
      {
        title: 'O que e o Lovable?',
        subtitle: 'A plataforma que transforma descricoes em apps reais',
        level: 'iniciante',
        icon: 'heart',
        analogy: {
          title: 'Analogia Juridica',
          central: 'Escritorio de Arquitetura Digital',
          description: 'Imagine um escritorio de arquitetura que constroi predios inteiros a partir de uma descricao verbal. Voce diz "quero um predio de 10 andares com garagem e piscina" e eles entregam o projeto pronto, com planta, eletrica e hidraulica. O Lovable faz isso com aplicativos: voce descreve o que precisa e ele constroi o app completo, com banco de dados, autenticacao e design profissional.',
        },
        content: `O **Lovable** e uma plataforma de desenvolvimento assistido por IA que transforma descricoes em linguagem natural em aplicativos web completos e funcionais. Com uma avaliacao de mercado de **US$ 6,6 bilhoes**, e hoje uma das startups de IA mais valiosas do mundo.

**Como funciona na pratica:**

Voce abre o Lovable, digita no chat algo como "Crie um sistema de controle de prazos processuais com login, dashboard e notificacoes" e a IA constroi o aplicativo inteiro na sua frente — frontend, backend, banco de dados, autenticacao, tudo.

**O que o Lovable gera automaticamente:**

- **Frontend completo** em React + TypeScript + Tailwind CSS
- **Componentes profissionais** usando a biblioteca shadcn/ui
- **Banco de dados** integrado com Supabase (PostgreSQL)
- **Autenticacao** com email/senha ou redes sociais
- **Deploy automatico** com URL publica para compartilhar
- **Codigo fonte real** que voce pode exportar para o GitHub

**Por que advogados estao adotando o Lovable:**

A advocacia moderna exige ferramentas digitais. Contratar um desenvolvedor para criar um portal do cliente custa R$ 15.000-50.000 e leva meses. Com o Lovable, voce mesmo cria o app em horas, por uma fracao do custo. E o melhor: voce controla cada detalhe porque e voce quem descreve o que precisa.

**Stack tecnologico (nao se preocupe com isso agora):**

O Lovable usa as mesmas tecnologias que empresas como Nubank e iFood: React para a interface, TypeScript para seguranca do codigo, Vite para velocidade, Tailwind CSS para o visual e Supabase para o banco de dados. Tudo isso e gerado automaticamente — voce nao precisa saber programar.`,
        tips: [
          'O Lovable gera codigo real e profissional, nao prototipos descartaveis',
          'Voce pode exportar o codigo para o GitHub e contratar um dev para evoluir depois',
          'A plataforma evolui semanalmente com novos recursos',
          'Nao precisa saber programar para comecar — mas entender o basico ajuda muito',
        ],
        links: [
          { label: 'Acessar Lovable', url: 'https://lovable.dev' },
          { label: 'Documentacao Oficial', url: 'https://docs.lovable.dev' },
        ],
      },
      {
        title: 'Por que um Advogado Precisa de Apps?',
        subtitle: 'Transforme seu escritorio com tecnologia propria',
        level: 'iniciante',
        icon: 'lightbulb',
        content: `A advocacia brasileira esta em plena transformacao digital. Escritorios que ainda dependem de planilhas Excel, pastas fisicas e WhatsApp para gerenciar processos estao ficando para tras. Criar seus proprios aplicativos nao e mais luxo de grandes bancas — e necessidade de sobrevivencia.

**Problemas reais que apps resolvem:**

| Problema | Solucao com App | Impacto |
|----------|----------------|---------|
| Prazos perdidos | Alerta automatico com countdown | Zero prazos perdidos |
| Cliente liga pedindo status | Portal do cliente 24/7 | -70% ligacoes |
| Planilha de honorarios bagunca | Sistema de cobranca integrado | +40% recebimento |
| Documentos espalhados | Repositorio centralizado | Busca em segundos |
| Captacao desorganizada | CRM juridico proprio | +50% conversao |

**Exemplos concretos para cada area:**

- **Trabalhista:** Calculador de verbas rescinsorias com atualizacao monetaria automatica
- **Civil:** Portal onde o cliente acompanha o andamento do processo em tempo real
- **Tributario:** Dashboard de creditos tributarios com alertas de prescricao
- **Familia:** Formulario de atendimento inicial que ja monta o roteiro da primeira consulta
- **Previdenciario:** Simulador de aposentadoria que calcula RMI e tempo de contribuicao
- **Criminal:** Checklist de audiencia com controle de prazos e documentos necessarios

**O custo de NAO ter tecnologia:**

Um advogado que perde 1 prazo por ano perde em media R$ 15.000-30.000 em indenizacao ao cliente, alem do dano reputacional. Um sistema de controle de prazos no Lovable custa R$ 25/mes. A matematica e simples.

**Voce nao precisa ser programador:**

O Lovable elimina a barreira tecnica. Se voce sabe descrever o que precisa (e advogados sao otimos nisso — e basicamente o que fazemos em peticoes), voce consegue criar apps profissionais.`,
        tips: [
          'Comece pelo problema que mais doi no seu escritorio hoje',
          'Um app simples de controle de prazos ja justifica o investimento',
          'Apps proprios sao diferencial competitivo na captacao de clientes',
          'Voce pode comecar com o plano gratuito para testar',
          'Cada app criado e um ativo digital do seu escritorio',
        ],
      },
      {
        title: 'Criando sua Conta',
        subtitle: 'Passo a passo para entrar no Lovable',
        level: 'iniciante',
        icon: 'users',
        content: `Criar sua conta no Lovable e simples e leva menos de 2 minutos. A plataforma oferece login via Google ou GitHub, entao voce nao precisa criar mais uma senha.

**Antes de comecar, voce vai precisar de:**

- Um email (preferencialmente o do escritorio)
- Navegador atualizado (Chrome, Edge ou Firefox)
- Conexao com a internet estavel

**Tour pela interface apos o login:**

Ao entrar pela primeira vez, voce vera a tela inicial com seus projetos (vazia no comeco). A interface principal tem:

- **Barra superior:** seu perfil, configuracoes e creditos restantes
- **Area central:** lista de projetos criados
- **Botao "New Project":** para criar um novo aplicativo
- **Menu lateral:** acesso a configuracoes, billing e documentacao

**Ao criar um novo projeto, voce entra no editor:**

- **Chat (esquerda):** onde voce conversa com a IA e descreve o que quer
- **Preview (direita):** visualizacao ao vivo do app sendo construido
- **Barra superior do editor:** botoes de deploy, GitHub, Supabase e configuracoes
- **Code view:** botao para alternar entre preview visual e codigo fonte`,
        steps: [
          'Acesse **lovable.dev** no navegador',
          'Clique em **"Sign Up"** no canto superior direito',
          'Escolha login com **Google** (recomendado) ou **GitHub**',
          'Autorize o acesso a sua conta',
          'Preencha seu nome e aceite os termos de uso',
          'Voce sera redirecionado para o dashboard — sua conta esta pronta!',
          'Clique em **"New Project"** para criar seu primeiro app',
          'Digite uma descricao do que voce quer construir no chat',
          'Aguarde a IA gerar o app (geralmente 30-60 segundos)',
          'Explore o preview e continue refinando com novas mensagens',
        ],
        tips: [
          'Use seu email profissional para manter projetos organizados',
          'Login com Google e mais rapido e nao exige criar senha',
          'Salve o link lovable.dev nos favoritos do navegador',
          'O plano gratuito ja permite criar apps completos',
        ],
        links: [
          { label: 'Criar Conta no Lovable', url: 'https://lovable.dev' },
        ],
      },
      {
        title: 'Escolhendo seu Plano',
        subtitle: 'Free, Pro ou Business — qual e o ideal?',
        level: 'iniciante',
        icon: 'credit-card',
        content: `O Lovable oferece tres planos com diferentes limites de creditos. Entender os planos e essencial para nao ficar sem creditos no meio de um projeto importante.

**Comparacao detalhada dos planos:**

| Recurso | Free | Pro (US$ 25/mes) | Business |
|---------|------|-------------------|----------|
| **Creditos diarios** | 5 por dia | Generosos (mensais) | Ilimitados |
| **Projetos** | 3 projetos | Ilimitados | Ilimitados |
| **Deploy** | Sim | Sim + dominio custom | Sim + dominio custom |
| **Supabase** | Integracao basica | Integracao completa | Integracao completa |
| **GitHub Export** | Limitado | Completo | Completo |
| **Suporte** | Comunidade | Prioritario | Dedicado |

**O que sao creditos?**

Cada interacao com a IA no Lovable consome creditos. Uma mensagem simples como "mude a cor do botao" consome menos creditos do que "crie um sistema completo de autenticacao com recuperacao de senha". O plano gratuito da 5 creditos por dia — suficiente para aprender, mas limitado para projetos reais.

**Recomendacao para advogados:**

- **Aprendendo:** Plano Free (5 creditos/dia) e suficiente para seguir este tutorial
- **Primeiro projeto real:** Pro (US$ 25/mes ~R$ 150) — melhor custo-beneficio
- **Escritorio com varios advogados:** Business — controle de equipe e uso ilimitado

**Dica de economia:** Use o plano Free para aprender e experimentar. Quando estiver pronto para criar seu app real, assine o Pro por 1-2 meses, construa o que precisa, e depois avalie se mantem.`,
        refTable: [
          { feature: 'Plano Free', description: '5 creditos diarios, 3 projetos, ideal para aprender', config: 'R$ 0/mes' },
          { feature: 'Plano Pro', description: 'Creditos mensais generosos, projetos ilimitados, GitHub completo', config: '~R$ 150/mes' },
          { feature: 'Plano Business', description: 'Uso ilimitado, suporte dedicado, controle de equipe', config: 'Sob consulta' },
        ],
        tips: [
          'Comece no Free — voce nao precisa pagar para aprender',
          'O Pro se paga se voce criar pelo menos 1 app que substituia uma ferramenta paga',
          'Visual Edits nao gastam creditos — use bastante!',
          'Planeje suas interacoes para economizar creditos',
        ],
        links: [
          { label: 'Ver Planos e Precos', url: 'https://lovable.dev/pricing' },
        ],
      },
      {
        title: 'Entendendo Creditos',
        subtitle: 'Como funciona o sistema de creditos do Lovable',
        level: 'iniciante',
        icon: 'zap',
        content: `O sistema de creditos e o coracao do modelo de negocio do Lovable. Entender como ele funciona vai te ajudar a economizar e usar a plataforma de forma inteligente.

**Como os creditos sao consumidos:**

Cada mensagem que voce envia no chat do Lovable e que a IA processa consome creditos. O custo varia conforme a complexidade:

| Tipo de Interacao | Custo Aproximado | Exemplo |
|-------------------|------------------|---------|
| Ajuste simples | Baixo | "Mude o titulo para Meu Escritorio" |
| Nova funcionalidade | Medio | "Adicione um formulario de contato" |
| Feature complexa | Alto | "Crie sistema de autenticacao com RLS" |
| Geracao inicial do app | Alto | "Crie um portal do cliente completo" |

**O que NAO consome creditos:**

- **Visual Edits:** clicar em elementos e editar texto, cores e espacamento diretamente
- **Navegacao:** explorar o preview, clicar em paginas, testar funcionalidades
- **Code view:** visualizar o codigo fonte gerado
- **Deploy:** publicar o app com URL publica
- **GitHub:** exportar o codigo para repositorio

**Estrategias para economizar creditos:**

1. **Use Visual Edits** para ajustes visuais (texto, cores, espacamento) — e gratis!
2. **Seja especifico** nos prompts — prompts vagos gastam creditos em tentativas
3. **Use Plan Mode** para planejar antes de construir — gasta menos creditos
4. **Use Chat Mode** para debugar sem alterar codigo — gasta menos creditos
5. **Agrupe mudancas** — uma mensagem com 5 ajustes gasta menos que 5 mensagens separadas

**Quando os creditos resetam:**

No plano Free, voce recebe 5 creditos por dia. No Pro, voce recebe um pacote mensal. Se acabar, voce pode esperar o reset ou fazer upgrade.

**Dica de ouro para advogados:** Antes de enviar um prompt, releia como se fosse uma peticao. Quanto mais claro e completo, menos idas e vindas (e menos creditos gastos).`,
        tips: [
          'Visual Edits sao gratuitos — use para TODOS os ajustes visuais',
          'Um prompt bem escrito economiza 3-5 creditos em retrabalho',
          'Plan Mode consome menos creditos que Agent Mode',
          'Agrupe multiplas mudancas em uma unica mensagem',
          'Revise seu prompt antes de enviar — pense como uma peticao inicial',
        ],
      },
      {
        title: 'Seu Primeiro App em 5 Minutos',
        subtitle: 'Tutorial pratico: Calculador de Prazos Processuais',
        level: 'iniciante',
        icon: 'sparkles',
        content: `Vamos criar seu primeiro app funcional agora mesmo. Sera um **Calculador de Prazos Processuais** — uma ferramenta simples, util e que todo advogado precisa.

**O que o app vai fazer:**

- Receber a data de intimacao e o tipo de prazo
- Calcular automaticamente a data final considerando dias uteis
- Mostrar um countdown visual dos dias restantes
- Classificar a urgencia por cores (verde, amarelo, vermelho)

**Passo a passo para criar:**

Apos fazer login no Lovable, clique em **"New Project"**. No campo de chat que aparece, cole o prompt abaixo e pressione Enter. A IA vai gerar o app completo em 30-60 segundos.

**Depois que o app for gerado:**

Voce vera o preview na direita com o app funcionando. Teste inserindo uma data e selecionando um tipo de prazo. Se quiser ajustar algo (cores, textos, layout), voce tem duas opcoes:

1. **Visual Edits** (gratis): clique no elemento no preview e edite diretamente
2. **Chat** (usa creditos): descreva a mudanca desejada no chat

**Parabens!** Voce acabou de criar seu primeiro app juridico. Nas proximas secoes, vamos aprender a criar apps muito mais complexos e poderosos.`,
        steps: [
          'Faca login em **lovable.dev**',
          'Clique em **"New Project"** no dashboard',
          'Cole o prompt abaixo no campo de chat',
          'Pressione **Enter** e aguarde a IA gerar o app (30-60 segundos)',
          'Teste o app no **preview** inserindo uma data de intimacao',
          'Selecione um tipo de prazo (contestacao, recurso, etc.)',
          'Veja o calculo automatico com o countdown visual',
          'Use **Visual Edits** para ajustar cores ou textos sem gastar creditos',
          'Clique em **Deploy** para publicar com URL publica',
          'Compartilhe o link com um colega para impressiona-lo!',
        ],
        prompt: `Crie um Calculador de Prazos Processuais para advogados brasileiros com as seguintes especificacoes:

LAYOUT:
- Design limpo e profissional com cores azul-marinho e branco
- Responsivo para desktop e mobile
- Header com titulo "Calculador de Prazos Processuais"

FUNCIONALIDADES:
- Campo de data para "Data da Intimacao" com date picker
- Dropdown para selecionar o tipo de prazo:
  - Contestacao (15 dias uteis)
  - Recurso de Apelacao (15 dias uteis)
  - Embargos de Declaracao (5 dias uteis)
  - Agravo de Instrumento (15 dias uteis)
  - Recurso Especial (15 dias uteis)
  - Recurso Extraordinario (15 dias uteis)
  - Impugnacao ao Cumprimento de Sentenca (15 dias uteis)
- Checkbox "Dobro do prazo" para Fazenda Publica ou Defensoria
- Botao "Calcular Prazo" que:
  - Calcula a data final considerando apenas dias uteis
  - Exclui sabados e domingos
  - Mostra countdown dos dias restantes
  - Classifica urgencia: Verde (>10 dias), Amarelo (5-10 dias), Vermelho (<5 dias)
- Card de resultado com: data final, dias restantes, barra de progresso visual e indicador de urgencia
- Historico dos ultimos 5 calculos realizados

DESIGN:
- Use shadcn/ui para todos os componentes
- Icones do Lucide React
- Animacoes suaves nas transicoes
- Toast de confirmacao ao calcular`,
        tips: [
          'Este app funciona 100% no frontend — nao precisa de banco de dados',
          'Voce pode adicionar feriados nacionais depois com outro prompt',
          'Use Visual Edits para personalizar com as cores do seu escritorio',
          'O deploy gera um link que voce pode enviar para qualquer pessoa',
        ],
      },
      {
        title: 'A Interface do Lovable',
        subtitle: 'Tour completo pelo editor de apps',
        level: 'iniciante',
        icon: 'layout',
        content: `Conhecer a interface do Lovable e fundamental para trabalhar com eficiencia. Vamos explorar cada area do editor para que voce se sinta em casa.

**Visao geral do editor:**

Ao abrir um projeto, voce vera a tela dividida em duas partes principais: o **chat** a esquerda e o **preview** a direita. Essa organizacao permite que voce descreva o que quer e veja o resultado imediatamente.

**Painel de Chat (esquerda):**

- **Campo de mensagem:** onde voce digita seus prompts para a IA
- **Historico de conversa:** todas as mensagens trocadas com a IA neste projeto
- **Seletor de modo:** alterne entre Agent Mode, Plan Mode e Chat Mode
- **Referencia de arquivos:** use **@** para referenciar arquivos especificos do projeto
- **Knowledge Base:** adicione documentos de referencia que a IA deve considerar

**Painel de Preview (direita):**

- **Visualizacao ao vivo:** veja o app funcionando em tempo real
- **Responsividade:** botoes para alternar entre desktop, tablet e mobile
- **Visual Edits:** clique em qualquer elemento para editar visualmente
- **URL do preview:** endereco temporario para testar o app

**Barra superior:**

- **Deploy:** publicar o app com URL publica permanente
- **GitHub:** conectar repositorio e exportar codigo
- **Supabase:** conectar banco de dados
- **Version History:** historico de versoes (como um "ctrl+Z" poderoso)
- **Settings:** configuracoes do projeto

**Barra lateral (sidebar):**

- **File Explorer:** navegar pelos arquivos do projeto
- **Code View:** ver e editar o codigo fonte diretamente
- **Dependencies:** gerenciar pacotes instalados

**Version History — seu melhor amigo:**

O Lovable salva automaticamente cada versao do seu app. Se uma mudanca quebrou algo, voce pode voltar para qualquer versao anterior com um clique. Pense nisso como o "historico de versoes" do Google Docs, mas para codigo.`,
        tips: [
          'Mantenha o preview aberto enquanto trabalha para ver mudancas em tempo real',
          'Use Version History SEMPRE antes de fazer mudancas grandes',
          'O atalho @ no chat permite referenciar arquivos especificos',
          'Visual Edits nao gastam creditos — use para ajustes de texto e cor',
          'O Code View e util mesmo sem saber programar — para copiar trechos',
        ],
        elementGrid: [
          { icon: 'message-square', title: 'Chat', description: 'Onde voce conversa com a IA. Descreva funcionalidades, peca mudancas, tire duvidas. E o controle remoto do seu app.', highlight: false },
          { icon: 'eye', title: 'Preview', description: 'Visualizacao ao vivo do app. Teste cliques, formularios e navegacao. Com Visual Edits, edite direto aqui sem gastar creditos.', highlight: true },
          { icon: 'terminal', title: 'Code View', description: 'O codigo fonte do app. Mesmo sem saber programar, e util para entender a estrutura e referenciar arquivos com @.', highlight: false },
        ],
      },
      {
        title: 'Os 3 Modos: Agent, Plan e Chat',
        subtitle: 'Quando usar cada modo para maximizar resultados',
        level: 'iniciante',
        icon: 'layers',
        content: `O Lovable oferece tres modos de interacao com a IA. Cada um tem um proposito especifico, e saber quando usar cada um e a diferenca entre gastar creditos sabiamente e desperdicar.

**Agent Mode — O Construtor**

E o modo padrao e mais poderoso. Quando voce envia uma mensagem no Agent Mode, a IA analisa o pedido, planeja as mudancas necessarias e implementa diretamente no codigo. Use quando quiser que algo seja efetivamente construido ou alterado no app.

Exemplo: "Adicione uma pagina de login com email e senha, botao de recuperar senha e redirecionamento para o dashboard apos autenticar."

**Plan Mode — O Estrategista**

Neste modo, a IA analisa seu pedido e cria um plano detalhado SEM implementar nada. Voce ve exatamente o que ela pretende fazer, quais arquivos vai criar ou modificar, e pode aprovar ou ajustar antes de gastar creditos com a implementacao.

Exemplo: "Planeje como seria um sistema de gestao de honorarios com parcelas, relatorios e alertas de inadimplencia."

**Chat Mode — O Consultor**

Modo conversacional puro. A IA responde perguntas, explica conceitos, analisa seu codigo e sugere solucoes sem alterar nada. Ideal para debugging e aprendizado.

Exemplo: "Por que o formulario nao esta salvando os dados? Olhe o arquivo ClientForm.tsx."

**Fluxo ideal de trabalho:**

A sequencia mais eficiente e: Plan Mode (planejar) -> aprovar o plano -> Agent Mode (construir) -> Chat Mode (debugar se necessario). Isso economiza creditos e evita retrabalho.`,
        elementGrid: [
          { icon: 'zap', title: 'Agent Mode', description: 'Constroi e altera o app. Use para implementar funcionalidades, criar paginas, conectar banco de dados. Consome mais creditos.', highlight: true },
          { icon: 'brain', title: 'Plan Mode', description: 'Planeja sem construir. Mostra o que sera feito antes de fazer. Use para features complexas. Economiza creditos.', highlight: false },
          { icon: 'message-circle', title: 'Chat Mode', description: 'Conversa sem alterar. Tire duvidas, debugue erros, peca explicacoes. Consome menos creditos.', highlight: false },
        ],
        flowSteps: [
          { label: 'Planejar', description: 'Use Plan Mode para definir a estrategia e validar a abordagem antes de gastar creditos' },
          { label: 'Construir', description: 'Aprove o plano e mude para Agent Mode para implementar as mudancas' },
          { label: 'Verificar', description: 'Teste no preview e use Chat Mode para debugar qualquer problema' },
          { label: 'Refinar', description: 'Use Visual Edits (gratis) para ajustes visuais e Agent Mode para ajustes funcionais' },
        ],
        tips: [
          'Sempre comece com Plan Mode para features complexas',
          'Chat Mode e perfeito para entender erros sem alterar o codigo',
          'Agent Mode e o unico que efetivamente modifica o app',
          'Visual Edits (clique no preview) e uma alternativa gratuita para ajustes visuais',
        ],
      },
      {
        title: 'Visual Edits: Ajuste sem Gastar Creditos',
        subtitle: 'A funcionalidade que economiza seu dinheiro',
        level: 'iniciante',
        icon: 'eye',
        content: `**Visual Edits** e uma das funcionalidades mais valiosas do Lovable, especialmente para quem esta no plano Free ou quer economizar creditos. Ele permite que voce clique em qualquer elemento do preview e edite diretamente — sem enviar mensagem no chat e sem gastar nenhum credito.

**O que voce pode fazer com Visual Edits:**

- **Editar textos:** clique em qualquer texto e reescreva diretamente
- **Mudar cores:** altere cores de fundo, texto, bordas e botoes
- **Ajustar espacamento:** modifique margens e paddings visualmente
- **Redimensionar:** altere tamanhos de elementos
- **Mover elementos:** reposicione componentes na tela
- **Duplicar:** copie elementos existentes

**O que voce NAO pode fazer com Visual Edits:**

- Adicionar novas funcionalidades (precisa de Agent Mode)
- Criar novas paginas (precisa de Agent Mode)
- Conectar banco de dados (precisa de Agent Mode)
- Adicionar logica de programacao (precisa de Agent Mode)

**Quando usar Visual Edits vs Prompt:**

| Tarefa | Visual Edits (gratis) | Prompt (creditos) |
|--------|----------------------|-------------------|
| Corrigir texto | Sim | Desnecessario |
| Mudar cor de botao | Sim | Desnecessario |
| Ajustar espacamento | Sim | Desnecessario |
| Adicionar novo campo no formulario | Nao | Necessario |
| Criar pagina nova | Nao | Necessario |
| Integrar com Supabase | Nao | Necessario |

**Como ativar o Visual Edits:**

No painel de preview, passe o mouse sobre qualquer elemento. Voce vera um contorno azul indicando que o elemento e editavel. Clique nele e um painel de edicao aparecera com as opcoes disponiveis.

**Dica para advogados:** Depois que a IA gerar seu app, passe por TODAS as telas usando Visual Edits para corrigir textos, ajustar cores para as do seu escritorio e refinar o espacamento. Isso polui o resultado final sem gastar um unico credito.`,
        tips: [
          'Passe o mouse sobre o preview para ver quais elementos sao editaveis',
          'Use Visual Edits PRIMEIRO para ajustes visuais — so use prompt se nao resolver',
          'Ideal para personalizar templates com a identidade visual do escritorio',
          'Visual Edits funciona em todos os planos, inclusive no Free',
          'Combine: IA gera a estrutura, Visual Edits refina o visual',
        ],
      },
      {
        title: 'Glossario Essencial',
        subtitle: 'Termos tecnicos traduzidos para advogados',
        level: 'iniciante',
        icon: 'book-open',
        content: `Antes de avancar, vamos traduzir os termos tecnicos que voce vai encontrar ao longo deste guia e dentro do Lovable. Nao precisa decorar — use como referencia.

**Termos de Desenvolvimento:**

| Termo | O que e | Analogia Juridica |
|-------|---------|-------------------|
| **Componente** | Peca reutilizavel do app (botao, formulario, card) | Clausula padrao que voce reutiliza em contratos |
| **Prop** | Dados passados para um componente | Parametros de uma clausula (nome, valor, prazo) |
| **Estado (State)** | Dados que mudam no app (ex: campo preenchido) | Andamento processual — muda conforme o processo evolui |
| **Deploy** | Publicar o app na internet com URL publica | Protocolar a peticao — torna acessivel a todos |
| **Frontend** | Parte visual do app (o que o usuario ve) | A peteca — o que o juiz le |
| **Backend** | Logica por tras do app (calculos, banco de dados) | Os fundamentos juridicos — sustentam o que esta escrito |

**Termos do Lovable:**

| Termo | O que e | Quando aparece |
|-------|---------|----------------|
| **Preview** | Visualizacao ao vivo do app | Painel direito do editor |
| **Agent Mode** | IA constroi/altera o app | Seletor de modo no chat |
| **Plan Mode** | IA planeja sem construir | Seletor de modo no chat |
| **Chat Mode** | IA conversa sem alterar | Seletor de modo no chat |
| **Visual Edits** | Edicao visual sem creditos | Clicando no preview |
| **Version History** | Historico de versoes do app | Barra superior |
| **Knowledge Base** | Documentos de referencia para a IA | Configuracoes do projeto |

**Termos do Supabase (banco de dados):**

| Termo | O que e | Analogia Juridica |
|-------|---------|-------------------|
| **Tabela** | Estrutura que armazena dados | Livro de registro do cartorio |
| **Row (linha)** | Um registro na tabela | Uma entrada no livro de registro |
| **Column (coluna)** | Um campo da tabela | Um campo do formulario (nome, CPF, data) |
| **RLS** | Regra de acesso por usuario | Sigilo profissional — cada advogado so ve seus dados |
| **Edge Function** | Codigo que roda no servidor | O despachante — faz coisas nos bastidores |
| **Migration** | Alteracao na estrutura do banco | Emenda ao contrato — modifica a estrutura existente |
| **Storage** | Armazem de arquivos (PDFs, imagens) | Arquivo morto digital — guarda documentos |
| **Auth** | Sistema de login e autenticacao | Portaria do escritorio — controla quem entra |

**Termos de Design:**

| Termo | O que e |
|-------|---------|
| **shadcn/ui** | Biblioteca de componentes visuais que o Lovable usa |
| **Tailwind CSS** | Sistema de estilizacao usado pelo Lovable |
| **Responsivo** | App que funciona bem em desktop E mobile |
| **Dark Mode** | Tema escuro (fundo preto, texto claro) |
| **Lucide** | Biblioteca de icones usada pelo Lovable |`,
        tips: [
          'Nao precisa decorar — volte aqui sempre que encontrar um termo desconhecido',
          'Os termos mais importantes para comecar: componente, deploy, estado e RLS',
          'Voce vai aprender cada termo na pratica ao longo das secoes',
          'Saber os termos corretos melhora muito a qualidade dos seus prompts',
        ],
      },
      {
        title: 'Lovable vs Outras Ferramentas',
        subtitle: 'Comparativo honesto com Bolt, v0 e Cursor',
        level: 'iniciante',
        icon: 'arrow-right-left',
        content: `O mercado de ferramentas de desenvolvimento com IA esta crescendo rapidamente. Vamos comparar o Lovable com as principais alternativas para que voce entenda por que recomendamos ele para advogados.

**Lovable vs Bolt.new:**

Bolt e o concorrente mais direto. Ambos geram apps completos a partir de prompts. A diferenca principal e que o Lovable tem uma experiencia mais polida, melhor integracao com Supabase e o recurso de Visual Edits que economiza creditos. Bolt tende a ser mais rapido na geracao inicial, mas o Lovable produz codigo mais limpo e organizado.

**Lovable vs v0 (Vercel):**

O v0 e excelente para gerar componentes individuais (um botao, um formulario, um card), mas nao gera apps completos com backend, autenticacao e banco de dados como o Lovable. Use o v0 como complemento, nao como substituto.

**Lovable vs Cursor:**

Cursor e um editor de codigo com IA integrada. E poderoso, mas exige conhecimento de programacao. Voce precisa saber o que esta fazendo e a IA te ajuda a fazer mais rapido. O Lovable nao exige conhecimento tecnico — voce descreve e ele constroi.

**Por que o Lovable e ideal para advogados:**

1. **Zero codigo necessario** — voce descreve em portugues, ele constroi
2. **App completo** — frontend + backend + banco de dados + deploy
3. **Visual Edits** — ajustes visuais sem gastar creditos
4. **Supabase integrado** — banco de dados seguro com RLS para dados juridicos
5. **Deploy com 1 clique** — app publicado com URL para compartilhar
6. **Version History** — seguranca para desfazer qualquer mudanca`,
        refTable: [
          { feature: 'Lovable', description: 'App completo com backend, Visual Edits, Supabase integrado, deploy facil', config: 'Recomendado' },
          { feature: 'Bolt.new', description: 'App completo, geracao rapida, menos polido, sem Visual Edits', config: 'Alternativa' },
          { feature: 'v0 (Vercel)', description: 'Componentes individuais excelentes, nao gera apps completos', config: 'Complemento' },
          { feature: 'Cursor', description: 'Editor de codigo com IA, exige saber programar', config: 'Para devs' },
        ],
        tips: [
          'Lovable e a melhor opcao para quem nao sabe programar',
          'v0 pode ser usado junto com o Lovable para gerar componentes',
          'Se voce ja sabe programar, Cursor pode ser mais poderoso',
          'Bolt e a alternativa mais proxima — experimente ambos e escolha',
        ],
      },
      {
        title: 'Roadmap de Aprendizado',
        subtitle: 'Seu plano de 4 semanas para dominar o Lovable',
        level: 'iniciante',
        icon: 'target',
        content: `Este guia tem muito conteudo, e pode parecer intimidador. Para facilitar, aqui esta um roadmap de 4 semanas que vai te levar de zero a criar apps juridicos completos.

**Filosofia do roadmap:** Cada semana foca em uma camada de complexidade. Nao pule etapas — cada semana constroi sobre a anterior.

**Semana 1 — Fundamentos:**
Foco em entender a plataforma, criar sua conta, explorar a interface e criar seu primeiro app simples. Ao final da semana, voce deve se sentir confortavel navegando pelo Lovable e usando os 3 modos.

**Semana 2 — Prompts e Design:**
Foco em aprender a escrever prompts eficazes e criar apps com design profissional. Ao final da semana, voce deve conseguir descrever apps complexos de forma clara e obter resultados consistentes.

**Semana 3 — Banco de Dados:**
Foco em conectar Supabase, criar tabelas, implementar autenticacao e configurar RLS. Ao final da semana, voce deve ter um app com login, dados persistentes e seguranca basica.

**Semana 4 — Projeto Real:**
Foco em construir seu primeiro projeto real completo (Portal do Cliente, Gestao de Processos ou outro). Ao final da semana, voce deve ter um app publicado e funcional.

**Apos as 4 semanas:**
Continue explorando as secoes avancadas (integracao, deploy, seguranca) conforme a necessidade. Voce ja tera base suficiente para aprender sozinho.`,
        checklist: [
          {
            title: 'Semana 1 — Fundamentos',
            items: [
              'Criar conta no Lovable e explorar a interface',
              'Criar o Calculador de Prazos (primeiro app)',
              'Entender os 3 modos: Agent, Plan e Chat',
              'Praticar Visual Edits em um app existente',
              'Ler o Glossario Essencial e anotar termos novos',
              'Criar pelo menos 2 apps simples para praticar',
            ],
          },
          {
            title: 'Semana 2 — Prompts e Design',
            items: [
              'Estudar a Secao 2 (Dominando Prompts)',
              'Praticar o framework DESCRICAO para prompts',
              'Criar um app com design profissional (cores do escritorio)',
              'Experimentar Dark Mode e responsividade mobile',
              'Criar uma Landing Page para o escritorio',
              'Usar a Biblioteca de Prompts Juridicos',
            ],
          },
          {
            title: 'Semana 3 — Banco de Dados',
            items: [
              'Criar conta no Supabase e conectar ao Lovable',
              'Criar tabelas para clientes e processos',
              'Implementar CRUD basico (criar, ler, atualizar, deletar)',
              'Adicionar autenticacao com email/senha',
              'Configurar RLS basico (cada usuario ve seus dados)',
              'Testar upload de documentos com Storage',
            ],
          },
          {
            title: 'Semana 4 — Projeto Real',
            items: [
              'Escolher o projeto principal (Portal do Cliente recomendado)',
              'Usar Plan Mode para planejar a arquitetura',
              'Implementar feature por feature com Agent Mode',
              'Configurar autenticacao e RLS completos',
              'Fazer deploy e testar com URL publica',
              'Compartilhar com colegas e coletar feedback',
            ],
          },
        ],
        tips: [
          'Nao pule semanas — cada uma constroi sobre a anterior',
          'Dedique pelo menos 1 hora por dia — consistencia e mais importante que intensidade',
          'Salve seus apps de pratica — eles servem como referencia depois',
          'Se travar em algo, use Chat Mode para pedir explicacoes a IA',
          'O plano Free e suficiente para as semanas 1 e 2',
        ],
      },
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // SECAO 2: DOMINANDO PROMPTS
  // ═══════════════════════════════════════════════════════════
  {
    id: 'prompts',
    title: 'Dominando Prompts no Lovable',
    description: 'A arte de descrever apps para a IA construir',
    icon: 'message-square',
    cards: [
      {
        title: 'Anatomia de um Prompt Eficaz',
        subtitle: 'O framework DESCRICAO para nunca mais travar',
        level: 'iniciante',
        icon: 'target',
        analogy: {
          title: 'Analogia Juridica',
          central: 'Peticao Inicial',
          description: 'Um prompt eficaz para o Lovable segue a mesma logica de uma boa peticao inicial: tem os fatos (contexto), os fundamentos (funcionalidades), o pedido (comportamento esperado) e a formatacao adequada (design). Peticao vaga gera despacho pedindo emenda. Prompt vago gera app errado e creditos desperdicados.',
        },
        content: `A qualidade do seu prompt determina 80% do resultado no Lovable. Um prompt bem estruturado gera um app quase pronto na primeira tentativa. Um prompt vago gera frustracao e desperdicio de creditos.

**Framework DESCRICAO:**

Use este acronimo para estruturar todos os seus prompts:

- **D** — Descricao geral: O que e o app? Qual o proposito?
- **E** — Estrutura: Quantas paginas? Qual o layout?
- **S** — Secoes: Quais secoes cada pagina tem?
- **C** — Componentes: Quais elementos interativos? (botoes, formularios, tabelas)
- **R** — Regras de negocio: Quais calculos, validacoes, restricoes?
- **I** — Integracao: Precisa de banco de dados? Login? API externa?
- **C** — Cores e design: Qual o estilo visual? Cores? Tipografia?
- **A** — Acoes: O que acontece quando o usuario clica, envia, navega?
- **O** — Observacoes: Detalhes extras, restricoes, preferencias

**Exemplo comparativo:**

**Prompt RUIM:** "Crie um app de controle de processos"

**Prompt BOM usando DESCRICAO:**
"Crie um sistema de gestao de processos judiciais para um escritorio de advocacia trabalhista.

ESTRUTURA: 3 paginas — Dashboard, Lista de Processos e Detalhes do Processo.

COMPONENTES: Dashboard com cards mostrando total de processos, prazos proximos e valor total em honorarios. Lista com tabela filtravel por status (ativo, arquivado, em recurso), vara e cliente. Detalhes com timeline do processo.

REGRAS: Status muda automaticamente quando prazo vence. Alerta visual para prazos em menos de 5 dias.

DESIGN: Cores azul-marinho e branco, profissional e limpo, responsivo para mobile."

**A diferenca?** O prompt ruim gera algo generico. O prompt bom gera exatamente o que voce precisa.

**Regra de ouro:** Se voce gastaria 1 paragrafo descrevendo o app para um estagiario, gaste 3 paragrafos descrevendo para a IA. Ela e mais literal e precisa de mais contexto.`,
        tips: [
          'Use o framework DESCRICAO como checklist antes de enviar qualquer prompt',
          'Quanto mais especifico, melhor o resultado e menos creditos gastos em ajustes',
          'Inclua numeros: "3 paginas", "5 campos", "tabela com 6 colunas"',
          'Mencione tecnologias: "use shadcn/ui", "icones Lucide", "Tailwind CSS"',
          'Descreva o comportamento: "ao clicar no botao, abre um modal com..."',
        ],
      },
      {
        title: 'Prompts para Telas e Layout',
        subtitle: 'Como descrever interfaces visuais com precisao',
        level: 'iniciante',
        icon: 'layout',
        content: `O layout e a primeira coisa que o usuario ve no seu app. Descrever layouts com precisao evita retrabalho e economiza creditos.

**Vocabulario essencial para layouts:**

- **Header:** barra superior com logo, navegacao e perfil do usuario
- **Sidebar:** menu lateral com links para as paginas
- **Main content:** area central onde o conteudo principal aparece
- **Footer:** rodape com informacoes do escritorio
- **Card:** caixa com bordas que agrupa informacoes relacionadas
- **Grid:** disposicao em colunas (2 colunas, 3 colunas, etc.)
- **Modal:** janela flutuante que aparece sobre o conteudo
- **Drawer:** painel que desliza da lateral

**Como descrever cores:**

Seja especifico. Ao inves de "cores profissionais", diga: "Fundo branco (#FFFFFF), texto cinza escuro (#1F2937), botoes em azul-marinho (#1E3A5F), acentos em dourado (#C5A23E)".

**Paletas recomendadas para escritorios de advocacia:**

- **Classica:** Azul-marinho + branco + dourado (traduzir sofisticacao)
- **Moderna:** Cinza escuro + branco + verde esmeralda (traduzir inovacao)
- **Corporativa:** Azul royal + cinza claro + preto (traduzir seriedade)

**Dica de layout para apps juridicos:** A maioria dos apps juridicos funciona melhor com layout de sidebar (menu lateral) + area de conteudo principal. Isso porque advogados precisam navegar rapidamente entre processos, clientes e documentos.`,
        prompt: `Crie o layout base para um sistema juridico com as seguintes especificacoes:

LAYOUT GERAL:
- Sidebar fixa na esquerda com 250px de largura
- Header fixo no topo com 64px de altura
- Area de conteudo principal ocupando o restante
- Footer discreto com copyright

SIDEBAR:
- Logo do escritorio no topo (placeholder com texto "Meu Escritorio")
- Menu de navegacao com icones Lucide:
  - Dashboard (icone LayoutDashboard)
  - Processos (icone Briefcase)
  - Clientes (icone Users)
  - Financeiro (icone DollarSign)
  - Documentos (icone FileText)
  - Agenda (icone Calendar)
  - Configuracoes (icone Settings)
- Item ativo destacado com fundo colorido
- Botao de logout no rodape da sidebar

HEADER:
- Breadcrumb mostrando a pagina atual
- Barra de busca global
- Icone de notificacoes com badge de contagem
- Avatar do usuario com dropdown (perfil, configuracoes, sair)

DESIGN:
- Cores: sidebar em azul-marinho (#1E293B), fundo em cinza claro (#F8FAFC), acentos em azul (#3B82F6)
- Fonte: Inter para texto, peso 400 para corpo e 600/700 para titulos
- Bordas arredondadas de 8px nos cards
- Sombras suaves nos cards
- Totalmente responsivo — sidebar vira drawer no mobile
- Transicoes suaves de 200ms em hover e cliques

PAGINA INICIAL (Dashboard):
- 4 cards de metricas no topo: Total de Processos, Prazos esta Semana, Honorarios do Mes, Clientes Ativos
- Grafico de processos por status (ativo, arquivado, em recurso) usando recharts
- Lista dos 5 proximos prazos com countdown
- Atividade recente (ultimas 10 acoes no sistema)`,
        tips: [
          'Sempre especifique tamanhos em pixels para sidebar e header',
          'Mencione "responsivo" e descreva o comportamento no mobile',
          'Use nomes de cores hexadecimais para resultados consistentes',
          'Peca "transicoes suaves" para uma experiencia mais profissional',
          'Descreva o comportamento do menu ativo (destaque, cor, icone)',
        ],
      },
      {
        title: 'Prompts para Funcionalidades',
        subtitle: 'Formularios, validacoes, filtros e mais',
        level: 'intermediario',
        icon: 'zap',
        content: `Funcionalidades sao o coracao do seu app. Aprender a descrever formularios, validacoes, filtros e interacoes de forma precisa e essencial.

**Formularios — A base de todo app juridico:**

Todo app juridico precisa de formularios: cadastro de cliente, registro de processo, lancamento de honorarios. A qualidade do formulario depende de como voce descreve os campos, validacoes e comportamento.

**Estrutura de um prompt de formulario:**

1. **Campos:** liste todos com tipo (texto, numero, data, dropdown, checkbox)
2. **Validacoes:** o que e obrigatorio? Qual o formato? (CPF, email, telefone)
3. **Comportamento:** o que acontece ao enviar? Mensagem de sucesso? Redirecionamento?
4. **Layout:** campos em 1 coluna? 2 colunas? Agrupados em secoes?

**Tipos de campo comuns em apps juridicos:**

| Campo | Tipo | Validacao |
|-------|------|-----------|
| Nome completo | Texto | Obrigatorio, min 5 caracteres |
| CPF | Texto com mascara | 11 digitos, validacao de digito verificador |
| OAB | Texto | Formato UF + numero (ex: SP123456) |
| Telefone | Texto com mascara | (XX) XXXXX-XXXX |
| Email | Email | Formato valido com @ |
| Data | Date picker | Nao pode ser futuro (para datas de nascimento) |
| Valor | Numero com mascara | Formato moeda R$ X.XXX,XX |
| Status | Dropdown | Lista fixa de opcoes |
| Observacoes | Textarea | Opcional, max 500 caracteres |

**Filtros e busca:**

Para tabelas com muitos registros, sempre peca filtros. Descreva: quais campos podem ser filtrados, se o filtro e por texto livre ou por opcoes, e se ha busca global.`,
        prompt: `Crie um formulario completo de cadastro de cliente para um escritorio de advocacia com:

SECOES DO FORMULARIO:
1. Dados Pessoais:
   - Nome completo (texto, obrigatorio)
   - CPF (texto com mascara XXX.XXX.XXX-XX, obrigatorio, com validacao de digito verificador)
   - RG (texto, opcional)
   - Data de nascimento (date picker, obrigatorio, nao pode ser data futura)
   - Estado civil (dropdown: solteiro, casado, divorciado, viuvo, uniao estavel)
   - Profissao (texto, opcional)

2. Contato:
   - Telefone principal (texto com mascara (XX) XXXXX-XXXX, obrigatorio)
   - Telefone secundario (mesmo formato, opcional)
   - Email (validacao de formato, obrigatorio)
   - Preferencia de contato (radio: telefone, email, WhatsApp)

3. Endereco:
   - CEP (texto com mascara XXXXX-XXX, ao preencher busca automatica via API ViaCEP)
   - Rua (preenchido automaticamente pelo CEP)
   - Numero (texto, obrigatorio)
   - Complemento (texto, opcional)
   - Bairro (preenchido automaticamente)
   - Cidade (preenchido automaticamente)
   - Estado (preenchido automaticamente)

4. Informacoes Juridicas:
   - Como conheceu o escritorio (dropdown: indicacao, internet, redes sociais, OAB, outro)
   - Area de interesse (multi-select: trabalhista, civil, familia, criminal, tributario, previdenciario)
   - Breve descricao do caso (textarea, max 1000 caracteres)
   - Tem urgencia? (toggle sim/nao)

COMPORTAMENTO:
- Validacao em tempo real (mostra erro enquanto digita)
- Botao "Salvar" desabilitado ate todos campos obrigatorios preenchidos
- Ao salvar: toast de sucesso + redireciona para lista de clientes
- Botao "Cancelar" com confirmacao "Tem certeza? Dados nao salvos serao perdidos"

LAYOUT:
- Formulario em 2 colunas no desktop, 1 coluna no mobile
- Cada secao com titulo e divisor visual
- Campos obrigatorios com asterisco vermelho
- Design usando shadcn/ui com cores neutras e profissionais`,
        tips: [
          'Sempre liste TODOS os campos com tipo e validacao',
          'Descreva o comportamento do botao de enviar',
          'Peca validacao em tempo real para melhor experiencia',
          'Especifique o layout: 1 coluna, 2 colunas, secoes agrupadas',
          'Para CPF e telefone, peca mascaras de formatacao',
        ],
      },
      {
        title: 'Prompts para Dados e Tabelas',
        subtitle: 'Estruture dados como um profissional',
        level: 'intermediario',
        icon: 'database',
        content: `Tabelas de dados sao onipresentes em apps juridicos: lista de processos, clientes, honorarios, documentos. Saber descrever tabelas eficazes faz toda a diferenca.

**Elementos de uma boa tabela:**

1. **Colunas visiveis:** quais dados aparecem na tabela
2. **Ordenacao:** quais colunas podem ser ordenadas (clique no header)
3. **Filtros:** busca por texto, filtro por status, filtro por data
4. **Paginacao:** quantos registros por pagina
5. **Acoes por linha:** botoes de editar, excluir, ver detalhes
6. **Responsividade:** como a tabela se comporta no mobile

**Dados de exemplo (seed data):**

Sempre peca que o Lovable gere dados de exemplo realistas. Isso ajuda a visualizar como o app vai ficar com dados reais e facilita os testes.

**Tipos de visualizacao de dados para apps juridicos:**

- **Tabela padrao:** lista de processos, clientes, honorarios
- **Kanban board:** pipeline de processos (captacao -> analise -> contratado -> em andamento -> concluido)
- **Timeline:** historico de movimentacoes processuais
- **Cards grid:** visao resumida de casos ativos
- **Dashboard com graficos:** metricas e KPIs do escritorio

**Relacoes entre dados (importante para Supabase):**

No mundo juridico, os dados se relacionam:
- 1 cliente tem N processos
- 1 processo tem N documentos
- 1 processo tem N movimentacoes
- 1 processo tem N honorarios
- 1 advogado atende N clientes

Descrever essas relacoes no prompt ajuda a IA a criar a estrutura de banco de dados correta desde o inicio.`,
        prompt: `Crie uma pagina de listagem de processos judiciais com tabela avancada:

TABELA DE PROCESSOS:
Colunas visiveis:
- Numero do processo (formato: NNNNNNN-NN.NNNN.N.NN.NNNN)
- Cliente (nome do cliente vinculado)
- Area (trabalhista, civil, familia, criminal, tributario)
- Vara/Tribunal
- Status (ativo, suspenso, arquivado, em recurso, transito em julgado)
- Ultimo andamento (data + descricao breve)
- Valor da causa (formato moeda BRL)
- Advogado responsavel

FUNCIONALIDADES:
- Busca global por texto (busca em numero, cliente e vara)
- Filtros laterais:
  - Status (multi-select com checkboxes)
  - Area do direito (multi-select)
  - Periodo (date range picker para data de distribuicao)
  - Advogado responsavel (dropdown)
- Ordenacao por qualquer coluna (clique no header)
- Paginacao com 20 registros por pagina e seletor (10, 20, 50, 100)
- Selecao multipla com checkbox para acoes em lote
- Acoes em lote: alterar status, atribuir advogado, exportar selecionados

ACOES POR LINHA:
- Botao "Ver" (abre detalhes do processo)
- Botao "Editar" (abre formulario de edicao)
- Botao "Excluir" (com confirmacao: "Tem certeza? Esta acao nao pode ser desfeita")
- Menu "..." com: duplicar, arquivar, gerar relatorio

DADOS DE EXEMPLO:
- Gere 25 processos ficticios com dados realistas brasileiros
- Use nomes de clientes, varas e tribunais do estado de Sao Paulo
- Misture diferentes status e areas do direito

DESIGN:
- Tabela com zebra striping (linhas alternadas em cinza claro)
- Status com badges coloridos (ativo=verde, suspenso=amarelo, arquivado=cinza, em recurso=azul, transito=roxo)
- Hover na linha destaca com fundo levemente colorido
- Coluna de acoes fixa na direita
- Responsivo: no mobile, mostra apenas numero, cliente e status com scroll horizontal`,
        tips: [
          'Sempre peca dados de exemplo (seed data) para visualizar o resultado',
          'Descreva o formato exato dos dados (numero do processo, CPF, moeda)',
          'Filtros laterais sao melhores que filtros no topo para muitas opcoes',
          'Peca paginacao para tabelas com mais de 20 registros',
          'Badges coloridos para status melhoram muito a usabilidade',
        ],
      },
      {
        title: 'Prompts para Autenticacao',
        subtitle: 'Login seguro para seu app juridico',
        level: 'intermediario',
        icon: 'lock',
        content: `Autenticacao e obrigatoria para qualquer app juridico. Dados de clientes e processos sao sigilosos — voce PRECISA de login para protege-los.

**O que a autenticacao do Lovable oferece (via Supabase):**

- Login com email e senha
- Cadastro de novos usuarios
- Recuperacao de senha por email
- Login social (Google, GitHub)
- Sessoes persistentes (usuario fica logado)
- Protecao de rotas (paginas que so logados acessam)

**Niveis de autenticacao para apps juridicos:**

| Nivel | Descricao | Exemplo |
|-------|-----------|---------|
| **Basico** | Login simples, todos veem tudo | App pessoal do advogado |
| **Por perfil** | Roles diferentes (admin, advogado, estagiario) | Escritorio com equipe |
| **Por cliente** | Cliente tem login proprio e ve so seus dados | Portal do cliente |
| **Multi-tenant** | Escritorios diferentes no mesmo sistema | SaaS juridico |

**Importante sobre seguranca juridica:**

O login sozinho NAO protege os dados adequadamente. Voce tambem precisa de **RLS (Row Level Security)** no Supabase para garantir que cada usuario so acesse seus proprios dados. Veremos isso em detalhes na Secao 4 (Supabase).

**Fluxo tipico de autenticacao:**

1. Usuario acessa o app → ve tela de login
2. Insere email e senha → sistema valida
3. Se valido → redireciona para dashboard
4. Se invalido → mostra mensagem de erro
5. Pode clicar em "Esqueci a senha" → recebe email de recuperacao
6. Pode clicar em "Criar conta" → formulario de registro`,
        prompt: `Crie um sistema completo de autenticacao para um app juridico:

PAGINA DE LOGIN:
- Card centralizado na tela com fundo suave
- Logo do escritorio no topo (placeholder)
- Campo de email com validacao de formato
- Campo de senha com toggle de visibilidade (olho)
- Checkbox "Lembrar de mim"
- Botao "Entrar" com loading state
- Link "Esqueci minha senha"
- Divisor "ou" com opcao de login com Google
- Link "Nao tem conta? Cadastre-se"

PAGINA DE CADASTRO:
- Nome completo (obrigatorio)
- Email (obrigatorio, validacao de formato)
- Senha (obrigatorio, minimo 8 caracteres, deve ter letra maiuscula, numero e caractere especial)
- Confirmar senha (deve ser igual a senha)
- Numero da OAB (opcional)
- Checkbox "Aceito os termos de uso" (obrigatorio)
- Botao "Criar Conta"
- Link "Ja tem conta? Entre"

PAGINA DE RECUPERACAO DE SENHA:
- Campo de email
- Botao "Enviar link de recuperacao"
- Mensagem de confirmacao: "Se este email estiver cadastrado, voce recebera um link"

PROTECAO DE ROTAS:
- Paginas protegidas redirecionam para login se nao autenticado
- Apos login, redireciona para a pagina que o usuario tentou acessar
- Botao de logout no header que limpa a sessao

INTEGRAR COM SUPABASE AUTH:
- Usar Supabase para gerenciar usuarios
- Tabela "profiles" com dados adicionais (nome, OAB, telefone)
- Trigger que cria perfil automaticamente ao criar conta

DESIGN:
- Pagina de login com gradiente suave no fundo
- Formularios com bordas arredondadas e sombras suaves
- Mensagens de erro em vermelho abaixo dos campos
- Loading spinner no botao durante autenticacao
- Animacao suave de transicao entre login e cadastro`,
        tips: [
          'Sempre integre com Supabase Auth — nao tente implementar login do zero',
          'Peca protecao de rotas para que paginas internas exijam login',
          'Inclua recuperacao de senha — usuarios esquecem senhas',
          'O toggle de visibilidade da senha melhora muito a experiencia',
          'Depois do login, configure RLS no Supabase para seguranca real',
        ],
        flowSteps: [
          { label: 'Login', description: 'Usuario insere email e senha na tela de autenticacao' },
          { label: 'Validacao', description: 'Supabase Auth verifica credenciais e retorna sessao' },
          { label: 'Redirecionamento', description: 'Usuario e enviado ao dashboard com sessao ativa' },
          { label: 'Protecao', description: 'RLS no Supabase garante que usuario so ve seus dados' },
        ],
      },
      {
        title: 'Iteracao e Refinamento',
        subtitle: 'Como melhorar seu app sem recomecar do zero',
        level: 'intermediario',
        icon: 'pen-tool',
        content: `Nenhum app fica perfeito na primeira tentativa. A arte esta em saber refinar progressivamente sem desperdicar creditos recomeçando do zero.

**Principio fundamental:** Construa em camadas. Primeiro a estrutura, depois as funcionalidades, depois o visual, depois os detalhes.

**Tecnica de Refinamento Progressivo:**

1. **Prompt inicial:** descreva a estrutura geral e as funcionalidades principais
2. **Primeiro refinamento:** ajuste layout e componentes especificos
3. **Segundo refinamento:** adicione validacoes, tratamento de erros, estados vazios
4. **Terceiro refinamento:** polimento visual (animacoes, transicoes, icones)
5. **Visual Edits:** ajustes finais de texto, cor e espacamento (gratis)

**Como referenciar partes especificas do app:**

No chat do Lovable, use **@** seguido do nome do arquivo para referenciar partes especificas:

- \`@src/pages/Dashboard.tsx\` — para alterar a pagina de dashboard
- \`@src/components/ClientForm.tsx\` — para ajustar o formulario de clientes
- \`@src/lib/utils.ts\` — para modificar funcoes auxiliares

**Quando algo da errado:**

Se um prompt quebrou algo no app, voce tem opcoes:
1. **Version History:** volte para a versao anterior (mais seguro)
2. **Chat Mode:** pergunte o que deu errado sem alterar nada
3. **Prompt corretivo:** descreva exatamente o que esta errado e como deveria ser

**Erros comuns ao refinar:**

- Pedir mudancas muito grandes de uma vez (melhor: mude uma coisa por vez)
- Nao descrever o estado ATUAL antes de pedir a mudanca
- Esquecer de mencionar o que deve ser MANTIDO (a IA pode alterar coisas que voce gostava)
- Nao usar Version History antes de mudancas arriscadas`,
        tips: [
          'Sempre salve uma versao antes de mudancas grandes (Version History)',
          'Use @ para referenciar arquivos especificos e economizar creditos',
          'Diga "mantenha o layout atual e apenas mude X" para evitar alteracoes indesejadas',
          'Se algo quebrou, volte a versao anterior ao inves de tentar consertar',
          'Mudancas pequenas e incrementais sao mais seguras que mudancas grandes',
        ],
        flowSteps: [
          { label: 'Estrutura', description: 'Prompt inicial com layout, paginas e funcionalidades principais' },
          { label: 'Funcionalidades', description: 'Adicione formularios, tabelas, filtros e interacoes' },
          { label: 'Validacoes', description: 'Tratamento de erros, estados vazios, loading states' },
          { label: 'Visual', description: 'Polimento com animacoes, transicoes e icones' },
          { label: 'Ajustes Finais', description: 'Visual Edits (gratis) para textos, cores e espacamento' },
        ],
      },
      {
        title: 'Plan Mode: Planeje Antes de Construir',
        subtitle: 'Valide a arquitetura antes de gastar creditos',
        level: 'intermediario',
        icon: 'brain',
        content: `O **Plan Mode** e um dos recursos mais subutilizados do Lovable. Ele permite que voce descreva o que quer e a IA crie um plano detalhado de implementacao ANTES de escrever uma unica linha de codigo. Isso e ouro para features complexas.

**Quando usar Plan Mode:**

- Antes de criar um app do zero (para validar a arquitetura)
- Antes de adicionar uma feature complexa (para entender o impacto)
- Quando nao tem certeza de como estruturar algo
- Para estimar quantos creditos uma feature vai consumir

**O que o Plan Mode retorna:**

- Lista de arquivos que serao criados ou modificados
- Descricao de cada mudanca proposta
- Ordem de implementacao sugerida
- Potenciais desafios ou limitacoes
- Estimativa de complexidade

**Como usar na pratica:**

1. No chat do Lovable, selecione **Plan Mode** no seletor de modo
2. Descreva a feature que voce quer implementar
3. A IA retorna o plano detalhado
4. Revise o plano — esta alinhado com o que voce quer?
5. Se sim, mude para **Agent Mode** e diga "implemente o plano"
6. Se nao, ajuste o plano ainda no Plan Mode (gasta menos creditos)

**Analogia juridica:** Plan Mode e como fazer uma consulta juridica antes de entrar com a acao. Voce avalia a viabilidade, os riscos e os custos antes de comprometer recursos.

**Exemplo pratico:**

No Plan Mode, escreva: "Planeje como seria um sistema de controle de honorarios com: cadastro de honorarios por processo, parcelas mensais, alerta de inadimplencia por email, relatorio mensal de receita e dashboard financeiro."

A IA vai detalhar cada componente, cada tabela no banco, cada pagina necessaria. Voce revisa, ajusta e so entao implementa.`,
        tips: [
          'Use Plan Mode SEMPRE antes de features que envolvam banco de dados',
          'O plano pode ser refinado varias vezes antes de implementar',
          'Peca "estime a complexidade" para saber quantos creditos vai gastar',
          'Salve o plano copiando o texto — serve como documentacao',
          'Mude para Agent Mode e diga "implemente o plano acima" para executar',
        ],
      },
      {
        title: 'Chat Mode: Debugue sem Gastar',
        subtitle: 'Resolva problemas conversando com a IA',
        level: 'intermediario',
        icon: 'message-circle',
        content: `O **Chat Mode** e o modo mais economico do Lovable. Ele permite que voce converse com a IA sobre o seu projeto sem que ela altere nenhum codigo. Ideal para debugging, aprendizado e planejamento.

**Quando usar Chat Mode:**

- Quando algo nao funciona e voce nao sabe por que
- Para entender como um trecho de codigo funciona
- Para pedir sugestoes de como implementar algo
- Para aprender conceitos antes de implementar
- Para analisar erros no console do navegador

**O que voce pode fazer no Chat Mode:**

- **Perguntar sobre erros:** "O formulario mostra erro ao enviar. Olhe @src/components/ClientForm.tsx e me diga o que pode estar errado."
- **Pedir explicacoes:** "Explique como o RLS esta configurado no meu projeto."
- **Solicitar sugestoes:** "Qual a melhor forma de implementar notificacoes por email neste app?"
- **Analisar logs:** "Este e o erro do console: [cole o erro]. O que esta causando?"
- **Validar ideias:** "Se eu adicionar multi-tenancy, quais arquivos precisaria modificar?"

**Chat Mode vs Plan Mode:**

| Aspecto | Chat Mode | Plan Mode |
|---------|-----------|-----------|
| Altera codigo? | Nao | Nao |
| Produz plano estruturado? | Nao (conversa livre) | Sim (plano formal) |
| Ideal para | Debugging, duvidas | Planejamento de features |
| Estilo | Conversa informal | Documento tecnico |

**Fluxo de debugging com Chat Mode:**

1. Algo deu errado no seu app
2. Mude para Chat Mode
3. Descreva o problema: "Ao clicar em Salvar, nada acontece"
4. A IA analisa o codigo e sugere a causa
5. Mude para Agent Mode e peca a correcao especifica
6. Teste no preview

**Dica:** Antes de gastar creditos tentando consertar algo no Agent Mode, gaste 1 mensagem no Chat Mode para entender o problema. Isso frequentemente economiza 3-5 creditos de tentativa e erro.`,
        tips: [
          'Sempre use Chat Mode primeiro quando algo da errado',
          'Copie erros do console e cole no chat para analise',
          'Use @ para apontar arquivos especificos ao pedir ajuda',
          'Chat Mode consome menos creditos que Agent Mode',
          'Anote as explicacoes da IA — elas te ensinam a evitar o mesmo erro',
        ],
      },
      {
        title: 'Biblioteca de Prompts Juridicos',
        subtitle: '8 prompts prontos para copiar e usar',
        level: 'intermediario',
        icon: 'book-marked',
        content: `Aqui estao 8 prompts testados e otimizados para apps juridicos. Cada um gera um app funcional que voce pode personalizar depois.

**Como usar:**

1. Copie o prompt desejado
2. Cole no chat do Lovable (Agent Mode)
3. Aguarde a geracao
4. Personalize com Visual Edits e prompts adicionais

**Prompt 1 — Controle de Prazos com Notificacoes:**
"Crie um app de controle de prazos processuais. Tabela com: processo, tipo de prazo, data limite, dias restantes, status (em dia, urgente, vencido). Filtro por status e busca por numero do processo. Card no topo com contagem de prazos urgentes (menos de 5 dias). Cores: verde para em dia, amarelo para urgente, vermelho para vencido. Badge animado para prazos que vencem hoje. Design profissional em azul-marinho e branco."

**Prompt 2 — Ficha de Atendimento Inicial:**
"Crie um formulario de atendimento inicial para novos clientes. Campos: nome, CPF, telefone, email, como conheceu o escritorio (dropdown), area do direito (multi-select), descricao do caso (textarea), urgencia (toggle), documentos (upload multiplo). Ao enviar, gere um PDF resumo e mostre tela de confirmacao. Design limpo e acolhedor."

**Prompt 3 — Dashboard de Processos:**
"Crie um dashboard de gestao de processos com: 4 cards de metricas (total, ativos, arquivados, em recurso), grafico de pizza por area do direito, grafico de barras por status, lista dos 10 ultimos andamentos e tabela resumida dos processos com filtros. Gere 30 processos ficticios realistas. Cores profissionais."

**Prompt 4 — Calculadora Trabalhista:**
"Crie uma calculadora de verbas rescinsorias trabalhistas. Campos: salario base, data de admissao, data de demissao, tipo de rescisao (sem justa causa, pedido de demissao, justa causa, acordo), ferias vencidas (sim/nao), aviso previo (trabalhado/indenizado). Calcule: saldo de salario, 13o proporcional, ferias proporcionais + 1/3, aviso previo, multa FGTS 40%. Mostre detalhamento e total."

**Prompt 5 — Agenda de Audiencias:**
"Crie um app de agenda de audiencias com calendario visual (visao mensal e semanal). Cada audiencia tem: processo, cliente, vara, data/hora, tipo (instrucao, conciliacao, julgamento), endereco do foro, observacoes. Card com as 3 proximas audiencias. Filtro por tipo e periodo. Responsivo para mobile."

**Prompt 6 — Controle Financeiro:**
"Crie um sistema de controle de honorarios. Cadastro de contratos de honorarios vinculados a processos. Parcelas mensais com status (pago, pendente, atrasado). Dashboard com: receita do mes, inadimplencia, grafico de evolucao mensal. Alertas para parcelas atrasadas. Botao para gerar recibo."

**Prompt 7 — Repositorio de Modelos:**
"Crie um repositorio de modelos de documentos juridicos. Categorias: peticoes, contratos, procuracoes, recursos, pareceres. Cada modelo tem: titulo, categoria, descricao, data de criacao, autor. Busca por texto e filtro por categoria. Botao para duplicar modelo. Preview do conteudo em modal."

**Prompt 8 — Portal do Cliente (simplificado):**
"Crie um portal onde clientes acompanham seus processos. Login com email e senha. Apos login, o cliente ve: lista de seus processos com status, ultimos andamentos de cada processo, documentos compartilhados pelo advogado, proximas datas importantes. Design acolhedor e simples. Instrucoes claras para clientes leigos em tecnologia."`,
        tips: [
          'Copie o prompt completo — cada palavra foi pensada para gerar bons resultados',
          'Apos gerar, use Visual Edits para personalizar cores e textos',
          'Combine prompts: gere o Dashboard, depois adicione funcionalidades de outros prompts',
          'Estes prompts funcionam no plano Free — cada um gera um app funcional',
          'Salve os prompts que funcionaram bem para reutilizar em projetos futuros',
        ],
      },
      {
        title: 'Erros Comuns em Prompts',
        subtitle: '10 armadilhas que desperdicam seus creditos',
        level: 'intermediario',
        icon: 'alert-triangle',
        content: `Depois de analisar centenas de interacoes de advogados com o Lovable, identifiquei os 10 erros mais comuns. Evitar esses erros pode economizar dezenas de creditos.

**1. Prompt vago demais**
Errado: "Crie um app para meu escritorio"
Certo: "Crie um sistema de controle de prazos processuais com tabela, filtros e alerta de urgencia"

**2. Pedir tudo de uma vez**
Errado: "Crie um sistema completo com login, dashboard, processos, clientes, financeiro, documentos, agenda, relatorios, portal do cliente e app mobile"
Certo: Comece com 1-2 features e va adicionando incrementalmente

**3. Nao mencionar o design**
Errado: "Crie um formulario de cadastro" (a IA vai usar um design generico)
Certo: "Crie um formulario de cadastro com design profissional, cores azul-marinho, shadcn/ui, 2 colunas no desktop"

**4. Ignorar o mobile**
Errado: Nao mencionar responsividade
Certo: "Responsivo: sidebar vira drawer no mobile, tabela com scroll horizontal, formulario em 1 coluna"

**5. Nao descrever validacoes**
Errado: "Formulario com campo de CPF"
Certo: "Campo de CPF com mascara XXX.XXX.XXX-XX, validacao de digito verificador, mensagem de erro 'CPF invalido'"

**6. Esquecer estados vazios**
Errado: Nao mencionar o que aparece quando nao ha dados
Certo: "Quando nao houver processos cadastrados, mostrar ilustracao com texto 'Nenhum processo encontrado' e botao 'Cadastrar primeiro processo'"

**7. Nao pedir dados de exemplo**
Errado: Tabelas vazias dificultam avaliar o resultado
Certo: "Gere 20 registros ficticios com dados realistas brasileiros"

**8. Mudar de ideia no meio**
Errado: "Na verdade, esquece tudo, faz diferente" (desperdiça todo o trabalho anterior)
Certo: Use Version History para voltar e recomecar de um ponto especifico

**9. Nao usar @ para referenciar arquivos**
Errado: "Mude aquele formulario" (qual formulario?)
Certo: "Em @src/components/ClientForm.tsx, adicione o campo de telefone secundario"

**10. Nao testar no mobile**
Errado: Testar so no desktop
Certo: Clique no botao de preview mobile e teste TODAS as telas`,
        tips: [
          'Releia seu prompt antes de enviar — como se fosse revisar uma peticao',
          'Seja especifico com numeros: "3 paginas", "5 campos", "tabela com 8 colunas"',
          'Sempre mencione "responsivo para desktop e mobile"',
          'Peca dados de exemplo em TODA tabela',
          'Use @ para referenciar arquivos quando pedir mudancas pontuais',
        ],
      },
      {
        title: 'Tecnicas Expert de Prompting',
        subtitle: 'Multi-step prompting, Knowledge Base e prompt chaining',
        level: 'avancado',
        icon: 'graduation-cap',
        content: `Para quem ja domina os fundamentos, estas tecnicas avancadas extraem o maximo do Lovable e geram resultados de nivel profissional.

**1. Multi-Step Prompting (Construcao em Camadas):**

Ao inves de descrever tudo em um unico prompt, divida em etapas logicas:

- Passo 1: "Crie a estrutura de paginas e navegacao do app" (layout base)
- Passo 2: "Na pagina de Clientes, adicione o formulario de cadastro com estes campos: ..."
- Passo 3: "Na pagina de Processos, crie a tabela com filtros e busca"
- Passo 4: "Conecte Supabase e crie as tabelas para clientes e processos"
- Passo 5: "Configure autenticacao e RLS"

Cada passo usa os anteriores como base. Mais controlado, mais previsivel.

**2. Referencia com @ (File Targeting):**

O operador **@** no chat permite apontar para arquivos especificos do projeto. Isso faz a IA focar exatamente onde voce quer:

- \`@src/pages/Dashboard.tsx\` — "Adicione um grafico de processos por mes neste arquivo"
- \`@src/components/Sidebar.tsx\` — "Adicione o item Relatorios no menu"
- \`@src/integrations/supabase/types.ts\` — "Atualize os tipos para incluir a tabela honorarios"

**3. Knowledge Base (Documentos de Referencia):**

A Knowledge Base permite que voce adicione documentos que a IA deve considerar em TODAS as interacoes. Exemplos uteis:

- Manual de identidade visual do escritorio (cores, fontes, logo)
- Glossario de termos juridicos que o app deve usar
- Regras de negocio especificas (prazos, formulas de calculo)
- Requisitos de compliance (LGPD, OAB, etc.)

Para adicionar: va em Settings do projeto → Knowledge Base → adicione texto ou arquivo.

**4. Prompt Chaining (Cadeia de Prompts):**

Conecte prompts anteriores referenciando-os:

- "Lembre-se do plano que fizemos no Plan Mode. Implemente a fase 1 (autenticacao)."
- "Usando a mesma estrutura de dados do formulario de clientes, crie o formulario de processos."
- "Aplique o mesmo padrao visual da pagina de Dashboard na pagina de Relatorios."

**5. Especificacao por Arquivo:**

Para mudancas precisas, especifique arquivo, componente e localizacao:

"Em @src/pages/Clients.tsx, no componente ClientTable, adicione uma coluna 'Ultima Interacao' que mostra a data do ultimo andamento do processo mais recente do cliente. Mantenha todas as outras colunas inalteradas."

**6. Constraining (Limitacao Explicita):**

Diga o que a IA NAO deve fazer:

"Adicione o campo de telefone no formulario. NAO altere o layout das outras secoes. NAO mude as cores. NAO remova campos existentes."`,
        tips: [
          'Multi-step prompting e mais eficiente para apps complexos',
          'Knowledge Base economiza creditos porque evita repetir contexto',
          'Use @ para TODAS as mudancas pontuais — aumenta a precisao drasticamente',
          'Constraining ("NAO altere X") e essencial para preservar o que funciona',
          'Prompt chaining aproveita o contexto da conversa — mantenha tudo no mesmo projeto',
        ],
      },
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // SECAO 3: DESIGN E INTERFACE
  // ═══════════════════════════════════════════════════════════
  {
    id: 'design',
    title: 'Design e Interface',
    description: 'Apps bonitos e profissionais sem saber design',
    icon: 'palette',
    cards: [
      {
        title: 'shadcn/ui: Seu Kit de Componentes',
        subtitle: 'A biblioteca que torna tudo profissional',
        level: 'iniciante',
        icon: 'package',
        content: `O **shadcn/ui** e a biblioteca de componentes visuais que o Lovable usa para construir interfaces. Saber o que e e como referenciar nos prompts melhora drasticamente a qualidade dos seus apps.

**O que e shadcn/ui?**

E uma colecao de componentes visuais pre-construidos e profissionais: botoes, formularios, tabelas, modais, menus, tooltips, e dezenas de outros. Cada componente ja vem com design bonito, acessibilidade, animacoes e responsividade.

**Por que isso importa para voce?**

Quando voce menciona "use shadcn/ui" no prompt, a IA usa esses componentes prontos ao inves de criar do zero. O resultado e MUITO mais bonito e consistente.

**Componentes mais uteis para apps juridicos:**

| Componente | O que faz | Uso juridico |
|-----------|-----------|--------------|
| **Table** | Tabelas de dados | Lista de processos, clientes |
| **Form** | Formularios com validacao | Cadastro de clientes, processos |
| **Dialog** | Janela modal | Confirmacao de exclusao, detalhes |
| **Card** | Caixa de conteudo | Metricas do dashboard |
| **Badge** | Etiqueta colorida | Status do processo (ativo, arquivado) |
| **Toast** | Notificacao temporaria | "Cliente salvo com sucesso" |
| **Tabs** | Abas de navegacao | Dados pessoais / Processos / Documentos |
| **Calendar** | Calendario visual | Agenda de audiencias |
| **Command** | Busca com autocomplete | Busca global de processos |
| **Alert** | Aviso destacado | Prazo vencendo, erro de validacao |
| **Select** | Dropdown de opcoes | Selecao de vara, status, area |
| **Sidebar** | Menu lateral | Navegacao principal do app |

**Como referenciar no prompt:**

Ao inves de "crie um botao bonito", diga "use o componente Button do shadcn/ui com variante outline". Ao inves de "crie uma tabela", diga "use o componente Table do shadcn/ui com ordenacao e paginacao".

**Dica profissional:** O Lovable ja usa shadcn/ui por padrao, mas mencionar componentes especificos no prompt garante que a IA use os componentes certos ao inves de improvisar.`,
        tips: [
          'Mencione "use shadcn/ui" nos seus prompts para garantir componentes profissionais',
          'Referencie componentes especificos: "use Table do shadcn/ui com sorting"',
          'shadcn/ui ja inclui dark mode, acessibilidade e responsividade',
          'Consulte a documentacao em ui.shadcn.com para ver todos os componentes',
          'Componentes shadcn/ui sao customizaveis — voce pode ajustar cores e tamanhos',
        ],
        links: [
          { label: 'Documentacao shadcn/ui', url: 'https://ui.shadcn.com' },
        ],
      },
      {
        title: 'Tailwind CSS para Leigos',
        subtitle: 'Conceitos basicos que melhoram seus prompts',
        level: 'iniciante',
        icon: 'palette',
        content: `**Tailwind CSS** e o sistema de estilizacao que o Lovable usa. Voce NAO precisa aprender Tailwind para usar o Lovable, mas entender os conceitos basicos vai melhorar muito a qualidade dos seus prompts.

**O que e Tailwind CSS?**

Em vez de escrever codigo de estilo separado, o Tailwind usa classes utilitarias diretamente nos elementos. Por exemplo, \`bg-blue-500\` aplica fundo azul, \`text-white\` aplica texto branco, \`p-4\` aplica padding.

**Conceitos que ajudam nos prompts:**

| Conceito | O que e | Como usar no prompt |
|----------|---------|---------------------|
| **Spacing** | Espacamento entre elementos | "Mais espaco entre os cards" |
| **Colors** | Cores pre-definidas | "Fundo em slate-100, texto em slate-900" |
| **Border radius** | Cantos arredondados | "Cantos bem arredondados (rounded-xl)" |
| **Shadow** | Sombras | "Sombra suave nos cards (shadow-md)" |
| **Responsive** | Breakpoints | "No mobile, 1 coluna. No desktop, 3 colunas" |
| **Hover** | Efeito ao passar o mouse | "Botao fica mais escuro ao passar o mouse" |

**Cores Tailwind mais uteis para apps juridicos:**

- \`slate\` — cinzas frios (perfeito para backgrounds e textos)
- \`blue\` — azuis (ideal para botoes e links)
- \`red\` — vermelhos (alertas e urgencias)
- \`green\` — verdes (sucesso e confirmacao)
- \`amber\` — amarelos (avisos e atencao)
- \`purple\` — roxos (destaques premium)

**Voce nao precisa memorizar classes:**

Ao escrever prompts, descreva em linguagem natural: "fundo cinza claro, texto escuro, botoes azuis com cantos arredondados, sombra suave nos cards". O Lovable traduz automaticamente para as classes Tailwind corretas.

**Quando saber Tailwind ajuda:**

Se voce quiser fazer ajustes finos no Code View, saber que \`p-4\` e padding e \`mt-8\` e margem superior permite pequenas correcoes sem gastar creditos.`,
        tips: [
          'Descreva visuais em linguagem natural — o Lovable entende',
          'Use nomes de cores Tailwind para resultados mais consistentes (slate-100, blue-600)',
          'Peca "rounded-xl" para cantos bem arredondados e modernos',
          'Para espacamento: "mais espaco" ou "menos espaco" funciona bem',
          'Nao tente escrever classes Tailwind no prompt — descreva o resultado desejado',
        ],
      },
      {
        title: 'Temas e Cores para Escritorios',
        subtitle: 'Paletas profissionais prontas para usar',
        level: 'iniciante',
        icon: 'eye',
        content: `As cores do seu app comunicam profissionalismo e confianca. Aqui estao paletas testadas e prontas para usar em apps juridicos.

**Paleta 1 — Classica Advocacia (mais popular):**

| Elemento | Cor | Codigo | Uso |
|----------|-----|--------|-----|
| Primaria | Azul-marinho | #1E293B | Sidebar, headers, botoes principais |
| Secundaria | Dourado | #C5A23E | Destaques, icones, badges premium |
| Fundo | Cinza muito claro | #F8FAFC | Background das paginas |
| Texto | Cinza escuro | #1E293B | Texto principal |
| Sucesso | Verde | #22C55E | Status ativo, confirmacoes |
| Alerta | Vermelho | #EF4444 | Prazos vencidos, erros |

**Paleta 2 — Moderna e Clean:**

| Elemento | Cor | Codigo | Uso |
|----------|-----|--------|-----|
| Primaria | Azul royal | #2563EB | Botoes, links, destaques |
| Secundaria | Slate | #64748B | Textos secundarios, bordas |
| Fundo | Branco | #FFFFFF | Background limpo |
| Superficie | Cinza claro | #F1F5F9 | Cards, tabelas |
| Acento | Verde esmeralda | #10B981 | Indicadores positivos |
| Perigo | Rose | #F43F5E | Alertas e urgencias |

**Paleta 3 — Corporativa Premium:**

| Elemento | Cor | Codigo | Uso |
|----------|-----|--------|-----|
| Primaria | Preto | #0F172A | Headers, sidebar |
| Secundaria | Cinza medio | #475569 | Texto secundario |
| Acento | Violeta | #7C3AED | Destaques, badges |
| Fundo | Snow | #F8FAFC | Background |
| Sucesso | Teal | #14B8A6 | Confirmacoes |
| Alerta | Amber | #F59E0B | Avisos |

**Como usar no prompt:**

Cole diretamente: "Use a seguinte paleta: primaria #1E293B, secundaria #C5A23E, fundo #F8FAFC, texto #1E293B, sucesso #22C55E, alerta #EF4444"

**Regras de ouro para cores em apps juridicos:**

1. Maximo 3 cores principais (mais que isso poluiu)
2. Fundo sempre claro — apps juridicos lidam com muito texto
3. Use cor de destaque com moderacao — so para badges e botoes principais
4. Vermelho so para alertas e erros — nunca para decoracao
5. Mantenha contraste alto entre texto e fundo para legibilidade`,
        tips: [
          'A Paleta 1 (Classica) funciona para 90% dos escritorios',
          'Copie os codigos hexadecimais e cole diretamente no prompt',
          'Menos cores = mais profissional. Nao exagere.',
          'Use Visual Edits para testar cores diferentes sem gastar creditos',
          'Consulte o manual de identidade visual do escritorio se existir',
        ],
      },
      {
        title: 'Responsividade: Desktop e Mobile',
        subtitle: 'Seu app funcionando em qualquer tela',
        level: 'intermediario',
        icon: 'smartphone',
        content: `Mais de 60% dos brasileiros acessam a internet pelo celular. Se o seu app nao funciona no mobile, voce perde mais da metade dos usuarios — incluindo clientes que querem consultar o portal no caminho do trabalho.

**O que e responsividade?**

E a capacidade do app de se adaptar automaticamente a diferentes tamanhos de tela: desktop (monitor grande), tablet (tela media) e mobile (celular).

**O que muda entre desktop e mobile:**

| Elemento | Desktop | Mobile |
|----------|---------|--------|
| Sidebar | Fixa na lateral, sempre visivel | Vira hamburger menu (drawer) |
| Tabela | Todas colunas visiveis | Colunas reduzidas + scroll |
| Formulario | 2-3 colunas | 1 coluna |
| Cards | Grid 3-4 colunas | Empilhados verticalmente |
| Botoes | Texto + icone | So icone ou texto menor |
| Modal | 600px largura | Tela cheia |

**Como pedir responsividade no prompt:**

Sempre adicione ao final dos seus prompts:

"RESPONSIVIDADE: O app deve ser totalmente responsivo. No mobile: sidebar vira drawer com hamburger menu, tabelas mostram colunas essenciais com scroll horizontal para as demais, formularios ficam em 1 coluna, cards empilham verticalmente, modais ocupam tela cheia, botoes ficam com largura total."

**Mobile Builder:**

O Lovable tem um recurso chamado **Mobile Builder** que otimiza a visualizacao mobile. No preview, clique nos icones de dispositivo (desktop, tablet, mobile) para ver como seu app fica em cada tamanho.

**Testando no mobile real:**

1. Faca deploy do app (botao Deploy)
2. Abra o link no celular
3. Teste TODAS as funcionalidades: navegacao, formularios, tabelas
4. Verifique se textos estao legiveis e botoes clicaveis
5. Teste em modo paisagem e retrato

**Erros comuns de responsividade em apps juridicos:**

- Tabela de processos com 10 colunas impossivel de ler no celular
- Sidebar empurrando o conteudo para fora da tela
- Botoes pequenos demais para clicar com o dedo
- Formularios com campos lado a lado no celular (fica apertado)
- Graficos que nao redimensionam`,
        tips: [
          'SEMPRE mencione responsividade nos seus prompts',
          'Teste no preview mobile ANTES de fazer deploy',
          'Peca "sidebar vira drawer no mobile" — e o padrao que funciona',
          'Tabelas longas: peca scroll horizontal ou versao card no mobile',
          'Faca deploy e teste no celular real — o preview nao mostra tudo',
        ],
      },
      {
        title: 'Dark Mode e Light Mode',
        subtitle: 'Tema escuro e claro com um clique',
        level: 'intermediario',
        icon: 'monitor',
        content: `**Dark mode** (tema escuro) e mais do que estetica — reduz cansaco visual em sessoes longas de trabalho. Para advogados que passam horas no computador revisando processos, faz diferenca real.

**Por que implementar dark mode:**

- Reduz cansaco visual em ambientes com pouca luz
- Economiza bateria em dispositivos OLED
- Alguns usuarios simplesmente preferem (e nao oferecer e perder usuarios)
- Demonstra sofisticacao tecnica do app

**Como funciona no Lovable:**

O Lovable usa Tailwind CSS que suporta dark mode nativamente. Ao pedir no prompt, a IA configura as classes de cor para ambos os temas e adiciona um botao de toggle.

**Estrutura de cores para dark mode em apps juridicos:**

| Elemento | Light Mode | Dark Mode |
|----------|-----------|-----------|
| Fundo | #FFFFFF | #0F172A |
| Superficie | #F1F5F9 | #1E293B |
| Texto principal | #1E293B | #F1F5F9 |
| Texto secundario | #64748B | #94A3B8 |
| Borda | #E2E8F0 | #334155 |
| Primaria | #2563EB | #3B82F6 |
| Sucesso | #22C55E | #4ADE80 |
| Alerta | #EF4444 | #F87171 |

**Dica importante:** No dark mode, cores de alerta e sucesso devem ser levemente mais claras para manter o contraste. A tabela acima ja considera isso.`,
        prompt: `Adicione suporte a Dark Mode no app com as seguintes especificacoes:

TOGGLE:
- Botao de alternancia no header (icone de sol/lua)
- Salvar preferencia do usuario no localStorage
- Respeitar preferencia do sistema operacional como padrao inicial
- Transicao suave de 300ms entre os temas

CORES LIGHT MODE:
- Fundo: #FFFFFF
- Superficie (cards): #F1F5F9
- Texto principal: #1E293B
- Texto secundario: #64748B
- Bordas: #E2E8F0
- Primaria: #2563EB

CORES DARK MODE:
- Fundo: #0F172A
- Superficie (cards): #1E293B
- Texto principal: #F1F5F9
- Texto secundario: #94A3B8
- Bordas: #334155
- Primaria: #3B82F6

REQUISITOS:
- Todos os componentes devem suportar ambos os temas
- Graficos e charts devem adaptar cores
- Imagens e logos devem ter versao clara e escura (ou usar versao que funcione em ambos)
- Tabelas devem manter legibilidade em ambos os temas
- Toast notifications devem adaptar cores
- Formularios (inputs, selects) devem adaptar bordas e fundo`,
        tips: [
          'Peca "respeitar preferencia do sistema" para detectar automaticamente',
          'Salve a preferencia no localStorage para persistir entre sessoes',
          'Teste TODOS os componentes em ambos os temas — graficos costumam quebrar',
          'Use Visual Edits para ajustar cores que ficaram ruins no dark mode',
          'Peca transicao suave para evitar flash branco ao trocar de tema',
        ],
      },
      {
        title: 'Tipografia e Icones',
        subtitle: 'Fontes profissionais e iconografia coerente',
        level: 'intermediario',
        icon: 'pen-tool',
        content: `A tipografia e os icones definem o tom do seu app. Uma fonte bem escolhida comunica profissionalismo; icones consistentes melhoram a navegacao.

**Fontes recomendadas para apps juridicos:**

| Fonte | Estilo | Ideal para | Como pedir |
|-------|--------|-----------|------------|
| **Inter** | Neutra e moderna | Apps corporativos, dashboards | "Use a fonte Inter" |
| **Plus Jakarta Sans** | Elegante e contemporanea | Portais de cliente, landing pages | "Use Plus Jakarta Sans" |
| **DM Sans** | Geometrica e limpa | Sistemas internos, ferramentas | "Use DM Sans" |
| **Merriweather** | Serifada classica | Titulos formais, documentos | "Use Merriweather nos titulos" |
| **Source Serif Pro** | Serifada moderna | Blogs juridicos, artigos | "Use Source Serif Pro" |

**Hierarquia tipografica (tamanhos recomendados):**

- **H1 (titulo principal):** 28-32px, peso 700 (bold)
- **H2 (titulo de secao):** 22-24px, peso 600 (semibold)
- **H3 (subtitulo):** 18-20px, peso 600
- **Corpo (texto normal):** 14-16px, peso 400 (regular)
- **Legenda (texto pequeno):** 12px, peso 400
- **Label (rotulo de campo):** 13-14px, peso 500 (medium)

**Icones Lucide — A biblioteca padrao do Lovable:**

O Lovable usa **Lucide React** como biblioteca de icones. Sao mais de 1000 icones profissionais e consistentes. Nos prompts, referencie pelo nome:

**Icones mais uteis para apps juridicos:**

- \`Briefcase\` — processos, casos
- \`Users\` — clientes, equipe
- \`Calendar\` — agenda, prazos
- \`FileText\` — documentos, peticoes
- \`Scale\` — justica, balanca
- \`DollarSign\` — financeiro, honorarios
- \`Clock\` — prazos, tempo
- \`Shield\` — seguranca, protecao
- \`Search\` — busca
- \`Bell\` — notificacoes
- \`Settings\` — configuracoes
- \`Download\` — download, exportar
- \`Upload\` — upload de documentos
- \`AlertTriangle\` — avisos, urgencias

**Como pedir icones no prompt:**

"Use icones Lucide em toda a navegacao: Briefcase para processos, Users para clientes, Calendar para agenda, DollarSign para financeiro."`,
        tips: [
          'Inter e a fonte mais segura para qualquer app juridico',
          'Para landing pages, combine serifada nos titulos + sans-serif no corpo',
          'Peca "icones Lucide" e mencione nomes especificos para consistencia',
          'Mantenha 2-3 tamanhos de fonte no maximo — nao exagere',
          'Use peso 600-700 para titulos e 400 para corpo — nunca use abaixo de 400',
        ],
        links: [
          { label: 'Catalogo de Icones Lucide', url: 'https://lucide.dev/icons' },
        ],
      },
      {
        title: 'Importando do Figma',
        subtitle: 'Do design no Figma para app no Lovable',
        level: 'avancado',
        icon: 'external-link',
        content: `Se voce (ou seu designer) ja tem um design pronto no **Figma**, e possivel importa-lo para o Lovable e transformar em app funcional. Isso e especialmente util para escritorios que investiram em identidade visual profissional.

**Metodo 1 — Plugin Builder.io (Recomendado):**

O Builder.io oferece um plugin para Figma que exporta designs como codigo React + Tailwind. O resultado pode ser colado diretamente no Lovable.

1. Instale o plugin **"Builder.io — Figma to Code"** no Figma
2. Selecione o frame/componente que deseja exportar
3. No plugin, escolha "React + Tailwind" como formato de saida
4. Copie o codigo gerado
5. No Lovable, cole no chat: "Use este codigo como base para a interface: [codigo]"

**Metodo 2 — Screenshot + Descricao:**

Se o design e complexo demais para exportar via plugin:

1. Tire screenshots de cada tela do Figma
2. No Lovable, descreva: "Crie uma interface que siga exatamente este design: [descricao detalhada]"
3. Inclua: cores hexadecimais, tamanhos de fonte, espacamentos, disposicao dos elementos
4. Refine iterativamente comparando com o Figma

**Metodo 3 — Lovable Design Input (Beta):**

O Lovable esta desenvolvendo um recurso de importacao direta de Figma. Quando disponivel, bastara colar o link do Figma e a IA reproduzira o design automaticamente.

**Limitacoes ao importar do Figma:**

- Animacoes e interacoes nao sao importadas (precisam ser descritas)
- Fontes customizadas podem nao estar disponiveis (use Google Fonts)
- Layouts muito complexos podem precisar de ajustes manuais
- Responsividade precisa ser descrita separadamente

**Dica para escritorios com designer:**

O fluxo ideal e: Designer cria no Figma → Advogado importa no Lovable → IA implementa → Visual Edits para ajustes finais. Isso combina o melhor dos dois mundos: design profissional com implementacao rapida.`,
        steps: [
          'Abra o design no Figma com todos os frames finalizados',
          'Instale o plugin Builder.io no Figma (Menu > Plugins > Buscar)',
          'Selecione o frame que deseja converter',
          'Execute o plugin e escolha "React + Tailwind CSS"',
          'Revise o codigo gerado e copie para a area de transferencia',
          'No Lovable, crie um novo projeto',
          'Cole o codigo no chat e peca: "Use este codigo como base e adicione as funcionalidades..."',
          'Compare o resultado com o design original no Figma',
          'Use Visual Edits para ajustes finos de espacamento e cor',
          'Adicione funcionalidades interativas via prompts no chat',
        ],
        tips: [
          'Exporte uma tela por vez — nao tente importar o projeto inteiro de uma vez',
          'Sempre revise o codigo gerado pelo Builder.io antes de colar no Lovable',
          'Fontes custom: instale via Google Fonts e mencione no prompt',
          'O metodo screenshot funciona bem para layouts simples',
          'Combine importacao do Figma com prompts para funcionalidades',
        ],
      },
      {
        title: 'AI Asset Generation',
        subtitle: 'Gere imagens e logos com IA no Lovable',
        level: 'intermediario',
        icon: 'sparkles',
        content: `O Lovable pode gerar imagens, ilustracoes e placeholders diretamente no app, economizando tempo e dinheiro com designers graficos.

**O que voce pode gerar:**

- **Placeholders de imagem:** fotos de perfil, banners, fundos
- **Ilustracoes:** imagens decorativas para paginas vazias, estados de erro
- **Icones customizados:** quando os icones Lucide nao atendem
- **Backgrounds:** padroes e gradientes para headers e sections
- **Mockups:** previews de documentos, dashboards, apps

**Como pedir no prompt:**

"Na pagina inicial, adicione uma ilustracao de um escritorio de advocacia moderno no hero section. Use estilo vetorial flat com cores azul-marinho e branco."

"No estado vazio da lista de processos, mostre uma ilustracao de uma pasta vazia com o texto 'Nenhum processo cadastrado ainda. Clique em Novo Processo para comecar.'"

**Para logos:**

O Lovable nao e ideal para logos definitivos, mas e perfeito para placeholders:

"No header, adicione um placeholder de logo com as iniciais 'MJ' (Machado Juridico) em um circulo azul-marinho com texto branco, fonte bold."

**Dica para apps juridicos:**

Ilustracoes nos estados vazios (quando nao ha dados) melhoram muito a experiencia do usuario. Ao inves de uma tela em branco, o usuario ve uma ilustracao amigavel com instrucoes claras.

**Alternativas para imagens profissionais:**

Se precisar de imagens de alta qualidade:
- **Unsplash** (unsplash.com) — fotos gratuitas de alta qualidade
- **Undraw** (undraw.co) — ilustracoes vetoriais customizaveis
- **Storyset** (storyset.com) — ilustracoes animadas

Baixe a imagem, faca upload no projeto e referencie no prompt: "Use a imagem que fiz upload como banner do hero section."`,
        tips: [
          'Use ilustracoes em TODOS os estados vazios — melhora muito a UX',
          'Para logos, crie um placeholder e substitua pelo logo real depois',
          'Mencione o estilo desejado: flat, gradiente, minimalista, corporativo',
          'Unsplash e Undraw sao otimas fontes gratuitas de imagens e ilustracoes',
          'Imagens pesadas lentificam o app — peca otimizacao ou use SVGs',
        ],
      },
      {
        title: 'Templates Juridicos de Design',
        subtitle: '5 padroes visuais prontos para seu app',
        level: 'intermediario',
        icon: 'file-text',
        content: `Aqui estao 5 templates de design testados e otimizados para apps juridicos. Cada um serve para um tipo diferente de aplicacao.

**Template 1 — Dashboard Executivo:**

Layout ideal para paineis de controle e KPIs. Sidebar escura com icones, area central com cards de metricas no topo, graficos no meio e tabela resumida embaixo. Cores: sidebar #1E293B, fundo #F8FAFC, cards brancos com sombra suave, acentos em azul #3B82F6.

Uso: Gestao de processos, painel financeiro, indicadores do escritorio.

**Template 2 — Portal do Cliente:**

Layout focado na simplicidade. Sem sidebar — navegacao por tabs no topo. Fundo branco limpo, tipografia grande e legivel, cards com bordas arredondadas, icones grandes e descritivos. Cores: primaria #2563EB, fundo branco, texto #334155.

Uso: Area do cliente, acompanhamento de processos, compartilhamento de documentos.

**Template 3 — Formulario Profissional:**

Layout de pagina unica com formulario centralizado. Card branco grande com secoes separadas por divisores. Labels claros, campos com bordas suaves, validacao visual em tempo real. Cores: neutras com acentos em verde para confirmacao.

Uso: Atendimento inicial, cadastro de clientes, registro de processos.

**Template 4 — Landing Page Institucional:**

Layout de rolagem longa com hero section, servicos, equipe, depoimentos e contato. Tipografia grande e impactante nos titulos, imagens profissionais, botoes de acao destacados. Cores: azul-marinho + branco + dourado.

Uso: Site do escritorio, captacao de clientes, presenca digital.

**Template 5 — App de Ferramentas:**

Layout minimalista focado em funcionalidade. Sem distracao visual. Card central com inputs e resultado. Cores neutras com destaque no resultado. Tipografia monospacada para numeros.

Uso: Calculadoras, conversores, checklist de audiencia, controle de prazos.

**Como usar estes templates:**

No seu prompt, mencione: "Siga o padrao do Template Dashboard Executivo: sidebar escura a esquerda com icones, cards de metricas no topo, graficos no centro, tabela resumida embaixo. Cores: sidebar #1E293B, fundo #F8FAFC, acentos #3B82F6."`,
        tips: [
          'Escolha o template ANTES de escrever o prompt — isso guia toda a descricao',
          'O Template 1 (Dashboard) cobre 60% das necessidades de escritorios',
          'Para apps de uso do cliente, sempre use o Template 2 (simplicidade)',
          'Combine templates: Dashboard para area interna + Portal para area do cliente',
          'Use Visual Edits para ajustar qualquer template a identidade do escritorio',
        ],
      },
      {
        title: 'Design System para Escritorio',
        subtitle: 'Consistencia visual entre todos os seus apps',
        level: 'avancado',
        icon: 'layers',
        content: `Quando voce cria mais de um app no Lovable (dashboard interno + portal do cliente + landing page), manter consistencia visual e fundamental. Um design system garante que todos os apps parecem da mesma "familia".

**O que e um Design System?**

E um conjunto de regras visuais e componentes reutilizaveis que garantem consistencia: mesmas cores, mesmas fontes, mesmos espacamentos, mesmos padroes de interacao.

**Elementos do seu Design System juridico:**

| Elemento | Definicao | Exemplo |
|----------|-----------|---------|
| **Paleta de cores** | 5-6 cores definidas | Primaria, secundaria, sucesso, alerta, fundo, texto |
| **Tipografia** | Fonte, tamanhos, pesos | Inter, H1=28px/700, corpo=14px/400 |
| **Espacamento** | Grid e paddings | 4px, 8px, 16px, 24px, 32px |
| **Bordas** | Arredondamento e cor | 8px radius, #E2E8F0 |
| **Sombras** | Niveis de elevacao | Nenhuma, sm, md, lg |
| **Componentes** | Botoes, cards, inputs | Estilos padronizados para cada um |

**Como implementar no Lovable:**

1. **Crie um documento** com todas as definicoes (cores, fontes, espacamentos)
2. **Adicione na Knowledge Base** do projeto para que a IA use como referencia
3. **Em cada prompt**, mencione: "Siga o design system do escritorio (ver Knowledge Base)"
4. **Para novos projetos**, copie a Knowledge Base do projeto anterior

**Conteudo da Knowledge Base para design system:**

Cole algo assim na Knowledge Base do projeto:

"DESIGN SYSTEM DO ESCRITORIO:
- Cores: primaria #1E293B, secundaria #C5A23E, fundo #F8FAFC, texto #1E293B, sucesso #22C55E, alerta #EF4444
- Fonte: Inter para todo texto. H1: 28px bold, H2: 22px semibold, corpo: 14px regular
- Bordas: 8px radius em cards, 6px em botoes, 4px em inputs
- Sombras: shadow-sm em cards, shadow-md em modais
- Botoes: primario em #1E293B texto branco, secundario outline em #1E293B
- Cards: fundo branco, borda #E2E8F0, padding 24px, radius 8px
- Responsivo: sidebar no desktop, drawer no mobile, tabelas com scroll horizontal"

**Beneficio a longo prazo:** Com um design system na Knowledge Base, cada novo app ou feature ja nasce com a identidade visual correta, sem precisar repetir as especificacoes em cada prompt.`,
        tips: [
          'Crie seu design system UMA vez e reutilize em todos os projetos',
          'A Knowledge Base e o melhor lugar para armazenar o design system',
          'Comece simples: cores + fonte + bordas ja fazem grande diferenca',
          'Revise o design system a cada 3-6 meses conforme o escritorio evolui',
          'Se tiver um designer, peca que ele documente o design system no formato acima',
        ],
      },
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // SECAO 4: SUPABASE — BANCO DE DADOS
  // ═══════════════════════════════════════════════════════════
  {
    id: 'supabase',
    title: 'Supabase — Banco de Dados',
    description: 'Armazene dados com seguranca juridica',
    icon: 'database',
    cards: [
      {
        title: 'O que e Supabase?',
        subtitle: 'Seu banco de dados na nuvem — seguro e poderoso',
        level: 'iniciante',
        icon: 'database',
        analogy: {
          title: 'Analogia Juridica',
          central: 'Cartorio Digital',
          description: 'O Supabase e como um **cartorio digital** para o seu app. Assim como um cartorio registra, armazena e autentica documentos com fe publica, o Supabase registra dados (tabelas), armazena documentos (storage), autentica pessoas (auth) e garante que cada um so acesse o que lhe e permitido (RLS). E o cartorio nao fecha nunca — funciona 24/7 na nuvem.',
        },
        content: `**Supabase** e uma plataforma de banco de dados na nuvem que o Lovable usa para armazenar dados dos seus apps. Sem ele, seu app e apenas visual — com ele, seu app salva clientes, processos, documentos e tudo mais.

**O que o Supabase oferece:**

| Recurso | O que faz | Uso juridico |
|---------|-----------|--------------|
| **Database** | Banco de dados PostgreSQL | Armazena clientes, processos, prazos |
| **Auth** | Sistema de autenticacao | Login de advogados e clientes |
| **Storage** | Armazenamento de arquivos | PDFs de peticoes, contratos, procuracoes |
| **RLS** | Seguranca por linha | Cada advogado so ve seus dados |
| **Realtime** | Atualizacoes ao vivo | Notificacao quando prazo atualiza |
| **Edge Functions** | Logica no servidor | Enviar email, gerar PDF, integracoes |

**PostgreSQL — O banco de dados mais confiavel do mundo:**

O Supabase usa PostgreSQL, o mesmo banco de dados usado por empresas como Apple, Instagram e Spotify. E confiavel, seguro e escalavel. Seus dados juridicos estao em boas maos.

**Supabase e gratuito para comecar:**

O plano gratuito do Supabase oferece:
- 500 MB de banco de dados
- 1 GB de storage
- 50.000 requests por mes
- 2 projetos
- Autenticacao ilimitada

Para um escritorio individual ou pequeno, o plano gratuito e mais do que suficiente. So precisa de upgrade quando tiver centenas de usuarios ou gigabytes de documentos.

**Supabase vs Firebase:**

Se voce ja ouviu falar do Firebase (Google), o Supabase e a alternativa open source. A vantagem para advogados: PostgreSQL e um banco relacional (ideal para dados estruturados como processos e clientes), enquanto Firebase usa banco nao-relacional (menos intuitivo para dados juridicos).`,
        tips: [
          'O plano gratuito do Supabase e suficiente para aprender e prototipar',
          'PostgreSQL e o banco mais usado no mundo para dados estruturados',
          'Supabase funciona mesmo sem o Lovable — e uma plataforma independente',
          'Os dados ficam na nuvem — voce acessa de qualquer dispositivo',
          'Para dados sensiveis (juridicos), configure RLS desde o inicio',
        ],
        links: [
          { label: 'Criar Conta Supabase', url: 'https://supabase.com' },
          { label: 'Documentacao Supabase', url: 'https://supabase.com/docs' },
        ],
      },
      {
        title: 'Conectando Supabase ao Lovable',
        subtitle: 'Integre banco de dados em poucos cliques',
        level: 'iniciante',
        icon: 'link',
        content: `Conectar o Supabase ao Lovable e simples e permite que seu app salve, leia e atualize dados. Sem essa conexao, tudo que o usuario digita desaparece ao fechar a pagina.

**Antes de comecar:**

Voce precisa de uma conta no Supabase (gratuita). Se ainda nao tem, crie em supabase.com.

**Existem dois caminhos para conectar:**

**Caminho 1 — Pelo Lovable (Mais Facil):**

O Lovable pode criar e conectar um projeto Supabase automaticamente. No editor, clique no icone do Supabase na barra superior e siga as instrucoes. O Lovable cria o projeto, configura as credenciais e estabelece a conexao.

**Caminho 2 — Manual (Mais Controle):**

Se voce ja tem um projeto Supabase ou quer mais controle:

1. No Supabase Dashboard, va em Settings > API
2. Copie a **Project URL** e a **Anon Key**
3. No Lovable, va em Settings do projeto
4. Cole as credenciais nos campos correspondentes

**O que muda apos conectar:**

- A IA passa a criar tabelas diretamente no Supabase ao receber prompts sobre dados
- Formularios passam a salvar dados no banco (nao mais apenas visual)
- Voce pode pedir autenticacao, RLS e queries
- O app se torna "real" — dados persistem entre sessoes

**Verificando a conexao:**

Apos conectar, envie um prompt teste: "Crie uma tabela 'teste' com coluna 'nome' e insira um registro de exemplo." Se o Lovable criar a tabela no Supabase e o app mostrar o dado, a conexao esta funcionando.

**Importante:** A chave "Anon Key" e publica e segura para usar no frontend. A "Service Role Key" NUNCA deve ser exposta no frontend — ela da acesso total ao banco. O Lovable usa apenas a Anon Key.`,
        steps: [
          'Crie uma conta gratuita em **supabase.com** (se ainda nao tiver)',
          'No Supabase, clique em **"New Project"** e crie um projeto',
          'Escolha uma senha forte para o banco de dados e anote-a',
          'Aguarde o projeto ser provisionado (1-2 minutos)',
          'No Lovable, abra seu projeto e clique no **icone Supabase** na barra superior',
          'Escolha **"Connect Supabase"** ou **"Create New Supabase Project"**',
          'Se conectar manualmente: copie **Project URL** e **Anon Key** do Supabase',
          'Cole as credenciais no Lovable e clique em **Conectar**',
          'Teste enviando: "Crie uma tabela teste com campo nome e insira um registro"',
          'Verifique no Supabase Dashboard se a tabela foi criada',
        ],
        tips: [
          'Use o caminho pelo Lovable se e seu primeiro projeto — e mais simples',
          'A Anon Key e segura para o frontend — NAO use a Service Role Key',
          'Depois de conectar, todas as tabelas sao criadas via prompts no Lovable',
          'Um projeto Supabase pode servir varios apps Lovable',
          'Anote a senha do banco — voce vai precisar para administracao',
        ],
      },
      {
        title: 'Criando Tabelas para Apps Juridicos',
        subtitle: 'Modelagem de dados: clientes, processos, documentos',
        level: 'iniciante',
        icon: 'file-text',
        content: `A **modelagem de dados** e como voce organiza as informacoes no banco de dados. Para apps juridicos, existem padroes bem definidos que funcionam para a maioria dos escritorios.

**As 5 tabelas fundamentais de um app juridico:**

**1. Tabela \`clientes\`:**
- id (automatico)
- nome_completo
- cpf_cnpj
- email
- telefone
- endereco
- data_cadastro
- advogado_responsavel_id (referencia a tabela usuarios)

**2. Tabela \`processos\`:**
- id (automatico)
- numero_processo
- cliente_id (referencia a tabela clientes)
- area_direito (trabalhista, civil, familia, etc.)
- vara_tribunal
- status (ativo, suspenso, arquivado, em_recurso)
- valor_causa
- data_distribuicao
- observacoes

**3. Tabela \`prazos\`:**
- id (automatico)
- processo_id (referencia a tabela processos)
- tipo_prazo (contestacao, recurso, etc.)
- data_intimacao
- data_limite
- status (pendente, cumprido, vencido)
- responsavel_id

**4. Tabela \`documentos\`:**
- id (automatico)
- processo_id (referencia a tabela processos)
- titulo
- tipo (peticao, contrato, procuracao, etc.)
- arquivo_url (link no Storage)
- data_upload
- versao

**5. Tabela \`honorarios\`:**
- id (automatico)
- processo_id (referencia a tabela processos)
- valor_total
- numero_parcelas
- valor_parcela
- data_vencimento
- status_pagamento (pago, pendente, atrasado)

**Relacionamentos entre tabelas:**

Um cliente tem muitos processos. Um processo tem muitos prazos, documentos e honorarios. Essas relacoes sao criadas automaticamente quando voce menciona no prompt.

**Voce nao precisa criar as tabelas manualmente:**

Basta descrever no prompt e a IA cria tudo no Supabase. O prompt abaixo cria toda a estrutura de uma vez.`,
        prompt: `Conecte o Supabase e crie a seguinte estrutura de banco de dados para um escritorio de advocacia:

TABELA "profiles" (extende auth.users):
- id (uuid, referencia auth.users)
- nome_completo (texto, obrigatorio)
- oab (texto, opcional)
- telefone (texto)
- cargo (enum: advogado_titular, advogado_associado, estagiario, secretaria, admin)
- avatar_url (texto)
- created_at (timestamp)

TABELA "clientes":
- id (uuid, auto-gerado)
- nome_completo (texto, obrigatorio)
- cpf_cnpj (texto, unico)
- email (texto)
- telefone (texto)
- endereco_completo (texto)
- data_nascimento (data)
- estado_civil (texto)
- profissao (texto)
- como_conheceu (texto)
- observacoes (texto)
- advogado_responsavel_id (referencia profiles)
- ativo (boolean, default true)
- created_at (timestamp)
- updated_at (timestamp)

TABELA "processos":
- id (uuid, auto-gerado)
- numero_processo (texto, unico, formato CNJ)
- cliente_id (referencia clientes, obrigatorio)
- advogado_id (referencia profiles, obrigatorio)
- area_direito (enum: trabalhista, civil, familia, criminal, tributario, previdenciario, empresarial, outro)
- vara_tribunal (texto)
- comarca (texto)
- status (enum: captacao, analise, ativo, suspenso, em_recurso, transito_julgado, arquivado)
- valor_causa (decimal)
- data_distribuicao (data)
- parte_contraria (texto)
- objeto (texto)
- observacoes (texto)
- created_at (timestamp)
- updated_at (timestamp)

TABELA "prazos":
- id (uuid, auto-gerado)
- processo_id (referencia processos, obrigatorio)
- tipo (texto: contestacao, recurso, manifestacao, etc.)
- data_intimacao (data)
- data_limite (data, obrigatorio)
- dias_uteis (boolean, default true)
- status (enum: pendente, cumprido, vencido)
- responsavel_id (referencia profiles)
- observacoes (texto)
- created_at (timestamp)

TABELA "documentos":
- id (uuid, auto-gerado)
- processo_id (referencia processos)
- cliente_id (referencia clientes)
- titulo (texto, obrigatorio)
- tipo (enum: peticao, contrato, procuracao, recurso, parecer, correspondencia, outro)
- arquivo_url (texto)
- tamanho_bytes (inteiro)
- versao (inteiro, default 1)
- uploaded_by (referencia profiles)
- created_at (timestamp)

TABELA "honorarios":
- id (uuid, auto-gerado)
- processo_id (referencia processos, obrigatorio)
- tipo (enum: fixo, exito, misto, consulta)
- valor_total (decimal, obrigatorio)
- numero_parcelas (inteiro, default 1)
- valor_parcela (decimal)
- dia_vencimento (inteiro)
- observacoes (texto)
- created_at (timestamp)

TABELA "parcelas":
- id (uuid, auto-gerado)
- honorario_id (referencia honorarios, obrigatorio)
- numero (inteiro)
- valor (decimal)
- data_vencimento (data)
- data_pagamento (data, nullable)
- status (enum: pendente, pago, atrasado, cancelado)
- comprovante_url (texto)
- created_at (timestamp)

CONFIGURACOES:
- Habilitar RLS em TODAS as tabelas
- Criar policies basicas: usuarios autenticados podem CRUD nos proprios registros
- Criar triggers para atualizar updated_at automaticamente
- Criar indice no campo numero_processo para busca rapida
- Gere 15 clientes e 25 processos ficticios com dados realistas brasileiros`,
        tips: [
          'Comece com estas 5 tabelas fundamentais e adicione mais conforme necessidade',
          'Sempre crie a tabela profiles para armazenar dados dos advogados',
          'Use o formato CNJ para numeros de processo (padrao nacional)',
          'Habilite RLS em TODAS as tabelas desde o inicio — e mais facil do que adicionar depois',
          'Peca dados ficticios para testar — facilita visualizar o app funcionando',
        ],
      },
      {
        title: 'CRUD: Criar, Ler, Atualizar, Deletar',
        subtitle: 'As 4 operacoes basicas de todo app',
        level: 'intermediario',
        icon: 'settings',
        content: `**CRUD** e o acronimo para as 4 operacoes basicas que todo app faz com dados: **C**reate (criar), **R**ead (ler), **U**pdate (atualizar) e **D**elete (deletar). Todo app juridico e basicamente CRUD aplicado a clientes, processos e documentos.

**Analogia juridica:** CRUD e como o ciclo de vida de um processo:
- **Create** = Distribuicao (cria o processo)
- **Read** = Consulta processual (le os dados)
- **Update** = Peticionamento (atualiza andamentos)
- **Delete** = Arquivamento definitivo (remove do sistema ativo)

**Como cada operacao funciona no Lovable + Supabase:**

| Operacao | Interface | Banco de Dados |
|----------|-----------|---------------|
| **Create** | Formulario de cadastro | INSERT na tabela |
| **Read** | Lista/tabela de dados | SELECT da tabela |
| **Update** | Formulario de edicao | UPDATE na tabela |
| **Delete** | Botao excluir | DELETE da tabela |

**Boas praticas de CRUD para apps juridicos:**

1. **Confirmacao antes de deletar:** Nunca delete sem confirmacao. Peca: "modal de confirmacao com texto 'Tem certeza que deseja excluir?'"
2. **Soft delete ao inves de hard delete:** Ao inves de deletar definitivamente, marque como inativo. Dados juridicos nunca devem ser apagados.
3. **Log de alteracoes:** Registre quem alterou o que e quando. Essencial para compliance.
4. **Validacao dupla:** Valide no frontend (formulario) E no backend (RLS/policies).
5. **Otimistic UI:** Atualize a interface imediatamente e sincronize com o banco em background.

**Soft Delete — Por que e importante:**

Em apps juridicos, NUNCA delete dados definitivamente. Use soft delete: adicione um campo \`ativo\` (boolean) ou \`deleted_at\` (timestamp) na tabela. Quando o usuario "exclui", apenas marque como inativo. Os dados continuam no banco para consulta futura.

Motivos: compliance LGPD (direito ao esquecimento com registro), auditoria, processos em andamento que referenciam esses dados, possibilidade de restauracao.`,
        prompt: `Crie uma pagina completa de CRUD para clientes com as seguintes funcionalidades:

LISTAGEM (Read):
- Tabela com colunas: nome, CPF/CNPJ, email, telefone, status (ativo/inativo), data de cadastro
- Busca por nome, CPF ou email
- Filtro por status (todos, ativos, inativos)
- Ordenacao por nome ou data de cadastro
- Paginacao com 15 registros por pagina
- Badge verde para ativo, cinza para inativo

CADASTRO (Create):
- Botao "Novo Cliente" abre formulario em modal ou pagina nova
- Campos: nome completo, CPF/CNPJ com mascara e validacao, email, telefone com mascara, endereco completo (com busca por CEP), data de nascimento, estado civil, profissao, como conheceu o escritorio, observacoes
- Validacao em tempo real
- Botao salvar com loading state
- Toast de sucesso: "Cliente cadastrado com sucesso"

EDICAO (Update):
- Botao "Editar" em cada linha da tabela
- Abre mesmo formulario preenchido com dados atuais
- Destaca campos que foram alterados
- Toast: "Cliente atualizado com sucesso"

EXCLUSAO (Delete - soft delete):
- Botao "Desativar" (nao "Excluir")
- Modal de confirmacao: "Deseja desativar este cliente? Ele nao aparecera mais nas listagens, mas os dados serao preservados."
- Ao confirmar: marca ativo=false e filtra da listagem padrao
- Opcao de "Reativar" nos clientes inativos

INTEGRACAO SUPABASE:
- Conectar com a tabela "clientes" no Supabase
- Usar RLS para que cada advogado so veja seus clientes
- Atualizar updated_at automaticamente ao editar
- Sincronizar em tempo real (Realtime)`,
        tips: [
          'Sempre use soft delete em apps juridicos — nunca apague dados definitivamente',
          'Adicione confirmacao antes de qualquer operacao destrutiva',
          'Toast notifications dao feedback imediato ao usuario',
          'Validacao em tempo real reduz erros e resubmissoes do formulario',
          'Peca log de alteracoes para compliance e auditoria',
        ],
      },
      {
        title: 'Relacionamentos entre Tabelas',
        subtitle: 'Clientes, processos e documentos conectados',
        level: 'intermediario',
        icon: 'network',
        content: `No mundo juridico, dados se conectam naturalmente: um cliente tem processos, um processo tem documentos, um documento pertence a um processo que pertence a um cliente. Modelar esses relacionamentos corretamente e fundamental.

**Tipos de relacionamento:**

| Tipo | Exemplo Juridico | Como funciona |
|------|-----------------|---------------|
| **Um para muitos (1:N)** | 1 cliente tem N processos | Campo cliente_id na tabela processos |
| **Um para muitos (1:N)** | 1 processo tem N documentos | Campo processo_id na tabela documentos |
| **Um para muitos (1:N)** | 1 processo tem N prazos | Campo processo_id na tabela prazos |
| **Muitos para muitos (N:N)** | N advogados em N processos | Tabela intermediaria processo_advogados |
| **Um para um (1:1)** | 1 usuario tem 1 perfil | Campo id referenciando auth.users |

**Visualizando os relacionamentos:**

\`\`\`
profiles (advogados)
  |
  |-- 1:N --> clientes
  |             |
  |             |-- 1:N --> processos
  |                          |
  |                          |-- 1:N --> prazos
  |                          |-- 1:N --> documentos
  |                          |-- 1:N --> honorarios
  |                                        |
  |                                        |-- 1:N --> parcelas
\`\`\`

**Como descrever relacionamentos no prompt:**

Seja explicito: "A tabela processos tem um campo cliente_id que referencia a tabela clientes. Um cliente pode ter muitos processos. Ao exibir um processo, mostre tambem o nome do cliente vinculado."

**Joins e queries complexas:**

Para exibir dados de tabelas relacionadas, a IA gera automaticamente as queries corretas. Exemplo: ao mostrar a lista de processos, cada linha exibe o nome do cliente (que esta em outra tabela). Isso e chamado de JOIN.

**Cascading deletes — Cuidado!**

Quando voce deleta um cliente, o que acontece com os processos dele? Opcoes:
- **CASCADE:** Deleta tudo junto (perigoso para dados juridicos)
- **RESTRICT:** Impede a delecao se tiver dados vinculados (recomendado)
- **SET NULL:** Desvincula os processos (perda de referencia)

Recomendacao: Use RESTRICT para apps juridicos. Se o advogado tentar desativar um cliente com processos ativos, o sistema avisa: "Este cliente possui processos ativos. Arquive os processos primeiro."

**Integridade referencial:**

O Supabase (PostgreSQL) garante que voce nao pode inserir um processo com cliente_id=999 se nao existe um cliente com id=999. Isso evita dados orfaos e inconsistencias.`,
        tips: [
          'Descreva os relacionamentos explicitamente no prompt',
          'Use RESTRICT para impedir delecao acidental de dados vinculados',
          'Peca que a IA mostre dados de tabelas relacionadas (JOIN) nas listagens',
          'O diagrama de relacionamentos acima cobre 90% dos escritorios',
          'Soft delete e ainda mais importante em tabelas com muitos relacionamentos',
        ],
      },
      {
        title: 'Autenticacao com Supabase',
        subtitle: 'Login seguro com email, senha e redes sociais',
        level: 'intermediario',
        icon: 'lock',
        content: `A autenticacao do Supabase e a forma mais segura e simples de adicionar login ao seu app no Lovable. Ela suporta email/senha, login social (Google) e gerenciamento completo de sessoes.

**O que o Supabase Auth faz:**

- Cria e gerencia contas de usuario
- Armazena senhas com criptografia segura (bcrypt)
- Gera tokens de sessao automaticamente
- Suporta login com Google, GitHub, Facebook, etc.
- Envia emails de confirmacao e recuperacao de senha
- Gerencia sessoes (login, logout, expiracao)

**Fluxo de autenticacao no app:**

1. Usuario acessa o app → middleware verifica se esta autenticado
2. Se nao → redireciona para pagina de login
3. Usuario insere credenciais → Supabase Auth valida
4. Se valido → cria sessao e redireciona ao dashboard
5. Token de sessao e armazenado no navegador
6. A cada requisicao, o token e enviado automaticamente
7. O RLS usa o token para filtrar dados (cada usuario ve so os seus)

**Tabela profiles — Estendendo dados do usuario:**

O Supabase Auth armazena apenas email e senha. Para dados adicionais (nome, OAB, telefone, cargo), crie uma tabela \`profiles\` vinculada ao auth.users:

- Trigger automatico: quando um novo usuario se registra, cria automaticamente um registro na tabela profiles
- O perfil pode ser editado pelo usuario depois do cadastro
- Permite roles/cargos: advogado_titular, associado, estagiario, secretaria

**Protecao de rotas:**

Alem do login, voce precisa proteger as rotas (paginas) do app. Paginas internas (dashboard, processos, clientes) so devem ser acessiveis por usuarios autenticados. Se alguem tenta acessar diretamente pela URL, deve ser redirecionado ao login.

**Login social (Google):**

Para habilitar login com Google no Supabase:
1. Crie um projeto no Google Cloud Console
2. Configure OAuth 2.0
3. Copie Client ID e Client Secret
4. No Supabase Dashboard > Auth > Providers > Google, cole as credenciais
5. No prompt do Lovable, peca: "Adicione login com Google como opcao"`,
        tips: [
          'Sempre use Supabase Auth — nunca tente implementar autenticacao do zero',
          'Crie a tabela profiles com trigger automatico desde o inicio',
          'Proteja TODAS as rotas internas — nao apenas a pagina principal',
          'Login com Google reduz friccao (menos um formulario para preencher)',
          'Configure emails de confirmacao no Supabase Dashboard > Auth > Email Templates',
        ],
      },
      {
        title: 'RLS: Row Level Security',
        subtitle: 'A chave para seguranca real dos dados',
        level: 'avancado',
        icon: 'shield',
        content: `**Row Level Security (RLS)** e o recurso MAIS IMPORTANTE do Supabase para apps juridicos. Ele garante que cada usuario so acesse os dados que pertencem a ele — no nivel do banco de dados.

**Por que RLS e critico para advogados:**

Sem RLS, qualquer usuario autenticado pode ver TODOS os dados de TODOS os clientes e processos. Com RLS, cada advogado ve apenas seus clientes e processos. A diferenca e a mesma entre um armario sem fechadura e um cofre com biometria.

**Como RLS funciona:**

O RLS adiciona uma condicao automatica em TODA query ao banco:

Sem RLS: \`SELECT * FROM processos\` → retorna TODOS os processos
Com RLS: \`SELECT * FROM processos\` → retorna apenas processos onde advogado_id = usuario_logado

Voce nao precisa adicionar essa condicao no codigo — o Supabase faz automaticamente!

**Tipos de policies RLS:**

| Policy | Permissao | Uso |
|--------|-----------|-----|
| **SELECT** | Quem pode LER | Advogado le seus processos |
| **INSERT** | Quem pode CRIAR | Advogado cria processos vinculados a si |
| **UPDATE** | Quem pode ALTERAR | So o responsavel atualiza seus processos |
| **DELETE** | Quem pode EXCLUIR | Admin pode desativar qualquer registro |

**Exemplos de policies para escritorio:**

**Policy 1 — Advogado ve seus processos:**
"Usuarios podem ver processos onde advogado_id = auth.uid()"

**Policy 2 — Advogado ve clientes que ele cadastrou:**
"Usuarios podem ver clientes onde advogado_responsavel_id = auth.uid()"

**Policy 3 — Admin ve tudo:**
"Usuarios com cargo = 'admin' em profiles podem ver todos os registros"

**Policy 4 — Cliente ve seus processos (portal):**
"Usuarios com role = 'cliente' podem ver processos onde cliente_id = usuario.cliente_id"

**RLS e LGPD:**

A LGPD (Lei Geral de Protecao de Dados) exige que dados pessoais sejam protegidos com controles de acesso adequados. RLS e a implementacao tecnica perfeita para esse requisito. Em caso de auditoria, voce pode demonstrar que os dados sao isolados por usuario no nivel do banco.

**Armadilhas comuns:**

1. Esquecer de habilitar RLS (dados expostos a todos)
2. Policies muito permissivas (ex: SELECT true — todos veem tudo)
3. Nao testar com usuarios diferentes (funciona para voce mas nao para o estagiario)
4. Esquecer de policies para INSERT (usuario consegue criar registro vinculado a outro advogado)`,
        tips: [
          'HABILITE RLS em TODAS as tabelas — sem excecao',
          'Teste com pelo menos 2 usuarios diferentes para validar o isolamento',
          'Policies no SELECT sao as mais importantes — controle quem le os dados',
          'Admin deve ter policies separadas com acesso ampliado',
          'RLS e requisito para compliance com LGPD em apps com dados pessoais',
        ],
      },
      {
        title: 'Sigilo Profissional e RLS',
        subtitle: 'Proteja o sigilo advogado-cliente no banco de dados',
        level: 'avancado',
        icon: 'file-key',
        content: `O sigilo profissional e dever etico do advogado (art. 7, II do Estatuto da OAB). Em apps digitais, esse dever se traduz em controles tecnicos de acesso aos dados. O RLS do Supabase e a ferramenta certa para isso.

**Cenarios de sigilo que o RLS resolve:**

**Cenario 1 — Escritorio com varios advogados:**
Cada advogado tem seus clientes e processos. O advogado A nao deve ver os clientes do advogado B, a menos que compartilhem o caso.

Policy RLS: "advogado_responsavel_id = auth.uid() OR processo esta na lista de compartilhados"

**Cenario 2 — Portal do cliente:**
O cliente faz login e ve apenas seus processos, documentos e prazos. Nao pode ver dados de nenhum outro cliente.

Policy RLS: "cliente_id = (SELECT cliente_id FROM profiles WHERE id = auth.uid())"

**Cenario 3 — Estagiarios com acesso limitado:**
Estagiarios acessam apenas processos atribuidos a eles, nao todo o acervo do escritorio.

Policy RLS: "processo_id IN (SELECT processo_id FROM processo_responsaveis WHERE usuario_id = auth.uid())"

**Cenario 4 — Administracao do escritorio:**
O socio-administrador precisa ver todos os dados para gestao, mas nao deve poder alterar processos de outros advogados sem registro.

Policy RLS: "(cargo = 'admin' AND acao = 'SELECT') OR advogado_id = auth.uid()"

**LGPD — Requisitos tecnicos que o RLS atende:**

| Requisito LGPD | Implementacao com RLS |
|-----------------|----------------------|
| Principio da necessidade | Usuarios so acessam dados necessarios para sua funcao |
| Controle de acesso | Policies granulares por usuario e role |
| Rastreabilidade | Logs de acesso integrados ao Supabase |
| Minimizacao | SELECT retorna apenas colunas necessarias |
| Seguranca | Isolamento no nivel do banco (nao apenas na interface) |

**A diferenca entre seguranca na interface e no banco:**

Seguranca apenas na interface (esconder botoes) e como trancar a porta da frente e deixar a dos fundos aberta. Um usuario tecnico pode acessar a API diretamente e ver todos os dados. RLS protege no banco — mesmo acessando a API diretamente, o usuario so ve seus dados.

**Como implementar no Lovable:**

No prompt, seja explicito: "Configure RLS na tabela processos com as seguintes regras: advogados veem apenas seus processos (advogado_id = auth.uid()), admin ve todos os processos (cargo = 'admin' na tabela profiles), estagiarios veem processos atribuidos a eles."`,
        tips: [
          'Sigilo profissional exige RLS — seguranca apenas na interface nao e suficiente',
          'Teste SEMPRE com contas de usuarios diferentes (advogado A, advogado B, estagiario)',
          'Documente suas policies de RLS — pode ser necessario para auditoria OAB ou LGPD',
          'Para casos compartilhados, crie tabela de compartilhamento com permissoes granulares',
          'RLS combinado com logs de acesso atende os principais requisitos da LGPD',
        ],
      },
      {
        title: 'Storage: Upload de Documentos',
        subtitle: 'Armazene peticoes, contratos e procuracoes',
        level: 'intermediario',
        icon: 'folder-open',
        content: `O **Supabase Storage** e o servico de armazenamento de arquivos integrado ao Supabase. Ideal para armazenar documentos juridicos: peticoes, contratos, procuracoes, comprovantes e qualquer outro arquivo.

**O que o Storage oferece:**

- Upload de arquivos de ate 50 MB (plano gratuito)
- Organizacao em pastas (buckets)
- URLs publicas ou privadas para cada arquivo
- Controle de acesso com policies (similar ao RLS)
- Preview de imagens e PDFs
- Transformacao de imagens (resize, crop)

**Organizacao recomendada para escritorios:**

\`\`\`
storage/
  documentos/
    cliente-{id}/
      processo-{id}/
        peticao-inicial.pdf
        procuracao.pdf
        contrato-honorarios.pdf
        comprovantes/
          comprovante-001.pdf
\`\`\`

**Tipos de arquivo comuns em escritorios:**

| Tipo | Extensoes | Tamanho medio |
|------|-----------|---------------|
| Peticoes | .pdf, .docx | 100 KB - 5 MB |
| Contratos | .pdf, .docx | 50 KB - 2 MB |
| Procuracoes | .pdf | 50 KB - 500 KB |
| Comprovantes | .pdf, .jpg, .png | 100 KB - 3 MB |
| Planilhas | .xlsx, .csv | 50 KB - 10 MB |

**Seguranca dos documentos:**

Assim como o RLS protege os dados nas tabelas, o Storage tem suas proprias policies de acesso. Configure para que cada advogado so acesse documentos dos seus processos.

**Download e visualizacao:**

Apos o upload, cada arquivo recebe uma URL. Essa URL pode ser:
- **Publica:** qualquer pessoa com o link acessa (NAO recomendado para documentos juridicos)
- **Privada:** so usuarios autenticados e autorizados acessam (RECOMENDADO)

**Limite de armazenamento:**

- Plano gratuito: 1 GB
- Para escritorios grandes, o plano Pro do Supabase oferece 100 GB
- Para volume muito alto de documentos, considere integracao com Google Drive ou S3`,
        tips: [
          'Organize documentos em pastas por cliente e processo',
          'Use URLs privadas para documentos juridicos — NUNCA publicas',
          'Configure policies de Storage para isolar documentos por advogado',
          'Valide tipos de arquivo no upload (aceitar apenas PDF, DOCX, imagens)',
          'O plano gratuito oferece 1 GB — suficiente para comeco, upgrade quando necessario',
        ],
      },
      {
        title: 'Realtime: Atualizacoes ao Vivo',
        subtitle: 'Notificacoes instantaneas no seu app',
        level: 'avancado',
        icon: 'zap',
        content: `O **Supabase Realtime** permite que seu app receba atualizacoes instantaneas quando dados mudam no banco. Quando outro advogado atualiza um processo, voce ve a mudanca sem recarregar a pagina.

**Casos de uso para escritorios:**

| Cenario | Como funciona |
|---------|--------------|
| Novo prazo cadastrado | Dashboard atualiza automaticamente a contagem |
| Processo movimentado | Timeline atualiza sem recarregar |
| Documento uploaded | Lista de documentos mostra o novo arquivo |
| Pagamento recebido | Dashboard financeiro reflete imediatamente |
| Novo comentario | Notificacao aparece em tempo real |

**Como funciona tecnicamente:**

O Supabase usa WebSockets para manter uma conexao persistente entre o app e o banco. Quando um registro e inserido, atualizado ou deletado, o Supabase envia uma notificacao instantanea para todos os clientes conectados que tem permissao para ver aquele dado.

**Tipos de subscription (inscricao):**

1. **INSERT:** notifica quando novo registro e criado
2. **UPDATE:** notifica quando registro e atualizado
3. **DELETE:** notifica quando registro e removido
4. **ALL:** notifica em qualquer mudanca

**Exemplo pratico — Dashboard com prazos ao vivo:**

O advogado abre o dashboard de manha. A secretaria cadastra um novo prazo. O card "Prazos desta semana" atualiza automaticamente de "5" para "6" sem que o advogado precise recarregar a pagina.

**Quando NAO usar Realtime:**

- Dados que mudam raramente (dados do escritorio, configuracoes)
- Tabelas muito grandes (muitas notificacoes sobrecarregam o app)
- Apps com poucos usuarios (um advogado solo nao precisa de realtime)

**Quando USAR Realtime:**

- Dashboards compartilhados por equipe
- Portais de cliente (cliente quer ver atualizacao imediata)
- Sistemas de prazos (urgencia exige informacao atualizada)
- Chat interno do escritorio`,
        tips: [
          'Realtime e ideal para dashboards compartilhados por equipe',
          'Para advogado solo, Realtime nao e necessario (recarregar pagina funciona)',
          'Use com moderacao — muitas subscriptions podem tornar o app lento',
          'Combine Realtime com notificacoes visuais (badge, toast, som)',
          'Sempre respeite RLS — Realtime so notifica dados que o usuario tem permissao de ver',
        ],
      },
      {
        title: 'Edge Functions',
        subtitle: 'Logica de servidor: emails, PDFs, integracoes',
        level: 'avancado',
        icon: 'terminal',
        content: `**Edge Functions** sao funcoes que rodam no servidor do Supabase (nao no navegador do usuario). Sao essenciais para tarefas que nao podem ou nao devem ser feitas no frontend.

**Por que precisamos de Edge Functions:**

Algumas coisas nao podem ser feitas no navegador:
- Enviar emails (precisa de servidor de email)
- Gerar PDFs (processamento pesado)
- Integrar com APIs externas que exigem chave secreta
- Agendar tarefas (rodar algo todo dia as 8h)
- Processar pagamentos (dados sensiveis)

**Casos de uso para escritorios:**

| Caso | Descricao |
|------|-----------|
| **Email de prazo** | Enviar email 48h antes do vencimento de cada prazo |
| **Gerar recibo** | Criar PDF de recibo de honorarios ao registrar pagamento |
| **Busca CNJ** | Consultar andamento processual via API do tribunal |
| **Webhook PJe** | Receber notificacoes do sistema PJe automaticamente |
| **Backup automatico** | Exportar dados em CSV toda semana |
| **Relatorio mensal** | Gerar relatorio financeiro automatizado |

**Como pedir Edge Functions no Lovable:**

No prompt, descreva a funcionalidade de servidor que voce precisa:

"Crie uma Edge Function que envia email de lembrete 48 horas antes do vencimento de cada prazo. A funcao deve: consultar a tabela prazos onde data_limite = hoje + 2 dias e status = 'pendente', montar o email com detalhes do processo e prazo, enviar via Resend (servico de email), registrar o envio em uma tabela 'notificacoes_enviadas'."

**Limitacoes no plano gratuito:**

- 500.000 invocacoes por mes
- Timeout de 150 segundos por execucao
- 25 Edge Functions por projeto
- Para a maioria dos escritorios, isso e mais do que suficiente

**Servicos de email recomendados:**

- **Resend** — mais simples, ideal para comecar (gratis ate 100 emails/dia)
- **SendGrid** — mais robusto, ideal para volume alto
- **Brevo (Sendinblue)** — bom custo-beneficio, com templates visuais

**Seguranca:**

Edge Functions rodam no servidor, entao e seguro armazenar chaves secretas (API keys) nelas. Essas chaves NUNCA devem ser colocadas no frontend (codigo que roda no navegador do usuario).`,
        tips: [
          'Edge Functions sao ideais para integracao com emails e APIs externas',
          'Chaves secretas so devem existir em Edge Functions, nunca no frontend',
          'Use Resend para envio de emails — e o mais simples para comecar',
          'Peca agendamento (CRON) para tarefas automaticas como lembretes de prazo',
          'Teste Edge Functions no Supabase Dashboard antes de integrar ao app',
        ],
      },
      {
        title: 'Migrando Dados Existentes',
        subtitle: 'Importe dados de planilhas para o Supabase',
        level: 'avancado',
        icon: 'arrow-right-left',
        content: `Se voce ja tem dados de clientes e processos em planilhas Excel, Google Sheets ou outro sistema, pode migra-los para o Supabase sem digitar tudo de novo.

**Metodo 1 — CSV via Supabase Dashboard (Mais Simples):**

O Supabase permite importar dados diretamente de arquivos CSV:

1. Exporte sua planilha como CSV (no Excel: Salvar Como > CSV UTF-8)
2. No Supabase Dashboard, va na tabela desejada
3. Clique em "Import data from CSV"
4. Faca upload do arquivo
5. Mapeie as colunas do CSV para as colunas da tabela
6. Confirme a importacao

**Metodo 2 — Script via Edge Function:**

Para importacoes mais complexas (com tratamento de dados, validacoes), crie uma Edge Function que processa o arquivo.

**Metodo 3 — Interface de importacao no app:**

Peca ao Lovable para criar uma tela de importacao diretamente no seu app:

"Crie uma pagina de importacao de dados com: area de upload de arquivo CSV, preview das primeiras 10 linhas, mapeamento de colunas (dropdown para cada coluna do CSV escolher qual campo da tabela corresponde), botao 'Importar' com barra de progresso, relatorio final mostrando quantos registros importados e quantos com erro."

**Preparando a planilha para importacao:**

Antes de importar, organize sua planilha:

| Cuidado | Acao |
|---------|------|
| Nomes de coluna | Use nomes simples sem acento (nome_completo, cpf, email) |
| Datas | Padronize formato (YYYY-MM-DD e o melhor) |
| CPF | Remova pontos e tracos (apenas numeros) |
| Telefone | Padronize formato (apenas numeros) |
| Campos vazios | Deixe em branco (nao use "N/A" ou "-") |
| Caracteres especiais | Salve como CSV UTF-8 para preservar acentos |

**Dica importante:** Faca um teste com 5-10 registros antes de importar a base completa. Isso permite identificar problemas de formatacao sem corromper dados.

**Mapeamento de dados comum:**

Se sua planilha tem "Nome do Cliente", no Supabase a coluna pode ser "nome_completo". O mapeamento conecta os dois. Sempre revise o mapeamento antes de confirmar a importacao.`,
        tips: [
          'Sempre faca backup da planilha original antes de qualquer importacao',
          'Teste com 5-10 registros primeiro — nunca importe tudo de primeira',
          'Padronize datas para formato YYYY-MM-DD antes de importar',
          'Salve CSV em UTF-8 para preservar acentos e caracteres especiais',
          'Depois da importacao, verifique 10 registros aleatorios para garantir integridade',
        ],
      },
      {
        title: 'Backup e Seguranca de Dados',
        subtitle: 'Proteja seus dados contra perdas e ataques',
        level: 'expert',
        icon: 'lock',
        content: `Dados juridicos sao sensiveis e irreplacaveis. Perder a base de clientes e processos pode devastar um escritorio. Backup e seguranca nao sao opcionais — sao obrigatorios.

**Estrategia de backup 3-2-1:**

O padrao ouro de backup:
- **3** copias dos dados
- **2** midias diferentes (nuvem + local)
- **1** copia fora do escritorio (offsite)

**Backups no Supabase:**

| Tipo | Plano | Frequencia |
|------|-------|-----------|
| Backup automatico | Pro e acima | Diario |
| Point-in-time recovery | Pro e acima | Ultimo 7 dias |
| Export manual (CSV) | Todos | Quando quiser |
| pg_dump | Todos | Quando quiser |

**Para plano gratuito — Backup manual:**

Como o plano gratuito nao tem backup automatico, crie uma rotina:
1. Toda sexta-feira, exporte cada tabela como CSV pelo Supabase Dashboard
2. Salve em pasta no Google Drive com data no nome (backup-2026-03-04)
3. Mantenha backups dos ultimos 30 dias

**Para plano Pro — Backup automatico:**

O Supabase Pro faz backup diario automatico com retencao de 7 dias. Voce pode restaurar qualquer ponto dos ultimos 7 dias com um clique.

**Seguranca adicional recomendada:**

| Medida | Descricao | Prioridade |
|--------|-----------|-----------|
| **RLS habilitado** | Isolamento de dados por usuario | Critica |
| **Senhas fortes** | Minimo 12 caracteres, complexa | Critica |
| **2FA** | Autenticacao em dois fatores | Alta |
| **Auditoria** | Log de quem acessou o que e quando | Alta |
| **Criptografia** | Supabase ja criptografa em repouso | Automatico |
| **SSL/TLS** | Conexoes sempre criptografadas | Automatico |

**Auditoria de acesso (log):**

Para compliance com LGPD e OAB, registre:
- Quem acessou qual registro
- Quando o acesso ocorreu
- Que operacao foi realizada (leitura, escrita, exclusao)
- De qual IP/dispositivo

Isso pode ser implementado via triggers no Supabase ou Edge Functions.

**Plano de recuperacao de desastre:**

Documente: "Se o banco ficar indisponivel, farei: 1) Verificar status no Supabase Dashboard 2) Se necessario, restaurar backup 3) Notificar clientes afetados 4) Registrar incidente". Ter esse plano escrito antes de precisar e a marca de um escritorio maduro.

**Criptografia de dados sensiveis:**

Alguns dados podem exigir criptografia adicional alem da que o Supabase oferece por padrao. Exemplos: numeros de documentos, informacoes financeiras, detalhes de casos criminais. Considere criptografia no nivel da aplicacao para esses campos.`,
        tips: [
          'No plano gratuito, faca backup manual semanal (CSV) — nao confie apenas na nuvem',
          'O plano Pro (US$ 25/mes) vale so pelo backup automatico com dados juridicos',
          'Habilite 2FA em TODAS as contas: Supabase, Lovable, GitHub, email',
          'Documente seu plano de recuperacao de desastre — antes de precisar',
          'Auditoria de acesso e requisito LGPD — implemente desde o inicio',
        ],
      },
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // SECAO 5: APPS JURIDICOS NA PRATICA
  // ═══════════════════════════════════════════════════════════
  {
    id: 'apps-juridicos',
    title: 'Apps Juridicos na Pratica',
    description: 'Projetos completos passo a passo',
    icon: 'scale',
    cards: [
      {
        title: 'Portal do Cliente',
        subtitle: 'Seu cliente acompanha tudo online, 24 horas',
        level: 'intermediario',
        icon: 'users',
        content: `O **Portal do Cliente** e o app mais impactante que um advogado pode criar. Ele elimina a principal reclamacao de clientes: "Doutor, como esta meu processo?". Com o portal, o cliente faz login e ve tudo sozinho, a qualquer hora.

**O que o Portal do Cliente oferece:**

- **Login seguro:** cada cliente acessa apenas seus dados
- **Meus Processos:** lista de processos com status atualizado
- **Andamentos:** timeline de movimentacoes de cada processo
- **Documentos:** peticoes, contratos e procuracoes compartilhados pelo advogado
- **Prazos:** proximas datas importantes com countdown
- **Mensagens:** canal de comunicacao direto com o advogado
- **Financeiro:** parcelas de honorarios, recibos, status de pagamento

**Impacto real no escritorio:**

| Metrica | Antes | Depois |
|---------|-------|--------|
| Ligacoes "como esta meu processo?" | 15-20/semana | 2-3/semana |
| Tempo gasto informando clientes | 8h/semana | 1h/semana |
| Satisfacao do cliente | Regular | Excelente |
| Diferencial competitivo | Nenhum | Forte |

**Arquitetura do Portal:**

O portal tem duas areas distintas:
1. **Area do advogado (admin):** cadastra processos, sobe documentos, atualiza andamentos
2. **Area do cliente:** visualiza seus processos, documentos e prazos (somente leitura)

Ambas as areas usam o mesmo banco de dados, com RLS garantindo que cada cliente so ve seus dados e o advogado ve todos.

**Dica de implementacao:** Comece com a versao simplificada (apenas lista de processos + andamentos). Depois adicione documentos, financeiro e mensagens incrementalmente.`,
        prompt: `Crie um Portal do Cliente completo para escritorio de advocacia com duas areas:

AREA DO CLIENTE (apos login):

Pagina "Meus Processos":
- Lista de processos do cliente com: numero, area do direito, vara, status (badge colorido), data de distribuicao
- Clique no processo abre pagina de detalhes

Pagina "Detalhes do Processo":
- Informacoes gerais: numero, vara, objeto, advogado responsavel
- Timeline de andamentos em ordem cronologica reversa (mais recente primeiro)
- Cada andamento tem: data, titulo, descricao, icone por tipo
- Secao "Documentos" com lista de PDFs compartilhados pelo advogado (botao download)
- Secao "Proximos Prazos" com countdown visual

Pagina "Financeiro":
- Tabela de parcelas: numero, valor, vencimento, status (pago/pendente/atrasado)
- Total pago vs total pendente
- Botao para download de recibos (PDF)

Header do Portal:
- Logo do escritorio
- Nome do cliente logado
- Botao de logout
- Navegacao: Meus Processos | Financeiro

AREA DO ADVOGADO (admin):

Dashboard com metricas: total clientes, processos ativos, prazos da semana, inadimplencia
Pagina de gestao: cadastrar processos, adicionar andamentos, subir documentos, gerenciar clientes
Cada acao do advogado reflete automaticamente no portal do cliente

AUTENTICACAO:
- Login com email e senha via Supabase Auth
- Role "cliente" e role "advogado" na tabela profiles
- RLS: cliente ve apenas seus processos, advogado ve todos
- Protecao de rotas: area admin so para advogados

SUPABASE:
- Tabelas: profiles, clientes, processos, andamentos, documentos, honorarios, parcelas
- RLS em todas as tabelas
- Storage para documentos PDF
- Trigger: novo andamento envia notificacao ao cliente

DESIGN:
- Area do cliente: clean, simples, fontes grandes, poucos botoes (cliente pode ser leigo)
- Area admin: dashboard completo com sidebar
- Cores: azul-marinho profissional
- Responsivo para mobile (clientes acessam pelo celular)
- Dark mode toggle`,
        tips: [
          'Comece pela area do cliente — e o que gera impacto imediato',
          'Mantenha a interface do cliente SIMPLES — muitos clientes nao sao tecnicos',
          'RLS e obrigatorio — sem ele, um cliente pode ver dados de outro',
          'Adicione andamentos manualmente no inicio; automatize depois com API do tribunal',
          'Envie o link do portal como diferencial na proposta de honorarios',
        ],
        flowSteps: [
          { label: 'Login', description: 'Cliente acessa o portal com email e senha cadastrados pelo advogado' },
          { label: 'Dashboard', description: 'Ve resumo de processos, prazos proximos e notificacoes' },
          { label: 'Processo', description: 'Acompanha timeline de andamentos e documentos do processo' },
          { label: 'Financeiro', description: 'Consulta parcelas, status de pagamento e baixa recibos' },
        ],
      },
      {
        title: 'Gestao de Processos',
        subtitle: 'Dashboard completo para todos os seus casos',
        level: 'intermediario',
        icon: 'briefcase',
        content: `O sistema de **Gestao de Processos** e o coracao operacional do escritorio digital. Aqui voce controla todos os casos, monitora andamentos e toma decisoes baseadas em dados.

**Funcionalidades principais:**

**Dashboard de Processos:**
- Cards de metricas: total de processos, ativos, em recurso, arquivados
- Grafico de pizza por area do direito (trabalhista, civil, familia, etc.)
- Grafico de barras por status (mensal)
- Lista dos 5 processos com movimentacao mais recente
- Alerta de processos sem movimentacao ha mais de 30 dias

**Lista de Processos:**
- Tabela completa com filtros avancados
- Busca por numero CNJ, nome do cliente ou vara
- Filtro por: status, area, advogado responsavel, periodo
- Ordenacao por qualquer coluna
- Exportacao para CSV/Excel
- Acoes em lote: alterar status, atribuir advogado

**Detalhes do Processo:**
- Dados completos: partes, vara, objeto, valor da causa
- Timeline de andamentos (tipo diario do processo)
- Documentos vinculados com preview e download
- Prazos com countdown e classificacao de urgencia
- Honorarios e parcelas vinculadas
- Historico de alteracoes (quem mudou o que e quando)

**Kanban de Processos (visao alternativa):**
- Colunas: Captacao → Analise → Contratado → Ativo → Em Recurso → Transito → Arquivado
- Drag and drop para mover processos entre colunas
- Cards resumidos com cliente, numero e proxima data importante

**Por que Kanban funciona para escritorios:**

O Kanban visual permite ver instantaneamente onde cada processo esta no pipeline. Identifique gargalos (muitos processos parados em "Analise"), processos esquecidos e oportunidades.

**Metricas que importam:**

- Taxa de sucesso (processos ganhos / total julgados)
- Tempo medio do processo (distribuicao a trânsito)
- Valor medio por processo
- Processos por advogado
- Prazos cumpridos vs vencidos`,
        tips: [
          'O Kanban e otimo para visao geral; a tabela e melhor para detalhes e filtros',
          'Ofereca ambas as visualizacoes — cada advogado tem preferencia diferente',
          'O alerta de processos sem movimentacao evita processos "esquecidos"',
          'Exporte dados para CSV regularmente como backup complementar',
          'Comece com a tabela basica e adicione o Kanban como segundo passo',
        ],
      },
      {
        title: 'Controle de Prazos',
        subtitle: 'Nunca mais perca um prazo processual',
        level: 'intermediario',
        icon: 'calendar',
        content: `Perder um prazo processual e o pesadelo de todo advogado. Alem do dano ao cliente, gera responsabilidade civil e disciplinar. Um app de controle de prazos e a ferramenta mais critica do escritorio.

**Funcionalidades essenciais:**

**Dashboard de Prazos:**
- Cards: prazos hoje, esta semana, proximos 15 dias, vencidos
- Calendario visual (mensal e semanal) com marcacoes por urgencia
- Lista de prazos ordenada por data mais proxima
- Classificacao por cores: verde (>10 dias), amarelo (5-10), vermelho (<5), preto (vencido)

**Cadastro de Prazo:**
- Vinculado a um processo e cliente
- Tipo de prazo (contestacao, recurso, manifestacao, etc.)
- Data de intimacao e data limite
- Calculo automatico considerando dias uteis
- Opcao de dobro (Fazenda Publica / Defensoria)
- Responsavel pelo cumprimento
- Observacoes e lembretes

**Notificacoes (com Edge Function):**
- Email 5 dias antes do vencimento
- Email 2 dias antes (lembrete urgente)
- Email no dia do vencimento (alerta critico)
- Notificacao no app (badge no header)

**Calculo de dias uteis:**
- Exclui sabados e domingos automaticamente
- Possibilidade de cadastrar feriados nacionais e estaduais
- Considera recessos forenses (20/dez a 20/jan)
- Suporta contagem especial (dobro, triplo para litisconsortes)

**Relatorios de prazo:**
- Prazos por advogado (distribuicao de carga)
- Taxa de cumprimento (prazos cumpridos no prazo vs atrasados)
- Historico mensal de prazos
- Alertas de sobrecarga (advogado com muitos prazos na mesma semana)

**Dica de ouro:** Configure 3 niveis de alerta (5 dias, 2 dias, no dia) e NUNCA silencie notificacoes de prazo. Muitos advogados perdem prazos nao por falta de sistema, mas por ignorar alertas.`,
        tips: [
          'Configure notificacoes por email para TODOS os prazos — nao dependa so do app',
          'Cadastre feriados nacionais e estaduais para calculo correto de dias uteis',
          'Atribua um responsavel para cada prazo — accountability e fundamental',
          'Revise prazos da semana toda segunda-feira como ritual do escritorio',
          'Mantenha backup da lista de prazos fora do sistema (planilha de emergencia)',
        ],
      },
      {
        title: 'Calculador Juridico',
        subtitle: 'Calculos trabalhistas, juros e correcao monetaria',
        level: 'iniciante',
        icon: 'bar-chart',
        content: `Calculadores juridicos sao apps simples que geram valor imediato. Nao precisam de banco de dados, sao rapidos de construir e impressionam clientes.

**Tipos de calculadores uteis:**

**1. Calculadora Trabalhista (mais popular):**
- Saldo de salario (dias trabalhados no mes)
- 13o salario proporcional
- Ferias proporcionais + 1/3 constitucional
- Aviso previo (trabalhado ou indenizado, proporcional ao tempo de servico)
- Multa de 40% do FGTS
- Valor total da rescisao

**2. Calculadora de Correcao Monetaria:**
- Valor original e data base
- Indice de correcao (IPCA, IGPM, INPC, TR)
- Juros (1% ao mes, SELIC, poupanca)
- Valor corrigido com detalhamento mes a mes

**3. Calculadora de Custas e Emolumentos:**
- Valor da causa
- Tipo de acao
- Custas judiciais por tribunal
- Emolumentos cartorarios
- Honorarios de sucumbencia

**4. Simulador de Aposentadoria:**
- Tempo de contribuicao
- Idade atual
- Regras de transicao (pedágio, pontos, idade minima)
- Valor estimado do beneficio

**5. Calculadora de Honorarios:**
- Tabela da OAB do estado
- Valor da causa ou proveito economico
- Percentual de honorarios contratuais
- Simulacao de parcelamento

**Por que calculadores sao otimos para comecar:**

- Nao precisam de banco de dados (funcionam 100% no frontend)
- Sao rapidos de construir (1-2 prompts)
- Geram valor real imediato
- Podem ser compartilhados como ferramenta de marketing
- Impressionam clientes em reunioes

**Dica de marketing:** Publique o calculador com link publico e compartilhe nas redes sociais. "Calcule suas verbas rescinsorias gratuitamente" atrai potenciais clientes para o escritorio.`,
        tips: [
          'Calculadores nao precisam de Supabase — sao 100% frontend',
          'Comece pela calculadora trabalhista — e a mais demandada',
          'Publique com link publico e use como ferramenta de marketing',
          'Adicione "Consulte um advogado para calculo preciso" como disclaimer',
          'Use o plano Free do Lovable — calculadores sao apps simples',
        ],
      },
      {
        title: 'Gestao de Honorarios e Cobranca',
        subtitle: 'Controle financeiro completo do escritorio',
        level: 'intermediario',
        icon: 'credit-card',
        content: `O controle financeiro e frequentemente negligenciado por advogados, que focam na parte tecnica e esquecem da sustentabilidade do escritorio. Um app de gestao de honorarios muda essa realidade.

**Funcionalidades do sistema financeiro:**

**Cadastro de Contratos de Honorarios:**
- Vinculado ao processo e cliente
- Tipo: fixo, por exito, misto, consulta avulsa
- Valor total e condicoes de pagamento
- Numero de parcelas e dia de vencimento
- Clausula de reajuste (anual, IGPM)
- Anexo do contrato assinado (Storage)

**Controle de Parcelas:**
- Lista de todas as parcelas com status: pago, pendente, atrasado
- Registro de pagamento: data, valor, forma (PIX, boleto, cartao), comprovante
- Calculo automatico de multa e juros por atraso
- Geracao de recibo em PDF

**Dashboard Financeiro:**
- Receita do mes atual vs meta
- Receita por area do direito (pizza)
- Evolucao mensal de receita (grafico de linha)
- Inadimplencia total e por periodo
- Top 5 clientes devedores
- Projecao de receita (proximos 3 meses baseado em parcelas futuras)

**Alertas de Inadimplencia:**
- Email automatico ao cliente 3 dias antes do vencimento
- Email automatico no dia do vencimento
- Alerta ao advogado quando parcela vence sem pagamento
- Lista de parcelas atrasadas com dias de atraso

**Relatorios:**
- Relatorio mensal de receita (para contabilidade)
- DRE simplificada (receita - despesas = resultado)
- Relatorio de inadimplencia por periodo
- Projecao de fluxo de caixa

**Integracao possivel (avancado):**
- PIX automatico via API do banco
- Emissao de boleto via API (Asaas, PagBank)
- Nota fiscal via API (NFe.io, Conta Azul)
- Exportacao para sistema contabil

**Metrica mais importante:** Taxa de inadimplencia. Se for maior que 15%, o escritorio tem um problema serio de cobranca que precisa de atencao imediata.`,
        tips: [
          'Comece simples: cadastro de honorarios + controle de parcelas + dashboard',
          'Alertas por email reduzem inadimplencia em 30-40%',
          'Registre TODOS os pagamentos com comprovante para seguranca',
          'O relatorio mensal facilita a vida do contador',
          'Integracao com PIX e boleto pode vir numa segunda fase',
        ],
      },
      {
        title: 'Gestao de Documentos',
        subtitle: 'Repositorio centralizado com busca e versionamento',
        level: 'intermediario',
        icon: 'file-check',
        content: `Escritorios de advocacia lidam com MUITOS documentos: peticoes, contratos, procuracoes, pareceres, correspondencias, comprovantes. Sem organizacao digital, encontrar o documento certo vira uma caca ao tesouro.

**Funcionalidades do sistema de documentos:**

**Upload e Organizacao:**
- Upload multiplo (drag and drop)
- Organizacao automatica por cliente e processo
- Categorias: peticao, contrato, procuracao, recurso, parecer, correspondencia, outro
- Tags personalizaveis para busca rapida
- Deteccao automatica do tipo de arquivo (PDF, DOCX, XLSX, JPG)

**Busca Avancada:**
- Busca por titulo, tipo, cliente, processo
- Filtro por categoria, data, autor
- Busca em texto completo (full-text search) dentro dos documentos
- Resultados ordenados por relevancia

**Versionamento:**
- Historico de versoes de cada documento
- Upload de nova versao mantendo o historico
- Comparacao entre versoes
- Restauracao de versao anterior
- Marcacao: "rascunho", "revisado", "final", "assinado"

**Compartilhamento:**
- Compartilhar documentos especificos com clientes (via portal)
- Link temporario para download (expira em X horas)
- Controle de quem acessou (log de acesso)
- Marca d'agua automatica em documentos compartilhados

**Metadados de cada documento:**
- Titulo e descricao
- Processo e cliente vinculados
- Categoria e tags
- Autor (quem fez upload)
- Data de criacao e ultima modificacao
- Tamanho do arquivo
- Versao atual
- Status (rascunho, final, assinado)

**Storage no Supabase:**

Documentos sao armazenados no Supabase Storage com:
- Buckets separados por tipo (documentos-juridicos, comprovantes, templates)
- Policies de acesso: advogado acessa documentos dos seus processos
- URLs assinadas (signed URLs) para download seguro com expiracao
- Limite de 50 MB por arquivo (plano gratuito)

**Organizacao de pastas recomendada:**

Cada documento e armazenado no caminho: \`/cliente-{id}/processo-{id}/tipo/arquivo.pdf\`. Isso facilita backup, auditoria e limpeza periodica.`,
        tips: [
          'Padronize nomes de arquivo: "peticao-inicial-processo-1234567.pdf"',
          'Use tags para facilitar busca: "urgente", "assinado", "pendente-revisao"',
          'Versionamento e essencial — nunca sobrescreva um documento existente',
          'Configure limite de tamanho por upload para evitar abuse',
          'Faca backup do Storage separadamente (alem do banco de dados)',
        ],
      },
      {
        title: 'CRM Juridico',
        subtitle: 'Da captacao ao encerramento — gestao completa do cliente',
        level: 'avancado',
        icon: 'handshake',
        content: `Um **CRM (Customer Relationship Management) Juridico** vai alem do cadastro de clientes. Ele gerencia todo o ciclo de vida: desde o primeiro contato ate o encerramento do caso, passando por follow-up, satisfacao e indicacoes.

**Pipeline de captacao (Kanban):**

| Etapa | Descricao | Acao |
|-------|-----------|------|
| **Lead** | Pessoa que entrou em contato | Agendar consulta inicial |
| **Consulta agendada** | Consulta marcada | Preparar roteiro |
| **Consulta realizada** | Consulta feita, aguardando decisao | Enviar proposta |
| **Proposta enviada** | Cliente analisando | Follow-up em 3 dias |
| **Contratado** | Assinou contrato de honorarios | Iniciar processo |
| **Perdido** | Nao contratou | Registrar motivo |

**Funcionalidades do CRM:**

**Ficha completa do cliente:**
- Dados pessoais e de contato
- Historico de interacoes (ligacoes, emails, reunioes)
- Processos vinculados (ativos e encerrados)
- Status no pipeline de captacao
- Score de satisfacao
- Indicacoes feitas e recebidas
- Preferencia de comunicacao (WhatsApp, email, telefone)

**Follow-up automatizado:**
- Lembrete de follow-up 3 dias apos consulta
- Email de agradecimento apos contratacao
- Pesquisa de satisfacao ao encerrar caso
- Lembrete de datas importantes (aniversario, renovacao de contrato)

**Metricas de captacao:**
- Taxa de conversao (leads → clientes)
- Tempo medio de conversao
- Canal de origem mais efetivo (indicacao, Google, redes sociais)
- Motivos de perda (preco, demora, preferiu outro escritorio)
- Valor medio por cliente novo
- LTV (Lifetime Value) — quanto cada cliente gera ao longo do tempo

**Funcionalidades avancadas:**
- Scoring de leads (priorizar quem tem mais chance de contratar)
- Automacao de emails (sequencia de nurturing)
- Integracao com WhatsApp Business API
- Relatorio de produtividade por advogado

**Por que CRM importa para escritorios:**

A maioria dos escritorios investe pesado em captacao mas nao tem processo formal de follow-up. Resultado: leads esfriando sem contato, consultas sem retorno, clientes insatisfeitos sem feedback. O CRM sistematiza tudo isso.`,
        tips: [
          'O pipeline Kanban visual e a funcionalidade mais impactante do CRM',
          'Follow-up em 3 dias apos consulta aumenta conversao em 40%',
          'Registre o motivo de toda perda — isso revela problemas sistemicos',
          'Pesquisa de satisfacao gera depoimentos para marketing',
          'Comece com pipeline + ficha do cliente; adicione automacoes depois',
        ],
      },
      {
        title: 'Painel de Indicadores',
        subtitle: 'KPIs e metricas para decisoes baseadas em dados',
        level: 'avancado',
        icon: 'trending-up',
        content: `Um **Painel de Indicadores (Dashboard de KPIs)** transforma dados brutos em informacoes estrategicas. Ao inves de "acho que estamos indo bem", voce tem numeros concretos para tomar decisoes.

**KPIs essenciais para escritorios de advocacia:**

**Operacionais:**
- Total de processos ativos
- Novos processos no mes
- Processos encerrados no mes
- Prazos cumpridos vs vencidos (% de compliance)
- Tempo medio de resposta ao cliente
- Processos sem movimentacao ha 30+ dias

**Financeiros:**
- Receita mensal e acumulada no ano
- Ticket medio por processo
- Taxa de inadimplencia (%)
- Honorarios a receber (projecao)
- Custo operacional por processo
- Margem de lucro por area do direito

**Captacao e Clientes:**
- Novos leads no mes
- Taxa de conversao (lead → cliente)
- Canal de origem mais efetivo
- NPS (Net Promoter Score) — satisfacao do cliente
- Taxa de retencao (clientes que voltam)
- Indicacoes recebidas

**Produtividade:**
- Processos por advogado
- Horas trabalhadas por processo (se trackeado)
- Prazos por advogado na semana
- Taxa de sucesso por advogado
- Carga de trabalho (distribuicao)

**Visualizacoes recomendadas:**

| Metrica | Tipo de Grafico |
|---------|-----------------|
| Receita mensal | Grafico de linha (evolucao) |
| Processos por area | Grafico de pizza |
| Status dos processos | Grafico de barras |
| Prazos da semana | Lista com countdown |
| Taxa de conversao | Indicador numerico (gauge) |
| Inadimplencia | Card vermelho com valor |

**Periodo de analise:**

- **Diario:** prazos e tarefas urgentes
- **Semanal:** carga de trabalho e prazos
- **Mensal:** receita, novos clientes, processos
- **Trimestral:** tendencias, metas, planejamento
- **Anual:** resultado geral, benchmark com anos anteriores

**Como usar os dados na pratica:**

Os numeros contam historias. Se a taxa de inadimplencia subiu de 10% para 20%, talvez o escritorio precise revisar a politica de cobranca. Se processos trabalhistas tem margem maior que civeis, talvez valha focar nessa area. Decisoes baseadas em dados, nao em intuicao.`,
        tips: [
          'Comece com 5-6 KPIs — muita informacao paralisa ao inves de ajudar',
          'Revise o dashboard toda segunda-feira como ritual do escritorio',
          'Compare mes atual com mes anterior para identificar tendencias',
          'Defina metas para cada KPI: "taxa de inadimplencia abaixo de 10%"',
          'Use graficos de linha para tendencias e pizza para distribuicoes',
        ],
      },
      {
        title: 'Sistema de Agenda',
        subtitle: 'Audiencias, reunioes e compromissos em calendario visual',
        level: 'intermediario',
        icon: 'clock',
        content: `Um sistema de **agenda digital** integrado ao escritorio elimina conflitos de horario, esquecimentos e a dependencia de agendas fisicas ou Google Calendar avulso.

**Funcionalidades:**

**Calendario Visual:**
- Visao mensal, semanal e diaria
- Cores por tipo de compromisso: audiencia (vermelho), reuniao (azul), prazo (amarelo), pessoal (verde)
- Drag and drop para reagendar
- Clique para criar novo evento
- Mini-calendario no sidebar para navegacao rapida

**Tipos de Eventos:**
- **Audiencias:** processo, vara, tipo (instrucao, conciliacao, julgamento), endereco do foro
- **Reunioes com clientes:** cliente, assunto, local (presencial/online), link da videoconferencia
- **Prazos:** automaticamente importados do sistema de prazos
- **Compromissos internos:** reunioes de equipe, treinamentos, administrativo
- **Bloqueio de horario:** marcar horarios indisponiveis

**Notificacoes:**
- Lembrete 1 dia antes (email)
- Lembrete 2 horas antes (notificacao no app)
- Lembrete 30 minutos antes (notificacao urgente)
- Alerta de conflito de horario ao agendar

**Integracao com processos:**
- Ao cadastrar audiencia, vincular ao processo automaticamente
- Timeline do processo mostra as audiencias
- Possibilidade de marcar resultado da audiencia apos ocorrer

**Visao de equipe:**
- Ver agenda de todos os advogados lado a lado
- Identificar disponibilidade para agendar reunioes
- Distribuir audiencias considerando carga de trabalho
- Filtro por advogado

**Dica pratica:** A funcionalidade mais util no dia a dia e a lista "Proximos Compromissos" no dashboard principal. Ao abrir o app de manha, o advogado ja ve o que tem para o dia.`,
        tips: [
          'Use cores diferentes para cada tipo de compromisso — facilita a visualizacao',
          'Importe prazos automaticamente para o calendario — evita cadastro duplo',
          'Notificacoes por email sao mais confiaveis que apenas no app',
          'A visao de equipe evita conflitos de agenda e sobrecarga',
          'Mantenha o Google Calendar como backup — sincronize manualmente se necessario',
        ],
      },
      {
        title: 'Landing Page do Escritorio',
        subtitle: 'Presenca digital profissional em minutos',
        level: 'iniciante',
        icon: 'globe',
        content: `Uma **landing page** (pagina institucional) e o cartao de visitas digital do escritorio. Quando um potencial cliente busca seu nome no Google, essa e a primeira impressao.

**O que uma boa landing page juridica tem:**

1. **Hero Section:** headline impactante + subtitulo + botao CTA ("Agende uma Consulta")
2. **Areas de Atuacao:** lista das especialidades com icones e descricao breve
3. **Sobre o Escritorio:** historia, valores, diferenciais
4. **Equipe:** foto, nome, OAB e especialidade de cada advogado
5. **Depoimentos:** avaliacoes de clientes satisfeitos
6. **Numeros:** anos de experiencia, processos atendidos, clientes satisfeitos
7. **Contato:** formulario, telefone, email, endereco com mapa
8. **Footer:** links, redes sociais, OAB, LGPD

**Por que criar no Lovable ao inves de Wix/WordPress?**

- **Performance:** apps Lovable sao mais rapidos (React, nao templates pesados)
- **SEO:** codigo limpo e otimizado para buscadores
- **Customizacao total:** sem limitacoes de templates
- **Integracao:** formulario de contato pode salvar direto no Supabase (futuro CRM)
- **Custo:** deploy gratuito no Lovable

**Secoes que convertem:**

A secao de **depoimentos** e a que mais converte visitantes em clientes. Pessoas confiam em outras pessoas. Peca depoimentos reais e destaque-os com foto e nome do cliente (com autorizacao).

A **CTA (chamada para acao)** deve aparecer pelo menos 3 vezes na pagina: no hero, apos areas de atuacao e no footer. Sempre use acao direta: "Agende sua Consulta Gratuita", "Fale com um Advogado", "Resolva seu Problema Agora".`,
        prompt: `Crie uma landing page profissional para o escritorio de advocacia "Silva & Associados" com:

HERO SECTION:
- Fundo com gradiente azul-marinho para branco
- Headline: "Advocacia Especializada com Resultados Comprovados"
- Subtitulo: "Mais de 15 anos defendendo seus direitos com excelencia e dedicacao"
- Botao CTA: "Agende uma Consulta Gratuita" (branco com fundo dourado)
- Botao secundario: "Conheca Nossas Areas"
- Imagem placeholder de escritorio moderno ao lado

AREAS DE ATUACAO (grid 3x2):
- Direito Trabalhista (icone Briefcase)
- Direito Civil (icone Scale)
- Direito de Familia (icone Users)
- Direito do Consumidor (icone Shield)
- Direito Empresarial (icone Building)
- Direito Previdenciario (icone Heart)
Cada area com titulo, icone e descricao de 2 linhas

NUMEROS:
- "500+" processos atendidos
- "15 anos" de experiencia
- "98%" de satisfacao dos clientes
- "50+" clientes ativos
Animacao de contagem ao entrar na viewport

SOBRE:
- Texto sobre o escritorio (missao, visao, valores)
- Foto placeholder do escritorio
- Lista de diferenciais com checkmarks

EQUIPE (3 advogados):
- Foto placeholder circular
- Nome e OAB
- Especialidade
- Breve bio
- Link para LinkedIn

DEPOIMENTOS (carousel 3 depoimentos):
- Foto, nome, cargo
- Texto do depoimento com aspas
- Estrelas de avaliacao (5/5)
- Navegacao com setas e dots

FAQ (accordion com 6 perguntas):
- Como funciona a primeira consulta?
- Quais sao os custos?
- Quanto tempo dura um processo?
- Atendem online?
- Como acompanho meu processo?
- Aceitam parcelamento?

CONTATO:
- Formulario: nome, email, telefone, area de interesse, mensagem
- Mapa placeholder com endereco
- Telefone, email, WhatsApp com icones
- Horario de funcionamento

FOOTER:
- Logo do escritorio
- Links rapidos
- Redes sociais
- OAB/seccional
- Politica de privacidade (LGPD)

DESIGN:
- Paleta: azul-marinho (#1E293B), dourado (#C5A23E), branco, cinza claro
- Fonte: Plus Jakarta Sans para titulos, Inter para corpo
- Scroll suave entre secoes
- Animacoes de entrada ao rolar (fade up)
- Totalmente responsivo
- Header fixo com transparencia que fica solido ao rolar`,
        tips: [
          'A landing page e seu melhor vendedor — invista tempo no conteudo',
          'Depoimentos reais convertem mais que qualquer texto de marketing',
          'CTA "Agende uma Consulta Gratuita" converte melhor que "Fale Conosco"',
          'Faca deploy e compartilhe o link em todas as redes sociais',
          'Adicione pixel do Google Analytics para medir resultados',
        ],
      },
      {
        title: 'Blog Juridico',
        subtitle: 'Conteudo que atrai clientes e consolida autoridade',
        level: 'intermediario',
        icon: 'scroll-text',
        content: `Um **blog juridico** e a melhor estrategia de marketing de conteudo para advogados. Artigos sobre duvidas comuns dos clientes atraem trafego organico do Google e posicionam voce como autoridade.

**Funcionalidades do blog:**

**Pagina de listagem:**
- Grid de cards com imagem, titulo, resumo, data e autor
- Filtro por categoria (trabalhista, civil, familia, etc.)
- Busca por texto
- Paginacao ou infinite scroll
- Post em destaque (fixo no topo)

**Pagina do artigo:**
- Titulo grande e impactante
- Imagem de capa
- Autor com foto, nome e bio
- Data de publicacao e tempo de leitura estimado
- Conteudo formatado (headings, listas, bold, links)
- Indice do artigo (table of contents) lateral
- Botoes de compartilhar (WhatsApp, LinkedIn, Twitter)
- CTA no final: "Precisa de orientacao? Agende uma consulta"
- Artigos relacionados

**Area administrativa:**
- Criar e editar artigos com editor rich text
- Gerenciar categorias e tags
- Agendar publicacao futura
- Rascunhos e revisao
- Metricas: visualizacoes por artigo

**SEO (otimizacao para Google):**
- URL amigavel (/blog/direitos-do-trabalhador-demitido)
- Meta title e meta description customizaveis
- Open Graph tags (preview bonito ao compartilhar)
- Sitemap automatico
- Schema markup para artigos (rich snippets no Google)

**Temas de artigos que mais atraem clientes:**

| Area | Tema | Volume de busca |
|------|------|-----------------|
| Trabalhista | "Fui demitido, quais meus direitos?" | Alto |
| Familia | "Como funciona a guarda compartilhada?" | Alto |
| Consumidor | "Produto com defeito, o que fazer?" | Medio |
| Previdenciario | "Como calcular minha aposentadoria?" | Alto |
| Civil | "Indenizacao por dano moral" | Medio |

**Frequencia recomendada:** 1-2 artigos por semana. Consistencia e mais importante que volume.`,
        tips: [
          'Escreva artigos respondendo as perguntas que seus clientes mais fazem',
          'Use titulos em formato de pergunta — e como as pessoas buscam no Google',
          'Sempre termine com CTA para agendar consulta',
          'Compartilhe no LinkedIn e WhatsApp semanalmente',
          'Artigos longos (2000+ palavras) ranqueiam melhor no Google',
        ],
      },
      {
        title: 'Checklist de Audiencia',
        subtitle: 'Preparacao sistematica para audiencias',
        level: 'iniciante',
        icon: 'check-circle',
        content: `Um app de **checklist de audiencia** e simples de criar e extremamente util no dia a dia. Garante que voce nunca esqueca um documento ou preparacao antes de uma audiencia.

**Funcionalidades:**

**Checklists por tipo de audiencia:**

- **Instrucao:** testemunhas confirmadas, documentos originais, rol de testemunhas, perguntas preparadas, minuta de sentenca
- **Conciliacao:** proposta de acordo definida, limites de negociacao, procuracao com poderes especiais, documentos comprobatorios
- **Julgamento:** memorial preparado, sustentacao oral ensaiada, precedentes impressos, documentos complementares

**Cada item do checklist tem:**
- Checkbox (concluido/pendente)
- Descricao do item
- Prazo para conclusao (ex: "ate 2 dias antes da audiencia")
- Responsavel (advogado, estagiario, secretaria)
- Observacoes

**Template reusavel:**

Crie templates por tipo de audiencia. Ao agendar uma nova audiencia, aplique o template correspondente e personalize conforme o caso. Isso garante padronizacao e nao esquece nenhum item.

**Checklist basico universal (funciona para qualquer audiencia):**

- Procuracao original com poderes especiais
- Documentos do processo (copia completa ou relevante)
- Identificacao pessoal do cliente
- Endereco e horario da vara confirmados
- Contato do cliente atualizado
- Testemunhas confirmadas (se aplicavel)
- Proposta de acordo definida (se conciliacao)
- Peticoes previas para protocolo (se necessario)
- Celular carregado (para consulta de jurisprudencia)
- Vestimenta adequada do cliente orientada

Este app e perfeito para o plano Free do Lovable — e simples, nao precisa de banco de dados e pode ser criado em uma unica interacao.`,
        tips: [
          'Crie templates por tipo de audiencia e reutilize',
          'Compartilhe o checklist com o estagiario para dividir a preparacao',
          'Adicione lembretes automaticos vinculados a data da audiencia',
          'Revise o checklist na noite anterior — nunca na manha do dia',
          'Mantenha uma versao impressa como backup (nunca dependa so do digital)',
        ],
      },
      {
        title: 'Formulario de Atendimento Inicial',
        subtitle: 'Capture informacoes do cliente antes da primeira reuniao',
        level: 'iniciante',
        icon: 'file-text',
        content: `O **formulario de atendimento inicial** e o primeiro contato estruturado entre o potencial cliente e o escritorio. Ele captura informacoes essenciais ANTES da primeira reuniao, economizando tempo e permitindo que o advogado ja chegue preparado.

**Por que usar um formulario online:**

- Cliente preenche no horario que quiser (nao precisa ligar no horario comercial)
- Informacoes padronizadas (nao esquece de perguntar nada)
- Dados ja digitalizados (nao precisa digitar depois)
- Triagem automatica (identificar urgencia e area do direito)
- Impressao profissional ("esse escritorio e organizado")

**Campos essenciais:**

**Dados Pessoais:**
- Nome completo, CPF, telefone, email
- Cidade e estado
- Como conheceu o escritorio

**Informacoes do Caso:**
- Area do direito (dropdown)
- Breve descricao do problema (textarea)
- Ja consultou outro advogado? (sim/nao)
- Tem documentos do caso? (sim/nao)
- Grau de urgencia (baixa, media, alta, urgentissima)

**Disponibilidade:**
- Prefere atendimento presencial ou online?
- Melhor dia da semana
- Melhor horario

**Termos:**
- Checkbox: "Autorizo o contato por WhatsApp/email"
- Checkbox: "Li e concordo com a politica de privacidade"

**O que acontece apos o envio:**

1. Cliente ve tela de confirmacao: "Recebemos suas informacoes! Entraremos em contato em ate 24 horas."
2. Advogado recebe notificacao (email ou no app) com os dados do formulario
3. Dados sao salvos no Supabase como novo lead no CRM
4. Se urgencia = "urgentissima", alerta especial ao advogado

**Dica de ouro:** Publique o formulario com link permanente e adicione em todo lugar: site, assinatura de email, cartao de visitas (QR code), redes sociais, Google Meu Negocio.`,
        prompt: `Crie um formulario de atendimento inicial elegante e profissional para potenciais clientes:

DESIGN:
- Pagina unica com fundo claro e card branco centralizado
- Logo do escritorio no topo (placeholder "Silva & Associados")
- Titulo: "Atendimento Inicial"
- Subtitulo: "Preencha o formulario abaixo e entraremos em contato em ate 24 horas"
- Barra de progresso mostrando etapas (3 etapas)
- Design limpo, profissional, acolhedor
- Totalmente responsivo para mobile

ETAPA 1 - Dados Pessoais:
- Nome completo (obrigatorio)
- CPF (mascara, validacao)
- Email (obrigatorio, validacao)
- Telefone/WhatsApp (mascara, obrigatorio)
- Cidade e Estado (dropdowns)
- Como conheceu o escritorio (dropdown: Google, indicacao, redes sociais, OAB, outro)

ETAPA 2 - Sobre o Caso:
- Area do direito (dropdown: trabalhista, civil, familia, consumidor, criminal, previdenciario, empresarial, tributario, outro)
- Descricao do caso (textarea, max 2000 caracteres, com contador)
- Ja consultou outro advogado sobre este caso? (radio: sim, nao)
- Possui documentos relacionados ao caso? (radio: sim, nao, nao sei)
- Qual o nivel de urgencia? (radio com cores: baixa-verde, media-amarelo, alta-laranja, urgente-vermelho)

ETAPA 3 - Disponibilidade e Termos:
- Preferencia de atendimento (radio: presencial, online, tanto faz)
- Melhor dia da semana (multi-select: seg a sab)
- Melhor horario (dropdown: manha, tarde, noite)
- Checkbox: "Autorizo o contato via WhatsApp e email" (obrigatorio)
- Checkbox: "Li e concordo com a Politica de Privacidade" (obrigatorio, com link)
- Checkbox: "Desejo receber informacoes juridicas por email" (opcional)

COMPORTAMENTO:
- Navegacao entre etapas com botoes Voltar/Proximo
- Validacao por etapa (nao avanca se campos obrigatorios vazios)
- Etapa atual destacada na barra de progresso
- Ao enviar: animacao de sucesso + tela de confirmacao
- Tela de confirmacao: "Obrigado! Recebemos suas informacoes. Nossa equipe entrara em contato em ate 24 horas uteis. Protocolo: #XXXXX"
- Gerar numero de protocolo unico

SUPABASE:
- Salvar todas as respostas na tabela "atendimentos_iniciais"
- Campo status: "novo" por padrao
- Trigger: enviar email de notificacao ao advogado responsavel

SEM LOGIN:
- Este formulario e publico — nao requer autenticacao
- Proteger contra spam com rate limiting ou captcha simples`,
        tips: [
          'O formulario em etapas converte mais que um formulario longo unico',
          'Campo de urgencia ajuda a priorizar atendimentos',
          'Publique o link em TODOS os canais: site, email, redes, Google',
          'Responda em menos de 24h — velocidade de resposta converte clientes',
          'Gere um protocolo unico para dar sensacao de profissionalismo ao cliente',
        ],
      },
      {
        title: 'App Multi-Escritorio (SaaS)',
        subtitle: 'Uma plataforma, multiplos escritorios — o proximo nivel',
        level: 'expert',
        icon: 'building',
        content: `O **app multi-escritorio (multi-tenant)** e o nivel mais avancado: uma unica plataforma que atende varios escritorios de advocacia, cada um com seus dados completamente isolados. E o modelo SaaS (Software as a Service) — voce cria a plataforma e cobra uma assinatura mensal de cada escritorio.

**O que e multi-tenancy?**

Imagine um predio comercial: cada escritorio (andar) tem seus proprios clientes, processos e documentos, mas todos compartilham a mesma infraestrutura (elevadores, recepcao, internet). Multi-tenancy e isso no software.

**Arquitetura multi-tenant no Supabase:**

| Abordagem | Descricao | Complexidade |
|-----------|-----------|-------------|
| **RLS por organizacao** | Uma tabela com coluna org_id, RLS filtra por org | Media |
| **Schema por tenant** | Schema separado para cada escritorio | Alta |
| **Banco separado** | Projeto Supabase separado por escritorio | Muito alta |

**Recomendacao: RLS por organizacao (mais simples e eficiente)**

Adicione a coluna \`organizacao_id\` em TODAS as tabelas. O RLS garante que usuarios de um escritorio nunca veem dados de outro.

**Funcionalidades especificas do SaaS:**

**Painel de Administracao (Super Admin):**
- Lista de escritorios cadastrados
- Metricas por escritorio: usuarios, processos, storage usado
- Gerenciamento de planos e cobranca
- Suporte e comunicacao com escritorios

**Onboarding do escritorio:**
- Cadastro do escritorio (nome, CNPJ, OAB seccional)
- Convite de usuarios (advogados, estagiarios)
- Configuracao inicial (logo, cores, dados)
- Wizard de importacao de dados

**White-label:**
- Cada escritorio pode personalizar: logo, cores, nome da plataforma
- Dominio personalizado (opcional): meusistema.silvaadvogados.com.br
- Email com remetente personalizado

**Monetizacao:**

| Plano | Preco | Inclui |
|-------|-------|--------|
| Basico | R$ 99/mes | 2 usuarios, 100 processos |
| Profissional | R$ 249/mes | 10 usuarios, ilimitado |
| Enterprise | R$ 499/mes | Ilimitado + white-label + suporte |

**Aviso importante:** Este e um projeto COMPLEXO que exige planejamento extenso. Use Plan Mode para validar toda a arquitetura antes de comecar a construir. Considere contratar um desenvolvedor para evoluir o projeto apos o prototipo no Lovable.

**Viabilidade como negocio:**

Com 50 escritorios pagando R$ 249/mes, voce tem R$ 12.450/mes de receita recorrente. O custo de infraestrutura (Supabase Pro + hosting) fica em torno de R$ 200-500/mes. A margem e altamente atrativa para uma legaltech.`,
        tips: [
          'Este e um projeto para DEPOIS de dominar o Lovable — nao comece por aqui',
          'Use Plan Mode extensivamente antes de implementar qualquer coisa',
          'RLS por organizacao e a abordagem mais viavel no Lovable + Supabase',
          'Valide a ideia com 5-10 escritorios antes de investir em desenvolvimento completo',
          'Considere contratar um desenvolvedor para evoluir o prototipo do Lovable',
        ],
      },
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // SEÇÃO 6: INTEGRAÇÕES
  // ═══════════════════════════════════════════════════════════
  {
    id: 'integracoes',
    title: 'Integrações',
    description: 'Conecte seu app ao mundo real',
    icon: 'plug',
    cards: [
      {
        title: 'Stripe: Cobrando Honorários Online',
        subtitle: 'Pagamentos com cartão, parcelamento e recibos automáticos',
        level: 'intermediario',
        icon: 'credit-card',
        analogy: {
          title: 'O Caixa Digital do Escritório',
          central: 'Maquina de cartao profissional 24h',
          description: 'O Stripe e como ter uma maquina de cartao profissional na recepcao do seu escritorio — so que funciona 24h, aceita qualquer bandeira, parcela automaticamente e ainda gera o recibo sem voce precisar pedir.',
        },
        content: `Cobrar honorarios online e essencial para escritorios modernos. O Stripe e a plataforma de pagamentos mais usada por apps SaaS no mundo, e o Lovable tem integracao direta com ele via Supabase Edge Functions.

**Por que Stripe para escritorios de advocacia?**

| Vantagem | Detalhe |
|----------|---------|
| **Parcelamento** | Ate 12x no cartao de credito |
| **Recorrencia** | Cobrancas mensais automaticas (retainers) |
| **Boleto** | Sim, Stripe aceita boleto bancario no Brasil |
| **PIX** | Disponivel via Stripe no Brasil |
| **Recibos** | Gerados automaticamente apos cada pagamento |
| **Dashboard** | Painel completo de receitas, inadimplencia e previsoes |

**Como funciona a integracao:**

O fluxo e simples: seu app no Lovable exibe o valor dos honorarios, o cliente clica em "Pagar", e redirecionado ao checkout do Stripe (seguro, com certificacao PCI), paga, e o Stripe notifica seu app via webhook. O status do caso e atualizado automaticamente.

**Configuracao tecnica:**

Voce precisara de:
1. Uma conta no Stripe (stripe.com) — gratuita para criar
2. As chaves de API (publica e secreta) do Stripe
3. Uma Edge Function no Supabase para criar a sessao de checkout
4. Um webhook para receber a confirmacao de pagamento

**Tabela de honorarios no banco:**

\`\`\`sql
create table honorarios (
  id uuid default gen_random_uuid() primary key,
  caso_id uuid references casos(id),
  cliente_id uuid references clientes(id),
  valor decimal(10,2) not null,
  parcelas integer default 1,
  status text default 'pendente',
  stripe_payment_id text,
  stripe_checkout_url text,
  pago_em timestamp with time zone,
  created_at timestamp with time zone default now()
);
\`\`\`

**Edge Function para criar checkout:**

No Supabase, crie uma Edge Function que recebe o \`honorario_id\`, busca o valor no banco, e cria uma Stripe Checkout Session. O Lovable pode chamar essa funcao diretamente via \`supabase.functions.invoke()\`.`,
        prompt: `Crie uma pagina de pagamento de honorarios advocaticios com integracao Stripe. A pagina deve:

1. Listar os honorarios pendentes do cliente logado (tabela "honorarios" no Supabase)
2. Exibir para cada honorario: numero do caso, descricao, valor total, opcao de parcelamento (1x, 3x, 6x, 12x)
3. Botao "Pagar" que chama uma Supabase Edge Function para criar uma Stripe Checkout Session
4. Apos o pagamento, atualizar o status do honorario para "pago" via webhook
5. Exibir historico de pagamentos realizados com data, valor e comprovante

Use shadcn/ui Card para cada honorario, Badge para status (pendente=amarelo, pago=verde, vencido=vermelho), e um layout responsivo. Inclua um resumo financeiro no topo com: total pendente, total pago no mes, e proximo vencimento.`,
        tips: [
          'Use o modo teste do Stripe (chaves comecando com sk_test_) durante o desenvolvimento',
          'Nunca coloque a chave secreta do Stripe no codigo do frontend — sempre use Edge Functions',
          'Configure webhooks no Stripe Dashboard apontando para sua Edge Function de callback',
          'Ative notificacoes por email do Stripe para cada pagamento recebido',
          'Para escritorios com multiplos advogados, configure split payments no Stripe Connect',
        ],
        steps: [
          'Crie uma conta gratuita em stripe.com e acesse o Dashboard',
          'Copie as chaves de API (modo teste) em Developers > API Keys',
          'No Supabase, va em Edge Functions e crie "create-checkout-session"',
          'Adicione as chaves do Stripe como secrets no Supabase: STRIPE_SECRET_KEY',
          'No Lovable, crie a pagina de pagamentos com o prompt fornecido',
          'Configure o webhook no Stripe apontando para sua Edge Function de callback',
          'Teste com cartao de teste 4242 4242 4242 4242 (qualquer data futura, qualquer CVV)',
          'Apos validar, troque para chaves de producao no Stripe Dashboard',
        ],
        flowSteps: [
          { label: 'Cliente Acessa', description: 'Abre a pagina de honorarios no app' },
          { label: 'Escolhe Pagamento', description: 'Seleciona parcelas e clica em Pagar' },
          { label: 'Stripe Checkout', description: 'Redirecionado para checkout seguro' },
          { label: 'Pagamento Confirmado', description: 'Webhook atualiza o banco automaticamente' },
          { label: 'Recibo Gerado', description: 'Cliente e escritorio recebem comprovante' },
        ],
      },
      {
        title: 'Stripe: Assinaturas Recorrentes',
        subtitle: 'Modelo de cobranca mensal para consultorias e contencioso de massa',
        level: 'avancado',
        icon: 'dollar-sign',
        analogy: {
          title: 'O Carne Digital',
          central: 'Cobranca automatica mensal',
          description: 'Assinaturas recorrentes funcionam como um carne digital inteligente — o cliente autoriza uma vez e o pagamento cai todo mes, sem atraso, sem boleto perdido, sem ligacao de cobranca.',
        },
        content: `Muitos escritorios trabalham com **honorarios mensais fixos** — consultoria empresarial, compliance, contencioso de massa. O Stripe Subscriptions automatiza completamente esse fluxo.

**Modelos de negocio para escritorios:**

| Modelo | Exemplo | Preco Sugerido |
|--------|---------|----------------|
| **Consultoria Basica** | Ate 5 consultas/mes | R$ 1.500/mes |
| **Consultoria Premium** | Consultas ilimitadas + pareceres | R$ 5.000/mes |
| **Contencioso de Massa** | Gestao de carteira de processos | R$ 2.000/mes por lote |
| **Compliance** | Auditoria mensal + relatorios | R$ 3.000/mes |
| **Plano Empresa** | Assessoria juridica completa | R$ 10.000/mes |

**Como implementar no Lovable:**

O Stripe permite criar **Products** (seus planos) e **Prices** (valores mensais/anuais). Cada cliente que assina vira um \`Subscription\` no Stripe. Voce monitora o status via webhook: \`active\`, \`past_due\`, \`canceled\`.

**Tabela de assinaturas no Supabase:**

\`\`\`sql
create table assinaturas (
  id uuid default gen_random_uuid() primary key,
  cliente_id uuid references clientes(id),
  plano text not null,
  valor_mensal decimal(10,2) not null,
  stripe_subscription_id text,
  stripe_customer_id text,
  status text default 'active',
  inicio date not null,
  proximo_vencimento date,
  created_at timestamp with time zone default now()
);
\`\`\`

**Metricas importantes:**
- **MRR** (Monthly Recurring Revenue): receita mensal recorrente
- **Churn**: taxa de cancelamento mensal
- **LTV**: valor total que cada cliente gera ao longo do tempo`,
        tips: [
          'Ofereca desconto para pagamento anual (ex: 10 meses pelo preco de 12)',
          'Configure o dunning (tentativas automaticas) no Stripe para inadimplencia',
          'Use o Customer Portal do Stripe para o cliente gerenciar sua propria assinatura',
          'Crie uma pagina de pricing com 3 planos (estrategia de ancoragem de preco)',
          'Monitore o churn mensal — acima de 5% e sinal de alerta',
        ],
        refTable: [
          { feature: 'Plano Basico', description: 'Consultoria pontual — ate 5 consultas/mes', config: 'Stripe Product' },
          { feature: 'Plano Premium', description: 'Assessoria completa — consultas ilimitadas', config: 'Stripe Product' },
          { feature: 'Plano Enterprise', description: 'Empresa com equipe — SLA dedicado', config: 'Stripe Product' },
        ],
      },
      {
        title: 'GitHub: Versionamento do App',
        subtitle: 'Conecte seu projeto Lovable ao GitHub e nunca perca codigo',
        level: 'intermediario',
        icon: 'git-branch',
        analogy: {
          title: 'O Cartorio Digital do Codigo',
          central: 'Registro historico de cada versao',
          description: 'O GitHub e como um cartorio que registra cada versao do seu app — cada alteracao fica registrada com data, hora e descricao. Se algo der errado, voce volta no tempo para a versao anterior, como restaurar um backup notarizado.',
        },
        content: `O Lovable tem integracao nativa com o GitHub. Toda vez que voce faz uma alteracao no app, o Lovable pode enviar automaticamente o codigo para um repositorio no GitHub. Isso garante:

**Por que conectar ao GitHub:**

| Beneficio | Explicacao |
|-----------|-----------|
| **Backup completo** | Codigo salvo fora do Lovable, na sua conta |
| **Historico** | Cada alteracao registrada com data e descricao |
| **Reversao** | Voltar para qualquer versao anterior do app |
| **Colaboracao** | Outros desenvolvedores podem contribuir |
| **Sync bidirecional** | Editar no GitHub e sincronizar de volta ao Lovable |

**Como conectar:**

No Lovable, acesse as configuracoes do projeto (icone de engrenagem no sidebar). Na secao "GitHub", clique em "Connect to GitHub". O Lovable pedira autorizacao para acessar sua conta do GitHub e criara automaticamente um repositorio com todo o codigo do seu app.

**Sync bidirecional:**

O Lovable suporta sync nos dois sentidos:
- **Lovable → GitHub**: Cada alteracao no Lovable gera um commit automatico
- **GitHub → Lovable**: Se voce (ou um dev) editar o codigo direto no GitHub, o Lovable detecta e atualiza

**Estrutura do repositorio:**

\`\`\`
meu-app-juridico/
├── src/
│   ├── components/     # Componentes React
│   ├── pages/          # Paginas do app
│   ├── hooks/          # Logica reutilizavel
│   ├── lib/            # Utilitarios
│   └── integrations/   # Supabase, APIs
├── public/             # Arquivos estaticos
├── package.json        # Dependencias
└── tailwind.config.ts  # Configuracao visual
\`\`\``,
        steps: [
          'Crie uma conta gratuita no GitHub (github.com) se ainda nao tem',
          'No Lovable, abra seu projeto e clique no icone de engrenagem (Settings)',
          'Na secao "GitHub", clique em "Connect to GitHub"',
          'Autorize o Lovable a acessar sua conta do GitHub',
          'O Lovable criara automaticamente um repositorio com seu codigo',
          'A partir de agora, cada alteracao no Lovable gera um commit no GitHub',
          'Para sync reverso: edite no GitHub e o Lovable detectara as mudancas',
          'Verifique o repositorio acessando github.com/seu-usuario/seu-projeto',
        ],
        tips: [
          'Mantenha o GitHub conectado desde o primeiro dia do projeto',
          'Use o GitHub como backup — mesmo que nunca edite codigo diretamente',
          'Se precisar contratar um dev, compartilhe o repositorio do GitHub (nao a conta do Lovable)',
          'O GitHub e gratuito para repositorios publicos e privados',
        ],
      },
      {
        title: 'Resend: Emails Automaticos',
        subtitle: 'Notificacoes por email para prazos, audiencias e documentos',
        level: 'intermediario',
        icon: 'mail',
        analogy: {
          title: 'A Secretaria que Nunca Esquece',
          central: 'Envio automatico de lembretes',
          description: 'O Resend e como uma secretaria incansavel que envia emails de lembrete para cada prazo, cada audiencia, cada documento disponivel — sem voce precisar pedir, sem esquecer nenhum cliente.',
        },
        content: `Emails automaticos transformam seu app de uma ferramenta passiva em um sistema ativo de comunicacao. O Resend e o servico de email recomendado pelo Lovable por sua simplicidade e confiabilidade.

**Tipos de email para escritorios:**

| Tipo | Quando Enviar | Para Quem |
|------|--------------|-----------|
| **Prazo proximo** | 5, 3 e 1 dia antes do vencimento | Advogado responsavel |
| **Audiencia agendada** | 7 dias e 1 dia antes | Advogado + cliente |
| **Documento disponivel** | Quando um doc e adicionado ao caso | Cliente |
| **Pagamento recebido** | Apos confirmacao do Stripe | Cliente + financeiro |
| **Novo caso aberto** | Na criacao do caso | Equipe do escritorio |
| **Relatorio semanal** | Toda segunda-feira | Socios |

**Como funciona:**

1. Crie uma conta no Resend (resend.com) — 3.000 emails/mes gratuitos
2. Configure seu dominio de email (opcional, mas profissional)
3. Crie uma Edge Function no Supabase que chama a API do Resend
4. Configure triggers no banco que disparam os emails nos momentos certos`,
        prompt: `Crie um sistema de notificacoes por email para um escritorio de advocacia. Preciso de:

1. Uma pagina de configuracoes de notificacoes onde o advogado escolhe quais emails receber (prazo proximo, audiencia agendada, documento novo, pagamento recebido)
2. Cada notificacao deve ter um toggle on/off e opcao de antecedencia (para prazos: 1, 3, 5 ou 7 dias antes)
3. Uma tabela "notificacoes_config" no Supabase com: user_id, tipo_notificacao, ativo, antecedencia_dias
4. Uma tabela "notificacoes_enviadas" com: user_id, tipo, destinatario_email, assunto, enviado_em, status
5. Um log de notificacoes enviadas com filtro por tipo e data
6. Use shadcn/ui Switch para os toggles, Select para antecedencia, e Table para o historico

O layout deve ter duas abas: "Configuracoes" e "Historico de Envios".`,
        tips: [
          'O Resend oferece 3.000 emails/mes gratis — suficiente para escritorios pequenos',
          'Configure um dominio proprio (notificacoes@seuescritorio.com.br) para profissionalismo',
          'Sempre inclua um link de "descadastrar" no rodape dos emails (exigencia legal)',
          'Teste os emails em diferentes clientes (Gmail, Outlook, Yahoo) antes de ativar',
          'Use templates HTML responsivos — muitos clientes leem no celular',
        ],
        flowSteps: [
          { label: 'Trigger', description: 'Evento no banco: prazo criado, audiencia agendada, etc.' },
          { label: 'Edge Function', description: 'Busca dados, monta email com template' },
          { label: 'Resend API', description: 'Envia o email formatado ao destinatario' },
          { label: 'Log', description: 'Registro do envio salvo na tabela de historico' },
        ],
      },
      {
        title: 'Webhooks e APIs Externas',
        subtitle: 'Conecte seu app a APIs juridicas: DataJud, CNPJ, CEP',
        level: 'avancado',
        icon: 'network',
        analogy: {
          title: 'O Boy Digital',
          central: 'Mensageiro automatico entre sistemas',
          description: 'Um webhook e como um boy do escritorio que fica na porta do forum esperando novidades — quando sai uma decisao, ele corre de volta ao escritorio e avisa todo mundo. Seu app fica esperando eventos e reage automaticamente.',
        },
        content: `APIs externas permitem que seu app consulte dados em tempo real de sistemas juridicos, cadastros publicos e servicos governamentais. Webhooks permitem que esses sistemas notifiquem seu app quando algo acontece.

**APIs uteis para escritorios:**

| API | O que Faz | Uso Pratico |
|-----|----------|-------------|
| **DataJud (CNJ)** | Consulta de processos | Buscar andamento processual automaticamente |
| **ReceitaWS** | Consulta CNPJ | Preencher dados da empresa ao cadastrar cliente PJ |
| **ViaCEP** | Consulta CEP | Preencher endereco automaticamente |
| **BrasilAPI** | Dados publicos diversos | CPF, CNPJ, CEP, feriados, bancos |
| **TJSP/TJRJ APIs** | Consulta local | Andamentos no tribunal estadual |

**Seguranca:**
Sempre valide a origem dos webhooks usando assinaturas (webhook signatures). Nunca confie em dados recebidos sem verificacao.`,
        tips: [
          'Use BrasilAPI para consultas rapidas de CNPJ e CEP — e gratuita e confiavel',
          'Para APIs que exigem chave, sempre use Edge Functions (nunca exponha chaves no frontend)',
          'Configure retry automatico para webhooks que falham (o Stripe faz isso nativamente)',
          'Mantenha um log de todos os webhooks recebidos para auditoria',
          'Teste webhooks localmente usando o Stripe CLI ou ferramentas como webhook.site',
        ],
        elementGrid: [
          { icon: 'search', title: 'APIs de Consulta', description: 'Buscam dados em tempo real: CNPJ, CEP, processos. Use para preencher formularios automaticamente.' },
          { icon: 'bell', title: 'Webhooks', description: 'Recebem notificacoes quando algo acontece externamente. Ideal para pagamentos e atualizacoes de status.', highlight: true },
          { icon: 'shield', title: 'Edge Functions', description: 'Intermediam chamadas com seguranca. Use para APIs que exigem autenticacao ou processamento.' },
        ],
      },
      {
        title: 'WhatsApp API',
        subtitle: 'Notificacoes de prazos, atualizacoes e cobrancas pelo WhatsApp',
        level: 'avancado',
        icon: 'phone',
        analogy: {
          title: 'O Grupo do Escritorio Automatizado',
          central: 'Mensagens automaticas pelo WhatsApp',
          description: 'Imagine um grupo de WhatsApp profissional onde as mensagens sao enviadas automaticamente pelo sistema — prazo vencendo? WhatsApp. Audiencia amanha? WhatsApp. Pagamento confirmado? WhatsApp. Sem ninguem precisar lembrar.',
        },
        content: `O WhatsApp e o canal de comunicacao mais usado no Brasil. Integrar seu app com a API oficial do WhatsApp Business permite enviar notificacoes automaticas para clientes e advogados.

**Tipos de notificacao via WhatsApp:**

| Notificacao | Momento | Template de Mensagem |
|-------------|---------|---------------------|
| **Prazo vencendo** | 3 dias antes | "Prezado(a), o prazo para [acao] no processo [n] vence em 3 dias." |
| **Audiencia agendada** | 1 dia antes | "Lembrete: audiencia amanha as [hora] no [local]." |
| **Documento pronto** | Ao anexar | "Um novo documento foi adicionado ao seu caso. Acesse: [link]" |
| **Pagamento confirmado** | Apos webhook | "Pagamento de R$ [valor] recebido. Obrigado!" |
| **Caso atualizado** | Mudanca de status | "Seu caso [n] teve uma atualizacao. Acesse para detalhes." |

**Provedores de API WhatsApp:**

| Provedor | Preco | Facilidade |
|----------|-------|-----------|
| **Twilio** | ~R$ 0,40/msg | Alta, boa documentacao |
| **Meta (oficial)** | Variavel | Media, aprovacao demorada |
| **Z-API** | ~R$ 0,15/msg | Alta, popular no Brasil |
| **Evolution API** | Open source | Requer hospedagem propria |

**Consideracoes legais:**
- O cliente DEVE autorizar o recebimento (LGPD)
- Use apenas templates aprovados pelo provedor
- Inclua opcao de "parar de receber" em toda mensagem
- Nao envie mensagens comerciais fora do horario comercial`,
        tips: [
          'Comece com o Twilio — e o mais facil de integrar e tem boa documentacao',
          'Sempre peca opt-in do cliente antes de enviar qualquer mensagem',
          'Limite notificacoes a 2-3 por semana para nao ser bloqueado',
          'Use a Z-API se quiser uma opcao mais barata e brasileira',
          'Templates de mensagem precisam ser aprovados — envie para aprovacao com antecedencia',
        ],
      },
      {
        title: 'Google Calendar API',
        subtitle: 'Sincronize audiencias e prazos com a agenda do advogado',
        level: 'avancado',
        icon: 'calendar',
        analogy: {
          title: 'A Agenda que se Preenche Sozinha',
          central: 'Sincronizacao automatica de compromissos',
          description: 'Integrar com o Google Calendar e como ter uma secretaria que atualiza sua agenda em tempo real — cadastrou uma audiencia no app? Ja aparece no seu Google Calendar com data, hora, local e link do processo.',
        },
        content: `A maioria dos advogados brasileiros usa o Google Calendar como agenda principal. Sincronizar seu app juridico com o Calendar significa que audiencias, prazos e reunioes aparecem automaticamente na agenda do advogado.

**O que sincronizar:**

| Evento | Cor no Calendar | Lembrete |
|--------|----------------|---------|
| **Audiencia** | Vermelho | 1 dia + 2 horas antes |
| **Prazo fatal** | Laranja | 5 dias + 3 dias + 1 dia antes |
| **Prazo ordinario** | Amarelo | 3 dias + 1 dia antes |
| **Reuniao com cliente** | Azul | 1 dia + 1 hora antes |
| **Diligencia** | Verde | 1 dia antes |

**Sincronizacao bidirecional:**
Opcionalmente, voce pode configurar o sync bidirecional — se o advogado editar o evento no Calendar, o app e notificado via webhook e atualiza o banco.`,
        tips: [
          'Use cores diferentes para cada tipo de evento — facilita a visualizacao',
          'Configure lembretes automaticos conforme a urgencia do compromisso',
          'Crie um calendario separado (ex: "Escritorio Juridico") para nao misturar com compromissos pessoais',
          'Teste a integracao com uma conta Google de teste antes de conectar a conta principal',
          'O OAuth2 do Google exige verificacao do app — use modo teste durante o desenvolvimento',
        ],
      },
      {
        title: 'Gerando PDFs',
        subtitle: 'Contratos, procuracoes e propostas gerados automaticamente',
        level: 'intermediario',
        icon: 'file-text',
        analogy: {
          title: 'A Grafica do Escritorio',
          central: 'Geracao automatica de documentos',
          description: 'Gerar PDFs automaticamente e como ter uma grafica interna no escritorio — o sistema preenche o modelo, formata, pagina e entrega o documento pronto para impressao ou envio por email.',
        },
        content: `Documentos PDF sao essenciais na advocacia: contratos, procuracoes, propostas de honorarios, relatorios. No Lovable, voce pode gerar PDFs automaticamente a partir dos dados do seu app.

**Documentos para gerar automaticamente:**

| Documento | Dados do Banco | Quando Gerar |
|-----------|---------------|-------------|
| **Contrato de honorarios** | Cliente, valores, clausulas | Ao fechar novo caso |
| **Procuracao ad judicia** | Cliente, advogado, poderes | Ao iniciar representacao |
| **Proposta de honorarios** | Servicos, valores, condicoes | Na prospeccao |
| **Relatorio de caso** | Andamentos, decisoes, prazos | Mensal ou sob demanda |
| **Recibo de pagamento** | Valor, data, dados fiscais | Apos cada pagamento |

**Biblioteca recomendada: jsPDF + html2canvas**

A forma mais simples de gerar PDFs no Lovable e renderizar o documento como HTML, capturar com \`html2canvas\` e converter para PDF com \`jsPDF\`. Assim voce usa os mesmos componentes React para a versao visual e o PDF.

**Abordagem alternativa: @react-pdf/renderer**

Para documentos mais complexos com paginacao precisa, use \`@react-pdf/renderer\`.`,
        prompt: `Crie um gerador de PDF de proposta de honorarios advocaticios. Preciso de:

1. Um formulario para preencher: nome do cliente, CPF/CNPJ, tipo de servico (select com opcoes: consultivo, contencioso, trabalhista, tributario), descricao do servico, valor total, numero de parcelas, observacoes
2. Um componente de preview que mostra como ficara a proposta antes de gerar o PDF
3. O preview deve ter: cabecalho com logo do escritorio, dados do cliente, descricao dos servicos, tabela de valores com parcelas, clausulas padrao, local e data, campo de assinatura
4. Botao "Gerar PDF" que usa jsPDF ou @react-pdf/renderer para criar o arquivo
5. Botao "Enviar por Email" que dispara o envio via Resend
6. Historico de propostas geradas com status (enviada, aceita, recusada)

Use layout profissional com fonte serifada no PDF. O formulario deve usar shadcn/ui com validacao em todos os campos.`,
        tips: [
          'Use @react-pdf/renderer para documentos com multiplas paginas e formatacao complexa',
          'Para PDFs simples (1-2 paginas), jsPDF + html2canvas e mais rapido de implementar',
          'Crie templates reutilizaveis para cada tipo de documento',
          'Inclua numeracao de paginas e cabecalho/rodape em documentos longos',
          'Armazene os PDFs gerados no Supabase Storage para consulta futura',
        ],
      },
      {
        title: 'Assinatura Digital',
        subtitle: 'Assinatura eletronica de contratos e procuracoes',
        level: 'avancado',
        icon: 'file-key',
        analogy: {
          title: 'O Cartorio Virtual',
          central: 'Assinatura com validade juridica digital',
          description: 'A assinatura digital funciona como um cartorio dentro do seu app — o cliente recebe o documento, assina digitalmente, e o sistema registra tudo com validade juridica, sem precisar sair de casa.',
        },
        content: `Assinatura digital de documentos juridicos e cada vez mais aceita no Brasil. A Lei 14.063/2020 define tres tipos de assinatura eletronica, e seu app pode implementar todas.

**Tipos de assinatura eletronica no Brasil:**

| Tipo | Validade | Quando Usar |
|------|---------|-------------|
| **Simples** | Basica | Termos de uso, autorizacoes internas |
| **Avancada** | Alta | Contratos de honorarios, procuracoes |
| **Qualificada** | Maxima | Atos com exigencia legal especifica |

**Provedores de assinatura digital:**

| Provedor | Preco | Integracao |
|----------|-------|-----------|
| **DocuSign** | A partir de R$ 40/mes | API REST completa |
| **Clicksign** | A partir de R$ 49/mes | Brasileiro, boa API |
| **D4Sign** | A partir de R$ 29/mes | Brasileiro, popular |
| **ZapSign** | Freemium | Brasileiro, facil integracao |`,
        tips: [
          'Comece com o ZapSign (gratuito para poucos documentos) ou D4Sign',
          'Para procuracoes ad judicia, prefira assinatura avancada ou qualificada',
          'Armazene sempre o documento assinado no Supabase Storage com metadados',
          'Implemente um painel de acompanhamento de assinaturas pendentes',
          'Configure lembretes automaticos para documentos nao assinados apos 3 dias',
        ],
        flowSteps: [
          { label: 'Gerar Documento', description: 'App cria o PDF com os dados do caso' },
          { label: 'Enviar para Assinatura', description: 'Edge Function envia ao provedor de assinatura' },
          { label: 'Notificar Signatario', description: 'Cliente recebe link por email ou WhatsApp' },
          { label: 'Assinar', description: 'Cliente assina pelo celular ou computador' },
          { label: 'Confirmar', description: 'Webhook atualiza o status e armazena o doc assinado' },
        ],
      },
      {
        title: 'Importando Planilhas',
        subtitle: 'Migre dados de Excel/CSV para seu app Lovable',
        level: 'intermediario',
        icon: 'spreadsheet',
        analogy: {
          title: 'A Mudanca do Escritorio',
          central: 'Migracao de dados legados',
          description: 'Importar planilhas e como fazer a mudanca do escritorio fisico para o digital — voce pega todas as pastas, fichas e anotacoes dos armarios e organiza no novo sistema, tudo de uma vez.',
        },
        content: `Se seu escritorio ja tem dados em planilhas Excel ou CSV (clientes, processos, prazos, honorarios), voce pode importar tudo para o app Lovable de uma vez. Esse e o processo de **migracao de dados legados**.

**Dados comuns para importar:**

| Planilha | Campos Tipicos | Tabela Destino |
|----------|---------------|---------------|
| **Clientes** | Nome, CPF/CNPJ, telefone, email | \`clientes\` |
| **Processos** | Numero, vara, comarca, status | \`casos\` |
| **Prazos** | Data, tipo, processo vinculado | \`prazos\` |
| **Honorarios** | Valor, parcelas, status | \`honorarios\` |

**Tratamento de erros:**
Sempre mostre um relatorio pos-importacao: quantos registros foram importados com sucesso, quantos falharam, e por que. Permita que o usuario corrija e reimporte os que falharam.`,
        tips: [
          'Exija que a primeira linha da planilha tenha os nomes das colunas',
          'Valide CPF e CNPJ antes de inserir — muitas planilhas tem erros de digitacao',
          'Implemente importacao em lotes de 100 registros para evitar timeout',
          'Sempre mostre um preview dos dados antes de confirmar a importacao',
          'Mantenha um log de importacao com data, arquivo, registros inseridos e erros',
        ],
      },
      {
        title: 'Adicione IA ao seu App Juridico',
        subtitle: 'Integre APIs de inteligencia artificial via Edge Functions',
        level: 'expert',
        icon: 'bot',
        analogy: {
          title: 'O Estagiario Genio',
          central: 'IA integrada ao fluxo juridico',
          description: 'Integrar IA ao seu app e como contratar um estagiario que leu todos os livros de direito — ele analisa contratos em minutos, resume processos de 500 paginas e responde duvidas juridicas dos clientes 24h por dia.',
        },
        content: `Adicionar inteligencia artificial ao seu app juridico transforma-o de um sistema de gestao em um **assistente inteligente**. Voce pode conectar APIs de IA (como Claude, OpenAI ou Gemini) via Supabase Edge Functions para analises, resumos e chatbots.

**Funcionalidades de IA para apps juridicos:**

| Funcionalidade | Exemplo de API | Complexidade |
|----------------|----------------|-------------|
| **Analise de contratos** | Modelos com contexto longo | Media |
| **Resumo de processos** | Qualquer LLM de qualidade | Baixa |
| **Chatbot para clientes** | API com streaming | Alta |
| **Classificacao de documentos** | Modelos menores e economicos | Baixa |
| **Pesquisa jurisprudencial** | LLM + RAG | Alta |
| **Geracao de minutas** | Modelos com boa redacao | Media |

**Implementacao via Edge Function:**

Nunca chame a API de IA diretamente do frontend — as chaves ficariam expostas. Sempre use Edge Functions no Supabase como intermediario seguro.

**Custos estimados (referencia):**

| Operacao | Tokens | Custo Estimado |
|----------|--------|-------------|
| Analise de contrato (10 pags) | ~15K | ~R$ 0,30 |
| Resumo de processo (50 pags) | ~50K | ~R$ 1,00 |
| Chatbot (1 conversa) | ~2K | ~R$ 0,04 |
| Classificacao (1 doc) | ~1K | ~R$ 0,02 |`,
        prompt: `Crie um modulo de analise de contratos com IA para meu app juridico. Preciso de:

1. Uma pagina "Analise de Contratos com IA" com area de upload de PDF ou campo de texto para colar o contrato
2. Opcoes de analise: "Identificar Riscos", "Resumo Executivo", "Clausulas Abusivas", "Comparar com Modelo Padrao"
3. Ao clicar em "Analisar", chamar uma Supabase Edge Function que envia o contrato para a API de IA configurada via variavel de ambiente
4. Exibir o resultado da analise em secoes organizadas com: resumo geral, riscos identificados (com nivel: alto/medio/baixo), clausulas problematicas (citando o trecho exato), e recomendacoes
5. Botao "Salvar Analise" que armazena no Supabase vinculada ao caso
6. Historico de analises realizadas com filtro por caso e data

Use shadcn/ui Card para cada secao do resultado, Badge com cores para nivel de risco, e Accordion para detalhes expandiveis. O layout deve ser profissional e claro.`,
        tips: [
          'Para documentos longos, prefira modelos com janela de contexto grande (ex: Claude Sonnet)',
          'Para operacoes de alto volume e baixa complexidade, use modelos menores e mais economicos',
          'Sempre inclua um disclaimer: "Analise automatizada — requer validacao do advogado responsavel"',
          'Implemente cache: se o mesmo documento ja foi analisado, mostre o resultado anterior',
          'Configure limites de uso por usuario para controlar custos da API',
        ],
        elementGrid: [
          { icon: 'file-text', title: 'Analise de Contratos', description: 'IA identifica riscos, clausulas abusivas e pontos de atencao em contratos recebidos de terceiros.', highlight: true },
          { icon: 'book-open', title: 'Resumo de Processos', description: 'IA resume 500 paginas em 2 paragrafos com pontos-chave para onboarding de casos novos.' },
          { icon: 'message-square', title: 'Chatbot Juridico', description: 'IA responde duvidas frequentes dos clientes 24h para atendimento inicial e triagem de consultas.', highlight: true },
        ],
      },
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // SEÇÃO 7: DEPLOY E DOMÍNIO
  // ═══════════════════════════════════════════════════════════
  {
    id: 'deploy',
    title: 'Deploy e Domínio',
    description: 'Publique seu app para o mundo',
    icon: 'globe',
    cards: [
      {
        title: 'Publicando seu App',
        subtitle: 'Deploy com um clique e compartilhe com clientes',
        level: 'iniciante',
        icon: 'rocket',
        analogy: {
          title: 'Inaugurando o Escritorio Virtual',
          central: 'Publicacao instantanea do app',
          description: 'Publicar seu app e como inaugurar seu escritorio virtual — ate agora voce estava montando o espaco, arrumando os moveis e testando tudo. Agora e hora de abrir as portas e receber seus clientes.',
        },
        content: `O Lovable torna o deploy (publicacao) incrivelmente simples. Com literalmente um clique, seu app sai do modo de desenvolvimento e fica disponivel na internet para qualquer pessoa acessar.

**O que acontece ao publicar:**

| Antes do Deploy | Depois do Deploy |
|----------------|-----------------|
| App so funciona no editor do Lovable | App acessivel por qualquer navegador |
| URL temporaria de preview | URL publica: seuapp.lovable.app |
| So voce consegue ver | Clientes podem acessar de qualquer lugar |
| Dados de teste | Dados reais (se configurou Supabase) |

**URL gratuita do Lovable:**

Ao publicar, seu app recebe uma URL gratuita no formato: \`seuescritorio.lovable.app\`. Essa URL ja e funcional e pode ser compartilhada com clientes imediatamente.

**O que verificar antes de publicar:**

Antes de clicar em "Deploy", faca uma verificacao final:
- Todas as paginas funcionam corretamente no preview?
- O login e cadastro estao funcionando?
- As tabelas do Supabase estao com RLS configurado?
- Os dados de teste foram removidos?
- O app funciona bem no celular?`,
        steps: [
          'No editor do Lovable, verifique se todas as funcionalidades estao funcionando no preview',
          'Clique no botao "Share" no canto superior direito do editor',
          'Selecione "Deploy" ou "Publish" na opcao que aparecer',
          'Aguarde alguns segundos — o deploy e praticamente instantaneo',
          'Copie a URL gerada (seuapp.lovable.app) e teste em uma aba anonima do navegador',
          'Teste o login, navegacao e funcionalidades principais',
          'Compartilhe a URL com um colega ou cliente de teste para validacao',
          'Se tudo estiver ok, envie o link para seus clientes via email ou WhatsApp',
        ],
        tips: [
          'Sempre teste em uma aba anonima apos o deploy — garante que nao ha dados em cache',
          'Peca para 2-3 pessoas testarem antes de enviar para todos os clientes',
          'O deploy e reversivel — se algo der errado, voce pode voltar a versao anterior',
          'Use a URL .lovable.app como teste antes de configurar um dominio proprio',
        ],
        flowSteps: [
          { label: 'Desenvolver', description: 'Construir e testar no editor do Lovable' },
          { label: 'Verificar', description: 'Revisar preview, testar login, conferir RLS' },
          { label: 'Publicar', description: 'Clicar em Deploy — pronto em segundos' },
          { label: 'Compartilhar', description: 'Enviar URL para clientes via email/WhatsApp' },
        ],
      },
      {
        title: 'Dominio Personalizado',
        subtitle: 'Configure meuescritorio.com.br apontando para seu app',
        level: 'intermediario',
        icon: 'globe',
        analogy: {
          title: 'A Placa do Escritorio',
          central: 'Endereco profissional na internet',
          description: 'O dominio personalizado e como a placa na porta do escritorio — em vez de um numero generico, seus clientes veem o nome do seu escritorio. Passa profissionalismo e confianca.',
        },
        content: `Um dominio personalizado (ex: \`app.silvaadvogados.com.br\`) transmite profissionalismo e facilita o acesso dos clientes. O Lovable suporta dominios personalizados com SSL automatico.

**Onde comprar dominio .com.br:**

| Registrador | Preco Anual | Observacao |
|-------------|-------------|-----------|
| **Registro.br** | R$ 40/ano | Oficial, mais confiavel |
| **HostGator** | R$ 35/ano | Inclui DNS gerenciado |
| **GoDaddy** | R$ 50/ano | Interface simples |

**Configuracao DNS:**

Para apontar seu dominio para o Lovable, voce precisa configurar registros DNS no painel do seu registrador. O Lovable fornece as instrucoes exatas na tela de configuracao. O SSL e ativado automaticamente.`,
        steps: [
          'Compre ou tenha acesso ao painel DNS do seu dominio (registro.br, HostGator, etc.)',
          'No Lovable, va em Settings > Domains no seu projeto',
          'Clique em "Add Custom Domain" e digite seu dominio',
          'O Lovable mostrara os registros DNS que voce precisa configurar',
          'No painel do seu registrador, adicione o registro CNAME ou A conforme instruido',
          'Volte ao Lovable e clique em "Verify" para confirmar a configuracao',
          'Aguarde a propagacao DNS (geralmente minutos, maximo 48h)',
          'Quando verificado, o SSL e ativado automaticamente',
        ],
        tips: [
          'Use subdominio (app.seuescritorio.com.br) se ja tem um site institucional',
          'O SSL e obrigatorio para apps que coletam dados (LGPD) — o Lovable cuida disso automaticamente',
          'Apos configurar, teste em varios dispositivos: celular, tablet, computador',
          'Atualize todos os links e emails com a nova URL personalizada',
        ],
      },
      {
        title: 'SEO para Apps Juridicos',
        subtitle: 'Apareca no Google quando clientes procurarem advogados',
        level: 'intermediario',
        icon: 'search',
        content: `SEO (Search Engine Optimization) permite que seu app apareca nos resultados do Google quando potenciais clientes buscam por servicos juridicos. Especialmente util para paginas publicas como blog juridico ou landing page do escritorio.

**O que otimizar:**

| Elemento | O que e | Exemplo |
|----------|---------|---------|
| **Title** | Titulo da pagina no Google | "Silva Advogados - Especialistas em Direito Trabalhista" |
| **Description** | Descricao abaixo do titulo | "Escritorio de advocacia em SP com 15 anos de experiencia..." |
| **Open Graph** | Preview em redes sociais | Imagem + titulo + descricao ao compartilhar link |
| **H1** | Titulo principal da pagina | Um por pagina, contem palavra-chave |
| **URLs** | Enderecos das paginas | /direito-trabalhista (nao /pagina-1) |

**Atencao com a OAB:**
A publicidade de advogados e regulamentada pelo Codigo de Etica da OAB. O SEO e permitido (marketing de conteudo educativo), mas evite promessas de resultado, captacao agressiva e linguagem mercantil.`,
        tips: [
          'Foque em palavras-chave de cauda longa: "advogado trabalhista zona sul SP"',
          'Publique artigos educativos no blog — e a melhor estrategia de SEO para advogados',
          'Configure Open Graph para que os links fiquem bonitos ao compartilhar no WhatsApp',
          'Cadastre o escritorio no Google Meu Negocio para aparecer no Google Maps',
          'Respeite as diretrizes da OAB — conteudo educativo sim, captacao direta nao',
        ],
      },
      {
        title: 'App Analytics',
        subtitle: 'Monitore quem usa seu app e como',
        level: 'intermediario',
        icon: 'bar-chart',
        content: `Analytics permite entender como seus clientes usam o app: quais paginas acessam mais, quanto tempo ficam, de onde vem e onde desistem.

**O que monitorar:**

| Metrica | O que Significa | Por que Importa |
|---------|----------------|----------------|
| **Visitantes unicos** | Quantas pessoas distintas acessaram | Alcance do app |
| **Paginas mais vistas** | Quais telas sao mais acessadas | Onde investir melhorias |
| **Tempo na pagina** | Quanto tempo ficam em cada tela | Se o conteudo e util |
| **Taxa de rejeicao** | % que sai sem interagir | Se a primeira impressao e boa |
| **Dispositivo** | Desktop vs mobile | Otimizar para o mais usado |

**Opcoes de analytics:**

| Ferramenta | Preco | Privacidade |
|------------|-------|-----------|
| **Google Analytics** | Gratuito | Baixa (compartilha dados com Google) |
| **Plausible** | $9/mes | Alta (compativel com LGPD) |
| **PostHog** | Freemium | Alta (self-hosted disponivel) |

**Recomendacao para escritorios:** O **Plausible** — e leve, respeita a privacidade dos usuarios (compativel com LGPD), nao precisa de banner de cookies, e tem dashboard simples e intuitivo.`,
        tips: [
          'Para apps juridicos, priorize ferramentas compativeis com LGPD (Plausible, PostHog)',
          'Crie um dashboard interno com metricas do escritorio (casos, honorarios, prazos)',
          'Monitore a taxa de uso por perfil — se clientes nao acessam, algo precisa melhorar',
          'Verifique semanalmente as paginas mais acessadas e otimize-as primeiro',
          'Use analytics para justificar investimentos em melhorias do app',
        ],
      },
      {
        title: 'Security Scan',
        subtitle: 'Verificacao automatica de seguranca do Lovable',
        level: 'avancado',
        icon: 'shield',
        content: `O Lovable inclui um recurso de **Security Scan** que analisa automaticamente seu app em busca de vulnerabilidades de seguranca. Para apps juridicos que lidam com dados sensiveis de clientes, essa funcionalidade e fundamental.

**O que o Security Scan verifica:**

| Verificacao | O que Detecta | Severidade |
|-------------|--------------|-----------|
| **Chaves expostas** | API keys no codigo frontend | Critica |
| **RLS ausente** | Tabelas sem Row Level Security | Critica |
| **Injecao SQL** | Queries vulneraveis | Alta |
| **XSS** | Scripts maliciosos em inputs | Alta |
| **CORS aberto** | Origens nao autorizadas | Media |
| **Dependencias** | Bibliotecas com vulnerabilidades | Variavel |

**Compliance para escritorios:**
Para escritorios que buscam certificacoes de seguranca ou precisam demonstrar conformidade com a LGPD, os relatorios do Security Scan servem como evidencia de due diligence em seguranca da informacao.`,
        tips: [
          'Execute o Security Scan antes de cada deploy para producao',
          'Nunca ignore vulnerabilidades criticas — dados de clientes podem estar em risco',
          'Chaves de API NUNCA devem estar no codigo frontend — use Edge Functions',
          'Configure RLS em TODAS as tabelas que contem dados de clientes',
          'Mantenha um registro dos scans realizados para auditoria',
        ],
        checklist: [
          {
            title: 'Checklist de Seguranca Pre-Deploy',
            items: [
              'RLS configurado em todas as tabelas com dados sensiveis',
              'Nenhuma API key exposta no codigo frontend',
              'Uploads validam tipo e tamanho do arquivo',
              'Autenticacao obrigatoria em todas as rotas privadas',
              'Senhas nunca armazenadas em texto plano',
              'CORS configurado apenas para origens autorizadas',
              'Security Scan executado sem vulnerabilidades criticas',
            ],
          },
        ],
      },
      {
        title: 'Performance e Otimizacao',
        subtitle: 'Faca seu app carregar mais rapido',
        level: 'avancado',
        icon: 'trending-up',
        content: `Um app lento e um app abandonado. Se sua tela de login demora 5 segundos para carregar, o cliente vai embora. A otimizacao de performance garante que seu app carregue rapido em qualquer dispositivo.

**Tecnicas de otimizacao no Lovable:**

**1. Lazy Loading de Rotas:** Carregue paginas sob demanda — o usuario so baixa o codigo da pagina que esta acessando.

**2. Otimizacao de Imagens:** Use formato WebP em vez de JPG/PNG (50% menor). Defina width e height explicitos.

**3. Cache de Dados:** O React Query (TanStack Query), ja incluido no Lovable, faz cache automatico das consultas ao Supabase.

**4. Paginacao:** Nunca carregue todos os registros de uma vez. Use paginacao no Supabase com \`.range(0, 19)\`.

**5. Code Splitting:** O Vite (bundler usado pelo Lovable) ja faz code splitting automaticamente com lazy loading.

**Como medir:** Use o Google Lighthouse (aba Performance no Chrome DevTools) para medir o desempenho do seu app.`,
        tips: [
          'Rode o Lighthouse antes e depois das otimizacoes para medir o impacto',
          'Lazy loading de rotas e a otimizacao com maior impacto e menor esforco',
          'Configure staleTime no React Query para evitar buscas desnecessarias ao Supabase',
          'Imagens grandes sao o vilao #1 de performance — otimize sempre',
          'Para escritorios com muitos dados, implemente paginacao desde o primeiro dia',
        ],
      },
      {
        title: 'Ambientes de Teste',
        subtitle: 'Preview deployments e separacao entre teste e producao',
        level: 'avancado',
        icon: 'git-branch',
        analogy: {
          title: 'Ensaio Geral antes do Juri',
          central: 'Testar antes de publicar',
          description: 'Ambientes de teste sao como fazer um ensaio geral antes do juri — voce testa toda a argumentacao, verifica os documentos e simula as perguntas da parte contraria. Se algo falha no ensaio, voce corrige antes de entrar na sala real.',
        },
        content: `Em desenvolvimento profissional, nunca se testa diretamente na versao que os clientes usam. Voce precisa de ambientes separados para desenvolvimento, teste e producao.

**Os 3 ambientes:**

| Ambiente | Para que serve | Quem acessa |
|----------|---------------|------------|
| **Development** | Construir e experimentar | So voce, no editor Lovable |
| **Staging** | Testar antes de publicar | Equipe interna, testadores |
| **Production** | Versao real para clientes | Todos os usuarios |

**Na pratica para escritorios pequenos:**
1. Testar no preview antes de publicar
2. Pedir para 1-2 colegas testarem antes de liberar para clientes
3. Manter backup via GitHub para poder reverter se algo der errado`,
        tips: [
          'Nunca teste funcionalidades novas diretamente no app que seus clientes usam',
          'Use preview deployments para mostrar mudancas para socios antes de publicar',
          'Para escritorios pequenos: preview + teste manual e suficiente no inicio',
          'Mantenha dados de teste separados de dados reais — use projetos Supabase diferentes',
        ],
      },
      {
        title: 'Backup e Versionamento',
        subtitle: 'Nunca perca seu trabalho — historico e restauracao',
        level: 'intermediario',
        icon: 'copy',
        analogy: {
          title: 'O Cofre do Escritorio',
          central: 'Versoes guardadas com seguranca',
          description: 'O versionamento do Lovable funciona como um cofre com multiplas gavetas datadas — cada versao do seu app e guardada numa gaveta diferente, com data e descricao. Se algo der errado, e so abrir a gaveta certa e restaurar.',
        },
        content: `O Lovable mantem um historico completo de todas as alteracoes feitas no seu projeto. Combinado com o GitHub, isso cria um sistema robusto de backup e recuperacao.

**Camadas de protecao:**

| Camada | O que Protege | Como Restaurar |
|--------|--------------|---------------|
| **Historico do Lovable** | Cada prompt e alteracao | Reverter no painel de versoes |
| **GitHub** | Codigo completo do app | Clone do repositorio |
| **Supabase** | Dados do banco | Backup automatico (plano Pro) |
| **Storage** | Arquivos (PDFs, imagens) | Download via dashboard |

**Estrategia de backup recomendada para escritorios:**

1. **GitHub conectado** (backup de codigo automatico e gratuito)
2. **Export periodico do Supabase** (dados dos clientes)
3. **Download de documentos** (Storage) mensalmente
4. **Documentacao de configuracoes** (Edge Functions, variaveis de ambiente)

**Regra de ouro:** Se voce nao consegue restaurar seus dados em 24 horas, seu backup nao funciona. Teste a restauracao periodicamente.`,
        tips: [
          'Conecte o GitHub desde o primeiro dia — e gratuito e automatico',
          'No Supabase Free, faca export CSV das tabelas principais semanalmente',
          'Antes de mudancas grandes, anote o numero da versao atual no Lovable',
          'Teste a restauracao pelo menos uma vez para saber que funciona quando precisar',
          'Para dados criticos de clientes, considere o plano Pro do Supabase pelo backup automatico',
        ],
      },
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // SEÇÃO 8: SEGURANÇA E ÉTICA
  // ═══════════════════════════════════════════════════════════
  {
    id: 'seguranca',
    title: 'Segurança e Ética',
    description: 'Proteja dados de clientes e siga a OAB',
    icon: 'shield',
    cards: [
      {
        title: 'LGPD e Apps Juridicos',
        subtitle: 'O que a lei exige do seu app',
        level: 'intermediario',
        icon: 'file-key',
        analogy: {
          title: 'O Regulamento Interno do Escritorio',
          central: 'Regras para tratamento de dados',
          description: 'A LGPD para seu app e como o regulamento interno do escritorio para dados de clientes — define quem pode acessar o que, como os dados sao armazenados, quando devem ser descartados e o que acontece em caso de vazamento.',
        },
        content: `A Lei Geral de Protecao de Dados (Lei 13.709/2018) aplica-se diretamente ao seu app juridico. Escritorios de advocacia tratam dados pessoais sensiveis e precisam de atencao redobrada.

**Bases legais para tratamento de dados em apps juridicos:**

| Base Legal | Quando Usar | Exemplo |
|-----------|-------------|---------|
| **Consentimento** | Dados coletados voluntariamente | Cadastro do cliente no app |
| **Execucao de contrato** | Dados necessarios para o servico | Dados do processo para peticionar |
| **Exercicio regular de direitos** | Defesa em processo | Dados para responder acao judicial |
| **Legitimo interesse** | Comunicacao relevante | Notificacao de prazo vencendo |
| **Obrigacao legal** | Exigencia regulatoria | Retencao de documentos fiscais |

**O que seu app DEVE ter:** Politica de Privacidade, Termos de Uso, consentimento explicito, acesso aos dados pelo titular, mecanismo de exclusao e registro de tratamento.`,
        checklist: [
          {
            title: 'Checklist LGPD para Apps Juridicos',
            items: [
              'Politica de Privacidade publicada e acessivel no app',
              'Termos de Uso publicados e acessiveis no app',
              'Consentimento explicito no cadastro com checkbox e timestamp',
              'Funcionalidade de visualizacao de dados pelo titular',
              'Mecanismo de solicitacao de exclusao de dados',
              'Registro de tratamento de dados (log de acessos)',
              'Criptografia em dados sensiveis armazenados',
              'RLS configurado em todas as tabelas do Supabase',
              'Backup seguro dos dados com acesso restrito',
              'Plano de resposta a incidentes de vazamento documentado',
            ],
          },
        ],
        tips: [
          'A base legal mais segura para escritorios e "execucao de contrato"',
          'Nunca colete dados que nao sejam estritamente necessarios (principio da minimizacao)',
          'Mantenha um Registro de Atividades de Tratamento (RAT)',
          'Nomeie um DPO (Data Protection Officer) no escritorio',
          'Em caso de vazamento, a ANPD deve ser notificada — tenha um plano pronto',
        ],
      },
      {
        title: 'Sigilo Advogado-Cliente Digital',
        subtitle: 'Mantendo o segredo profissional em apps digitais',
        level: 'intermediario',
        icon: 'lock',
        analogy: {
          title: 'O Cofre-Forte Digital',
          central: 'Protecao do sigilo profissional',
          description: 'O sigilo advogado-cliente no app funciona como um cofre-forte com multiplas chaves — cada advogado tem a chave dos seus proprios casos, a secretaria tem acesso a recepcao mas nao ao conteudo dos processos, e o socio tem uma chave-mestra com registro de cada abertura.',
        },
        content: `O sigilo profissional e a base da advocacia (art. 7, II do Estatuto da OAB). Quando voce coloca dados de clientes em um app digital, a responsabilidade pelo sigilo se estende a tecnologia.

**Principios do sigilo digital:**

| Principio | No Escritorio Fisico | No App Digital |
|-----------|---------------------|---------------|
| **Confidencialidade** | Sala fechada para reuniao | Dados criptografados, acesso restrito |
| **Integridade** | Documento original lacrado | Hash de verificacao, logs de alteracao |
| **Disponibilidade** | Acesso ao processo no armario | Backup, redundancia, uptime |
| **Controle de acesso** | Chave da sala | Autenticacao + autorizacao (RBAC) |

**Responsabilidade sobre o app:** Se um vazamento ocorrer por falha de seguranca do app, o advogado titular responde perante a OAB e perante o cliente. Investir em seguranca digital nao e opcional — e obrigacao etica e legal.`,
        tips: [
          'Configure timeout de sessao de 30 minutos para evitar acesso em computadores compartilhados',
          'Implemente 2FA para todos os usuarios com acesso a dados sensiveis',
          'Nunca transmita dados de clientes por canais nao criptografados',
          'Registre em log cada acesso a dados de caso — necessario para auditoria',
          'Revise permissoes quando alguem sair do escritorio — revogue acesso imediatamente',
        ],
      },
      {
        title: 'RLS na Pratica',
        subtitle: 'Row Level Security detalhada para cada tipo de dado juridico',
        level: 'avancado',
        icon: 'shield',
        analogy: {
          title: 'As Gavetas Trancadas',
          central: 'Isolamento de dados por usuario',
          description: 'RLS e como ter gavetas com fechaduras individuais no armario do escritorio — cada advogado tem a chave das gavetas dos seus processos, a secretaria tem uma chave que abre a pasta de contatos mas nao as de estrategia.',
        },
        content: `Row Level Security (RLS) e o mecanismo do Supabase/PostgreSQL que garante que cada usuario so veja os dados que tem permissao para acessar. Para apps juridicos, e a funcionalidade mais importante de seguranca.

**Politicas RLS por tipo de dado:**

| Tabela | Quem Pode Ver | Quem Pode Editar |
|--------|--------------|-----------------|
| \`clientes\` | Advogado do caso + admin | Advogado do caso |
| \`casos\` | Equipe do caso | Advogado responsavel |
| \`documentos\` | Quem tem acesso ao caso | Advogado do caso |
| \`prazos\` | Equipe do caso + secretaria | Advogado + secretaria |
| \`honorarios\` | Advogado + financeiro | Financeiro |
| \`anotacoes\` | Apenas o autor | Apenas o autor |

**Teste suas politicas:** Sempre teste o RLS fazendo login com diferentes perfis de usuario: Advogado A deve ver apenas seus casos, Advogado B nao deve ver nada do Advogado A.`,
        prompt: `Configure Row Level Security completo para um escritorio de advocacia no Supabase. As tabelas sao:

1. "profiles" (id, nome, email, role: 'admin' | 'advogado' | 'estagiario' | 'secretaria' | 'cliente', escritorio_id)
2. "casos" (id, numero_processo, advogado_id, cliente_id, status, area_direito, created_at)
3. "equipe_caso" (caso_id, usuario_id, papel: 'responsavel' | 'colaborador' | 'observador')
4. "documentos" (id, caso_id, nome, tipo, url, uploaded_by, created_at)
5. "prazos" (id, caso_id, data_limite, tipo, status, created_at)
6. "anotacoes" (id, caso_id, autor_id, conteudo, privada boolean, created_at)

Regras:
- Admin ve tudo do seu escritorio
- Advogado ve seus casos + casos onde e equipe
- Estagiario ve apenas casos onde e equipe como colaborador
- Secretaria ve agenda e prazos de todos, mas nao anotacoes privadas
- Cliente ve apenas seu proprio caso (documentos nao privados)

Crie todas as policies com nomes descritivos. Ative RLS em todas as tabelas.`,
        tips: [
          'SEMPRE ative RLS em TODAS as tabelas que contem dados de clientes',
          'Teste com diferentes perfis de usuario — crie accounts de teste para cada role',
          'Anotacoes privadas do advogado devem ser visiveis APENAS pelo autor',
          'Clientes devem ver seus dados mas NUNCA editar ou deletar',
          'Use soft delete (status = "excluido") em vez de DELETE real para auditoria',
        ],
      },
      {
        title: 'Autenticacao Segura',
        subtitle: '2FA, politica de senhas e sessoes seguras',
        level: 'intermediario',
        icon: 'key-round',
        content: `A autenticacao e a porta de entrada do seu app. Se a porta e fraca, nada mais importa. O Supabase Auth oferece diversas opcoes de autenticacao segura.

**Niveis de seguranca:**

| Nivel | Metodo | Para Quem |
|-------|--------|-----------|
| **Basico** | Email + senha | Minimo aceitavel |
| **Intermediario** | Email + senha forte + verificacao de email | Recomendado para escritorios |
| **Avancado** | Email + senha + 2FA (TOTP) | Ideal para dados sensiveis |
| **Enterprise** | SSO + 2FA + IP whitelist | Grandes escritorios |

**OAuth (Login Social):**

| Provider | Vantagem | Ideal Para |
|----------|----------|-----------|
| **Google** | Maioria dos advogados usa Gmail | Escritorios com Google Workspace |
| **Microsoft** | Integracao com Outlook | Escritorios com Microsoft 365 |
| **Apple** | Privacidade maxima | Usuarios Apple |`,
        tips: [
          'Ative 2FA para TODOS os advogados e administradores',
          'Use OAuth (Google/Microsoft) para facilitar o login sem comprometer seguranca',
          'Configure sessoes para expirar apos 8 horas de inatividade',
          'Implemente bloqueio apos 5 tentativas de login falhas',
          'Exija verificacao de email antes de permitir acesso ao app',
        ],
      },
      {
        title: 'Etica e IA na Advocacia',
        subtitle: 'Resolucoes da OAB e do CNJ sobre uso de IA',
        level: 'intermediario',
        icon: 'scale',
        content: `O uso de inteligencia artificial na advocacia e regulamentado no Brasil. A OAB e o CNJ ja se manifestaram sobre o tema.

**Resolucao 615/2025 do CNJ:**

| Ponto | Diretriz |
|-------|---------|
| **Transparencia** | Obrigatorio declarar uso de IA em pecas processuais (em alguns tribunais) |
| **Responsabilidade** | O advogado e SEMPRE responsavel pelo conteudo, mesmo gerado por IA |
| **Revisao humana** | Toda peca gerada por IA deve ser revisada por advogado antes do protocolo |
| **Dados sensiveis** | IA nao deve processar dados sigilosos sem protecao adequada |

**O que PODE fazer:** Usar IA para rascunhos, analisar contratos, resumir processos, pesquisar jurisprudencia, automatizar tarefas administrativas.

**O que NAO PODE fazer:** Protocolar pecas sem revisao humana, delegar decisoes estrategicas a IA, usar dados de clientes em IAs sem protecao, omitir o uso de IA quando questionado.`,
        tips: [
          'Inclua disclaimer de IA em toda funcionalidade automatizada do app',
          'Nunca permita envio automatico de documentos gerados por IA sem revisao humana',
          'Registre em log o uso de IA em cada caso para transparencia',
          'Verifique a politica de dados da API de IA escolhida — provedores como Anthropic e OpenAI nao treinam com dados de chamadas de API',
          'Mantenha-se atualizado sobre novas resolucoes da OAB e do CNJ',
        ],
      },
      {
        title: 'Termos de Uso e Privacidade',
        subtitle: 'Gere paginas de termos de uso e politica de privacidade',
        level: 'avancado',
        icon: 'scroll-text',
        content: `Todo app que coleta dados pessoais precisa ter Termos de Uso e Politica de Privacidade publicados e acessiveis. Para apps juridicos, esses documentos precisam ser especialmente detalhados por causa do sigilo profissional.

**Termos de Uso — Secoes obrigatorias:** Objeto, Cadastro, Responsabilidades do usuario, Responsabilidades do escritorio, Propriedade intelectual, Limitacao de responsabilidade, Rescisao, Foro.

**Politica de Privacidade — Secoes obrigatorias (LGPD):** Dados coletados, Finalidade, Base legal, Compartilhamento, Armazenamento, Seguranca, Direitos do titular, Cookies, Encarregado (DPO).

**Importante:** Se o app envia dados para APIs de IA externas, inclua uma secao especifica na Politica de Privacidade explicando quais dados sao transmitidos e as garantias de confidencialidade do provedor.`,
        prompt: `Crie duas paginas completas para meu app juridico:

1. Pagina "/termos-de-uso" com Termos de Uso completos para um sistema de gestao de escritorio de advocacia. Inclua secoes sobre: objeto do servico, cadastro, responsabilidades do usuario, responsabilidades do escritorio, propriedade intelectual, uso de inteligencia artificial, limitacao de responsabilidade, alteracoes nos termos, e foro competente.

2. Pagina "/politica-de-privacidade" com Politica de Privacidade completa conforme LGPD. Inclua secoes sobre: dados coletados, finalidade do tratamento, base legal, compartilhamento com terceiros (Supabase, Stripe, APIs de IA), armazenamento e retencao, medidas de seguranca, direitos do titular, uso de cookies, e dados de contato do DPO.

Ambas as paginas devem ter: navegacao para voltar ao app, indice clicavel, data de ultima atualizacao, e layout limpo com tipografia legivel. Use formatacao Markdown renderizada com componentes shadcn/ui.`,
        tips: [
          'Revise os termos com um advogado especializado em direito digital',
          'Atualize sempre que adicionar novas funcionalidades que coletam dados',
          'Inclua a data de ultima atualizacao e notifique usuarios sobre mudancas',
          'O checkbox de aceite no cadastro DEVE ser registrado com timestamp no banco',
          'Se usar IA, inclua secao especifica sobre tratamento de dados por inteligencia artificial',
        ],
      },
      {
        title: 'Auditoria e Logs',
        subtitle: 'Registre quem acessou o que e quando',
        level: 'avancado',
        icon: 'search',
        analogy: {
          title: 'O Livro de Atas do Escritorio',
          central: 'Registro automatico de todas as acoes',
          description: 'Logs de auditoria funcionam como um livro de atas automatico — toda vez que alguem abre um processo, edita um documento ou acessa dados de cliente, o sistema anota quem fez, o que fez e quando fez. Inalteravel e consultavel a qualquer momento.',
        },
        content: `Para apps juridicos, um sistema de auditoria e essencial. Ele registra automaticamente todas as acoes relevantes no app, criando uma trilha de auditoria (audit trail).

**O que registrar:**

| Evento | Dados do Log | Por Que |
|--------|-------------|---------|
| **Login/logout** | Usuario, IP, horario, dispositivo | Detectar acessos suspeitos |
| **Visualizacao de caso** | Quem viu, qual caso, quando | Confirmar autorizacao |
| **Edicao de documento** | Quem editou, o que mudou | Rastreabilidade |
| **Download de arquivo** | Quem baixou, qual arquivo | Controle de distribuicao |
| **Alteracao de permissao** | Quem alterou, de/para qual role | Auditoria de acessos |
| **Exclusao de dados** | Quem excluiu, o que, quando | Prevencao de perda |

**Dashboard de auditoria:** Crie uma pagina no app (acessivel apenas por admin) que exibe os logs filtraveis por: usuario, tipo de acao, periodo e entidade.`,
        tips: [
          'Logs NUNCA devem ser editaveis ou deletaveis — sao imutaveis por natureza',
          'Configure retencao de logs por pelo menos 5 anos (prazo prescricional)',
          'Use database triggers para registrar automaticamente — nao dependa do frontend',
          'Crie alertas para acoes suspeitas: acesso fora do horario, multiplos downloads',
          'Exporte logs periodicamente para armazenamento externo como evidencia',
        ],
      },
      {
        title: 'Protecao contra Ataques',
        subtitle: 'CSRF, XSS, SQL Injection — o que o Lovable protege e o que voce deve fazer',
        level: 'expert',
        icon: 'alert-triangle',
        content: `Apps web estao expostos a diversos tipos de ataque. A boa noticia e que o stack do Lovable (React + Supabase) ja protege contra a maioria.

**Protecoes automaticas do stack Lovable:**

| Ataque | O que e | Protegido por |
|--------|---------|--------------|
| **XSS** | Script malicioso injetado na pagina | React (escapa HTML automaticamente) |
| **SQL Injection** | Comando SQL inserido em input | Supabase (queries parametrizadas) |
| **CSRF** | Forjar requisicao em nome do usuario | Supabase Auth (tokens JWT) |
| **Clickjacking** | Overlay invisivel sobre botoes | Headers HTTP (X-Frame-Options) |

**O que VOCE precisa configurar:** RLS em todas as tabelas, validacao de input com Zod, rate limiting em Edge Functions, validacao de uploads, CORS restrito, e API keys em Edge Functions.`,
        checklist: [
          {
            title: 'Checklist Anti-Ataque',
            items: [
              'RLS ativado em TODAS as tabelas do Supabase',
              'Validacao de input com Zod em todos os formularios',
              'Upload de arquivos validando tipo e tamanho',
              'API keys em Edge Functions (nao no frontend)',
              'CORS restrito apenas ao dominio do app',
              'Rate limiting em endpoints sensiveis (login, API)',
              'Security Scan do Lovable sem vulnerabilidades criticas',
              'Headers de seguranca configurados (X-Frame-Options, CSP)',
            ],
          },
        ],
        tips: [
          'O React ja protege contra XSS — mas NUNCA use dangerouslySetInnerHTML com dados do usuario',
          'Validacao deve acontecer SEMPRE no backend (Edge Function) — validacao no frontend e so UX',
          'Rate limiting e essencial para evitar abuso de APIs pagas (Stripe, IA)',
          'Mantenha dependencias atualizadas — npm audit revela vulnerabilidades conhecidas',
        ],
      },
      {
        title: 'Certificacoes e Compliance',
        subtitle: 'ISO 27001, SOC 2 — quando e por que buscar certificacao',
        level: 'expert',
        icon: 'check-circle',
        content: `Para escritorios que atendem grandes empresas ou lidam com dados altamente sensiveis, certificacoes de seguranca podem ser um diferencial competitivo.

**Certificacoes relevantes:**

| Certificacao | O que Atesta | Para Quem |
|-------------|-------------|-----------|
| **ISO 27001** | Sistema de Gestao de Seguranca da Informacao | Escritorios que atendem grandes empresas |
| **SOC 2 Type II** | Controles de seguranca e confidencialidade | Escritorios com dados de terceiros nos EUA |
| **LGPD Compliance** | Conformidade com a lei brasileira | Todos os apps que coletam dados |
| **PCI DSS** | Seguranca de dados de cartao | Apps que processam pagamentos (Stripe cuida) |

**O que ja esta certificado no stack:** Supabase (SOC 2 Type II, HIPAA eligible), Stripe (PCI DSS Level 1), Lovable deploy (Infrastructure SOC 2).

**Dica para escritorios pequenos:** Comece com compliance LGPD basico (autoavaliacao + implementacao). ISO 27001 e SOC 2 so fazem sentido quando seus clientes exigem ou quando voce esta vendendo o app como SaaS.`,
        tips: [
          'Para a maioria dos escritorios, compliance LGPD basico e suficiente',
          'Use os relatorios do Security Scan como evidencia de due diligence',
          'ISO 27001 e investimento alto — so busque se clientes grandes exigirem',
          'O Supabase ja tem SOC 2 — documente que seu backend e certificado',
          'Mantenha um registro atualizado de todas as medidas de seguranca implementadas',
        ],
      },
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // SEÇÃO 9: MULTI-USUÁRIO E EQUIPE
  // ═══════════════════════════════════════════════════════════
  {
    id: 'multi-usuario',
    title: 'Multi-usuário e Equipe',
    description: 'Apps para escritórios com equipe',
    icon: 'users',
    cards: [
      {
        title: 'Perfis de Usuario',
        subtitle: 'Advogado, estagiario, secretaria e cliente — cada um com seu acesso',
        level: 'intermediario',
        icon: 'users',
        analogy: {
          title: 'Os Crachas do Escritorio',
          central: 'Niveis de acesso por funcao',
          description: 'Perfis de usuario funcionam como crachas com cores diferentes — o cracha verde (advogado) abre todas as salas, o amarelo (estagiario) abre apenas o arquivo e a biblioteca, o azul (secretaria) abre a recepcao e a agenda, e o branco (cliente) so abre a sala de reuniao.',
        },
        content: `Em escritorios com equipe, cada pessoa precisa de um nivel diferente de acesso no app. O sistema de perfis (roles) define o que cada tipo de usuario pode ver e fazer.

**Perfis tipicos de um escritorio:**

| Perfil | Acesso | Funcionalidades |
|--------|--------|----------------|
| **Admin/Socio** | Total | Configuracoes, financeiro, relatorios, todos os casos |
| **Advogado** | Seus casos + equipe | Gestao de casos, documentos, prazos, anotacoes |
| **Estagiario** | Casos atribuidos | Pesquisa, rascunhos, apoio ao advogado |
| **Secretaria** | Agenda + contatos | Agendamentos, prazos, atendimento, correspondencias |
| **Cliente** | Seu caso | Acompanhamento, documentos, pagamentos |
| **Financeiro** | Financeiro | Honorarios, pagamentos, relatorios financeiros |

**Importante:** O controle no frontend e apenas visual (esconde botoes e menus). A seguranca real esta no RLS do Supabase, que impede acesso aos dados independente do que o frontend mostra.`,
        tips: [
          'Comece com 3 perfis (admin, advogado, cliente) e adicione mais conforme a necessidade',
          'O controle de acesso REAL esta no RLS do Supabase — o frontend apenas esconde elementos',
          'Sempre defina um perfil padrao seguro (o minimo de acesso possivel)',
          'Crie uma pagina de teste para cada perfil — faca login como cada tipo e verifique',
          'Mantenha um documento descrevendo o que cada perfil pode e nao pode fazer',
        ],
      },
      {
        title: 'Permissoes por Perfil',
        subtitle: 'RBAC — Controle de acesso granular por role',
        level: 'avancado',
        icon: 'shield',
        analogy: {
          title: 'O Organograma de Autoridade',
          central: 'Matriz de permissoes por funcao',
          description: 'RBAC e como o organograma do escritorio traduzido em permissoes — o organograma define quem manda em que, e o RBAC traduz isso em quem pode clicar no que dentro do app.',
        },
        content: `RBAC (Role-Based Access Control) e o modelo de permissoes onde cada role (perfil) tem um conjunto definido de permissoes.

**Matriz de permissoes completa:**

| Funcionalidade | Admin | Advogado | Estagiario | Secretaria | Cliente |
|----------------|-------|----------|-----------|-----------|---------|
| Ver todos os casos | Sim | Nao (so seus) | Nao | Nao | Nao |
| Criar caso | Sim | Sim | Nao | Nao | Nao |
| Editar caso | Sim | Seus | Nao | Nao | Nao |
| Deletar caso | Sim | Nao | Nao | Nao | Nao |
| Ver documentos | Sim | Do caso | Atribuidos | Nao | Seus |
| Upload de documentos | Sim | Sim | Sim | Nao | Sim |
| Ver prazos | Sim | Seus | Atribuidos | Todos | Seus |
| Gerenciar agenda | Sim | Sim | Nao | Sim | Nao |
| Ver financeiro | Sim | Seus | Nao | Nao | Seus |
| Configuracoes do app | Sim | Nao | Nao | Nao | Nao |`,
        prompt: `Crie um sistema completo de RBAC (Role-Based Access Control) para meu app juridico. Preciso de:

1. Uma tabela "permissions" no Supabase com: role, resource (casos, documentos, prazos, honorarios, usuarios), action (read, create, update, delete), scope (all, own, team, none)
2. Dados iniciais para 5 roles: admin, advogado, estagiario, secretaria, cliente
3. Um hook usePermission(resource, action) que retorna boolean
4. Um componente <RequirePermission resource="casos" action="delete"> que so renderiza children se permitido
5. Uma pagina de admin "/configuracoes/permissoes" com grid de roles x resources com toggles
6. Botao "Restaurar Padroes" que reseta as permissoes

Use shadcn/ui Table, Switch e Tabs (uma tab por role).`,
        tips: [
          'Comece com permissoes restritivas e va abrindo conforme necessario',
          'Nunca de permissao de "delete" para roles que nao sao admin',
          'Teste TODAS as combinacoes de role+resource+action antes de ir para producao',
          'Mantenha as permissoes em tabela (nao hardcoded) para facilitar ajustes sem deploy',
          'Crie um seed script com as permissoes padrao para novos escritorios',
        ],
      },
      {
        title: 'Workspace para Escritorio',
        subtitle: 'Isolamento de dados por escritorio — multi-tenancy',
        level: 'avancado',
        icon: 'building',
        analogy: {
          title: 'Os Andares do Predio Comercial',
          central: 'Isolamento total entre escritorios',
          description: 'Um workspace e como um andar isolado num predio comercial — cada escritorio tem seu andar com recepcao, salas e arquivo proprios. Quem trabalha no 5o andar nao acessa o 6o. Mas o administrador do predio tem a chave de todos os andares.',
        },
        content: `Se voce planeja que multiplos escritorios usem o mesmo app, precisa de isolamento de dados por escritorio (multi-tenancy). Cada escritorio e um "workspace" independente.

**Modelo de dados multi-tenant:** Adicione um campo \`escritorio_id\` em todas as tabelas e filtre por esse campo no RLS.

**Vantagens do multi-tenant:**

| Aspecto | Single-tenant | Multi-tenant |
|---------|--------------|-------------|
| **Infraestrutura** | 1 banco por escritorio | 1 banco para todos |
| **Custo** | Alto (N bancos) | Baixo (1 banco) |
| **Manutencao** | Dificil (atualizar N instancias) | Facil (1 instancia) |
| **Isolamento** | Total (bancos separados) | Logico (RLS) |
| **Escala** | Limitada | Ilimitada |`,
        tips: [
          'Adicione escritorio_id em TODAS as tabelas desde o inicio — e muito dificil migrar depois',
          'Teste o isolamento rigorosamente — crie 2 escritorios de teste e verifique que nao se cruzam',
          'Use RLS para isolamento (nao filtros no frontend) — e a unica forma segura',
          'Crie um script de seed que popula dados de teste em escritorios separados',
          'Monitore performance — multi-tenant em tabelas grandes precisa de indices no escritorio_id',
        ],
      },
      {
        title: 'Lovable Multiplayer',
        subtitle: 'Colaboracao em equipe no mesmo projeto Lovable',
        level: 'intermediario',
        icon: 'handshake',
        content: `O Lovable suporta trabalho em equipe no mesmo projeto. Multiplas pessoas podem colaborar simultaneamente no desenvolvimento do app.

**Funcionalidades de colaboracao:**

| Recurso | O que Faz | Como Usar |
|---------|----------|----------|
| **Compartilhar projeto** | Dar acesso a outros membros | Settings > Team > Invite |
| **Edicao simultanea** | Multiplas pessoas editando | Cada pessoa no seu chat |
| **Historico por autor** | Ver quem fez cada alteracao | Painel de versoes |
| **Branches** | Trabalhar em funcionalidades separadas | Via GitHub integration |

**Cenario tipico para escritorio:**

| Quem | Faz o que no Lovable |
|------|---------------------|
| **Advogado-fundador** | Define requisitos, testa, faz deploy |
| **Dev contratado** | Implementa funcionalidades complexas |
| **Designer** | Ajusta layout e cores via Visual Edits |
| **Estagiario TI** | Testa funcionalidades, reporta bugs |`,
        tips: [
          'Defina claramente quem faz deploy — evite que multiplas pessoas publiquem ao mesmo tempo',
          'Use branches para funcionalidades grandes — evita conflitos',
          'Mantenha o Knowledge Base atualizado com as convencoes do projeto',
          'Faca reunioes semanais curtas (15 min) para alinhar prioridades',
          'Use Plan Mode antes de implementar — outros membros podem revisar o plano',
        ],
      },
      {
        title: 'Notificacoes por Perfil',
        subtitle: 'Cada perfil recebe apenas as notificacoes relevantes',
        level: 'avancado',
        icon: 'mail',
        content: `Em escritorios com equipe, cada pessoa precisa receber notificacoes diferentes. O advogado precisa saber de prazos, a secretaria de agendamentos, o cliente de atualizacoes.

**Matriz de notificacoes por perfil:**

| Notificacao | Admin | Advogado | Estagiario | Secretaria | Cliente |
|-------------|-------|----------|-----------|-----------|---------|
| Prazo vencendo | Todos | Seus casos | Atribuidos | Todos | Seus |
| Audiencia agendada | Nao | Seus casos | Nao | Todas | Seus |
| Documento novo | Nao | Seus casos | Atribuidos | Nao | Seus |
| Pagamento recebido | Sim | Nao | Nao | Nao | Sim |
| Relatorio semanal | Sim | Sim | Nao | Nao | Nao |

**Regra de ouro:** Menos e mais. E melhor enviar 3 notificacoes relevantes por dia do que 20 que serao ignoradas.`,
        tips: [
          'Permita que cada usuario personalize suas notificacoes',
          'Clientes devem receber poucas notificacoes, todas relevantes — nao spamme',
          'Use notificacoes in-app como padrao e email/WhatsApp apenas para urgencias',
          'Agrupe notificacoes similares — "3 prazos vencendo esta semana" e melhor que 3 separadas',
          'Implemente "nao perturbe" fora do horario comercial',
        ],
      },
      {
        title: 'Dashboard por Perfil',
        subtitle: 'Cada perfil ve a tela inicial ideal para sua funcao',
        level: 'avancado',
        icon: 'layout',
        analogy: {
          title: 'A Mesa de Trabalho Personalizada',
          central: 'Tela inicial por funcao',
          description: 'Um dashboard por perfil e como cada pessoa ter sua mesa de trabalho organizada do jeito que precisa — o advogado tem processos e prazos a vista, a secretaria tem agenda e telefone na frente, o estagiario tem as tarefas pendentes, e o socio tem o painel financeiro.',
        },
        content: `Quando o usuario faz login, a primeira tela que ve deve ser relevante para sua funcao.

**Dashboard por perfil:**

| Perfil | Widgets na Tela Inicial |
|--------|----------------------|
| **Admin/Socio** | KPIs financeiros, casos abertos/fechados no mes, equipe ativa, alertas |
| **Advogado** | Meus prazos da semana, minhas audiencias, meus casos recentes, tarefas |
| **Estagiario** | Tarefas atribuidas, prazos dos casos em que participa, pesquisas pendentes |
| **Secretaria** | Agenda do dia, ligacoes para retornar, correspondencias, agendamentos |
| **Cliente** | Status do meu caso, proximos eventos, documentos disponiveis, pagamentos |`,
        prompt: `Crie um sistema de dashboard personalizavel por perfil de usuario. Preciso de:

1. Um componente DashboardRouter que detecta o role do usuario logado e renderiza o dashboard correto
2. Dashboard do Socio/Admin: cards com KPIs (casos abertos, honorarios recebidos, honorarios pendentes, taxa de sucesso), grafico de receita mensal (ultimos 6 meses), lista de alertas
3. Dashboard do Advogado: meus prazos da semana em lista ordenada por urgencia, minhas proximas audiencias, meus casos recentes com status, contagem de tarefas pendentes
4. Dashboard do Cliente: status do meu caso com progress bar, proximos eventos, documentos disponiveis para download, status de pagamentos

Cada dashboard deve usar shadcn/ui Cards para os widgets, Recharts para graficos, e Badge para status. Layout responsivo com grid que se adapta de 4 colunas (desktop) para 1 coluna (mobile). Dados vindos do Supabase com React Query.`,
        tips: [
          'O dashboard e a primeira impressao — invista tempo deixando-o util e bonito',
          'Use cores consistentes: verde = positivo, vermelho = urgente, azul = informativo',
          'Carregue dados em paralelo (multiplas queries) para o dashboard carregar rapido',
          'Adicione um seletor de periodo (semana, mes, trimestre) nos KPIs',
          'Permita que o usuario customize quais widgets aparecem',
        ],
      },
      {
        title: 'Convite e Onboarding',
        subtitle: 'Como convidar usuarios e guia-los no primeiro acesso',
        level: 'intermediario',
        icon: 'rocket',
        content: `Um bom onboarding transforma um usuario confuso em um usuario ativo. Quando o advogado convida um colega ou cadastra um cliente no app, essa pessoa precisa de orientacao.

**Fluxo de convite:**

1. Admin/advogado acessa "Gerenciar Equipe" no app
2. Clica em "Convidar Membro"
3. Preenche: nome, email, perfil (role)
4. Sistema envia email com link de cadastro
5. Convidado clica no link, cria senha
6. Ao fazer primeiro login, ve o onboarding guiado

**Onboarding por perfil:**

| Perfil | Primeira Acao Sugerida |
|--------|----------------------|
| **Advogado** | "Cadastre seu primeiro caso" |
| **Secretaria** | "Veja a agenda de hoje" |
| **Estagiario** | "Confira suas tarefas pendentes" |
| **Cliente** | "Acompanhe o andamento do seu caso" |`,
        tips: [
          'O email de convite deve ser simples e direto — 1 botao grande "Aceitar Convite"',
          'O onboarding guiado deve durar no maximo 2 minutos',
          'Sugira a primeira acao baseada no perfil — isso aumenta a ativacao',
          'Envie um lembrete automatico se o convite nao foi aceito em 24h',
          'Permita que o admin revogue convites pendentes',
        ],
        flowSteps: [
          { label: 'Convite', description: 'Admin insere email e role do novo membro' },
          { label: 'Email', description: 'Sistema envia email com link de cadastro' },
          { label: 'Cadastro', description: 'Convidado cria conta pelo link' },
          { label: 'Onboarding', description: 'Tour guiado personalizado por perfil' },
          { label: 'Ativacao', description: 'Primeira acao completada com sucesso' },
        ],
      },
      {
        title: 'Gestao de Equipe',
        subtitle: 'Painel administrativo para gerenciar usuarios',
        level: 'avancado',
        icon: 'sliders',
        content: `O painel de gestao de equipe e a central de controle do admin. Permite adicionar, remover e gerenciar todos os usuarios do escritorio.

**Funcionalidades do painel:**

| Funcionalidade | Descricao |
|----------------|----------|
| **Lista de membros** | Todos os usuarios com nome, email, role, status |
| **Convidar membro** | Enviar convite por email com role pre-definido |
| **Editar role** | Alterar o perfil de um usuario |
| **Desativar conta** | Bloquear acesso sem excluir dados |
| **Reset de senha** | Forcar troca de senha por email |
| **Historico de acesso** | Ultimo login, dispositivo, IP |
| **Convites pendentes** | Lista de convites enviados e nao aceitos |

**Desativacao vs exclusao:** Nunca exclua um usuario — desative. Dados vinculados ao usuario perderiam a referencia se o usuario fosse excluido. Desativar mantem os dados intactos e bloqueia o login.`,
        tips: [
          'NUNCA exclua usuarios — sempre desative (preserva integridade dos dados)',
          'Ao desativar um advogado, transfira os casos dele para outro antes',
          'Configure alertas quando o escritorio atingir 80% do limite de usuarios do plano',
          'Mantenha log de todas as acoes administrativas (quem alterou o que)',
          'Permita bulk actions: desativar varios, reenviar convites em massa',
        ],
      },
      {
        title: 'SaaS Multi-tenant',
        subtitle: 'Venda seu app juridico para outros escritorios',
        level: 'expert',
        icon: 'building',
        analogy: {
          title: 'A Franquia Digital',
          central: 'Produto replicavel para outros escritorios',
          description: 'Transformar seu app em SaaS multi-tenant e como criar uma franquia do seu escritorio digital — cada escritorio recebe uma copia identica do sistema, com sua propria marca, seus dados isolados e sua conta separada. Voce e o franqueador digital.',
        },
        content: `Se voce construiu um app juridico que funciona bem para seu escritorio, pode vende-lo como SaaS (Software as a Service) para outros escritorios.

**Modelos de precificacao:**

| Plano | Publico | Preco Sugerido | Inclui |
|-------|--------|---------------|--------|
| **Starter** | Solo (1 advogado) | R$ 149/mes | 1 usuario, 50 casos, 1GB storage |
| **Professional** | Pequeno escritorio | R$ 399/mes | 5 usuarios, 200 casos, 5GB storage |
| **Business** | Medio escritorio | R$ 899/mes | 15 usuarios, ilimitado, 20GB storage |
| **Enterprise** | Grande escritorio | Sob consulta | Ilimitado, SLA, suporte dedicado |

**Custos operacionais estimados:**

| Item | Custo Mensal |
|------|-------------|
| Supabase Pro | R$ 130 |
| Lovable | R$ 100 |
| Dominio | R$ 3 (anualizado) |
| Email (Resend) | R$ 0 (ate 3K emails) |
| Stripe | 3.99% + R$ 0.39 por transacao |
| **Total fixo** | ~R$ 233/mes |

Com apenas 2 escritorios no plano Professional (R$ 399 x 2 = R$ 798), voce ja cobre os custos fixos e lucra.`,
        tips: [
          'Comece vendendo para escritorios amigos e colete feedback real antes de escalar',
          'O suporte e o que mais consome tempo — invista em documentacao e tutoriais em video',
          'Ofereca trial gratuito de 14 dias para reduzir a barreira de entrada',
          'Monitore churn obsessivamente — cada escritorio que cancela custa 10x mais que reter',
          'Considere contratar um dev freelancer quando tiver 10+ escritorios pagantes',
        ],
      },
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // SEÇÃO 10: TÉCNICAS AVANÇADAS
  // ═══════════════════════════════════════════════════════════
  {
    id: 'tecnicas-avancadas',
    title: 'Técnicas Avançadas',
    description: 'Domine Lovable e construa apps complexos',
    icon: 'graduation-cap',
    cards: [
      {
        title: 'Editando Codigo Direto',
        subtitle: 'Quando e por que editar o codigo gerado pelo Lovable',
        level: 'avancado',
        icon: 'terminal',
        analogy: {
          title: 'O Manuscrito com Correcoes a Caneta',
          central: 'Edicao manual do codigo gerado',
          description: 'Editar o codigo do Lovable e como fazer correcoes a caneta numa minuta impressa — a maior parte do documento foi gerada automaticamente, mas as vezes voce precisa ajustar um paragrafo ou trocar uma expressao que so voce sabe que precisa mudar.',
        },
        content: `O Lovable gera codigo React + TypeScript automaticamente a partir dos seus prompts. Na maioria das vezes, o codigo gerado funciona perfeitamente. Mas em casos especificos, editar diretamente o codigo pode ser mais rapido e preciso.

**Quando editar codigo diretamente:**

| Situacao | Editar Codigo | Usar Chat |
|----------|:------------:|:---------:|
| Ajuste fino de layout (1-2 pixels) | Sim | Demorado |
| Corrigir um texto/label | Sim | Ok |
| Logica de negocio complexa | Depende | Sim |
| Adicionar funcionalidade nova | Nao | Sim |
| Configuracao tecnica (env vars) | Sim | Nao ideal |

**Conceitos minimos de React + TypeScript para advogados:**

| Conceito | Explicacao Simples |
|----------|-------------------|
| **Component** | Bloco visual reutilizavel (como um modelo de peticao) |
| **Props** | Dados que o bloco recebe (como os campos variaveis do modelo) |
| **State** | Dados que mudam na tela (como o status de um campo) |
| **JSX** | HTML dentro do JavaScript (a aparencia do componente) |
| **Import/Export** | Trazer/compartilhar blocos entre arquivos |

**Dica importante:** Se nao sabe programar, use o chat. Se sabe um pouco, edite diretamente para ajustes finos. Se sabe muito, combine os dois para maxima produtividade.`,
        tips: [
          'Use o editor integrado do Lovable para ajustes finos — e mais rapido que escrever um prompt',
          'Para aprender React basico, peca ao Lovable: "Explique o codigo deste componente linha por linha"',
          'Antes de editar, entenda o que cada parte faz — erros de sintaxe quebram o preview',
          'Se errar na edicao, use Ctrl+Z ou reverta pela versao anterior no historico',
          'Componentes shadcn/ui (Card, Badge, Button) sao os blocos mais comuns — familiarize-se',
        ],
      },
      {
        title: 'Componentes Reutilizaveis',
        subtitle: 'Crie blocos que funcionam em multiplos apps',
        level: 'avancado',
        icon: 'package',
        analogy: {
          title: 'Os Modelos de Peticao',
          central: 'Blocos reutilizaveis de interface',
          description: 'Componentes reutilizaveis sao como modelos de peticao do escritorio — voce cria uma vez e reutiliza em dezenas de casos, apenas mudando os dados variaveis. Economiza tempo e garante consistencia.',
        },
        content: `Componentes reutilizaveis sao blocos de interface que voce cria uma vez e usa em varias paginas e ate em varios apps.

**Componentes essenciais para apps juridicos:**

| Componente | O que Faz | Onde Usar |
|-----------|----------|----------|
| **DataTable** | Tabela com busca, filtro, paginacao, sort | Lista de casos, clientes, prazos |
| **FileUpload** | Upload de arquivos com validacao | Documentos, peticoes, contratos |
| **StatusBadge** | Badge colorido por status | Em qualquer entidade com status |
| **DateCountdown** | Contagem regressiva para prazo | Dashboard, lista de prazos |
| **CurrencyDisplay** | Exibicao formatada de valor em R$ | Honorarios, pagamentos |
| **CPFInput** | Input com mascara e validacao de CPF | Cadastro de clientes PF |
| **CNPJInput** | Input com mascara e validacao de CNPJ | Cadastro de clientes PJ |
| **ProcessoInput** | Input com mascara do numero de processo | Cadastro de casos |
| **EmptyState** | Tela vazia com ilustracao e call-to-action | Qualquer lista sem dados |
| **ConfirmDialog** | Modal de confirmacao antes de acoes destrutivas | Exclusao, arquivamento |`,
        tips: [
          'Crie componentes genericos que recebem dados via props — nao hardcode dados',
          'Mantenha componentes em src/components/shared/ para facil localizacao',
          'Um bom componente faz UMA coisa bem feita — nao tente criar um super componente',
          'Peca ao Lovable para criar componentes com TypeScript tipado — evita bugs',
          'Componentes de input com mascara (CPF, CNPJ, processo) economizam muito tempo',
        ],
      },
      {
        title: 'Estado e Gerenciamento de Dados',
        subtitle: 'useState, useEffect e React Query — como o app lembra',
        level: 'avancado',
        icon: 'database',
        analogy: {
          title: 'A Memoria do Estagiario',
          central: 'Como o app gerencia informacoes',
          description: 'O estado do app funciona como a memoria do estagiario — useState e o que ele lembra enquanto esta na mesa. useEffect e a instrucao "quando chegar de manha, verifique o email". O React Query e o caderno de anotacoes que ele consulta para nao perguntar a mesma coisa duas vezes.',
        },
        content: `Entender como o React gerencia dados e essencial para debugar problemas e criar funcionalidades avancadas.

**Os 3 pilares do gerenciamento de dados:**

| Conceito | O que Faz | Analogia |
|----------|----------|---------|
| **useState** | Armazena dados temporarios na tela | Anotacao no post-it |
| **useEffect** | Executa acoes quando algo muda | Lembrete automatico |
| **React Query** | Busca, cacheia e sincroniza dados do banco | O arquivo permanente |

**Quando cada um e usado:**
- **useState**: Para controles de UI (abrir/fechar, selecoes, inputs temporarios)
- **useEffect**: Para reacoes a mudancas (filtros, validacoes, side effects)
- **React Query**: Para TODOS os dados que vem do banco de dados`,
        tips: [
          'Se os dados vem do Supabase, SEMPRE use React Query — nao useState + useEffect',
          'React Query faz cache automaticamente — evita chamadas desnecessarias ao banco',
          'Use staleTime para controlar por quanto tempo os dados ficam em cache',
          'Apos uma mutation (criar/editar/deletar), invalide a query para recarregar os dados',
          'Nao se preocupe em memorizar tudo — peca ao Lovable e estude o codigo gerado',
        ],
      },
      {
        title: 'Formularios Avancados',
        subtitle: 'Validacao complexa, multi-step, upload e campos condicionais',
        level: 'avancado',
        icon: 'file-text',
        content: `Formularios sao a principal forma de entrada de dados no app. Para escritorios juridicos, os formularios sao frequentemente complexos: multiplas etapas, campos condicionais, validacoes especificas e upload de documentos.

**Tipos de formulario em apps juridicos:**

| Formulario | Campos | Complexidade |
|-----------|--------|-------------|
| **Cadastro de cliente PF** | Nome, CPF, RG, endereco, contato | Media |
| **Cadastro de cliente PJ** | Razao social, CNPJ, representantes | Media |
| **Abertura de caso** | Tipo, area, partes, vara, comarca, documentos | Alta |
| **Registro de audiencia** | Data, hora, local, tipo, participantes | Media |
| **Proposta de honorarios** | Servicos, valores, condicoes, parcelas | Alta |`,
        prompt: `Crie um formulario multi-step de abertura de caso juridico com 5 etapas:

Etapa 1 - Tipo de Caso: select de area do direito (civil, trabalhista, tributario, penal, familia, empresarial), tipo de acao (text), comarca (text), vara (text)

Etapa 2 - Partes: select tipo de cliente (PF/PJ), campos condicionais (PF: nome, CPF, RG | PJ: razao social, CNPJ, representante), dados da parte contraria

Etapa 3 - Detalhes: numero do processo (com mascara), valor da causa (currency input), data de distribuicao (date picker), observacoes (textarea)

Etapa 4 - Documentos: upload multiplo de PDF (maximo 5 arquivos, 10MB cada), cada arquivo com campo de descricao. Upload para Supabase Storage.

Etapa 5 - Revisao: preview de todos os dados preenchidos, botao "Voltar" para cada etapa, botao "Criar Caso" para submeter.

Use React Hook Form + Zod para validacao, shadcn/ui para todos os inputs, stepper visual no topo. Salvar no Supabase ao confirmar.`,
        tips: [
          'Divida formularios longos em etapas de no maximo 5-6 campos cada',
          'Salve rascunhos automaticamente (auto-save) para que o usuario nao perca dados',
          'Use campos condicionais para simplificar — so mostre o que e relevante',
          'Valide cada etapa antes de avancar para a proxima',
          'A etapa de revisao e obrigatoria — evita erros de preenchimento',
        ],
      },
      {
        title: 'Graficos e Visualizacoes',
        subtitle: 'Dashboards com dados reais do escritorio',
        level: 'avancado',
        icon: 'bar-chart',
        content: `Graficos transformam dados brutos em insights visuais. Para socios e administradores de escritorios, visualizacoes claras ajudam na tomada de decisao.

**Tipos de grafico para escritorios:**

| Grafico | Uso | Dados |
|---------|-----|-------|
| **Barras** | Casos por mes, por area | Comparacao entre categorias |
| **Linha** | Evolucao de receita, processos | Tendencias ao longo do tempo |
| **Pizza/Donut** | Distribuicao por area, status | Proporcoes do total |
| **Area** | Fluxo de caixa acumulado | Volume ao longo do tempo |

**Biblioteca: Recharts** — O Lovable usa Recharts por padrao. E a biblioteca de graficos mais popular para React e ja vem configurada.

**Dica de performance:** Para dashboards com muitos graficos, use \`staleTime\` alto no React Query e adicione um botao "Atualizar" manual.`,
        tips: [
          'Use cores consistentes: verde = receita, vermelho = despesa, amarelo = pendente',
          'Sempre use ResponsiveContainer para graficos se adaptarem ao tamanho da tela',
          'Para mobile, simplifique — graficos de pizza funcionam melhor que barras em telas pequenas',
          'Crie RPCs no Supabase para queries complexas — mais rapido que multiplas queries no frontend',
          'Adicione tooltips em todos os graficos para mostrar valores exatos ao passar o mouse',
        ],
      },
      {
        title: 'Busca e Filtros Avancados',
        subtitle: 'Encontre qualquer caso, cliente ou documento em segundos',
        level: 'avancado',
        icon: 'search',
        content: `Em escritorios com centenas de casos e milhares de documentos, uma busca eficiente e indispensavel. O Supabase oferece recursos avancados de busca.

**Niveis de busca:**

| Nivel | Tecnica | Exemplo |
|-------|---------|---------|
| **Basico** | Filtro por campo | Status = "ativo" |
| **Intermediario** | Busca textual (ILIKE) | Nome contem "Silva" |
| **Avancado** | Full-text search | Buscar "dano moral trabalhista" em qualquer campo |
| **Expert** | Fuzzy search | Encontrar "Joao Silv" mesmo digitando errado |

**Interface de filtros:** Crie um painel de filtros colapsavel com: input de busca com debounce, selects para status/area/advogado, date pickers para periodo, botao "Limpar filtros" e contador de resultados.`,
        tips: [
          'Use debounce na busca — espere 300ms apos o usuario parar de digitar',
          'Full-text search em portugues precisa da configuracao "portuguese" no PostgreSQL',
          'Filtros combinados sao mais uteis que busca textual para encontrar casos especificos',
          'Permita salvar combinacoes de filtros como "Filtros favoritos"',
          'Para escritorios com 1000+ casos, indexacao e obrigatoria para performance',
        ],
      },
      {
        title: 'Exportacao de Relatorios',
        subtitle: 'Gere Excel, PDF e CSV dos dados do app',
        level: 'avancado',
        icon: 'spreadsheet',
        content: `Advogados e socios frequentemente precisam exportar dados do app para relatorios, prestacao de contas ou envio a clientes.

**Tipos de relatorio para escritorios:**

| Relatorio | Formato | Destinatario |
|-----------|---------|-------------|
| **Lista de casos ativos** | Excel/CSV | Socio, equipe |
| **Relatorio financeiro mensal** | PDF | Socios, contabilidade |
| **Andamento do caso** | PDF | Cliente |
| **Prazos da semana** | Excel | Advogado, secretaria |
| **Produtividade da equipe** | Excel | Administracao |

**Botao de exportacao na interface:** Adicione um dropdown "Exportar" com as opcoes de formato ao lado dos filtros de dados. O botao deve aplicar os mesmos filtros, buscar TODOS os registros e formatar para exportacao.`,
        tips: [
          'Sempre exporte com os mesmos filtros que o usuario aplicou na tela',
          'Para Excel, use SheetJS (xlsx) — e a biblioteca mais completa e gratuita',
          'PDFs de relatorios devem ter logo do escritorio e data de geracao',
          'Limite a exportacao a 10.000 registros — para mais, use processamento em background',
          'Adicione um disclaimer no rodape: "Gerado automaticamente em [data]"',
        ],
      },
      {
        title: 'Internacionalizacao',
        subtitle: 'App em portugues E ingles para clientes internacionais',
        level: 'expert',
        icon: 'globe',
        content: `Escritorios que atendem clientes internacionais podem precisar do app em multiplos idiomas. A internacionalizacao (i18n) permite que o app se adapte ao idioma do usuario.

**Quando internacionalizar:**

| Cenario | Idiomas | Prioridade |
|---------|---------|-----------|
| Escritorio 100% nacional | Portugues | Nao precisa |
| Clientes estrangeiros eventuais | PT + EN | Media |
| Escritorio binacional | PT + EN | Alta |
| Legaltech SaaS internacional | PT + EN + ES | Alta |

**Biblioteca: react-i18next** — A forma padrao de internacionalizar apps React. Use chaves de traducao desde o inicio (mesmo se so em PT) para facilitar i18n futuro.

**O que NAO traduzir:** Nomes de leis brasileiras, termos juridicos especificos (cite em portugues com traducao em parenteses), numeros de processo.`,
        tips: [
          'Comece traduzindo apenas a interface (menus, botoes, labels)',
          'Use chaves de traducao desde o inicio — facilita i18n futuro',
          'Termos juridicos devem manter o original + traducao',
          'Teste a interface em ingles — textos mais longos podem quebrar o layout',
          'Contrate um tradutor juridico para os textos tecnicos',
        ],
      },
      {
        title: 'Testes Automatizados',
        subtitle: 'Garanta que o app funciona sem testar manualmente',
        level: 'expert',
        icon: 'check-circle',
        content: `Testes automatizados verificam que o app funciona corretamente sem precisar de um humano clicando em cada botao.

**Tipos de teste:**

| Tipo | O que Testa | Ferramenta |
|------|-----------|-----------|
| **Unitario** | Uma funcao isolada | Vitest |
| **Componente** | Um componente React | Testing Library |
| **Integracao** | Fluxo entre componentes | Testing Library |
| **E2E** | Fluxo completo no navegador | Playwright |

**O que testar em apps juridicos:**

| Prioridade | O que Testar |
|-----------|-------------|
| **Critica** | Validacoes de CPF, CNPJ, numero de processo |
| **Critica** | RLS (cada role so ve seus dados) |
| **Alta** | Formularios (dados obrigatorios, formatos) |
| **Alta** | Fluxo de autenticacao (login, logout, reset) |
| **Media** | Navegacao entre paginas |
| **Media** | Exportacao de dados (Excel, PDF) |`,
        tips: [
          'Comece pelos testes mais criticos: validacoes e autenticacao',
          'Testes de RLS sao especialmente importantes — garanta que dados nao vazam entre perfis',
          'Use dados de teste realistas (CPFs validos de teste, nao "12345678900")',
          'Se nao sabe programar testes, peca ao Lovable: "Crie testes unitarios para o componente X"',
          'Testes E2E (Playwright) sao os mais confiaveis mas os mais lentos — use com moderacao',
        ],
      },
      {
        title: 'CI/CD e Automacao',
        subtitle: 'Deploy automatico, pipelines e qualidade de codigo',
        level: 'expert',
        icon: 'workflow',
        content: `CI/CD (Continuous Integration / Continuous Deployment) automatiza o processo de testar e publicar seu app.

| Etapa | O que Faz | Analogia |
|-------|----------|---------|
| **CI** (Integracao Continua) | Testa o codigo automaticamente | Revisor que confere cada paragrafo |
| **CD** (Deploy Continuo) | Publica automaticamente quando os testes passam | Protocolista que envia quando o revisor aprova |

**Para a maioria dos escritorios:** O Lovable ja faz deploy automatico. Se voce nao precisa de testes automatizados ou pipelines customizados, o fluxo padrao do Lovable (editar → deploy) e suficiente. CI/CD e para quando o projeto cresce e tem multiplos desenvolvedores.`,
        tips: [
          'Para projetos pequenos, o deploy automatico do Lovable e suficiente',
          'Se tem GitHub conectado, configure ao menos lint e typecheck no CI',
          'GitHub Actions e gratuito para repositorios publicos e 2.000 min/mes para privados',
          'Nunca pule testes so porque "e uma mudanca pequena"',
          'Configure notificacoes para falhas no pipeline',
        ],
      },
      {
        title: 'Migracao de App Existente',
        subtitle: 'Traga seu sistema legado para o Lovable',
        level: 'avancado',
        icon: 'arrow-right-left',
        analogy: {
          title: 'A Mudanca de Escritorio',
          central: 'Transicao do sistema antigo para o novo',
          description: 'Migrar um sistema existente e como fazer uma mudanca de escritorio completa — voce precisa inventariar tudo que tem, embalar com cuidado, transportar para o novo endereco e reorganizar tudo nas novas estantes.',
        },
        content: `Se seu escritorio ja usa planilhas, Access, outro app ou ate papel para gerenciar casos, a migracao para o Lovable precisa ser planejada.

**Sistemas legados comuns em escritorios:**

| Sistema Atual | Complexidade | Estrategia |
|--------------|-------------|-----------|
| **Planilhas Excel** | Baixa | Export CSV → Import no Supabase |
| **Google Sheets** | Baixa | Export CSV ou API direta |
| **Microsoft Access** | Media | Export para CSV, recriar tabelas |
| **Software juridico** | Alta | Verificar se tem export de dados |
| **Papel/caderno** | Media (digitacao) | Cadastro manual no novo app |

**Estrategia de transicao:**

| Estrategia | Descricao | Risco |
|-----------|----------|-------|
| **Big bang** | Desliga sistema antigo, liga novo | Alto |
| **Paralelo** | Usa os dois por 2-4 semanas | Baixo |
| **Gradual** | Migra uma funcionalidade por vez | Baixo |

**Recomendacao:** Use a estrategia **paralela** por 2 semanas.`,
        tips: [
          'NUNCA migre sem backup — mantenha uma copia completa do sistema antigo',
          'Limpe os dados ANTES de importar — e mais facil corrigir no Excel do que no banco',
          'Use a estrategia paralela — nunca desligue o sistema antigo antes de validar o novo',
          'Padronize CPFs, datas e nomes durante a limpeza',
          'Envolva a secretaria na validacao — ela conhece os dados melhor que ninguem',
        ],
      },
      {
        title: 'Otimizacao de Creditos',
        subtitle: 'Use menos creditos do Lovable com prompts eficientes',
        level: 'intermediario',
        icon: 'trending-up',
        analogy: {
          title: 'A Economia de Papel no Escritorio',
          central: 'Fazer mais com menos prompts',
          description: 'Otimizar creditos do Lovable e como economizar papel no escritorio — imprimir so o que precisa, usar frente e verso, revisar antes de imprimir. Cada credito salvo e um credito disponivel para uma funcionalidade nova.',
        },
        content: `O Lovable opera com um sistema de creditos (ou mensagens). Cada prompt consome creditos, e prompts ineficientes desperdicam.

**Estrategias de economia:**

| Estrategia | Economia | Como |
|-----------|---------|------|
| **Plan Mode primeiro** | ~30% | Planeje antes de implementar |
| **Visual Edits** | ~50% | Use edicoes visuais para ajustes de layout |
| **Prompts especificos** | ~40% | "Mude o titulo para X" em vez de "refaca a pagina inteira" |
| **Reutilizar componentes** | ~20% | Peca para criar componentes genericos |
| **Batch changes** | ~25% | Agrupe mudancas relacionadas em um unico prompt |

**Hierarquia de custo por operacao:**

| Operacao | Custo | Quando Usar |
|----------|-------|-------------|
| **Visual Edits** | Mais baixo | Ajustes de cor, tamanho, espacamento, texto |
| **Chat Mode** | Baixo | Perguntas, pequenos ajustes, debugging |
| **Agent Mode** | Medio | Funcionalidades novas, refatoracoes |
| **Plan Mode** | Variavel | Planejamento (economiza no Agent Mode depois) |

**Dica de ouro:** Quanto mais detalhado o prompt, menos retrabalho. Um prompt de 10 linhas e mais barato que 5 prompts de 2 linhas.`,
        tips: [
          'SEMPRE use Plan Mode antes de funcionalidades complexas — economiza 30% de creditos',
          'Visual Edits para cores, fontes e layout — e a forma mais barata de ajustar',
          'Agrupe mudancas relacionadas em um unico prompt',
          'Especifique TUDO no prompt: tecnologias, componentes, validacoes, integracoes',
          'Se o Lovable errou, descreva o erro detalhadamente em vez de pedir para refazer',
        ],
      },
      {
        title: 'Debug e Resolucao de Problemas',
        subtitle: 'Quando o Lovable erra: como debugar, reverter e reportar',
        level: 'intermediario',
        icon: 'wrench',
        content: `O Lovable e poderoso, mas nao perfeito. As vezes o app quebra ou o resultado nao e o esperado. Saber debugar e resolver problemas e essencial.

**Problemas mais comuns e solucoes:**

| Problema | Causa Provavel | Solucao |
|----------|---------------|---------|
| **Tela branca** | Erro de JavaScript | Abra o console (F12) e leia o erro |
| **Dados nao aparecem** | Query incorreta ou RLS | Verifique a query no Supabase Dashboard |
| **Login nao funciona** | Configuracao do Supabase Auth | Verifique as credenciais e o dominio |
| **Botao nao funciona** | Funcao com erro | Console do navegador (F12 > Console) |
| **Layout quebrado** | CSS conflitante | Use Visual Edits para corrigir |
| **Build falha** | Erro de TypeScript | Leia a mensagem de erro no terminal |

**Estrategia de debug:**
1. Reproduza o erro
2. Leia o console (F12)
3. Identifique o escopo: frontend, backend ou integracao?
4. Peca ajuda ao Lovable colando a mensagem de erro com contexto
5. Se persistir, reverta para versao anterior`,
        tips: [
          'F12 e seu melhor amigo — sempre abra o console quando algo nao funcionar',
          'Copie o erro COMPLETO do console e cole no chat do Lovable',
          'Se uma alteracao quebrou o app, reverta imediatamente antes de tentar consertar',
          'Problemas de dados geralmente sao RLS — teste no Supabase Dashboard',
          'Mantenha o Lovable e o navegador atualizados',
        ],
      },
      {
        title: 'Knowledge Base',
        subtitle: 'Adicione guidelines, personas e assets para guiar a IA do Lovable',
        level: 'avancado',
        icon: 'brain',
        analogy: {
          title: 'O Manual do Estagiario',
          central: 'Documentos de referencia para a IA',
          description: 'O Knowledge Base do Lovable e como o manual que voce entrega a todo estagiario novo — contem as regras do escritorio, os modelos de peticao, a identidade visual, os padroes de formatacao. O estagiario (IA) consulta o manual antes de fazer qualquer trabalho.',
        },
        content: `O Knowledge Base (KB) e uma das funcionalidades mais poderosas do Lovable. Ele permite adicionar documentos de referencia que a IA consulta automaticamente ao gerar codigo.

**O que colocar no Knowledge Base:**

| Documento | Conteudo | Impacto |
|-----------|---------|--------|
| **Design Guidelines** | Cores, fontes, espacamentos, estilo | Visual consistente em todas as paginas |
| **Personas de Usuario** | Perfil de cada tipo de usuario | Funcionalidades adequadas ao publico |
| **Regras de Negocio** | Logica especifica do escritorio | Implementacao correta das regras |
| **Nomenclatura** | Termos usados no escritorio | Consistencia de linguagem |
| **Stack Tecnico** | Tecnologias e padroes preferidos | Codigo padronizado |`,
        steps: [
          'No Lovable, acesse Settings ou a secao Knowledge Base do projeto',
          'Clique em "Add File" ou "Add Document"',
          'Crie o primeiro documento: "Design Guidelines" com cores, fontes e estilo',
          'Crie o segundo: "Personas" com o perfil de cada tipo de usuario',
          'Crie o terceiro: "Regras de Negocio" com a logica especifica do escritorio',
          'Opcional: adicione imagens de referencia (logo, mockups, inspiracoes)',
          'Teste: faca um prompt e verifique se a IA seguiu as guidelines',
          'Ajuste os documentos conforme necessario — e iterativo',
        ],
        tips: [
          'O Knowledge Base e o maior diferencial entre um app generico e um app personalizado',
          'Comece com Design Guidelines — impacta visualmente todas as telas',
          'Personas ajudam a IA a criar interfaces adequadas ao seu publico',
          'Atualize o KB conforme o projeto evolui',
          'Use markdown formatado — a IA interpreta melhor do que texto corrido',
        ],
      },
      {
        title: 'Edge Functions Avancadas',
        subtitle: 'Cron jobs, processamento em background e webhooks complexos',
        level: 'expert',
        icon: 'cpu',
        content: `Edge Functions no Supabase sao funcoes serverless que rodam no backend. Para funcionalidades avancadas como processamento agendado e background jobs, elas sao essenciais.

**Casos de uso avancados:**

| Funcionalidade | Edge Function | Trigger |
|----------------|-------------|---------|
| **Alerta de prazo** | Verifica prazos vencendo e envia emails | Cron (diario as 7h) |
| **Relatorio semanal** | Gera PDF com metricas e envia | Cron (segundas as 8h) |
| **Analise de contrato** | Envia para API de IA e salva resultado | HTTP (chamada do frontend) |
| **Webhook do Stripe** | Processa pagamento e atualiza banco | Webhook (POST do Stripe) |
| **Sync com tribunal** | Consulta API do tribunal e atualiza casos | Cron (a cada 6h) |
| **Backup de dados** | Exporta tabelas para Storage | Cron (diario as 2h) |

**Processamento em background:** Para tarefas que demoram, use o pattern de "job queue": Frontend cria registro com status "pending", Edge Function processa, atualiza status para "completed", frontend monitora e exibe resultado.`,
        tips: [
          'Use pg_cron para agendar Edge Functions — mais confiavel que cron externo',
          'Sempre use SERVICE_ROLE_KEY em Edge Functions agendadas (nao ANON_KEY)',
          'Para tarefas longas, use o pattern de job queue',
          'Monitore logs das Edge Functions diariamente nas primeiras semanas',
          'Configure retry automatico para Edge Functions que podem falhar',
        ],
      },
      {
        title: 'O Futuro: Lovable e LegalTech',
        subtitle: 'Tendencias que estao transformando a advocacia',
        level: 'expert',
        icon: 'sparkles',
        content: `O Lovable esta na intersecao de duas revolucoes: no-code/low-code e inteligencia artificial. Para advogados que dominam essa combinacao, as oportunidades sao enormes.

**Tendencias LegalTech para 2025-2027:**

| Tendencia | Status | Impacto |
|-----------|--------|--------|
| **IA para analise de contratos** | Maduro | Reduz 80% do tempo de revisao |
| **Automacao processual** | Emergente | Peticionamento semi-automatico |
| **Legal agents (agentes de IA)** | Inicial | IA que monitora processos autonomamente |
| **No-code para advogados** | Crescente | Advogados criando seus proprios apps |
| **Legal data analytics** | Maduro | Predicao de resultados em tribunais |

**Vantagem competitiva:**
- **Advogado puro**: Trabalha caso a caso, escala linear
- **Advogado + IA**: Produtividade 3-5x maior
- **Advogado + Lovable**: Cria ferramentas que multiplicam a produtividade do escritorio inteiro
- **Advogado + Lovable + SaaS**: Cria produto que gera receita recorrente de outros escritorios

**A mensagem final:** Voce nao precisa ser um programador. Voce precisa ser um advogado que entende como usar a tecnologia a seu favor. O Lovable e a ponte entre a ideia juridica e o app funcionando.`,
        tips: [
          'Acompanhe o blog do Lovable e newsletters de LegalTech para novidades',
          'Participe de comunidades de LegalTech no LinkedIn e WhatsApp',
          'Comece pelo seu proprio escritorio — resolva seus problemas antes de vender para outros',
          'A maior vantagem do advogado-dev e o conhecimento do dominio',
          'Nao espere a tecnologia perfeita — comece com o que existe hoje e evolua',
        ],
      },
      {
        title: 'De Advogado a Founder',
        subtitle: 'Como transformar seu app juridico em uma startup LegalTech',
        level: 'expert',
        icon: 'rocket',
        analogy: {
          title: 'De Escritorio a Empresa de Tecnologia',
          central: 'Transformar app em produto SaaS',
          description: 'Transformar seu app em produto e como transformar suas peticoes modelo em um livro publicado — o que funcionava para seu escritorio agora funciona para todos. A diferenca e que o livro gera receita todos os meses, automaticamente.',
        },
        content: `Muitos advogados construiram apps no Lovable para resolver problemas do seu escritorio e descobriram que outros escritorios tinham os mesmos problemas.

**Etapas de advogado a founder:**

| Etapa | O que Fazer | Tempo |
|-------|-----------|-------|
| 1. **Resolver seu problema** | Crie o app para seu escritorio | 1-3 meses |
| 2. **Validar com outros** | Mostre para 5-10 escritorios | 1-2 meses |
| 3. **Adaptar para SaaS** | Multi-tenant, billing, onboarding | 2-3 meses |
| 4. **Primeiros clientes** | Venda para os que validaram | 1-2 meses |
| 5. **Crescer** | Marketing, suporte, features | Continuo |

**Break-even:** Com Lovable + Supabase, seu custo fixo e ~R$ 233/mes. Com 2 clientes pagando R$ 199/mes, voce ja cobre os custos. A partir do 3o cliente, e lucro.`,
        tips: [
          'Resolva seu proprio problema primeiro — o melhor produto nasce da necessidade real',
          'Valide com outros escritorios ANTES de investir em SaaS',
          'O break-even de uma LegalTech no Lovable e extremamente baixo',
          'LinkedIn e o melhor canal para vender para advogados',
          'Comece como solo founder e so contrate quando tiver 20+ clientes pagantes',
        ],
      },
      {
        title: 'Recursos e Comunidade',
        subtitle: 'Links para documentacao, tutoriais, suporte e comunidade',
        level: 'iniciante',
        icon: 'book-open',
        content: `Para continuar aprendendo e se manter atualizado, aqui estao os recursos mais importantes do ecossistema Lovable e da comunidade LegalTech.

**Documentacao oficial:**

| Recurso | O que Encontrar |
|---------|----------------|
| **Lovable Docs** | Documentacao completa da plataforma |
| **Supabase Docs** | Documentacao do banco de dados |
| **shadcn/ui** | Componentes de interface |
| **Tailwind CSS** | Utilitarios de estilo |
| **React** | Framework frontend |

**Proximos passos recomendados:**

1. Crie seu primeiro app no Lovable (comece simples — cadastro de clientes)
2. Adicione Supabase para persistir dados
3. Implemente autenticacao e RLS
4. Adicione as funcionalidades do seu escritorio (casos, prazos, documentos)
5. Configure integracoes (Stripe, email, WhatsApp)
6. Publique e compartilhe com seus clientes
7. Itere baseado no feedback real

**Lembre-se:** Voce nao precisa fazer tudo de uma vez. Comece pelo minimo viavel, coloque em producao e evolua com base no uso real. O Lovable permite iterar rapidamente — use isso a seu favor.`,
        tips: [
          'Salve este guia nos favoritos — voce vai consultar muitas vezes',
          'Entre no Discord do Lovable — a comunidade e ativa e ajuda rapidamente',
          'Acompanhe o blog do Lovable para novidades e funcionalidades',
          'Pratique diariamente — 30 minutos por dia valem mais que 8h no final de semana',
          'Compartilhe seu progresso no LinkedIn — outros advogados querem aprender tambem',
        ],
        links: [
          { label: 'Documentacao do Lovable', url: 'https://docs.lovable.dev' },
          { label: 'Documentacao do Supabase', url: 'https://supabase.com/docs' },
          { label: 'Componentes shadcn/ui', url: 'https://ui.shadcn.com' },
          { label: 'Tailwind CSS Docs', url: 'https://tailwindcss.com/docs' },
          { label: 'Discord do Lovable', url: 'https://discord.gg/lovable' },
          { label: 'AB2L — LegalTech Brasil', url: 'https://ab2l.org.br' },
        ],
      },
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // SEÇÃO 11: LOVABLE E INTELIGÊNCIA ARTIFICIAL
  // ═══════════════════════════════════════════════════════════
  {
    id: 'ia-lovable',
    title: 'Lovable e Inteligência Artificial',
    description: 'IA por trás do Lovable e como construir features inteligentes',
    icon: 'cpu',
    cards: [
      {
        title: 'Claude: O Cérebro do Lovable',
        subtitle: 'Entenda qual IA alimenta o Lovable e como ela funciona',
        level: 'iniciante',
        icon: 'brain',
        analogy: {
          title: 'Analogia Jurídica',
          central: 'O Estagiário Genial',
          description: 'Imagine um estagiário que leu todas as leis, doutrinas e jurisprudências do mundo, entende qualquer pedido em português natural e redige peças impecáveis em segundos. O Claude é esse "estagiário" por trás do Lovable — ele interpreta seus prompts e gera código real.',
        },
        elementGrid: [
          { icon: 'brain', title: 'Claude Opus 4.6', description: 'Usado no Agent Mode — o modelo mais poderoso, gera apps completos e resolve problemas complexos', highlight: true },
          { icon: 'zap', title: 'Claude Sonnet', description: 'Usado no modo padrão — equilibra velocidade e qualidade para a maioria das tarefas' },
          { icon: 'message-square', title: 'Claude Opus (Chat)', description: 'Usado no Chat Mode — ideal para debugar, investigar e planejar sem gastar créditos de geração' },
        ],
        content: `O **Lovable** é alimentado pela família de modelos **Claude**, da Anthropic — a mesma empresa que criou o Claude Code e o Claude.ai.

**Como os modelos são usados no Lovable:**

| Modo | Modelo | Quando Usar |
|------|--------|-------------|
| **Agent Mode** | Claude Opus 4.6 | Construir features completas, gerar páginas, criar lógica complexa |
| **Standard** | Claude Sonnet 3.7/4.5 | Tarefas do dia a dia, ajustes, correções |
| **Chat Mode** | Claude Opus 4.5 | Investigar problemas, planejar, tirar dúvidas sobre o código |

**O que isso significa na prática:**

Quando você digita um prompt no Lovable, ele é enviado para o Claude, que analisa seu pedido, entende o contexto do projeto (código existente, banco de dados, componentes) e gera código React + TypeScript + Tailwind CSS de alta qualidade.

**Por que o Claude é bom para apps jurídicos:**

- **Entende português** — interpreta termos jurídicos como "petição inicial", "audiência de instrução", "RLS por OAB"
- **Contextual** — lembra do seu projeto inteiro e gera código consistente
- **Seguro** — treinado para gerar código seguro por padrão (validações, proteções)
- **Iterativo** — aceita refinamentos ("agora mude a cor", "adicione um filtro por data")`,
        tips: [
          'O Lovable escolhe automaticamente o melhor modelo para cada situação',
          'Você não precisa saber nada sobre IA para usar o Lovable — basta escrever prompts claros',
          'O Claude entende contexto: quanto mais você constrói, melhor ele entende seu projeto',
          'Para tarefas simples, use Visual Edits (grátis) em vez de gastar créditos com o Claude',
        ],
        links: [
          { label: 'Documentação do Claude', url: 'https://docs.anthropic.com' },
          { label: 'Modelos Anthropic', url: 'https://docs.anthropic.com/en/docs/about-claude/models' },
          { label: 'Blog do Lovable sobre IA', url: 'https://lovable.dev/blog' },
        ],
      },
      {
        title: 'Modelos e Créditos de IA',
        subtitle: 'Quanto custa cada interação e como otimizar seu uso',
        level: 'iniciante',
        icon: 'credit-card',
        refTable: [
          { feature: 'Agent Mode (Opus)', description: 'Gera código completo, features inteiras, apps do zero', config: '~5-15 créditos por interação' },
          { feature: 'Standard (Sonnet)', description: 'Ajustes, correções, pequenas adições', config: '~2-5 créditos por interação' },
          { feature: 'Chat Mode', description: 'Conversar, debugar, planejar — SEM alterar código', config: 'Baixo custo ou grátis' },
          { feature: 'Visual Edits', description: 'Arrastar, clicar, editar texto e cores', config: 'Totalmente grátis' },
          { feature: 'Plan Mode', description: 'Planejar a estratégia antes de construir', config: 'Baixo custo' },
        ],
        content: `Cada modelo de IA tem um custo diferente. O Lovable gerencia isso automaticamente, mas entender os custos ajuda a economizar créditos.

**Como os créditos são consumidos:**

Cada prompt que você envia ao Lovable consome créditos proporcionais à complexidade da tarefa e ao modelo utilizado. Prompts maiores e mais complexos gastam mais créditos.

**Estratégia de economia:**

| Estratégia | Economia | Como |
|-----------|----------|------|
| **Visual Edits** | 100% | Arraste, clique, edite texto sem IA |
| **Chat Mode** | ~80% | Investigue antes de pedir mudanças |
| **Plan Mode** | ~50% | Planeje antes, execute uma vez |
| **Prompts detalhados** | ~30% | Menos iterações = menos créditos |
| **Knowledge Base** | ~20% | Diretrizes reduzem retrabalho |

**Dica de ouro:** A combinação Chat Mode (investigar) → Plan Mode (planejar) → Agent Mode (executar) → Visual Edits (polir) é a mais eficiente em créditos.

**Quanto custa na prática:**

Um app jurídico completo (portal de clientes com login, gestão de processos, prazos e honorários) consome tipicamente entre 200-400 créditos no plano Pro — equivalente a 1-2 semanas de uso.`,
        tips: [
          'Visual Edits são GRÁTIS — use sempre que possível para ajustes visuais',
          'Chat Mode gasta muito menos créditos que Agent Mode',
          'Um prompt bem escrito gasta o mesmo que 3 prompts vagos — invista em clareza',
          'Plan Mode ajuda a economizar pois você valida a estratégia antes de construir',
          'Monitore seu uso em Settings → Usage no Lovable',
        ],
      },
      {
        title: 'Knowledge Base Avançado',
        subtitle: 'Ensine o Lovable sobre seu escritório, regras e padrões',
        level: 'intermediario',
        icon: 'book-marked',
        steps: [
          'Acesse seu projeto no Lovable e clique em "Knowledge Base" (ícone de livro no painel lateral)',
          'Clique em "Add Knowledge" para criar uma nova entrada',
          'Dê um nome descritivo: ex. "Padrões do Escritório Silva & Associados"',
          'Escreva as diretrizes em linguagem natural — o Claude vai interpretá-las em cada prompt',
          'Inclua terminologia jurídica específica do seu escritório (ex. "sempre use petição inicial e nunca PI")',
          'Defina padrões de design: "usar cores azul marinho e branco, fonte formal, tom profissional"',
          'Adicione regras de negócio: "prazos críticos devem aparecer em vermelho, prazos normais em amarelo"',
          'Documente a estrutura do banco: "tabela processos tem colunas: id, numero_cnj, tipo, status, cliente_id"',
          'Salve e teste: faça um prompt que dependa das diretrizes e verifique se o Claude as segue',
          'Mantenha atualizado: revise a Knowledge Base a cada 2 semanas para refletir mudanças no projeto',
        ],
        content: `O **Knowledge Base** é uma das funcionalidades mais poderosas do Lovable. Ele permite que você "ensine" o Claude sobre seu projeto, escritório e preferências — sem precisar repetir instruções em cada prompt.

**O que incluir na Knowledge Base:**

| Categoria | Exemplos |
|-----------|----------|
| **Terminologia** | "Use 'processo' e não 'caso'", "RLS = Row Level Security" |
| **Padrões de design** | "Cores: azul #1e3a5f e branco #ffffff", "Fonte: Inter" |
| **Regras de negócio** | "Prazos < 3 dias = urgente", "Honorários mínimos = R$ 500" |
| **Estrutura do banco** | Nomes de tabelas, colunas e relacionamentos |
| **Tom e linguagem** | "Tom formal", "Tratamento: Exmo./Exma.", "Português BR" |
| **Restrições** | "Nunca mostrar dados de um cliente para outro", "Sempre validar OAB" |

**Por que usar:**

Sem Knowledge Base, você precisa repetir instruções em cada prompt. Com Knowledge Base, o Claude já sabe suas preferências e gera código alinhado desde a primeira interação.`,
        tips: [
          'Comece simples: 3-5 diretrizes já fazem grande diferença',
          'Seja específico: "cor azul" é vago, "#1e3a5f para headers" é preciso',
          'Inclua termos jurídicos: o Claude entende, mas pode usar variações se você não padronizar',
          'A Knowledge Base é por projeto — cada app pode ter suas próprias diretrizes',
          'Teste sempre: faça um prompt e verifique se as diretrizes foram respeitadas',
        ],
        links: [
          { label: 'Docs: Knowledge Base', url: 'https://docs.lovable.dev/features/knowledge-base' },
        ],
      },
      {
        title: 'Construindo um Chatbot Jurídico com IA',
        subtitle: 'Crie um assistente inteligente que responde perguntas dos seus clientes',
        level: 'intermediario',
        icon: 'bot',
        flowSteps: [
          { label: 'Interface', description: 'Crie a tela de chat com campo de input e balões de mensagens' },
          { label: 'Backend', description: 'Configure uma Edge Function no Supabase que chama a API do Claude' },
          { label: 'Contexto', description: 'Alimente o chatbot com dados do escritório (FAQs, serviços, prazos)' },
          { label: 'Deploy', description: 'Publique e disponibilize para seus clientes via portal' },
        ],
        steps: [
          'No Lovable, peça: "Crie uma tela de chat com campo de mensagem embaixo e balões de conversa acima, estilo WhatsApp"',
          'Adicione um estado para armazenar o histórico de mensagens: array de objetos {role, content, timestamp}',
          'Crie uma Edge Function no Supabase chamada "chat-juridico" para processar as mensagens',
          'Na Edge Function, configure a chamada à API do Claude com um system prompt jurídico',
          'Defina o system prompt: "Você é assistente jurídico do escritório X. Responda sobre serviços, prazos e procedimentos. Nunca dê conselho jurídico específico — oriente o cliente a agendar consulta."',
          'Conecte o frontend à Edge Function: ao enviar mensagem, chame a function e exiba a resposta',
          'Adicione indicador de "digitando..." enquanto a IA processa a resposta',
          'Implemente histórico: salve as conversas no Supabase para referência futura',
          'Configure RLS para que cada cliente só veja suas próprias conversas',
          'Adicione botões de ação rápida: "Agendar consulta", "Ver prazos", "Falar com advogado"',
          'Teste exaustivamente: envie perguntas comuns e verifique se as respostas são adequadas',
          'Configure limites: máximo de mensagens por dia para controlar custos de API',
        ],
        prompt: `Crie uma tela de chat estilo WhatsApp para um chatbot jurídico:
- Campo de input na parte inferior com botão de enviar
- Balões de mensagem: azul para o cliente, cinza para o bot
- Indicador de "digitando..." quando aguardando resposta
- Botões de ação rápida no topo: "Agendar Consulta", "Ver Serviços", "Falar com Advogado"
- Histórico de mensagens com scroll automático
- Avatar do bot com ícone de balança da justiça
- Mensagem de boas-vindas automática ao abrir o chat`,
        content: `Um chatbot jurídico é uma das features de IA mais úteis para escritórios de advocacia. Ele pode responder perguntas frequentes dos clientes 24/7, agendar consultas e coletar informações iniciais — tudo sem intervenção humana.

**Arquitetura:**

\`\`\`
Cliente → Chat UI (Lovable) → Edge Function (Supabase) → API Claude → Resposta
\`\`\`

**Custos de API:**

| Modelo | Custo por 1K tokens | Estimativa por conversa |
|--------|---------------------|------------------------|
| Claude Haiku | ~$0.25/1M input | ~$0.002 por conversa |
| Claude Sonnet | ~$3/1M input | ~$0.02 por conversa |
| GPT-4o mini | ~$0.15/1M input | ~$0.001 por conversa |

**Dica:** Use Claude Haiku ou GPT-4o mini para chatbots — são rápidos, baratos e suficientes para FAQs jurídicas.

**Importante:** O chatbot NÃO substitui consultoria jurídica. Configure-o para informar sobre serviços, prazos e procedimentos, mas sempre oriente o cliente a agendar consulta para questões específicas.`,
        tips: [
          'Use Claude Haiku para chatbots — é rápido e barato (centavos por conversa)',
          'NUNCA permita que o chatbot dê conselho jurídico — isso viola a ética da OAB',
          'Configure um limite de mensagens diárias para controlar custos',
          'Salve conversas no banco — elas são ouro para entender o que seus clientes perguntam',
          'Adicione FAQ pré-definidas para reduzir chamadas à API',
        ],
      },
      {
        title: 'RAG: Pesquisa Jurisprudencial Inteligente',
        subtitle: 'Busca semântica em documentos jurídicos usando vetores e IA',
        level: 'avancado',
        icon: 'search',
        flowSteps: [
          { label: 'Ingestão', description: 'Upload de documentos jurídicos (PDFs, petições, jurisprudência) para o banco' },
          { label: 'Chunking', description: 'Divide os documentos em trechos menores (500-1000 tokens cada)' },
          { label: 'Embedding', description: 'Transforma cada trecho em um vetor numérico usando API de embeddings' },
          { label: 'Busca', description: 'Quando o usuário pesquisa, gera embedding da query e busca vetores similares' },
          { label: 'Geração', description: 'Envia os trechos relevantes ao Claude, que gera uma resposta contextualizada' },
        ],
        prompt: `Crie uma interface de pesquisa jurisprudencial inteligente:
- Campo de busca grande no topo com placeholder "Pesquisar jurisprudência..."
- Filtros laterais: tribunal, área do direito, período, relator
- Resultados com relevância (score), trecho destacado e link para o inteiro teor
- Botão "Perguntar à IA" que gera uma análise do resultado usando Claude
- Indicador de quantos documentos foram consultados
- Design profissional com ícones de balança`,
        content: `**RAG (Retrieval-Augmented Generation)** é a técnica que permite ao ChatGPT, Claude e outros modelos "consultar" documentos específicos antes de responder. Para escritórios de advocacia, isso significa criar uma busca inteligente em jurisprudência, doutrinas e peças processuais.

**Como funciona o RAG jurídico:**

1. **Ingestão:** Seus documentos (PDFs de jurisprudência, petições, doutrinas) são processados
2. **Chunking:** Cada documento é dividido em trechos menores (parágrafos, seções)
3. **Embedding:** Cada trecho vira um vetor numérico (array de 1536 números)
4. **Armazenamento:** Vetores são salvos no Supabase usando a extensão **pgvector**
5. **Busca:** Quando alguém pesquisa "prazo para recurso especial", a busca encontra trechos semanticamente similares — mesmo que usem palavras diferentes
6. **Geração:** Os trechos relevantes são enviados ao Claude, que sintetiza uma resposta

**Setup técnico no Supabase:**

\`\`\`sql
-- Habilitar extensão pgvector
create extension if not exists vector;

-- Tabela de documentos com embeddings
create table documentos_juridicos (
  id uuid primary key default gen_random_uuid(),
  titulo text not null,
  conteudo text not null,
  embedding vector(1536),
  tribunal text,
  area_direito text,
  data_publicacao date,
  created_at timestamptz default now()
);

-- Índice para busca rápida
create index on documentos_juridicos
  using ivfflat (embedding vector_cosine_ops);
\`\`\`

**Vantagem vs busca tradicional:** A busca por palavras-chave retorna "prazo recurso especial" mas não encontra "tempo para interpor REsp". A busca vetorial (RAG) encontra ambos, porque entende o significado.`,
        tips: [
          'Use pgvector no Supabase — já vem integrado, sem custo extra',
          'Embeddings da OpenAI (text-embedding-3-small) custam ~$0.02 por milhão de tokens',
          'Chunks de 500-1000 tokens com overlap de 100 tokens dão os melhores resultados',
          'Comece com jurisprudência do STJ/STF — são públicas e têm alta qualidade textual',
          'RAG é avançado mas extremamente valioso para escritórios com grande volume documental',
        ],
        links: [
          { label: 'Supabase: pgvector Guide', url: 'https://supabase.com/docs/guides/ai/vector-columns' },
          { label: 'OpenAI Embeddings', url: 'https://platform.openai.com/docs/guides/embeddings' },
        ],
      },
      {
        title: 'Criando Agentes IA Autônomos',
        subtitle: 'Construa agentes que executam tarefas jurídicas automaticamente',
        level: 'avancado',
        icon: 'bot',
        elementGrid: [
          { icon: 'brain', title: 'Raciocínio (LLM)', description: 'O agente usa um modelo de IA (Claude/GPT) para entender tarefas e tomar decisões', highlight: true },
          { icon: 'wrench', title: 'Ferramentas (Tools)', description: 'Acesso a APIs externas, banco de dados, envio de emails e consultas web' },
          { icon: 'database', title: 'Memória (Context)', description: 'O agente lembra de interações anteriores e mantém estado entre execuções' },
          { icon: 'repeat', title: 'Loop de Ação', description: 'Ciclo pensar → agir → observar → pensar novamente até completar a tarefa' },
        ],
        content: `**Agentes IA** são programas que usam modelos de linguagem para executar tarefas de forma autônoma. Diferente de um chatbot (que só responde perguntas), um agente pode tomar decisões, usar ferramentas e completar workflows inteiros.

**Exemplos de agentes jurídicos:**

| Agente | O que Faz | Ferramentas |
|--------|-----------|-------------|
| **Triagem de Casos** | Analisa email do cliente e classifica por área/urgência | Email API + Claude |
| **Pesquisa de Prazos** | Consulta DataJud e alerta sobre prazos próximos | DataJud API + Supabase |
| **Gerador de Peças** | Cria minutas de petições baseado em modelo e dados do caso | Claude + Templates |
| **Monitor de Publicações** | Acompanha DJe e notifica sobre publicações relevantes | Web scraping + Email |

**Arquitetura básica de um agente:**

\`\`\`
Loop Principal:
1. RECEBER tarefa (ex: "analise este contrato")
2. PENSAR sobre a tarefa (Claude processa o pedido)
3. AGIR executando uma ferramenta (consultar banco, chamar API)
4. OBSERVAR o resultado da ação
5. REPETIR até a tarefa estar concluída
6. RETORNAR resultado final ao usuário
\`\`\`

**Implementação no Lovable + Supabase:**

Os agentes são implementados como **Edge Functions** no Supabase que:
1. Recebem a tarefa via API
2. Chamam o Claude com system prompt especializado
3. Usam function calling para executar ações
4. Salvam resultados no banco
5. Notificam o usuário (email, push, in-app)

**Diferença chatbot vs agente:**

| Característica | Chatbot | Agente |
|---------------|---------|--------|
| **Interação** | Responde perguntas | Executa tarefas |
| **Autonomia** | Nenhuma | Alta |
| **Ferramentas** | Nenhuma | APIs, banco, email |
| **Loop** | Pergunta → Resposta | Pensar → Agir → Observar |
| **Complexidade** | Baixa | Média-Alta |`,
        tips: [
          'Comece com agentes simples: um que classifica emails ou monitora prazos',
          'Use function calling do Claude para dar ferramentas ao agente',
          'Sempre inclua um limite de iterações (ex: máximo 10 loops) para evitar custos infinitos',
          'Salve logs de cada ação do agente para auditoria e debug',
          'Agentes jurídicos devem sempre ter supervisão humana — nunca ação final automática',
        ],
      },
      {
        title: 'Multi-Agentes IA Orquestrados',
        subtitle: 'Sistemas onde vários agentes IA colaboram para resolver problemas complexos',
        level: 'expert',
        icon: 'network',
        flowSteps: [
          { label: 'Orquestrador', description: 'Um agente central recebe a tarefa e decide quais especialistas acionar' },
          { label: 'Especialistas', description: 'Agentes especializados executam sub-tarefas (pesquisa, análise, redação)' },
          { label: 'Colaboração', description: 'Resultados são compartilhados entre agentes via memória compartilhada' },
          { label: 'Síntese', description: 'O orquestrador consolida os resultados e entrega ao usuário' },
        ],
        content: `**Multi-agentes** é um padrão arquitetural onde vários agentes IA trabalham juntos para resolver problemas que seriam complexos demais para um único agente.

**Exemplo prático — Análise de Contrato:**

\`\`\`
Tarefa: "Analise este contrato de prestação de serviços"

Orquestrador recebe tarefa
  ├── Agente Extrator: extrai cláusulas, partes, valores, prazos
  ├── Agente Risco: avalia cláusulas abusivas e riscos
  ├── Agente Comparador: compara com contratos similares do banco
  └── Agente Redator: gera parecer consolidado

Resultado: Parecer completo com riscos, sugestões e comparativos
\`\`\`

**Padrões de orquestração:**

| Padrão | Descrição | Uso |
|--------|-----------|-----|
| **Sequencial** | Agente A → B → C | Pipeline linear, cada etapa depende da anterior |
| **Paralelo** | A + B + C simultaneamente | Tarefas independentes executadas ao mesmo tempo |
| **Hierárquico** | Orquestrador delega a especialistas | Tarefas complexas com sub-problemas distintos |
| **Debate** | Agentes argumentam entre si | Análise de risco, revisão de cláusulas |

**Implementação com Edge Functions:**

No Supabase, cada agente é uma Edge Function separada. O orquestrador é outra Edge Function que:
1. Recebe a tarefa
2. Decide quais agentes acionar
3. Chama as Edge Functions dos especialistas (em paralelo quando possível)
4. Coleta e consolida os resultados
5. Retorna o resultado final

**Custos de multi-agentes:**

Como cada agente faz chamadas ao LLM, os custos se multiplicam. Uma análise de contrato com 4 agentes pode custar 4x mais que um agente único. A vantagem é a qualidade: cada agente é especialista no que faz.`,
        tips: [
          'Multi-agentes são para cenários complexos — não use para tarefas simples',
          'Comece com 2 agentes e escale gradualmente',
          'Use modelos baratos (Haiku) para agentes de triagem e extração',
          'Reserve modelos poderosos (Opus) para agentes de análise e síntese',
          'Sempre inclua timeout e fallback — se um agente falhar, o sistema deve continuar',
        ],
      },
      {
        title: 'Frameworks de Agentes: CrewAI e LangGraph',
        subtitle: 'Ferramentas populares para construir sistemas multi-agentes',
        level: 'expert',
        icon: 'workflow',
        refTable: [
          { feature: 'CrewAI', description: 'Framework Python para agentes colaborativos com roles e goals definidos', config: 'Mais fácil, ideal para começar' },
          { feature: 'LangGraph', description: 'Framework do LangChain para grafos de agentes com estado compartilhado', config: 'Mais flexível, ideal para fluxos complexos' },
          { feature: 'Autogen (Microsoft)', description: 'Framework para conversações entre agentes com supervisão humana', config: 'Bom para fluxos conversacionais' },
          { feature: 'Edge Functions', description: 'Implementação manual no Supabase sem framework externo', config: 'Mais controle, mais trabalho' },
        ],
        content: `Frameworks de agentes facilitam a construção de sistemas multi-agentes sem precisar implementar toda a lógica de orquestração do zero.

**CrewAI — O mais popular:**

\`\`\`python
# Exemplo conceitual de CrewAI para análise jurídica
from crewai import Agent, Task, Crew

pesquisador = Agent(
    role="Pesquisador Jurídico",
    goal="Encontrar jurisprudência relevante",
    backstory="Especialista em pesquisa de precedentes"
)

analista = Agent(
    role="Analista de Risco",
    goal="Avaliar riscos e cláusulas abusivas",
    backstory="20 anos de experiência em contratos"
)

crew = Crew(agents=[pesquisador, analista], tasks=[...])
resultado = crew.kickoff()
\`\`\`

**LangGraph — O mais flexível:**

\`\`\`python
# Exemplo conceitual de LangGraph
from langgraph.graph import StateGraph

workflow = StateGraph(ContractState)
workflow.add_node("extrair", extrair_clausulas)
workflow.add_node("analisar", analisar_riscos)
workflow.add_node("redigir", redigir_parecer)

workflow.add_edge("extrair", "analisar")
workflow.add_edge("analisar", "redigir")
\`\`\`

**Comparativo detalhado:**

| Critério | CrewAI | LangGraph | Edge Functions |
|----------|--------|-----------|----------------|
| **Curva de aprendizado** | Fácil | Média | Depende |
| **Linguagem** | Python | Python | TypeScript |
| **Orquestração** | Automática | Manual (grafos) | Manual |
| **Integração Lovable** | Via API externa | Via API externa | Nativa (Supabase) |
| **Custo** | Open source | Open source | Grátis no Supabase |
| **Melhor para** | Prototipagem rápida | Fluxos complexos | Integração direta |

**Recomendação para advogados:** Se você está começando com agentes, use **Edge Functions direto no Supabase** — é TypeScript (mesma linguagem do Lovable), não precisa de servidor externo e integra nativamente. Quando seus agentes ficarem complexos, considere CrewAI ou LangGraph.`,
        tips: [
          'Para começar, Edge Functions no Supabase são suficientes e não exigem servidor extra',
          'CrewAI é o framework mais fácil de aprender se você quiser Python',
          'LangGraph dá mais controle mas exige mais conhecimento técnico',
          'Todos os frameworks suportam Claude como LLM — a escolha é de orquestração',
          'Frameworks externos precisam rodar em servidor próprio (Railway, Fly.io, etc.)',
        ],
        links: [
          { label: 'CrewAI Documentation', url: 'https://docs.crewai.com' },
          { label: 'LangGraph Documentation', url: 'https://langchain-ai.github.io/langgraph/' },
        ],
      },
      {
        title: 'Custos e Otimização de APIs de IA',
        subtitle: 'Quanto custa integrar IA no seu app e como reduzir gastos',
        level: 'intermediario',
        icon: 'dollar-sign',
        refTable: [
          { feature: 'Claude Haiku', description: 'Respostas rápidas, chatbots, classificação', config: '~$0.25/1M input tokens' },
          { feature: 'Claude Sonnet', description: 'Análise, geração de texto, agentes simples', config: '~$3/1M input tokens' },
          { feature: 'Claude Opus', description: 'Tarefas complexas, análise jurídica profunda', config: '~$15/1M input tokens' },
          { feature: 'GPT-4o mini', description: 'Alternativa barata para tarefas simples', config: '~$0.15/1M input tokens' },
          { feature: 'Gemini Flash', description: 'Alternativa Google, rápido e barato', config: '~$0.075/1M input tokens' },
          { feature: 'Embeddings (OpenAI)', description: 'Transformar texto em vetores para RAG', config: '~$0.02/1M tokens' },
        ],
        content: `Integrar IA ao seu app jurídico tem custos de API que variam conforme o modelo e volume de uso. Aqui está um guia prático para planejar seus custos.

**Estimativa de custos por feature:**

| Feature | Modelo Recomendado | Custo Estimado/mês |
|---------|-------------------|-------------------|
| **Chatbot FAQ** | Haiku / GPT-4o mini | R$ 5-20/mês (500 conversas) |
| **Análise de contrato** | Sonnet / GPT-4o | R$ 20-80/mês (100 contratos) |
| **RAG jurisprudencial** | Embeddings + Haiku | R$ 10-30/mês (1000 buscas) |
| **Geração de petições** | Sonnet / Opus | R$ 30-100/mês (50 petições) |
| **Triagem de emails** | Haiku | R$ 2-10/mês (500 emails) |

**Estratégias de otimização:**

1. **Use o modelo certo:** Haiku para tarefas simples, Sonnet para médias, Opus só para complexas
2. **Cache de respostas:** Salve respostas frequentes no banco e reutilize
3. **Prompt compacto:** Remova texto desnecessário do prompt — cada token custa
4. **Batch processing:** Agrupe múltiplas tarefas em uma chamada quando possível
5. **Rate limiting:** Limite chamadas por usuário/dia para evitar surpresas na fatura

**Dica:** A maioria dos escritórios gasta menos de R$ 100/mês em APIs de IA. O retorno (horas economizadas) compensa amplamente.`,
        tips: [
          'Comece com modelos baratos (Haiku/GPT-4o mini) e só escale se a qualidade não for suficiente',
          'Cache de respostas pode reduzir custos em 50-70% para perguntas repetitivas',
          'Monitore gastos semanalmente nas primeiras 4 semanas para calibrar',
          'Um limite de R$ 50/mês é um bom ponto de partida para um escritório pequeno',
          'APIs de IA se pagam se economizarem 2-3 horas de trabalho manual por mês',
        ],
      },
      {
        title: 'Boas Práticas de IA para Apps Jurídicos',
        subtitle: 'Checklist de segurança, ética e qualidade para IA na advocacia',
        level: 'avancado',
        icon: 'shield',
        checklist: [
          {
            title: 'Segurança e Privacidade',
            items: [
              'Nunca envie dados pessoais de clientes diretamente ao LLM — anonimize antes',
              'Use Edge Functions (server-side) para chamadas de API — nunca exponha chaves no frontend',
              'Implemente rate limiting para evitar abuso e custos descontrolados',
              'Salve logs de todas as interações com IA para auditoria',
              'Configure timeout em chamadas de API (máximo 30 segundos)',
              'Valide e sanitize toda resposta do LLM antes de exibir ao usuário',
              'Use HTTPS para todas as chamadas de API',
            ],
          },
          {
            title: 'Ética e Compliance OAB',
            items: [
              'IA nunca deve substituir o advogado — sempre como ferramenta auxiliar',
              'Chatbots devem informar que são IA e orientar consulta presencial para questões específicas',
              'Respostas de IA devem ter aviso: "Gerado por IA — consulte um advogado para orientação específica"',
              'Não use IA para decisões finais sobre prazos processuais — sempre verificação humana',
              'Mantenha registro de quando e como IA foi usada em cada caso (transparência)',
              'Revise periodicamente as respostas da IA para garantir precisão jurídica',
              'Obtenha consentimento do cliente antes de processar seus dados com IA',
            ],
          },
        ],
        content: `Integrar IA em apps jurídicos exige cuidados extras de segurança, ética e compliance. A OAB e o CNJ ainda estão regulamentando o uso de IA na advocacia, mas já existem diretrizes claras.

**Princípio fundamental:** IA é ferramenta, não substituto. O advogado é sempre o responsável final por qualquer orientação, petição ou decisão.

**Regulamentação atual:**

| Órgão | Posição |
|-------|---------|
| **OAB** | IA permitida como ferramenta auxiliar; vedado substituir o advogado |
| **CNJ** | Resolução 332/2020 — IA no Judiciário deve ser transparente e auditável |
| **LGPD** | Dados pessoais processados por IA devem seguir as mesmas regras de proteção |

**Padrão recomendado para respostas de IA:**

Toda resposta gerada por IA no seu app deve incluir:
1. Indicação visual de que foi gerada por IA (ícone + texto)
2. Aviso de que não substitui consultoria jurídica profissional
3. Botão para "Falar com advogado" para questões específicas
4. Timestamp e modelo usado (para auditoria)

**Erros comuns a evitar:**

- Expor API keys no frontend (qualquer um pode ver e usar)
- Enviar CPF/RG/OAB do cliente diretamente ao LLM
- Confiar cegamente em datas e prazos gerados por IA
- Não ter fallback quando a API de IA está fora do ar
- Não implementar limites de uso (pode gerar contas altíssimas)`,
        tips: [
          'Sempre anonimize dados antes de enviar ao LLM — substitua nomes e CPFs por variáveis',
          'Implemente um disclaimer automático em toda resposta de IA',
          'Use modelos com política de privacidade clara (Claude e GPT não treinam com dados de API)',
          'Teste mensalmente: envie perguntas capciosas e verifique se o chatbot responde adequadamente',
          'Mantenha-se atualizado sobre regulamentação: OAB e CNJ estão ativamente criando normas para IA',
        ],
      },
    ],
  },
  // ═══════════════════════════════════════════════════════════
  // SEÇÃO 12: ECONOMIZANDO CRÉDITOS
  // ═══════════════════════════════════════════════════════════
  {
    id: 'economizar-creditos',
    title: 'Economizando Créditos',
    description: 'Workflows com IDEs e CLIs externos para reduzir gastos',
    icon: 'dollar-sign',
    cards: [
      {
        title: 'A Estratégia: Lovable + GitHub + IA Externa',
        subtitle: 'Como desenvolver fora do Lovable e sincronizar de volta sem gastar créditos',
        level: 'iniciante',
        icon: 'lightbulb',
        analogy: {
          title: 'Analogia Jurídica',
          central: 'Trabalhar em Casa e Protocolar no Fórum',
          description: 'Imagine que você redige petições em casa (sem custo de transporte) e só vai ao fórum para protocolar. Da mesma forma, você pode fazer a maior parte do desenvolvimento fora do Lovable (grátis) e só sincronizar de volta quando estiver pronto — economizando créditos.',
        },
        flowSteps: [
          { label: 'Prototipar', description: 'Use o Lovable para criar o protótipo inicial do app (gasta créditos apenas nesta etapa)' },
          { label: 'Sincronizar', description: 'Conecte ao GitHub e exporte o código para um repositório' },
          { label: 'Desenvolver', description: 'Use Claude Code, Antigravity ou Codex para implementar features (sem gastar créditos Lovable)' },
          { label: 'Publicar', description: 'Faça commit + push — o Lovable detecta as mudanças e sincroniza automaticamente' },
        ],
        content: `A estratégia mais eficiente para usar o Lovable é combinar ele com ferramentas externas gratuitas ou baratas. O Lovable é perfeito para prototipagem rápida, mas para desenvolvimento contínuo, você pode economizar significativamente usando IDEs e CLIs com IA.

**O workflow completo:**

\`\`\`
Lovable (protótipo) → GitHub (sync) → Clone local →
Ferramenta externa (Claude Code / Antigravity / Codex) →
Commit + Push → Lovable sincroniza de volta
\`\`\`

**Por que isso funciona:**

O Lovable tem integração bidirecional com o GitHub. Quando você conecta seu projeto ao GitHub:
1. Todo código do Lovable é enviado ao repositório
2. Mudanças feitas externamente (via push) são detectadas pelo Lovable
3. O Lovable sincroniza automaticamente — sem gastar créditos

**Economia real:**

| Cenário | Créditos Lovable | Custo Externo |
|---------|-----------------|---------------|
| **Tudo no Lovable** | ~300-500/mês | R$ 0 |
| **Protótipo + externo** | ~50-100/mês | ~R$ 100/mês (Claude Code) |
| **Protótipo + grátis** | ~50-100/mês | R$ 0 (Antigravity) |

**Resultado:** Você pode reduzir o consumo de créditos Lovable em 60-80% usando ferramentas externas para o desenvolvimento contínuo.`,
        tips: [
          'Use o Lovable para prototipar rapidamente (é o que ele faz de melhor)',
          'Para desenvolvimento contínuo e iterações frequentes, use ferramentas externas',
          'O GitHub é gratuito e a sincronização com o Lovable é automática',
          'Mesmo com ferramentas externas, volte ao Lovable para ajustes rápidos com Visual Edits (grátis)',
          'Esta estratégia é especialmente útil no plano Free, onde os créditos são limitados',
        ],
      },
      {
        title: 'Configurando o GitHub no Lovable',
        subtitle: 'Passo a passo para conectar seu projeto e habilitar a sincronização',
        level: 'iniciante',
        icon: 'git-branch',
        steps: [
          'Crie uma conta no GitHub (github.com) se ainda não tiver — é gratuito',
          'No Lovable, abra seu projeto e clique no ícone do GitHub no painel lateral (parece um gato)',
          'Clique em "Connect to GitHub" — o Lovable vai pedir permissão para acessar sua conta',
          'Autorize o Lovable no GitHub — ele criará um repositório automaticamente com o nome do projeto',
          'Aguarde a sincronização inicial — o Lovable envia todo o código para o GitHub (1-2 minutos)',
          'Verifique no GitHub: acesse github.com/seu-usuario e confirme que o repositório foi criado',
          'Teste a sincronização: faça uma mudança no Lovable e verifique se aparece como commit no GitHub',
          'Pronto! Agora qualquer push externo ao repositório será detectado pelo Lovable automaticamente',
        ],
        content: `Conectar o Lovable ao GitHub é o primeiro passo para a estratégia de economia de créditos. A integração é simples e leva menos de 5 minutos.

**O que acontece após conectar:**

| Ação | Resultado |
|------|----------|
| Mudança no Lovable | Commit automático no GitHub |
| Push externo no GitHub | Lovable detecta e sincroniza |
| Conflito de código | Lovable avisa e permite resolver |

**Configuração do repositório:**

O Lovable cria o repositório com:
- Branch principal: \`main\`
- Estrutura: projeto Vite + React + TypeScript
- Commits automáticos com mensagens descritivas
- Integração com Supabase (se configurada)

**Importante:** Após conectar, NÃO edite arquivos diretamente no GitHub (pelo browser). Use sempre o Lovable ou ferramentas locais (Claude Code, Antigravity, etc.) para evitar conflitos.`,
        tips: [
          'A integração com GitHub é gratuita — não tem custo extra no Lovable nem no GitHub',
          'Repositórios podem ser públicos ou privados — para apps jurídicos, use SEMPRE privado',
          'Se o Lovable não detectar suas mudanças, clique em "Sync" no painel do GitHub',
          'O Lovable cria commits automáticos — você pode ver o histórico completo no GitHub',
          'Convide colaboradores no GitHub para que outros devs possam contribuir no projeto',
        ],
        links: [
          { label: 'Criar conta GitHub', url: 'https://github.com/signup' },
          { label: 'Lovable: GitHub Integration', url: 'https://docs.lovable.dev/integrations/git-integration' },
        ],
      },
      {
        title: 'Lovable + Claude Code: Introdução',
        subtitle: 'O CLI da Anthropic que programa junto com você no terminal',
        level: 'iniciante',
        icon: 'terminal',
        elementGrid: [
          { icon: 'terminal', title: 'CLI no Terminal', description: 'Claude Code roda direto no seu terminal — sem IDE, sem browser. Você digita comandos e ele programa.', highlight: true },
          { icon: 'brain', title: 'Mesmo Claude do Lovable', description: 'Usa os mesmos modelos Claude (Opus/Sonnet) — a qualidade do código é idêntica ao Lovable' },
          { icon: 'dollar-sign', title: '$20/mês (Pro)', description: 'Plano Pro da Anthropic inclui Claude Code com uso generoso — sem limites por interação' },
        ],
        steps: [
          'Instale o Node.js 18+ no seu computador: acesse nodejs.org e baixe o instalador',
          'Abra o terminal (Windows: PowerShell ou CMD; Mac: Terminal; Linux: qualquer terminal)',
          'Instale o Claude Code: digite "npm install -g @anthropic-ai/claude-code" e pressione Enter',
          'Aguarde a instalação (pode levar 1-2 minutos dependendo da conexão)',
          'Crie uma conta na Anthropic: acesse console.anthropic.com e cadastre-se',
          'Assine o plano Pro ($20/mês) para usar o Claude Code com uso generoso',
          'No terminal, navegue até a pasta do seu projeto: "cd pasta-do-projeto"',
          'Digite "claude" e pressione Enter — o Claude Code vai iniciar e pedir login na primeira vez',
        ],
        content: `**Claude Code** é a ferramenta de linha de comando (CLI) oficial da Anthropic para programar com IA. Ele funciona diretamente no seu terminal — você descreve o que quer em português e ele edita os arquivos do projeto.

**Por que usar Claude Code com Lovable:**

O Claude Code edita os mesmos arquivos que o Lovable gera. Como ambos usam Claude como IA, o código gerado é consistente e compatível. A diferença é que o Claude Code não gasta créditos do Lovable.

**Comparação prática:**

| Aspecto | Lovable | Claude Code |
|---------|---------|-------------|
| **Interface** | Visual no browser | Terminal de texto |
| **IA** | Claude (Opus/Sonnet) | Claude (Opus/Sonnet) |
| **Preview** | Instantâneo no browser | Precisa abrir o browser manualmente |
| **Custo** | Créditos do plano Lovable | $20/mês fixo (uso generoso) |
| **Melhor para** | Prototipagem, Visual Edits | Desenvolvimento contínuo, refatoração |

**Requisitos:**
- Node.js 18 ou superior
- npm (vem com o Node.js)
- Conta na Anthropic com plano Pro ($20/mês)
- Git instalado (para sincronizar com GitHub/Lovable)`,
        tips: [
          'Claude Code é ideal para quem já tem o protótipo no Lovable e quer iterar sem gastar créditos',
          'Você pode usar português nos comandos — o Claude entende perfeitamente',
          'O plano Pro ($20/mês) é mais barato que o plano Pro do Lovable para uso intensivo',
          'Claude Code entende o contexto do projeto inteiro — ele lê todos os arquivos automaticamente',
          'Use junto com VS Code: abra o terminal integrado e rode o Claude Code de lá',
        ],
        links: [
          { label: 'Claude Code — Documentação', url: 'https://docs.anthropic.com/en/docs/claude-code' },
          { label: 'Instalar Node.js', url: 'https://nodejs.org' },
          { label: 'Anthropic Console', url: 'https://console.anthropic.com' },
        ],
      },
      {
        title: 'Lovable + Claude Code: Workflow Completo',
        subtitle: 'Passo a passo detalhado para desenvolver localmente e sincronizar com o Lovable',
        level: 'intermediario',
        icon: 'terminal',
        flowSteps: [
          { label: 'Clonar', description: 'Baixe o código do GitHub para sua máquina local' },
          { label: 'Instalar', description: 'Instale as dependências do projeto com npm install' },
          { label: 'Desenvolver', description: 'Use Claude Code para implementar features no terminal' },
          { label: 'Testar', description: 'Rode o app localmente com npm run dev e teste no browser' },
          { label: 'Sincronizar', description: 'Faça commit + push e o Lovable detecta automaticamente' },
        ],
        steps: [
          'Certifique-se de que o projeto Lovable está conectado ao GitHub (veja o card anterior)',
          'No terminal, clone o repositório: "git clone https://github.com/seu-usuario/seu-projeto.git"',
          'Entre na pasta: "cd seu-projeto"',
          'Instale as dependências: "npm install" (aguarde — pode levar 2-5 minutos na primeira vez)',
          'Crie um arquivo CLAUDE.md na raiz do projeto (veja o exemplo abaixo)',
          'Inicie o Claude Code: digite "claude" no terminal e pressione Enter',
          'Descreva a feature em português: ex. "Adicione uma página de controle de prazos com tabela, filtros por status e botão de adicionar novo prazo"',
          'O Claude Code vai editar os arquivos necessários — revise as mudanças sugeridas',
          'Aceite as mudanças (digite "y") ou peça ajustes ("mude a cor do header para azul marinho")',
          'Teste localmente: abra outro terminal, rode "npm run dev" e acesse localhost:5173',
          'Verifique se tudo funciona corretamente no browser',
          'Quando estiver satisfeito, faça o commit: "git add . && git commit -m \'feat: adicionar controle de prazos\'"',
          'Envie para o GitHub: "git push origin main"',
          'Volte ao Lovable — ele detectará as mudanças em até 1 minuto',
          'Use Visual Edits (grátis) no Lovable para ajustes finais de design',
        ],
        prompt: `# CLAUDE.md — Exemplo para projeto Lovable jurídico

## Sobre o Projeto
App jurídico construído com Lovable (React + TypeScript + Tailwind + shadcn/ui).
Banco de dados: Supabase (PostgreSQL com RLS).

## Padrões de Código
- React com TypeScript (.tsx)
- Tailwind CSS para estilos
- Componentes shadcn/ui para UI
- Imports absolutos com @/
- Hooks customizados em src/hooks/
- Páginas em src/pages/
- Componentes em src/components/

## Regras
- Sempre use português nos textos da interface
- Tom profissional e formal
- Cores: azul marinho (#1e3a5f) e branco (#ffffff)
- Nunca exponha dados sensíveis (CPF, OAB) no frontend
- Sempre implemente loading states e tratamento de erros`,
        content: `Este é o workflow completo para desenvolver com Claude Code e sincronizar com o Lovable. Siga cada passo na ordem.

**O arquivo CLAUDE.md:**

O CLAUDE.md é como a Knowledge Base do Lovable — ele ensina o Claude Code sobre seu projeto. Coloque na raiz do repositório e o Claude Code vai ler automaticamente.

**Comandos essenciais do Claude Code:**

| Comando | O que Faz |
|---------|-----------|
| \`claude\` | Inicia o Claude Code na pasta atual |
| \`claude "sua instrução"\` | Executa uma instrução direta |
| \`/help\` | Mostra ajuda dentro do Claude Code |
| \`/clear\` | Limpa o contexto da conversa |
| Ctrl+C | Cancela a operação atual |

**Fluxo de sincronização:**

\`\`\`
Você edita localmente → git add → git commit → git push →
GitHub recebe → Lovable detecta → App atualizado!
\`\`\`

**Resolução de conflitos:**

Se você editar o mesmo arquivo no Lovable E localmente, pode haver conflito. Para evitar:
1. Sempre faça pull antes de começar: \`git pull origin main\`
2. Não edite no Lovable enquanto trabalha localmente
3. Se houver conflito, resolva no terminal com \`git merge\`

**Dica avançada:** Use branches para features grandes. Crie com \`git checkout -b feat/prazos\`, desenvolva, e faça merge quando estiver pronto.`,
        tips: [
          'SEMPRE rode "git pull" antes de começar a trabalhar localmente — evita conflitos',
          'O CLAUDE.md é essencial — sem ele, o Claude Code não conhece os padrões do seu projeto',
          'Teste localmente antes de fazer push — erros no push podem confundir o Lovable',
          'Use commits pequenos e frequentes — facilita reverter se algo der errado',
          'Visual Edits no Lovable são perfeitos para polir o design após desenvolver com Claude Code',
        ],
      },
      {
        title: 'Lovable + Google Antigravity: Introdução',
        subtitle: 'A IDE agêntica do Google com IA gratuita e browser embutido',
        level: 'iniciante',
        icon: 'sparkles',
        elementGrid: [
          { icon: 'sparkles', title: 'IDE Agêntica', description: 'Antigravity é uma IDE completa no browser com IA integrada — edite código, veja preview e converse com a IA', highlight: true },
          { icon: 'dollar-sign', title: 'Grátis (Preview)', description: 'Durante o período de preview, o Antigravity é totalmente gratuito — sem limites de uso' },
          { icon: 'brain', title: 'Gemini 3 Pro + Claude', description: 'Usa Gemini 3 Pro do Google e também oferece Claude como modelo alternativo' },
        ],
        content: `**Google Antigravity** (anteriormente Project IDX / Firebase Studio) é a IDE agêntica do Google. Ela funciona diretamente no browser, tem IA integrada e pode rodar projetos completos — incluindo projetos Lovable.

**Por que usar Antigravity com Lovable:**

| Vantagem | Detalhe |
|----------|---------|
| **Grátis** | Sem custo durante o período de preview |
| **No browser** | Não precisa instalar nada no seu computador |
| **IA integrada** | Gemini 3 Pro + Claude disponíveis |
| **Preview embutido** | Veja o resultado ao vivo enquanto edita |
| **GitHub integrado** | Clone e push diretamente da IDE |

**Como funciona:**

1. Você importa seu projeto Lovable do GitHub para o Antigravity
2. A IDE abre com editor de código, terminal e preview do app
3. Você conversa com a IA (Gemini/Claude) e ela edita o código
4. Ao terminar, faz commit + push direto do Antigravity
5. O Lovable detecta e sincroniza

**Antigravity vs Claude Code:**

| Aspecto | Antigravity | Claude Code |
|---------|-------------|-------------|
| **Interface** | IDE visual no browser | Terminal de texto |
| **IA** | Gemini 3 Pro + Claude | Claude (Opus/Sonnet) |
| **Preview** | Embutido na IDE | Precisa rodar npm run dev |
| **Custo** | Grátis (preview) | $20/mês |
| **Instalação** | Nenhuma (browser) | Node.js + npm |

**Ideal para:** Quem prefere uma interface visual e não quer instalar nada no computador.`,
        tips: [
          'Antigravity é grátis durante o preview — aproveite para economizar ao máximo',
          'A interface é similar ao VS Code — se você já usou, vai se sentir em casa',
          'O preview embutido mostra mudanças em tempo real, similar ao Lovable',
          'Use Gemini para tarefas gerais e Claude para código mais complexo',
          'Como roda no browser, funciona até em Chromebooks e tablets',
        ],
        links: [
          { label: 'Google Antigravity', url: 'https://idx.google.com' },
          { label: 'Documentação Antigravity', url: 'https://developers.google.com/idx' },
        ],
      },
      {
        title: 'Lovable + Google Antigravity: Workflow Completo',
        subtitle: 'Passo a passo para desenvolver no Antigravity e sincronizar com o Lovable',
        level: 'intermediario',
        icon: 'sparkles',
        flowSteps: [
          { label: 'Importar', description: 'Importe o repositório do GitHub para o Antigravity' },
          { label: 'Configurar', description: 'Instale dependências e configure o ambiente' },
          { label: 'Desenvolver', description: 'Use a IA do Antigravity para implementar features' },
          { label: 'Testar', description: 'Visualize no preview embutido e teste a funcionalidade' },
          { label: 'Sincronizar', description: 'Faça commit + push direto do Antigravity para o GitHub' },
        ],
        steps: [
          'Acesse idx.google.com e faça login com sua conta Google',
          'Clique em "Import a repo" na tela inicial',
          'Cole a URL do repositório GitHub do seu projeto Lovable',
          'Aguarde o Antigravity clonar e configurar o ambiente (2-5 minutos na primeira vez)',
          'O editor vai abrir com sua estrutura de arquivos à esquerda e editor no centro',
          'Abra o terminal integrado (Ctrl+` ou menu Terminal → New Terminal)',
          'Instale as dependências: digite "npm install" no terminal e aguarde',
          'Inicie o servidor de desenvolvimento: "npm run dev"',
          'O preview embutido abrirá à direita mostrando seu app ao vivo',
          'Use o chat de IA (ícone de estrela) para pedir mudanças: "Adicione um filtro de data na tabela de processos"',
          'A IA editará os arquivos — revise as mudanças no editor e confira no preview',
          'Quando estiver satisfeito, vá ao painel Source Control (Ctrl+Shift+G)',
          'Stage as mudanças (clique no +), escreva a mensagem do commit e clique em Commit',
          'Clique em "Sync Changes" (ou "Push") para enviar ao GitHub',
          'Volte ao Lovable — ele detectará as mudanças automaticamente',
        ],
        content: `Este é o workflow completo para usar o Google Antigravity como IDE de desenvolvimento complementar ao Lovable.

**Ambiente do Antigravity:**

O Antigravity cria um workspace completo com:
- **Editor de código** — similar ao VS Code, com syntax highlighting e autocomplete
- **Terminal integrado** — rode comandos npm, git, etc.
- **Preview do app** — veja seu app rodando ao vivo enquanto edita
- **Chat de IA** — converse com Gemini/Claude para pedir mudanças no código
- **Source Control** — gerencie Git (commit, push, pull) sem sair da IDE

**Dicas de produtividade:**

| Atalho | Ação |
|--------|------|
| Ctrl+\` | Abrir/fechar terminal |
| Ctrl+Shift+G | Painel de controle de versão (Git) |
| Ctrl+P | Buscar arquivo por nome |
| Ctrl+Shift+F | Buscar texto em todos os arquivos |

**Resolução de problemas comuns:**

| Problema | Solução |
|----------|---------|
| Preview não carrega | Rode \`npm run dev\` novamente no terminal |
| Erro de dependências | Delete \`node_modules\` e rode \`npm install\` |
| Push não funciona | Verifique permissões do GitHub no Antigravity |
| IA não entende o projeto | Descreva o contexto antes de pedir a feature |`,
        tips: [
          'O preview embutido é a grande vantagem do Antigravity — use para validar mudanças em tempo real',
          'Se a IA do Antigravity não gerar código bom, troque para Claude nas configurações',
          'Sempre faça "git pull" antes de começar para evitar conflitos com o Lovable',
          'Use o terminal integrado para rodar testes antes de fazer push',
          'O Antigravity suporta extensões — instale ESLint e Prettier para manter o código limpo',
        ],
      },
      {
        title: 'Lovable + OpenAI Codex: Introdução',
        subtitle: 'O CLI da OpenAI que programa no terminal usando GPT-4',
        level: 'iniciante',
        icon: 'terminal',
        elementGrid: [
          { icon: 'terminal', title: 'CLI no Terminal', description: 'Codex roda no terminal, similar ao Claude Code — você descreve o que quer e ele programa', highlight: true },
          { icon: 'brain', title: 'GPT-4o + o3', description: 'Usa os modelos mais avançados da OpenAI para gerar e editar código' },
          { icon: 'dollar-sign', title: '$20/mês (Plus)', description: 'Incluso no plano ChatGPT Plus com uso generoso via CLI' },
        ],
        steps: [
          'Instale o Node.js 18+ no seu computador se ainda não tiver (nodejs.org)',
          'Abra o terminal e instale o Codex: "npm install -g @openai/codex"',
          'Aguarde a instalação (1-2 minutos)',
          'Crie uma conta na OpenAI: acesse platform.openai.com',
          'Assine o plano ChatGPT Plus ($20/mês) para uso generoso do Codex',
          'No terminal, navegue até a pasta do projeto: "cd seu-projeto"',
          'Digite "codex" e pressione Enter — o Codex vai iniciar e pedir autenticação',
          'Autentique com sua conta OpenAI e comece a usar',
        ],
        content: `**OpenAI Codex** é a ferramenta de linha de comando da OpenAI para programar com IA. Funciona de forma similar ao Claude Code, mas usa os modelos GPT da OpenAI.

**Como funciona:**

Você abre o Codex no terminal, descreve o que quer em português e ele edita os arquivos do seu projeto. O fluxo de sincronização com o Lovable é idêntico ao do Claude Code.

**Codex vs Claude Code:**

| Aspecto | OpenAI Codex | Claude Code |
|---------|-------------|-------------|
| **IA** | GPT-4o, o3 | Claude Opus, Sonnet |
| **Custo** | $20/mês (ChatGPT Plus) | $20/mês (Anthropic Pro) |
| **Instalação** | npm install -g @openai/codex | npm install -g @anthropic-ai/claude-code |
| **Arquivo de config** | AGENTS.md | CLAUDE.md |
| **Linguagem** | Entende português | Entende português |
| **Qualidade React** | Muito boa | Excelente |

**O arquivo AGENTS.md:**

Similar ao CLAUDE.md do Claude Code, o Codex usa um arquivo AGENTS.md para entender o contexto do projeto. A estrutura é a mesma — coloque na raiz do repositório.

**Quando escolher o Codex:**
- Se você já tem ChatGPT Plus (não precisa de assinatura extra)
- Se prefere os modelos GPT para certas tarefas
- Se quer experimentar uma alternativa ao Claude Code`,
        tips: [
          'Se você já paga ChatGPT Plus, o Codex está incluso — não tem custo extra',
          'O AGENTS.md funciona igual ao CLAUDE.md — copie o conteúdo e renomeie',
          'Para projetos Lovable (React + TypeScript), Claude Code tende a gerar código ligeiramente melhor',
          'Você pode usar ambos no mesmo projeto — Claude Code para features complexas, Codex para ajustes rápidos',
          'O fluxo de sincronização com o Lovable é idêntico: commit + push',
        ],
        links: [
          { label: 'OpenAI Codex CLI', url: 'https://github.com/openai/codex' },
          { label: 'OpenAI Platform', url: 'https://platform.openai.com' },
        ],
      },
      {
        title: 'Lovable + OpenAI Codex: Workflow Completo',
        subtitle: 'Passo a passo para desenvolver com Codex e sincronizar com o Lovable',
        level: 'intermediario',
        icon: 'terminal',
        flowSteps: [
          { label: 'Clonar', description: 'Baixe o código do GitHub para sua máquina' },
          { label: 'Instalar', description: 'Instale dependências com npm install' },
          { label: 'Desenvolver', description: 'Use o Codex para implementar features' },
          { label: 'Testar', description: 'Rode npm run dev e valide no browser' },
          { label: 'Sincronizar', description: 'Commit + push para sincronizar com o Lovable' },
        ],
        steps: [
          'Certifique-se de que o projeto está conectado ao GitHub no Lovable',
          'Clone o repositório: "git clone https://github.com/seu-usuario/seu-projeto.git"',
          'Entre na pasta: "cd seu-projeto"',
          'Instale dependências: "npm install"',
          'Crie o arquivo AGENTS.md na raiz (copie o modelo do CLAUDE.md e renomeie)',
          'Inicie o Codex: "codex" no terminal',
          'Descreva a feature: "Crie uma página de gestão de honorários com tabela, filtros e gráfico de receitas"',
          'O Codex editará os arquivos — revise cada mudança sugerida',
          'Aceite ou ajuste conforme necessário',
          'Teste localmente: "npm run dev" e acesse localhost:5173',
          'Faça commit: "git add . && git commit -m \'feat: gestão de honorários\'"',
          'Push para o GitHub: "git push origin main"',
        ],
        content: `O workflow com o Codex é muito similar ao do Claude Code. A diferença principal é o comando de instalação e o arquivo de configuração.

**Comparação de comandos:**

| Ação | Claude Code | Codex |
|------|-------------|-------|
| **Instalar** | npm i -g @anthropic-ai/claude-code | npm i -g @openai/codex |
| **Iniciar** | claude | codex |
| **Config** | CLAUDE.md | AGENTS.md |
| **Ajuda** | /help | /help |

**O restante é idêntico:**
- git clone, npm install, npm run dev
- git add, git commit, git push
- Lovable detecta e sincroniza

**Dica:** Você pode ter CLAUDE.md E AGENTS.md no mesmo projeto. Cada ferramenta lê apenas o seu arquivo — não há conflito.

**Quando usar cada ferramenta:**

| Tarefa | Melhor Ferramenta |
|--------|------------------|
| **Feature complexa (React)** | Claude Code |
| **Ajuste rápido** | Codex ou Claude Code |
| **Debug** | Claude Code (melhor em análise) |
| **Geração de texto/conteúdo** | Codex (GPT bom em texto) |
| **Prototipagem visual** | Lovable (sempre) |`,
        tips: [
          'O workflow é idêntico ao do Claude Code — só muda a ferramenta e o arquivo de config',
          'Você pode ter CLAUDE.md e AGENTS.md no mesmo projeto sem conflitos',
          'Prefira commits descritivos: "feat: adicionar gestão de honorários" ao invés de "update"',
          'Sempre teste localmente antes de fazer push ao GitHub',
          'Se algo der errado, reverta com "git revert HEAD" antes que o Lovable sincronize',
        ],
      },
      {
        title: 'Comparativo: Claude Code vs Antigravity vs Codex',
        subtitle: 'Qual ferramenta escolher para complementar seu fluxo no Lovable',
        level: 'intermediario',
        icon: 'arrow-right-left',
        refTable: [
          { feature: 'Claude Code', description: 'CLI no terminal, Claude Opus/Sonnet, excelente para React/TypeScript', config: '$20/mês — Melhor para código complexo' },
          { feature: 'Google Antigravity', description: 'IDE no browser, Gemini 3 Pro + Claude, preview embutido', config: 'Grátis (preview) — Melhor custo-benefício' },
          { feature: 'OpenAI Codex', description: 'CLI no terminal, GPT-4o/o3, bom para ajustes rápidos', config: '$20/mês — Bom se já tem ChatGPT Plus' },
        ],
        content: `Aqui está um comparativo detalhado para ajudar você a escolher a melhor ferramenta para complementar o Lovable.

**Comparativo completo:**

| Critério | Claude Code | Antigravity | Codex |
|----------|-------------|-------------|-------|
| **Tipo** | CLI (terminal) | IDE (browser) | CLI (terminal) |
| **IA principal** | Claude Opus 4.6 | Gemini 3 Pro | GPT-4o |
| **Custo** | $20/mês | Grátis (preview) | $20/mês |
| **Instalação** | npm install | Nenhuma | npm install |
| **Preview do app** | Manual (npm run dev) | Embutido | Manual (npm run dev) |
| **Qualidade React** | Excelente | Muito boa | Muito boa |
| **Português** | Excelente | Bom | Bom |

**Recomendação por perfil:**

| Perfil | Ferramenta Recomendada | Motivo |
|--------|----------------------|--------|
| **Advogado iniciante** | Antigravity | Grátis, visual, sem instalação |
| **Advogado técnico** | Claude Code | Melhor qualidade de código React |
| **Já tem ChatGPT Plus** | Codex | Sem custo extra |
| **Quer economizar máximo** | Antigravity | 100% grátis no preview |
| **Projeto complexo** | Claude Code | Melhor raciocínio e contexto |

**Estratégia híbrida (recomendada):**

Use TODAS as ferramentas conforme a necessidade:
1. **Lovable** — prototipagem inicial e Visual Edits
2. **Claude Code** — features complexas e refatoração
3. **Antigravity** — edições visuais e ajustes rápidos (grátis)
4. **Codex** — complemento quando já tem ChatGPT Plus`,
        tips: [
          'Não existe "melhor ferramenta" absoluta — cada uma tem forças diferentes',
          'A estratégia mais econômica é Lovable (protótipo) + Antigravity (desenvolvimento grátis)',
          'Para máxima qualidade de código React, Claude Code é a melhor opção',
          'Você pode trocar de ferramenta a qualquer momento — todas usam o mesmo repositório Git',
          'Teste as 3 antes de decidir — Antigravity e Codex oferecem trial/grátis',
        ],
      },
      {
        title: 'Dicas Avançadas para Economizar Créditos',
        subtitle: 'Estratégias de expert para gastar o mínimo possível no Lovable',
        level: 'avancado',
        icon: 'zap',
        checklist: [
          {
            title: 'Antes de Usar o Lovable (Preparação)',
            items: [
              'Planeje a feature inteira antes de abrir o Lovable — escreva o que quer em um documento',
              'Use Chat Mode (barato) para investigar antes de usar Agent Mode (caro)',
              'Configure a Knowledge Base uma vez — evita repetir instruções em cada prompt',
              'Use Plan Mode para validar a estratégia antes de gastar créditos com implementação',
              'Agrupe mudanças relacionadas em um único prompt detalhado (1 prompt grande > 5 pequenos)',
              'Verifique se a mudança pode ser feita com Visual Edits (grátis) antes de recorrer à IA',
            ],
          },
          {
            title: 'Durante o Desenvolvimento (Execução)',
            items: [
              'Use ferramentas externas (Claude Code/Antigravity/Codex) para desenvolvimento contínuo',
              'Reserve o Lovable para: prototipagem rápida, Visual Edits e Supabase setup',
              'Faça commit + push frequente — o Lovable sincroniza sem gastar créditos',
              'Use branches Git para features grandes — merge quando estiver pronto',
              'Aprenda atalhos de Visual Edits: arrastar, redimensionar, editar texto inline',
              'Monitore seu uso de créditos semanalmente em Settings → Usage',
              'Se o crédito acabar, continue desenvolvendo externamente e sincronize via Git',
            ],
          },
        ],
        content: `Estas são as estratégias usadas por desenvolvedores experientes para maximizar a economia de créditos no Lovable.

**A regra de ouro:**

> Use o Lovable para o que ele faz de melhor (prototipagem e Visual Edits) e ferramentas externas para o restante.

**Economia estimada por estratégia:**

| Estratégia | Economia de Créditos |
|-----------|---------------------|
| Visual Edits para ajustes visuais | 100% (grátis) |
| Chat Mode antes de Agent Mode | ~80% |
| Plan Mode antes de construir | ~50% |
| Prompts detalhados (menos iterações) | ~30% |
| Knowledge Base configurado | ~20% |
| Desenvolvimento externo via Git | ~70% |

**Workflow otimizado de um expert:**

\`\`\`
1. Lovable: Protótipo rápido (Agent Mode) — 1-2 prompts
2. Lovable: Visual Edits (grátis) — polir design
3. GitHub: Sincronizar código
4. Claude Code: Desenvolver features — 90% do trabalho aqui
5. Git push: Sincronizar de volta
6. Lovable: Visual Edits finais (grátis)
7. Lovable: Deploy com 1 clique
\`\`\`

**Resultado:** Um app jurídico completo pode ser construído com menos de 100 créditos Lovable, usando ferramentas externas para o grosso do desenvolvimento.`,
        tips: [
          'A maior economia vem de usar ferramentas externas para desenvolvimento contínuo',
          'Visual Edits são subestimados — muitas mudanças podem ser feitas sem créditos',
          'Prompts vagos gastam créditos com iterações. Um prompt detalhado é mais barato que 3 genéricos',
          'Monitore gastos semanalmente — você vai se surpreender com onde os créditos vão',
          'Compartilhe essas dicas com outros advogados que usam o Lovable — todos economizam juntos',
        ],
      },
    ],
  },
];

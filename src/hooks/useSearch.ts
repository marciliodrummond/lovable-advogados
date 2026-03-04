import { useState, useMemo, useCallback } from 'react'
import { sections } from '../data/sections'

export interface SearchResult {
  sectionId: string
  sectionTitle: string
  sectionIcon: string
  cardTitle: string
  cardSubtitle: string
  cardIndex: number
  cardLevel: string
  cardIcon: string
  snippet: string
  score: number
  matchType: 'exact' | 'synonym' | 'intent' | 'fuzzy'
}

export interface Suggestion {
  query: string
  label: string
  icon: string
}

// ── Popular suggestions shown on focus ──────────────────────

export const popularSuggestions: Suggestion[] = [
  { query: 'primeiro app', label: 'Primeiro App', icon: 'rocket' },
  { query: 'supabase', label: 'Banco de Dados', icon: 'database' },
  { query: 'portal do cliente', label: 'Portal do Cliente', icon: 'users' },
  { query: 'deploy', label: 'Publicar App', icon: 'globe' },
  { query: 'stripe', label: 'Pagamentos', icon: 'credit-card' },
  { query: 'prompt', label: 'Prompts Prontos', icon: 'message-square' },
  { query: 'segurança', label: 'Segurança e LGPD', icon: 'shield' },
  { query: 'design', label: 'Design e Interface', icon: 'palette' },
  { query: 'prazos', label: 'Controle de Prazos', icon: 'calendar' },
  { query: 'domínio', label: 'Domínio Personalizado', icon: 'globe' },
  { query: 'claude code', label: 'Claude Code', icon: 'terminal' },
  { query: 'economizar créditos', label: 'Economizar Créditos', icon: 'dollar-sign' },
]

// ── Normalization ───────────────────────────────────────────

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

// ── Fuzzy matching (Levenshtein distance) ───────────────────

function levenshtein(a: string, b: string): number {
  if (a.length === 0) return b.length
  if (b.length === 0) return a.length
  const m: number[][] = []
  for (let i = 0; i <= b.length; i++) m[i] = [i]
  for (let j = 0; j <= a.length; j++) m[0][j] = j
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      m[i][j] = Math.min(
        m[i - 1][j] + 1,
        m[i][j - 1] + 1,
        m[i - 1][j - 1] + (b[i - 1] === a[j - 1] ? 0 : 1)
      )
    }
  }
  return m[b.length][a.length]
}

function fuzzyMatchScore(query: string, target: string): number {
  if (query.length < 4) return 0
  const targetWords = target.split(' ')
  let bestScore = 0
  for (const word of targetWords) {
    if (word.length < 3) continue
    const dist = levenshtein(query, word)
    const maxLen = Math.max(query.length, word.length)
    if (dist <= Math.floor(maxLen * 0.3) && dist > 0) {
      bestScore = Math.max(bestScore, 1 - dist / maxLen)
    }
  }
  return bestScore
}

// ── Synonym map for Lovable para Advogados ───────────────────

const synonyms: Record<string, string[]> = {
  // Plataforma Lovable
  'lovable': ['lovable', 'plataforma', 'app builder', 'construtor', 'vibe coding'],
  'bolt': ['bolt', 'lovable', 'alternativa', 'comparacao'],
  'v0': ['v0', 'vercel', 'lovable', 'alternativa', 'comparacao'],
  'cursor': ['cursor', 'lovable', 'alternativa', 'comparacao', 'ide'],
  'replit': ['replit', 'lovable', 'alternativa', 'comparacao'],
  'no code': ['no code', 'low code', 'sem codigo', 'lovable', 'construtor'],
  'vibe coding': ['vibe coding', 'lovable', 'ia', 'construir app'],

  // Créditos e custos
  'credito': ['credito', 'creditos', 'plano', 'custo', 'preco', 'economizar'],
  'creditos': ['credito', 'creditos', 'plano', 'custo', 'preco', 'economizar'],
  'economizar': ['credito', 'otimizar', 'economia', 'gastar menos', 'visual edits'],
  'barato': ['credito', 'economia', 'custo', 'preco', 'plano', 'free'],
  'gratis': ['gratuito', 'free', 'custo', 'plano', 'visual edits'],
  'plano': ['plano', 'preco', 'credito', 'free', 'pro', 'business'],
  'preco': ['preco', 'plano', 'custo', 'credito', 'free', 'pro'],

  // Modos do Lovable
  'agent mode': ['agent mode', 'modo agente', 'construir', 'implementar'],
  'plan mode': ['plan mode', 'modo plano', 'planejar', 'arquitetura', 'estrategia'],
  'chat mode': ['chat mode', 'modo chat', 'debugar', 'conversar', 'investigar'],
  'visual edits': ['visual edits', 'edicao visual', 'arrastar', 'clicar', 'sem credito'],
  'modo': ['agent mode', 'plan mode', 'chat mode', 'visual edits'],

  // Tech stack
  'react': ['react', 'typescript', 'componente', 'frontend', 'jsx'],
  'typescript': ['typescript', 'react', 'tipo', 'codigo', 'ts'],
  'tailwind': ['tailwind', 'css', 'estilo', 'classe', 'responsivo'],
  'shadcn': ['shadcn', 'ui', 'componente', 'botao', 'formulario', 'tabela'],
  'vite': ['vite', 'build', 'bundler', 'dev server'],
  'componente': ['componente', 'react', 'shadcn', 'ui', 'reutilizavel'],

  // Supabase
  'supabase': ['supabase', 'banco de dados', 'database', 'postgres', 'autenticacao'],
  'banco de dados': ['banco de dados', 'supabase', 'tabela', 'dados', 'postgres'],
  'database': ['database', 'supabase', 'banco de dados', 'tabela', 'sql'],
  'postgres': ['postgres', 'postgresql', 'supabase', 'banco de dados', 'sql'],
  'tabela': ['tabela', 'banco de dados', 'supabase', 'coluna', 'dados'],
  'rls': ['rls', 'row level security', 'seguranca', 'permissao', 'politica'],
  'row level security': ['rls', 'seguranca', 'politica', 'acesso', 'supabase'],
  'crud': ['crud', 'criar', 'ler', 'atualizar', 'deletar', 'operacao'],
  'migration': ['migration', 'migracao', 'banco', 'dados', 'importar'],
  'edge function': ['edge function', 'funcao', 'backend', 'servidor', 'api'],
  'storage': ['storage', 'armazenamento', 'upload', 'arquivo', 'documento', 'pdf'],
  'realtime': ['realtime', 'tempo real', 'notificacao', 'ao vivo', 'subscription'],

  // Autenticação
  'login': ['login', 'autenticacao', 'senha', 'acesso', 'auth'],
  'autenticacao': ['autenticacao', 'login', 'senha', 'oauth', 'supabase auth'],
  'auth': ['auth', 'autenticacao', 'login', 'senha', 'supabase'],
  'oauth': ['oauth', 'google', 'github', 'social', 'login'],
  'senha': ['senha', 'password', 'login', 'autenticacao', '2fa'],
  '2fa': ['2fa', 'autenticacao', 'seguranca', 'duplo fator'],
  'perfil': ['perfil', 'usuario', 'conta', 'permissao', 'role'],

  // Pagamentos
  'stripe': ['stripe', 'pagamento', 'cobranca', 'honorario', 'cartao'],
  'pagamento': ['pagamento', 'stripe', 'cobranca', 'honorario', 'fatura'],
  'cobranca': ['cobranca', 'honorario', 'pagamento', 'stripe', 'inadimplencia'],
  'honorario': ['honorario', 'cobranca', 'pagamento', 'stripe', 'fatura'],
  'assinatura': ['assinatura', 'subscription', 'recorrente', 'mensal', 'stripe'],
  'pix': ['pix', 'pagamento', 'transferencia', 'cobranca'],
  'cartao': ['cartao', 'pagamento', 'stripe', 'credito', 'debito'],

  // Deploy e domínio
  'deploy': ['deploy', 'publicar', 'hospedagem', 'online', 'producao'],
  'publicar': ['publicar', 'deploy', 'online', 'compartilhar', 'dominio'],
  'dominio': ['dominio', 'custom domain', 'url', 'dns', 'ssl'],
  'hospedagem': ['hospedagem', 'deploy', 'lovable cloud', 'netlify', 'vercel'],
  'seo': ['seo', 'google', 'busca', 'meta tags', 'open graph'],

  // GitHub e versionamento
  'github': ['github', 'git', 'versionamento', 'repositorio', 'codigo'],
  'git': ['git', 'github', 'versao', 'branch', 'commit'],
  'versionamento': ['versionamento', 'versao', 'github', 'historico', 'reverter'],
  'backup': ['backup', 'versionamento', 'copia', 'seguranca', 'github'],

  // Design
  'design': ['design', 'interface', 'layout', 'visual', 'ui', 'ux'],
  'tema': ['tema', 'cor', 'dark mode', 'light mode', 'paleta'],
  'cor': ['cor', 'paleta', 'tema', 'gradiente', 'contraste'],
  'fonte': ['fonte', 'tipografia', 'texto', 'tamanho', 'peso'],
  'layout': ['layout', 'design', 'grid', 'flex', 'responsivo'],
  'responsivo': ['responsivo', 'mobile', 'celular', 'tablet', 'adaptativo'],
  'mobile': ['mobile', 'responsivo', 'celular', 'smartphone', 'touch'],
  'dark mode': ['dark mode', 'tema', 'escuro', 'claro', 'toggle'],
  'figma': ['figma', 'design', 'importar', 'builder io', 'prototipo'],
  'icone': ['icone', 'lucide', 'imagem', 'visual', 'simbolo'],

  // Ferramentas jurídicas
  'processo': ['processo', 'caso', 'acao', 'processual', 'gestao'],
  'prazo': ['prazo', 'deadline', 'vencimento', 'controle', 'calendario'],
  'prazos': ['prazos', 'deadline', 'vencimento', 'controle', 'calendario'],
  'cliente': ['cliente', 'portal', 'atendimento', 'crm', 'cadastro'],
  'contrato': ['contrato', 'documento', 'clausula', 'assinatura', 'pdf'],
  'peticao': ['peticao', 'peca', 'documento', 'processual', 'gerar'],
  'audiencia': ['audiencia', 'agenda', 'preparacao', 'calendario'],
  'advogado': ['advogado', 'escritorio', 'oab', 'profissional'],
  'escritorio': ['escritorio', 'equipe', 'multi usuario', 'workspace'],

  // Segurança e ética
  'seguranca': ['seguranca', 'rls', 'lgpd', 'sigilo', 'protecao', 'scan'],
  'lgpd': ['lgpd', 'protecao de dados', 'privacidade', 'consentimento'],
  'sigilo': ['sigilo', 'confidencialidade', 'rls', 'acesso', 'privilegio'],
  'etica': ['etica', 'oab', 'cnj', 'regulamentacao', 'resolucao'],
  'oab': ['oab', 'etica', 'regulamentacao', 'advocacia'],
  'cnj': ['cnj', 'resolucao', 'regulamentacao', 'judiciario'],
  'auditoria': ['auditoria', 'log', 'rastreamento', 'compliance'],
  'scan': ['scan', 'security scan', 'vulnerabilidade', 'seguranca'],

  // Integrações
  'api': ['api', 'integracao', 'webhook', 'rest', 'endpoint'],
  'webhook': ['webhook', 'api', 'notificacao', 'evento', 'integracao'],
  'email': ['email', 'resend', 'notificacao', 'enviar', 'automatico'],
  'resend': ['resend', 'email', 'enviar', 'notificacao'],
  'whatsapp': ['whatsapp', 'mensagem', 'notificacao', 'comunicacao'],
  'calendar': ['calendar', 'google calendar', 'agenda', 'compromisso'],
  'pdf': ['pdf', 'documento', 'gerar', 'download', 'contrato'],
  'excel': ['excel', 'planilha', 'csv', 'importar', 'exportar', 'relatorio'],
  'planilha': ['planilha', 'excel', 'csv', 'importar', 'dados'],

  // Conceitos avançados
  'state': ['state', 'estado', 'useState', 'gerenciamento', 'dados'],
  'usestate': ['usestate', 'estado', 'react', 'hook', 'variavel'],
  'useeffect': ['useeffect', 'efeito', 'react', 'hook', 'ciclo'],
  'formulario': ['formulario', 'form', 'input', 'validacao', 'campo'],
  'grafico': ['grafico', 'chart', 'recharts', 'dashboard', 'visualizacao'],
  'filtro': ['filtro', 'busca', 'pesquisa', 'search', 'ordenar'],
  'relatorio': ['relatorio', 'exportar', 'excel', 'pdf', 'dados'],
  'teste': ['teste', 'test', 'automatizado', 'qualidade', 'verificar'],
  'cicd': ['cicd', 'deploy', 'automacao', 'pipeline', 'github actions'],

  // Multi-usuário
  'multi usuario': ['multi usuario', 'equipe', 'permissao', 'perfil', 'role'],
  'equipe': ['equipe', 'multi usuario', 'workspace', 'colaboracao', 'multiplayer'],
  'permissao': ['permissao', 'rbac', 'role', 'acesso', 'perfil'],
  'rbac': ['rbac', 'permissao', 'role', 'acesso', 'perfil'],
  'multiplayer': ['multiplayer', 'colaboracao', 'equipe', 'tempo real'],
  'workspace': ['workspace', 'escritorio', 'espaco', 'projeto', 'equipe'],
  'multi tenant': ['multi tenant', 'saas', 'isolamento', 'multi escritorio'],
  'saas': ['saas', 'multi tenant', 'produto', 'startup', 'legaltech'],

  // Lovable features
  'knowledge base': ['knowledge base', 'base conhecimento', 'projeto', 'diretrizes'],
  'analytics': ['analytics', 'metricas', 'visitantes', 'uso', 'monitorar'],
  'versioning': ['versioning', 'versionamento', 'historico', 'reverter', 'bookmark'],

  // Migração e legado
  'migrar': ['migrar', 'migracao', 'importar', 'legado', 'existente'],
  'migracao': ['migracao', 'migrar', 'importar', 'legado', 'excel'],
  'legado': ['legado', 'existente', 'migrar', 'antigo', 'planilha'],

  // Geral
  'comecar': ['comecar', 'primeiros passos', 'inicio', 'basico', 'iniciante'],
  'inicio': ['inicio', 'primeiros passos', 'comecar', 'criar conta'],
  'ajuda': ['ajuda', 'problema', 'erro', 'debug', 'resolver'],
  'erro': ['erro', 'problema', 'bug', 'debug', 'resolver'],
  'debug': ['debug', 'erro', 'problema', 'resolver', 'chat mode'],
  'problema': ['problema', 'erro', 'bug', 'nao funciona', 'debug'],
  'prompt': ['prompt', 'instrucao', 'pedir', 'descrever', 'comando'],
  'legaltech': ['legaltech', 'startup', 'saas', 'juridico', 'tecnologia'],
  'ia': ['ia', 'inteligencia artificial', 'lovable', 'claude', 'openai', 'agente', 'chatbot', 'rag'],
  'claude code': ['claude code', 'cli', 'terminal', 'anthropic', 'economia', 'credito'],
  'antigravity': ['antigravity', 'google', 'idx', 'firebase studio', 'ide', 'gemini', 'gratis'],
  'codex': ['codex', 'openai', 'gpt', 'cli', 'terminal', 'economia'],
  'agente ia': ['agente ia', 'agente', 'autonomo', 'tool', 'ferramenta', 'bot'],
  'multi agentes': ['multi agentes', 'multi agente', 'orquestrador', 'crewai', 'langgraph'],
  'rag': ['rag', 'retrieval', 'embedding', 'pgvector', 'vetor', 'busca semantica'],
  'chatbot': ['chatbot', 'bot', 'assistente', 'chat', 'ia', 'conversa'],
  'embedding': ['embedding', 'vetor', 'pgvector', 'rag', 'busca semantica'],
  'crewai': ['crewai', 'langgraph', 'framework', 'agente', 'multi agente'],
  'langgraph': ['langgraph', 'crewai', 'framework', 'agente', 'grafo'],
  'gemini': ['gemini', 'google', 'antigravity', 'ia', 'modelo'],
  'opus': ['opus', 'claude', 'anthropic', 'modelo', 'ia'],
  'sonnet': ['sonnet', 'claude', 'anthropic', 'modelo', 'ia'],
  'haiku': ['haiku', 'claude', 'anthropic', 'modelo', 'barato'],
  'gpt': ['gpt', 'openai', 'codex', 'chatgpt', 'modelo'],
  'token': ['token', 'custo', 'api', 'ia', 'preco'],
  'pgvector': ['pgvector', 'vetor', 'embedding', 'rag', 'supabase'],
  'claude.md': ['claude md', 'claudemd', 'config', 'claude code', 'instrucao'],
  'agents.md': ['agents md', 'agentsmd', 'config', 'codex', 'instrucao'],

  // Apps jurídicos específicos
  'portal': ['portal', 'cliente', 'acesso', 'dashboard', 'login'],
  'crm': ['crm', 'cliente', 'gestao', 'pipeline', 'acompanhamento'],
  'dashboard': ['dashboard', 'painel', 'indicador', 'kpi', 'grafico'],
  'landing page': ['landing page', 'site', 'institucional', 'marketing'],
  'blog': ['blog', 'artigo', 'conteudo', 'seo', 'marketing'],
  'calculador': ['calculador', 'calculo', 'trabalhista', 'juros', 'correcao'],
  'agenda': ['agenda', 'calendario', 'compromisso', 'audiencia', 'reuniao'],
  'documento': ['documento', 'arquivo', 'upload', 'pdf', 'storage'],
  'assinatura digital': ['assinatura digital', 'docusign', 'assinar', 'contrato'],
}

// ── Intent map for Lovable para Advogados ─────────────────────

const intentMap: Record<string, string[]> = {
  // Primeiros passos
  'como comecar': ['O que é o Lovable?', 'Criando sua Conta', 'Seu Primeiro App em 5 Minutos'],
  'quanto custa': ['Escolhendo seu Plano', 'Entendendo Créditos'],
  'qual plano': ['Escolhendo seu Plano', 'Entendendo Créditos'],
  'como criar conta': ['Criando sua Conta', 'A Interface do Lovable'],
  'primeiro app': ['Seu Primeiro App em 5 Minutos', 'Calculador Jurídico'],
  'o que e lovable': ['O que é o Lovable?', 'Lovable vs Outras Ferramentas'],

  // Modos
  'como construir': ['Os 3 Modos: Agent, Plan e Chat', 'Anatomia de um Prompt Eficaz'],
  'agent mode': ['Os 3 Modos: Agent, Plan e Chat'],
  'plan mode': ['Plan Mode: Planeje Antes de Construir', 'Os 3 Modos: Agent, Plan e Chat'],
  'chat mode': ['Chat Mode: Debugue sem Gastar', 'Os 3 Modos: Agent, Plan e Chat'],
  'visual edits': ['Visual Edits: Ajuste sem Gastar Créditos'],
  'editar sem credito': ['Visual Edits: Ajuste sem Gastar Créditos'],
  'modo agente': ['Os 3 Modos: Agent, Plan e Chat'],

  // Prompts
  'como fazer prompt': ['Anatomia de um Prompt Eficaz', 'Técnicas Expert de Prompting'],
  'prompt perfeito': ['Anatomia de um Prompt Eficaz', 'Biblioteca de Prompts Jurídicos'],
  'prompt juridico': ['Biblioteca de Prompts Jurídicos', 'Anatomia de um Prompt Eficaz'],
  'prompts prontos': ['Biblioteca de Prompts Jurídicos'],
  'melhorar prompt': ['Iteração e Refinamento', 'Técnicas Expert de Prompting'],
  'erro no prompt': ['Erros Comuns em Prompts', 'Debug e Resolução de Problemas'],

  // Design
  'como fazer design': ['shadcn/ui: Seu Kit de Componentes', 'Temas e Cores para Escritórios'],
  'escolher cor': ['Temas e Cores para Escritórios'],
  'dark mode': ['Dark Mode e Light Mode'],
  'responsivo mobile': ['Responsividade: Desktop e Mobile'],
  'importar figma': ['Importando do Figma'],
  'gerar logo': ['AI Asset Generation'],
  'template design': ['Templates Jurídicos de Design'],

  // Supabase
  'como conectar banco': ['Conectando Supabase ao Lovable', 'O que é Supabase?'],
  'criar tabela': ['Criando Tabelas para Apps Jurídicos'],
  'banco de dados': ['O que é Supabase?', 'Conectando Supabase ao Lovable'],
  'como fazer login': ['Autenticação com Supabase', 'Autenticação Segura'],
  'upload arquivo': ['Storage: Upload de Documentos'],
  'notificacao tempo real': ['Realtime: Atualizações ao Vivo'],
  'logica backend': ['Edge Functions'],
  'importar dados': ['Migrando Dados Existentes', 'Importando Planilhas'],
  'seguranca dados': ['RLS: Row Level Security', 'Sigilo Profissional e RLS'],
  'proteger dados': ['RLS: Row Level Security', 'LGPD e Apps Jurídicos', 'Sigilo Advogado-Cliente Digital'],

  // Apps jurídicos
  'portal do cliente': ['Portal do Cliente', 'Autenticação com Supabase'],
  'gestao processos': ['Gestão de Processos', 'Controle de Prazos'],
  'controle prazo': ['Controle de Prazos', 'Sistema de Agenda'],
  'calcular': ['Calculador Jurídico'],
  'cobrar honorario': ['Gestão de Honorários e Cobrança', 'Stripe: Cobrando Honorários Online'],
  'gerenciar documentos': ['Gestão de Documentos', 'Storage: Upload de Documentos'],
  'crm juridico': ['CRM Jurídico'],
  'indicadores kpi': ['Painel de Indicadores'],
  'agenda compromisso': ['Sistema de Agenda', 'Google Calendar API'],
  'site escritorio': ['Landing Page do Escritório'],
  'blog juridico': ['Blog Jurídico'],
  'checklist audiencia': ['Checklist de Audiência'],
  'formulario cliente': ['Formulário de Atendimento Inicial'],
  'multi escritorio': ['App Multi-Escritório', 'SaaS Multi-tenant'],

  // Integrações
  'como cobrar online': ['Stripe: Cobrando Honorários Online'],
  'pagamento recorrente': ['Stripe: Assinaturas Recorrentes'],
  'sincronizar github': ['GitHub: Versionamento do App'],
  'enviar email': ['Resend: Emails Automáticos'],
  'integrar api': ['Webhooks e APIs Externas'],
  'datajud': ['Webhooks e APIs Externas'],
  'notificar whatsapp': ['WhatsApp API'],
  'sincronizar calendario': ['Google Calendar API'],
  'gerar pdf': ['Gerando PDFs'],
  'assinatura digital': ['Assinatura Digital'],
  'importar excel': ['Importando Planilhas', 'Migrando Dados Existentes'],
  'adicionar ia': ['Adicione IA ao seu App Jurídico'],

  // Deploy
  'como publicar': ['Publicando seu App', 'Domínio Personalizado'],
  'publicar app': ['Publicando seu App'],
  'dominio proprio': ['Domínio Personalizado'],
  'aparecer no google': ['SEO para Apps Jurídicos'],
  'ver metricas': ['App Analytics'],
  'verificar seguranca': ['Security Scan'],
  'ambiente teste': ['Ambientes de Teste'],
  'salvar versao': ['Backup e Versionamento'],

  // Segurança
  'lgpd app': ['LGPD e Apps Jurídicos'],
  'sigilo profissional': ['Sigilo Advogado-Cliente Digital', 'Sigilo Profissional e RLS'],
  'implementar rls': ['RLS na Prática', 'RLS: Row Level Security'],
  'login seguro': ['Autenticação Segura'],
  'etica ia': ['Ética e IA na Advocacia'],
  'termos de uso': ['Termos de Uso e Privacidade'],
  'log auditoria': ['Auditoria e Logs'],
  'ataque seguranca': ['Proteção contra Ataques'],

  // Multi-usuário
  'perfil usuario': ['Perfis de Usuário', 'Permissões por Perfil'],
  'controle acesso': ['Permissões por Perfil', 'RLS na Prática'],
  'trabalhar equipe': ['Lovable Multiplayer', 'Workspace para Escritório'],
  'convidar usuario': ['Convite e Onboarding'],
  'painel admin': ['Gestão de Equipe'],
  'vender app': ['SaaS Multi-tenant', 'De Advogado a Founder'],

  // Avançado
  'editar codigo': ['Editando Código Direto'],
  'criar componente': ['Componentes Reutilizáveis'],
  'gerenciar estado': ['Estado e Gerenciamento de Dados'],
  'formulario complexo': ['Formulários Avançados'],
  'criar grafico': ['Gráficos e Visualizações'],
  'busca avancada': ['Busca e Filtros Avançados'],
  'exportar relatorio': ['Exportação de Relatórios'],
  'app ingles': ['Internacionalização'],
  'testar app': ['Testes Automatizados'],
  'deploy automatico': ['CI/CD e Automação'],
  'migrar sistema': ['Migração de App Existente'],
  'economizar credito': ['Otimização de Créditos', 'Visual Edits: Ajuste sem Gastar Créditos'],
  'resolver erro': ['Debug e Resolução de Problemas'],
  'knowledge base': ['Knowledge Base'],
  'cron job': ['Edge Functions Avançadas'],
  'futuro legaltech': ['O Futuro: Lovable e LegalTech'],
  'startup juridica': ['De Advogado a Founder'],
  'recursos comunidade': ['Recursos e Comunidade'],

  // Comparações
  'lovable vs bolt': ['Lovable vs Outras Ferramentas'],
  'melhor plataforma': ['Lovable vs Outras Ferramentas'],
  'qual ferramenta': ['Lovable vs Outras Ferramentas'],

  // IA no Lovable
  'qual ia lovable usa': ['Claude: O Cérebro do Lovable', 'Modelos e Créditos de IA'],
  'como funciona ia': ['Claude: O Cérebro do Lovable', 'Modelos e Créditos de IA'],
  'criar chatbot': ['Construindo um Chatbot Jurídico com IA', 'Boas Práticas de IA para Apps Jurídicos'],
  'busca inteligente': ['RAG: Pesquisa Jurisprudencial Inteligente'],
  'pesquisa jurisprudencia': ['RAG: Pesquisa Jurisprudencial Inteligente'],
  'agente ia': ['Criando Agentes IA Autônomos', 'Multi-Agentes IA Orquestrados'],
  'multi agentes': ['Multi-Agentes IA Orquestrados', 'Frameworks de Agentes: CrewAI e LangGraph'],
  'crewai langgraph': ['Frameworks de Agentes: CrewAI e LangGraph'],
  'custo api ia': ['Custos e Otimização de APIs de IA', 'Modelos e Créditos de IA'],
  'ia etica oab': ['Boas Práticas de IA para Apps Jurídicos'],

  // Economizando créditos
  'economizar credito lovable': ['A Estratégia: Lovable + GitHub + IA Externa', 'Dicas Avançadas para Economizar Créditos'],
  'claude code': ['Lovable + Claude Code: Introdução', 'Lovable + Claude Code: Workflow Completo'],
  'como usar claude code': ['Lovable + Claude Code: Introdução', 'Lovable + Claude Code: Workflow Completo'],
  'antigravity lovable': ['Lovable + Google Antigravity: Introdução', 'Lovable + Google Antigravity: Workflow Completo'],
  'como usar antigravity': ['Lovable + Google Antigravity: Introdução', 'Lovable + Google Antigravity: Workflow Completo'],
  'codex lovable': ['Lovable + OpenAI Codex: Introdução', 'Lovable + OpenAI Codex: Workflow Completo'],
  'como usar codex': ['Lovable + OpenAI Codex: Introdução', 'Lovable + OpenAI Codex: Workflow Completo'],
  'comparar ferramentas ia': ['Comparativo: Claude Code vs Antigravity vs Codex'],
  'gastar menos credito': ['Dicas Avançadas para Economizar Créditos', 'A Estratégia: Lovable + GitHub + IA Externa'],
  'desenvolvimento externo': ['A Estratégia: Lovable + GitHub + IA Externa', 'Configurando o GitHub no Lovable'],
}

// ── Multi-field weighted scoring ────────────────────────────

interface FieldScore {
  text: string
  weight: number
}

function buildSearchFields(card: typeof sections[0]['cards'][0]): FieldScore[] {
  return [
    { text: normalize(card.title), weight: 25 },
    { text: normalize(card.subtitle || ''), weight: 15 },
    { text: normalize(card.analogy?.central || ''), weight: 8 },
    { text: normalize(card.content), weight: 4 },
    { text: normalize((card.tips || []).join(' ')), weight: 3 },
    { text: normalize((card.steps || []).join(' ')), weight: 3 },
    { text: normalize(card.prompt || ''), weight: 5 },
    { text: normalize((card.commandList || []).map(c => `${c.command} ${c.description}`).join(' ')), weight: 7 },
    { text: normalize((card.flowSteps || []).map(f => `${f.label} ${f.description}`).join(' ')), weight: 4 },
    { text: normalize((card.elementGrid || []).map(e => `${e.title} ${e.description}`).join(' ')), weight: 5 },
    { text: normalize((card.links || []).map(l => l.label).join(' ')), weight: 2 },
    { text: normalize((card.checklist || []).map(g => `${g.title} ${g.items.join(' ')}`).join(' ')), weight: 3 },
    { text: normalize(card.relationship?.title || ''), weight: 3 },
    { text: normalize((card.relationship?.items || []).map(r => r.label).join(' ')), weight: 3 },
    { text: normalize((card.refTable || []).map(r => `${r.feature} ${r.description}`).join(' ')), weight: 3 },
  ]
}

// ── Synonym expansion ───────────────────────────────────────

function getExpandedTerms(query: string): { original: string[], expanded: string[] } {
  const normalized = normalize(query)
  const words = normalized.split(' ').filter(w => w.length >= 2)
  const original = [normalized, ...words]
  const expanded: string[] = []

  for (const word of words) {
    for (const [key, alts] of Object.entries(synonyms)) {
      const normKey = normalize(key)
      if (word === normKey || normKey.startsWith(word) || word.startsWith(normKey)) {
        expanded.push(...alts.map(normalize))
      }
    }
  }

  // Also check the full query as a synonym key
  for (const [key, alts] of Object.entries(synonyms)) {
    const normKey = normalize(key)
    if (normalized.includes(normKey) || normKey.includes(normalized)) {
      expanded.push(...alts.map(normalize))
    }
  }

  return {
    original: [...new Set(original)],
    expanded: [...new Set(expanded)],
  }
}

// ── Intent detection ────────────────────────────────────────

function getIntentBoosts(query: string): string[] {
  const normalized = normalize(query)
  const boosts: string[] = []

  for (const [intent, titles] of Object.entries(intentMap)) {
    const normIntent = normalize(intent)
    const intentWords = normIntent.split(' ')
    const queryWords = normalized.split(' ')

    // Check if query matches intent (50%+ word overlap)
    const matchCount = intentWords.filter(iw =>
      queryWords.some(qw => qw.includes(iw) || iw.includes(qw))
    ).length

    if (matchCount >= Math.ceil(intentWords.length * 0.5)) {
      boosts.push(...titles.map(normalize))
    }
  }

  return [...new Set(boosts)]
}

// ── Snippet extraction with context ─────────────────────────

function extractSnippet(fields: FieldScore[], queryNorm: string, card: typeof sections[0]['cards'][0]): string {
  // Try to find match in content fields for a relevant snippet
  const allText = fields.map(f => f.text).join(' ')
  const idx = allText.indexOf(queryNorm)

  if (idx >= 0) {
    const start = Math.max(0, idx - 30)
    const end = Math.min(allText.length, idx + queryNorm.length + 70)
    const raw = allText.slice(start, end).trim()
    return (start > 0 ? '...' : '') + raw + (end < allText.length ? '...' : '')
  }

  // Try individual query words
  const words = queryNorm.split(' ').filter(w => w.length >= 3)
  for (const word of words) {
    const wIdx = allText.indexOf(word)
    if (wIdx >= 0) {
      const start = Math.max(0, wIdx - 25)
      const end = Math.min(allText.length, wIdx + word.length + 75)
      const raw = allText.slice(start, end).trim()
      return (start > 0 ? '...' : '') + raw + (end < allText.length ? '...' : '')
    }
  }

  return card.subtitle || card.content.slice(0, 100).trim() + '...'
}

// ── Main scoring function ───────────────────────────────────

function scoreCard(
  fields: FieldScore[],
  original: string[],
  expanded: string[],
  intentBoosts: string[],
  queryNorm: string,
): { score: number; matchType: SearchResult['matchType'] } {
  let score = 0
  let matchType: SearchResult['matchType'] = 'exact'
  let hasExact = false
  let hasSynonym = false
  let hasIntent = false
  let hasFuzzy = false

  const titleField = fields[0]
  const subtitleField = fields[1]

  // 1. Original terms — direct matches (highest value)
  for (const term of original) {
    for (const field of fields) {
      if (!field.text) continue
      if (field.text.includes(term)) {
        score += field.weight
        hasExact = true
        if (field === titleField && field.text.startsWith(term)) {
          score += 10
        }
      }
    }
  }

  // 2. Phrase match bonus (multi-word query matched in sequence)
  if (queryNorm.includes(' ') && queryNorm.length >= 5) {
    if (titleField.text.includes(queryNorm)) {
      score += 30
      hasExact = true
    } else if (subtitleField.text.includes(queryNorm)) {
      score += 20
      hasExact = true
    }
  }

  // 3. Expanded terms — synonym matches (medium value)
  for (const term of expanded) {
    if (titleField.text.includes(term)) {
      score += 8
      hasSynonym = true
    }
    if (subtitleField.text.includes(term)) {
      score += 5
      hasSynonym = true
    }
    if (!hasExact && !hasSynonym) {
      for (const field of fields.slice(2)) {
        if (field.text && field.text.includes(term)) {
          score += Math.min(field.weight, 3)
          hasSynonym = true
          break
        }
      }
    }
  }

  // 4. Intent boost
  for (const boost of intentBoosts) {
    if (titleField.text.includes(boost) || subtitleField.text.includes(boost)) {
      score += 15
      hasIntent = true
    }
  }

  // 5. Fuzzy matching on title (typo tolerance)
  if (score === 0) {
    for (const term of original) {
      const fuzzyScore = fuzzyMatchScore(term, titleField.text)
      if (fuzzyScore > 0) {
        score += Math.round(fuzzyScore * 12)
        hasFuzzy = true
      }
      const fuzzySubScore = fuzzyMatchScore(term, subtitleField.text)
      if (fuzzySubScore > 0) {
        score += Math.round(fuzzySubScore * 6)
        hasFuzzy = true
      }
    }
  }

  // 6. Multi-word coverage bonus
  if (original.length > 1) {
    const words = queryNorm.split(' ').filter(w => w.length >= 2)
    const allFieldText = fields.map(f => f.text).join(' ')
    const matchedWords = words.filter(w => allFieldText.includes(w))
    if (matchedWords.length > 1) {
      score += matchedWords.length * 4
    }
  }

  // Determine primary match type
  if (hasExact) matchType = 'exact'
  else if (hasIntent) matchType = 'intent'
  else if (hasSynonym) matchType = 'synonym'
  else if (hasFuzzy) matchType = 'fuzzy'

  return { score, matchType }
}

// ── Related content suggestions ─────────────────────────────

const relatedMap: Record<string, string[]> = {
  'O que é o Lovable?': ['Criando sua Conta', 'Lovable vs Outras Ferramentas', 'Seu Primeiro App em 5 Minutos'],
  'Seu Primeiro App em 5 Minutos': ['Anatomia de um Prompt Eficaz', 'Calculador Jurídico', 'A Interface do Lovable'],
  'Os 3 Modos: Agent, Plan e Chat': ['Plan Mode: Planeje Antes de Construir', 'Chat Mode: Debugue sem Gastar', 'Visual Edits: Ajuste sem Gastar Créditos'],
  'Anatomia de um Prompt Eficaz': ['Biblioteca de Prompts Jurídicos', 'Erros Comuns em Prompts', 'Técnicas Expert de Prompting'],
  'Biblioteca de Prompts Jurídicos': ['Anatomia de um Prompt Eficaz', 'Portal do Cliente', 'Gestão de Processos'],
  'O que é Supabase?': ['Conectando Supabase ao Lovable', 'Criando Tabelas para Apps Jurídicos'],
  'RLS: Row Level Security': ['Sigilo Profissional e RLS', 'RLS na Prática', 'LGPD e Apps Jurídicos'],
  'Autenticação com Supabase': ['Portal do Cliente', 'Perfis de Usuário', 'Autenticação Segura'],
  'Portal do Cliente': ['Autenticação com Supabase', 'Gestão de Documentos', 'Controle de Prazos'],
  'Gestão de Processos': ['Controle de Prazos', 'Painel de Indicadores', 'CRM Jurídico'],
  'Stripe: Cobrando Honorários Online': ['Gestão de Honorários e Cobrança', 'Stripe: Assinaturas Recorrentes'],
  'Publicando seu App': ['Domínio Personalizado', 'SEO para Apps Jurídicos', 'Security Scan'],
  'LGPD e Apps Jurídicos': ['Sigilo Advogado-Cliente Digital', 'RLS na Prática', 'Auditoria e Logs'],
  'Perfis de Usuário': ['Permissões por Perfil', 'Dashboard por Perfil', 'Workspace para Escritório'],
  'Otimização de Créditos': ['Visual Edits: Ajuste sem Gastar Créditos', 'Plan Mode: Planeje Antes de Construir', 'Entendendo Créditos'],
  'Debug e Resolução de Problemas': ['Chat Mode: Debugue sem Gastar', 'Backup e Versionamento'],
  'De Advogado a Founder': ['SaaS Multi-tenant', 'App Multi-Escritório', 'O Futuro: Lovable e LegalTech'],
  'Landing Page do Escritório': ['SEO para Apps Jurídicos', 'Blog Jurídico', 'Domínio Personalizado'],
  'GitHub: Versionamento do App': ['Backup e Versionamento', 'Ambientes de Teste', 'CI/CD e Automação'],
  'Knowledge Base': ['Anatomia de um Prompt Eficaz', 'Técnicas Expert de Prompting'],
  'Edge Functions': ['Edge Functions Avançadas', 'Webhooks e APIs Externas', 'Resend: Emails Automáticos'],

  // Seção 11 — IA no Lovable
  'Claude: O Cérebro do Lovable': ['Modelos e Créditos de IA', 'Knowledge Base Avançado', 'Construindo um Chatbot Jurídico com IA'],
  'Modelos e Créditos de IA': ['Claude: O Cérebro do Lovable', 'Custos e Otimização de APIs de IA', 'Dicas Avançadas para Economizar Créditos'],
  'Knowledge Base Avançado': ['Claude: O Cérebro do Lovable', 'Anatomia de um Prompt Eficaz', 'Técnicas Expert de Prompting'],
  'Construindo um Chatbot Jurídico com IA': ['RAG: Pesquisa Jurisprudencial Inteligente', 'Criando Agentes IA Autônomos', 'Boas Práticas de IA para Apps Jurídicos'],
  'RAG: Pesquisa Jurisprudencial Inteligente': ['Construindo um Chatbot Jurídico com IA', 'Criando Agentes IA Autônomos', 'Custos e Otimização de APIs de IA'],
  'Criando Agentes IA Autônomos': ['Multi-Agentes IA Orquestrados', 'Frameworks de Agentes: CrewAI e LangGraph', 'Construindo um Chatbot Jurídico com IA'],
  'Multi-Agentes IA Orquestrados': ['Criando Agentes IA Autônomos', 'Frameworks de Agentes: CrewAI e LangGraph', 'Custos e Otimização de APIs de IA'],
  'Frameworks de Agentes: CrewAI e LangGraph': ['Criando Agentes IA Autônomos', 'Multi-Agentes IA Orquestrados', 'Edge Functions'],
  'Custos e Otimização de APIs de IA': ['Modelos e Créditos de IA', 'Boas Práticas de IA para Apps Jurídicos', 'Dicas Avançadas para Economizar Créditos'],
  'Boas Práticas de IA para Apps Jurídicos': ['Custos e Otimização de APIs de IA', 'Construindo um Chatbot Jurídico com IA', 'LGPD e Apps Jurídicos'],

  // Seção 12 — Economizando Créditos
  'A Estratégia: Lovable + GitHub + IA Externa': ['Configurando o GitHub no Lovable', 'Lovable + Claude Code: Introdução', 'Comparativo: Claude Code vs Antigravity vs Codex'],
  'Configurando o GitHub no Lovable': ['A Estratégia: Lovable + GitHub + IA Externa', 'GitHub: Versionamento do App', 'Lovable + Claude Code: Workflow Completo'],
  'Lovable + Claude Code: Introdução': ['Lovable + Claude Code: Workflow Completo', 'A Estratégia: Lovable + GitHub + IA Externa', 'Comparativo: Claude Code vs Antigravity vs Codex'],
  'Lovable + Claude Code: Workflow Completo': ['Lovable + Claude Code: Introdução', 'Configurando o GitHub no Lovable', 'Dicas Avançadas para Economizar Créditos'],
  'Lovable + Google Antigravity: Introdução': ['Lovable + Google Antigravity: Workflow Completo', 'A Estratégia: Lovable + GitHub + IA Externa', 'Comparativo: Claude Code vs Antigravity vs Codex'],
  'Lovable + Google Antigravity: Workflow Completo': ['Lovable + Google Antigravity: Introdução', 'Configurando o GitHub no Lovable', 'Dicas Avançadas para Economizar Créditos'],
  'Lovable + OpenAI Codex: Introdução': ['Lovable + OpenAI Codex: Workflow Completo', 'A Estratégia: Lovable + GitHub + IA Externa', 'Comparativo: Claude Code vs Antigravity vs Codex'],
  'Lovable + OpenAI Codex: Workflow Completo': ['Lovable + OpenAI Codex: Introdução', 'Configurando o GitHub no Lovable', 'Dicas Avançadas para Economizar Créditos'],
  'Comparativo: Claude Code vs Antigravity vs Codex': ['Lovable + Claude Code: Introdução', 'Lovable + Google Antigravity: Introdução', 'Lovable + OpenAI Codex: Introdução'],
  'Dicas Avançadas para Economizar Créditos': ['A Estratégia: Lovable + GitHub + IA Externa', 'Comparativo: Claude Code vs Antigravity vs Codex', 'Otimização de Créditos'],
}

export function getRelatedCards(cardTitle: string): string[] {
  // Exact match first
  if (relatedMap[cardTitle]) return relatedMap[cardTitle]
  // Accent-insensitive fallback (cards in sections 1-5 lack accents)
  const norm = normalize(cardTitle)
  for (const [key, values] of Object.entries(relatedMap)) {
    if (normalize(key) === norm) return values
  }
  return []
}

// ── Main hook ───────────────────────────────────────────────

export function useSearch() {
  const [query, setQuery] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  // Pre-build search fields for all cards (memoized)
  const searchIndex = useMemo(() => {
    return sections.map(section => ({
      section,
      cards: section.cards.map((card, idx) => ({
        card,
        index: idx,
        fields: buildSearchFields(card),
      })),
    }))
  }, [])

  const results = useMemo<SearchResult[]>(() => {
    if (query.length < 2) return []

    const queryNorm = normalize(query)
    const { original, expanded } = getExpandedTerms(query)
    const intentBoosts = getIntentBoosts(query)
    const found: SearchResult[] = []

    for (const { section, cards } of searchIndex) {
      for (const { card, index, fields } of cards) {
        const { score, matchType } = scoreCard(fields, original, expanded, intentBoosts, queryNorm)

        if (score > 0) {
          found.push({
            sectionId: section.id,
            sectionTitle: section.title,
            sectionIcon: section.icon,
            cardTitle: card.title,
            cardSubtitle: card.subtitle || '',
            cardIndex: index,
            cardLevel: card.level,
            cardIcon: card.icon,
            snippet: extractSnippet(fields, queryNorm, card),
            score,
            matchType,
          })
        }
      }
    }

    found.sort((a, b) => b.score - a.score)
    return found.slice(0, 15)
  }, [query, searchIndex])

  const handleFocus = useCallback(() => setIsFocused(true), [])
  const handleBlur = useCallback(() => {
    // Delay to allow click on results
    setTimeout(() => setIsFocused(false), 200)
  }, [])

  return { query, setQuery, results, isFocused, handleFocus, handleBlur }
}

# Flux

Organizador profissional multiusuário individual, em português, com dashboard diário, CRUD de tarefas, Kanban, calendário, notificações do navegador e relatórios simples.

## Tecnologias
React, Vite, JavaScript, Supabase, TanStack Query, dnd-kit, FullCalendar e Recharts.


## Publicar sem instalar npm na maquina

Voce pode publicar inteiramente pelo GitHub. Extraia este ZIP no computador, envie todos os arquivos e pastas para a raiz do repositorio e configure os Secrets do GitHub. O workflow instala as dependencias e gera o site nos servidores do GitHub. O arquivo `.env` nao e necessario para a publicacao pelo GitHub Pages.

## 1. Preparar o Supabase
1. Crie um projeto em https://supabase.com.
2. Abra **SQL Editor**.
3. Execute, nesta ordem, `supabase/migrations/001_initial_schema.sql` e `002_rls.sql`.
4. Em **Authentication > Providers**, mantenha Email habilitado.
5. Em **Authentication > URL Configuration**, adicione `http://localhost:5173/FluxApp/` e a URL do GitHub Pages.
6. Copie a Project URL e a chave pública anon em **Project Settings > API**.

As políticas RLS isolam os dados por usuário. Nunca coloque a `service_role` no front-end.

## 2. Executar localmente
```bash
cp .env.example .env
npm install
npm run dev
```
Preencha `.env` com `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY`. Para rodar na raiz local, você pode definir `VITE_BASE_PATH=/`.

## 3. Publicar no GitHub Pages
1. Envie os arquivos para o repositório `Murilo-esilva/FluxApp`.
2. Em **Settings > Secrets and variables > Actions**, crie `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY`.
3. Em **Settings > Pages > Source**, selecione **GitHub Actions**.
4. Faça push na branch `main`. O workflow fará build e deploy.

Comandos para o repositório vazio:
```bash
git init
git add .
git commit -m "feat: primeira versao do Flux"
git branch -M main
git remote add origin https://github.com/Murilo-esilva/FluxApp.git
git push -u origin main
```

## Funcionalidades
- Cadastro, login, logout e recuperação de senha.
- Dashboard com tarefas vencidas, do dia e resumo por prioridade.
- CRUD com arquivamento lógico.
- Kanban com arrastar e soltar, além de seletor alternativo de status.
- Projetos opcionais e Caixa de Entrada.
- Calendário mensal, semanal e lista.
- Relatórios por status e prioridade.
- Tema escuro padrão e tema claro.
- Solicitação de permissão para notificações do navegador.
- Histórico automático de alterações no banco.

## Notificações
A permissão do navegador está implementada. Para avisos enquanto o app está fechado, é preciso acrescentar Web Push com VAPID e uma Supabase Edge Function agendada. Não inclua chaves privadas no repositório.

## Verificações
```bash
npm run lint
npm test
npm run build
```

## Observações do MVP
- Multiusuário individual: cada conta vê apenas seus próprios dados.
- Status fixos: A Fazer, Em Andamento, Em Revisão, Concluído e Cancelado.
- Sem dados demonstrativos.
- Checklist e etiquetas possuem estrutura SQL pronta; a interface completa pode ser expandida na próxima iteração.

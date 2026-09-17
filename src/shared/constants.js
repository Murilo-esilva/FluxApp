export const STATUSES=[['todo','A Fazer'],['in_progress','Em Andamento'],['review','Em Revisão'],['done','Concluído']];
export const PRIORITIES=[['low','Baixa'],['medium','Média'],['high','Alta'],['urgent','Urgente']];
export const labelOf=(list,value)=>list.find(([v])=>v===value)?.[1]||value;

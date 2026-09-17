import {describe,it,expect} from 'vitest'; import {labelOf,PRIORITIES} from './constants'; describe('labelOf',()=>{it('traduz prioridade',()=>expect(labelOf(PRIORITIES,'urgent')).toBe('Urgente'))});

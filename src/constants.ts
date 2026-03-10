import { Type } from 'lucide-react';

export type MeasurementType = 'QUANTITATIVO' | 'BINÁRIO';
export type Role = 'AUX' | 'OPE';

export interface InspectionItem {
  id: string;
  label: string;
  type: MeasurementType;
  role: Role;
}

export interface SubSector {
  id: string;
  name: string;
  items: InspectionItem[];
}

export interface Sector {
  id: string;
  name: string;
  subSectors: SubSector[];
}

export const SECTORS: Sector[] = [
  {
    id: 'internacao',
    name: 'INTERNAÇÃO',
    subSectors: [
      {
        id: 'doca',
        name: 'Doca',
        items: [
          { id: 'i1', label: 'Postura ergonomicamente inadequada', type: 'QUANTITATIVO', role: 'AUX' },
          { id: 'i2', label: 'Os colaboradores tem conhecimento da instrução operacional', type: 'BINÁRIO', role: 'AUX' },
          { id: 'i3', label: 'Uso inadequado da bota', type: 'BINÁRIO', role: 'AUX' },
          { id: 'i4', label: 'Uso de luvas', type: 'QUANTITATIVO', role: 'AUX' },
        ],
      },
      {
        id: 'raio-x',
        name: 'Raio X',
        items: [
          { id: 'i5', label: 'Levantamento de carga acima de 25kg sozinho.', type: 'BINÁRIO', role: 'AUX' },
          { id: 'i6', label: 'Postura ergonomica inadequada.', type: 'BINÁRIO', role: 'AUX' },
          { id: 'i7', label: 'Uso de luvas.', type: 'QUANTITATIVO', role: 'AUX' },
          { id: 'i8', label: 'Uso inadequado da bota.', type: 'BINÁRIO', role: 'AUX' },
        ],
      },
      {
        id: 'armazem',
        name: 'Armazém',
        items: [
          { id: 'i9', label: 'Puxar ou empurrar matrim com cargas <400kg', type: 'BINÁRIO', role: 'AUX' },
          { id: 'i10', label: 'Colaborador andando sobre o matrim', type: 'BINÁRIO', role: 'AUX' },
          { id: 'i11', label: 'Dividir espaço com a transpaleteira', type: 'BINÁRIO', role: 'AUX' },
          { id: 'i12', label: 'Conduzir transpaleteira com carga acima da visão', type: 'QUANTITATIVO', role: 'OPE' },
          { id: 'i13', label: 'Dividir espaço com pedestre', type: 'QUANTITATIVO', role: 'OPE' },
          { id: 'i14', label: 'Não preenchimento do check list', type: 'QUANTITATIVO', role: 'OPE' },
        ],
      },
      {
        id: 'expedicao',
        name: 'Expedição',
        items: [
          { id: 'i15', label: 'Transportar carga acima da capacidade do equipamento', type: 'QUANTITATIVO', role: 'AUX' },
          { id: 'i16', label: 'Colaborador não subir em cima de pilhas de paletes', type: 'BINÁRIO', role: 'AUX' },
          { id: 'i17', label: 'Usar equipamento com não conformidade crítica', type: 'QUANTITATIVO', role: 'OPE' },
          { id: 'i18', label: 'Transportar carga acima da capacidade do equipamento', type: 'QUANTITATIVO', role: 'OPE' },
        ],
      },
    ],
  },
  {
    id: 'carga-nacional',
    name: 'CARGA NACIONAL',
    subSectors: [
      {
        id: 'nacional-paletizada',
        name: 'Nacional/Paletizada',
        items: [
          { id: 'i19', label: 'Colaborador usando luvas', type: 'QUANTITATIVO', role: 'AUX' },
          { id: 'i20', label: 'Uso inadequado da bota', type: 'QUANTITATIVO', role: 'AUX' },
          { id: 'i21', label: 'Colaborador tenta frear a uld durante a movimentação', type: 'QUANTITATIVO', role: 'AUX' },
          { id: 'i22', label: 'Os colaboradores tem conhecimento da instrução operacional', type: 'QUANTITATIVO', role: 'AUX' },
          { id: 'i23', label: 'Há comunicação eficaz entre a equipe durante a movimentação das ULD\'s', type: 'BINÁRIO', role: 'AUX' },
          { id: 'i24', label: 'Colaborador correndo durante suas tarefas', type: 'QUANTITATIVO', role: 'AUX' },
          { id: 'i25', label: 'Colaborador puxando de frente a ULD pelas redes', type: 'QUANTITATIVO', role: 'AUX' },
          { id: 'i26', label: 'Colaborador movimentando ULD sozinho', type: 'QUANTITATIVO', role: 'AUX' },
          { id: 'i27', label: 'Colaborador se posicionando ou passando em frente a ULD durante a movimentação', type: 'QUANTITATIVO', role: 'AUX' },
          { id: 'i28', label: 'Colaborador empurra a ULD vazia com os pés', type: 'QUANTITATIVO', role: 'AUX' },
          { id: 'i29', label: 'Colaborador fica em cima da ULD vazia durante a movimentação', type: 'QUANTITATIVO', role: 'AUX' },
          { id: 'i30', label: 'Colaborador se prende na ULD durante a movimentação', type: 'QUANTITATIVO', role: 'AUX' },
          { id: 'i31', label: 'Colaborador conhece as rotas de fuga do setor', type: 'BINÁRIO', role: 'AUX' },
          { id: 'i32', label: 'Colaborador conhece o ponto de encontro', type: 'BINÁRIO', role: 'AUX' },
          { id: 'i33', label: 'Colaborador se apoia nos roletes para empurrar as ULD\'s', type: 'BINÁRIO', role: 'AUX' },
          { id: 'i34', label: 'Colaborador sabe onde se encontra os extintores de incêndio', type: 'BINÁRIO', role: 'AUX' },
          { id: 'i35', label: 'Colaborador passando para o lado ar', type: 'BINÁRIO', role: 'AUX' },
        ],
      },
    ],
  },
  {
    id: 'recebimento',
    name: 'RECEBIMENTO',
    subSectors: [
      {
        id: 'ponto-zero',
        name: 'Ponto Zero',
        items: [
          { id: 'i36', label: 'Colaborador tem ciencia da Instrução de trabalho da atividade', type: 'QUANTITATIVO', role: 'AUX' },
          { id: 'i37', label: 'Colaborador proximo ao cabo de aço durante o rebock do trator.', type: 'BINÁRIO', role: 'AUX' },
          { id: 'i38', label: 'Colaborador andando sobre a linha de rack durante o recebimento das ULD\'s.', type: 'BINÁRIO', role: 'AUX' },
          { id: 'i39', label: 'Colaborador não se posicionar entre linha de rack e dolly.', type: 'BINÁRIO', role: 'AUX' },
          { id: 'i40', label: 'Colaborador destravar o dolly pela lateral (não entrar na frente).', type: 'QUANTITATIVO', role: 'AUX' },
          { id: 'i41', label: 'Utilização da luva de proteção.', type: 'QUANTITATIVO', role: 'AUX' },
          { id: 'i42', label: 'Empurrando ULD ao invés de usar o trator.', type: 'QUANTITATIVO', role: 'AUX' },
          { id: 'i43', label: 'Trator não arrastar cabo de aço ao se movimentar.', type: 'QUANTITATIVO', role: 'OPE' },
          { id: 'i44', label: 'Operador acelerar repentinamente equipamento.', type: 'QUANTITATIVO', role: 'OPE' },
          { id: 'i45', label: 'Trator puxar somente 2 ULD por vez.', type: 'QUANTITATIVO', role: 'OPE' },
          { id: 'i46', label: 'Operador desliga o Trator ao descer.', type: 'QUANTITATIVO', role: 'OPE' },
          { id: 'i47', label: 'Utilização do freio de mão.', type: 'QUANTITATIVO', role: 'OPE' },
          { id: 'i48', label: 'Uso do cinto de segurança.', type: 'QUANTITATIVO', role: 'OPE' },
          { id: 'i49', label: 'Limite de velocidade.', type: 'QUANTITATIVO', role: 'OPE' },
        ],
      },
      {
        id: 'despaletizacao',
        name: 'Despaletização',
        items: [
          { id: 'i50', label: 'Colaborador arremessando de rede durante despaletização.', type: 'QUANTITATIVO', role: 'AUX' },
          { id: 'i51', label: 'Uso de luvas', type: 'QUANTITATIVO', role: 'AUX' },
          { id: 'i52', label: 'Utilização dos garfos para retirar as redes.', type: 'QUANTITATIVO', role: 'AUX' },
          { id: 'i53', label: 'Não tirar rede simultaneamente 2 ULDs uma ao lado da outra.', type: 'QUANTITATIVO', role: 'AUX' },
          { id: 'i54', label: 'Colaborador manter distancia de cargas com risco de queda durante despaletização.', type: 'BINÁRIO', role: 'AUX' },
          { id: 'i55', label: 'Levantamento de carga < 25kg sozinho.', type: 'QUANTITATIVO', role: 'AUX' },
          { id: 'i56', label: 'Colaborador dividindo espaço com empilhadeira.', type: 'QUANTITATIVO', role: 'AUX' },
          { id: 'i57', label: 'Colaborador subirndo nos paletes para retirada de carga.', type: 'QUANTITATIVO', role: 'AUX' },
          { id: 'i58', label: 'Preechimento do check list.', type: 'QUANTITATIVO', role: 'OPE' },
          { id: 'i59', label: 'Operador não dividir trafego das empilhadeiras de 2,5ton com a de 16ton.', type: 'QUANTITATIVO', role: 'OPE' },
          { id: 'i60', label: 'Operador desliga a Empilhadeira ao descer.', type: 'QUANTITATIVO', role: 'OPE' },
          { id: 'i61', label: 'Operador dividindo espaço com pedestre.', type: 'QUANTITATIVO', role: 'OPE' },
          { id: 'i62', label: 'Trafegar na volocidade adequada.', type: 'QUANTITATIVO', role: 'OPE' },
        ],
      },
      {
        id: 'atracacao',
        name: 'Atracação',
        items: [
          { id: 'i63', label: 'Postura Ergonomica errada.', type: 'QUANTITATIVO', role: 'AUX' },
          { id: 'i64', label: 'Operador não bater na estrutura da balança.', type: 'QUANTITATIVO', role: 'OPE' },
        ],
      },
      {
        id: 'armazenagem',
        name: 'Armazenagem',
        items: [
          { id: 'i65', label: 'Puxar ou empurrar matrim com cargas <400kg.', type: 'QUANTITATIVO', role: 'AUX' },
          { id: 'i66', label: 'Colaborador andando sobre the matrim.', type: 'BINÁRIO', role: 'AUX' },
          { id: 'i67', label: 'Dividir espaço com a empilhadeira.', type: 'BINÁRIO', role: 'AUX' },
          { id: 'i68', label: 'Entrar no transelevador.', type: 'BINÁRIO', role: 'AUX' },
          { id: 'i69', label: 'Preechimento do check list.', type: 'QUANTITATIVO', role: 'OPE' },
          { id: 'i70', label: 'Operador desliga a Empilhadeira ao descer.', type: 'QUANTITATIVO', role: 'OPE' },
          { id: 'i71', label: 'Operador dividindo espaço com pedestre.', type: 'QUANTITATIVO', role: 'OPE' },
          { id: 'i72', label: 'Trafegar na volocidade adequada.', type: 'QUANTITATIVO', role: 'OPE' },
        ],
      },
      {
        id: 'sala-bateria',
        name: 'Sala de Bateria',
        items: [
          { id: 'i73', label: 'Uso de luvas', type: 'QUANTITATIVO', role: 'OPE' },
          { id: 'i74', label: 'Troca feita individualmente', type: 'QUANTITATIVO', role: 'OPE' },
          { id: 'i75', label: 'Operador seguindo o passo a passo exposto no setor', type: 'QUANTITATIVO', role: 'OPE' },
          { id: 'i76', label: 'Operador realizou treinamento', type: 'QUANTITATIVO', role: 'OPE' },
        ],
      },
    ],
  },
  {
    id: 'liberacao',
    name: 'LIBERAÇÃO',
    subSectors: [
      {
        id: 'portao-1-4',
        name: 'Portão 1 e 4',
        items: [
          { id: 'i77', label: 'Puxar ou empurrar matrim com cargas <400kg', type: 'QUANTITATIVO', role: 'AUX' },
          { id: 'i78', label: 'Colaborador andando sobre o matrim', type: 'BINÁRIO', role: 'AUX' },
          { id: 'i79', label: 'Dividir espaço com a empilhadeira.', type: 'BINÁRIO', role: 'AUX' },
          { id: 'i80', label: 'Transportar carga acima da capacidade do equipamento', type: 'BINÁRIO', role: 'AUX' },
          { id: 'i81', label: 'Uso de luvas', type: 'QUANTITATIVO', role: 'AUX' },
          { id: 'i82', label: 'Conduzir transpaleteira com carga acima da visão', type: 'QUANTITATIVO', role: 'OPE' },
          { id: 'i83', label: 'Dividir espaço com pedestre', type: 'QUANTITATIVO', role: 'OPE' },
          { id: 'i84', label: 'Não preenchimento do check list', type: 'QUANTITATIVO', role: 'OPE' },
          { id: 'i85', label: 'Usar equipamento com não conformidade crítica', type: 'QUANTITATIVO', role: 'OPE' },
          { id: 'i86', label: 'Transportar carga acima da capacidade do equipamento', type: 'QUANTITATIVO', role: 'OPE' },
        ],
      },
      {
        id: 'geladeira',
        name: 'Geladeira',
        items: [
          { id: 'i87', label: 'Colaborador tem ciencia da Instrução de trabalho da atividade', type: 'BINÁRIO', role: 'AUX' },
          { id: 'i88', label: 'Uso de luva', type: 'QUANTITATIVO', role: 'AUX' },
          { id: 'i89', label: 'Uso inadequado da bota', type: 'QUANTITATIVO', role: 'AUX' },
          { id: 'i90', label: 'Uso das vestimentas termicas', type: 'QUANTITATIVO', role: 'AUX' },
        ],
      },
    ],
  },
];

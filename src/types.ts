import type {
  FrameEntryType,
  GameEndType,
  GameStartType,
  MetadataType,
  StatsType,
} from '@slippi/slippi-js';

export enum Stat {
  OPENINGS_PER_KILL = 'opk',
  DAMAGE_PER_OPENING = 'dpo',
  NEUTRAL_WINS = 'nw',
  KILL_MOVES = 'mckm',
  NEUTRAL_OPENER_MOVES = 'mcno',
  INPUTS_PER_MINUTE = 'ipm',
  AVG_KILL_PERCENT = 'akp',
  DAMAGE_DONE = 'tdd',
  EARLY_KILLS = 'ek',
  LATE_DEATHS = 'ld',
  SELF_DESTRUCTS = 'sd',
  HIGH_DAMAGE_PUNISHES = 'hdp',

  // Custom
  FIRST_BLOOD = 'fb',
  L_CANCEL = 'lc',
}
type GameFileName = string;
type GameDateCreated = string;

export type GameId = `${GameFileName}.${GameDateCreated}`;

export interface GameData {
  id: GameId;
  filePath: string;
  settings: GameStartType | null;
  // frames: FramesType;
  stats: StatsType | null;
  metadata: MetadataType | null;
  latestFrame: FrameEntryType | null;
  gameEnd: GameEndType | null;
  winner: number | null;
}
export type MetadataPlayersType = Record<
  string,
  MetadataType['players']
>[number];

export interface StatCalculationResult {
  result: unknown;
  simple: unknown;
}

export type StatCalculation = (
  games: GameData[],
  playerIndex: number
) => StatCalculationResult;

export interface StatDefinition {
  name: string;
  type: string;
  betterDirection?: string;
  recommendedRounding?: number;
  calculate: StatCalculation;
}

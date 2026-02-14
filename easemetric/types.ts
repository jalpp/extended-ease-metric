/** The evaluation of a specific position. */
export interface PositionEval {
    /** The best move chosen by the engine. */
    bestMove?: string;
    /** The name of the opening of the position. */
    opening?: string;
    /** The lines evaluated by the engine. */
    lines: LineEval[];
}

/** The evaluation of a single line. */
export interface LineEval {
    /** The FEN of the starting position in the line. */
    fen: string;
    /** The moves chosen by the engine in UCI format. */
    pv: string[];
    /** The numeric evaluation of the line. */
    cp?: number;
    /** The number of moves to mate. */
    mate?: number;
    /** The depth of the line. */
    depth: number;
    /** The Multi PV value of the engine while calculating the line. */
    multiPv: number;
    /** The number of nodes per second evaluated by the engine. */
    nps?: number;
    
    /** The ending ease metric for the variation  */
    endingEM?: number;
    /** The expected percentages of different results. */
    resultPercentages?: {
        /** The expected win percentage evaluated by the engine. */
        win: number;
        /** The expected draw percentage evaluated by the engine. */
        draw: number;
        /** The expected loss percentage evaluated by the engine. */
        loss: number;
    };
}

export interface MaiaEvaluation {
  value: number
  policy: { [key: string]: number }
}

export interface CandidateMove {
  uci: string;
  san: string;
  score: string;
  winrate: string;
  rank: string;
  note: string;
  rawEval?: number;
}
